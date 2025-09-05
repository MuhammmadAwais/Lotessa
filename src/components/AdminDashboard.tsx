import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";
import { 
  Users, 
  MessageSquare, 
  Activity, 
  Eye, 
  LogOut, 
  RefreshCw,
  TrendingUp,
  Calendar
} from "lucide-react";
import AdminNavigation from "./AdminNavigation";

interface Contact {
  id: string;
  name: string;
  email: string;
  topic: string;
  message: string;
  created_at: string;
  updated_at: string;
}

interface Visitor {
  id: string;
  browser_id: string;
  first_seen: string;
  last_seen: string;
  ip_address: any;
  user_agent: string | null;
}

interface Waitlist {
  id: string;
  name: string;
  email: string;
  using_medication: string;
  journey_stage: string;
  browser_id: string | null;
  created_at: string;
  updated_at: string;
}

interface Interaction {
  id: string;
  browser_id: string;
  session_id: string;
  page_url: string;
  element_name: string;
  event_type: string;
  timestamp: string;
}

interface ArticleClick {
  id: string;
  article_id: number;
  article_title: string;
  browser_id: string;
  session_id: string;
  page_url: string;
  clicked_at: string;
  user_agent: string | null;
  ip_address: unknown | null;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [waitlist, setWaitlist] = useState<Waitlist[]>([]);
  const [interactions, setInteractions] = useState<Interaction[]>([]);
  const [articleClicks, setArticleClicks] = useState<ArticleClick[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    console.log('🚀 AdminDashboard component mounted');
    
    // Check if admin is authenticated
    const isAuthenticated = localStorage.getItem("adminAuthenticated");
    if (!isAuthenticated) {
      console.log('❌ Admin not authenticated, redirecting to login');
      navigate("/admin-login");
      return;
    }

    console.log('✅ Admin authenticated, starting data fetch');
    
    // Test Supabase connection first
    testSupabaseConnection();
    fetchAllData();
  }, [navigate]);

  const testSupabaseConnection = async () => {
    try {
      console.log('🔌 Testing Supabase connection...');
      const { data, error } = await supabase.from('contacts').select('count').limit(1);
      
      if (error) {
        console.error('❌ Supabase connection failed:', error);
        toast({
          title: "Connection Error",
          description: `Cannot connect to database: ${error.message}`,
          variant: "destructive"
        });
      } else {
        console.log('✅ Supabase connection successful');
      }
    } catch (error) {
      console.error('💥 Connection test failed:', error);
    }
  };

  const fetchAllData = async () => {
    try {
      setIsLoading(true);
      console.log('🔄 Starting to fetch data from Supabase...');
      
      // Fetch contacts
      console.log('📞 Fetching contacts...');
      const { data: contactsData, error: contactsError } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (contactsError) {
        console.error('❌ Error fetching contacts:', contactsError);
        toast({
          title: "Contacts Error",
          description: `Failed to fetch contacts: ${contactsError.message}`,
          variant: "destructive"
        });
      } else {
        console.log('✅ Contacts fetched successfully:', contactsData?.length || 0, 'records');
        setContacts(contactsData || []);
      }

      // Fetch visitors
      console.log('👁️ Fetching visitors...');
      const { data: visitorsData, error: visitorsError } = await supabase
        .from('visitors')
        .select('*')
        .order('last_seen', { ascending: false });

      if (visitorsError) {
        console.error('❌ Error fetching visitors:', visitorsError);
        toast({
          title: "Visitors Error",
          description: `Failed to fetch visitors: ${visitorsError.message}`,
          variant: "destructive"
        });
      } else {
        console.log('✅ Visitors fetched successfully:', visitorsData?.length || 0, 'records');
        setVisitors(visitorsData || []);
      }

      // Fetch waitlist
      console.log('📋 Fetching waitlist...');
      const { data: waitlistData, error: waitlistError } = await supabase
        .from('waitlist')
        .select('*')
        .order('created_at', { ascending: false });

      if (waitlistError) {
        console.error('❌ Error fetching waitlist:', waitlistError);
        toast({
          title: "Waitlist Error",
          description: `Failed to fetch waitlist: ${waitlistError.message}`,
          variant: "destructive"
        });
      } else {
        console.log('✅ Waitlist fetched successfully:', waitlistData?.length || 0, 'records');
        setWaitlist(waitlistData || []);
      }

      // Fetch interactions
      console.log('🔄 Fetching interactions...');
      const { data: interactionsData, error: interactionsError } = await supabase
        .from('interactions')
        .select('*')
        .order('timestamp', { ascending: false });

      if (interactionsError) {
        console.error('❌ Error fetching interactions:', interactionsError);
        toast({
          title: "Interactions Error",
          description: `Failed to fetch interactions: ${interactionsError.message}`,
          variant: "destructive"
        });
      } else {
        console.log('✅ Interactions fetched successfully:', interactionsData?.length || 0, 'records');
        setInteractions(interactionsData || []);
      }

      // Fetch article clicks
      console.log('📖 Fetching article clicks...');
      const { data: articleClicksData, error: articleClicksError } = await supabase
        .from('article_clicks')
        .select('*')
        .order('clicked_at', { ascending: false });

      if (articleClicksError) {
        console.error('❌ Error fetching article clicks:', articleClicksError);
        toast({
          title: "Article Clicks Error",
          description: `Failed to fetch article clicks: ${articleClicksError.message}`,
          variant: "destructive"
        });
      } else {
        console.log('✅ Article clicks fetched successfully:', articleClicksData?.length || 0, 'records');
        setArticleClicks(articleClicksData || []);
      }

      console.log('🎯 All data fetch operations completed');

    } catch (error) {
      console.error('💥 Unexpected error during data fetch:', error);
      toast({
        title: "Error",
        description: "Failed to fetch data. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    localStorage.removeItem("adminEmail");
    navigate("/admin-login");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const handleDeleteAllData = async () => {
    setIsDeleting(true);
    try {
      console.log('🗑️ Starting to delete all data...');
      
      // Delete all data from all tables
      const tables = ['contacts', 'visitors', 'waitlist', 'interactions', 'article_clicks'];
      
      for (const table of tables) {
        console.log(`🗑️ Deleting from ${table}...`);
        const { error } = await supabase.from(table as any).delete().neq('id', '00000000-0000-0000-0000-000000000000');
        
        if (error) {
          console.error(`❌ Error deleting from ${table}:`, error);
          toast({
            title: "Delete Error",
            description: `Failed to delete data from ${table}: ${error.message}`,
            variant: "destructive"
          });
          return;
        }
        console.log(`✅ Successfully deleted from ${table}`);
      }

      // Clear local state
      setContacts([]);
      setVisitors([]);
      setWaitlist([]);
      setInteractions([]);
      setArticleClicks([]);

      toast({
        title: "Data Deleted",
        description: "All data has been successfully cleared from the database.",
      });

      setShowDeleteDialog(false);
    } catch (error) {
      console.error('💥 Unexpected error during delete:', error);
      toast({
        title: "Delete Error",
        description: "An unexpected error occurred while deleting data.",
        variant: "destructive"
      });
    } finally {
      setIsDeleting(false);
    }
  };

  const getTopicCounts = () => {
    const counts: { [key: string]: number } = {};
    contacts.forEach(contact => {
      counts[contact.topic] = (counts[contact.topic] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  };

  const getMedicationCounts = () => {
    const counts: { [key: string]: number } = {};
    waitlist.forEach(entry => {
      counts[entry.using_medication] = (counts[entry.using_medication] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  };

  const getJourneyStageCounts = () => {
    const counts: { [key: string]: number } = {};
    waitlist.forEach(entry => {
      counts[entry.journey_stage] = (counts[entry.journey_stage] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  };

  const getDailyContacts = () => {
    const dailyCounts: { [key: string]: number } = {};
    contacts.forEach(contact => {
      const date = new Date(contact.created_at).toLocaleDateString();
      dailyCounts[date] = (dailyCounts[date] || 0) + 1;
    });
    return Object.entries(dailyCounts)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  const getDailyWaitlist = () => {
    const dailyCounts: { [key: string]: number } = {};
    waitlist.forEach(entry => {
      const date = new Date(entry.created_at).toLocaleDateString();
      dailyCounts[date] = (dailyCounts[date] || 0) + 1;
    });
    return Object.entries(dailyCounts)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  const getEventTypeCounts = () => {
    const counts: { [key: string]: number } = {};
    interactions.forEach(interaction => {
      counts[interaction.event_type] = (counts[interaction.event_type] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  };

  const getElementNameCounts = () => {
    const counts: { [key: string]: number } = {};
    interactions.forEach(interaction => {
      counts[interaction.element_name] = (counts[interaction.element_name] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  };

  const getDailyInteractions = () => {
    const dailyCounts: { [key: string]: number } = {};
    interactions.forEach(interaction => {
      const date = new Date(interaction.timestamp).toLocaleDateString();
      dailyCounts[date] = (dailyCounts[date] || 0) + 1;
    });
    return Object.entries(dailyCounts)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  const getArticleClickCounts = () => {
    const counts: { [key: string]: number } = {};
    articleClicks.forEach(click => {
      counts[click.article_title] = (counts[click.article_title] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([name, value]) => ({ name: name.length > 40 ? name.slice(0, 40) + '...' : name, value }))
      .sort((a, b) => b.value - a.value);
  };

  const getDailyArticleClicks = () => {
    const dailyCounts: { [key: string]: number } = {};
    articleClicks.forEach(click => {
      const date = new Date(click.clicked_at).toLocaleDateString();
      dailyCounts[date] = (dailyCounts[date] || 0) + 1;
    });
    return Object.entries(dailyCounts)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(a.date).getTime());
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <AdminNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onRefresh={fetchAllData}
        onLogout={handleLogout}
        onDelete={() => setShowDeleteDialog(true)}
        stats={{
          contacts: contacts.length,
          visitors: visitors.length,
          waitlist: waitlist.length,
          interactions: interactions.length,
          articleClicks: articleClicks.length
        }}
      />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent className="max-w-[95vw] sm:max-w-lg mx-4">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-lg sm:text-xl text-destructive">⚠️ Clear All Data</AlertDialogTitle>
            <AlertDialogDescription className="text-sm sm:text-base">
              This action will permanently delete ALL data from the database including:
              <br />• {contacts.length} contact submissions
              <br />• {visitors.length} visitor records  
              <br />• {waitlist.length} waitlist entries
              <br />• {interactions.length} user interactions
              <br />• {articleClicks.length} article click records
              <br /><br />
              <strong>This action cannot be undone!</strong> Are you absolutely sure you want to proceed?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col sm:flex-row gap-2">
            <AlertDialogCancel className="w-full sm:w-auto">Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDeleteAllData}
              disabled={isDeleting}
              className="w-full sm:w-auto bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isDeleting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Deleting...
                </>
              ) : (
                "Yes, Delete All Data"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="p-4 sm:p-6">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-0 pt-0">
              <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="text-xl sm:text-2xl font-bold">{contacts.length}</div>
              <p className="text-xs text-muted-foreground">
                Contact form submissions
              </p>
            </CardContent>
          </Card>

          <Card className="p-4 sm:p-6">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-0 pt-0">
              <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="text-xl sm:text-2xl font-bold">{visitors.length}</div>
              <p className="text-xs text-muted-foreground">
                Unique site visitors
              </p>
            </CardContent>
          </Card>

          <Card className="p-4 sm:p-6">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-0 pt-0">
              <CardTitle className="text-sm font-medium">Total Waitlist</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="text-xl sm:text-2xl font-bold">{waitlist.length}</div>
              <p className="text-xs text-muted-foreground">
                App waitlist signups
              </p>
            </CardContent>
          </Card>

          <Card className="p-4 sm:p-6">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-0 pt-0">
              <CardTitle className="text-sm font-medium">Total Interactions</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="text-xl sm:text-2xl font-bold">{interactions.length}</div>
              <p className="text-xs text-muted-foreground">
                User interactions tracked
              </p>
            </CardContent>
          </Card>

          <Card className="p-4 sm:p-6">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-0 pt-0">
              <CardTitle className="text-sm font-medium">Article Clicks</CardTitle>
              <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 19 16.5 19c-1.746 0-3.332-.523-4.5-1.253" />
              </svg>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="text-xl sm:text-2xl font-bold">{articleClicks.length}</div>
              <p className="text-xs text-muted-foreground">
                Article views tracked
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Debug Info (remove in production) */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Debug Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium">Contacts:</span> {contacts.length} records
                {contacts.length > 0 && (
                  <div className="text-xs text-muted-foreground mt-1">
                    Latest: {contacts[0]?.name} - {contacts[0]?.topic}
                  </div>
                )}
              </div>
              <div>
                <span className="font-medium">Visitors:</span> {visitors.length} records
                {visitors.length > 0 && (
                  <div className="text-xs text-muted-foreground mt-1">
                    Latest: {visitors[0]?.browser_id?.slice(0, 8)}...
                  </div>
                )}
              </div>
              <div>
                <span className="font-medium">Waitlist:</span> {waitlist.length} records
                {waitlist.length > 0 && (
                  <div className="text-xs text-muted-foreground mt-1">
                    Latest: {waitlist[0]?.name} - {waitlist[0]?.journey_stage}
                  </div>
                )}
              </div>
              <div>
                <span className="font-medium">Interactions:</span> {interactions.length} records
                {interactions.length > 0 && (
                  <div className="text-xs text-muted-foreground mt-1">
                    Latest: {interactions[0]?.event_type} on {interactions[0]?.element_name}
                  </div>
                )}
              </div>
              <div>
                <span className="font-medium">Article Clicks:</span> {articleClicks.length} records
                {articleClicks.length > 0 && (
                  <div className="text-xs text-muted-foreground mt-1">
                    Latest: {articleClicks[0]?.article_title?.slice(0, 30)}...
                  </div>
                )}
              </div>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
            <div className="mt-2">
              <Button onClick={fetchAllData} variant="outline" size="sm">
                🔄 Force Refresh Data
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Content Sections */}
        <div className="space-y-6">
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Contact Topics Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Topics Distribution</CardTitle>
                  <CardDescription>Breakdown of contact form topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={getTopicCounts()}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {getTopicCounts().map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Daily Contacts Trend */}
              <Card>
                <CardHeader>
                  <CardTitle>Daily Contact Submissions</CardTitle>
                  <CardDescription>Contact form submissions over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={getDailyContacts()}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Medication Usage Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Medication Usage Distribution</CardTitle>
                  <CardDescription>Breakdown of users by medication status</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={getMedicationCounts()}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Journey Stages Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Waitlist Journey Stages</CardTitle>
                  <CardDescription>Distribution of users across journey stages</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={getJourneyStageCounts()}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#00C49F" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Waitlist Growth Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Waitlist Growth Over Time</CardTitle>
                  <CardDescription>Daily waitlist signups trend</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={getDailyWaitlist()}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="count" stroke="#00C49F" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Event Types Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>User Interaction Types</CardTitle>
                  <CardDescription>Breakdown of interaction events</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={getEventTypeCounts()}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#FF8042"
                        dataKey="value"
                      >
                        {getEventTypeCounts().map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Daily Interactions Trend */}
              <Card>
                <CardHeader>
                  <CardTitle>Daily User Interactions</CardTitle>
                  <CardDescription>User interactions over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={getDailyInteractions()}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="count" stroke="#FF8042" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Article Click Distribution Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Article Click Distribution</CardTitle>
                  <CardDescription>Most popular articles by clicks</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={getArticleClickCounts()}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#8884D8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Daily Article Clicks Trend */}
              <Card>
                <CardHeader>
                  <CardTitle>Daily Article Clicks</CardTitle>
                  <CardDescription>Article views over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={getDailyArticleClicks()}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="count" stroke="#8884D8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Individual Article Click Counts */}
              <Card>
                <CardHeader>
                  <CardTitle>Article Click Counts by Article</CardTitle>
                  <CardDescription>Total clicks for each individual article</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={getArticleClickCounts()}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#00C49F" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Contacts Section */}
          {activeTab === "contacts" && (
            <Card>
              <CardHeader>
                <CardTitle>Contact Form Submissions</CardTitle>
                <CardDescription>All contact form submissions from users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Topic</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Updated</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contacts.map((contact) => (
                        <TableRow key={contact.id}>
                          <TableCell className="font-medium">{contact.name}</TableCell>
                          <TableCell>{contact.email}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">{contact.topic}</Badge>
                          </TableCell>
                          <TableCell className="max-w-xs truncate">{contact.message}</TableCell>
                          <TableCell>{new Date(contact.created_at).toLocaleDateString()}</TableCell>
                          <TableCell>{new Date(contact.updated_at).toLocaleDateString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Visitors Section */}
          {activeTab === "visitors" && (
            <Card>
              <CardHeader>
                <CardTitle>Site Visitors</CardTitle>
                <CardDescription>Unique visitors and their activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Browser ID</TableHead>
                        <TableHead>First Seen</TableHead>
                        <TableHead>Last Seen</TableHead>
                        <TableHead>IP Address</TableHead>
                        <TableHead>User Agent</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {visitors.map((visitor) => (
                        <TableRow key={visitor.id}>
                          <TableCell className="font-mono text-sm">{visitor.browser_id}</TableCell>
                          <TableCell>{new Date(visitor.first_seen).toLocaleDateString()}</TableCell>
                          <TableCell>{new Date(visitor.last_seen).toLocaleDateString()}</TableCell>
                          <TableCell className="font-mono text-xs">{visitor.ip_address || 'N/A'}</TableCell>
                          <TableCell className="max-w-xs truncate">{visitor.user_agent || 'N/A'}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          )}



          {/* Waitlist Section */}
          {activeTab === "waitlist" && (
            <Card>
              <CardHeader>
                <CardTitle>App Waitlist</CardTitle>
                <CardDescription>Users signed up for the app waitlist</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Journey Stage</TableHead>
                        <TableHead>Medication Status</TableHead>
                        <TableHead>Browser ID</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {waitlist.map((entry) => (
                        <TableRow key={entry.id}>
                          <TableCell className="font-medium">{entry.name}</TableCell>
                          <TableCell>{entry.email}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">{entry.journey_stage}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{entry.using_medication}</Badge>
                          </TableCell>
                          <TableCell className="font-mono text-xs">{entry.browser_id}</TableCell>
                          <TableCell>{new Date(entry.created_at).toLocaleDateString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Interactions Section */}
          {activeTab === "interactions" && (
            <Card>
              <CardHeader>
                <CardTitle>User Interactions</CardTitle>
                <CardDescription>Tracked user interactions and events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Event Type</TableHead>
                        <TableHead>Element</TableHead>
                        <TableHead>Page URL</TableHead>
                        <TableHead>Browser ID</TableHead>
                        <TableHead>Session ID</TableHead>
                        <TableHead>Timestamp</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {interactions.map((interaction) => (
                        <TableRow key={interaction.id}>
                          <TableCell>
                            <Badge variant="outline">{interaction.event_type}</Badge>
                          </TableCell>
                          <TableCell className="font-medium">{interaction.element_name}</TableCell>
                          <TableCell className="max-w-xs truncate text-xs">
                            {interaction.page_url}
                          </TableCell>
                          <TableCell className="font-mono text-xs">
                            {interaction.browser_id.slice(0, 8)}...
                          </TableCell>
                          <TableCell className="font-mono text-xs">
                            {interaction.session_id.slice(0, 8)}...
                          </TableCell>
                          <TableCell className="text-xs">
                            {new Date(interaction.timestamp).toLocaleString()}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Article Clicks Section */}
          {activeTab === "article-clicks" && (
            <div className="space-y-6">
              {/* Article Click Overview Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Article Clicks</CardTitle>
                    <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 19 16.5 19c-1.746 0-3.332-.523-4.5-1.253" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{articleClicks.length}</div>
                    <p className="text-xs text-muted-foreground">
                      Total clicks tracked
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Unique Articles</CardTitle>
                    <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{new Set(articleClicks.map(click => click.article_id)).size}</div>
                    <p className="text-xs text-muted-foreground">
                      Articles with clicks
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
                    <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{new Set(articleClicks.map(click => click.browser_id)).size}</div>
                    <p className="text-xs text-muted-foreground">
                      Different visitors
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Article Click Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Article Click Summary</CardTitle>
                  <CardDescription>Total clicks for each individual article</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Article ID</TableHead>
                          <TableHead>Article Title</TableHead>
                          <TableHead>Total Clicks</TableHead>
                          <TableHead>Last Clicked</TableHead>
                          <TableHead>Unique Visitors</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {getArticleClickCounts().map((article) => {
                          const articleData = articleClicks.find(click => 
                            click.article_title === article.name || 
                            (article.name.endsWith('...') && click.article_title.startsWith(article.name.slice(0, -3)))
                          );
                          const uniqueVisitors = new Set(
                            articleClicks
                              .filter(click => 
                                click.article_title === articleData?.article_title
                              )
                              .map(click => click.browser_id)
                          ).size;
                          const lastClick = articleClicks
                            .filter(click => 
                              click.article_title === articleData?.article_title
                            )
                            .sort((a, b) => new Date(b.clicked_at).getTime() - new Date(a.clicked_at).getTime())[0];
                          
                          return (
                            <TableRow key={article.name}>
                              <TableCell>
                                <Badge variant="secondary">{articleData?.article_id || 'N/A'}</Badge>
                              </TableCell>
                              <TableCell className="font-medium max-w-md">
                                <div className="truncate" title={articleData?.article_title || article.name}>
                                  {articleData?.article_title || article.name}
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="text-2xl font-bold text-blue-600">{article.value}</div>
                                <div className="text-xs text-muted-foreground">clicks</div>
                              </TableCell>
                              <TableCell className="text-sm">
                                {lastClick ? new Date(lastClick.clicked_at).toLocaleDateString() : 'N/A'}
                              </TableCell>
                              <TableCell>
                                <div className="text-lg font-semibold text-green-600">{uniqueVisitors}</div>
                                <div className="text-xs text-muted-foreground">visitors</div>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Article Clicks */}
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Article Click Analytics</CardTitle>
                  <CardDescription>Individual click events with visitor details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Article Title</TableHead>
                          <TableHead>Article ID</TableHead>
                          <TableHead>Browser ID</TableHead>
                          <TableHead>Session ID</TableHead>
                          <TableHead>Page URL</TableHead>
                          <TableHead>User Agent</TableHead>
                          <TableHead>IP Address</TableHead>
                          <TableHead>Clicked At</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {articleClicks.map((click) => (
                          <TableRow key={click.id}>
                            <TableCell className="font-medium max-w-xs">
                              <div className="truncate" title={click.article_title}>
                                {click.article_title}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="secondary">{click.article_id}</Badge>
                            </TableCell>
                            <TableCell className="font-mono text-xs">
                              {click.browser_id.slice(0, 8)}...
                            </TableCell>
                            <TableCell className="font-mono text-xs">
                              {click.session_id.slice(0, 8)}...
                            </TableCell>
                            <TableCell className="max-w-xs truncate text-xs">
                              {click.page_url}
                            </TableCell>
                            <TableCell className="max-w-xs truncate text-xs">
                              {click.user_agent || 'N/A'}
                            </TableCell>
                            <TableCell className="font-mono text-xs">
                              {String(click.ip_address) || 'N/A'}
                            </TableCell>
                            <TableCell className="text-xs">
                              {new Date(click.clicked_at).toLocaleString()}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
