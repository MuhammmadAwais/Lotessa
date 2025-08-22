# 🚀 Quick Database Setup for Contact Form

Your contact form is ready but needs the database table created. Follow these steps:

## Step 1: Go to Supabase Dashboard
1. Visit [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Sign in to your account
3. Select your project: **ohnoradpjiquiezxtbob**

## Step 2: Open SQL Editor
1. In the left sidebar, click **SQL Editor**
2. Click **New Query**

## Step 3: Create the Table
Copy and paste this SQL code:

```sql
-- Create contacts table
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    topic TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create a simple policy that allows ALL operations
-- This will make the contact form work immediately
CREATE POLICY "Allow all operations" ON public.contacts
    FOR ALL USING (true)
    WITH CHECK (true);
```

## Step 4: Run the SQL
1. Click the **Run** button (▶️)
2. Wait for the success message

## Step 5: Test the Form
1. Go back to your website
2. Refresh the page
3. Try submitting the contact form
4. Check your Supabase dashboard > Table Editor > contacts to see the data

## 🚨 If You Get RLS Policy Errors

If you see an error like "new row violates row-level security policy", run this additional SQL:

```sql
-- Fix RLS Policies
DROP POLICY IF EXISTS "Allow public inserts" ON public.contacts;
DROP POLICY IF EXISTS "Allow authenticated reads" ON public.contacts;

CREATE POLICY "Allow all operations" ON public.contacts
    FOR ALL USING (true)
    WITH CHECK (true);
```

This creates a simple policy that allows all operations on the contacts table.

## ✅ What This Creates
- **contacts** table with fields: id, name, email, topic, message, created_at, updated_at
- Row Level Security enabled
- Policies allowing public form submissions
- Automatic timestamps

## 🔧 Alternative: Use Supabase CLI
If you have Supabase CLI installed:
```bash
npx supabase db push
```

## 🆘 Need Help?
- Check the browser console for errors
- Verify your Supabase credentials in `src/integrations/supabase/client.ts`
- Make sure you're in the correct project

Your contact form will work perfectly once this table is created! 🎉
