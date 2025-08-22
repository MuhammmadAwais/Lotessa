import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ohnoradpjiquiezxtbob.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9obm9yYWRwamlxdWllenh0Ym9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzY3MzYsImV4cCI6MjA3MTExMjczNn0.tTo5p2HPIZ_bzmPKWbu3pV3LwFqvmI5eBmiE7iZxP0Q";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

async function queryAllTables() {
  console.log('🔍 Querying all tables from Supabase...\n');

  try {
    // Query visitors table
    console.log('📊 QUERYING VISITORS TABLE...');
    const { data: visitors, error: visitorsError } = await supabase
      .from('visitors')
      .select('*');

    if (visitorsError) {
      console.error('❌ Error querying visitors:', visitorsError);
    } else {
      console.log(`✅ Visitors: ${visitors?.length || 0} records`);
    }

    // Query contacts table
    console.log('\n📞 QUERYING CONTACTS TABLE...');
    const { data: contacts, error: contactsError } = await supabase
      .from('contacts')
      .select('*');

    if (contactsError) {
      console.error('❌ Error querying contacts:', contactsError);
    } else {
      console.log(`✅ Contacts: ${contacts?.length || 0} records`);
    }

    // Query waitlist table
    console.log('\n📋 QUERYING WAITLIST TABLE...');
    const { data: waitlist, error: waitlistError } = await supabase
      .from('waitlist')
      .select('*');

    if (waitlistError) {
      console.error('❌ Error querying waitlist:', waitlistError);
    } else {
      console.log(`✅ Waitlist: ${waitlist?.length || 0} records`);
    }

    // Summary
    console.log('\n📈 DATABASE SUMMARY:');
    console.log(`Total Records: ${(visitors?.length || 0) + (contacts?.length || 0) + (waitlist?.length || 0)}`);
    console.log(`Visitors: ${visitors?.length || 0}`);
    console.log(`Contacts: ${contacts?.length || 0}`);
    console.log(`Waitlist: ${waitlist?.length || 0}`);

    // Show sample data if available
    if (visitors && visitors.length > 0) {
      console.log('\n🔍 SAMPLE VISITOR:');
      console.log(JSON.stringify(visitors[0], null, 2));
    }

    if (contacts && contacts.length > 0) {
      console.log('\n🔍 SAMPLE CONTACT:');
      console.log(JSON.stringify(contacts[0], null, 2));
    }

    if (waitlist && waitlist.length > 0) {
      console.log('\n🔍 SAMPLE WAITLIST ENTRY:');
      console.log(JSON.stringify(waitlist[0], null, 2));
    }

  } catch (error) {
    console.error('💥 Unexpected error:', error);
  }
}

// Run the query
queryAllTables();



