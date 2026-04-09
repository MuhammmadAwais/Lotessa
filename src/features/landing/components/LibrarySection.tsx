import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState, useRef, useMemo } from "react";
import ArticleDialog from "@/components/ArticleDialog";
import { useArticlesContent } from "@/features/landing/hooks/useArticlesContent";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Article } from "@/types/article";

/**
 * Utility to highlight specific medical or brand keywords in a string
 */
const HighlightedText = ({ text }: { text: string }) => {
  const keywords = ["GLP-1", "NHS", "Mounjaro", "UK", "Lotessa", "diabetes"];
  const regex = new RegExp(`(${keywords.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        keywords.some((kw) => kw.toLowerCase() === part.toLowerCase()) ? (
          <span key={i} className="text-[#2FB4A5] font-bold">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

const LibraryCard = ({ article, isFeatured, onClick }: { article: Article, isFeatured?: boolean, onClick: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  /**
   * Formats the description into semantic paragraphs with keyword highlighting
   */
  const renderFormattedDescription = useMemo(() => {
    const sentences = article.description.split(". ");
    const paragraphs: string[][] = [];
    
    // Group 2-3 sentences into paragraphs
    for (let i = 0; i < sentences.length; i += 2) {
      paragraphs.push(sentences.slice(i, i + 2));
    }

    return paragraphs.map((sentencesInPara, idx) => (
      <p key={idx} className={`${isFeatured ? "mb-5 last:mb-0" : ""} leading-relaxed text-balance`}>
        <HighlightedText text={sentencesInPara.join(". ") + (idx < paragraphs.length - 1 || sentencesInPara.length > 0 ? "" : ".")} />
        {idx === paragraphs.length - 1 && article.description.endsWith(".") ? "" : ""}
      </p>
    ));
  }, [article.description, isFeatured]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`group cursor-pointer bg-white rounded-[32px] border border-zinc-500/10 shadow-[0px_1px_2px_rgba(0,0,0,0.06),0px_8px_16px_rgba(0,0,0,0.04)] hover:shadow-[0px_1px_2px_rgba(0,0,0,0.06),0px_15px_30px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col relative overflow-hidden
      ${isFeatured ? 'lg:col-span-2 lg:row-span-2' : 'lg:col-span-1'}`}
    >
      <div className={`p-6 lg:p-10 flex flex-col h-full ${isFeatured ? 'gap-8' : 'gap-5'}`}>
        {/* Header Row */}
        <div className="flex justify-between items-start">
          <span className="font-mono text-[#2FB4A5] text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">
            {isFeatured ? "Featured Article" : "Health Insight"}
          </span>
          <div className="overflow-hidden w-6 h-6 relative opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.div
              initial={{ x: -20, y: 20 }}
              whileHover={{ x: 0, y: 0 }}
              className="text-[#FF8A73]"
            >
              <ArrowUpRight size={20} />
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-6">
          <h3 className={`font-sora font-semibold tracking-tighter text-zinc-900 leading-[1.15] group-hover:text-[#2FB4A5] transition-colors text-balance
            ${isFeatured ? 'text-3xl lg:text-5xl' : 'text-xl lg:text-2xl'}`}>
            {article.title}
          </h3>
          
          <div className={`text-zinc-600 font-sora ${isFeatured ? 'text-base lg:text-lg line-clamp-[12]' : 'text-sm line-clamp-3'}`}>
            {isFeatured ? renderFormattedDescription : article.description}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="flex items-center justify-between border-t border-zinc-100/50 pt-8 mt-4">
          <div className="flex items-center gap-2 group/cta">
            <span className="text-[11px] font-bold text-zinc-900 group-hover/cta:text-[#2FB4A5] transition-colors uppercase tracking-widest">Read more</span>
            <ArrowRight size={14} className="text-[#FF8A73] group-hover/cta:translate-x-1 transition-transform" />
          </div>
          <span className="text-zinc-400 text-[10px] font-mono tracking-tight uppercase">{article.readTime || '4 min read'}</span>
        </div>
      </div>
      
      {/* Subtle Interaction Highlight Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#2FB4A5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

const LibrarySection = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const fallbackArticles: Article[] = [
    {
      title: "Common Myths About GLP-1 Weight Loss Drugs & The Truths You Actually Need",
      subtitle: "A professional deep-dive into clinical reality",
      description: "So, you've done your homework, talked to your doctor, and maybe even decided to start a GLP-1 medication. Then the opinions start arriving. A colleague tells you it's 'basically cheating.' A family member warns you that you'll 'never be able to enjoy your favourite foods again.' And somewhere online, someone claims they 'lost 20 pounds in a month without changing a thing.' It can be hard to know what's real and what's just a story passed along without facts. Let's sort through some of the most common myths and the truths you actually need to hear. GLP-1 medications don't work like a switch you flip overnight. They help regulate appetite and blood sugar, making it easier to make consistent choices but results happen gradually over months. Slow, steady progress is not only more realistic, it's healthier for long-term clinical success.",
      content: "So, you've done your homework, talked to your doctor, and maybe even decided to start a GLP-1 medication. Then the opinions start arriving. A colleague tells you it's 'basically cheating.' A family member warns you that you'll 'never be able to enjoy your favourite foods again.' And somewhere online, someone claims they 'lost 20 pounds in a month without changing a thing.' It can be hard to know what's real and what's just a story passed along without facts. Let's sort through some of the most common myths and the truths you actually need to hear. GLP-1 medications don't work like a switch you flip overnight. They help regulate appetite and blood sugar, making it easier to make consistent choices but results happen gradually over months. Slow, steady progress is not only more realistic, it's healthier for long-term clinical success.",
      author: "Lotessa Team",
      date: "March 15, 2024",
      readTime: "9 min read",
      id: 11 // Unique ID to ensure it's picked as featured
    },
    {
      title: "The Future of GLP-1 Access in the UK",
      description: "The recent Mounjaro price hike has understandably caused worry for many UK users, especially those paying privately. While NHS patients will see no immediate change, the private market is experiencing significant shifts.",
      content: "The recent Mounjaro price hike has understandably caused worry for many UK users, especially those paying privately. While NHS patients will see no immediate change, the private market is experiencing significant shifts.",
      author: "Dr. Sarah Williams",
      date: "March 15, 2024",
      readTime: "5 min read",
      id: 1
    },
    {
      title: "Why Tracking Your GLP-1 Matters",
      description: "The recent rise in Mounjaro prices has caused some people to rethink their dosing schedules. In these moments, tracking your progress becomes even more critical.",
      content: "The recent rise in Mounjaro prices has caused some people to rethink their dosing schedules. In these moments, tracking your progress becomes even more critical.",
      author: "Emma Thompson, RN",
      date: "March 12, 2024",
      readTime: "4 min read",
      id: 2
    },
    {
      title: "Tracking for Sustained Goals",
      description: "GLP-1 medications can be a powerful kick-start, but long-term success relies on more than injections. Lifestyle changes will cement your progress.",
      content: "GLP-1 medications can be a powerful kick-start, but long-term success relies on more than injections. Lifestyle changes will cement your progress.",
      author: "Dr. Michael Roberts",
      date: "March 10, 2024",
      readTime: "4 min read",
      id: 3
    },
    {
      title: "What Are GLP-1 Medications?",
      description: "GLP-1 stands for glucagon-like peptide-1, a natural hormone your body already makes. Its 'day job' is to help regulate appetite.",
      content: "GLP-1 stands for glucagon-like peptide-1, a natural hormone your body already makes. Its 'day job' is to help regulate appetite.",
      author: "Dr. Jennifer Lee",
      date: "March 8, 2024",
      readTime: "6 min read",
      id: 4
    },
    {
      title: "How Does GLP-1 Work?",
      description: "Think of GLP-1 as your body's group text. When you eat, your gut sends out a 'group message' to your brain and stomach.",
      content: "Think of GLP-1 as your body's group text. When you eat, your gut sends out a 'group message' to your brain and stomach.",
      author: "Dr. Robert Chen",
      date: "March 5, 2024",
      readTime: "7 min read",
      id: 5
    }
  ];

  const { articles: fetchedArticles } = useArticlesContent(fallbackArticles);
  
  // Combine fetched with fallback to always have 6 cards
  const allArticles = [...fetchedArticles];
  fallbackArticles.forEach(fb => {
    if (!allArticles.some(a => a.id === fb.id)) {
      // Put our specific featured fallback at the start
      if (fb.id === 11) allArticles.unshift(fb);
      else allArticles.push(fb);
    }
  });
  const articles = allArticles.slice(0, 6);

  const handleArticleClick = (article: any) => {
    setSelectedArticle(article);
    setDialogOpen(true);
  };

  return (
    <section id="library" className="py-24 lg:py-40 bg-[#F6F8F7] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="space-y-20">
          {/* Section Header */}
          <div className="space-y-6 max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[#2FB4A5] text-xs uppercase tracking-[0.2em] font-bold"
            >
              Lotessa Library
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-sora font-semibold tracking-tighter text-zinc-900 leading-tight"
            >
              Discover Expert Content, Anytime
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sora text-zinc-600 text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto"
            >
              Bite-sized insights, real-world tips, and trustworthy health information
            </motion.p>
          </div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 auto-rows-[minmax(180px,auto)]">
            {articles.map((article, index) => (
              <LibraryCard
                key={article.id}
                article={article}
                isFeatured={index === 0}
                onClick={() => handleArticleClick(article)}
              />
            ))}
          </div>
        </div>
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