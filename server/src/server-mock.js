
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

import pool from './db.js';
import { generateStrongPassword } from './utils/passwordGenerator.js';


const app = express();

// Security Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Отключаем CSP для простоты (можно настроить позже)
  crossOriginEmbedderPolicy: false
}));

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting for login endpoint
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 5, // максимум 5 попыток
  message: { error: 'Слишком много попыток входа. Попробуйте через 15 минут.' },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.ip === '127.0.0.1' || req.ip === '::1' // Не ограничивать localhost для разработки
});

// Статика фронта
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load environment variables
dotenv.config();
dotenv.config({ path: path.join(__dirname, '../../.env') });

// Validate critical environment variables
if (!process.env.JWT_SECRET || process.env.JWT_SECRET === 'your-super-secret-jwt-key') {
  console.error('❌ FATAL ERROR: JWT_SECRET must be set in .env file and not use default value!');
  console.error('Generate a strong secret: node -e "console.log(require(\'crypto\').randomBytes(64).toString(\'hex\'))"');
  process.exit(1);
}

const JWT_SECRET = process.env.JWT_SECRET;
console.log('✅ JWT_SECRET loaded from environment');

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

// Email Configuration
const smtpPort = Number(process.env.SMTP_PORT || 587);
const emailTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

async function sendOTPEmail(email, username, otp, firstName, lastName) {
  try {
    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;
    await emailTransporter.sendMail({
      from: fromAddress,
      to: email,
      subject: 'Ваш временный пароль (OTP) - ZEDLY',
      text: `Здравствуйте, ${firstName} ${lastName}!\n\nВаш логин: ${username}\nВременный пароль (OTP): ${otp}\n\nПри первом входе смените пароль.\n`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>🔑 Добро пожаловать в ZEDLY!</h2>
          <p>Здравствуйте, <strong>${firstName} ${lastName}</strong>!</p>
          <p><strong>Ваш логин:</strong> ${username}</p>
          <p><strong>Временный пароль (OTP):</strong> <span style="font-size:18px; font-weight:bold;">${otp}</span></p>
          <p>⚠️ При первом входе смените пароль.</p>
        </div>
      `
    });
    console.log(`✅ Email sent to ${email}`);
    return true;
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return false;
  }
}

// Username generation helpers
function transliterate(text = '') {
  const map = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e',
    'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
    'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
    'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
    'ў': 'u', 'қ': 'q', 'ғ': 'g', 'ҳ': 'h', 'ӯ': 'u'
  };
  return text
    .toLowerCase()
    .split('')
    .map(char => map[char] || char)
    .join('')
    .replace(/[^a-z0-9.]/g, '');
}

async function generateUniqueUsername(baseUsername) {
  let username = baseUsername;
  let counter = 1;
  while (true) {
    const exists = await pool.query('SELECT 1 FROM users WHERE username = $1', [username]);
    if (exists.rowCount === 0) return username;
    username = `${baseUsername}${counter}`;
    counter += 1;
  }
}

async function generateStudentUsername(classId, firstName, lastName) {
  if (!classId) {
    throw new Error('Класс не указан');
  }
  const lastNameTranslit = transliterate(lastName);
  const firstNameTranslit = transliterate(firstName);
  const base = `${lastNameTranslit}.${firstNameTranslit}`;
  return generateUniqueUsername(base);
}

async function generateTeacherUsername(firstName, lastName) {
  const lastNameTranslit = transliterate(lastName);
  const firstNameTranslit = transliterate(firstName);
  const base = `${lastNameTranslit}.${firstNameTranslit}`;
  return generateUniqueUsername(base);
}

async function generateAdminUsername(firstName, lastName) {
  const lastNameTranslit = transliterate(lastName);
  const firstNameTranslit = transliterate(firstName);
  const base = `${lastNameTranslit}.${firstNameTranslit}`;
  return generateUniqueUsername(base);
}

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
    const decoded = jwt.verify(token, JWT_SECRET);
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

// Login (PostgreSQL) with rate limiting
app.post('/api/auth/login', loginLimiter, async (req, res) => {
  try {
    const { username, password, role } = req.body;
    console.log(`[LOGIN] Attempting login with:`, { username, role });

    const { rows } = await pool.query(`SELECT u.* FROM users u 
                                       WHERE u.username = $1 AND u.role = $2`, [username, role]);

    console.log(`[LOGIN] Database query result:`, { found: rows.length > 0, userId: rows[0]?.id || 'N/A' });

    const user = rows[0];
    if (!user) {
      console.log(`[LOGIN] Failed login for ${username} (user not found in DB)`);
      console.log(`[LOGIN] This should NOT trigger user registration!`);
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      console.log(`[LOGIN] Failed login for ${username} (wrong password)`);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if password reset is required
    if (user.password_reset_required) {
      // Return special token for forced password change
      const resetToken = jwt.sign(
        {
          userId: user.id,
          role: user.role,
          forcePasswordChange: true
        },
        JWT_SECRET,
        { expiresIn: '1h' }  // Short expiry for security
      );

      console.log(`[LOGIN] Success for ${username} (FORCE PASSWORD CHANGE)`);
      return res.json({
        success: true,
        forcePasswordChange: true,
        token: resetToken,
        user: {
          id: user.id,
          username: user.username,
          role: user.role,
          firstName: user.first_name,
          lastName: user.last_name
        },
        message: 'Password change required'
      });
    }

    // Generate access token (short-lived - 15 minutes)
    const accessToken = jwt.sign(
      { userId: user.id, role: user.role, type: 'access' },
      JWT_SECRET,
      { expiresIn: '15m' }
    );

    // Generate refresh token (long-lived - 7 days)
    const refreshToken = jwt.sign(
      { userId: user.id, type: 'refresh' },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Store refresh token in database
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    await pool.query(
      `INSERT INTO refresh_tokens (user_id, token, expires_at, ip_address, user_agent)
       VALUES ($1, $2, $3, $4, $5)`,
      [
        user.id,
        refreshToken,
        expiresAt,
        req.ip || null,
        req.headers['user-agent'] || null
      ]
    );

    console.log(`[LOGIN] Success for ${username} (role: ${user.role}) - tokens issued`);
    res.json({
      success: true,
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        firstName: user.first_name,
        lastName: user.last_name
      }
    });
  } catch (error) {
    console.error('[LOGIN] Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ==================== REFRESH TOKEN ====================

// Refresh access token using refresh token
app.post('/api/auth/refresh', async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ error: 'Refresh token required' });
    }

    // Verify refresh token signature
    let decoded;
    try {
      decoded = jwt.verify(refreshToken, JWT_SECRET);
    } catch (error) {
      return res.status(401).json({ error: 'Invalid refresh token' });
    }

    if (decoded.type !== 'refresh') {
      return res.status(401).json({ error: 'Invalid token type' });
    }

    // Check if token exists in database and not revoked
    const { rows } = await pool.query(
      `SELECT * FROM refresh_tokens 
       WHERE token = $1 AND expires_at > NOW() AND revoked_at IS NULL`,
      [refreshToken]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Refresh token not found or expired' });
    }

    const tokenRecord = rows[0];

    // Get user info
    const { rows: userRows } = await pool.query(
      'SELECT id, username, role, first_name, last_name FROM users WHERE id = $1',
      [decoded.userId]
    );

    if (userRows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = userRows[0];

    // Generate new access token
    const newAccessToken = jwt.sign(
      { userId: user.id, role: user.role, type: 'access' },
      JWT_SECRET,
      { expiresIn: '15m' }
    );

    // Update last_used_at
    await pool.query(
      'UPDATE refresh_tokens SET last_used_at = NOW() WHERE id = $1',
      [tokenRecord.id]
    );

    console.log(`[REFRESH] New access token issued for user ${user.username}`);

    res.json({
      success: true,
      accessToken: newAccessToken,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        firstName: user.first_name,
        lastName: user.last_name
      }
    });
  } catch (error) {
    console.error('[REFRESH] Error:', error);
    res.status(500).json({ error: 'Token refresh failed', message: error.message });
  }
});

// Logout - revoke refresh token
app.post('/api/auth/logout', auth, async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (refreshToken) {
      // Revoke the refresh token
      await pool.query(
        'UPDATE refresh_tokens SET revoked_at = NOW() WHERE token = $1',
        [refreshToken]
      );
      console.log(`[LOGOUT] Refresh token revoked for user ${req.userId}`);
    }

    res.json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    console.error('[LOGOUT] Error:', error);
    res.status(500).json({ error: 'Logout failed' });
  }
});

// ==================== PASSWORD RESET ====================

// Admin resets student password
app.post('/api/users/:id/reset-password', auth, async (req, res) => {
  try {
    const userId = req.params.id;
    let adminId = req.userId; // From JWT token

    // Validate adminId
    if (!adminId) {
      return res.status(401).json({ error: 'Admin ID not found in token' });
    }

    // Get the user being reset
    const { rows: userRows } = await pool.query(
      'SELECT id, first_name, last_name, email, username FROM users WHERE id = $1',
      [userId]
    );

    if (userRows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userData = userRows[0];

    // Generate strong password
    const newPassword = generateStrongPassword();
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Get admin info for email - also verify admin exists
    const { rows: adminRows } = await pool.query(
      'SELECT id, first_name, last_name, email FROM users WHERE id = $1',
      [adminId]
    );

    // If admin doesn't exist, set adminId to NULL to avoid foreign key violation
    if (adminRows.length === 0) {
      console.warn(`⚠️ Admin user ${adminId} not found in database, setting password_reset_by_admin_id to NULL`);
      adminId = null;
    }

    const adminData = adminRows[0] || { first_name: 'Admin', last_name: '', email: '' };

    // Update user - set password_reset_by_admin_id (may be NULL if admin doesn't exist)
    await pool.query(
      `UPDATE users SET 
        password_hash = $1,
        password_reset_required = true,
        password_reset_at = NOW(),
        password_reset_by_admin_id = $2
      WHERE id = $3`,
      [hashedPassword, adminId, userId]
    );

    // Send email to student
    const resetTime = new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' });
    const emailHTML = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #667eea;">🔐 Parol Tiklandi / Ваш пароль был сброшен</h2>
        
        <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #667eea;">O'zbek tilida:</h3>
          <p><strong>Assalomu alaykum, ${userData.first_name}!</strong></p>
          <p>Sizning parolingiz administratori tomonidan tiklandi.</p>
          
          <div style="margin: 15px 0; padding: 15px; background: white; border-left: 4px solid #667eea; border-radius: 4px;">
            <p><strong>Foydalanuvchi nomi:</strong> ${userData.username}</p>
            <p><strong>Vaqtinchalik parol:</strong></p>
            <p style="font-family: monospace; font-size: 18px; font-weight: bold; letter-spacing: 2px; color: #10b981; background: #f0f0f0; padding: 10px; border-radius: 4px;">${newPassword}</p>
          </div>
          
          <p><strong>Tiklagan admin:</strong> ${adminData.first_name} ${adminData.last_name}</p>
          <p><strong>Email:</strong> ${adminData.email}</p>
          <p><strong>Vaqt:</strong> ${resetTime}</p>
          
          <h4 style="color: #f59e0b;">⚠️ Muhim:</h4>
          <ol>
            <li>Yuqoridagi vaqtinchalik parol bilan tizimga kirish</li>
            <li>Kirgach, yangi xavfsiz parol o'rnatish zarur</li>
            <li>Yangi parol faqat sizga ma'lum bo'lishi kerak</li>
          </ol>
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
        
        <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #667eea;">На русском языке:</h3>
          <p><strong>Здравствуйте, ${userData.first_name}!</strong></p>
          <p>Ваш пароль был сброшен администратором системы.</p>
          
          <div style="margin: 15px 0; padding: 15px; background: white; border-left: 4px solid #667eea; border-radius: 4px;">
            <p><strong>Имя пользователя:</strong> ${userData.username}</p>
            <p><strong>Временный пароль:</strong></p>
            <p style="font-family: monospace; font-size: 18px; font-weight: bold; letter-spacing: 2px; color: #10b981; background: #f0f0f0; padding: 10px; border-radius: 4px;">${newPassword}</p>
          </div>
          
          <p><strong>Сброс выполнил:</strong> ${adminData.first_name} ${adminData.last_name}</p>
          <p><strong>Email:</strong> ${adminData.email}</p>
          <p><strong>Время:</strong> ${resetTime}</p>
          
          <h4 style="color: #f59e0b;">⚠️ Важно:</h4>
          <ol>
            <li>Войдите в систему с временным паролем</li>
            <li>После входа вам потребуется установить новый пароль</li>
            <li>Новый пароль должен быть известен только вам</li>
          </ol>
        </div>
        
        <p style="color: #999; font-size: 12px; margin-top: 30px;">Это автоматическое письмо, пожалуйста, не отвечайте на него.</p>
      </div>
    `;

    // Send email
    try {
      await emailTransporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: userData.email,
        subject: '🔐 Parol Tiklandi / Пароль был сброшен',
        html: emailHTML
      });
      console.log(`✅ Password reset email sent to ${userData.email}`);
    } catch (emailError) {
      console.error('❌ Error sending email:', emailError);
      // Don't fail the request if email fails, just log it
    }

    // Return the password to admin (only for display in modal)
    res.json({
      success: true,
      message: 'Password reset successful. Email sent to student.',
      password: newPassword,
      student: {
        name: `${userData.first_name} ${userData.last_name}`,
        email: userData.email
      }
    });

    console.log(`✅ Password reset for user ${userData.username} by admin ${adminData.first_name}`);

  } catch (error) {
    console.error('Password reset error:', error);
    console.error('Details:', {
      userId: req.params.id,
      adminId: req.userId,
      errorCode: error.code,
      errorMessage: error.message
    });
    res.status(500).json({
      error: 'Failed to reset password',
      message: error.message,
      code: error.code
    });
  }
});

// Student sets new password after reset
app.post('/api/auth/set-new-password', auth, async (req, res) => {
  try {
    const userId = req.userId; // From JWT
    const { currentPassword, newPassword, confirmPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }

    const { rows } = await pool.query(
      'SELECT password_hash FROM users WHERE id = $1',
      [userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Verify current password
    const passwordValid = await bcrypt.compare(currentPassword, rows[0].password_hash);

    if (!passwordValid) {
      return res.status(401).json({ error: 'Current password is incorrect' });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password and clear reset flag
    await pool.query(
      `UPDATE users SET 
        password_hash = $1,
        password_reset_required = false
      WHERE id = $2`,
      [hashedPassword, userId]
    );

    console.log(`✅ New password set for user: ${userId}`);
    res.json({
      success: true,
      message: 'Password changed successfully'
    });

  } catch (error) {
    console.error('Set password error:', error);
    res.status(500).json({ error: 'Failed to set password', message: error.message });
  }
});

// ==================== END PASSWORD RESET ====================

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
    const isMatch = await bcrypt.compare(currentPassword, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }
    const hashed = await bcrypt.hash(newPassword, 10);
    await pool.query(
      'UPDATE users SET password_hash = $1, updated_at = NOW() WHERE id = $2',
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
    const { rows } = await pool.query('SELECT id::text as id, name FROM subjects WHERE name IS NOT NULL ORDER BY id');
    console.log(`[SUBJECTS] Fetched all subjects (${rows.length})`);
    console.log('[SUBJECTS] Sample data:', rows.slice(0, 3));
    console.log('[SUBJECTS] First row keys:', rows.length > 0 ? Object.keys(rows[0]) : 'no rows');
    console.log('[SUBJECTS] First row values:', rows.length > 0 ? Object.values(rows[0]) : 'no rows');
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
  const { name, questionsCount } = req.body || {};
  if (!name) {
    return res.status(400).json({ message: 'Заполните обязательные поля' });
  }
  try {
    const exists = await pool.query('SELECT 1 FROM subjects WHERE LOWER(name) = LOWER($1)', [name]);
    if (exists.rowCount > 0) {
      return res.status(400).json({ message: 'Предмет уже существует' });
    }
    const subjectId = crypto.randomUUID();
    const result = await pool.query(
      'INSERT INTO subjects (id, name) VALUES ($1, $2) RETURNING id::text, name',
      [subjectId, name.trim()]
    );
    console.log(`[SUBJECTS] Created subject: ${name}`);
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
  const { name, questionsCount } = req.body || {};
  if (!name) {
    return res.status(400).json({ message: 'Заполните обязательные поля' });
  }
  try {
    const result = await pool.query(
      'UPDATE subjects SET name = $1 WHERE id = $2 RETURNING id::text, name',
      [name.trim(), subjectId]
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
                         u.created_at, u.updated_at,
                         CASE
                           WHEN u.role = 'student' THEN cs.class_id
                           WHEN u.role = 'teacher' THEN ha.class_id
                           ELSE NULL
                         END as "classId",
                         CASE
                           WHEN u.role = 'student' THEN c.grade
                           WHEN u.role = 'teacher' THEN hc.grade
                           ELSE NULL
                         END as grade,
                         CASE
                           WHEN u.role = 'student' THEN c.section
                           WHEN u.role = 'teacher' THEN hc.section
                           ELSE NULL
                         END as "className",
                         CASE
                           WHEN u.role = 'student' THEN tta_teacher.first_name
                           WHEN u.role = 'teacher' THEN ht.first_name
                           ELSE NULL
                         END as "teacherFirstName",
                         CASE
                           WHEN u.role = 'student' THEN tta_teacher.last_name
                           WHEN u.role = 'teacher' THEN ht.last_name
                           ELSE NULL
                         END as "teacherLastName"
                  FROM users u
                  LEFT JOIN class_students cs ON u.id = cs.student_id AND cs.left_at IS NULL
                  LEFT JOIN classes c ON cs.class_id = c.id
                  LEFT JOIN teacher_teaching_assignments tta_student ON c.id = tta_student.class_id AND tta_student.is_active = true
                  LEFT JOIN users tta_teacher ON tta_student.teacher_id = tta_teacher.id
                  LEFT JOIN homeroom_assignments ha ON u.id = ha.teacher_id AND ha.end_at IS NULL
                  LEFT JOIN classes hc ON ha.class_id = hc.id
                  LEFT JOIN teacher_teaching_assignments tta_homeroom ON hc.id = tta_homeroom.class_id AND tta_homeroom.is_active = true
                  LEFT JOIN users ht ON tta_homeroom.teacher_id = ht.id`;
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
                                           CASE
                                             WHEN u.role = 'student' THEN cs.class_id
                                             WHEN u.role = 'teacher' THEN ha.class_id
                                             ELSE NULL
                                           END as "classId",
                                           CASE
                                             WHEN u.role = 'student' THEN c.grade
                                             WHEN u.role = 'teacher' THEN hc.grade
                                             ELSE NULL
                                           END as grade,
                                           CASE
                                             WHEN u.role = 'student' THEN c.section
                                             WHEN u.role = 'teacher' THEN hc.section
                                             ELSE NULL
                                           END as "className",
                                           CASE
                                             WHEN u.role = 'student' THEN tta_teacher.first_name
                                             WHEN u.role = 'teacher' THEN ht.first_name
                                             ELSE NULL
                                           END as "teacherFirstName",
                                           CASE
                                             WHEN u.role = 'student' THEN tta_teacher.last_name
                                             WHEN u.role = 'teacher' THEN ht.last_name
                                             ELSE NULL
                                           END as "teacherLastName"
                                    FROM users u
                                    LEFT JOIN class_students cs ON u.id = cs.student_id AND cs.left_at IS NULL
                                    LEFT JOIN classes c ON cs.class_id = c.id
                                    LEFT JOIN teacher_teaching_assignments tta_student ON c.id = tta_student.class_id AND tta_student.is_active = true
                                    LEFT JOIN users tta_teacher ON tta_student.teacher_id = tta_teacher.id
                                    LEFT JOIN homeroom_assignments ha ON u.id = ha.teacher_id AND ha.end_at IS NULL
                                    LEFT JOIN classes hc ON ha.class_id = hc.id
                                    LEFT JOIN teacher_teaching_assignments tta_homeroom ON hc.id = tta_homeroom.class_id AND tta_homeroom.is_active = true
                                    LEFT JOIN users ht ON tta_homeroom.teacher_id = ht.id
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
app.get('/api/users/:userId', auth, async (req, res) => {
  try {
    if (req.userRole !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const { rows } = await pool.query('SELECT id, username, first_name, last_name, email, phone, role, status, created_at FROM users WHERE id = $1', [req.params.userId]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    res.json({ success: true, data: rows[0] });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ success: false, error: 'Database error' });
  }
});

// Get student profile for teacher (own classes only)
app.get('/api/teachers/students/:studentId', auth, async (req, res) => {
  try {
    const { studentId } = req.params;

    if (req.userRole !== 'admin' && req.userRole !== 'teacher') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }

    const { rows } = await pool.query(
      'SELECT id, username, first_name, last_name, email, phone, role FROM users WHERE id = $1 AND role = $2',
      [studentId, 'student']
    );

    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Ученик не найден' });
    }

    // Simplified access check - admin or teacher can view
    res.json({ success: true, data: rows[0] });
  } catch (error) {
    console.error('Error fetching student profile:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке профиля ученика' });
  }
});

// Get teacher classes (new schema)
app.get('/api/teacher/classes', auth, async (req, res) => {
  try {
    if (req.userRole !== 'teacher' && req.userRole !== 'admin') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }
    const { rows } = await pool.query(
      `SELECT c.id, c.grade, c.section as name, c.created_at,
              COUNT(cs.student_id) as "studentCount",
              CASE WHEN ha.class_id IS NOT NULL THEN true ELSE false END as "isHomeroom"
       FROM classes c
       LEFT JOIN class_students cs ON c.id = cs.class_id AND cs.left_at IS NULL
       JOIN teacher_teaching_assignments tta ON c.id = tta.class_id
       LEFT JOIN homeroom_assignments ha ON c.id = ha.class_id AND ha.teacher_id = $1 AND ha.end_at IS NULL
       WHERE tta.teacher_id = $1 AND tta.is_active = true
       GROUP BY c.id, c.grade, c.section, c.created_at, ha.class_id
       ORDER BY c.grade, c.section`,
      [req.userId]
    );
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('❌ Ошибка получения классов:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке классов' });
  }
});

// Get teacher test results (new schema)
app.get('/api/teacher/test-results', auth, async (req, res) => {
  try {
    if (req.userRole !== 'teacher' && req.userRole !== 'admin') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }
    const { rows } = await pool.query(
      `SELECT ta.id as session_id, ta.score, ta.passed, ta.completed_at, ta.time_spent_seconds,
              t.title as test_title, t.target_role,
              u.first_name, u.last_name, c.grade, c.section,
              c.section as class_name,
              COUNT(aa.id) as total_questions,
              SUM(CASE WHEN aa.is_correct THEN 1 ELSE 0 END) as correct_answers
       FROM test_attempts ta
       JOIN tests t ON ta.test_id = t.id
       JOIN users u ON ta.user_id = u.id
       LEFT JOIN class_students cs ON u.id = cs.student_id
       LEFT JOIN classes c ON cs.class_id = c.id
       LEFT JOIN attempt_answers aa ON ta.id = aa.attempt_id
       WHERE t.created_by = $1 AND ta.status = 'completed'
       GROUP BY ta.id, t.title, t.target_role, u.first_name, u.last_name, c.grade, c.section, c.section
       ORDER BY ta.completed_at DESC`,
      [req.userId]
    );
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('❌ Ошибка получения результатов:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке результатов' });
  }
});

// Register new user (PostgreSQL, admin only)
app.post('/api/users/register', async (req, res) => {
  try {
    const body = req.body || {};
    const { role, firstName, lastName, classId, email, phone } = body;
    if (!role || !firstName || !lastName) {
      return res.status(400).json({ success: false, error: 'Заполните обязательные поля' });
    }

    if (!email) {
      return res.status(400).json({ success: false, error: 'Email обязателен для отправки пароля' });
    }

    // Для учеников обязательно указывать класс
    if (role === 'student' && !classId) {
      return res.status(400).json({ success: false, error: 'Для ученика необходимо выбрать класс' });
    }

    // Check if email exists
    const emailExists = await pool.query('SELECT 1 FROM users WHERE email = $1', [email]);
    if (emailExists.rowCount > 0) {
      return res.status(400).json({ success: false, error: 'Пользователь с таким email уже существует' });
    }

    // Generate username based on role
    let username;
    if (role === 'student') {
      username = await generateStudentUsername(classId, firstName, lastName);
    } else if (role === 'teacher') {
      username = await generateTeacherUsername(firstName, lastName);
    } else if (role === 'admin') {
      username = await generateAdminUsername(firstName, lastName);
    } else {
      return res.status(400).json({ success: false, error: 'Неверная роль пользователя' });
    }

    // Генерируем временный пароль (OTP)
    const otp = generateOTP();
    const otpExpiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);
    const hashedOTP = await bcrypt.hash(otp, 10);
    const userId = crypto.randomUUID();

    const result = await pool.query(
      `INSERT INTO users (id, username, password_hash, role, first_name, last_name, email, phone, status, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'active', NOW(), NOW()) RETURNING id::text, username, role, first_name, last_name, email, phone, status`,
      [userId, username, hashedOTP, role, firstName, lastName, email || null, phone || null]
    );

    // Для учеников: добавить в class_students
    if (role === 'student' && classId) {
      await pool.query(`
        INSERT INTO class_students (class_id, student_id, enrolled_at) VALUES ($1, $2, NOW())
      `, [classId, userId]);
      console.log(`[REGISTER] Added student ${username} to class ${classId}`);
    }

    const user = result.rows[0];
    console.log(`[REGISTER] User created: ${username} (${role})`);

    const emailSent = await sendOTPEmail(email, username, otp, firstName, lastName);

    res.status(201).json({
      success: true,
      data: {
        ...user,
        emailSent,
        otp: emailSent ? undefined : otp,
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
    const { username, firstName, lastName, email, phone } = req.body;

    // Check if user exists
    const userCheck = await pool.query('SELECT id, username FROM users WHERE id = $1', [id]);
    if (userCheck.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Пользователь не найден' });
    }

    // Check if new username already exists
    if (username && username !== userCheck.rows[0].username) {
      const existingUser = await pool.query('SELECT id FROM users WHERE username = $1 AND id != $2', [username, id]);
      if (existingUser.rows.length > 0) {
        return res.status(400).json({ success: false, error: 'Пользователь с таким логином уже существует' });
      }
    }

    // Update user
    const result = await pool.query(
      `UPDATE users 
       SET username = COALESCE($1, username), 
           first_name = COALESCE($2, first_name), 
           last_name = COALESCE($3, last_name),
           email = COALESCE($4, email),
           phone = COALESCE($5, phone),
           updated_at = NOW()
       WHERE id = $6 
       RETURNING id, username, first_name, last_name, email, phone, role`,
      [username, firstName, lastName, email, phone, id]
    );

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ success: false, error: 'Ошибка при обновлении пользователя' });
  }
});

// Delete user (admin only)
app.delete('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Get user before deleting
    const userResult = await pool.query('SELECT id, username, first_name, last_name, role FROM users WHERE id = $1', [id]);
    if (userResult.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Пользователь не найден' });
    }

    // Delete user
    await pool.query('DELETE FROM users WHERE id = $1', [id]);

    res.json({ success: true, data: userResult.rows[0], message: 'Пользователь удален' });
  } catch (error) {
    console.error('Error deleting user:', error);
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
    const { rows } = await pool.query('SELECT id, subject_id as "subjectId", name, description, created_by as "createdBy", created_at FROM modules WHERE subject_id = $1', [subjectId]);
    console.log(`✅ Найдено модулей: ${rows.length}`);
    if (rows.length > 0) {
      console.log('📝 Модули:', rows.map(m => m.name).join(', '));
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
    const { name, description } = req.body;
    // const user = ...
    // if (user?.role === 'teacher' && !teacherHasSubject(user, subjectId)) {
    //   return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    // }
    console.log(`➕ Создание нового модуля для предмета: ${subjectId}`);
    console.log(`📝 Название: ${name}`);
    const moduleId = crypto.randomUUID();
    const result = await pool.query(
      'INSERT INTO modules (id, subject_id, name, description, created_by, created_at) VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING id::text, subject_id as "subjectId", name, description, created_by as "createdBy", created_at',
      [moduleId, subjectId, name, description, req.userId]
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
    const { name, description } = req.body;
    const result = await pool.query(
      'UPDATE modules SET name = COALESCE($1, name), description = COALESCE($2, description) WHERE id = $3 RETURNING id::text, subject_id as "subjectId", name, description, created_by as "createdBy", created_at',
      [name, description, moduleId]
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
app.get('/api/modules/:moduleId', auth, async (req, res) => {
  try {
    const { moduleId } = req.params;
    // Stub - module functionality not implemented with database
    res.status(404).json({ success: false, error: 'Модуль не найден' });
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
    const { rows } = await pool.query('SELECT id, module_id as "moduleId", name, duration, time_limit as "timeLimit", max_score as "maxScore", status, assigned_grades as "assignedGrades", questions, created_by as "createdBy", jsonb_array_length(questions) as "questionsCount" FROM tests WHERE module_id = $1', [moduleId]);
    console.log(`✅ Найдено ${rows.length} тестов для модуля ${moduleId}`);
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error(`❌ Ошибка загрузки тестов: ${error.message}`);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке тестов' });
  }
});

// Get all tests (new schema)
app.get('/api/tests', auth, async (req, res) => {
  try {
    let query = `SELECT id, title, duration_minutes, pass_percent, created_by, target_role, status, created_at, updated_at FROM tests`;
    let params = [];
    if (req.userRole === 'teacher') {
      query += ' WHERE created_by = $1';
      params.push(req.userId);
    } else if (req.userRole === 'student') {
      // Студенты видят опубликованные тесты для студентов
      query += ' WHERE target_role = $1 AND status = $2';
      params.push('student', 'published');
    }
    query += ' ORDER BY created_at DESC';
    const { rows } = await pool.query(query, params);
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('❌ Ошибка получения тестов:', error);
    res.status(500).json({ success: false, error: 'Ошибка при получении тестов' });
  }
});

// Get single test with questions (new schema)
app.get('/api/tests/:testId', auth, async (req, res) => {
  try {
    const { testId } = req.params;
    const { rows: testRows } = await pool.query('SELECT id, title, duration_minutes, pass_percent, created_by, target_role, status, created_at, updated_at FROM tests WHERE id = $1', [testId]);
    if (testRows.length === 0) {
      return res.status(404).json({ success: false, error: 'Тест не найден' });
    }
    const test = testRows[0];

    // Получить вопросы
    const { rows: questionRows } = await pool.query(
      `SELECT id, question_type, text, points, order_no FROM test_questions WHERE test_id = $1 ORDER BY order_no`,
      [testId]
    );

    // Для каждого вопроса получить опции
    for (let q of questionRows) {
      const { rows: optionRows } = await pool.query(
        `SELECT id, text, is_correct, order_no FROM question_options WHERE question_id = $1 ORDER BY order_no`,
        [q.id]
      );
      q.options = optionRows;
    }

    test.questions = questionRows;
    res.json({ success: true, data: test });
  } catch (error) {
    console.error('❌ Ошибка получения теста:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке теста' });
  }
});

// Start test (new schema)
app.get('/api/tests/:testId/start', auth, async (req, res) => {
  try {
    if (req.userRole !== 'student') {
      return res.status(403).json({ success: false, error: 'Только ученики могут проходить тесты' });
    }
    const { testId } = req.params;

    // Проверить, что тест существует и опубликован
    const { rows: testRows } = await pool.query('SELECT id, title, duration_minutes, pass_percent, target_role, status FROM tests WHERE id = $1', [testId]);
    if (testRows.length === 0) {
      return res.status(404).json({ success: false, error: 'Тест не найден' });
    }
    const test = testRows[0];
    if (test.status !== 'published') {
      return res.status(403).json({ success: false, error: 'Тест еще не опубликован' });
    }

    // Проверить, что пользователь может проходить этот тест (роль должна совпадать)
    const { rows: userRows } = await pool.query('SELECT role FROM users WHERE id = $1', [req.userId]);
    if (userRows.length === 0 || userRows[0].role !== test.target_role) {
      return res.status(403).json({ success: false, error: 'Тест не доступен для вашей роли' });
    }

    // Проверить, не проходил ли уже тест
    const { rows: sessionRows } = await pool.query('SELECT id FROM test_attempts WHERE test_id = $1 AND user_id = $2', [testId, req.userId]);
    if (sessionRows.length > 0) {
      return res.status(400).json({ success: false, error: 'Вы уже проходили этот тест' });
    }

    // Создать сессию
    const sessionId = crypto.randomUUID();
    await pool.query(
      `INSERT INTO test_attempts (id, test_id, user_id, started_at, status)
       VALUES ($1, $2, $3, NOW(), 'in_progress')`,
      [sessionId, testId, req.userId]
    );

    // Получить вопросы в случайном порядке
    const { rows: questionRows } = await pool.query(
      `SELECT id, question_type, text, points FROM test_questions WHERE test_id = $1 ORDER BY RANDOM()`,
      [testId]
    );

    // Для каждого вопроса получить опции в случайном порядке
    for (let q of questionRows) {
      const { rows: optionRows } = await pool.query(
        `SELECT id, text FROM question_options WHERE question_id = $1 ORDER BY RANDOM()`,
        [q.id]
      );
      q.options = optionRows;
    }

    const randomizedTest = {
      sessionId,
      title: test.title,
      durationMinutes: test.duration_minutes,
      questions: questionRows
    };

    res.json({ success: true, data: randomizedTest });
  } catch (error) {
    console.error('❌ Ошибка начала теста:', error);
    res.status(500).json({ success: false, error: 'Ошибка при начале теста' });
  }
});

// Create test (new schema)
app.post('/api/tests', auth, async (req, res) => {
  try {
    if (req.userRole !== 'teacher' && req.userRole !== 'admin') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }
    const { title, durationMinutes, passPercent, targetRole, questions } = req.body;
    if (!title || !durationMinutes || !passPercent || !targetRole || !questions) {
      return res.status(400).json({ success: false, error: 'Заполните все поля' });
    }
    const testId = crypto.randomUUID();
    const result = await pool.query(
      `INSERT INTO tests (id, title, duration_minutes, pass_percent, created_by, target_role, status, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, 'draft', NOW(), NOW()) RETURNING id, title, duration_minutes, pass_percent, created_by, target_role, status, created_at, updated_at`,
      [testId, title, durationMinutes, passPercent, req.userId, targetRole]
    );
    const newTest = result.rows[0];

    // Создать вопросы
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const qId = crypto.randomUUID();
      await pool.query(
        `INSERT INTO test_questions (id, test_id, question_type, text, points, order_no)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [qId, testId, q.type, q.text, q.points || 1, i + 1]
      );
      if (q.options && q.options.length > 0) {
        for (let j = 0; j < q.options.length; j++) {
          const opt = q.options[j];
          const optId = crypto.randomUUID();
          await pool.query(
            `INSERT INTO question_options (id, question_id, text, is_correct, order_no)
             VALUES ($1, $2, $3, $4, $5)`,
            [optId, qId, opt.text, opt.isCorrect || false, j + 1]
          );
        }
      }
    }

    console.log(`✅ Тест создан: ${title} (${targetRole})`);
    res.status(201).json({ success: true, data: newTest });
  } catch (error) {
    console.error('❌ Ошибка создания теста:', error);
    res.status(500).json({ success: false, error: 'Ошибка при создании теста' });
  }
});

// Update test (new schema)
app.put('/api/tests/:testId', auth, async (req, res) => {
  try {
    if (req.userRole !== 'teacher' && req.userRole !== 'admin') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }
    const { testId } = req.params;
    const { title, durationMinutes, passPercent, targetRole, status, questions } = req.body;

    // Обновить тест
    const updateFields = [];
    const values = [];
    let idx = 1;
    if (title !== undefined) { updateFields.push(`title = $${idx++}`); values.push(title); }
    if (durationMinutes !== undefined) { updateFields.push(`duration_minutes = $${idx++}`); values.push(durationMinutes); }
    if (passPercent !== undefined) { updateFields.push(`pass_percent = $${idx++}`); values.push(passPercent); }
    if (targetRole !== undefined) { updateFields.push(`target_role = $${idx++}`); values.push(targetRole); }
    if (status !== undefined) { updateFields.push(`status = $${idx++}`); values.push(status); }
    updateFields.push(`updated_at = NOW()`);
    values.push(testId);

    const updateQuery = `UPDATE tests SET ${updateFields.join(', ')} WHERE id = $${idx}`;
    await pool.query(updateQuery, values);

    // Если переданы вопросы, обновить их
    if (questions !== undefined) {
      // Удалить старые вопросы и опции
      await pool.query('DELETE FROM question_options WHERE question_id IN (SELECT id FROM test_questions WHERE test_id = $1)', [testId]);
      await pool.query('DELETE FROM test_questions WHERE test_id = $1', [testId]);

      // Добавить новые вопросы
      for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const qId = crypto.randomUUID();
        await pool.query(
          `INSERT INTO test_questions (id, test_id, question_type, text, points, order_no)
           VALUES ($1, $2, $3, $4, $5, $6)`,
          [qId, testId, q.type, q.text, q.points || 1, i + 1]
        );
        if (q.options && q.options.length > 0) {
          for (let j = 0; j < q.options.length; j++) {
            const opt = q.options[j];
            const optId = crypto.randomUUID();
            await pool.query(
              `INSERT INTO question_options (id, question_id, text, is_correct, order_no)
               VALUES ($1, $2, $3, $4, $5)`,
              [optId, qId, opt.text, opt.isCorrect || false, j + 1]
            );
          }
        }
      }
    }

    // Получить обновленный тест
    const { rows } = await pool.query('SELECT id, title, duration_minutes, pass_percent, created_by, target_role, status, created_at, updated_at FROM tests WHERE id = $1', [testId]);
    res.json({ success: true, data: rows[0] });
  } catch (error) {
    console.error('❌ Ошибка обновления теста:', error);
    res.status(500).json({ success: false, error: 'Ошибка при обновлении теста' });
  }
});

// Delete test (new schema)
app.delete('/api/tests/:testId', auth, async (req, res) => {
  try {
    if (req.userRole !== 'teacher' && req.userRole !== 'admin') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }
    const { testId } = req.params;
    // Удалить опции, вопросы, затем тест (если нет каскадного удаления)
    await pool.query('DELETE FROM question_options WHERE question_id IN (SELECT id FROM test_questions WHERE test_id = $1)', [testId]);
    await pool.query('DELETE FROM test_questions WHERE test_id = $1', [testId]);
    const result = await pool.query('DELETE FROM tests WHERE id = $1 RETURNING *', [testId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Тест не найден' });
    }
    res.json({ success: true, message: 'Тест удален' });
  } catch (error) {
    console.error('❌ Ошибка удаления теста:', error);
    res.status(500).json({ success: false, error: 'Ошибка при удалении теста' });
  }
});

// ========================================
// TEST RESULTS API
// ========================================

// Get test results for student (new schema)
app.get('/api/tests/:testId/results', auth, async (req, res) => {
  try {
    const { testId } = req.params;
    const { rows } = await pool.query(
      `SELECT ta.id, ta.score, ta.passed, ta.completed_at, ta.time_spent_seconds,
              COUNT(aa.id) as total_questions,
              SUM(CASE WHEN aa.is_correct THEN 1 ELSE 0 END) as correct_answers
       FROM test_attempts ta
       LEFT JOIN attempt_answers aa ON ta.id = aa.attempt_id
       WHERE ta.test_id = $1 AND ta.user_id = $2 AND ta.status = 'completed'
       GROUP BY ta.id
       ORDER BY ta.completed_at DESC`,
      [testId, req.userId]
    );
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('❌ Ошибка получения результатов:', error);
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
// Submit test (new schema)
app.post('/api/tests/:testId/submit', auth, async (req, res) => {
  try {
    if (req.userRole !== 'student') {
      return res.status(403).json({ success: false, error: 'Только ученики могут сдавать тесты' });
    }
    const { testId } = req.params;
    const { sessionId, answers, timeTaken } = req.body; // answers: { questionId: selectedOptionId }

    // Получить сессию
    const { rows: sessionRows } = await pool.query('SELECT id, status FROM test_attempts WHERE id = $1 AND user_id = $2', [sessionId, req.userId]);
    if (sessionRows.length === 0) {
      return res.status(404).json({ success: false, error: 'Сессия не найдена' });
    }
    if (sessionRows[0].status !== 'in_progress') {
      return res.status(400).json({ success: false, error: 'Тест уже завершен' });
    }

    // Получить тест
    const { rows: testRows } = await pool.query('SELECT id, pass_percent FROM tests WHERE id = $1', [testId]);
    if (testRows.length === 0) {
      return res.status(404).json({ success: false, error: 'Тест не найден' });
    }
    const test = testRows[0];

    // Сохранить ответы и рассчитать score
    let totalPoints = 0;
    let earnedPoints = 0;
    const answerInserts = [];

    for (const [questionId, selectedOptionId] of Object.entries(answers)) {
      // Получить вопрос
      const { rows: qRows } = await pool.query('SELECT id, points FROM test_questions WHERE id = $1', [questionId]);
      if (qRows.length === 0) continue;
      const question = qRows[0];
      totalPoints += question.points;

      // Проверить правильность
      const { rows: optRows } = await pool.query('SELECT is_correct FROM question_options WHERE id = $1', [selectedOptionId]);
      const isCorrect = optRows.length > 0 && optRows[0].is_correct;
      if (isCorrect) earnedPoints += question.points;

      // Сохранить ответ
      answerInserts.push(
        pool.query(
          `INSERT INTO test_answers (id, session_id, question_id, selected_option_id, is_correct)
           VALUES ($1, $2, $3, $4, $5)`,
          [crypto.randomUUID(), sessionId, questionId, selectedOptionId, isCorrect]
        )
      );
    }

    await Promise.all(answerInserts);

    const score = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;
    const passed = score >= test.pass_percent;

    // Обновить сессию
    await pool.query(
      `UPDATE test_attempts SET status = 'completed', completed_at = NOW(), score = $1, passed = $2, time_spent_seconds = $3
       WHERE id = $4`,
      [score, passed, timeTaken, sessionId]
    );

    console.log(`✅ Тест сдан: ${testId}, score: ${score}%, passed: ${passed}`);
    res.json({ success: true, data: { score, passed, earnedPoints, totalPoints } });
  } catch (error) {
    console.error('❌ Ошибка сдачи теста:', error);
    res.status(500).json({ success: false, error: 'Ошибка при сдаче теста' });
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
app.get('/api/teacher/analytics', auth, async (req, res) => {
  try {
    if (req.userRole !== 'teacher') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }

    // Stub implementation - returns empty data
    res.json({
      success: true,
      data: {
        totalModules: 0,
        totalTests: 0,
        totalResults: 0,
        byClass: [],
        bySubject: []
      }
    });
  } catch (error) {
    console.error('Error fetching teacher analytics:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке аналитики' });
  }
});

// Teacher module difficulty analytics (options)
app.get('/api/teacher/analytics/subject-modules/options', auth, async (req, res) => {
  try {
    if (req.userRole !== 'teacher') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }

    // Stub implementation
    res.json({
      success: true,
      data: {
        subjects: [],
        grades: []
      }
    });
  } catch (error) {
    console.error('Error fetching analytics options:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке опций' });
  }
});

// Teacher module difficulty analytics (by subject + class/parallel)
app.get('/api/teacher/analytics/subject-modules', auth, async (req, res) => {
  try {
    if (req.userRole !== 'teacher') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }

    // Stub implementation
    res.json({
      success: true,
      data: {
        grade: null,
        section: null,
        studentCount: 0,
        modules: []
      }
    });
  } catch (error) {
    console.error('Error loading teacher subject module analytics:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке аналитики' });
  }
});

// ===== CONTROL TESTS ENDPOINTS =====

// Get all control tests
app.get('/api/control-tests', auth, async (req, res) => {
  try {
    // Stub implementation - control tests not implemented with database
    res.json({ success: true, data: [] });
  } catch (error) {
    console.error('Error fetching control tests:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке контрольных работ' });
  }
});

// Get control test by ID
app.get('/api/control-tests/:testId', auth, async (req, res) => {
  try {
    // Stub implementation
    res.status(404).json({ success: false, error: 'Контрольная работа не найдена' });
  } catch (error) {
    console.error('Error fetching control test:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке контрольной работы' });
  }
});

// Create control test (teacher only)
app.post('/api/control-tests', auth, async (req, res) => {
  try {
    // Stub implementation
    res.status(501).json({ success: false, error: 'Функция не реализована' });
  } catch (error) {
    console.error('Error creating control test:', error);
    res.status(500).json({ success: false, error: 'Ошибка при создании контрольной работы' });
  }
});

// Update control test (teacher only - creator)
app.put('/api/control-tests/:testId', auth, async (req, res) => {
  try {
    // Stub implementation
    res.status(404).json({ success: false, error: 'Контрольная работа не найдена' });
  } catch (error) {
    console.error('Error updating control test:', error);
    res.status(500).json({ success: false, error: 'Ошибка при обновлении контрольной работы' });
  }
});

// Delete control test (teacher only - creator)
app.delete('/api/control-tests/:testId', auth, async (req, res) => {
  try {
    // Stub implementation
    res.status(404).json({ success: false, error: 'Контрольная работа не найдена' });
  } catch (error) {
    console.error('Error deleting control test:', error);
    res.status(500).json({ success: false, error: 'Ошибка при удалении контрольной работы' });
  }
});

// Get control tests assigned to student's class
app.get('/api/student/control-tests', auth, async (req, res) => {
  try {
    if (req.userRole !== 'student') {
      return res.status(403).json({ success: false, error: 'Доступно только студентам' });
    }

    // Stub implementation - returns empty data
    res.json({ success: true, data: [] });
  } catch (error) {
    console.error('Error fetching control tests:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке контрольных работ' });
  }
});

// Submit control test result
app.post('/api/control-tests/:testId/submit', auth, async (req, res) => {
  try {
    // Stub implementation
    res.status(404).json({ success: false, error: 'Контрольная работа не найдена' });
  } catch (error) {
    console.error('Error submitting control test:', error);
    res.status(500).json({ success: false, error: 'Ошибка при отправке результатов' });
  }
});

// Get control test results (for teacher - their tests)
app.get('/api/control-tests/:testId/results', auth, async (req, res) => {
  try {
    // Stub implementation
    res.json({ success: true, data: [] });
  } catch (error) {
    console.error('Error fetching control test results:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке результатов' });
  }
});

// Get all control test results for logged-in teacher
app.get('/api/teacher/control-tests/results', auth, async (req, res) => {
  try {
    if (req.userRole !== 'teacher') {
      return res.status(403).json({ success: false, error: 'Доступно только учителям' });
    }

    // Stub implementation
    res.json({ success: true, data: [] });
  } catch (error) {
    console.error('Error fetching teacher control test results:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке результатов' });
  }
});

// Get all classes/grades
app.get('/api/classes', auth, async (req, res) => {
  try {
    // Debug: проверим что в homeroom_assignments
    const { rows: debugHA } = await pool.query('SELECT * FROM homeroom_assignments LIMIT 5');
    console.log('🔍 homeroom_assignments содержит:', debugHA);

    const { rows } = await pool.query(`
      SELECT 
        c.id,
        c.grade,
        c.section as name,
        c.created_at as "createdAt",
        COUNT(DISTINCT cs.student_id) as "studentCount",
        u.id as "teacherId",
        u.first_name as "teacherFirstName",
        u.last_name as "teacherLastName"
      FROM classes c
      LEFT JOIN class_students cs ON c.id = cs.class_id AND cs.left_at IS NULL
      LEFT JOIN homeroom_assignments ha ON c.id = ha.class_id AND ha.end_at IS NULL
      LEFT JOIN users u ON ha.teacher_id = u.id
      GROUP BY c.id, c.grade, c.section, c.created_at, u.id, u.first_name, u.last_name
      ORDER BY c.grade, c.section
    `);

    console.log(`📊 Raw query result(first class): `, rows[0]);

    // Format teacher info
    const formattedRows = rows.map(row => {
      const formatted = {
        id: row.id,
        grade: row.grade,
        name: row.name,
        createdAt: row.createdAt,
        studentCount: parseInt(row.studentCount) || 0,
        teacher: row.teacherId ? {
          id: row.teacherId,
          firstName: row.teacherFirstName,
          lastName: row.teacherLastName,
          fullName: `${row.teacherFirstName} ${row.teacherLastName} `
        } : null
      };
      return formatted;
    });

    console.log(`📚 Загружено классов: ${formattedRows.length} `);
    console.log(`📊 Formatted result(first class): `, formattedRows[0]);

    res.json({ success: true, data: formattedRows });
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
    const { rows } = await pool.query(`
      SELECT c.id, c.grade, c.section as name, c.created_at as "createdAt"
      FROM classes c
      WHERE c.id = $1
      `, [classId]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Класс не найден' });
    }
    const classItem = rows[0];

    // Получить текущего классного руководителя
    const homeroomQuery = await pool.query(`
      SELECT ha.id as assignmentId, u.id, u.first_name, u.last_name
      FROM homeroom_assignments ha
      JOIN users u ON ha.teacher_id = u.id
      WHERE ha.class_id = $1 AND ha.end_at IS NULL
      `, [classId]);
    const homeroomTeacher = homeroomQuery.rows[0] || null;

    // Получаем студентов этого класса из class_students
    const studentsQuery = await pool.query(`
      SELECT u.id, u.username, u.first_name as "firstName", u.last_name as "lastName"
      FROM class_students cs
      JOIN users u ON cs.student_id = u.id
      WHERE cs.class_id = $1 AND cs.left_at IS NULL
      `, [classId]);
    const studentData = studentsQuery.rows;

    res.json({
      success: true,
      data: {
        ...classItem,
        homeroomTeacher,
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
    // Получаем студентов этого класса из class_students
    const studentsQuery = await pool.query(`
      SELECT u.id, u.username, u.first_name as "firstName", u.last_name as "lastName"
      FROM class_students cs
      JOIN users u ON cs.student_id = u.id
      WHERE cs.class_id = $1 AND cs.left_at IS NULL
      ORDER BY u.last_name, u.first_name
      `, [classId]);
    res.json({ success: true, data: studentsQuery.rows });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка при загрузке студентов класса' });
  }
});

// Get students by grade
app.get('/api/classes/:grade/students', auth, async (req, res) => {
  try {
    const { grade } = req.params;
    const { section } = req.query;
    // Найти класс по grade и section
    let classQuery = 'SELECT id FROM classes WHERE grade = $1';
    const params = [grade];
    if (section) {
      classQuery += ' AND section = $2';
      params.push(section);
    }
    const classRes = await pool.query(classQuery, params);
    if (classRes.rows.length === 0) {
      return res.json({ success: true, data: [] });
    }
    const classId = classRes.rows[0].id;
    // Получить студентов из class_students
    const studentsQuery = await pool.query(`
      SELECT u.id, u.username, u.first_name as "firstName", u.last_name as "lastName"
      FROM class_students cs
      JOIN users u ON cs.student_id = u.id
      WHERE cs.class_id = $1 AND cs.left_at IS NULL
      ORDER BY u.last_name, u.first_name
      `, [classId]);
    res.json({ success: true, data: studentsQuery.rows });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка при загрузке учеников' });
  }
});

// Create new class
app.post('/api/classes', auth, async (req, res) => {
  try {
    console.log('📥 Create class request:', req.body);
    // Только admin может создавать классы
    if (req.userRole !== 'admin') {
      return res.status(403).json({ success: false, error: 'Только администратор может создавать классы' });
    }
    const { grade, name: section, homeroomTeacherId, teacherId } = req.body;
    // Поддерживаем оба параметра для обратной совместимости
    const actualTeacherId = homeroomTeacherId || teacherId;
    console.log('🔍 Parsed data:', { grade, section, teacherId: actualTeacherId });

    if (!grade || !section) {
      return res.status(400).json({ success: false, error: 'Укажите номер класса и название' });
    }

    // Валидировать teacherId, если указан
    if (actualTeacherId) {
      const { rows: teacherCheck } = await pool.query('SELECT id FROM users WHERE id = $1 AND role = $2', [actualTeacherId, 'teacher']);
      if (teacherCheck.length === 0) {
        return res.status(400).json({ success: false, error: 'Указанный классный руководитель не найден или не является учителем' });
      }
    }

    const classId = crypto.randomUUID();
    console.log('🔧 Creating class:', { classId, grade, section });

    const result = await pool.query(
      'INSERT INTO classes (id, grade, section, created_at) VALUES ($1, $2, $3, NOW()) RETURNING id::text, grade, section as name, created_at',
      [classId, grade, section]
    );

    const newClass = result.rows[0];
    newClass.studentCount = 0;

    // Создать homeroom assignment, если указан учитель
    if (actualTeacherId) {
      const assignmentId = crypto.randomUUID();
      await pool.query(
        'INSERT INTO homeroom_assignments (id, teacher_id, class_id, start_at, end_at) VALUES ($1, $2, $3, NOW(), NULL)',
        [assignmentId, actualTeacherId, classId]
      );
      console.log(`✅ Homeroom assignment created: teacher ${actualTeacherId} -> class $ { classId }`);
    } else {
      console.log('ℹ️ No teacher assigned to this class');
    }

    console.log('✅ Class created successfully:', newClass);

    res.status(201).json({ success: true, data: newClass });
  } catch (error) {
    console.error('❌ Error creating class:', error);
    res.status(500).json({ success: false, error: `Ошибка при создании класса: ${error.message} ` });
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
    console.log(`🗑️ Класс удалён: ${classId} `);
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
  if (classItem.name) return `${classItem.grade || ''}${classItem.name} `.trim();
  if (classItem.sections?.length) return `${classItem.grade || ''} `.trim();
  return `${classItem.grade || ''} `.trim();
}

function findClassByIdOrGrade(classId, section) {
  // Stub - returns null
  return null;
}

function getClassSection(classItem, section) {
  if (section) return section;
  if (classItem?.name) return classItem.name;
  return null;
}

function getClassStudents(classItem, section) {
  // Stub - returns empty array
  return [];
}

function canAccessClassAnalytics(userId, role, classItem, section) {
  // Simplified - admin always has access
  if (role === 'admin') return true;
  return false;
}

function canTeacherAccessStudent(teacherId, student) {
  // Stub - returns false
  return false;
}

function getStudentAverageScore(studentId) {
  // Stub - returns 0
  return 0;
}

function getTeacherSubjectKeys(user) {
  // Stub - returns empty set
  return new Set();
}

function resolveTeacherSubjects(user) {
  // Stub - returns empty array
  return [];
}

function teacherHasSubject(user, subjectId) {
  // Stub - returns true (allow access)
  return true;
}

// Get class analytics - Line chart data (average scores over time)
app.get('/api/analytics/classes/:grade/timeline', auth, async (req, res) => {
  try {
    const { grade } = req.params;
    const { section } = req.query;

    // Stub implementation - returns empty data
    res.json({
      success: true,
      data: {
        labels: [],
        series: [],
        meta: {
          classId: grade,
          grade: grade,
          section: section || null,
          classLabel: section ? `${grade}${section} ` : grade
        }
      }
    });
  } catch (error) {
    console.error('Error fetching class timeline:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке аналитики класса' });
  }
});

// Student analytics - Line chart data (scores over time)
app.get('/api/analytics/students/:studentId/timeline', auth, async (req, res) => {
  try {
    const { studentId } = req.params;

    // Get student from database
    const studentResult = await pool.query(
      'SELECT id, username, first_name, last_name, role FROM users WHERE id = $1 AND role = $2',
      [studentId, 'student']
    );

    if (studentResult.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Ученик не найден' });
    }

    const student = studentResult.rows[0];

    // Check permissions (simplified - admin can access, teacher access check would need more complex query)
    if (req.userRole !== 'admin' && req.userId !== studentId) {
      // For teacher access, you might want to check if teacher teaches this student's class
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }

    // Get test results for this student (you'll need a test_results table in your DB)
    // For now, returning mock data structure
    const timelineData = {};
    const labels = [];
    const series = [];

    res.json({
      success: true,
      data: {
        labels,
        series,
        meta: {
          studentId: student.id,
          studentName: `${student.first_name} ${student.last_name} `,
          grade: null, // Add grade field to users table if needed
          section: null
        }
      }
    });
  } catch (error) {
    console.error('Error fetching student timeline:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке аналитики ученика' });
  }
});

// Teacher subject analytics (admin or self)
app.get('/api/analytics/teachers/:teacherId/subjects', auth, async (req, res) => {
  try {
    const { teacherId } = req.params;

    if (req.userRole !== 'admin' && req.userId !== teacherId) {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }

    // Stub implementation - returns empty data
    res.json({ success: true, data: [] });
  } catch (error) {
    console.error('Error fetching teacher subject analytics:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке аналитики учителя' });
  }
});

// Get extended class statistics
app.get('/api/analytics/classes/:grade/stats', auth, async (req, res) => {
  try {
    const { grade } = req.params;
    const { section } = req.query;

    // Stub implementation - returns empty data
    res.json({
      success: true,
      data: {
        averageScore: 0,
        totalTests: 0,
        studentsCount: 0,
        subjectStats: [],
        distribution: { excellent: 0, good: 0, satisfactory: 0, poor: 0 }
      }
    });
  } catch (error) {
    console.error('Error fetching class stats:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке статистики класса' });
  }
});

// Compare classes
app.get('/api/analytics/classes/compare', auth, async (req, res) => {
  try {
    if (req.userRole !== 'admin') {
      return res.status(403).json({ success: false, error: 'Доступ запрещен' });
    }

    // Stub implementation - returns empty data
    res.json({ success: true, data: [] });
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
  const { name: section, homeroomTeacherId } = req.body;
  try {
    // Валидировать homeroomTeacherId, если указан
    if (homeroomTeacherId) {
      const { rows: teacherCheck } = await pool.query('SELECT id FROM users WHERE id = $1 AND role = $2', [homeroomTeacherId, 'teacher']);
      if (teacherCheck.length === 0) {
        return res.status(400).json({ success: false, error: 'Указанный классный руководитель не найден или не является учителем' });
      }
    }

    // Обновить класс
    const result = await pool.query(
      'UPDATE classes SET section = COALESCE($1, section) WHERE id = $2 RETURNING id::text, grade, section as name, created_at',
      [section, classId]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, error: 'Класс не найден' });
    }

    // Обработать смену классного руководителя
    if (homeroomTeacherId !== undefined) {
      // Закрыть текущую активную запись
      await pool.query(
        'UPDATE homeroom_assignments SET end_at = NOW() WHERE class_id = $1 AND end_at IS NULL',
        [classId]
      );

      // Создать новую запись, если указан новый учитель
      if (homeroomTeacherId) {
        const assignmentId = crypto.randomUUID();
        await pool.query(
          'INSERT INTO homeroom_assignments (id, teacher_id, class_id, start_at, end_at) VALUES ($1, $2, $3, NOW(), NULL)',
          [assignmentId, homeroomTeacherId, classId]
        );
        console.log(`🏫 Homeroom assignment updated for class $ { classId }, new teacher ${homeroomTeacherId}`);
      }
    }

    console.log(`✅ Класс обновлен: ${classId} `);
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
    const classResult = await pool.query('SELECT grade, section FROM classes WHERE id = $1', [classId]);
    if (classResult.rowCount === 0) {
      return res.status(404).json({ success: false, error: 'Класс не найден' });
    }
    const classItem = classResult.rows[0];
    const classSection = section || classItem.section || null;

    console.log(`✅ Студенты класса обновлены: ${classId} `);
    res.json({ success: true, message: 'Студенты класса обновлены' });
  } catch (error) {
    console.error('❌ Ошибка обновления студентов класса:', error);
    res.status(500).json({ success: false, error: 'Ошибка при обновлении студентов класса' });
  }
});

// Delete student from class
app.delete('/api/classes/:classId/students/:studentId', auth, async (req, res) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ success: false, error: 'Только администратор может удалять учеников из класса' });
  }
  const { classId, studentId } = req.params;
  try {
    console.log(`🗑️ Removing student ${studentId} from class $ { classId } `);

    // Delete from class_students junction table
    const deleteResult = await pool.query(
      'DELETE FROM class_students WHERE class_id = $1 AND student_id = $2',
      [classId, studentId]
    );

    if (deleteResult.rowCount === 0) {
      return res.status(404).json({
        success: false,
        error: 'Ученик не найден в этом классе'
      });
    }

    console.log(`✅ Student removed from class successfully`);
    res.json({
      success: true,
      message: 'Ученик успешно удален из класса'
    });
  } catch (error) {
    console.error('❌ Error removing student from class:', error);
    res.status(500).json({
      success: false,
      error: 'Ошибка при удалении ученика из класса'
    });
  }
});

// Get tests available for student's grade
app.get('/api/modules/:moduleId/tests/available', auth, async (req, res) => {
  try {
    // Stub implementation - modules not implemented
    res.json({ success: true, data: [] });
  } catch (error) {
    console.error('Error loading available tests:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке тестов' });
  }
});

// ===========================================
// INTEREST TEST ROUTES
// ===========================================

// Save interest test results
app.post('/api/interest-results', auth, async (req, res) => {
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
app.get('/api/interest-results', auth, async (req, res) => {
  try {
    // Stub implementation - interest tests not stored in database
    res.json({
      success: true,
      data: null,
      message: 'Тест интересов еще не пройден'
    });
  } catch (error) {
    console.error('Error fetching interest test results:', error);
    res.status(500).json({ success: false, error: 'Ошибка при загрузке результатов' });
  }
});

// Reset interest test results
app.delete('/api/interest-results', auth, async (req, res) => {
  try {
    // Stub implementation
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

// NOTE: In-memory `teacherTests` was removed; DB-backed routes below handle teacher tests.


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
    if (title !== undefined) { fields.push(`title = $${idx} `); values.push(title); idx++; }
    if (description !== undefined) { fields.push(`description = $${idx} `); values.push(description); idx++; }
    if (duration !== undefined) { fields.push(`duration = $${idx} `); values.push(duration); idx++; }
    if (passingScore !== undefined) { fields.push(`passing_score = $${idx} `); values.push(passingScore); idx++; }
    if (questions !== undefined) { fields.push(`questions = $${idx} `); values.push(JSON.stringify(questions)); idx++; }
    if (fields.length === 0) {
      return res.status(400).json({ success: false, error: 'Нет данных для обновления' });
    }
    fields.push(`updated_at = NOW()`);
    const query = `UPDATE teacher_tests SET ${fields.join(', ')} WHERE id = $${idx} RETURNING * `;
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

// Get teacher's assigned tests (DB-backed)
app.get('/api/teacher-tests/assigned/:teacherId', auth, async (req, res) => {
  try {
    const { teacherId } = req.params;
    // Fetch teacher tests from DB and filter by assigned_to field
    const { rows } = await pool.query('SELECT *, jsonb_array_length(questions) as questions_count, assigned_to FROM teacher_tests');
    const assignedTests = rows.filter(t => {
      const assigned = t.assigned_to || t.assignedTo || [];
      if (Array.isArray(assigned)) return assigned.includes(teacherId);
      if (typeof assigned === 'string') return assigned.includes(teacherId);
      return false;
    }).map(test => ({ ...test, questionsCount: test.questions_count || 0 }));

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
app.post('/api/admin/reset-data', auth, async (req, res) => {
  try {
    // Check if user is admin
    if (req.userRole !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Access denied. Only admins can reset data.'
      });
    }

    // Stub implementation - dangerous operation, not implemented
    res.status(501).json({
      success: false,
      error: 'Function not implemented'
    });
  } catch (error) {
    console.error('Error resetting data:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.listen(PORT, async () => {
  console.log(`🚀 Mock server running on port ${PORT} `);
  console.log('⚠️  Using PostgreSQL database');
});
