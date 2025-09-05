-- Fix RLS policies for waitlist table
-- Run this in your Supabase SQL Editor

-- First, let's see what policies currently exist
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'waitlist';

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public inserts" ON public.waitlist;
DROP POLICY IF EXISTS "Allow public reads" ON public.waitlist;
DROP POLICY IF EXISTS "Allow all operations" ON public.waitlist;

-- Create a permissive policy for waitlist table
CREATE POLICY "Allow all operations" ON public.waitlist
    FOR ALL
    TO public
    USING (true)
    WITH CHECK (true);

-- Verify the new policy
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'waitlist';









