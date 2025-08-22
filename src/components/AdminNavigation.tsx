import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Users, 
  MessageSquare, 
  Activity, 
  Eye, 
  LogOut, 
  RefreshCw,
  Home
} from "lucide-react";

interface AdminNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onRefresh: () => void;
  onLogout: () => void;
  stats: {
    contacts: number;
    visitors: number;
    waitlist: number;
    interactions: number;
    articleClicks: number;
  };
}

const AdminNavigation = ({ 
  activeTab, 
  onTabChange, 
  onRefresh, 
  onLogout,
  stats 
}: AdminNavigationProps) => {
  const navItems = [
    { id: "overview", label: "Overview", icon: BarChart3, count: null },
    { id: "contacts", label: "Contacts", icon: MessageSquare, count: stats.contacts },
    { id: "visitors", label: "Visitors", icon: Eye, count: stats.visitors },
    { id: "waitlist", label: "Waitlist", icon: Users, count: stats.waitlist },
    { id: "interactions", label: "Interactions", icon: Activity, count: stats.interactions },
    { id: "article-clicks", label: "Article Clicks", icon: Home, count: stats.articleClicks },
  ];

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-gray-900">Lotessa Admin</h1>
            
            <nav className="flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => onTabChange(item.id)}
                    className="flex items-center space-x-2"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {item.count !== null && (
                      <Badge variant="secondary" className="ml-2">
                        {item.count}
                      </Badge>
                    )}
                  </Button>
                );
              })}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button onClick={onRefresh} variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button onClick={onLogout} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavigation;
