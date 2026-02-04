# 🔐 Улучшения системы авторизации

## Критические проблемы

### 1. JWT Secret жёстко закодирован
**Проблема:** `'your-super-secret-jwt-key'` - слабый fallback секрет
**Риск:** Токены можно подделать
**Решение:**
```javascript
if (!process.env.JWT_SECRET) {
  console.error('❌ FATAL: JWT_SECRET not set in environment!');
  process.exit(1);
}
const JWT_SECRET = process.env.JWT_SECRET;
```

### 2. Отсутствие Rate Limiting
**Проблема:** Можно перебирать пароли
**Решение:** Установить `express-rate-limit`
```javascript
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 5, // макс 5 попыток
  message: { error: 'Слишком много попыток входа. Попробуйте через 15 минут.' },
  standardHeaders: true,
  legacyHeaders: false,
});

app.post('/api/auth/login', loginLimiter, async (req, res) => { /* ... */ });
```

### 3. Токены не инвалидируются
**Проблема:** После logout токен работает до истечения
**Решение:** Использовать Redis для blacklist или refresh tokens
```javascript
// Простое решение: хранить активные токены в памяти/БД
const activeTokens = new Set();

// При логине
activeTokens.add(token);

// При logout
app.post('/api/auth/logout', auth, (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  activeTokens.delete(token);
  res.json({ success: true });
});

// В auth middleware
if (!activeTokens.has(token)) {
  return res.status(401).json({ message: 'Token invalidated' });
}
```

### 4. Admin ID из токена не совпадает с БД
**Проблема:** В токене записан старый/неправильный ID
**Решение:**
```javascript
// При логине ВСЕГДА брать ID из БД, а не генерировать
const token = jwt.sign(
  { userId: user.id, role: user.role }, // user.id из БД!
  JWT_SECRET,
  { expiresIn: '7d' }
);
```

### 5. Нет защиты от CSRF
**Решение:** Использовать `csurf` middleware
```javascript
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

app.use(csrfProtection);

// Отправлять CSRF токен на клиент
app.get('/api/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});
```

## Дополнительные улучшения

### 6. Логирование попыток входа
```javascript
// Логировать все неудачные попытки
const failedLogins = [];

if (!user || !isMatch) {
  failedLogins.push({
    username,
    ip: req.ip,
    timestamp: new Date(),
    userAgent: req.headers['user-agent']
  });
  
  // Блокировать IP после 10 неудачных попыток
  const recentFailures = failedLogins.filter(
    f => f.ip === req.ip && Date.now() - f.timestamp < 3600000
  );
  
  if (recentFailures.length >= 10) {
    return res.status(429).json({ 
      error: 'IP заблокирован из-за множественных неудачных попыток' 
    });
  }
}
```

### 7. Refresh Tokens
```javascript
// Короткий access token (15 мин) + долгий refresh token (7 дней)
const accessToken = jwt.sign(
  { userId: user.id, role: user.role },
  JWT_SECRET,
  { expiresIn: '15m' }
);

const refreshToken = jwt.sign(
  { userId: user.id, type: 'refresh' },
  JWT_SECRET,
  { expiresIn: '7d' }
);

// Хранить refresh token в БД
await pool.query(
  'INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES ($1, $2, $3)',
  [user.id, refreshToken, new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)]
);

res.json({ accessToken, refreshToken });
```

### 8. Двухфакторная аутентификация (2FA)
```javascript
// Генерировать TOTP секрет для пользователя
const speakeasy = require('speakeasy');

const secret = speakeasy.generateSecret({ name: 'Zedly Platform' });

// Верифицировать при логине
const verified = speakeasy.totp.verify({
  secret: user.twofa_secret,
  encoding: 'base32',
  token: req.body.twoFactorCode
});
```

### 9. Сессии с истечением
```javascript
// Обновлять last_activity при каждом запросе
const auth = async (req, res, next) => {
  // ... проверка токена ...
  
  await pool.query(
    'UPDATE users SET last_activity = NOW() WHERE id = $1',
    [req.userId]
  );
  
  next();
};

// Выходить автоматически если неактивен 30 минут
const { rows } = await pool.query(
  'SELECT last_activity FROM users WHERE id = $1',
  [userId]
);

if (Date.now() - new Date(rows[0].last_activity) > 30 * 60 * 1000) {
  return res.status(401).json({ message: 'Session expired due to inactivity' });
}
```

### 10. Хеширование паролей с PEPPER
```javascript
const PEPPER = process.env.PASSWORD_PEPPER; // Дополнительная секретная строка

const hashedPassword = await bcrypt.hash(
  password + PEPPER,
  10
);

// При проверке
const isMatch = await bcrypt.compare(
  password + PEPPER,
  user.password_hash
);
```

## Приоритет внедрения

### Срочно (критично для безопасности):
1. ✅ Убрать fallback JWT secret
2. ✅ Добавить rate limiting на логин
3. ✅ Исправить проблему с admin ID из токена

### Важно (рекомендуется):
4. ⚠️ Реализовать logout с инвалидацией токенов
5. ⚠️ Добавить логирование неудачных попыток
6. ⚠️ Внедрить CSRF защиту

### Желательно (для продакшена):
7. 🔵 Refresh tokens
8. 🔵 2FA для админов
9. 🔵 Автоматический logout при неактивности
10. 🔵 PEPPER для паролей

## Немедленные действия

1. **Добавить в .env:**
```bash
JWT_SECRET=<генерировать 64-символьную случайную строку>
PASSWORD_PEPPER=<ещё одна случайная строка>
```

2. **Переавторизовать админа** - чтобы токен содержал правильный ID из БД

3. **Установить пакеты:**
```bash
npm install express-rate-limit helmet
```

4. **Добавить security headers:**
```javascript
const helmet = require('helmet');
app.use(helmet());
```
