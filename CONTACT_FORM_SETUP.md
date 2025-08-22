# Contact Form Database Setup

Your contact form is now fully functional and ready to save data to your Supabase database! Here's what you need to do to complete the setup:

## 1. Create the Database Table

You need to create the `contacts` table in your Supabase database. You have two options:

### Option A: Use the SQL File (Recommended)
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to **SQL Editor** in the left sidebar
4. Copy and paste the contents of `setup-contacts-table.sql` into the editor
5. Click **Run** to execute the SQL

### Option B: Use Supabase CLI
If you have Supabase CLI installed:
```bash
npx supabase db push
```

## 2. What's Been Added

### Database Table Structure
- **id**: Unique identifier (UUID)
- **name**: User's full name
- **email**: User's email address
- **topic**: Selected topic (app-support, partnership, general, media)
- **message**: User's message content
- **created_at**: Timestamp when the message was sent
- **updated_at**: Timestamp when the message was last updated

### Form Features
- ✅ Form validation (all fields required)
- ✅ Real-time form state management
- ✅ Loading states during submission
- ✅ Success/error toast notifications
- ✅ Form reset after successful submission
- ✅ Database integration with Supabase

## 3. Security
- Row Level Security (RLS) is enabled
- Anyone can submit contact forms (INSERT policy)
- Only authenticated users can read the data (SELECT policy)
- You can adjust these policies in your Supabase dashboard

## 4. Testing
1. Start your development server: `npm run dev`
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check your Supabase dashboard > Table Editor > contacts to see the saved data

## 5. Customization
You can modify the form by:
- Adding more fields in the `ContactFormData` interface
- Updating the database table structure
- Changing validation rules
- Modifying the success/error messages

## 6. Troubleshooting
If you encounter issues:
1. Check the browser console for errors
2. Verify your Supabase credentials in `src/integrations/supabase/client.ts`
3. Ensure the `contacts` table exists in your database
4. Check that RLS policies are correctly configured

Your contact form is now production-ready! 🎉
