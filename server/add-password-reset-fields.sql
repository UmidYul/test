-- Add password reset fields to users table
ALTER TABLE users ADD COLUMN IF NOT EXISTS password_reset_required BOOLEAN DEFAULT FALSE;
ALTER TABLE users ADD COLUMN IF NOT EXISTS password_reset_at TIMESTAMP NULL;
ALTER TABLE users ADD COLUMN IF NOT EXISTS password_reset_by_admin_id UUID NULL;

-- Add foreign key constraint
ALTER TABLE users ADD CONSTRAINT IF NOT EXISTS fk_password_reset_admin 
  FOREIGN KEY (password_reset_by_admin_id) REFERENCES users(id) ON DELETE SET NULL;

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_users_password_reset_required ON users(password_reset_required);

COMMIT;
