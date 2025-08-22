import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ohnoradpjiquiezxtbob.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9obm9yYWRwamlxdWllenh0Ym9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzY3MzYsImV4cCI6MjA3MTExMjczNn0.tTo5p2HPIZ_bzmPKWbu3pV3LwFqvmI5eBmiE7iZxP0Q";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

async function queryVisitorsTable() {
  console.log('🔍 Querying visitors table from Supabase...\n');

  try {
    // Query all records from visitors table
    const { data: visitors, error } = await supabase
      .from('visitors')
      .select('*')
      .order('last_seen', { ascending: false });

    if (error) {
      console.error('❌ Error querying visitors table:', error);
      return;
    }

    console.log(`✅ Successfully retrieved ${visitors?.length || 0} visitor records\n`);

    if (!visitors || visitors.length === 0) {
      console.log('📭 No visitor records found in the table');
      return;
    }

    // Display table structure
    console.log('📊 VISITORS TABLE STRUCTURE:');
    console.log('┌─────────────────────┬─────────────────────┬─────────────────────┬─────────────────────┬─────────────────────┬─────────────────────┐');
    console.log('│ ID                  │ Browser ID          │ First Seen          │ Last Seen           │ User Agent          │ IP Address          │');
    console.log('├─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤');

    // Display each record
    visitors.forEach((visitor, index) => {
      const id = visitor.id?.slice(0, 8) + '...' || 'N/A';
      const browserId = visitor.browser_id?.slice(0, 16) + '...' || 'N/A';
      const firstSeen = visitor.first_seen ? new Date(visitor.first_seen).toLocaleString() : 'N/A';
      const lastSeen = visitor.last_seen ? new Date(visitor.last_seen).toLocaleString() : 'N/A';
      const userAgent = visitor.user_agent?.slice(0, 20) + '...' || 'N/A';
      const ipAddress = visitor.ip_address || 'N/A';

      console.log(`│ ${id.padEnd(19)} │ ${browserId.padEnd(19)} │ ${firstSeen.padEnd(19)} │ ${lastSeen.padEnd(19)} │ ${userAgent.padEnd(19)} │ ${ipAddress.toString().padEnd(19)} │`);
    });

    console.log('└─────────────────────┴─────────────────────┴─────────────────────┴─────────────────────┴─────────────────────┴─────────────────────┘');

    // Display summary statistics
    console.log('\n📈 SUMMARY STATISTICS:');
    console.log(`Total Records: ${visitors.length}`);
    
    // Count unique browser IDs
    const uniqueBrowsers = new Set(visitors.map(v => v.browser_id)).size;
    console.log(`Unique Visitors: ${uniqueBrowsers}`);
    
    // Find most recent and oldest visits
    const dates = visitors.map(v => new Date(v.last_seen)).filter(d => !isNaN(d));
    if (dates.length > 0) {
      const mostRecent = new Date(Math.max(...dates));
      const oldest = new Date(Math.min(...dates));
      console.log(`Most Recent Visit: ${mostRecent.toLocaleString()}`);
      console.log(`Oldest Visit: ${oldest.toLocaleString()}`);
    }

    // Show sample record details
    if (visitors.length > 0) {
      console.log('\n🔍 SAMPLE RECORD DETAILS:');
      const sample = visitors[0];
      console.log('First Record:');
      console.log(`  ID: ${sample.id}`);
      console.log(`  Browser ID: ${sample.browser_id}`);
      console.log(`  First Seen: ${sample.first_seen}`);
      console.log(`  Last Seen: ${sample.last_seen}`);
      console.log(`  User Agent: ${sample.user_agent}`);
      console.log(`  IP Address: ${sample.ip_address}`);
    }

  } catch (error) {
    console.error('💥 Unexpected error:', error);
  }
}

// Run the query
queryVisitorsTable();



