-- Create newsletter subscriptions table
CREATE TABLE public.newsletter_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true,
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Enable Row Level Security
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to subscribe
CREATE POLICY "Anyone can subscribe to newsletter"
ON public.newsletter_subscriptions
FOR INSERT
WITH CHECK (true);

-- Admins can view all subscriptions
CREATE POLICY "Admins can view all subscriptions"
ON public.newsletter_subscriptions
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can update subscriptions (activate/deactivate)
CREATE POLICY "Admins can update subscriptions"
ON public.newsletter_subscriptions
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can delete subscriptions
CREATE POLICY "Admins can delete subscriptions"
ON public.newsletter_subscriptions
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create index for faster email lookups
CREATE INDEX idx_newsletter_email ON public.newsletter_subscriptions(email);
CREATE INDEX idx_newsletter_active ON public.newsletter_subscriptions(is_active);