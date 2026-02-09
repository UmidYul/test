-- Migration: add OTP columns to users
-- Run as: psql -d your_db -f 001_add_otp_columns.sql

ALTER TABLE users
  ADD COLUMN IF NOT EXISTS otp text,
  ADD COLUMN IF NOT EXISTS otp_expires_at timestamptz;

-- Optionally: create index on otp_expires_at for cleanup queries
CREATE INDEX IF NOT EXISTS idx_users_otp_expires_at ON users (otp_expires_at);
