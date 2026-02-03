-- Миграция: удалить teacher_profiles, добавить homeroom_assignments

-- 1. Создать таблицу homeroom_assignments, если не существует
CREATE TABLE IF NOT EXISTS homeroom_assignments (
  id uuid PRIMARY KEY,
  teacher_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  class_id uuid NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  start_at timestamp NOT NULL DEFAULT now(),
  end_at timestamp
);

-- Индексы
CREATE INDEX IF NOT EXISTS idx_homeroom_assignments_teacher ON homeroom_assignments(teacher_id);
CREATE INDEX IF NOT EXISTS idx_homeroom_assignments_class ON homeroom_assignments(class_id);
CREATE INDEX IF NOT EXISTS idx_homeroom_assignments_end_at ON homeroom_assignments(end_at);

-- 2. Перенести данные из teacher_profiles, если таблица существует
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'teacher_profiles') THEN
    -- Вставить активные назначения
    INSERT INTO homeroom_assignments (id, teacher_id, class_id, start_at, end_at)
    SELECT gen_random_uuid(), user_id, homeroom_class_id, now(), NULL
    FROM teacher_profiles
    WHERE homeroom_class_id IS NOT NULL;

    -- Удалить старую таблицу
    DROP TABLE teacher_profiles;
    RAISE NOTICE 'Таблица teacher_profiles удалена, данные перенесены в homeroom_assignments';
  ELSE
    RAISE NOTICE 'Таблица teacher_profiles не существует, миграция пропущена';
  END IF;
END $$;