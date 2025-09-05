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
      <DialogContent className="max-w-7xl w-[95vw] h-[90vh] p-0 bg-white border border-border shadow-lg">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border bg-white sticky top-0 z-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-2 pr-8">
                {article.title}
              </DialogTitle>
              
              {article.subtitle && (
                <h2 className="text-lg md:text-xl text-foreground font-medium mb-4 leading-relaxed">
                  {article.subtitle}
                </h2>
              )}
            </div>
          </div>
        </DialogHeader>

        {/* Scrollable Content */}
        <div className="flex-1 min-h-0 overflow-y-auto" 
             style={{
               scrollbarWidth: 'none', /* Firefox */
               msOverflowStyle: 'none', /* Internet Explorer 10+ */
             }}>
          <style>{`
            div::-webkit-scrollbar {
              display: none; /* Chrome, Safari, Opera */
            }
          `}</style>
          <div className="px-6 pb-6 space-y-2">
            {/* Content with Sticky Mockup */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Side - All Article Content */}
              <div className="lg:w-2/3">
                <div className="prose prose-lg max-w-none">
                  <div 
                    className="text-muted-foreground leading-relaxed space-y-4"
                    style={{ 
                      lineHeight: '1.7'
                    }}
                  >
                    {article.content.split('\n').map((paragraph, index) => {
                      if (paragraph.startsWith('## ')) {
                        return (
                          <h2 key={index} className="text-xl md:text-2xl font-bold text-foreground mt-6 mb-3 first:mt-0">
                            {paragraph.replace('## ', '')}
                          </h2>
                        );
                      }
                      if (paragraph.startsWith('### ')) {
                        return (
                          <h3 key={index} className="text-lg md:text-xl font-semibold text-foreground mt-4 mb-2">
                            {paragraph.replace('### ', '')}
                          </h3>
                        );
                      }
                      if (paragraph.startsWith('- ')) {
                        return (
                          <li key={index} className="text-muted-foreground ml-4 list-disc">
                            {paragraph.replace('- ', '')}
                          </li>
                        );
                      }
                      if (paragraph.trim() === '') {
                        return <div key={index} className="h-1" />;
                      }
                      return (
                        <p key={index} className="text-muted-foreground mb-3">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Side - Mobile Mockup */}
              <div className="lg:w-1/3 hidden lg:flex justify-center items-start pt-8">
                <div className="w-[300px] sticky top-8">
                  <img
                    src="/lovable-uploads/7dc40bd7-caa6-47a8-8ff0-a647d67addf5.png"
                    alt="Lotessa Progress Tracking Interface"
                    className="rounded-lg w-full h-auto object-contain"
                  />
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