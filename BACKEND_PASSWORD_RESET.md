# Backend Password Reset Implementation Guide

## API Endpoint: POST /api/users/:id/reset-password

### Frontend Flow:
1. Admin нажимает кнопку "Сбросить пароль"
2. Видит подтверждающее окно с информацией о том, что:
   - Система автоматически создаст безопасный пароль
   - Пароль будет отправлен на email ученика
   - При входе с новым паролем ученик должен будет установить свой пароль
3. После подтверждения отправляется POST запрос на сервер БЕЗ пароля
4. Сервер генерирует пароль и отправляет email
5. Admin видит модальное окно с успехом и временным паролем (только для копирования)

---

## Server-Side Implementation

### 1. Database Schema Updates

Добавить поля в таблицу `users`:

```sql
ALTER TABLE users ADD COLUMN (
    password_reset_required BOOLEAN DEFAULT FALSE,
    password_reset_token VARCHAR(100) UNIQUE NULL,
    password_reset_at TIMESTAMP NULL,
    password_reset_by_admin_id INTEGER NULL,
    FOREIGN KEY (password_reset_by_admin_id) REFERENCES users(id)
);
```

### 2. Generate Strong Password Function

```javascript
// server/src/utils/passwordGenerator.js
const crypto = require('crypto');

function generateStrongPassword() {
    // Генерирует пароль: буквы (верхний/нижний регистр) + цифры + спецсимволы
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#$%^&*_+-=';
    
    const all = uppercase + lowercase + numbers + special;
    
    let password = '';
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += special[Math.floor(Math.random() * special.length)];
    
    for (let i = 4; i < 12; i++) {
        password += all[Math.floor(Math.random() * all.length)];
    }
    
    return password.split('').sort(() => Math.random() - 0.5).join('');
}

module.exports = { generateStrongPassword };
```

### 3. Reset Password Endpoint

```javascript
// server/src/routes/users.js
const express = require('express');
const bcrypt = require('bcryptjs');
const { generateStrongPassword } = require('../utils/passwordGenerator');
const sendEmail = require('../services/emailService');
const router = express.Router();

router.post('/api/users/:id/reset-password', async (req, res) => {
    try {
        const userId = req.params.id;
        const adminId = req.user.id; // From JWT token
        
        // Get the user being reset
        const user = await db.query(
            'SELECT id, first_name, last_name, email, username FROM users WHERE id = $1',
            [userId]
        );
        
        if (!user.rows.length) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        const userData = user.rows[0];
        
        // Generate strong password
        const newPassword = generateStrongPassword();
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        
        // Get admin info for email
        const admin = await db.query(
            'SELECT first_name, last_name, email FROM users WHERE id = $1',
            [adminId]
        );
        const adminData = admin.rows[0];
        
        // Update user
        await db.query(
            `UPDATE users SET 
                password = $1,
                password_reset_required = true,
                password_reset_at = NOW(),
                password_reset_by_admin_id = $2
            WHERE id = $3`,
            [hashedPassword, adminId, userId]
        );
        
        // Send email to student
        const emailHTML = `
            <h2>Parol Tiklandi / Ваш пароль был сброшен</h2>
            
            <p><strong>O'zbek tilida / На русском языке</strong></p>
            
            <h3>Parol tiklandi!</h3>
            <p>Sizning parolingiz tiklandi. Yangi ma'lumotlar:</p>
            <ul>
                <li><strong>Login:</strong> ${userData.username}</li>
                <li><strong>Vaqtinchalik parol:</strong> <code style="background: #f0f0f0; padding: 5px; font-family: monospace;">${newPassword}</code></li>
            </ul>
            
            <p><strong>Tiklagan:</strong> ${adminData.first_name} ${adminData.last_name} (${adminData.email})</p>
            <p><strong>Vaqt:</strong> ${new Date().toLocaleString('uz-UZ')}</p>
            
            <h4>Muhim:</h4>
            <ol>
                <li>Yuqoridagi vaqtinchalik parol bilan kirish</li>
                <li>Kirgach, yangi xavfsiz parol o'rnatish zarur</li>
                <li>Yangi parol faqat sizga ma'lum bo'lishi kerak</li>
            </ol>
            
            <hr>
            
            <h3>Ваш пароль был сброшен!</h3>
            <p>Вам было выданы новые учетные данные для входа:</p>
            <ul>
                <li><strong>Логин:</strong> ${userData.username}</li>
                <li><strong>Временный пароль:</strong> <code style="background: #f0f0f0; padding: 5px; font-family: monospace;">${newPassword}</code></li>
            </ul>
            
            <p><strong>Сброс выполнил:</strong> ${adminData.first_name} ${adminData.last_name} (${adminData.email})</p>
            <p><strong>Время:</strong> ${new Date().toLocaleString('ru-RU')}</p>
            
            <h4>Важно:</h4>
            <ol>
                <li>Войдите с временным паролем</li>
                <li>После входа вам потребуется установить новый пароль</li>
                <li>Новый пароль должен быть известен только вам</li>
            </ol>
        `;
        
        await sendEmail({
            to: userData.email,
            subject: '🔐 Parol tiklandi / Пароль был сброшен',
            html: emailHTML
        });
        
        // Return the password to admin (only for display in modal)
        res.json({
            success: true,
            message: 'Password reset successful. Email sent to student.',
            password: newPassword,  // Only shown in modal, not in logs
            student: {
                name: `${userData.first_name} ${userData.last_name}`,
                email: userData.email
            }
        });
        
    } catch (error) {
        console.error('Password reset error:', error);
        res.status(500).json({ error: 'Failed to reset password' });
    }
});

module.exports = router;
```

### 4. Login with Forced Password Change

Когда ученик логинится с `password_reset_required = true`:

```javascript
// server/src/routes/auth.js
router.post('/api/auth/login', async (req, res) => {
    try {
        const { username, password, role } = req.body;
        
        const user = await db.query(
            'SELECT * FROM users WHERE username = $1 AND role = $2',
            [username, role]
        );
        
        if (!user.rows.length) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const userData = user.rows[0];
        const passwordValid = await bcrypt.compare(password, userData.password);
        
        if (!passwordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        // Check if password reset is required
        if (userData.password_reset_required) {
            // Return special token for forced password change
            const resetToken = jwt.sign(
                { 
                    id: userData.id,
                    forcePasswordChange: true
                },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }  // Short expiry for security
            );
            
            return res.json({
                success: true,
                forcePasswordChange: true,
                token: resetToken,
                message: 'Password change required'
            });
        }
        
        // Normal login
        const token = jwt.sign(
            { id: userData.id, role: userData.role },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );
        
        res.json({
            success: true,
            token: token,
            user: {
                id: userData.id,
                username: userData.username,
                role: userData.role
            }
        });
        
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});
```

### 5. Endpoint for Setting New Password

```javascript
router.post('/api/auth/set-new-password', async (req, res) => {
    try {
        const userId = req.user.id; // From JWT
        const { currentPassword, newPassword, confirmPassword } = req.body;
        
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }
        
        if (newPassword.length < 8) {
            return res.status(400).json({ error: 'Password must be at least 8 characters' });
        }
        
        const user = await db.query(
            'SELECT password FROM users WHERE id = $1',
            [userId]
        );
        
        if (!user.rows.length) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        // Verify current password
        const passwordValid = await bcrypt.compare(
            currentPassword,
            user.rows[0].password
        );
        
        if (!passwordValid) {
            return res.status(401).json({ error: 'Current password is incorrect' });
        }
        
        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        
        // Update password and clear reset flag
        await db.query(
            `UPDATE users SET 
                password = $1,
                password_reset_required = false
            WHERE id = $2`,
            [hashedPassword, userId]
        );
        
        res.json({
            success: true,
            message: 'Password changed successfully'
        });
        
    } catch (error) {
        console.error('Set password error:', error);
        res.status(500).json({ error: 'Failed to set password' });
    }
});
```

---

## Frontend Changes When Password Change Required

Когда `forcePasswordChange: true`, фронтенд должен показать страницу установки нового пароля:

```javascript
// После логина, если forcePasswordChange === true
async function setNewPassword() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    const response = await apiRequest('/api/auth/set-new-password', {
        method: 'POST',
        body: JSON.stringify({
            currentPassword,
            newPassword,
            confirmPassword
        })
    });
    
    if (response.success) {
        // Get new token without forcePasswordChange
        const loginResponse = await apiRequest('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                username: userData.username,
                password: newPassword,
                role: userData.role
            })
        });
        
        // Store token and proceed
        store.setState({ token: loginResponse.token });
        window.router.navigate('/student/dashboard');
    }
}
```

---

## Summary

### Процесс сброса пароля:
1. ✅ Admin нажимает кнопку в профиле ученика
2. ✅ Видит подтверждающее окно (фронтенд готов)
3. ✅ Отправляет запрос POST /api/users/:id/reset-password без пароля (фронтенд готов)
4. ❌ **ТРЕБУЕТСЯ НА БЭКЕНДЕ**: Сервер генерирует пароль
5. ❌ **ТРЕБУЕТСЯ НА БЭКЕНДЕ**: Отправляет email с информацией
6. ✅ Admin видит результат с паролем (фронтенд готов)

### При входе ученика:
1. ❌ **ТРЕБУЕТСЯ НА БЭКЕНДЕ**: Проверить `password_reset_required = true`
2. ❌ **ТРЕБУЕТСЯ НА БЭКЕНДЕ**: Вернуть `forcePasswordChange: true`
3. ❌ **ТРЕБУЕТСЯ НА ФРОНТЕНДЕ**: Показать форму установки нового пароля
4. ❌ **ТРЕБУЕТСЯ НА БЭКЕНДЕ**: Endpoint для установки нового пароля

Build успешен! Фронтенд готов, нужна реализация на бэкенде.
