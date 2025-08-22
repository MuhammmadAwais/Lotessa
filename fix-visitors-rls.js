import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ohnoradpjiquiezxtbob.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9obm9yYWRwamlxdWllenh0Ym9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzY3MzYsImV4cCI6MjA3MTExMjczNn0.tTo5p2HPIZ_bzmPKWbu3pV3LwFqvmI5eBmiE7iZxP0Q";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

async function checkAndFixVisitorsRLS() {
  console.log('🔍 Checking visitors table RLS policies...\n');

  try {
    // First, let's try to query the table to see if we can read
    console.log('📊 Testing read access to visitors table...');
    const { data: readTest, error: readError } = await supabase
      .from('visitors')
      .select('*')
      .limit(1);

    if (readError) {
      console.error('❌ Read access error:', readError);
    } else {
      console.log('✅ Read access working');
    }

    // Try to insert a simple test record
    console.log('\n📝 Testing insert access to visitors table...');
    const testVisitor = {
      browser_id: 'test_browser_001',
      first_seen: new Date().toISOString(),
      last_seen: new Date().toISOString(),
      user_agent: 'Test User Agent',
      ip_address: '127.0.0.1'
    };

    const { data: insertTest, error: insertError } = await supabase
      .from('visitors')
      .insert([testVisitor])
      .select();

    if (insertError) {
      console.error('❌ Insert access error:', insertError);
      console.log('\n💡 This suggests RLS policies are blocking inserts.');
      console.log('You may need to update the RLS policies in your Supabase dashboard.');
    } else {
      console.log('✅ Insert access working');
      console.log('Inserted test record:', insertTest);
    }

    // Let's also check if we can see the table structure
    console.log('\n🔍 Checking table structure...');
    const { data: structureTest, error: structureError } = await supabase
      .from('visitors')
      .select('*')
      .limit(0);

    if (structureError) {
      console.error('❌ Structure check error:', structureError);
    } else {
      console.log('✅ Table structure accessible');
    }

  } catch (error) {
    console.error('💥 Unexpected error:', error);
  }
}

// Run the check
checkAndFixVisitorsRLS();



