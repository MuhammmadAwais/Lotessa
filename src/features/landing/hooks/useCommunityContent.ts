import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

import { CommunityContent } from "@/types/content";

export const useCommunityContent = () => {
  const [heading, setHeading] = useState("Join the Community");
  const [title, setTitle] = useState("You're Not Alone");
  const [paragraph, setParagraph] = useState("Join a supportive, judgement-free community where you can ask questions, share progress, and connect with others who understand your journey. Whether you're just starting or deep into your transformation, there's a space for you here.");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const { data } = await (supabase as any)
          .from('community_content')
          .select('*')
          .order('updated_at', { ascending: false })
          .limit(1)
          .maybeSingle() as { data: CommunityContent | null };

        if (data) {
          setHeading(data.heading || heading);
          setTitle(data.title || title);
          setParagraph(data.paragraph || paragraph);
        } else {
          // Fire and forget fallback insert if missing
          (supabase as any).from('community_content').insert({
            heading,
            title,
            paragraph,
          } as CommunityContent).then();
        }
      } catch (e) {
        console.error("Failed to load community content:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { heading, title, paragraph, loading };
};
