-- Fix RLS Policies for contacts table
-- Run this in your Supabase Dashboard > SQL Editor

-- First, drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public inserts" ON public.contacts;
DROP POLICY IF EXISTS "Allow authenticated reads" ON public.contacts;

-- Create a simple policy that allows ALL operations for now
-- This will make the contact form work immediately
CREATE POLICY "Allow all operations" ON public.contacts
    FOR ALL USING (true)
    WITH CHECK (true);

-- Alternative: If you want more restrictive policies, use these instead:
-- CREATE POLICY "Allow public inserts" ON public.contacts
--     FOR INSERT WITH CHECK (true);
-- 
-- CREATE POLICY "Allow public reads" ON public.contacts
--     FOR SELECT USING (true);
-- 
-- CREATE POLICY "Allow public updates" ON public.contacts
--     FOR UPDATE USING (true)
--     WITH CHECK (true);

-- Verify the policies were created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'contacts';
