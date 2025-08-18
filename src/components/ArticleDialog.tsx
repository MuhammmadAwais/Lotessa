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
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 bg-white border border-border shadow-lg">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border bg-white sticky top-0 z-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-2xl md:text-3xl font-bold text-[#001F3F] leading-tight mb-2 pr-8">
                {article.title}
              </DialogTitle>
              
              {article.subtitle && (
                <h2 className="text-lg md:text-xl text-[#001F3F] font-medium mb-4 leading-relaxed">
                  {article.subtitle}
                </h2>
              )}

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="font-medium">By {article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* Scrollable Content */}
        <ScrollArea className="flex-1 px-6 pb-6">
          <div className="space-y-4">
            {/* Share Button */}
            <div className="pt-2">
              <Button
                onClick={handleShare}
                variant="outline"
                size="sm"
                className="mb-6"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share Article
              </Button>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-[#001F3F] leading-relaxed space-y-6"
                style={{ 
                  lineHeight: '1.7'
                }}
              >
                {article.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-xl md:text-2xl font-bold text-[#001F3F] mt-8 mb-4 first:mt-0">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-lg md:text-xl font-semibold text-[#001F3F] mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="text-[#001F3F] ml-4 list-disc">
                        {paragraph.replace('- ', '')}
                      </li>
                    );
                  }
                  if (paragraph.trim() === '') {
                    return <div key={index} className="h-2" />;
                  }
                  return (
                    <p key={index} className="text-[#001F3F] mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Written by <span className="font-medium">{article.author}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Published on {article.date}
                  </p>
                </div>
                
                <Button
                  onClick={handleShare}
                  variant="outline"
                  size="sm"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share this article
                </Button>
              </div>
            </footer>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleDialog;