import { ArrowRight } from "lucide-react";
const LibrarySection = () => {
  const articles = [{
    title: "The Future of GLP-1 Access in the UK",
    subtitle: "A period of change, but not the end of your journey",
    description: "The recent Mounjaro price hike has understandably caused worry for many UK users, especially those paying privately. While NHS patients will see no immediate change, the private market is experiencing significant shifts. This is part of a wider realignment in global drug pricing, with manufacturers bringing UK costs in line with other countries.",
    id: 1
  }, {
    title: "Why Tracking Your GLP-1 Matters, Even When Prices Soar",
    subtitle: "When uncertainty strikes, data becomes your safety net",
    description: "The recent rise in Mounjaro prices has caused some people to rethink their dosing schedules or pause treatment altogether. In these moments, tracking your progress, symptoms, and side effects becomes even more critical. Without it, you risk losing valuable insights into what works for your body.",
    id: 2
  }, {
    title: "Tracking for Sustained Long-Term GLP-1 Goals",
    subtitle: "GLP-1 is just the beginning, habits carry you the distance",
    description: "GLP-1 medications like Mounjaro can be a powerful kick-start to weight loss, but long-term success relies on more than injections. Lifestyle changes such as nutrition, activity, sleep will cement your progress. That's where consistent tracking becomes your long-term ally.",
    id: 3
  }, {
    title: "What Are GLP-1 Medications?",
    subtitle: "",
    description: "If you've just been prescribed a GLP-1 medication, you might be hearing a lot of new terms, seeing before-and-after stories online, and wondering... what exactly is this, and how does it fit into my journey? Let's break it down in plain language.",
    id: 4
  }, {
    title: "How Does GLP-1 Medication Work?",
    subtitle: "",
    description: "In our last article, we talked about what GLP-1 medications are a lab-made version of a natural hormone your body already produces. Now, let's look at what actually happens inside your body when you take them. We'll keep it clear and simple, so you can picture it without feeling like you're reading a science manual.",
    id: 5
  }, {
    title: "Common Myths About GLP-1 Weight Loss Drugs & The Truths You Actually Need",
    subtitle: "",
    description: "So, you've done your homework, talked to your doctor, and maybe even decided to start (or seriously consider) a GLP-1 medication. Then the opinions start arriving. A colleague tells you it's \"basically cheating.\" A family member warns you that you'll \"never be able to enjoy your favourite foods again.\" And somewhere online, someone claims they \"lost 20 pounds in a month without changing a thing.\" It can be hard to know what's real and what's just a story passed along without facts. Let's sort through some of the most common myths — and the truths you actually need to hear.",
    id: 6
  }];
  return <section className="py-16 lg:py-24 gradient-bg">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="rounded-2xl p-8 lg:p-12 gradient-bg">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-[30px] font-normal text-[#001F3F] font-sans">
            Lotessa Library
          </h3>
          
          <h2 className="text-[52px] font-bold text-[#001F3F] leading-tight font-sans">
            Discover Expert Content, Anytime
          </h2>
          
          <p className="text-[28px] text-foreground font-bold font-sans mx-auto whitespace-nowrap text-center">
            Bite-sized insights, real-world tips, and trustworthy health information
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map(article => <div key={article.id} className="article-card group cursor-pointer h-full aspect-[1/1.289] px-6 pt-6 pb-2 flex flex-col">
              <div className="flex justify-end mb-4">
                <div className="w-10 h-10 rounded-full border-2 border-muted-foreground flex items-center justify-center group-hover:border-primary transition-colors">
                  <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                </div>
              </div>
              
              <div className="flex-1 flex flex-col overflow-hidden">
                <h3 className="font-bold text-[18px] text-[#001F3F] leading-tight font-sans line-clamp-3 overflow-hidden mb-2">
                  {article.title}
                </h3>
                
                {article.subtitle && <h4 className="font-bold text-[16px] text-[#001F3F] leading-tight font-sans line-clamp-2 overflow-hidden mb-3">
                    {article.subtitle}
                  </h4>}
                
                <p className="text-[#001F3F] text-[16px] leading-relaxed font-sans font-normal overflow-hidden flex-1">
                  <span className="line-clamp-6">
                    {article.description.length > 150 
                      ? `${article.description.substring(0, 150)}... see more`
                      : article.description
                    }
                  </span>
                </p>
              </div>
            </div>)}
        </div>
        </div>
      </div>
    </section>;
};
export default LibrarySection;