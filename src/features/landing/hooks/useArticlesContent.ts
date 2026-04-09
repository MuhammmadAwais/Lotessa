import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Article } from "@/types/article";

export const useArticlesContent = (fallbackArticles: Article[]) => {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const { data, error } = await (supabase as any)
          .from('articles')
          .select('*')
          .order('published_at', { ascending: false })
          .order('created_at', { ascending: false });
          
        if (!error && data && data.length > 0) {
          setArticles(data.map((a: any) => ({
            id: isNaN(Number(a.id)) ? a.id : Number(a.id),
            title: a.title,
            subtitle: a.subtitle,
            description: a.description,
            content: a.content || a.description || '',
            author: a.author || "Lotessa Team",
            date: a.published_at || a.created_at,
            readTime: a.read_time || '',
          })));
        } else {
          setArticles(null);
        }
      } catch (e) {
        console.error("Failed to load articles:", e);
        setArticles(null);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { articles: articles ?? fallbackArticles, loading };
};
