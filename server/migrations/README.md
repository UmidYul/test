This folder contains SQL migrations for the mock server.

001_add_otp_columns.sql
- Adds `otp` (text) and `otp_expires_at` (timestamptz) columns to `users` table.

Run with psql:

```bash
psql -h <host> -U <user> -d <database> -f server/migrations/001_add_otp_columns.sql
```

Or, if you use a migration tool, include this file as a migration step.
