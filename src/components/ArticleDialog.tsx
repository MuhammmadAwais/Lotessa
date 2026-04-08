import { useEffect, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Share2, Clock, Calendar } from "lucide-react";
import gsap from "gsap";
import { Article } from "@/types/article";

interface ArticleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  article: Article | null;
}

const ArticleDialog = ({ open, onOpenChange, article }: ArticleDialogProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);

  // Slide-in from right on open
  useEffect(() => {
    if (open && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "power2.out" }
      );
    }
  }, [open]);

  if (!article) return null;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: article.title, text: article.description, url: window.location.href });
      } catch (error) {
        console.error("Error sharing article:", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const renderContent = (raw: string) => {
    const importantKeywords = [
      "GLP-1", "Lotessa", "Mounjaro", "Wegovy", "Ozempic", 
      "Metabolic", "Weight loss", "NHS", "UK", "Insulin",
      "Lifestyle", "Health journey", "Habits"
    ];

    const boldText = (text: string) => {
      let processed = text;
      
      // 1. Handle markdown-style **bold**
      processed = processed.replace(/\*\*(.*?)\*\*/g, '___BOLD___$1___ENDBOLD___');

      // 2. Handle auto-bolding important keywords
      importantKeywords.forEach(keyword => {
        const regex = new RegExp(`(${keyword})`, 'gi');
        processed = processed.replace(regex, '___BOLD___$1___ENDBOLD___');
      });

      // 3. Convert placeholders to JSX
      const parts = processed.split(/___BOLD___|___ENDBOLD___/);
      return parts.map((part, index) => {
        if (processed.includes(`___BOLD___${part}___ENDBOLD___`)) {
          return <span key={index} className="font-bold text-black">{part}</span>;
        }
        return part;
      });
    };

    return raw.split("\n").map((line, i) => {
      if (line.startsWith("## "))
        return (
          <h2
            key={i}
            className="text-xl md:text-2xl font-bold mt-8 mb-3 first:mt-0"
            style={{ fontFamily: "'Antonio', sans-serif", color: "#2FB4A5" }}
          >
            {line.replace("## ", "")}
          </h2>
        );
      if (line.startsWith("### "))
        return (
          <h3
            key={i}
            className="text-lg md:text-xl font-semibold mt-5 mb-2"
            style={{ fontFamily: "'Antonio', sans-serif", color: "#000000" }}
          >
            {line.replace("### ", "")}
          </h3>
        );
      if (line.startsWith("- "))
        return (
          <li key={i} className="ml-5 list-disc font-sora text-lotessaGray-text">
            {boldText(line.replace("- ", ""))}
          </li>
        );
      if (line.trim() === "") return <div key={i} className="h-3" />;
      return (
        <p key={i} className="font-sora leading-relaxed mb-3 text-lotessaGray-text">
          {boldText(line)}
        </p>
      );
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Onyx backdrop overlay */}
      <DialogContent
        className="max-w-7xl w-[95vw] h-[90vh] p-0 flex flex-col overflow-hidden rounded-none"
        style={{
          background: "#F6F8F7",
          border: "2px solid #1A2D2B",
          boxShadow: "none",
        }}
        /* Hide the default X button — we render our own */
        onInteractOutside={() => onOpenChange(false)}
      >
        <div ref={contentRef} className="flex flex-col h-full min-h-0">
          {/* ── Onyx Header ── */}
          <div
            ref={headerRef}
            className="px-6 pt-6 pb-4 sticky top-0 z-10 flex items-start justify-between gap-4 shrink-0"
            style={{ background: "#F6F8F7", borderBottom: "1px solid #1A2D2B" }}
          >
            <div className="flex-1 min-w-0 pr-12">
              <h1
                className="text-2xl md:text-3xl font-bold leading-tight mb-2"
                style={{ fontFamily: "'Antonio', sans-serif", color: "#1A2D2B" }}
              >
                {article.title}
              </h1>

              {article.subtitle && (
                <p
                  className="font-sora text-base md:text-lg font-medium leading-relaxed"
                  style={{ color: "#1A2D2B", opacity: 0.8 }}
                >
                  {article.subtitle}
                </p>
              )}

              {/* Meta row */}
              <div className="flex items-center gap-4 mt-3 flex-wrap">
                {article.author && (
                  <span className="font-sora text-sm font-semibold" style={{ color: "#1A2D2B" }}>
                    {article.author}
                  </span>
                )}
                {article.date && (
                  <span className="flex items-center gap-1 font-sora text-xs text-lotessaGray-slate">
                    <Calendar size={12} /> {article.date}
                  </span>
                )}
                {article.readTime && (
                  <span className="flex items-center gap-1 font-sora text-xs text-lotessaGray-slate">
                    <Clock size={12} /> {article.readTime}
                  </span>
                )}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Share */}
              <button
                onClick={handleShare}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "#FFFFFF", border: "1px solid #1A2D2B" }}
                aria-label="Share article"
              >
                <Share2 size={16} className="text-lotessaGray-text" />
              </button>

              {/* Coral close button */}
              <button
                onClick={() => onOpenChange(false)}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                style={{ background: "#FF8A73" }}
                aria-label="Close"
              >
                <X size={16} color="white" />
              </button>
            </div>
          </div>

          {/* ── Light Scrollable Content ── */}
          <div
            className="flex-1 overflow-y-auto min-h-0"
            style={{
              background: "#F6F8F7",
            }}
          >
            <div className="px-6 pb-10">
              <div className="flex flex-col lg:flex-row gap-8 mt-6">
                {/* Article text */}
                <div className="lg:w-2/3 prose-invert">
                  {renderContent(article.content)}
                </div>

                {/* Right: sticky phone mockup */}
                <div className="lg:w-1/3 hidden lg:flex justify-center items-start pt-2">
                  <div className="w-[280px] sticky top-8">
                    <img
                      src="/lovable-uploads/7dc40bd7-caa6-47a8-8ff0-a647d67addf5.png"
                      alt="Lotessa Progress Tracking Interface"
                      className="rounded-xl w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleDialog;