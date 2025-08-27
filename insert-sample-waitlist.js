import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ohnoradpjiquiezxtbob.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9obm9yYWRwamlxdWllenh0Ym9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzY3MzYsImV4cCI6MjA3MTExMjczNn0.tTo5p2HPIZ_bzmPKWbu3pV3LwFqvmI5eBmiE7iZxP0Q";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

async function insertSampleWaitlist() {
  console.log('📝 Inserting sample waitlist data...\n');

  const sampleWaitlistEntries = [
    {
      email: 'sarah.williams@email.com',
      using_medication: 'ozempic',
      browser_id: 'browser_001_sarah',
      created_at: '2025-01-15T10:30:00Z'
    },
    {
      email: 'michael.chen@email.com',
      using_medication: 'mounjaro',
      browser_id: 'browser_002_michael',
      created_at: '2025-01-16T14:20:00Z'
    },
    {
      email: 'emma.thompson@email.com',
      using_medication: 'wegovy',
      browser_id: 'browser_003_emma',
      created_at: '2025-01-17T09:15:00Z'
    },
    {
      email: 'david.roberts@email.com',
      using_medication: 'saxenda',
      browser_id: 'browser_004_david',
      created_at: '2025-01-18T16:45:00Z'
    },
    {
      email: 'lisa.foster@email.com',
      using_medication: 'ozempic',
      browser_id: 'browser_005_lisa',
      created_at: '2025-01-19T11:30:00Z'
    },
    {
      email: 'james.lee@email.com',
      using_medication: 'mounjaro',
      browser_id: 'browser_006_james',
      created_at: '2025-01-20T13:20:00Z'
    },
    {
      email: 'anna.garcia@email.com',
      using_medication: 'wegovy',
      browser_id: 'browser_007_anna',
      created_at: '2025-01-21T08:10:00Z'
    },
    {
      email: 'robert.kim@email.com',
      using_medication: 'saxenda',
      browser_id: 'browser_008_robert',
      created_at: '2025-01-22T15:40:00Z'
    }
  ];

  try {
    console.log('🔍 Testing insert access first...');
    const { data: testData, error: testError } = await supabase
      .from('waitlist')
      .insert([sampleWaitlistEntries[0]])
      .select();

    if (testError) {
      console.error('❌ Insert still blocked by RLS:', testError.message);
      console.log('\n💡 You need to fix the RLS policies first!');
      console.log('📝 Run the SQL from fix-waitlist-rls.sql in your Supabase dashboard');
      return;
    }

    console.log('✅ Insert access working! Now inserting all sample data...\n');

    // Clean up the test record
    await supabase
      .from('waitlist')
      .delete()
      .eq('id', testData[0].id);

    // Insert all sample entries
    for (let i = 0; i < sampleWaitlistEntries.length; i++) {
      const entry = sampleWaitlistEntries[i];
      console.log(`Inserting waitlist entry ${i + 1}/${sampleWaitlistEntries.length}: ${entry.email}`);
      
      const { data, error } = await supabase
        .from('waitlist')
        .insert([entry])
        .select();

      if (error) {
        console.error(`❌ Error inserting entry ${i + 1}:`, error.message);
      } else {
        console.log(`✅ Successfully inserted: ${entry.email} (${entry.using_medication})`);
      }
    }

    console.log('\n🎉 Sample waitlist data insertion completed!');
    console.log('Now you can run the query script to see the data.');

  } catch (error) {
    console.error('💥 Unexpected error:', error);
  }
}

// Run the insertion
insertSampleWaitlist();








