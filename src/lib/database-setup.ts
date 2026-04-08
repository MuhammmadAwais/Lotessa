import { supabase } from "@/integrations/supabase/client";

export interface DatabaseSetupResult {
  success: boolean;
  message: string;
  tableExists: boolean;
}

export async function checkContactsTable(): Promise<DatabaseSetupResult> {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select('id')
      .limit(1);

    if (error) {
      if (error.code === 'PGRST116' || error.code === 'PGRST205') {
        return {
          success: false,
          message: 'The contacts table does not exist. Please create it first.',
          tableExists: false
        };
      }
      return {
        success: false,
        message: `Database error: ${error.message}`,
        tableExists: false
      };
    }

    return {
      success: true,
      message: 'Contacts table exists and is accessible.',
      tableExists: true
    };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
    return {
      success: false,
      message: `Unexpected error: ${errorMessage}`,
      tableExists: false
    };
  }
}

export async function createContactsTable(): Promise<DatabaseSetupResult> {
  try {
    // Note: This requires the user to have admin privileges
    // For now, we'll just return instructions
    return {
      success: false,
      message: 'Please run the SQL from setup-contacts-table.sql in your Supabase dashboard SQL Editor.',
      tableExists: false
    };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
    return {
      success: false,
      message: `Error: ${errorMessage}`,
      tableExists: false
    };
  }
}

export function getSetupInstructions(): string {
  return `
To fix the contact form, you need to create the contacts table in your database:

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project
3. Go to SQL Editor in the left sidebar
4. Copy and paste this SQL:

CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    topic TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON public.contacts
    FOR INSERT WITH CHECK (true);

5. Click Run to execute the SQL
6. Refresh this page and try submitting the form again

Alternatively, you can run: npx supabase db push
  `;
}
