import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ohnoradpjiquiezxtbob.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9obm9yYWRwamlxdWllenh0Ym9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzY3MzYsImV4cCI6MjA3MTExMjczNn0.tTo5p2HPIZ_bzmPKWbu3pV3LwFqvmI5eBmiE7iZxP0Q";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

async function testWaitlistAccess() {
  console.log('🔍 Testing waitlist table access and RLS policies...\n');

  try {
    // Test 1: Basic read access
    console.log('📊 TEST 1: Basic read access');
    const { data: readData, error: readError } = await supabase
      .from('waitlist')
      .select('*')
      .limit(5);

    if (readError) {
      console.error('❌ Read access blocked by RLS:', readError.message);
    } else {
      console.log(`✅ Read access working: ${readData?.length || 0} records`);
    }

    // Test 2: Check table structure
    console.log('\n📊 TEST 2: Table structure check');
    const { data: structureData, error: structureError } = await supabase
      .from('waitlist')
      .select('*')
      .limit(0);

    if (structureError) {
      console.error('❌ Structure check error:', structureError.message);
    } else {
      console.log('✅ Table structure accessible');
      console.log('Columns available:', Object.keys(structureData[0] || {}));
    }

    // Test 3: Try to insert a test record
    console.log('\n📊 TEST 3: Insert access test');
    const testWaitlistEntry = {
      email: 'test@example.com',
      using_medication: 'ozempic',
      browser_id: 'test_browser_001',
      created_at: new Date().toISOString()
    };

    const { data: insertData, error: insertError } = await supabase
      .from('waitlist')
      .insert([testWaitlistEntry])
      .select();

    if (insertError) {
      console.error('❌ Insert access blocked:', insertError.message);
      console.log('💡 This suggests RLS policies are blocking inserts');
    } else {
      console.log('✅ Insert access working');
      console.log('Inserted test record:', insertData);
      
      // Clean up the test record
      if (insertData && insertData.length > 0) {
        const { error: deleteError } = await supabase
          .from('waitlist')
          .delete()
          .eq('id', insertData[0].id);
        
        if (deleteError) {
          console.log('⚠️ Could not clean up test record:', deleteError.message);
        } else {
          console.log('✅ Test record cleaned up');
        }
      }
    }

    // Test 4: Check if table is empty due to RLS
    console.log('\n📊 TEST 4: Empty table investigation');
    const { count, error: countError } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('❌ Count access blocked:', countError.message);
      console.log('💡 This confirms RLS is blocking all access');
    } else {
      console.log(`✅ Count access working: ${count} total records`);
      if (count === 0) {
        console.log('💡 Table is genuinely empty (no RLS blocking)');
      }
    }

    // Summary and solution
    console.log('\n📈 WAITLIST ACCESS SUMMARY:');
    if (readError || insertError) {
      console.log('🔒 RLS policies are blocking access to waitlist table');
      console.log('💡 SOLUTION: Update RLS policies to allow public access');
      console.log('\n🛠️ To fix this, run this SQL in your Supabase SQL Editor:');
      console.log(`
-- Fix RLS policies for waitlist table
DROP POLICY IF EXISTS "Allow public inserts" ON public.waitlist;
DROP POLICY IF EXISTS "Allow public reads" ON public.waitlist;
DROP POLICY IF EXISTS "Allow all operations" ON public.waitlist;

-- Create permissive policy for waitlist table
CREATE POLICY "Allow all operations" ON public.waitlist
    FOR ALL
    TO public
    USING (true)
    WITH CHECK (true);
      `);
    } else if (count === 0) {
      console.log('✅ RLS access is working, but table is empty');
      console.log('💡 SOLUTION: Insert sample waitlist data or wait for real submissions');
    } else {
      console.log('✅ Waitlist table is working correctly with data');
    }

  } catch (error) {
    console.error('💥 Unexpected error:', error);
  }
}

// Run the waitlist test
testWaitlistAccess();








