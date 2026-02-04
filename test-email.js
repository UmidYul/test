#!/usr/bin/env node
/**
 * 📧 Тест подключения SMTP email сервера
 * Проверяет работает ли email отправка
 */

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Загружаем переменные окружения
dotenv.config({ path: '.env' });

console.log('\n📧 ====== ТЕСТ SMTP ПОДКЛЮЧЕНИЯ ======\n');

// Показываем текущие параметры
console.log('📋 Текущие параметры:');
console.log(`   SMTP_HOST: ${process.env.SMTP_HOST}`);
console.log(`   SMTP_PORT: ${process.env.SMTP_PORT}`);
console.log(`   SMTP_USER: ${process.env.SMTP_USER}`);
console.log(`   SMTP_PASS: ${process.env.SMTP_PASS ? '✅ Установлен' : '❌ НЕ установлен'}`);
console.log(`   SMTP_FROM: ${process.env.SMTP_FROM}`);
console.log();

// Проверяем что все параметры установлены
if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('❌ ОШИБКА: Не все параметры SMTP установлены в .env файле!');
    console.log('   Проверьте наличие:');
    console.log('   - SMTP_HOST');
    console.log('   - SMTP_PORT');
    console.log('   - SMTP_USER');
    console.log('   - SMTP_PASS');
    process.exit(1);
}

// Создаем транспортер
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === '465', // true для 465, false для других портов
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

console.log('🔌 Подключаемся к SMTP серверу...\n');

// Тестируем подключение
transporter.verify((error, success) => {
    if (error) {
        console.log('❌ ОШИБКА ПОДКЛЮЧЕНИЯ:\n');
        console.log(error.message);
        console.log('\n📝 Возможные решения:');
        console.log('   1. Проверить правильность параметров в .env');
        console.log('   2. Убедиться что SMTP_PORT соответствует протоколу:');
        console.log('      - 587 для TLS');
        console.log('      - 465 для SSL');
        console.log('   3. Проверить что пароль правильный');
        console.log('   4. Проверить доступ к интернету');
        console.log('   5. Убедиться что SMTP сервер доступен');
        process.exit(1);
    } else {
        console.log('✅ УСПЕШНО ПОДКЛЮЧИЛИСЬ К SMTP!\n');
        console.log('📧 Теперь отправляем тестовое письмо...\n');

        // Отправляем тестовое письмо
        transporter.sendMail({
            from: process.env.SMTP_FROM || '"ZEDLY Platform" <noreply@zedly.uz>',
            to: process.env.SMTP_USER, // Отправляем себе
            subject: '✅ Тестовое письмо от ZEDLY',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                </head>
                <body style="font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px;">
                    <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <h1 style="color: #10b981; margin-top: 0;">✅ Тестовое письмо</h1>
                        
                        <p style="color: #666; font-size: 16px; line-height: 1.6;">
                            Это письмо отправлено в целях тестирования подключения SMTP сервера.
                        </p>
                        
                        <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px; margin: 20px 0; border-radius: 4px;">
                            <strong style="color: #059669;">✅ SMTP подключение работает!</strong>
                        </div>
                        
                        <p style="color: #666; font-size: 14px;">
                            Если вы это видите, значит:
                        </p>
                        <ul style="color: #666; font-size: 14px; line-height: 1.8;">
                            <li>✅ SMTP сервер доступен</li>
                            <li>✅ Параметры подключения правильные</li>
                            <li>✅ Email отправка работает</li>
                            <li>✅ Можете использовать систему</li>
                        </ul>
                        
                        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                        <p style="color: #999; font-size: 12px; margin-bottom: 0;">
                            © 2025 ZEDLY Platform
                        </p>
                    </div>
                </body>
                </html>
            `,
            text: 'Это письмо отправлено в целях тестирования. Если вы его получили - SMTP работает!'
        }, (error, info) => {
            if (error) {
                console.log('❌ ОШИБКА ПРИ ОТПРАВКЕ:\n');
                console.log(error.message);
                process.exit(1);
            } else {
                console.log('✅ ПИСЬМО ОТПРАВЛЕНО УСПЕШНО!\n');
                console.log(`📨 Письмо отправлено на: ${process.env.SMTP_USER}`);
                console.log(`   ID письма: ${info.messageId}`);
                console.log('\n🎉 ВСЕ РАБОТАЕТ ПРАВИЛЬНО!\n');
                console.log('Теперь вы можете:');
                console.log('   1. Запустить сервер: npm run dev');
                console.log('   2. Открыть админ панель');
                console.log('   3. Добавить пользователя');
                console.log('   4. Email с OTP будет отправлен');
                console.log();
                process.exit(0);
            }
        });
    }
});
