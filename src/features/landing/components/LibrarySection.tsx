import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ArticleDialog from "@/components/ArticleDialog";
import { supabase } from "@/integrations/supabase/client";
import { useArticlesContent } from "@/features/landing/hooks/useArticlesContent";
import { motion } from "framer-motion";
import { Article } from "@/types/article";

const LibrarySection = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const fallbackArticles: Article[] = [
    {
      title: "The Future of GLP-1 Access in the UK",
      subtitle: "A period of change, but not the end of your journey",
      description: "The recent Mounjaro price hike has understandably caused worry for many UK users, especially those paying privately. While NHS patients will see no immediate change, the private market is experiencing significant shifts.",
      content: "The recent Mounjaro price hike has understandably caused worry for many UK users, especially those paying privately.",
      author: "Dr. Sarah Williams",
      date: "March 15, 2024",
      readTime: "5 min read",
      id: 1
    },
    {
      title: "Why Tracking Your GLP-1 Matters",
      subtitle: "When uncertainty strikes, data becomes your safety net",
      description: "The recent rise in Mounjaro prices has caused some people to rethink their dosing schedules. In these moments, tracking your progress becomes even more critical.",
      content: "The recent rise in Mounjaro prices has caused some people to rethink their dosing schedules.",
      author: "Emma Thompson, RN",
      date: "March 12, 2024",
      readTime: "4 min read",
      id: 2
    },
    {
      title: "Tracking for Sustained Goals",
      subtitle: "GLP-1 is just the beginning, habits carry you the distance",
      description: "GLP-1 medications can be a powerful kick-start, but long-term success relies on more than injections. Lifestyle changes will cement your progress.",
      content: "GLP-1 medications can be a powerful kick-start, but long-term success relies on more than injections.",
      author: "Dr. Michael Roberts",
      date: "March 10, 2024",
      readTime: "4 min read",
      id: 3
    },
    {
      title: "What Are GLP-1 Medications?",
      subtitle: "If you've just been prescribed, you might hear a lot of new terms",
      description: "GLP-1 stands for glucagon-like peptide-1, a natural hormone your body already makes. Its 'day job' is to help regulate appetite.",
      content: "GLP-1 stands for glucagon-like peptide-1, a natural hormone your body already makes.",
      author: "Dr. Jennifer Lee",
      date: "March 8, 2024",
      readTime: "6 min read",
      id: 4
    },
    {
      title: "How Does GLP-1 Work?",
      subtitle: "What actually happens inside your body when you take them",
      description: "Think of GLP-1 as your body's group text. When you eat, your gut sends out a 'group message' to your brain and stomach.",
      content: "Think of GLP-1 as your body's group text. When you eat, your gut sends out a 'group message' to your brain and stomach.",
      author: "Dr. Robert Chen",
      date: "March 5, 2024",
      readTime: "7 min read",
      id: 5
    }
  ];

  const { articles } = useArticlesContent(fallbackArticles);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleArticleClick = (article: any) => {
    setSelectedArticle(article);
    setDialogOpen(true);
  };

  return (
    <section id="library" className="py-[clamp(4rem,10vw,8rem)] bg-[#F6F8F7] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <motion.h3
              variants={itemVariants}
              className="text-display-md font-sora font-semibold tracking-tight uppercase text-xs sm:text-sm"
              style={{ color: '#2FB4A5' }}
            >
              Lotessa Library
            </motion.h3>

            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-sora font-semibold tracking-tighter text-[#1A2D2B] leading-tight"
            >
              Discover Expert Content, Anytime
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="font-sora text-zinc-600 text-heading-md leading-relaxed"
            >
              Bite-sized insights, real-world tips, and trustworthy health information
            </motion.p>
          </div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[200px]">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                variants={itemVariants}
                onClick={() => handleArticleClick(article)}
                className={`group cursor-pointer rounded-2xl transition-all duration-500 flex flex-col hover:-translate-y-2 relative overflow-hidden border border-zinc-100/10 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] bg-white
                ${index === 0 ? 'lg:col-span-2 lg:row-span-2 h-full' : 'h-full md:row-span-2 lg:row-span-1'}`}
              >
                {/* Inner Glow Overlay */}
                <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none z-10" />
                
                <div className="p-8 flex flex-col h-full">
                  {/* Category/Icon Row */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-teal-500 font-sora font-bold text-xs uppercase tracking-widest">
                      {index === 0 ? "Featured Article" : "Health Insight"}
                    </span>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF8A73] group-hover:border-transparent border border-zinc-100"
                    >
                      <ArrowRight className="text-[#FF8A73] group-hover:text-white transition-colors duration-300" size={20} />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3
                      className={`font-sora font-semibold text-[#000000] leading-snug mb-4 group-hover:text-teal-600 transition-colors duration-300
                      ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}
                    >
                      {article.title}
                    </h3>

                    {article.subtitle && (
                      <h4 className="font-sora font-medium text-sm text-zinc-500 leading-relaxed mb-4 line-clamp-2">
                        {article.subtitle}
                      </h4>
                    )}

                    <p className={`font-sora text-zinc-600 leading-relaxed flex-1 ${index === 0 ? 'line-clamp-4' : 'line-clamp-3'}`}>
                      {article.description}
                    </p>
                    
                    <div className="mt-8 flex items-center gap-4 border-t border-zinc-100 pt-6">
                      <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-bold text-[#2FB4A5]">
                        {(article.author || "L").charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-zinc-900">{article.author}</span>
                        <span className="text-[10px] text-zinc-400 font-medium">{article.date} • {article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <ArticleDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        article={selectedArticle}
      />
    </section>
  );
};

export default LibrarySection;