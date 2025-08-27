import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Share2, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Article {
  title: string;
  subtitle: string;
  description: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  id: number;
}

interface ArticleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  article: Article | null;
}

const ArticleDialog = ({ open, onOpenChange, article }: ArticleDialogProps) => {
  if (!article) return null;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl w-[95vw] h-[90vh] p-0 bg-gradient-to-br from-slate-50 to-white border-0 shadow-2xl rounded-2xl overflow-hidden">
        {/* Enhanced Header with Gradient */}
        <DialogHeader className="px-8 pt-8 pb-6 bg-gradient-to-r from-primary/5 to-primary/10 backdrop-blur-sm sticky top-0 z-10 border-b border-primary/10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <span className="text-sm font-semibold text-primary/80 uppercase tracking-wider">
                  Featured Article
                </span>
              </div>
              
              <DialogTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent leading-tight mb-3 pr-8">
                {article.title}
              </DialogTitle>
              
              {article.subtitle && (
                <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-4 leading-relaxed">
                  {article.subtitle}
                </h2>
              )}
              
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* Enhanced Scrollable Content */}
        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
          <div className="px-8 pb-8 pt-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Enhanced Article Content */}
              <div className="lg:w-2/3">
                <div className="prose prose-lg max-w-none">
                  <div className="text-slate-700 leading-relaxed space-y-6">
                    {article.content.split('\n').map((paragraph, index) => {
                      if (paragraph.startsWith('## ')) {
                        return (
                          <div key={index} className="relative mt-8 mb-6 first:mt-0">
                            <div className="absolute -left-4 top-1 w-1 h-8 bg-gradient-to-b from-primary to-primary/40 rounded-full"></div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 pl-4">
                              {paragraph.replace('## ', '')}
                            </h2>
                          </div>
                        );
                      }
                      if (paragraph.startsWith('### ')) {
                        return (
                          <h3 key={index} className="text-xl md:text-2xl font-semibold text-slate-800 mt-6 mb-4 relative pl-4 border-l-2 border-primary/30">
                            {paragraph.replace('### ', '')}
                          </h3>
                        );
                      }
                      if (paragraph.startsWith('- ')) {
                        return (
                          <div key={index} className="flex items-start gap-3 text-slate-700 my-3">
                            <div className="w-2 h-2 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{paragraph.replace('- ', '')}</span>
                          </div>
                        );
                      }
                      if (paragraph.trim() === '') {
                        return <div key={index} className="h-4" />;
                      }
                      return (
                        <p key={index} className="text-slate-700 mb-4 leading-relaxed text-lg">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Enhanced Mobile Mockup */}
              <div className="lg:w-1/3 hidden lg:flex justify-center items-start pt-8">
                <div className="w-[320px] sticky top-8">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 blur-xl rounded-2xl transform scale-105 opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative bg-white p-4 rounded-2xl shadow-xl border border-slate-200/50">
                      <img
                        src="/lovable-uploads/257ea2ad-1c1a-4d20-832e-0a1f30850e51.png"
                        alt="Lotessa Mobile App Interface"
                        className="rounded-xl w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <style>{`
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: rgba(59, 130, 246, 0.3) transparent;
          }
          
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(59, 130, 246, 0.3);
            border-radius: 3px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(59, 130, 246, 0.5);
          }
        `}</style>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleDialog;