# Supabase RLS Policy Setup

The `api_keys` table has Row-Level Security (RLS) enabled, which requires policies to allow operations.

## Option 1: Allow All Operations (Development Only)

Run this SQL in your Supabase SQL Editor:

```sql
-- Enable RLS (if not already enabled)
ALTER TABLE api_keys ENABLE ROW LEVEL SECURITY;

-- Allow all operations for authenticated users
CREATE POLICY "Allow all for authenticated users" ON api_keys
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- OR: Allow all operations for everyone (less secure, for development)
CREATE POLICY "Allow all operations" ON api_keys
  FOR ALL
  USING (true)
  WITH CHECK (true);
```

## Option 2: More Secure Policies (Recommended for Production)

```sql
-- Allow users to read their own API keys
CREATE POLICY "Users can read own keys" ON api_keys
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Allow users to insert their own API keys
CREATE POLICY "Users can insert own keys" ON api_keys
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Allow users to update their own API keys
CREATE POLICY "Users can update own keys" ON api_keys
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own API keys
CREATE POLICY "Users can delete own keys" ON api_keys
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);
```

**Note:** Option 2 requires a `user_id` column in your `api_keys` table and proper authentication setup.

## Option 3: Disable RLS (Not Recommended)

```sql
ALTER TABLE api_keys DISABLE ROW LEVEL SECURITY;
```

**Warning:** This removes all security. Only use for development/testing.

