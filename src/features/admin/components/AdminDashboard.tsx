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
import { HeroContent, CommunityContent, PartnerContent } from "@/types/content";
import { Article } from "@/types/article";

function ArticleEditorList() {
  const [rows, setRows] = useState<Article[]>([]);
  useEffect(() => {
    const load = async () => {
      const { data } = await (supabase as any)
        .from('articles')
        .select('id,title,subtitle,description,read_time')
        .order('updated_at', { ascending: false })
        .limit(50) as { data: Article[] | null };
      setRows(data || []);
    };
    load();
  }, []);
  return (
    <div className="space-y-3">
      {rows.map((a) => (
        <div key={a.id} className="border rounded p-3 space-y-2">
          <input className="w-full border rounded p-2" value={a.title || ''} onChange={(e) => setRows(prev => prev.map(x => x.id === a.id ? { ...x, title: e.target.value } : x))} />
          <input className="w-full border rounded p-2" value={a.subtitle || ''} onChange={(e) => setRows(prev => prev.map(x => x.id === a.id ? { ...x, subtitle: e.target.value } : x))} />
          <textarea className="w-full border rounded p-2" rows={8} value={a.description || ''} onChange={(e) => setRows(prev => prev.map(x => x.id === a.id ? { ...x, description: e.target.value } : x))} />
          <div className="flex gap-2">
            <button className="px-3 py-2 border rounded" onClick={async () => {
              const { error } = await (supabase as any).from('articles').update({ title: a.title, subtitle: a.subtitle, description: a.description }).eq('id', a.id);
              if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
              else toast({ title: 'Saved', description: 'Article updated' });
            }}>Save</button>
            <button className="px-3 py-2 border rounded" onClick={async () => {
              const { error } = await (supabase as any).from('articles').delete().eq('id', a.id);
              if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
              else setRows(prev => prev.filter(x => x.id !== a.id));
            }}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

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
  ip_address: unknown;
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

interface ReportIssue {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  title: string;
  description: string;
  issue_type: string;
  status: string;
  priority: string;
  created_at: string;
  updated_at: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [waitlist, setWaitlist] = useState<Waitlist[]>([]);
  const [interactions, setInteractions] = useState<Interaction[]>([]);
  const [articleClicks, setArticleClicks] = useState<ArticleClick[]>([]);
  const [reportIssues, setReportIssues] = useState<ReportIssue[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [heroForm, setHeroForm] = useState<HeroContent>({ title: '', subtitle: '', p1: '', p2: '' });
  const [communityForm, setCommunityForm] = useState<CommunityContent>({ heading: '', title: '', paragraph: '' });
  const [partnerForm, setPartnerForm] = useState<PartnerContent>({
    section_title: '',
    main_title: '',
    main_description: '',
    write_title: '',
    write_question: '',
    write_bullet1: '',
    write_bullet2: '',
    write_bullet3: '',
    write_bullet4: '',
    sponsor_title: '',
    sponsor_question: '',
    sponsor_bullet1: '',
    sponsor_bullet2: '',
    sponsor_bullet3: '',
    sponsor_bullet4: '',
    advise_title: '',
    advise_question: '',
    advise_bullet1: '',
    advise_bullet2: '',
    advise_bullet3: '',
    advise_bullet4: ''
  });

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

      // Fetch report issues
      console.log('🐛 Fetching report issues...');
      const { data: reportIssuesData, error: reportIssuesError } = await supabase
        .from('report_issues')
        .select('*')
        .order('created_at', { ascending: false });

      if (reportIssuesError) {
        console.error('❌ Error fetching report issues:', reportIssuesError);
        toast({
          title: "Report Issues Error",
          description: `Failed to fetch report issues: ${reportIssuesError.message}`,
          variant: "destructive"
        });
      } else {
        console.log('✅ Report issues fetched successfully:', reportIssuesData?.length || 0, 'records');
        setReportIssues(reportIssuesData || []);
      }

      // Load latest hero content
      const { data: hero } = await (supabase as any)
        .from('hero_content')
        .select('*')
        .order('updated_at', { ascending: false })
        .limit(1)
        .maybeSingle() as { data: HeroContent | null };
      if (hero) setHeroForm({ title: hero.title || '', subtitle: hero.subtitle || '', p1: hero.p1 || '', p2: hero.p2 || '' });

      // Load latest community content
      const { data: community } = await (supabase as any)
        .from('community_content')
        .select('*')
        .order('updated_at', { ascending: false })
        .limit(1)
        .maybeSingle() as { data: CommunityContent | null };
      if (community) setCommunityForm({ heading: community.heading || '', title: community.title || '', paragraph: community.paragraph || '' });

      // Load latest partner content
      const { data: partner } = await (supabase as any)
        .from('partnerwithlotessa')
        .select('*')
        .order('updated_at', { ascending: false })
        .limit(1)
        .maybeSingle() as { data: PartnerContent | null };
      if (partner) {
        setPartnerForm({
          section_title: partner.section_title || '',
          main_title: partner.main_title || '',
          main_description: partner.main_description || '',
          write_title: partner.write_title || '',
          write_question: partner.write_question || '',
          write_bullet1: partner.write_bullet1 || '',
          write_bullet2: partner.write_bullet2 || '',
          write_bullet3: partner.write_bullet3 || '',
          write_bullet4: partner.write_bullet4 || '',
          sponsor_title: partner.sponsor_title || '',
          sponsor_question: partner.sponsor_question || '',
          sponsor_bullet1: partner.sponsor_bullet1 || '',
          sponsor_bullet2: partner.sponsor_bullet2 || '',
          sponsor_bullet3: partner.sponsor_bullet3 || '',
          sponsor_bullet4: partner.sponsor_bullet4 || '',
          advise_title: partner.advise_title || '',
          advise_question: partner.advise_question || '',
          advise_bullet1: partner.advise_bullet1 || '',
          advise_bullet2: partner.advise_bullet2 || '',
          advise_bullet3: partner.advise_bullet3 || '',
          advise_bullet4: partner.advise_bullet4 || ''
        });
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
        const { error } = await (supabase as any).from(table).delete().neq('id', '00000000-0000-0000-0000-000000000000');
        
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
      <div className="min-h-screen bg-lotessaGray-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lotessaGray-background">
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
          articleClicks: articleClicks.length,
          reportIssues: reportIssues.length
        }}
      />

      {/* Side Drawer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex gap-6">
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-4 bg-white border rounded-lg p-3 space-y-1">
              
              <div className="pt-2 border-t mt-2"></div>
              <button className={`w-full text-left px-3 py-2 rounded ${activeTab === 'hero' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`} onClick={() => setActiveTab('hero')}>Hero Content</button>
              <button className={`w-full text-left px-3 py-2 rounded ${activeTab === 'community' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`} onClick={() => setActiveTab('community')}>Community Content</button>
              <button className={`w-full text-left px-3 py-2 rounded ${activeTab === 'partner' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`} onClick={() => setActiveTab('partner')}>Partner Content</button>
              <button className={`w-full text-left px-3 py-2 rounded ${activeTab === 'articles' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`} onClick={() => setActiveTab('articles')}>Articles</button>
              <button className={`w-full text-left px-3 py-2 rounded ${activeTab === 'reports' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`} onClick={() => setActiveTab('reports')}>Reported Issues</button>
            </div>
          </aside>
          <div className="flex-1">

      {/* Hero Content Management */}
      {activeTab === 'hero' && (
        <div className="p-0">
          <h2 className="text-xl font-semibold mb-4">Hero Content</h2>
          <div className="space-y-3">
            <label className="block text-sm font-medium">Title</label>
            <textarea className="w-full border rounded p-2" rows={2} value={heroForm.title} onChange={(e) => setHeroForm({ ...heroForm, title: e.target.value })} />
            <label className="block text-sm font-medium">Subtitle</label>
            <textarea className="w-full border rounded p-2" rows={2} value={heroForm.subtitle} onChange={(e) => setHeroForm({ ...heroForm, subtitle: e.target.value })} />
            <label className="block text-sm font-medium">Paragraph 1</label>
            <textarea className="w-full border rounded p-2" rows={4} value={heroForm.p1} onChange={(e) => setHeroForm({ ...heroForm, p1: e.target.value })} />
            <label className="block text-sm font-medium">Paragraph 2</label>
            <textarea className="w-full border rounded p-2" rows={4} value={heroForm.p2} onChange={(e) => setHeroForm({ ...heroForm, p2: e.target.value })} />
            <div>
              <button className="px-3 py-2 border rounded" onClick={async () => {
                const { error } = await (supabase as any).from('hero_content').insert({
                  title: heroForm.title,
                  subtitle: heroForm.subtitle,
                  p1: heroForm.p1,
                  p2: heroForm.p2,
                } as HeroContent);
                if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
                else toast({ title: 'Saved', description: 'Hero content saved' });
              }}>Save</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'articles' && (
        <div className="p-0">
          <h2 className="text-xl font-semibold mb-4">Articles</h2>
          <div className="space-y-4">
            <button className="px-3 py-2 border rounded" onClick={async () => {
              const { error } = await (supabase as any)
                .from('articles')
                .insert({ title: 'Untitled', content: '' } as Partial<Article>)
                .select('*')
                .single();
              if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
              else {
                toast({ title: 'Created', description: 'New article added' });
                fetchAllData();
              }
            }}>Add Article</button>
            <div className="grid gap-3">
              {/* Simple list of recent articles with inline editing */}
              {/* For performance: fetch minimal fields */}
              <ArticleEditorList />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'reports' && (
        <div className="p-0">
          <h2 className="text-xl font-semibold mb-4">Report Issues ({reportIssues.length})</h2>
          <div className="space-y-4">
            {reportIssues.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No issues reported yet.
              </div>
            ) : (
              <div className="space-y-4">
                {reportIssues.map((issue) => (
                  <div key={issue.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{issue.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          by {issue.name} ({issue.email}) • {new Date(issue.created_at).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-blue-600 font-medium mt-1">
                          Type: {issue.issue_type}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          issue.status === 'open' ? 'bg-red-100 text-red-800' :
                          issue.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                          issue.status === 'resolved' ? 'bg-green-100 text-green-800' :
                          'bg-lotessaGray-background text-lotessaGray-text'
                        }`}>
                          {issue.status.replace('_', ' ')}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          issue.priority === 'urgent' ? 'bg-red-100 text-red-800' :
                          issue.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                          issue.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {issue.priority}
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-lotessaGray-background rounded p-3">
                      <p className="text-sm whitespace-pre-wrap">{issue.description}</p>
                    </div>
                    
                    {issue.phone && (
                      <p className="text-sm text-muted-foreground">
                        Phone: {issue.phone}
                      </p>
                    )}
                    
                    <div className="flex gap-2">
                      <button 
                        className="px-3 py-1 text-xs border rounded hover:bg-lotessaGray-background"
                        onClick={async () => {
                          const newStatus = issue.status === 'open' ? 'in_progress' : 
                                          issue.status === 'in_progress' ? 'resolved' : 'open';
                          const { error } = await supabase
                            .from('report_issues')
                            .update({ status: newStatus })
                            .eq('id', issue.id);
                          if (error) {
                            toast({ title: 'Error', description: error.message, variant: 'destructive' });
                          } else {
                            toast({ title: 'Updated', description: `Status changed to ${newStatus}` });
                            fetchAllData();
                          }
                        }}
                      >
                        {issue.status === 'open' ? 'Start Progress' : 
                         issue.status === 'in_progress' ? 'Mark Resolved' : 'Reopen'}
                      </button>
                      
                      <button 
                        className="px-3 py-1 text-xs border rounded hover:bg-lotessaGray-background"
                        onClick={async () => {
                          const newPriority = issue.priority === 'low' ? 'medium' :
                                            issue.priority === 'medium' ? 'high' :
                                            issue.priority === 'high' ? 'urgent' : 'low';
                          const { error } = await supabase
                            .from('report_issues')
                            .update({ priority: newPriority })
                            .eq('id', issue.id);
                          if (error) {
                            toast({ title: 'Error', description: error.message, variant: 'destructive' });
                          } else {
                            toast({ title: 'Updated', description: `Priority changed to ${newPriority}` });
                            fetchAllData();
                          }
                        }}
                      >
                        Priority: {issue.priority === 'low' ? 'Medium' :
                                 issue.priority === 'medium' ? 'High' :
                                 issue.priority === 'high' ? 'Urgent' : 'Low'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      {activeTab === 'community' && (
        <div className="p-0">
          <h2 className="text-xl font-semibold mb-4">Community Content</h2>
          <div className="space-y-3">
            <label className="block text-sm font-medium">Heading</label>
            <textarea className="w-full border rounded p-2" rows={2} value={communityForm.heading} onChange={(e) => setCommunityForm({ ...communityForm, heading: e.target.value })} />
            <label className="block text-sm font-medium">Title</label>
            <textarea className="w-full border rounded p-2" rows={2} value={communityForm.title} onChange={(e) => setCommunityForm({ ...communityForm, title: e.target.value })} />
            <label className="block text-sm font-medium">Paragraph</label>
            <textarea className="w-full border rounded p-2" rows={4} value={communityForm.paragraph} onChange={(e) => setCommunityForm({ ...communityForm, paragraph: e.target.value })} />
            <div>
              <button className="px-3 py-2 border rounded" onClick={async () => {
                const { error } = await (supabase as any).from('community_content').insert(communityForm as CommunityContent);
                if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
                else toast({ title: 'Saved', description: 'Community content saved' });
              }}>Save</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'partner' && (
        <div className="p-0">
          <h2 className="text-xl font-semibold mb-4">Partner Content</h2>
          <div className="space-y-4">
            {/* Main Section */}
            <div className="border rounded p-4">
              <h3 className="text-lg font-medium mb-3">Main Section</h3>
              <div className="space-y-3">
                <label className="block text-sm font-medium">Section Title</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.section_title} onChange={(e) => setPartnerForm({ ...partnerForm, section_title: e.target.value })} />
                <label className="block text-sm font-medium">Main Title</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.main_title} onChange={(e) => setPartnerForm({ ...partnerForm, main_title: e.target.value })} />
                <label className="block text-sm font-medium">Main Description</label>
                <textarea className="w-full border rounded p-2" rows={4} value={partnerForm.main_description} onChange={(e) => setPartnerForm({ ...partnerForm, main_description: e.target.value })} />
              </div>
            </div>

            {/* Write for Lotessa Section */}
            <div className="border rounded p-4">
              <h3 className="text-lg font-medium mb-3">Write for Lotessa</h3>
              <div className="space-y-3">
                <label className="block text-sm font-medium">Title</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.write_title} onChange={(e) => setPartnerForm({ ...partnerForm, write_title: e.target.value })} />
                <label className="block text-sm font-medium">Question</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.write_question} onChange={(e) => setPartnerForm({ ...partnerForm, write_question: e.target.value })} />
                <label className="block text-sm font-medium">Bullet Point 1</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.write_bullet1} onChange={(e) => setPartnerForm({ ...partnerForm, write_bullet1: e.target.value })} />
                <label className="block text-sm font-medium">Bullet Point 2</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.write_bullet2} onChange={(e) => setPartnerForm({ ...partnerForm, write_bullet2: e.target.value })} />
                <label className="block text-sm font-medium">Bullet Point 3</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.write_bullet3} onChange={(e) => setPartnerForm({ ...partnerForm, write_bullet3: e.target.value })} />
                <label className="block text-sm font-medium">Bullet Point 4</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.write_bullet4} onChange={(e) => setPartnerForm({ ...partnerForm, write_bullet4: e.target.value })} />
              </div>
            </div>

            {/* Sponsor & Partner Section */}
            <div className="border rounded p-4">
              <h3 className="text-lg font-medium mb-3">Sponsor & Partner</h3>
              <div className="space-y-3">
                <label className="block text-sm font-medium">Title</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.sponsor_title} onChange={(e) => setPartnerForm({ ...partnerForm, sponsor_title: e.target.value })} />
                <label className="block text-sm font-medium">Question</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.sponsor_question} onChange={(e) => setPartnerForm({ ...partnerForm, sponsor_question: e.target.value })} />
                <label className="block text-sm font-medium">Bullet Point 1</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.sponsor_bullet1} onChange={(e) => setPartnerForm({ ...partnerForm, sponsor_bullet1: e.target.value })} />
                <label className="block text-sm font-medium">Bullet Point 2</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.sponsor_bullet2} onChange={(e) => setPartnerForm({ ...partnerForm, sponsor_bullet2: e.target.value })} />
                <label className="block text-sm font-medium">Bullet Point 3</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.sponsor_bullet3} onChange={(e) => setPartnerForm({ ...partnerForm, sponsor_bullet3: e.target.value })} />
                <label className="block text-sm font-medium">Bullet Point 4</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.sponsor_bullet4} onChange={(e) => setPartnerForm({ ...partnerForm, sponsor_bullet4: e.target.value })} />
              </div>
            </div>

            {/* Advise and Invest Section */}
            <div className="border rounded p-4">
              <h3 className="text-lg font-medium mb-3">Advise and Invest</h3>
              <div className="space-y-3">
                <label className="block text-sm font-medium">Title</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.advise_title} onChange={(e) => setPartnerForm({ ...partnerForm, advise_title: e.target.value })} />
                <label className="block text-sm font-medium">Question</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.advise_question} onChange={(e) => setPartnerForm({ ...partnerForm, advise_question: e.target.value })} />
                <label className="block text-sm font-medium">Bullet Point 1</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.advise_bullet1} onChange={(e) => setPartnerForm({ ...partnerForm, advise_bullet1: e.target.value })} />
                <label className="block text-sm font-medium">Bullet Point 2</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.advise_bullet2} onChange={(e) => setPartnerForm({ ...partnerForm, advise_bullet2: e.target.value })} />
                <label className="block text-sm font-medium">Bullet Point 3</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.advise_bullet3} onChange={(e) => setPartnerForm({ ...partnerForm, advise_bullet3: e.target.value })} />
                <label className="block text-sm font-medium">Bullet Point 4</label>
                <textarea className="w-full border rounded p-2" rows={2} value={partnerForm.advise_bullet4} onChange={(e) => setPartnerForm({ ...partnerForm, advise_bullet4: e.target.value })} />
              </div>
            </div>

            <div>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90" onClick={async () => {
                const { error } = await (supabase as any).from('partnerwithlotessa').insert(partnerForm as PartnerContent);
                if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
                else toast({ title: 'Saved', description: 'Partner content saved' });
              }}>Save Partner Content</button>
            </div>
          </div>
        </div>
      )}

            {/* Main content wrapper continues below */}
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

            <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 py-4 sm:py-6 lg:py-8">
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
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
