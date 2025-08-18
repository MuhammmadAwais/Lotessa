import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ArticleDialog from "./ArticleDialog";

const LibrarySection = () => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const articles = [
    {
      title: "The Future of GLP-1 Access in the UK",
      subtitle: "A period of change, but not the end of your journey",
      description: "The recent Mounjaro price hike has understandably caused worry for many UK users, especially those paying privately.",
      content: `The recent Mounjaro price hike has understandably caused worry for many UK users, especially those paying privately. If you're one of the thousands of people wondering what this means for your GLP-1 journey, you're not alone.

Let's break down what's happening and explore your options moving forward.

## What Changed?

In recent months, the cost of Mounjaro (tirzepatide) has increased significantly across private healthcare providers in the UK. This has left many users facing difficult decisions about their treatment continuity.

## Your Options Moving Forward

### 1. NHS Pathways
While NHS access to GLP-1 medications can be limited, it's worth exploring whether you qualify for NHS prescription. Criteria include:
- BMI requirements
- Diabetes diagnosis
- Previous weight loss attempts

### 2. Alternative Medications
Several other GLP-1 medications may be available at different price points:
- Semaglutide (Ozempic/Wegovy)
- Liraglutide (Saxenda)
- Dulaglutide (Trulicity)

### 3. Treatment Optimization
Working with healthcare providers to optimize your current treatment can help maximize benefits while managing costs.

## The Importance of Medical Supervision

Whatever path you choose, maintaining medical supervision throughout your GLP-1 journey is crucial. Never make medication changes without consulting your healthcare provider.

## Looking Ahead

The GLP-1 landscape is rapidly evolving. New medications, pricing structures, and access programs are continually being developed. Staying informed and working with qualified healthcare providers will help you navigate these changes successfully.

Remember: Your health journey is unique, and temporary setbacks don't define your long-term success.`,
      author: "Dr. Sarah Williams",
      date: "March 15, 2024",
      readTime: "5 min read",
      id: 1
    },
    {
      title: "Why Tracking Your GLP-1 Matters, Even When Prices Soar",
      subtitle: "When uncertainty strikes, data becomes your safety net",
      description: "The recent rise in Mounjaro prices has caused some people to rethink their dosing schedules or pause treatment altogether.",
      content: "Detailed content here...",
      author: "Emma Thompson, RN",
      date: "March 12, 2024",
      readTime: "7 min read",
      id: 2
    },
    {
      title: "Real Stories: Finding Success Beyond the Scale",
      subtitle: "When the numbers don't tell the whole story",
      description: "True transformation goes far beyond what the scale shows. Here are inspiring stories from our community about the victories that matter most.",
      content: "Detailed content here...",
      author: "Dr. Michael Roberts",
      date: "March 10, 2024",
      readTime: "8 min read",
      id: 3
    },
    {
      title: "What Are GLP-1 Medications?",
      subtitle: "",
      description: "If you've just been prescribed a GLP-1 medication, you might be hearing a lot of new terms, seeing before-and-after stories online, and wondering... what exactly is this?",
      content: "Detailed content here...",
      author: "Dr. Jennifer Lee, Endocrinologist",
      date: "March 8, 2024",
      readTime: "10 min read",
      id: 4
    },
    {
      title: "How Does GLP-1 Medication Work?",
      subtitle: "",
      description: "In our last article, we talked about what GLP-1 medications are a lab-made version of a natural hormone your body already produces.",
      content: "Detailed content here...",
      author: "Dr. Robert Chen, Clinical Pharmacologist",
      date: "March 5, 2024",
      readTime: "12 min read",
      id: 5
    },
    {
      title: "Common Myths About GLP-1 Weight Loss Drugs & The Truths You Actually Need",
      subtitle: "",
      description: "So, you've done your homework, talked to your doctor, and maybe even decided to start (or seriously consider) a GLP-1 medication.",
      content: "Detailed content here...",
      author: "Dr. Amanda Foster, Obesity Medicine Specialist",
      date: "March 1, 2024",
      readTime: "15 min read",
      id: 6
    }
  ];

  const handleArticleClick = (article: any) => {
    setSelectedArticle(article);
    setDialogOpen(true);
  };

  return (
    <section id="library" className="py-3 lg:py-5" style={{background: '#EFEEE7'}}>
      <div className="container mx-auto px-3 max-w-7xl">
        <div className="rounded-2xl px-[16px] py-6 lg:px-[24px] lg:py-8" style={{background: '#EFEEE7'}}>
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-[30px] font-normal text-[#001F3F] font-sans">
              Lotessa Library
            </h3>
            
            <h2 className="text-[52px] font-bold text-[#001F3F] leading-tight font-sans">
              Discover Expert Content, Anytime
            </h2>
            
            <p className="text-[28px] text-foreground font-bold font-sans mx-auto text-center">
              Bite-sized insights, real-world tips, and trustworthy health information
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map(article => (
              <div key={article.id} onClick={() => handleArticleClick(article)} className="article-card group cursor-pointer h-full aspect-[1/1.289] px-6 pt-6 pb-2 flex flex-col">
                <div className="flex justify-end mb-4">
                  <div className="w-10 h-10 rounded-full border-2 border-[#001f3f] flex items-center justify-center group-hover:border-primary transition-colors">
                    <ArrowRight className="text-[#001f3f] group-hover:text-primary transition-colors" size={20} />
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col overflow-hidden">
                  <h3 className="font-bold text-[18px] text-[#001F3F] leading-tight font-sans line-clamp-3 overflow-hidden mb-2">
                    {article.title}
                  </h3>
                  
                  {article.subtitle && (
                    <h4 className="font-bold text-[14px] text-[#001F3F] leading-tight font-sans line-clamp-2 overflow-hidden mb-3">
                      {article.subtitle}
                    </h4>
                  )}
                  
                  <p className="text-[#001F3F] text-[16px] leading-relaxed font-sans font-normal overflow-hidden flex-1">
                    <span className="line-clamp-6">
                      {article.description}
                    </span>
                  </p>
                </div>
              </div>
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