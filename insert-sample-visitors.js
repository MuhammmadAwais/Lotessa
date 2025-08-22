import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ohnoradpjiquiezxtbob.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9obm9yYWRwamlxdWllenh0Ym9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzY3MzYsImV4cCI6MjA3MTExMjczNn0.tTo5p2HPIZ_bzmPKWbu3pV3LwFqvmI5eBmiE7iZxP0Q";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

async function insertSampleVisitors() {
  console.log('📝 Inserting sample visitor data...\n');

  const sampleVisitors = [
    {
      browser_id: 'browser_001_abc123',
      first_seen: '2025-01-15T10:30:00Z',
      last_seen: '2025-01-19T14:45:00Z',
      user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      ip_address: '192.168.1.100'
    },
    {
      browser_id: 'browser_002_def456',
      first_seen: '2025-01-16T09:15:00Z',
      last_seen: '2025-01-20T16:20:00Z',
      user_agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/605.1.15',
      ip_address: '203.45.67.89'
    },
    {
      browser_id: 'browser_003_ghi789',
      first_seen: '2025-01-17T11:00:00Z',
      last_seen: '2025-01-21T12:30:00Z',
      user_agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X)',
      ip_address: '172.16.0.50'
    },
    {
      browser_id: 'browser_004_jkl012',
      first_seen: '2025-01-18T08:45:00Z',
      last_seen: '2025-01-22T15:10:00Z',
      user_agent: 'Mozilla/5.0 (Android 13; Mobile; rv:120.0) Gecko/120.0',
      ip_address: '10.0.0.25'
    },
    {
      browser_id: 'browser_005_mno345',
      first_seen: '2025-01-19T13:20:00Z',
      last_seen: '2025-01-23T18:55:00Z',
      user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
      ip_address: '198.51.100.75'
    }
  ];

  try {
    for (let i = 0; i < sampleVisitors.length; i++) {
      const visitor = sampleVisitors[i];
      console.log(`Inserting visitor ${i + 1}/${sampleVisitors.length}: ${visitor.browser_id}`);
      
      const { data, error } = await supabase
        .from('visitors')
        .insert([visitor])
        .select();

      if (error) {
        console.error(`❌ Error inserting visitor ${i + 1}:`, error);
      } else {
        console.log(`✅ Successfully inserted visitor ${i + 1}`);
      }
    }

    console.log('\n🎉 Sample visitor data insertion completed!');
    console.log('Now you can run the query script to see the data.');

  } catch (error) {
    console.error('💥 Unexpected error:', error);
  }
}

// Run the insertion
insertSampleVisitors();



