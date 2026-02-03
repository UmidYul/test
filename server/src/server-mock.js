
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

import pool from './db.js';


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Статика фронта
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, '../../client/dist')));

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`🌐 ${req.method} ${req.url}`);
  next();
});

// ...existing code...

// Все остальные маршруты — отдаём index.html фронта
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next();
  }
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

// ...in-memory массивы больше не используются...

// Helper function to generate OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// OTP expiry time in minutes
const OTP_EXPIRY_MINUTES = 15;

// Auth middleware
const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  console.log('🔐 Auth middleware:', {
    hasToken: !!token,
    token: token ? token.substring(0, 20) + '...' : 'none'
  });

  if (!token) {
    console.log('❌ No token provided');
    return res.status(401).json({ message: 'No authentication token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-super-secret-jwt-key');
    req.userId = decoded.userId;
    req.userRole = decoded.role;
    console.log('✅ Token valid:', { userId: req.userId, role: req.userRole });
    next();
  } catch (error) {
    console.log('❌ Token invalid:', error.message);
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Routes

// Login (PostgreSQL)
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const { rows } = await pool.query(`SELECT u.*, s.name as school_name, s.id as school_id 
                                       FROM users u 
                                       LEFT JOIN schools s ON u.school_id = s.id 
                                       WHERE u.username = $1 AND u.role = $2`, [username, role]);
    const user = rows[0];
    if (!user) {
      console.log(`[LOGIN] Failed login for ${username} (user not found)`);
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log(`[LOGIN] Failed login for ${username} (wrong password)`);
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET || 'your-super-secret-jwt-key',
      { expiresIn: '7d' }
    );
    console.log(`[LOGIN] Success for ${username} (role: ${user.role})`);
    res.json({
      token,
      requirePasswordChange: user.require_password_change || false,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        firstName: user.first_name,
        lastName: user.last_name,
        schoolId: user.school_id,
        schoolName: user.school_name,
        grade: user.grade,
        isTemporaryPassword: user.is_temporary_password || false
      }
    });
  } catch (error) {
    console.error('[LOGIN] Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Change password
app.post('/api/auth/change-password', auth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    // Получаем пользователя из БД
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [req.userId]);
    const user = rows[0];
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }
    const hashed = await bcrypt.hash(newPassword, 10);
    await pool.query(
      'UPDATE users SET password = $1, is_temporary_password = false, require_password_change = false, updated_at = NOW() WHERE id = $2',
      [hashed, req.userId]
    );
    console.log(`✅ Password changed for user: ${user.username}`);
    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all subjects (PostgreSQL)
app.get('/api/subjects', auth, async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT id, name_ru as "nameRu", name_uz as "nameUz", questions_count as "questionsCount" FROM subjects ORDER BY id');
    console.log(`[SUBJECTS] Fetched all subjects (${rows.length})`);
    res.json(rows);
  } catch (error) {
    console.error('[SUBJECTS] Error fetching:', error);
    res.status(500).json({ error: 'Ошибка при загрузке предметов' });
  }
});

// Create subject (PostgreSQL, admin only)
app.post('/api/subjects', auth, async (req, res) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }
  const { nameRu, nameUz, questionsCount } = req.body || {};
  if (!nameRu || !nameUz) {
    return res.status(400).json({ message: 'Заполните обязательные поля' });
  }
  try {
    const exists = await pool.query('SELECT 1 FROM subjects WHERE LOWER(name_ru) = LOWER($1) OR LOWER(name_uz) = LOWER($2)', [nameRu, nameUz]);
    if (exists.rowCount > 0) {
      return res.status(400).json({ message: 'Предмет уже существует' });
    }
    const subjectId = crypto.randomUUID();
    const result = await pool.query(
      'INSERT INTO subjects (id, name_ru, name_uz, questions_count) VALUES ($1, $2, $3, $4) RETURNING id::text, name_ru as "nameRu", name_uz as "nameUz", questions_count as "questionsCount"',
      [subjectId, nameRu.trim(), nameUz.trim(), Number.isFinite(Number(questionsCount)) ? Number(questionsCount) : 0]
    );
    console.log(`[SUBJECTS] Created subject: ${nameRu} / ${nameUz}`);
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('[SUBJECTS] Error creating:', error);
    res.status(500).json({ error: 'Ошибка при создании предмета' });
  }
});

// Update subject (PostgreSQL, admin only)
app.put('/api/subjects/:subjectId', auth, async (req, res) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }
  const { subjectId } = req.params;
  const { nameRu, nameUz, questionsCount } = req.body || {};
  if (!nameRu || !nameUz) {
    return res.status(400).json({ message: 'Заполните обязательные поля' });
  }
  try {
    const result = await pool.query(
      'UPDATE subjects SET name_ru = $1, name_uz = $2, questions_count = $3 WHERE id = $4 RETURNING id::text, name_ru as "nameRu", name_uz as "nameUz", questions_count as "questionsCount"',
      [nameRu.trim(), nameUz.trim(), Number.isFinite(Number(questionsCount)) ? Number(questionsCount) : 0, subjectId]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    console.log(`[SUBJECTS] Updated subject id=${subjectId}`);
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('[SUBJECTS] Error updating:', error);
    res.status(500).json({ error: 'Ошибка при обновлении предмета' });
  }
});

// Delete subject (PostgreSQL, admin only)
app.delete('/api/subjects/:subjectId', auth, async (req, res) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }
  const { subjectId } = req.params;
  try {
    // TODO: каскадное удаление модулей и тестов (или ON DELETE CASCADE в БД)
    const result = await pool.query('DELETE FROM subjects WHERE id = $1 RETURNING *', [subjectId]);
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    console.log(`[SUBJECTS] Deleted subject id=${subjectId}`);
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('[SUBJECTS] Error deleting:', error);
    res.status(500).json({ error: 'Ошибка при удалении предмета' });
  }
});

// Get all users (admin only)
app.get('/api/users', auth, async (req, res) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }
  try {
    const { role } = req.query;
    let query = `SELECT u.id, u.username, u.role, u.first_name as "firstName", u.last_name as "lastName",
                         u.is_temporary_password as "isTemporaryPassword",
                         u.require_password_change as "requirePasswordChange", u.created_at, u.updated_at,
                         s.name as "schoolName", s.id as "schoolId",
                         c.id as "classId", c.grade, c.name as "className",
                         t.first_name as "teacherFirstName", t.last_name as "teacherLastName"
                  FROM users u
                  LEFT JOIN schools s ON u.school_id = s.id
                  LEFT JOIN classes c ON u.class_id = c.id
                  LEFT JOIN users t ON c.teacher_id = t.id`;
    const params = [];
    if (role) {
      query += ' WHERE u.role = $1';
      params.push(role);
    }
    const { rows } = await pool.query(query, params);
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('❌ Ошибка при загрузке пользователей:', error);
    res.status(500).json({ success: false, error: error && error.message ? error.message : 'Ошибка при загрузке пользователей' });
  }
});

// Get current user profile (PostgreSQL)
app.get('/api/users/me', auth, async (req, res) => {
  try {
    console.log(`[PROFILE] GET /api/users/me - User ID: ${req.userId}`);
    const { rows } = await pool.query(`SELECT u.id, u.username, u.role, u.first_name, u.last_name,
                                           s.name as "schoolName", s.id as "schoolId",
                                           c.id as "classId", c.grade, c.name as "className",
                                           t.first_name as "teacherFirstName", t.last_name as "teacherLastName"
                                    FROM users u
                                    LEFT JOIN schools s ON u.school_id = s.id
                                    LEFT JOIN classes c ON u.class_id = c.id
                                    LEFT JOIN users t ON c.teacher_id = t.id
                                    WHERE u.id = $1`, [req.userId]);
    const user = rows[0];
    if (!user) {
      return res.status(404).json({ success: false, error: 'Пользователь не найден' });
    }
    res.json({ success: true, data: user });
  } catch (error) {
    console.error('[PROFILE] Error:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке профиля' });
  }
});

// Get single user (admin only)
app.get('/api/users/:userId', auth, (req, res) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }

  const user = users.find(u => u._id === req.params.userId);
  if (!user) {
    return res.status(404).json({ success: false, error: 'User not found' });
  }

  const { password, ...userWithoutPassword } = user;
  res.json({ success: true, data: userWithoutPassword });
});

// Get student profile for teacher (own classes only)
app.get('/api/teachers/students/:studentId', auth, (req, res) => {
  try {
    const { studentId } = req.params;

    if (req.userRole !== 'admin' && req.userRole !== 'teacher') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }

    const student = users.find(u => u._id === studentId && u.role === 'student');
    if (!student) {
      return res.status(404).json({ success: false, error: 'Ученик не найден' });
    }

    if (req.userRole === 'teacher' && !canTeacherAccessStudent(req.userId, student)) {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }

    const { password, ...studentProfile } = student;
    res.json({ success: true, data: studentProfile });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка при загрузке профиля ученика' });
  }
});

// Register new user (PostgreSQL, admin only)
app.post('/api/users/register', async (req, res) => {
  try {
    const body = req.body || {};
    const { username, role, firstName, lastName, school, classId } = body;
    if (!username || !role || !firstName || !lastName) {
      return res.status(400).json({ success: false, error: 'Заполните обязательные поля' });
    }

    // Для учеников обязательно указывать класс
    if (role === 'student' && !classId) {
      return res.status(400).json({ success: false, error: 'Для ученика необходимо выбрать класс' });
    }

    // Check if user exists
    const exists = await pool.query('SELECT 1 FROM users WHERE username = $1', [username]);
    if (exists.rowCount > 0) {
      return res.status(400).json({ success: false, error: 'Пользователь уже существует' });
    }

    // Генерируем временный пароль (OTP)
    const otp = generateOTP();
    const otpExpiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);
    const hashedOTP = await bcrypt.hash(otp, 10);
    const userId = crypto.randomUUID();

    const result = await pool.query(
      `INSERT INTO users (id, username, password, role, first_name, last_name, school_id, class_id, is_temporary_password, require_password_change)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, true, true) RETURNING id::text, username, role, first_name, last_name, school_id, class_id`,
      [userId, username, hashedOTP, role, firstName, lastName, null, classId || null]
    );

    // Получаем информацию о классе, если указан classId
    let classInfo = null;
    if (classId) {
      const classResult = await pool.query(`
        SELECT c.id, c.grade, c.name, c.teacher_id as "teacherId",
               u.first_name as "teacherFirstName", u.last_name as "teacherLastName"
        FROM classes c
        LEFT JOIN users u ON c.teacher_id = u.id
        WHERE c.id = $1
      `, [classId]);
      if (classResult.rows.length > 0) {
        classInfo = classResult.rows[0];
      }
    }

    const user = result.rows[0];
    console.log(`[REGISTER] User created: ${username} (${role})`);

    res.status(201).json({
      success: true,
      data: {
        ...user,
        class: classInfo, // Добавляем информацию о классе
        otp: otp, // Return OTP to admin
        otpExpiresAt: otpExpiresAt.toISOString()
      }
    });
  } catch (error) {
    console.error('[REGISTER] Error:', error);
    res.status(500).json({ success: false, error: 'Ошибка при создании пользователя' });
  }
});

// Update user (admin only)
app.put('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { username, firstName, lastName, role, school, grade, subjects } = req.body;

    const userIndex = users.findIndex(u => u._id === id);

    if (userIndex === -1) {
      return res.status(404).json({ success: false, error: 'Пользователь не найден' });
    }

    // Check if new username already exists (if username changed)
    if (users[userIndex].username !== username) {
      const existingUser = users.find(u => u.username === username && u._id !== id);
      if (existingUser) {
        return res.status(400).json({ success: false, error: 'Пользователь с таким логином уже существует' });
      }
    }

    users[userIndex].username = username;
    users[userIndex].firstName = firstName;
    users[userIndex].lastName = lastName;
    users[userIndex].role = role;

    // Update role-specific fields
    if (school) {
      users[userIndex].school = school;
    }
    if (role === 'student' && grade) {
      users[userIndex].grade = grade;
      // Remove subjects if changing to student
      delete users[userIndex].subjects;
    } else if (role === 'teacher' && subjects) {
      users[userIndex].subjects = subjects;
      // Remove grade if changing to teacher
      delete users[userIndex].grade;
    } else if (role === 'admin') {
      // Remove both grade and subjects for admin
      delete users[userIndex].grade;
      delete users[userIndex].subjects;
    }

    const { password: _, ...userWithoutPassword } = users[userIndex];
    res.json({ success: true, data: userWithoutPassword });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка при обновлении пользователя' });
  }
});

// Delete user (admin only)
app.delete('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const userIndex = users.findIndex(u => u._id === id);

    if (userIndex === -1) {
      return res.status(404).json({ success: false, error: 'Пользователь не найден' });
    }

    const deletedUser = users.splice(userIndex, 1)[0];

    const { password: _, ...userWithoutPassword } = deletedUser;
    res.json({ success: true, data: userWithoutPassword, message: 'Пользователь удален' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка при удалении пользователя' });
  }
});

// Reset user password (admin only)
app.post('/api/users/:id/reset-password', auth, async (req, res) => {
  try {
    if (req.userRole !== 'admin') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }
    const { id } = req.params;
    // Проверяем, что пользователь существует
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    const user = rows[0];
    if (!user) {
      return res.status(404).json({ success: false, error: 'Пользователь не найден' });
    }
    // Генерируем OTP
    const otpCode = generateOTP();
    const otpExpiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);
    const hashedPassword = await bcrypt.hash(otpCode, 10);
    // Обновляем пароль и флаги
    await pool.query(
      'UPDATE users SET password = $1, is_temporary_password = true, require_password_change = true, updated_at = NOW() WHERE id = $2',
      [hashedPassword, id]
    );
    // Можно добавить запись в отдельную таблицу otp_codes, если потребуется хранить историю
    console.log(`🔑 Password reset for user: ${user.username}, OTP: ${otpCode}`);
    res.json({
      success: true,
      message: 'Пароль успешно сброшен',
      otp: otpCode,
      otpExpiresAt: otpExpiresAt.toISOString()
    });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ success: false, error: 'Ошибка при сбросе пароля' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Mock server is running (no MongoDB required)' });
});

// ========================================
// MODULES API
// ========================================

// ...удалён дублирующий import pool...

// Get all modules for a subject
app.get('/api/subjects/:subjectId/modules', auth, async (req, res) => {
  try {
    const { subjectId } = req.params;
    // Проверка прав доступа для teacher (оставить после полной миграции users)
    // const user = ...
    // if (user?.role === 'teacher' && !teacherHasSubject(user, subjectId)) {
    //   return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    // }
    console.log(`📚 Загрузка модулей для предмета: ${subjectId}`);
    const { rows } = await pool.query('SELECT id, subject_id as "subjectId", name_ru as "nameRu", name_uz as "nameUz", description_ru as "descriptionRu", description_uz as "descriptionUz", created_by as "createdBy", created_at FROM modules WHERE subject_id = $1', [subjectId]);
    console.log(`✅ Найдено модулей: ${rows.length}`);
    if (rows.length > 0) {
      console.log('📝 Модули:', rows.map(m => m.name_ru).join(', '));
    }
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('❌ Ошибка загрузки модулей:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке модулей' });
  }
});

// Create module
app.post('/api/subjects/:subjectId/modules', auth, async (req, res) => {
  try {
    if (req.userRole !== 'teacher' && req.userRole !== 'admin') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }
    const { subjectId } = req.params;
    const { nameRu, nameUz, descriptionRu, descriptionUz } = req.body;
    // const user = ...
    // if (user?.role === 'teacher' && !teacherHasSubject(user, subjectId)) {
    //   return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    // }
    console.log(`➕ Создание нового модуля для предмета: ${subjectId}`);
    console.log(`📝 Название: ${nameRu} / ${nameUz}`);
    const moduleId = crypto.randomUUID();
    const result = await pool.query(
      'INSERT INTO modules (id, subject_id, name_ru, name_uz, description_ru, description_uz, created_by, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW()) RETURNING id::text, subject_id as "subjectId", name_ru as "nameRu", name_uz as "nameUz", description_ru as "descriptionRu", description_uz as "descriptionUz", created_by as "createdBy", created_at',
      [moduleId, subjectId, nameRu, nameUz, descriptionRu, descriptionUz, req.userId]
    );
    const newModule = result.rows[0];
    console.log(`✅ Модуль создан с ID: ${newModule.id}`);
    res.status(201).json({ success: true, data: newModule });
  } catch (error) {
    console.error('❌ Ошибка создания модуля:', error);
    res.status(500).json({ success: false, error: 'Ошибка при создании модуля' });
  }
});

// Update module
app.put('/api/modules/:moduleId', auth, async (req, res) => {
  try {
    if (req.userRole !== 'teacher' && req.userRole !== 'admin') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }
    const { moduleId } = req.params;
    const { nameRu, nameUz, descriptionRu, descriptionUz } = req.body;
    const result = await pool.query(
      'UPDATE modules SET name_ru = COALESCE($1, name_ru), name_uz = COALESCE($2, name_uz), description_ru = COALESCE($3, description_ru), description_uz = COALESCE($4, description_uz) WHERE id = $5 RETURNING id::text, subject_id as "subjectId", name_ru as "nameRu", name_uz as "nameUz", description_ru as "descriptionRu", description_uz as "descriptionUz", created_by as "createdBy", created_at',
      [nameRu, nameUz, descriptionRu, descriptionUz, moduleId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Модуль не найден' });
    }
    console.log(`✅ Модуль обновлен: ${moduleId}`);
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('❌ Ошибка обновления модуля:', error);
    res.status(500).json({ success: false, error: 'Ошибка при обновлении модуля' });
  }
});

// Delete module
app.delete('/api/modules/:moduleId', auth, async (req, res) => {
  try {
    if (req.userRole !== 'teacher' && req.userRole !== 'admin') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }
    const { moduleId } = req.params;
    // Каскадное удаление тестов и результатов реализовать отдельно при необходимости
    const result = await pool.query('DELETE FROM modules WHERE id = $1 RETURNING *', [moduleId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Модуль не найден' });
    }
    console.log(`🗑️ Модуль удален: ${moduleId}`);
    res.json({ success: true, message: 'Модуль успешно удален' });
  } catch (error) {
    console.error('❌ Ошибка при удалении модуля:', error);
    res.status(500).json({ success: false, error: 'Ошибка при удалении модуля' });
  }
});

// ========================================
// TESTS API
// ========================================

// Get module by ID
app.get('/api/modules/:moduleId', auth, (req, res) => {
  try {
    const { moduleId } = req.params;
    const module = modules.find(m => m._id === moduleId);

    if (!module) {
      return res.status(404).json({ success: false, error: 'Модуль не найден' });
    }

    res.json({ success: true, data: module });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка при загрузке модуля' });
  }
});

// Get all tests for a module
app.get('/api/modules/:moduleId/tests', auth, async (req, res) => {
  try {
    const { moduleId } = req.params;
    // const user = ...
    // const moduleItem = ...
    // if (user?.role === 'teacher' && moduleItem && !teacherHasSubject(user, moduleItem.subjectId)) {
    //   return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    // }
    console.log(`🔍 Получение тестов для модуля: ${moduleId}`);
    const { rows } = await pool.query('SELECT id, module_id as "moduleId", name_ru as "nameRu", name_uz as "nameUz", duration, time_limit as "timeLimit", max_score as "maxScore", status, assigned_grades as "assignedGrades", questions, created_by as "createdBy", jsonb_array_length(questions) as "questionsCount" FROM tests WHERE module_id = $1', [moduleId]);
    console.log(`✅ Найдено ${rows.length} тестов для модуля ${moduleId}`);
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error(`❌ Ошибка загрузки тестов: ${error.message}`);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке тестов' });
  }
});

// Get all tests (for admin dashboard)
app.get('/api/tests', auth, async (req, res) => {
  try {
    console.log(`🔍 Получение всех тестов (admin)`);
    const { rows } = await pool.query('SELECT id, module_id as "moduleId", name_ru as "nameRu", name_uz as "nameUz", duration, time_limit as "timeLimit", max_score as "maxScore", status, assigned_grades as "assignedGrades", questions, created_by as "createdBy", jsonb_array_length(questions) as "questionsCount" FROM tests');
    console.log(`✅ Всего тестов: ${rows.length}`);
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error(`❌ Ошибка загрузки тестов: ${error.message}`);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке тестов' });
  }
});

// Get single test with questions (for teacher - original order)
app.get('/api/tests/:testId', auth, async (req, res) => {
  try {
    const { testId } = req.params;
    const { rows } = await pool.query('SELECT id, module_id as "moduleId", name_ru as "nameRu", name_uz as "nameUz", duration, time_limit as "timeLimit", max_score as "maxScore", status, assigned_grades as "assignedGrades", questions, created_by as "createdBy", jsonb_array_length(questions) as "questionsCount" FROM tests WHERE id = $1', [testId]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Тест не найден' });
    }
    res.json({ success: true, data: rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка при загрузке теста' });
  }
});

// Get randomized test for student
app.get('/api/tests/:testId/start', auth, (req, res) => {
  try {
    const { testId } = req.params;
    const test = tests.find(t => t._id === testId);

    if (!test) {
      return res.status(404).json({ success: false, error: 'Тест не найден' });
    }

    if (test.status !== 'published') {
      return res.status(403).json({ success: false, error: 'Тест еще не опубликован' });
    }

    // Shuffle questions
    const shuffledQuestions = [...test.questions]
      .map(q => ({
        ...q,
        // Shuffle answers while keeping track of correct ones
        answers: [...q.answers]
          .map((a, idx) => ({ ...a, originalIndex: idx }))
          .sort(() => Math.random() - 0.5)
      }))
      .sort(() => Math.random() - 0.5);

    const randomizedTest = {
      ...test,
      questions: shuffledQuestions
    };

    res.json({ success: true, data: randomizedTest });
  } catch (error) {
    console.error('Error randomizing test:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке теста' });
  }
});

// Create test
app.post('/api/modules/:moduleId/tests', auth, async (req, res) => {
  try {
    if (req.userRole !== 'teacher' && req.userRole !== 'admin') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }
    const { moduleId } = req.params;
    const { nameRu, nameUz, duration, timeLimit, maxScore, status, questions, assignedGrades } = req.body;
    // const user = ...
    // const moduleItem = ...
    // if (user?.role === 'teacher' && moduleItem && !teacherHasSubject(user, moduleItem.subjectId)) {
    //   return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    // }
    // Проверка: в модуле может быть только один тест
    const { rows: existing } = await pool.query('SELECT id FROM tests WHERE module_id = $1', [moduleId]);
    if (existing.length > 0) {
      return res.status(400).json({ success: false, error: 'В модуле уже есть тест' });
    }
    console.log(`➕ Создание теста в модуле ${moduleId}: ${nameRu}`);
    const testId = crypto.randomUUID();
    const result = await pool.query(
      'INSERT INTO tests (id, module_id, name_ru, name_uz, duration, time_limit, max_score, status, questions, assigned_grades, created_by, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW(), NOW()) RETURNING id::text, module_id as "moduleId", name_ru as "nameRu", name_uz as "nameUz", duration, time_limit as "timeLimit", max_score as "maxScore", status, assigned_grades as "assignedGrades", questions, created_by as "createdBy", jsonb_array_length(questions) as "questionsCount"',
      [testId, moduleId, nameRu, nameUz, duration, timeLimit, maxScore, status || 'draft', JSON.stringify(questions || []), assignedGrades || [], req.userId]
    );
    const newTest = result.rows[0];
    console.log(`✅ Тест создан с ID: ${newTest.id}`);
    res.status(201).json({ success: true, data: newTest });
  } catch (error) {
    console.error('❌ Ошибка создания теста:', error);
    res.status(500).json({ success: false, error: 'Ошибка при создании теста' });
  }
});

// Update test
app.put('/api/tests/:testId', auth, async (req, res) => {
  try {
    if (req.userRole !== 'teacher' && req.userRole !== 'admin') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }
    const { testId } = req.params;
    const updates = req.body;
    // Обновляем только разрешённые поля
    const fields = ['nameRu', 'nameUz', 'duration', 'timeLimit', 'maxScore', 'status', 'questions', 'assignedGrades'];
    const dbFields = {
      nameRu: 'name_ru',
      nameUz: 'name_uz',
      duration: 'duration',
      timeLimit: 'time_limit',
      maxScore: 'max_score',
      status: 'status',
      questions: 'questions',
      assignedGrades: 'assigned_grades'
    };
    const setParts = [];
    const values = [];
    let idx = 1;
    for (const key of fields) {
      if (updates[key] !== undefined) {
        setParts.push(`${dbFields[key]} = $${idx}`);
        if (key === 'questions') {
          values.push(JSON.stringify(updates[key]));
        } else {
          values.push(updates[key]);
        }
        idx++;
      }
    }
    setParts.push(`updated_at = NOW()`);
    const query = `UPDATE tests SET ${setParts.join(', ')} WHERE id = $${idx} RETURNING id::text, module_id as "moduleId", name_ru as "nameRu", name_uz as "nameUz", duration, time_limit as "timeLimit", max_score as "maxScore", status, assigned_grades as "assignedGrades", questions, created_by as "createdBy", jsonb_array_length(questions) as "questionsCount"`;
    values.push(testId);
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Тест не найден' });
    }
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка при обновлении теста' });
  }
});

// Delete test
app.delete('/api/tests/:testId', auth, async (req, res) => {
  try {
    if (req.userRole !== 'teacher' && req.userRole !== 'admin') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }
    const { testId } = req.params;
    const result = await pool.query('DELETE FROM tests WHERE id = $1 RETURNING *', [testId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Тест не найден' });
    }
    res.json({ success: true, message: 'Тест удален' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка при удалении теста' });
  }
});

// ========================================
// TEST RESULTS API
// ========================================

// Get test results for student
app.get('/api/tests/:testId/results', auth, async (req, res) => {
  try {
    const { testId } = req.params;
    const { rows } = await pool.query('SELECT * FROM test_results WHERE test_id = $1 AND user_id = $2 ORDER BY completed_at DESC', [testId, req.userId]);
    console.log(`📊 Найдено результатов: ${rows.length} для теста ${testId} пользователя ${req.userId}`);
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('❌ Ошибка при загрузке результатов:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке результатов' });
  }
});

// Save test progress
app.post('/api/tests/:testId/progress', auth, (req, res) => {
  try {
    const { testId } = req.params;
    const { currentQuestion, answers } = req.body;

    const progressIndex = testProgress.findIndex(p => p.testId === testId && p.userId === req.userId);

    const progress = {
      testId,
      userId: req.userId,
      currentQuestion,
      answers,
      savedAt: new Date().toISOString()
    };

    if (progressIndex !== -1) {
      testProgress[progressIndex] = progress;
    } else {
      testProgress.push(progress);
    }

    res.json({ success: true, data: progress });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка при сохранении прогресса' });
  }
});

// Get test progress
app.get('/api/tests/:testId/progress', auth, (req, res) => {
  try {
    const { testId } = req.params;
    const progress = testProgress.find(p => p.testId === testId && p.userId === req.userId);
    res.json({ success: true, data: progress || null });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка при загрузке прогресса' });
  }
});

// Submit test results
app.post('/api/tests/:testId/submit', auth, async (req, res) => {
  try {
    const { testId } = req.params;
    const { answers, timeTaken } = req.body;
    console.log(`📝 Сдача теста ${testId} пользователем ${req.userId}`);
    // Получаем тест и вопросы
    const { rows: testRows } = await pool.query('SELECT * FROM tests WHERE id = $1', [testId]);
    if (testRows.length === 0) {
      return res.status(404).json({ success: false, error: 'Тест не найден' });
    }
    const test = testRows[0];
    const questions = test.questions || [];
    let correctCount = 0;
    const questionResults = questions.map((question, idx) => {
      const userAnswerIdx = answers[idx];
      const isCorrect = userAnswerIdx !== undefined && question.answers && question.answers[userAnswerIdx]?.isCorrect;
      if (isCorrect) correctCount++;
      return {
        questionIndex: idx,
        questionRu: question.questionRu,
        questionUz: question.questionUz,
        userAnswerIndex: userAnswerIdx,
        userAnswerText: userAnswerIdx !== undefined && question.answers ? question.answers[userAnswerIdx] : null,
        correctAnswerIndex: question.answers ? question.answers.findIndex(a => a.isCorrect) : null,
        correctAnswerText: question.answers ? question.answers.find(a => a.isCorrect) : null,
        isCorrect
      };
    });
    const score = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;
    // Получаем module и subjectId
    const { rows: moduleRows } = await pool.query('SELECT * FROM modules WHERE id = $1', [test.module_id]);
    const module = moduleRows[0];
    const subjectId = module ? module.subject_id : null;
    // Сохраняем результат
    const resultId = crypto.randomUUID();
    const insertResult = await pool.query(
      'INSERT INTO test_results (id, user_id, test_id, score, correct_count, total_count, time_taken, question_results, completed_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW()) RETURNING id::text, user_id, test_id, score, correct_count, total_count, time_taken, question_results, completed_at',
      [resultId, req.userId, testId, score, correctCount, questions.length, timeTaken, JSON.stringify(questionResults)]
    );
    const result = insertResult.rows[0];
    console.log(`✅ Результат теста сохранён: ${result.id} - Score: ${score}`);
    res.json({ success: true, data: result });
  } catch (error) {
    console.error('❌ Ошибка при сохранении результата:', error);
    res.status(500).json({ success: false, error: 'Ошибка при сохранении результата' });
  }
});

// Get all test results for student
app.get('/api/test-results', auth, async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM test_results WHERE user_id = $1 ORDER BY completed_at DESC', [req.userId]);
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка при загрузке результатов' });
  }
});

// Get specific test result details
app.get('/api/test-results/:resultId', auth, async (req, res) => {
  try {
    const { resultId } = req.params;
    const { rows } = await pool.query('SELECT * FROM test_results WHERE id = $1 AND user_id = $2', [resultId, req.userId]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Результат не найден' });
    }
    res.json({ success: true, data: rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка при загрузке результата' });
  }
});

// ========================================
// CLASSES/GRADES API
// ========================================

// Get teacher analytics/statistics
app.get('/api/teacher/analytics', auth, (req, res) => {
  try {
    if (req.userRole !== 'teacher') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }

    const teacher = users.find(u => u._id === req.userId);
    if (!teacher) {
      return res.status(404).json({ success: false, error: 'Учитель не найден' });
    }

    // Get teacher's modules and tests
    const teacherModules = modules.filter(m => m.createdBy === req.userId);
    const teacherTests = tests.filter(t => {
      const module = modules.find(m => m._id === t.moduleId);
      return module && module.createdBy === req.userId;
    });

    // Get all results for teacher's tests
    const teacherTestIds = teacherTests.map(t => t._id);
    const allResults = testResults.filter(r => teacherTestIds.includes(r.testId));

    // Calculate statistics by class
    const statsByClass = {};
    classes.forEach(cls => {
      const gradeStudents = users.filter(u => u.role === 'student' && u.grade === cls.grade);
      const gradeResults = allResults.filter(r => {
        const student = users.find(u => u._id === r.userId);
        return student && student.grade === cls.grade;
      });

      statsByClass[cls.grade] = {
        grade: cls.grade,
        studentCount: gradeStudents.length,
        completedTests: gradeResults.length,
        averageScore: gradeResults.length > 0
          ? Math.round(gradeResults.reduce((sum, r) => sum + r.score, 0) / gradeResults.length)
          : 0
      };
    });

    // Calculate statistics by subject
    const statsBySubject = {};
    teacherModules.forEach(module => {
      const subject = subjects.find(s => s._id === module.subjectId);
      if (!subject) return;

      const subjectTests = teacherTests.filter(t => t.moduleId === module._id);
      const subjectTestIds = subjectTests.map(t => t._id);
      const subjectResults = allResults.filter(r => subjectTestIds.includes(r.testId));

      const subjectName = subject.nameRu;
      if (!statsBySubject[subjectName]) {
        statsBySubject[subjectName] = {
          subject: subjectName,
          testsCount: 0,
          completedCount: 0,
          averageScore: 0,
          totalScores: []
        };
      }

      statsBySubject[subjectName].testsCount += subjectTests.length;
      statsBySubject[subjectName].completedCount += subjectResults.length;
      statsBySubject[subjectName].totalScores.push(...subjectResults.map(r => r.score));
    });

    // Calculate average score for each subject
    Object.keys(statsBySubject).forEach(subjectName => {
      const scores = statsBySubject[subjectName].totalScores;
      statsBySubject[subjectName].averageScore = scores.length > 0
        ? Math.round(scores.reduce((sum, s) => sum + s, 0) / scores.length)
        : 0;
      delete statsBySubject[subjectName].totalScores;
    });

    // Recent test completions (last 10)
    const recentCompletions = allResults
      .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))
      .slice(0, 10)
      .map(result => {
        const student = users.find(u => u._id === result.userId);
        const test = tests.find(t => t._id === result.testId);
        const module = test ? modules.find(m => m._id === test.moduleId) : null;
        const subject = module ? subjects.find(s => s._id === module.subjectId) : null;

        return {
          studentName: student ? `${student.firstName} ${student.lastName}` : 'Unknown',
          studentGrade: student ? student.grade : 'N/A',
          testName: test ? test.nameRu : 'Unknown',
          subjectName: subject ? subject.nameRu : 'Unknown',
          score: result.score,
          submittedAt: result.submittedAt
        };
      });

    // Top performing students
    const studentScores = {};
    allResults.forEach(result => {
      if (!studentScores[result.userId]) {
        studentScores[result.userId] = { scores: [], count: 0 };
      }
      studentScores[result.userId].scores.push(result.score);
      studentScores[result.userId].count++;
    });

    const topStudents = Object.entries(studentScores)
      .map(([userId, data]) => {
        const student = users.find(u => u._id === userId);
        const avgScore = Math.round(data.scores.reduce((sum, s) => sum + s, 0) / data.count);
        return {
          name: student ? `${student.firstName} ${student.lastName}` : 'Unknown',
          grade: student ? student.grade : 'N/A',
          averageScore: avgScore,
          testsCompleted: data.count
        };
      })
      .sort((a, b) => b.averageScore - a.averageScore)
      .slice(0, 5);

    res.json({
      success: true,
      data: {
        totalModules: teacherModules.length,
        totalTests: teacherTests.length,
        totalCompletions: allResults.length,
        averageScore: allResults.length > 0
          ? Math.round(allResults.reduce((sum, r) => sum + r.score, 0) / allResults.length)
          : 0,
        statsByClass: Object.values(statsByClass),
        statsBySubject: Object.values(statsBySubject),
        recentCompletions,
        topStudents
      }
    });
  } catch (error) {
    console.error('Error loading teacher analytics:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке аналитики' });
  }
});

// Teacher module difficulty analytics (options)
app.get('/api/teacher/analytics/subject-modules/options', auth, (req, res) => {
  try {
    if (req.userRole !== 'teacher') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }

    const teacher = users.find(u => u._id === req.userId);
    if (!teacher) {
      return res.status(404).json({ success: false, error: 'Учитель не найден' });
    }

    const teacherSubjects = resolveTeacherSubjects(teacher);
    const teacherClasses = classes.filter(cls => cls.teacherId === teacher._id);
    const gradeSet = new Set(teacherClasses.map(cls => String(cls.grade)).filter(Boolean));

    res.json({
      success: true,
      data: {
        subjects: teacherSubjects,
        classes: teacherClasses,
        grades: Array.from(gradeSet).sort()
      }
    });
  } catch (error) {
    console.error('Error loading teacher module analytics options:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке опций аналитики' });
  }
});

// Teacher module difficulty analytics (by subject + class/parallel)
app.get('/api/teacher/analytics/subject-modules', auth, (req, res) => {
  try {
    if (req.userRole !== 'teacher') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }

    const teacher = users.find(u => u._id === req.userId);
    if (!teacher) {
      return res.status(404).json({ success: false, error: 'Учитель не найден' });
    }

    const { subjectId, grade, section } = req.query;
    if (!subjectId || !grade) {
      return res.status(400).json({ success: false, error: 'Необходимо выбрать предмет и класс' });
    }

    if (!teacherHasSubject(teacher, subjectId)) {
      return res.status(403).json({ success: false, error: 'Доступ к предмету запрещен' });
    }

    const teacherClasses = classes.filter(cls => cls.teacherId === teacher._id && String(cls.grade) === String(grade));
    if (!teacherClasses.length) {
      return res.status(403).json({ success: false, error: 'Доступ к классу запрещен' });
    }

    let allowAllSections = false;
    const allowedSections = new Set();

    teacherClasses.forEach(cls => {
      if (cls.sections?.length) {
        cls.sections.forEach(sec => allowedSections.add(sec));
      } else if (cls.name) {
        allowedSections.add(cls.name);
      } else {
        allowAllSections = true;
      }
    });

    if (section) {
      if (!allowAllSections && !allowedSections.has(section)) {
        return res.status(403).json({ success: false, error: 'Доступ к классу запрещен' });
      }
    }

    const students = users.filter(u => {
      if (u.role !== 'student') return false;
      if (String(u.grade) !== String(grade)) return false;
      if (section) return u.gradeSection === section;
      if (allowAllSections) return true;
      return allowedSections.size ? allowedSections.has(u.gradeSection) : true;
    });

    const studentIds = new Set(students.map(s => s._id));
    const subjectModules = modules.filter(m => String(m.subjectId) === String(subjectId));
    const subjectModuleIds = new Set(subjectModules.map(m => m._id));

    const relevantResults = testResults.filter(r => studentIds.has(r.userId) && subjectModuleIds.has(r.moduleId));

    const moduleStats = new Map();
    subjectModules.forEach(module => {
      moduleStats.set(module._id, {
        moduleId: module._id,
        nameRu: module.nameRu,
        nameUz: module.nameUz,
        averageScore: null,
        attempts: 0,
        studentsCount: 0
      });
    });

    const moduleStudentSet = new Map();
    relevantResults.forEach(result => {
      if (!moduleStats.has(result.moduleId)) return;
      const stat = moduleStats.get(result.moduleId);
      stat.attempts += 1;
      stat.averageScore = (stat.averageScore ?? 0) + result.score;

      if (!moduleStudentSet.has(result.moduleId)) {
        moduleStudentSet.set(result.moduleId, new Set());
      }
      moduleStudentSet.get(result.moduleId).add(result.userId);
    });

    moduleStats.forEach((stat, moduleId) => {
      if (!stat.attempts) {
        stat.averageScore = null;
        stat.studentsCount = 0;
      } else {
        stat.averageScore = Math.round((stat.averageScore / stat.attempts) * 10) / 10;
        stat.studentsCount = moduleStudentSet.get(moduleId)?.size || 0;
      }
    });

    res.json({
      success: true,
      data: {
        subjectId,
        grade: String(grade),
        section: section || null,
        studentCount: students.length,
        modules: Array.from(moduleStats.values())
      }
    });
  } catch (error) {
    console.error('Error loading teacher subject module analytics:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке аналитики' });
  }
});

// ===== CONTROL TESTS ENDPOINTS =====

// Get all control tests
app.get('/api/control-tests', auth, (req, res) => {
  try {
    const { createdBy, assignedTo } = req.query;
    let result = controlTests;

    if (createdBy) {
      result = result.filter(t => t.createdBy === createdBy);
    }
    if (assignedTo) {
      result = result.filter(t => t.assignedClasses && t.assignedClasses.includes(assignedTo));
    }

    res.json({ success: true, data: result });
  } catch (error) {
    console.error('Error fetching control tests:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке контрольных работ' });
  }
});

// Get control test by ID
app.get('/api/control-tests/:testId', auth, (req, res) => {
  try {
    const { testId } = req.params;
    const test = controlTests.find(t => t._id === testId);

    if (!test) {
      return res.status(404).json({ success: false, error: 'Контрольная работа не найдена' });
    }

    res.json({ success: true, data: test });
  } catch (error) {
    console.error('Error fetching control test:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке контрольной работы' });
  }
});

// Create control test (teacher only)
app.post('/api/control-tests', auth, (req, res) => {
  try {
    if (req.userRole !== 'teacher') {
      return res.status(403).json({ success: false, error: 'Доступно только учителям' });
    }

    const { nameRu, nameUz, descriptionRu, descriptionUz, duration, maxScore, questions, assignedClasses } = req.body;

    const newTest = {
      _id: Date.now().toString(),
      nameRu,
      nameUz,
      descriptionRu,
      descriptionUz,
      duration: duration || 30,
      maxScore: maxScore || 100,
      questions: questions || [],
      assignedClasses: assignedClasses || [], // Array of grade/section combinations
      createdBy: req.userId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    controlTests.push(newTest);
    console.log(`📋 Teacher created control test: ${newTest._id}`);
    res.status(201).json({ success: true, data: newTest });
  } catch (error) {
    console.error('Error creating control test:', error);
    res.status(500).json({ success: false, error: 'Ошибка при создании контрольной работы' });
  }
});

// Update control test (teacher only - creator)
app.put('/api/control-tests/:testId', auth, (req, res) => {
  try {
    const { testId } = req.params;
    const test = controlTests.find(t => t._id === testId);

    if (!test) {
      return res.status(404).json({ success: false, error: 'Контрольная работа не найдена' });
    }

    if (test.createdBy !== req.userId) {
      return res.status(403).json({ success: false, error: 'Вы не можете редактировать эту контрольную работу' });
    }

    const { nameRu, nameUz, descriptionRu, descriptionUz, duration, maxScore, questions, assignedClasses } = req.body;

    Object.assign(test, {
      nameRu: nameRu || test.nameRu,
      nameUz: nameUz || test.nameUz,
      descriptionRu: descriptionRu || test.descriptionRu,
      descriptionUz: descriptionUz || test.descriptionUz,
      duration: duration || test.duration,
      maxScore: maxScore || test.maxScore,
      questions: questions || test.questions,
      assignedClasses: assignedClasses || test.assignedClasses,
      updatedAt: new Date().toISOString()
    });

    console.log(`✏️ Control test updated: ${testId}`);
    res.json({ success: true, data: test });
  } catch (error) {
    console.error('Error updating control test:', error);
    res.status(500).json({ success: false, error: 'Ошибка при обновлении контрольной работы' });
  }
});

// Delete control test (teacher only - creator)
app.delete('/api/control-tests/:testId', auth, (req, res) => {
  try {
    const { testId } = req.params;
    const index = controlTests.findIndex(t => t._id === testId);

    if (index === -1) {
      return res.status(404).json({ success: false, error: 'Контрольная работа не найдена' });
    }

    if (controlTests[index].createdBy !== req.userId) {
      return res.status(403).json({ success: false, error: 'Вы не можете удалить эту контрольную работу' });
    }

    controlTests.splice(index, 1);
    console.log(`🗑️ Control test deleted: ${testId}`);
    res.json({ success: true, message: 'Контрольная работа удалена' });
  } catch (error) {
    console.error('Error deleting control test:', error);
    res.status(500).json({ success: false, error: 'Ошибка при удалении контрольной работы' });
  }
});

// Get control tests assigned to student's class
app.get('/api/student/control-tests', auth, (req, res) => {
  try {
    if (req.userRole !== 'student') {
      return res.status(403).json({ success: false, error: 'Доступно только студентам' });
    }

    const user = users.find(u => u._id === req.userId);
    if (!user || !user.grade) {
      return res.json({ success: true, data: [] });
    }

    const studentClass = `${user.grade}${user.gradeSection}`;
    const assignedTests = controlTests.filter(t =>
      t.assignedClasses && t.assignedClasses.some(cls => cls === user.grade || cls === studentClass)
    );

    res.json({ success: true, data: assignedTests });
  } catch (error) {
    console.error('Error fetching student control tests:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке контрольных работ' });
  }
});

// Submit control test result
app.post('/api/control-tests/:testId/submit', auth, (req, res) => {
  try {
    const { testId } = req.params;
    const { answers, timeTaken } = req.body;

    const test = controlTests.find(t => t._id === testId);
    if (!test) {
      return res.status(404).json({ success: false, error: 'Контрольная работа не найдена' });
    }

    // Calculate score
    let correctCount = 0;
    const questionResults = [];

    if (test.questions && Array.isArray(answers)) {
      test.questions.forEach((question, index) => {
        const selectedAnswerIndex = answers[index];
        const isCorrect = selectedAnswerIndex !== undefined &&
          question.answers[selectedAnswerIndex] &&
          question.answers[selectedAnswerIndex].isCorrect;

        if (isCorrect) correctCount++;

        questionResults.push({
          questionIndex: index,
          selectedAnswer: selectedAnswerIndex,
          isCorrect: isCorrect
        });
      });
    }

    const score = Math.round((correctCount / (test.questions?.length || 1)) * (test.maxScore || 100));

    const result = {
      _id: Date.now().toString(),
      userId: req.userId,
      testId: testId,
      testName: test.nameRu,
      score: score,
      correctCount: correctCount,
      totalCount: test.questions?.length || 0,
      timeTaken: timeTaken || 0,
      questionResults: questionResults,
      completedAt: new Date().toISOString(),
      teacherId: test.createdBy
    };

    controlTestResults.push(result);
    console.log(`📊 Control test result submitted: ${result._id}`);

    res.status(201).json({
      success: true,
      data: result,
      message: 'Контрольная работа отправлена'
    });
  } catch (error) {
    console.error('Error submitting control test:', error);
    res.status(500).json({ success: false, error: 'Ошибка при отправке результатов' });
  }
});

// Get control test results (for teacher - their tests)
app.get('/api/control-tests/:testId/results', auth, (req, res) => {
  try {
    const { testId } = req.params;
    const test = controlTests.find(t => t._id === testId);

    if (!test) {
      return res.status(404).json({ success: false, error: 'Контрольная работа не найдена' });
    }

    if (test.createdBy !== req.userId && req.userRole !== 'admin') {
      return res.status(403).json({ success: false, error: 'Доступно только учителю и администратору' });
    }

    const results = controlTestResults.filter(r => r.testId === testId);
    const enrichedResults = results.map(result => {
      const student = users.find(u => u._id === result.userId);
      return {
        ...result,
        studentName: student ? `${student.firstName} ${student.lastName}` : 'Unknown',
        studentGrade: student ? `${student.grade}${student.gradeSection}` : 'Unknown'
      };
    });

    res.json({ success: true, data: enrichedResults });
  } catch (error) {
    console.error('Error fetching control test results:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке результатов' });
  }
});

// Get all control test results for logged-in teacher
app.get('/api/teacher/control-tests/results', auth, (req, res) => {
  try {
    if (req.userRole !== 'teacher') {
      return res.status(403).json({ success: false, error: 'Доступно только учителям' });
    }

    // Get all control tests created by this teacher
    const teacherTests = controlTests.filter(t => t.createdBy === req.userId);
    const testIds = teacherTests.map(t => t._id);

    // Get all results for those tests
    const results = controlTestResults.filter(r => testIds.includes(r.testId));

    const enrichedResults = results.map(result => {
      const student = users.find(u => u._id === result.userId);
      const test = teacherTests.find(t => t._id === result.testId);
      return {
        ...result,
        testName: test?.nameRu || result.testName,
        studentName: student ? `${student.firstName} ${student.lastName}` : 'Unknown',
        studentGrade: student ? `${student.grade}${student.gradeSection}` : 'Unknown'
      };
    }).sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt));

    res.json({ success: true, data: enrichedResults });
  } catch (error) {
    console.error('Error fetching teacher control test results:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке результатов' });
  }
});

// Get all classes/grades
app.get('/api/classes', auth, async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT c.id, c.grade, c.name, c.teacher_id as "teacherId", c.student_count as "studentCount", c.created_at as "createdAt",
             u.first_name as "teacherFirstName", u.last_name as "teacherLastName"
      FROM classes c
      LEFT JOIN users u ON c.teacher_id = u.id
      ORDER BY c.grade, c.name
    `);
    console.log(`📚 Загружено классов: ${rows.length}`);
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('❌ Ошибка при загрузке классов:', error);
    res.status(500).json({ success: false, error: error && error.message ? error.message : 'Ошибка при загрузке классов' });
  }
});

function findClassById(classId) {
  const targetId = String(classId);
  return classes.find(c => String(c._id || c.id) === targetId);
}

// Get specific class by ID
app.get('/api/classes/:classId', auth, async (req, res) => {
  try {
    const { classId } = req.params;
    const classIdInt = parseInt(classId, 10);
    if (isNaN(classIdInt)) {
      return res.status(400).json({ success: false, error: 'Некорректный ID класса' });
    }
    const { rows } = await pool.query('SELECT c.id, c.grade, c.name, c.teacher_id as "teacherId", c.student_count as "studentCount", c.created_at as "createdAt", u.first_name as "teacherFirstName", u.last_name as "teacherLastName" FROM classes c LEFT JOIN users u ON c.teacher_id = u.id WHERE c.id = $1', [classIdInt]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Класс не найден' });
    }
    const classItem = rows[0];
    // Получаем студентов этого класса (по grade и name)
    const studentsQuery = await pool.query(`SELECT u.id, u.username, u.first_name as "firstName", u.last_name as "lastName", 
                                                     u.grade, u.grade_section as "gradeSection", s.name as "schoolName"
                                              FROM users u
                                              LEFT JOIN schools s ON u.school_id = s.id
                                              WHERE u.role = $1 AND u.grade = $2`, ['student', classItem.grade]);
    const studentData = studentsQuery.rows;
    res.json({
      success: true,
      data: {
        ...classItem,
        students: studentData
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка при загрузке класса' });
  }
});

// Get students for specific class by ID
app.get('/api/classes/:classId/students', auth, async (req, res) => {
  try {
    const { classId } = req.params;
    const { rows } = await pool.query('SELECT * FROM classes WHERE id = $1', [classId]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Класс не найден' });
    }
    const classItem = rows[0];
    const section = req.query.section || classItem.name || null;
    // Получаем студентов этого класса
    let studentsQuery = `SELECT u.id, u.username, u.first_name, u.last_name, u.grade, u.grade_section, s.name as "schoolName"
                         FROM users u
                         LEFT JOIN schools s ON u.school_id = s.id
                         WHERE u.role = $1 AND u.grade = $2`;
    const params = ['student', classItem.grade];
    if (section) {
      studentsQuery += ' AND u.grade_section = $3';
      params.push(section);
    }
    const studentsRes = await pool.query(studentsQuery, params);
    const studentData = studentsRes.rows;
    res.json({ success: true, data: studentData });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка при загрузке студентов класса' });
  }
});

// Get students by grade
app.get('/api/classes/:grade/students', auth, async (req, res) => {
  try {
    const { grade } = req.params;
    const { section } = req.query;
    let studentsQuery = `SELECT u.id, u.username, u.first_name, u.last_name, u.grade, u.grade_section, s.name as "schoolName"
                         FROM users u
                         LEFT JOIN schools s ON u.school_id = s.id
                         WHERE u.role = $1 AND u.grade = $2`;
    const params = ['student', grade];
    if (section) {
      studentsQuery += ' AND u.grade_section = $3';
      params.push(section);
    }
    const studentsRes = await pool.query(studentsQuery, params);
    const studentData = studentsRes.rows;
    res.json({ success: true, data: studentData });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка при загрузке учеников' });
  }
});

// Create new class
app.post('/api/classes', auth, async (req, res) => {
  try {
    // Только admin может создавать классы
    // const user = ...
    if (req.userRole !== 'admin') {
      return res.status(403).json({ success: false, error: 'Только администратор может создавать классы' });
    }
    const { grade, name, teacherId } = req.body;
    if (!grade || !name) {
      return res.status(400).json({ success: false, error: 'Укажите номер класса и название' });
    }
    // Проверка teacherId, если указан
    let teacherIdInt = null;
    if (teacherId && teacherId !== 'undefined') {
      teacherIdInt = parseInt(teacherId, 10);
      if (isNaN(teacherIdInt) || teacherIdInt <= 0) {
        return res.status(400).json({ success: false, error: 'Некорректный ID учителя' });
      }
      const { rows: teacherExists } = await pool.query('SELECT id FROM users WHERE id = $1 AND role = $2', [teacherIdInt, 'teacher']);
      if (teacherExists.length === 0) {
        return res.status(400).json({ success: false, error: 'Учитель не найден' });
      }
    }
    // Проверка на существование класса
    const { rows: existing } = await pool.query('SELECT id FROM classes WHERE grade = $1 AND name = $2', [grade, name]);
    if (existing.length > 0) {
      return res.status(400).json({ success: false, error: 'Класс с таким названием уже существует' });
    }
    const classId = crypto.randomUUID();
    const result = await pool.query(
      'INSERT INTO classes (id, grade, name, teacher_id, created_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING id::text, grade, name, teacher_id as "teacherId", student_count as "studentCount", created_at',
      [classId, grade, name, teacherIdInt]
    );
    const newClass = result.rows[0];
    console.log(`✅ Класс создан: ${newClass.id}`);
    res.status(201).json({ success: true, data: newClass });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка при создании класса' });
  }
});

// Delete class
app.delete('/api/classes/:classId', auth, async (req, res) => {
  try {
    if (req.userRole !== 'admin') {
      return res.status(403).json({ success: false, error: 'Только администратор может удалять классы' });
    }
    const { classId } = req.params;
    const result = await pool.query('DELETE FROM classes WHERE id = $1 RETURNING *', [classId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Класс не найден' });
    }
    console.log(`🗑️ Класс удалён: ${classId}`);
    res.json({ success: true, message: 'Класс удален успешно' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка при удалении класса' });
  }
});

// ========================================
// ANALYTICS API
// ========================================

function getClassLabel(classItem) {
  if (!classItem) return '';
  if (classItem.name) return `${classItem.grade || ''}${classItem.name}`.trim();
  if (classItem.sections?.length) return `${classItem.grade || ''}`.trim();
  return `${classItem.grade || ''}`.trim();
}

function findClassByIdOrGrade(classId, section) {
  const byId = classes.find(c => c._id === classId || c.id === classId);
  if (byId) return byId;
  const byGrade = classes.find(c => c.grade === classId && (!section || c.name === section || c.sections?.includes(section)));
  return byGrade || null;
}

function getClassSection(classItem, section) {
  if (section) return section;
  if (classItem?.name) return classItem.name;
  return null;
}

function getClassStudents(classItem, section) {
  if (!classItem) return [];
  return users.filter(u => u.role === 'student' && u.grade === classItem.grade && (!section || u.gradeSection === section));
}

function canAccessClassAnalytics(userId, role, classItem, section) {
  if (role === 'admin') return true;
  if (!classItem) return false;

  if (role === 'student') {
    const student = users.find(u => u._id === userId && u.role === 'student');
    if (!student) return false;
    if (student.grade !== classItem.grade) return false;
    if (section) {
      return student.gradeSection === section;
    }
    if (classItem.name) {
      return student.gradeSection === classItem.name;
    }
    return true;
  }

  if (role !== 'teacher') return false;
  if (classItem.teacherId !== userId) return false;
  if (section && classItem.name && classItem.name !== section) return false;
  return true;
}

function canTeacherAccessStudent(teacherId, student) {
  return classes.some(c => c.teacherId === teacherId && c.grade === student.grade && (!c.name || c.name === (student.gradeSection || '')));
}

function getStudentAverageScore(studentId) {
  const results = testResults.filter(r => r.userId === studentId);
  if (!results.length) return 0;
  const avg = results.reduce((sum, r) => sum + r.score, 0) / results.length;
  return Math.round(avg * 10) / 10;
}

function getTeacherSubjectKeys(user) {
  const list = Array.isArray(user?.subjects) ? user.subjects : [];
  const keys = new Set();

  list.forEach(item => {
    if (!item) return;
    if (typeof item === 'string') {
      keys.add(item.trim().toLowerCase());
      return;
    }
    const id = item.id || item._id || item.subjectId;
    if (id) keys.add(String(id).trim().toLowerCase());
    const name = item.nameRu || item.nameUz || item.name || item.label;
    if (name) keys.add(String(name).trim().toLowerCase());
  });

  return keys;
}

function resolveTeacherSubjects(user) {
  if (!user || user.role !== 'teacher') return [];
  const keys = getTeacherSubjectKeys(user);
  if (!keys.size) return [];

  return subjects.filter(subject => {
    const idKey = String(subject._id || '').toLowerCase();
    if (idKey && keys.has(idKey)) return true;
    const ruKey = (subject.nameRu || '').toLowerCase();
    if (ruKey && keys.has(ruKey)) return true;
    const uzKey = (subject.nameUz || '').toLowerCase();
    if (uzKey && keys.has(uzKey)) return true;
    return false;
  });
}

function teacherHasSubject(user, subjectId) {
  if (!user || user.role !== 'teacher') return true;
  const keys = getTeacherSubjectKeys(user);
  if (!keys.size) return false;

  const idKey = String(subjectId || '').toLowerCase();
  if (idKey && keys.has(idKey)) return true;

  const subject = subjects.find(s => String(s._id) === String(subjectId));
  if (!subject) return false;
  if (subject.nameRu && keys.has(subject.nameRu.toLowerCase())) return true;
  if (subject.nameUz && keys.has(subject.nameUz.toLowerCase())) return true;
  return false;
}

// Get class analytics - Line chart data (average scores over time)
app.get('/api/analytics/classes/:grade/timeline', auth, (req, res) => {
  try {
    const { grade } = req.params;
    const { section } = req.query;
    const classItem = findClassByIdOrGrade(grade, section);

    if (!canAccessClassAnalytics(req.userId, req.userRole, classItem, section)) {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }

    // Get students of this class
    const resolvedSection = getClassSection(classItem, section);
    let classStudents = getClassStudents(classItem || { grade }, resolvedSection);

    const studentIds = classStudents.map(s => s._id);

    // Get all test results for these students
    const classResults = testResults.filter(r => studentIds.includes(r.userId));

    // Group by subject and date
    const timelineData = {};

    classResults.forEach(result => {
      const date = new Date(result.completedAt).toISOString().split('T')[0]; // YYYY-MM-DD
      const subjectId = result.subjectId;

      if (!timelineData[subjectId]) {
        timelineData[subjectId] = {};
      }

      if (!timelineData[subjectId][date]) {
        timelineData[subjectId][date] = {
          scores: [],
          count: 0
        };
      }

      timelineData[subjectId][date].scores.push(result.score);
      timelineData[subjectId][date].count++;
    });

    // Calculate averages
    const labels = [...new Set(classResults.map(r => new Date(r.completedAt).toISOString().split('T')[0]))].sort();
    const series = Object.keys(timelineData).map(subjectId => {
      const subject = subjects.find(s => s._id === subjectId);
      const subjectName = subject ? subject.nameRu : `Subject ${subjectId}`;
      const data = labels.map(date => {
        const bucket = timelineData[subjectId][date];
        return bucket ? Math.round((bucket.scores.reduce((a, b) => a + b, 0) / bucket.count) * 10) / 10 : null;
      });
      return { subjectId, subjectName, data };
    });

    res.json({
      success: true,
      data: {
        labels,
        series,
        meta: {
          classId: classItem?._id || classItem?.id || grade,
          grade: classItem?.grade || grade,
          section: resolvedSection || null,
          classLabel: getClassLabel(classItem)
        }
      }
    });
  } catch (error) {
    console.error('Error fetching class timeline:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке аналитики класса' });
  }
});

// Student analytics - Line chart data (scores over time)
app.get('/api/analytics/students/:studentId/timeline', auth, (req, res) => {
  try {
    const { studentId } = req.params;
    const student = users.find(u => u._id === studentId && u.role === 'student');

    if (!student) {
      return res.status(404).json({ success: false, error: 'Ученик не найден' });
    }

    if (req.userRole !== 'admin' && !(req.userRole === 'teacher' && canTeacherAccessStudent(req.userId, student))) {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }

    const studentResults = testResults.filter(r => r.userId === studentId);
    const timelineData = {};

    studentResults.forEach(result => {
      const date = new Date(result.completedAt).toISOString().split('T')[0];
      const subjectId = result.subjectId;
      if (!timelineData[subjectId]) timelineData[subjectId] = {};
      if (!timelineData[subjectId][date]) {
        timelineData[subjectId][date] = { scores: [], count: 0 };
      }
      timelineData[subjectId][date].scores.push(result.score);
      timelineData[subjectId][date].count++;
    });

    const labels = [...new Set(studentResults.map(r => new Date(r.completedAt).toISOString().split('T')[0]))].sort();
    const series = Object.keys(timelineData).map(subjectId => {
      const subject = subjects.find(s => s._id === subjectId);
      const subjectName = subject ? subject.nameRu : `Subject ${subjectId}`;
      const data = labels.map(date => {
        const bucket = timelineData[subjectId][date];
        return bucket ? Math.round((bucket.scores.reduce((a, b) => a + b, 0) / bucket.count) * 10) / 10 : null;
      });
      return { subjectId, subjectName, data };
    });

    res.json({
      success: true,
      data: {
        labels,
        series,
        meta: {
          studentId,
          studentName: `${student.firstName} ${student.lastName}`,
          grade: student.grade,
          section: student.gradeSection || null
        }
      }
    });
  } catch (error) {
    console.error('Error fetching student timeline:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке аналитики ученика' });
  }
});

// Teacher subject analytics (admin or self)
app.get('/api/analytics/teachers/:teacherId/subjects', auth, (req, res) => {
  try {
    const { teacherId } = req.params;

    if (req.userRole !== 'admin' && req.userId !== teacherId) {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }

    const teacherModules = modules.filter(m => m.createdBy === teacherId);
    const teacherTestIds = tests.filter(t => teacherModules.some(m => m._id === t.moduleId)).map(t => t._id);
    const teacherResults = testResults.filter(r => teacherTestIds.includes(r.testId));

    const statsBySubject = {};
    teacherResults.forEach(result => {
      const subjectId = result.subjectId;
      if (!statsBySubject[subjectId]) {
        const subject = subjects.find(s => s._id === subjectId);
        statsBySubject[subjectId] = {
          subjectId,
          subjectName: subject ? subject.nameRu : `Subject ${subjectId}`,
          scores: [],
          count: 0
        };
      }
      statsBySubject[subjectId].scores.push(result.score);
      statsBySubject[subjectId].count++;
    });

    const data = Object.values(statsBySubject).map(stat => ({
      subjectId: stat.subjectId,
      subjectName: stat.subjectName,
      averageScore: stat.scores.length ? Math.round((stat.scores.reduce((a, b) => a + b, 0) / stat.scores.length) * 10) / 10 : 0,
      testsCompleted: stat.count
    }));

    res.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching teacher subject analytics:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке аналитики учителя' });
  }
});

// Get extended class statistics
app.get('/api/analytics/classes/:grade/stats', auth, (req, res) => {
  try {
    const { grade } = req.params;
    const { section } = req.query;
    const classItem = findClassByIdOrGrade(grade, section);

    if (!canAccessClassAnalytics(req.userId, req.userRole, classItem, section)) {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }

    // Get students of this class
    const resolvedSection = getClassSection(classItem, section);
    let classStudents = getClassStudents(classItem || { grade }, resolvedSection);

    const studentIds = classStudents.map(s => s._id);
    const classResults = testResults.filter(r => studentIds.includes(r.userId));

    if (classResults.length === 0) {
      return res.json({
        success: true,
        data: {
          averageScore: 0,
          totalTests: 0,
          studentsCount: classStudents.length,
          subjectStats: [],
          distribution: { excellent: 0, good: 0, satisfactory: 0, poor: 0 }
        }
      });
    }

    // Calculate overall average
    const totalScore = classResults.reduce((sum, r) => sum + r.score, 0);
    const averageScore = totalScore / classResults.length;

    // Subject-wise statistics
    const subjectStats = {};
    classResults.forEach(result => {
      const subjectId = result.subjectId;
      if (!subjectStats[subjectId]) {
        const subject = subjects.find(s => s._id === subjectId);
        subjectStats[subjectId] = {
          subjectName: subject ? subject.nameRu : `Subject ${subjectId}`,
          scores: [],
          count: 0
        };
      }
      subjectStats[subjectId].scores.push(result.score);
      subjectStats[subjectId].count++;
    });

    const subjectStatsList = Object.values(subjectStats).map(stat => ({
      subject: stat.subjectName,
      average: stat.scores.reduce((a, b) => a + b, 0) / stat.count,
      testsCount: stat.count
    }));

    // Score distribution
    const distribution = {
      excellent: classResults.filter(r => r.score >= 85).length,
      good: classResults.filter(r => r.score >= 70 && r.score < 85).length,
      satisfactory: classResults.filter(r => r.score >= 50 && r.score < 70).length,
      poor: classResults.filter(r => r.score < 50).length
    };

    res.json({
      success: true,
      data: {
        averageScore: Math.round(averageScore * 10) / 10,
        totalTests: classResults.length,
        studentsCount: classStudents.length,
        subjectStats: subjectStatsList,
        distribution
      }
    });
  } catch (error) {
    console.error('Error fetching class stats:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке статистики класса' });
  }
});

// Compare classes
app.get('/api/analytics/classes/compare', auth, (req, res) => {
  try {
    if (req.userRole !== 'admin') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }

    const classesData = [];

    // Get all unique grades
    const grades = [...new Set(users.filter(u => u.role === 'student').map(u => u.grade))];

    grades.forEach(grade => {
      const classStudents = users.filter(u => u.role === 'student' && u.grade === grade);
      const studentIds = classStudents.map(s => s._id);
      const classResults = testResults.filter(r => studentIds.includes(r.userId));

      if (classResults.length > 0) {
        const totalScore = classResults.reduce((sum, r) => sum + r.score, 0);
        const averageScore = totalScore / classResults.length;

        classesData.push({
          grade,
          averageScore: Math.round(averageScore * 10) / 10,
          studentsCount: classStudents.length,
          testsCompleted: classResults.length
        });
      } else {
        classesData.push({
          grade,
          averageScore: 0,
          studentsCount: classStudents.length,
          testsCompleted: 0
        });
      }
    });

    res.json({ success: true, data: classesData });
  } catch (error) {
    console.error('Error comparing classes:', error);
    res.status(500).json({ success: false, error: 'Ошибка при сравнении классов' });
  }
});

// Update class
// Update class (PostgreSQL, admin only)
app.put('/api/classes/:classId', auth, async (req, res) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ success: false, error: 'Только администратор может редактировать классы' });
  }
  const { classId } = req.params;
  const { name, teacherId } = req.body;
  try {
    // Проверка teacherId, если указан
    let teacherIdInt = null;
    if (teacherId && teacherId !== 'undefined') {
      teacherIdInt = parseInt(teacherId, 10);
      if (isNaN(teacherIdInt) || teacherIdInt <= 0) {
        return res.status(400).json({ success: false, error: 'Некорректный ID учителя' });
      }
      const { rows: teacherExists } = await pool.query('SELECT id FROM users WHERE id = $1 AND role = $2', [teacherIdInt, 'teacher']);
      if (teacherExists.length === 0) {
        return res.status(400).json({ success: false, error: 'Учитель не найден' });
      }
    }
    const result = await pool.query(
      'UPDATE classes SET name = COALESCE($1, name), teacher_id = $2 WHERE id = $3 RETURNING id::text, grade, name, teacher_id as "teacherId", student_count as "studentCount", created_at',
      [name, teacherIdInt, classId]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, error: 'Класс не найден' });
    }
    console.log(`✅ Класс обновлен: ${classId}`);
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('❌ Ошибка обновления класса:', error);
    res.status(500).json({ success: false, error: 'Ошибка при обновлении класса' });
  }
});

// Update class students (PostgreSQL, admin only)
app.put('/api/classes/:classId/students', auth, async (req, res) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ success: false, error: 'Только администратор может редактировать классы' });
  }
  const { classId } = req.params;
  const { studentIds, section } = req.body;
  if (!Array.isArray(studentIds)) {
    return res.status(400).json({ success: false, error: 'Некорректный список учеников' });
  }
  try {
    // Get class info
    const classResult = await pool.query('SELECT grade, name FROM classes WHERE id = $1', [classId]);
    if (classResult.rowCount === 0) {
      return res.status(404).json({ success: false, error: 'Класс не найден' });
    }
    const classItem = classResult.rows[0];
    const classSection = section || classItem.name || null;

    // Update students: set grade and grade_section for selected, clear for others in this grade
    await pool.query('UPDATE users SET grade = NULL, grade_section = NULL WHERE role = $1 AND grade = $2', ['student', classItem.grade]);
    if (studentIds.length > 0) {
      await pool.query('UPDATE users SET grade = $1, grade_section = $2 WHERE role = $3 AND id = ANY($4)', [classItem.grade, classSection, 'student', studentIds]);
    }

    // Update student_count in classes
    const countResult = await pool.query('SELECT COUNT(*) as count FROM users WHERE role = $1 AND grade = $2', ['student', classItem.grade]);
    await pool.query('UPDATE classes SET student_count = $1 WHERE id = $2', [parseInt(countResult.rows[0].count), classId]);

    console.log(`✅ Студенты класса обновлены: ${classId}`);
    res.json({ success: true, message: 'Студенты класса обновлены' });
  } catch (error) {
    console.error('❌ Ошибка обновления студентов класса:', error);
    res.status(500).json({ success: false, error: 'Ошибка при обновлении студентов класса' });
  }
});

// Get tests available for student's grade
app.get('/api/modules/:moduleId/tests/available', auth, (req, res) => {
  try {
    const { moduleId } = req.params;
    const user = users.find(u => u._id === req.userId);

    if (!user) {
      return res.status(404).json({ success: false, error: 'Пользователь не найден' });
    }

    let moduleTests = tests.filter(t => t.moduleId === moduleId);

    // Filter by grade if student
    if (user.role === 'student' && user.grade) {
      moduleTests = moduleTests.filter(t => {
        // If no assignedGrades, test is available to all
        if (!t.assignedGrades || t.assignedGrades.length === 0) {
          return true;
        }
        return t.assignedGrades.includes(user.grade);
      });
    }

    // Add questionsCount
    const testsWithCount = moduleTests.map(t => ({
      ...t,
      questionsCount: t.questions?.length || 0
    }));

    res.json({ success: true, data: testsWithCount });
  } catch (error) {
    console.error('Error getting tests:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке тестов' });
  }
});

// ===========================================
// INTEREST TEST ROUTES
// ===========================================

// Save interest test results
app.post('/api/interest-results', auth, (req, res) => {
  try {
    console.log('📝 POST /api/interest-results - User ID:', req.userId);
    const { results, categories } = req.body;

    if (!results || !categories) {
      return res.status(400).json({
        success: false,
        error: 'Отсутствуют результаты или категории'
      });
    }

    const user = users.find(u => u._id === req.userId);
    if (!user) {
      return res.status(404).json({ success: false, error: 'Пользователь не найден' });
    }

    // Save interest test results to user profile
    user.interestTestResults = {
      categories,
      results,
      completedAt: new Date().toISOString()
    };

    console.log('✅ Interest test results saved for user:', user.username);
    res.json({
      success: true,
      message: 'Результаты теста интересов сохранены',
      data: user.interestTestResults
    });
  } catch (error) {
    console.error('Error saving interest test results:', error);
    res.status(500).json({ success: false, error: 'Ошибка при сохранении результатов' });
  }
});

// Get interest test results
app.get('/api/interest-results', auth, (req, res) => {
  try {
    console.log('📝 GET /api/interest-results - User ID:', req.userId);
    const user = users.find(u => u._id === req.userId);

    if (!user) {
      console.log('❌ User not found');
      return res.status(404).json({ success: false, error: 'Пользователь не найден' });
    }

    console.log('👤 User found:', user.username);
    console.log('📊 User interest test results:', user.interestTestResults);

    if (!user.interestTestResults) {
      console.log('⚠️ No interest test results for user');
      return res.json({
        success: true,
        data: null,
        message: 'Тест интересов еще не пройден'
      });
    }

    console.log('✅ Returning interest test results');
    res.json({
      success: true,
      data: user.interestTestResults
    });
  } catch (error) {
    console.error('Error getting interest test results:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке результатов' });
  }
});

// Reset interest test results
app.delete('/api/interest-results', auth, (req, res) => {
  try {
    console.log('🗑️ DELETE /api/interest-results - User ID:', req.userId);
    const user = users.find(u => u._id === req.userId);

    if (!user) {
      return res.status(404).json({ success: false, error: 'Пользователь не найден' });
    }

    user.interestTestResults = null;

    res.json({
      success: true,
      message: 'Результаты теста интересов удалены'
    });
  } catch (error) {
    console.error('Error resetting interest test results:', error);
    res.status(500).json({ success: false, error: 'Ошибка при сбросе результатов' });
  }
});

// ============================================
// TEACHER TESTS ENDPOINTS (Admin creates tests for teachers)
// ============================================

// Get all teacher tests
app.get('/api/teacher-tests', auth, (req, res) => {
  try {
    console.log('🔍 Getting all tests for admin');
    console.log('📚 Total teacher tests in DB:', teacherTests.length);
    const testsWithCount = teacherTests.map(test => ({
      ...test,
      questionsCount: test.questions?.length || 0
    }));
    console.log('✅ Returning', testsWithCount.length, 'tests');
    res.json({
      success: true,
      data: testsWithCount
    });
  } catch (error) {
    console.error('Error getting teacher tests:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке тестов' });
  }
});


// Get all teacher tests
app.get('/api/teacher-tests', auth, async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT *, jsonb_array_length(questions) as questions_count FROM teacher_tests');
    const testsWithCount = rows.map(test => ({
      ...test,
      questionsCount: test.questions_count || 0
    }));
    res.json({ success: true, data: testsWithCount });
  } catch (error) {
    console.error('Error getting teacher tests:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке тестов' });
  }
});

// Get single teacher test
app.get('/api/teacher-tests/:id', auth, async (req, res) => {
  console.log('🔍 GET /api/teacher-tests/:id called with id:', req.params.id);
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM teacher_tests WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Тест не найден' });
    }
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error getting teacher test:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке теста' });
  }
});

// Create teacher test
app.post('/api/teacher-tests', auth, async (req, res) => {
  try {
    const { title, description, duration, passingScore, questions } = req.body;
    if (!title || !questions || !Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ success: false, error: 'Заполните все обязательные поля' });
    }
    const testId = crypto.randomUUID();
    const query = 'INSERT INTO teacher_tests (id, title, description, duration, passing_score, questions, created_at) VALUES ($1, $2, $3, $4, $5, $6, NOW()) RETURNING id::text, title, description, duration, passing_score, questions, assigned_to, created_at';
    const params = [
      testId,
      title,
      description || '',
      duration || 30,
      passingScore || 70,
      JSON.stringify(questions)
    ];
    const result = await pool.query(query, params);
    const newTest = result.rows[0];
    return res.status(201).json({ success: true, data: newTest });
  } catch (error) {
    console.error('Error creating teacher test:', error);
    return res.status(500).json({ success: false, error: 'Ошибка при создании теста' });
  }
});

// Update teacher test
app.put('/api/teacher-tests/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, duration, passingScore, questions } = req.body;
    const fields = [];
    const values = [];
    let idx = 1;
    if (title !== undefined) { fields.push(`title = $${idx}`); values.push(title); idx++; }
    if (description !== undefined) { fields.push(`description = $${idx}`); values.push(description); idx++; }
    if (duration !== undefined) { fields.push(`duration = $${idx}`); values.push(duration); idx++; }
    if (passingScore !== undefined) { fields.push(`passing_score = $${idx}`); values.push(passingScore); idx++; }
    if (questions !== undefined) { fields.push(`questions = $${idx}`); values.push(JSON.stringify(questions)); idx++; }
    if (fields.length === 0) {
      return res.status(400).json({ success: false, error: 'Нет данных для обновления' });
    }
    fields.push(`updated_at = NOW()`);
    const query = `UPDATE teacher_tests SET ${fields.join(', ')} WHERE id = $${idx} RETURNING *`;
    values.push(id);
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Тест не найден' });
    }
    return res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error updating teacher test:', error);
    res.status(500).json({ success: false, error: 'Ошибка при обновлении теста' });
  }
});

// Delete teacher test
app.delete('/api/teacher-tests/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM teacher_tests WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Тест не найден' });
    }
    res.json({ success: true, message: 'Тест удален' });
  } catch (error) {
    console.error('Error deleting teacher test:', error);
    res.status(500).json({ success: false, error: 'Ошибка при удалении теста' });
  }
});

// Get teacher's assigned tests
app.get('/api/teacher-tests/assigned/:teacherId', auth, (req, res) => {
  try {
    const { teacherId } = req.params;
    // TODO: Реализовать через PostgreSQL, например, если есть таблица teacher_test_assignments
    // ...existing code...

    const assignedTests = teacherTests.filter(t => {
      // Handle missing assignedTo array
      const assigned = t.assignedTo || [];
      return assigned.includes(teacherId);
    });

    console.log('✅ Found', assignedTests.length, 'assigned tests');

    res.json({ success: true, data: assignedTests });
  } catch (error) {
    console.error('Error getting assigned tests:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке тестов' });
  }
});

// Submit teacher test result
app.post('/api/teacher-test-results', auth, async (req, res) => {
  try {
    const { testId, teacherId, answers, score, passed } = req.body;
    if (!testId || !teacherId || !answers) {
      return res.status(400).json({ success: false, error: 'Недостаточно данных' });
    }
    const resultId = crypto.randomUUID();
    const result = await pool.query(
      'INSERT INTO teacher_test_results (id, test_id, teacher_id, answers, score, passed, completed_at) VALUES ($1, $2, $3, $4, $5, $6, NOW()) RETURNING id::text, test_id, teacher_id, answers, score, passed, completed_at',
      [resultId, testId, teacherId, JSON.stringify(answers), score || 0, passed || false]
    );
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error saving test result:', error);
    res.status(500).json({ success: false, error: 'Ошибка при сохранении результата' });
  }
});

// Get test results by test ID
app.get('/api/teacher-test-results/:testId', auth, async (req, res) => {
  try {
    const { testId } = req.params;
    const result = await pool.query('SELECT * FROM teacher_test_results WHERE test_id = $1', [testId]);
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error getting test results:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке результатов' });
  }
});

// Get teacher's test results
app.get('/api/teacher-test-results/teacher/:teacherId', auth, async (req, res) => {
  try {
    const { teacherId } = req.params;
    const result = await pool.query('SELECT * FROM teacher_test_results WHERE teacher_id = $1', [teacherId]);
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error getting teacher results:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке результатов' });
  }
});

// Start server
const PORT = process.env.PORT || 5001;

// ...demo data init удалён...

// Admin endpoint to reset all data
app.post('/api/admin/reset-data', auth, (req, res) => {
  try {
    // Check if user is admin
    if (req.userRole !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Access denied. Only admins can reset data.'
      });
    }

    // Preserve admin user
    const adminUser = users.find(u => u.role === 'admin');

    // Clear all data arrays
    users.length = 0;
    subjects.length = 0;
    modules.length = 0;
    tests.length = 0;
    testResults.length = 0;
    testProgress.length = 0;
    classes.length = 0;
    teacherTests.length = 0;
    teacherTestResults.length = 0;
    controlTests.length = 0;
    controlTestResults.length = 0;

    // Restore admin user
    if (adminUser) {
      users.push(adminUser);
    }

    initDefaultSubjects();

    console.log('🗑️  Admin reset all data');
    res.json({
      success: true,
      message: 'All data cleared successfully'
    });
  } catch (error) {
    console.error('Error resetting data:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ========================================
// SCHOOLS API
// ========================================

// Get all schools
app.get('/api/schools', auth, async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT id::text, name, address, phone, email, director_name as "directorName", created_at as "createdAt", updated_at as "updatedAt" FROM schools ORDER BY name');
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error fetching schools:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке школ' });
  }
});

// Get single school
app.get('/api/schools/:schoolId', auth, async (req, res) => {
  try {
    const { schoolId } = req.params;
    const { rows } = await pool.query('SELECT id::text, name, address, phone, email, director_name as "directorName", created_at as "createdAt", updated_at as "updatedAt" FROM schools WHERE id = $1', [schoolId]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Школа не найдена' });
    }
    res.json({ success: true, data: rows[0] });
  } catch (error) {
    console.error('Error fetching school:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке школы' });
  }
});

// Create school (admin only)
app.post('/api/schools', auth, async (req, res) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ success: false, error: 'Только администратор может создавать школы' });
  }
  try {
    const { name, address, phone, email, directorName } = req.body;
    if (!name) {
      return res.status(400).json({ success: false, error: 'Название школы обязательно' });
    }
    const schoolId = crypto.randomUUID();
    const result = await pool.query(
      'INSERT INTO schools (id, name, address, phone, email, director_name) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id::text, name, address, phone, email, director_name as "directorName", created_at as "createdAt"',
      [schoolId, name, address, phone, email, directorName]
    );
    console.log(`✅ Школа создана: ${name}`);
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error creating school:', error);
    res.status(500).json({ success: false, error: 'Ошибка при создании школы' });
  }
});

// Update school (admin only)
app.put('/api/schools/:schoolId', auth, async (req, res) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ success: false, error: 'Только администратор может редактировать школы' });
  }
  try {
    const { schoolId } = req.params;
    const { name, address, phone, email, directorName } = req.body;
    const fields = [];
    const values = [];
    let idx = 1;
    if (name !== undefined) { fields.push(`name = $${idx}`); values.push(name); idx++; }
    if (address !== undefined) { fields.push(`address = $${idx}`); values.push(address); idx++; }
    if (phone !== undefined) { fields.push(`phone = $${idx}`); values.push(phone); idx++; }
    if (email !== undefined) { fields.push(`email = $${idx}`); values.push(email); idx++; }
    if (directorName !== undefined) { fields.push(`director_name = $${idx}`); values.push(directorName); idx++; }
    if (fields.length === 0) {
      return res.status(400).json({ success: false, error: 'Нет данных для обновления' });
    }
    fields.push(`updated_at = NOW()`);
    const query = `UPDATE schools SET ${fields.join(', ')} WHERE id = $${idx} RETURNING id::text, name, address, phone, email, director_name as "directorName", updated_at as "updatedAt"`;
    values.push(schoolId);
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Школа не найдена' });
    }
    console.log(`✅ Школа обновлена: ${schoolId}`);
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error updating school:', error);
    res.status(500).json({ success: false, error: 'Ошибка при обновлении школы' });
  }
});

// Delete school (admin only)
app.delete('/api/schools/:schoolId', auth, async (req, res) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ success: false, error: 'Только администратор может удалять школы' });
  }
  try {
    const { schoolId } = req.params;
    // Check if school has users
    const userCount = await pool.query('SELECT COUNT(*) as count FROM users WHERE school_id = $1', [schoolId]);
    if (parseInt(userCount.rows[0].count) > 0) {
      return res.status(400).json({ success: false, error: 'Нельзя удалить школу, в которой есть пользователи' });
    }
    const result = await pool.query('DELETE FROM schools WHERE id = $1 RETURNING *', [schoolId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Школа не найдена' });
    }
    console.log(`🗑️ Школа удалена: ${schoolId}`);
    res.json({ success: true, message: 'Школа удалена успешно' });
  } catch (error) {
    console.error('Error deleting school:', error);
    res.status(500).json({ success: false, error: 'Ошибка при удалении школы' });
  }
});

app.listen(PORT, async () => {
  console.log(`🚀 Mock server running on port ${PORT}`);
  console.log('⚠️  Using PostgreSQL database');
});
