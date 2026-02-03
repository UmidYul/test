# ZEDLY Database Structure

## О проекте
ZEDLY - это веб-приложение для школьного тестирования и управления образованием. Система поддерживает три роли пользователей: администратор, учитель и ученик. Позволяет создавать и проходить тесты по предметам, управлять классами, пользователями и школами. Использует PostgreSQL для хранения данных, Express.js для API, Vite для фронтенда.

## Структура базы данных

### 1. schools (Школы)
Хранит информацию о школах.
- `id` (UUID, PRIMARY KEY): Уникальный идентификатор школы
- `name` (VARCHAR): Название школы
- `address` (TEXT): Адрес школы
- `phone` (VARCHAR): Телефон школы
- `email` (VARCHAR): Email школы
- `director_name` (VARCHAR): ФИО директора
- `created_at` (TIMESTAMP): Дата создания
- `updated_at` (TIMESTAMP): Дата обновления

### 2. users (Пользователи)
Хранит всех пользователей системы.
- `id` (UUID, PRIMARY KEY): Уникальный идентификатор пользователя
- `username` (VARCHAR, UNIQUE): Логин пользователя
- `password` (VARCHAR): Хэшированный пароль
- `role` (VARCHAR): Роль (admin/teacher/student)
- `first_name` (VARCHAR): Имя
- `last_name` (VARCHAR): Фамилия
- `school_id` (UUID, FOREIGN KEY -> schools.id): ID школы
- `grade` (VARCHAR): Класс (для учеников, например "9")
- `grade_section` (VARCHAR): Буква класса (для учеников, например "А")
- `is_temporary_password` (BOOLEAN): Флаг временного пароля
- `require_password_change` (BOOLEAN): Требуется смена пароля
- `created_at` (TIMESTAMP): Дата создания
- `updated_at` (TIMESTAMP): Дата обновления

### 3. subjects (Предметы)
Список школьных предметов.
- `id` (UUID, PRIMARY KEY): Уникальный идентификатор предмета
- `name_ru` (VARCHAR): Название на русском
- `name_uz` (VARCHAR): Название на узбекском
- `questions_count` (INT): Количество вопросов (для статистики)

### 4. modules (Модули/Темы)
Тематические модули по предметам.
- `id` (UUID, PRIMARY KEY): Уникальный идентификатор модуля
- `subject_id` (UUID, FOREIGN KEY -> subjects.id): ID предмета
- `name_ru` (VARCHAR): Название модуля на русском
- `name_uz` (VARCHAR): Название модуля на узбекском
- `description_ru` (TEXT): Описание на русском
- `description_uz` (TEXT): Описание на узбекском
- `created_by` (UUID, FOREIGN KEY -> users.id): ID создателя
- `created_at` (TIMESTAMP): Дата создания

### 5. tests (Тесты)
Тесты в модулях.
- `id` (UUID, PRIMARY KEY): Уникальный идентификатор теста
- `module_id` (UUID, FOREIGN KEY -> modules.id): ID модуля
- `name_ru` (VARCHAR): Название теста на русском
- `name_uz` (VARCHAR): Название теста на узбекском
- `description_ru` (TEXT): Описание на русском
- `description_uz` (TEXT): Описание на узбекском
- `duration_minutes` (INT): Время на прохождение
- `max_score` (INT): Максимальный балл
- `questions_count` (INT): Количество вопросов
- `created_by` (UUID, FOREIGN KEY -> users.id): ID создателя
- `created_at` (TIMESTAMP): Дата создания

### 6. test_results (Результаты тестов)
Результаты прохождения тестов учениками.
- `id` (UUID, PRIMARY KEY): Уникальный идентификатор результата
- `test_id` (UUID, FOREIGN KEY -> tests.id): ID теста
- `user_id` (UUID, FOREIGN KEY -> users.id): ID ученика
- `score` (INT): Набранные баллы
- `percentage` (DECIMAL): Процент правильных ответов
- `started_at` (TIMESTAMP): Время начала
- `completed_at` (TIMESTAMP): Время завершения
- `answers` (JSONB): Ответы ученика (JSON)
- `time_spent_minutes` (INT): Затраченное время

### 7. test_progress (Прогресс тестов)
Сохранение прогресса незавершенных тестов.
- `id` (UUID, PRIMARY KEY): Уникальный идентификатор прогресса
- `test_id` (UUID, FOREIGN KEY -> tests.id): ID теста
- `user_id` (UUID, FOREIGN KEY -> users.id): ID ученика
- `current_question_index` (INT): Текущий вопрос
- `answers` (JSONB): Частичные ответы
- `started_at` (TIMESTAMP): Время начала
- `last_updated` (TIMESTAMP): Последнее обновление

### 8. classes (Классы)
Информация о классах.
- `id` (UUID, PRIMARY KEY): Уникальный идентификатор класса
- `grade` (VARCHAR): Номер класса (например "9")
- `name` (VARCHAR): Буква класса (например "А")
- `teacher_id` (UUID, FOREIGN KEY -> users.id): ID классного руководителя
- `student_count` (INT): Количество учеников
- `created_at` (TIMESTAMP): Дата создания

### 9. teacher_tests (Тесты для учителей)
Тесты для оценки компетенций учителей.
- `id` (UUID, PRIMARY KEY): Уникальный идентификатор теста
- `name_ru` (VARCHAR): Название на русском
- `name_uz` (VARCHAR): Название на узбекском
- `description_ru` (TEXT): Описание на русском
- `description_uz` (TEXT): Описание на узбекском
- `subject_id` (UUID, FOREIGN KEY -> subjects.id): ID предмета
- `created_by` (UUID, FOREIGN KEY -> users.id): ID создателя
- `duration_minutes` (INT): Время на прохождение
- `max_score` (INT): Максимальный балл
- `questions_count` (INT): Количество вопросов
- `created_at` (TIMESTAMP): Дата создания

### 10. teacher_test_results (Результаты тестов учителей)
Результаты прохождения тестов учителями.
- `id` (UUID, PRIMARY KEY): Уникальный идентификатор результата
- `teacher_test_id` (UUID, FOREIGN KEY -> teacher_tests.id): ID теста
- `user_id` (UUID, FOREIGN KEY -> users.id): ID учителя
- `score` (INT): Набранные баллы
- `percentage` (DECIMAL): Процент правильных ответов
- `started_at` (TIMESTAMP): Время начала
- `completed_at` (TIMESTAMP): Время завершения
- `answers` (JSONB): Ответы учителя (JSON)
- `time_spent_minutes` (INT): Затраченное время

### 11. control_tests (Контрольные работы)
Контрольные работы для классов.
- `id` (UUID, PRIMARY KEY): Уникальный идентификатор контрольной
- `name_ru` (VARCHAR): Название на русском
- `name_uz` (VARCHAR): Название на узбекском
- `description_ru` (TEXT): Описание на русском
- `description_uz` (TEXT): Описание на узбекском
- `subject_id` (UUID, FOREIGN KEY -> subjects.id): ID предмета
- `class_id` (UUID, FOREIGN KEY -> classes.id): ID класса
- `created_by` (UUID, FOREIGN KEY -> users.id): ID создателя
- `duration_minutes` (INT): Время на прохождение
- `max_score` (INT): Максимальный балл
- `questions_count` (INT): Количество вопросов
- `scheduled_date` (TIMESTAMP): Дата проведения
- `created_at` (TIMESTAMP): Дата создания

### 12. control_test_results (Результаты контрольных работ)
Результаты прохождения контрольных работ.
- `id` (UUID, PRIMARY KEY): Уникальный идентификатор результата
- `control_test_id` (UUID, FOREIGN KEY -> control_tests.id): ID контрольной
- `user_id` (UUID, FOREIGN KEY -> users.id): ID ученика
- `score` (INT): Набранные баллы
- `percentage` (DECIMAL): Процент правильных ответов
- `started_at` (TIMESTAMP): Время начала
- `completed_at` (TIMESTAMP): Время завершения
- `answers` (JSONB): Ответы ученика (JSON)
- `time_spent_minutes` (INT): Затраченное время

## Дополнительные таблицы
- `otp_codes`: Хранение OTP кодов для временных паролей (id, user_id, code, expires_at)

## Связи и зависимости
- Пользователи привязаны к школам
- Ученики имеют grade и grade_section из выбранного класса
- Тесты организованы по модулям и предметам
- Результаты привязаны к тестам и пользователям
- Классы имеют классного руководителя
- Контрольные работы назначаются на классы