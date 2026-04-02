import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useHeroContent = () => {
  const [title, setTitle] = useState("Your Health Companion\nfor GLP1 Medication");
  const [subtitle, setSubtitle] = useState("Track. Learn. Connect. All in one place.");
  const [p1, setP1] = useState("Navigate the changing GLP-1 landscape with confidence. Track your progress, manage side effects, and stay informed about medication access and alternatives.");
  const [p2, setP2] = useState("Whether you're on Ozempic, Mounjaro, Wegovy, or considering alternatives, Lotessa helps you maintain continuity in your health journey. Get expert insights, track your progress, and connect with a community navigating similar challenges.");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const { data } = await (supabase as any)
          .from('hero_content')
          .select('*')
          .order('updated_at', { ascending: false })
          .limit(1)
          .maybeSingle();

        if (data) {
          setTitle(data.title || title);
          setSubtitle(data.subtitle || subtitle);
          setP1(data.p1 || p1);
          setP2(data.p2 || p2);
        } else {
          // Fire and forget fallback insert
          (supabase as any).from('hero_content').insert({
            title,
            subtitle,
            p1,
            p2,
          }).then();
        }
      } catch (e) {
        console.error("Failed to load hero content:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { title, subtitle, p1, p2, loading };
};
