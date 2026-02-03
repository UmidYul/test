// DBML for dbdiagram.io
// Clean version: только нужные таблицы под текущую модель (без лишнего дублирования).

Enum user_role {
  admin
  teacher
  student
}

Enum user_status {
  active
  blocked
  deleted
}

Table users {
  id uuid [pk]
  role user_role [not null]

  username varchar [not null, unique]
  password_hash varchar [not null]

  first_name varchar [not null]
  last_name varchar [not null]

  email varchar [unique] // NULL allowed; email уникален
  phone varchar          // NOT unique; может повторяться

  status user_status [not null, default: 'active']
  created_at timestamp [not null]
  updated_at timestamp [not null]

  Indexes {
    (role)
    (phone)
  }

  Note: 'Rule: email OR phone must be provided (CHECK in DB).'
}

Table teacher_profiles {
  user_id uuid [pk, ref: > users.id]
  homeroom_class_id uuid [ref: > classes.id]

  Note: 'Exists only if users.role=teacher (enforce via app/trigger).'
}

Table subjects {
  id uuid [pk]
  name varchar [not null]
}

Table classes {
  id uuid [pk]
  grade varchar [not null]    // пример: "9"
  section varchar [not null]  // пример: "A"
  created_at timestamp [not null]

  Indexes {
    (grade, section)
  }
}

Table teacher_teaching_assignments {
  teacher_id uuid [not null, ref: > users.id]
  class_id uuid [not null, ref: > classes.id]
  subject_id uuid [not null, ref: > subjects.id]

  is_active boolean [not null, default: true]
  created_at timestamp [not null]

  Indexes {
    (teacher_id, class_id, subject_id) [unique]
    (teacher_id)
    (class_id)
    (subject_id)
  }

  Note: 'Access rule: teacher can view analytics/manage tests in class if assignment exists and is_active=true.'
}

Table class_students {
  class_id uuid [not null, ref: > classes.id]
  student_id uuid [not null, ref: > users.id]

  enrolled_at timestamp [not null]
  left_at timestamp

  Indexes {
    (class_id, student_id) [unique]
    (class_id)
    (student_id)
  }
}

Enum test_target_role {
  teacher
  student
}

Enum test_status {
  draft
  published
  archived
}

Enum attempt_status {
  in_progress
  completed
  expired
  canceled
}

Table tests {
  id uuid [pk]

  title varchar [not null]
  duration_minutes int [not null]
  pass_percent int [not null] // 0..100

  created_at timestamp [not null]
  updated_at timestamp [not null]

  created_by uuid [not null, ref: > users.id]
  target_role test_target_role [not null]

  status test_status [not null, default: 'draft']
  attempt_limit int // NULL = без лимита

  Indexes {
    (created_by)
    (target_role)
    (status)
    (created_at)
  }

  Note: 'Recommended DB CHECK: pass_percent between 0 and 100.'
}

Enum question_type {
  single_choice
  multiple_choice
  text
}

Table test_questions {
  id uuid [pk]
  test_id uuid [not null, ref: > tests.id]

  question_type question_type [not null]
  text varchar [not null]

  points int [not null, default: 1]
  order_no int [not null]

  Indexes {
    (test_id, order_no) [unique]
    (test_id)
  }
}

Table question_options {
  id uuid [pk]
  question_id uuid [not null, ref: > test_questions.id]

  text varchar [not null]
  is_correct boolean [not null, default: false]
  order_no int [not null]

  Indexes {
    (question_id, order_no) [unique]
    (question_id)
  }
}

Table test_attempts {
  id uuid [pk]

  test_id uuid [not null, ref: > tests.id]
  user_id uuid [not null, ref: > users.id] // student или teacher (должен совпадать с tests.target_role)

  attempt_no int [not null, default: 1]

  started_at timestamp
  completed_at timestamp

  status attempt_status [not null, default: 'in_progress']

  score numeric
  percent int
  passed boolean
  time_spent_seconds int

  Indexes {
    (user_id, completed_at)
    (test_id, completed_at)
    (test_id, user_id, attempt_no) [unique]
    (test_id, user_id, completed_at)
  }

  Note: 'Enforce in app/trigger: users.role must match tests.target_role.'
}

Table attempt_answers {
  id uuid [pk]

  attempt_id uuid [not null, ref: > test_attempts.id]
  question_id uuid [not null, ref: > test_questions.id]

  free_text varchar

  is_correct boolean
  points_awarded int

  created_at timestamp [not null]
  updated_at timestamp [not null]

  Indexes {
    (attempt_id, question_id) [unique]
    (attempt_id)
    (question_id)
  }
}

Table attempt_answer_options {
  attempt_answer_id uuid [not null, ref: > attempt_answers.id]
  option_id uuid [not null, ref: > question_options.id]

  Indexes {
    (attempt_answer_id, option_id) [unique]
    (attempt_answer_id)
    (option_id)
  }
}
