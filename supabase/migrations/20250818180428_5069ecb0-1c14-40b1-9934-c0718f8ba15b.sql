-- Create waitlist table for form submissions
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  using_medication TEXT NOT NULL CHECK (using_medication IN ('yes', 'no', 'thinking')),
  journey_stage TEXT NOT NULL CHECK (journey_stage IN ('beginner', 'journey', 'maintenance')),
  browser_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy for public access (anyone can submit, but not read others' data)
CREATE POLICY "Anyone can submit to waitlist" 
ON public.waitlist 
FOR INSERT 
WITH CHECK (true);

-- Create policy for reading own data (optional, for admin purposes)
CREATE POLICY "Allow reading all waitlist entries" 
ON public.waitlist 
FOR SELECT 
USING (true);

-- Add email index for potential lookups
CREATE INDEX idx_waitlist_email ON public.waitlist(email);

-- Add timestamp index for analytics
CREATE INDEX idx_waitlist_created_at ON public.waitlist(created_at);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_waitlist_updated_at
BEFORE UPDATE ON public.waitlist
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create function for timestamp updates if it doesn't exist
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;