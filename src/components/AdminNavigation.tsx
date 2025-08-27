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
  Home,
  Trash2,
  Menu
} from "lucide-react";
import { useState } from "react";

interface AdminNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onRefresh: () => void;
  onLogout: () => void;
  onDelete: () => void;
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
  onDelete,
  stats 
}: AdminNavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between items-center h-16">
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
            <Button onClick={onDelete} variant="destructive" size="sm">
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All Data
            </Button>
            <Button onClick={onLogout} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-gray-900">Lotessa Admin</h1>
            
            <div className="flex items-center space-x-2">
              <Button onClick={onRefresh} variant="outline" size="sm">
                <RefreshCw className="w-4 h-4" />
              </Button>
              <Button onClick={onDelete} variant="destructive" size="sm">
                <Trash2 className="w-4 h-4" />
              </Button>
              <Button onClick={onLogout} variant="outline" size="sm">
                <LogOut className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="border-t border-gray-200 py-4 space-y-2">
              <nav className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? "default" : "ghost"}
                      size="sm"
                      onClick={() => {
                        onTabChange(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-center space-x-2 h-10"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{item.label}</span>
                      {item.count !== null && (
                        <Badge variant="secondary" className="ml-1">
                          {item.count}
                        </Badge>
                      )}
                    </Button>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminNavigation;
