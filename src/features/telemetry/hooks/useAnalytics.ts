import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AnalyticsData {
  browser_id: string;
  session_id: string;
}

// Generate a unique browser ID and store it in localStorage
const getBrowserId = (): string => {
  const existing = localStorage.getItem('lotessa_browser_id');
  if (existing) return existing;
  
  const newId = crypto.randomUUID();
  localStorage.setItem('lotessa_browser_id', newId);
  return newId;
};

// Generate a session ID for this browser session
const getSessionId = (): string => {
  const existing = sessionStorage.getItem('lotessa_session_id');
  if (existing) return existing;
  
  const newId = crypto.randomUUID();
  sessionStorage.setItem('lotessa_session_id', newId);
  return newId;
};

export const useAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    const initializeAnalytics = async () => {
      try {
        const browser_id = getBrowserId();
        const session_id = getSessionId();
        
        setAnalyticsData({ browser_id, session_id });

        // Register visitor (upsert to handle returning visitors)
        await supabase
          .from('visitors')
          .upsert({
            browser_id,
            user_agent: navigator.userAgent,
            last_seen: new Date().toISOString()
          }, {
            onConflict: 'browser_id'
          });

      } catch (error) {
        console.error('Analytics initialization error:', error);
      }
    };

    initializeAnalytics();
  }, []);

  const trackInteraction = async (eventType: 'hover' | 'click', elementName: string) => {
    if (!analyticsData) return;

    try {
      await supabase
        .from('interactions')
        .insert({
          browser_id: analyticsData.browser_id,
          event_type: eventType,
          element_name: elementName,
          page_url: window.location.href,
          session_id: analyticsData.session_id,
          timestamp: new Date().toISOString()
        });
    } catch (error) {
      console.error('Error tracking interaction:', error);
    }
  };

  return { trackInteraction, analyticsData, getBrowserId };
};