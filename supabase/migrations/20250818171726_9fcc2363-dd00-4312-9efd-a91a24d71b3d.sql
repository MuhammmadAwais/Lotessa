-- Fix the security warning by setting proper search_path for the function
CREATE OR REPLACE FUNCTION public.update_visitor_last_seen()
RETURNS TRIGGER AS $$
BEGIN
  NEW.last_seen = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;