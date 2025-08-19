import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AnalyticsData {
  totalVisitors: number;
  headerHovers: number;
  headerClicks: number;
  heroHovers: number;
  heroClicks: number;
  footerHovers: number;
  footerClicks: number;
}

const AnalyticsDashboard = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Analytics data is now secured and requires authentication
    // Display a security notice instead of attempting to fetch data
    setData(null);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="p-8">Loading analytics...</div>;
  }

  if (!data) {
    return (
      <div className="p-8 space-y-6">
        <h2 className="text-3xl font-bold">Analytics Dashboard</h2>
        <Card>
          <CardHeader>
            <CardTitle>Analytics Data Secured</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Analytics data access has been restricted for security reasons. Customer data and tracking information 
                are now protected from unauthorized access.
              </p>
              <p className="text-sm text-muted-foreground">
                To restore analytics functionality, implement user authentication and create admin-level access controls.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6">
      <h2 className="text-3xl font-bold">Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Unique Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-primary">{data.totalVisitors}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Header Button</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>Hovers: <span className="font-bold">{data.headerHovers}</span></p>
              <p>Clicks: <span className="font-bold">{data.headerClicks}</span></p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hero Button</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>Hovers: <span className="font-bold">{data.heroHovers}</span></p>
              <p>Clicks: <span className="font-bold">{data.heroClicks}</span></p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Footer Button</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>Hovers: <span className="font-bold">{data.footerHovers}</span></p>
              <p>Clicks: <span className="font-bold">{data.footerClicks}</span></p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-lg font-semibold">Total Hovers</p>
              <p className="text-2xl font-bold">{data.headerHovers + data.heroHovers + data.footerHovers}</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Total Clicks</p>
              <p className="text-2xl font-bold">{data.headerClicks + data.heroClicks + data.footerClicks}</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Hover to Click Rate</p>
              <p className="text-2xl font-bold">
                {Math.round(((data.headerClicks + data.heroClicks + data.footerClicks) / 
                (data.headerHovers + data.heroHovers + data.footerHovers) * 100) || 0)}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;