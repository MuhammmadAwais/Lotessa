-- Create visitors table for unique browser tracking
CREATE TABLE public.visitors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  browser_id TEXT NOT NULL UNIQUE,
  first_seen TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_seen TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  user_agent TEXT,
  ip_address INET
);

-- Create interactions table for tracking button events
CREATE TABLE public.interactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  browser_id TEXT NOT NULL,
  event_type TEXT NOT NULL CHECK (event_type IN ('hover', 'click')),
  element_name TEXT NOT NULL CHECK (element_name IN ('download_button_header', 'download_button_footer', 'download_button_hero')),
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  page_url TEXT,
  session_id TEXT
);

-- Enable Row Level Security
ALTER TABLE public.visitors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.interactions ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public access (since this is visitor tracking)
CREATE POLICY "Allow public access to visitors" 
ON public.visitors 
FOR ALL 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Allow public access to interactions" 
ON public.interactions 
FOR ALL 
USING (true) 
WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_visitors_browser_id ON public.visitors(browser_id);
CREATE INDEX idx_interactions_browser_id ON public.interactions(browser_id);
CREATE INDEX idx_interactions_event_type ON public.interactions(event_type);
CREATE INDEX idx_interactions_element_name ON public.interactions(element_name);
CREATE INDEX idx_interactions_timestamp ON public.interactions(timestamp);

-- Create function to update last_seen timestamp
CREATE OR REPLACE FUNCTION public.update_visitor_last_seen()
RETURNS TRIGGER AS $$
BEGIN
  NEW.last_seen = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_visitors_last_seen
BEFORE UPDATE ON public.visitors
FOR EACH ROW
EXECUTE FUNCTION public.update_visitor_last_seen();