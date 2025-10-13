-- Create article_clicks table to track user interactions with articles
-- Run this in your Supabase SQL Editor

-- Create the article_clicks table
CREATE TABLE IF NOT EXISTS public.article_clicks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    article_id INTEGER NOT NULL,
    article_title TEXT NOT NULL,
    browser_id TEXT NOT NULL,
    session_id TEXT NOT NULL,
    page_url TEXT NOT NULL,
    clicked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_agent TEXT,
    ip_address INET
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_article_clicks_article_id ON public.article_clicks(article_id);
CREATE INDEX IF NOT EXISTS idx_article_clicks_clicked_at ON public.article_clicks(clicked_at);
CREATE INDEX IF NOT EXISTS idx_article_clicks_browser_id ON public.article_clicks(browser_id);

-- Enable Row Level Security (RLS)
ALTER TABLE public.article_clicks ENABLE ROW LEVEL SECURITY;

-- Create a permissive policy for all operations
CREATE POLICY "Allow all operations" ON public.article_clicks
    FOR ALL
    TO public
    USING (true)
    WITH CHECK (true);

-- Insert some sample data for testing
INSERT INTO public.article_clicks (article_id, article_title, browser_id, session_id, page_url, user_agent, ip_address) VALUES
(1, 'The Future of GLP-1 Access in the UK', 'browser_001', 'session_001', '/article/1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', '192.168.1.1'),
(2, 'Why Tracking Your GLP-1 Matters, Even When Prices Soar', 'browser_003', 'session_003', '/article/2', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', '192.168.1.3'),
(3, 'Tracking for Sustained Long-Term GLP-1 Goals', 'browser_004', 'session_005', '/article/3', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15', '192.168.1.4'),
(4, 'What Are GLP-1 Medications?', 'browser_005', 'session_006', '/article/4', 'Mozilla/5.0 (Android 11; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0', '192.168.1.5'),
(5, 'How Does GLP-1 Medication Work?', 'browser_006', 'session_008', '/article/5', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36', '192.168.1.6'),
(6, 'Common Myths About GLP-1 Weight Loss Drugs & The Truths You Actually Need', 'browser_002', 'session_010', '/article/6', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36', '192.168.1.2');

-- Verify the table was created and populated
SELECT 
    'Table created successfully' as status,
    COUNT(*) as total_records,
    COUNT(DISTINCT article_id) as unique_articles,
    COUNT(DISTINCT browser_id) as unique_visitors
FROM public.article_clicks;











