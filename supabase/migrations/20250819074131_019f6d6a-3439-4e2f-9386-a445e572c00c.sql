-- Fix critical security vulnerabilities in RLS policies

-- 1. CRITICAL: Remove public read access from waitlist table (contains customer emails and medical data)
DROP POLICY IF EXISTS "Allow reading all waitlist entries" ON public.waitlist;

-- Keep public insert for waitlist signup functionality
-- The existing "Anyone can submit to waitlist" policy remains unchanged

-- 2. Remove public read access from visitor tracking data  
DROP POLICY IF EXISTS "Allow public access to visitors" ON public.visitors;

-- Create a more restrictive policy for visitors - only allow reading aggregated data
CREATE POLICY "Allow reading visitor counts only" ON public.visitors
FOR SELECT USING (false); -- Completely restrict for now, will need admin access later

-- Allow public insert for visitor tracking to continue working
CREATE POLICY "Allow public visitor tracking" ON public.visitors  
FOR INSERT WITH CHECK (true);

-- Allow public update for visitor last_seen tracking
CREATE POLICY "Allow public visitor updates" ON public.visitors
FOR UPDATE USING (true) WITH CHECK (true);

-- 3. Remove public read access from interactions data
DROP POLICY IF EXISTS "Allow public access to interactions" ON public.interactions;  

-- Restrict interaction reads completely
CREATE POLICY "Allow reading interactions counts only" ON public.interactions
FOR SELECT USING (false); -- Completely restrict for now, will need admin access later

-- Allow public insert for interaction tracking to continue working  
CREATE POLICY "Allow public interaction tracking" ON public.interactions
FOR INSERT WITH CHECK (true);