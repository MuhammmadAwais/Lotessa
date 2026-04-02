import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ArticleDialog from "@/components/ArticleDialog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useArticlesContent } from "@/features/landing/hooks/useArticlesContent";

const LibrarySection = () => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const fallbackArticles = [
    {
      title: "The Future of GLP-1 Access in the UK",
      subtitle: "A period of change, but not the end of your journey",
      description: "The recent Mounjaro price hike has understandably caused worry for many UK users, especially those paying privately. While NHS patients will see no immediate change, the private market is experiencing significant shifts. This is part of a wider realignment in global drug pricing, with manufacturers bringing UK costs in line with other countries.",
      content: `The recent Mounjaro price hike has understandably caused worry for many UK users, especially those paying privately. While NHS patients will see no immediate change, the private market is experiencing significant shifts. This is part of a wider realignment in global drug pricing, with manufacturers bringing UK costs in line with other countries.

## What this means for you

Firstly, the good news: the UK remains a priority market for GLP-1 treatments. NHS access is secure for those eligible, and several alternative medications, including Wegovy and Ozempic, remain available both privately and on prescription. New GLP-1 and dual-action therapies are also in late-stage trials and may enter the UK market in the next 1–3 years, adding competition and potentially stabilising prices.

## Staying ahead through information and planning

Times of change can be unsettling, but they're also a chance to take control. Staying informed about medication availability, alternative options, and policy updates means you can adapt quickly. Informed patients are better positioned to work with their GP or pharmacist to find the right treatment plan — and continuity is key to lasting results.

## Lotessa: your companion in a shifting landscape

Lotessa keeps your health data organised, your doses tracked, and your progress visible. So, whether you stay on your current medication, switch, or pause, you'll have the insights to make confident decisions with your healthcare provider.

Your health journey isn't ending, it's evolving. Let Lotessa help you navigate it with clarity and confidence.`,
      author: "Dr. Sarah Williams",
      date: "March 15, 2024",
      readTime: "5 min read",
      id: 1
    },
    {
      title: "Why Tracking Your GLP-1 Matters, Even When Prices Soar",
      subtitle: "When uncertainty strikes, data becomes your safety net",
      description: "The recent rise in Mounjaro prices has caused some people to rethink their dosing schedules or pause treatment altogether. In these moments, tracking your progress, symptoms, and side effects becomes even more critical. Without it, you risk losing valuable insights into what works for your body.",
      content: `The recent rise in Mounjaro prices has caused some people to rethink their dosing schedules or pause treatment altogether. In these moments, tracking your progress, symptoms, and side effects becomes even more critical. Without it, you risk losing valuable insights into what works for your body.

## Evidence-backed benefits of tracking

Studies from NICE and the NHS show that medication tracking can improve adherence by up to 40%. By logging your injections, symptoms, and lifestyle habits, you can spot patterns such as side effects linked to dose changes that may influence your care plan. This helps you avoid unnecessary dose increases or waste, saving both money and progress.

## Empowering your conversations with your clinician

Tracking provides a clear record you can share with your GP or pharmacist. If you need to switch medications or adjust dosing, having this history means decisions are based on evidence, not guesswork.

## Lotessa turns tracking into confidence

With easy dose logging, side-effect monitoring, and progress charts, Lotessa makes tracking effortless and even motivating. Your data stays with you, so you stay in control, no matter what changes in the market.

When prices go up, your commitment doesn't have to go down. Lotessa is here to keep you steady, informed, and on track.`,
      author: "Emma Thompson, RN",
      date: "March 12, 2024",
      readTime: "4 min read",
      id: 2
    },
    {
      title: "Tracking for Sustained Long-Term GLP-1 Goals",
      subtitle: "GLP-1 is just the beginning, habits carry you the distance",
      description: "GLP-1 medications like Mounjaro can be a powerful kick-start to weight loss, but long-term success relies on more than injections. Lifestyle changes such as nutrition, activity, sleep will cement your progress. That's where consistent tracking becomes your long-term ally.",
      content: `GLP-1 medications like Mounjaro can be a powerful kick-start to weight loss, but long-term success relies on more than injections. Lifestyle changes such as nutrition, activity, sleep will cement your progress. That's where consistent tracking becomes your long-term ally.

## Why consistency wins

Tracking isn't only for when you're actively taking the medication. It's for building and maintaining habits that sustain your results. Research shows that people who track their weight, food, and activity are more likely to keep the weight off years after treatment ends. It's about reinforcing behaviours, not just monitoring numbers.

## Beyond the scales

The best progress stories aren't only told in kilograms lost. Non-scale victories like better sleep, improved fitness, or increased energy are often the strongest motivators. By logging these alongside your weight and symptoms, you get a fuller picture of your health journey.

## Lotessa keeps you moving forward

Lotessa helps you track everything in one place: weight, body measurements, symptoms, activity, and those priceless non-scale wins. Whether you're in the middle of treatment, transitioning off, or months beyond your last dose, you can see how far you've come and stay motivated to go further.

Medications can start the change whilst your habits and tracking will keep it alive. Lotessa is your partner in making it last.`,
      author: "Dr. Michael Roberts",
      date: "March 10, 2024",
      readTime: "4 min read",
      id: 3
    },
    {
      title: "What Are GLP-1 Medications?",
      subtitle: "If you've just been prescribed a GLP-1 medication, you might be hearing a lot of new terms",
      description: "GLP-1 stands for glucagon-like peptide-1, a natural hormone your body already makes. Its 'day job' is to help regulate blood sugar and appetite. Think of GLP-1 as part of your body's metabolic traffic control system, directing signals between your gut, pancreas, and brain to keep things running smoothly after you eat.",
      content: `If you've just been prescribed a GLP-1 medication, you might be hearing a lot of new terms, seeing before-and-after stories online, and wondering… what exactly is this, and how does it fit into my journey? Let's break it down in plain language.

## First things first: GLP-1 in your body

GLP-1 stands for glucagon-like peptide-1, a natural hormone your body already makes.
Its "day job" is to help regulate blood sugar and appetite. Think of GLP-1 as part of your body's metabolic traffic control system, directing signals between your gut, pancreas, and brain to keep things running smoothly after you eat.

## Where the medication comes in

GLP-1 medications are designed to mimic that natural hormone, but in a way that's more powerful and longer-lasting.
They were first developed to help people with type 2 diabetes keep blood sugar levels in check, and many people also noticed another effect: steady, sustainable weight loss when used alongside healthy habits.

## Common GLP-1 medications

Some names you might hear include:
- Semaglutide (brands like Ozempic®, Wegovy®)
- Tirzepatide (brand like Mounjaro®)
- Liraglutide (brand like Saxenda®)

Each works in a similar way, but your doctor will choose the one and the dosing schedule that's best for you.

## More than "just a weight-loss drug"

GLP-1 medications aren't a quick-fix or one-size-fits-all solution. They work best as part of a complete plan medication plus changes in nutrition, movement, sleep, and overall lifestyle.
Think of the medication as a co-pilot: it can help you navigate the route, but you're still steering the ship.

## What's next in this series

This is just the starting point. In upcoming articles, we'll explore:
- How GLP-1 medications work inside your body
- How to decide if they're the right fit for you
- Clearing up some of the most common myths you may have heard

## The bottom line

GLP-1 medications are a modern medical tool with the potential to improve health and, for many, support weight loss. Used under medical supervision and combined with lifestyle changes, they can be a powerful ally in your long-term health journey.`,
      author: "Dr. Jennifer Lee, Endocrinologist",
      date: "March 8, 2024",
      readTime: "6 min read",
      id: 4
    },
    {
      title: "How Does GLP-1 Medication Work?",
      subtitle: "What actually happens inside your body when you take them",
      description: "Think of GLP-1 as your body's group text. When you eat, your gut sends out a 'group message' to your pancreas, stomach, and brain. Your natural GLP-1 hormone is the one sending those messages. GLP-1 medications give that same message more staying power.",
      content: `In our last article, we talked about what GLP-1 medications are a lab-made version of a natural hormone your body already produces. Now, let's look at what actually happens inside your body when you take them.

We'll keep it clear and simple, so you can picture it without feeling like you're reading a science manual.

## Think of GLP-1 as your body's group text

When you eat, your gut sends out a "group message" to:
- Pancreas: "Send out some insulin to handle the sugar from this meal."
- Stomach: "Slow down emptying so we can process food steadily."
- Brain: "We're full now, no need to keep eating."

Your natural GLP-1 hormone is the one sending those messages.

## What changes with the medication

Here's the thing, your natural GLP-1 works fast, but it doesn't hang around long. The signal fades within minutes. When you take a GLP-1 medication, you're basically giving that same message more staying power.

So instead of a quick "blip" of communication, the signal lasts long enough to:
- Keep blood sugar from spiking and crashing.
- Make fullness last well past the last bite.
- Quiet those "time for a snack" thoughts that pop up too soon.

## The 3 key things GLP-1 meds do

While the details can vary between different GLP-1 medications, they usually work in these ways:

### Balance blood sugar
They help your pancreas release insulin when it's needed and reduce another hormone (glucagon) that would otherwise raise blood sugar.

### Slow digestion
Your stomach empties more slowly, helping you feel satisfied and avoiding big spikes (and crashes) in blood sugar.

### Reduce appetite
They send signals to the brain's hunger control areas, so cravings feel less urgent and portions naturally get smaller.

## Why it's not the same as dieting

A lot of diets rely on willpower and that's tough when your body's screaming for food. GLP-1 medication works differently. Instead of pushing against hunger, it makes that hunger less intense to begin with.

It's a bit like turning down background noise so you can focus on the main conversation in this case, your actual hunger cues.

## A gradual process

GLP-1 medications aren't meant to cause overnight changes. Your provider will usually start you on a low dose and slowly increase it over several weeks. This helps your body adapt and can reduce side effects along the way.

## Bottom line

GLP-1 medications don't replace your own efforts, they make those efforts feel less like an uphill battle. By strengthening your body's natural "after-meal" signals, they help you manage blood sugar, stay full longer, and cut back on unneeded snacks.

In the next part of our series, we'll walk through the questions to ask your doctor if you're wondering whether GLP-1 medication is a good fit for you.`,
      author: "Dr. Robert Chen, Clinical Pharmacologist",
      date: "March 5, 2024",
      readTime: "7 min read",
      id: 5
    },
    {
      title: "Common Myths About GLP-1 Weight Loss Drugs & The Truths You Actually Need",
      subtitle: "Sorting through the most common myths and the truths you actually need to hear",
      description: "So, you've done your homework, talked to your doctor, and maybe even decided to start a GLP-1 medication. Then the opinions start arriving. A colleague tells you it's 'basically cheating.' A family member warns you that you'll 'never be able to enjoy your favourite foods again.' Let's sort through the myths and get to the truth.",
      content: `So, you've done your homework, talked to your doctor, and maybe even decided to start (or seriously consider) a GLP-1 medication.

Then the opinions start arriving.
- A colleague tells you it's "basically cheating."
- A family member warns you that you'll "never be able to enjoy your favourite foods again."
- And somewhere online, someone claims they "lost 20 pounds in a month without changing a thing."

It can be hard to know what's real and what's just a story passed along without facts. Let's sort through some of the most common myths — and the truths you actually need to hear.

## "You'll lose all the weight instantly."

GLP-1s don't work like a switch you flip overnight. They help regulate appetite and blood sugar, making it easier to make consistent choices — but results happen gradually over months. Slow, steady progress is not only more realistic, it's healthier for long-term success.

## "Once you start, you're on it for life."

Not always. Some people continue long-term to help maintain results, while others use GLP-1s for a set period and then stop under medical guidance. The key is to have a plan for transitioning so you keep the progress you've made.

## "They're only for people with diabetes."

While these medications were first developed for type 2 diabetes, some are approved in specific doses for weight management. Whether they're right for you depends on your medical history, not just a diagnosis. That's why an individualised assessment with your doctor matters most.

## "Everyone has severe side effects."

Some people experience mild nausea, constipation, or digestive changes, especially in the first few weeks. These often lessen over time, and starting with a low dose can make a big difference. Your healthcare provider can also suggest simple ways to reduce discomfort.

## "If it works for someone else, it'll work the same for me."

Everybody responds differently. Factors like your metabolism, health conditions, daily habits, and even how you eat while on the medication all affect results. Two people on the same treatment may have completely different experiences and that's normal.

## The bottom line

GLP-1 medications are valuable tools, backed by science, but they're not a one-step solution. The best results happen when they're combined with healthy lifestyle habits and ongoing medical support. Ignore the noise, the real path forward is the one that works for your body, at your pace.`,
      author: "Dr. Amanda Foster, Obesity Medicine Specialist",
      date: "March 1, 2024",
      readTime: "5 min read",
      id: 6
    }
  ];

  const { articles, loading } = useArticlesContent(fallbackArticles);

  const trackArticleClick = async (article: any) => {
    try {
      // Generate a simple browser ID (you can enhance this later)
      const browserId = localStorage.getItem('browserId') || 
        'browser_' + Math.random().toString(36).substr(2, 9);
      
      if (!localStorage.getItem('browserId')) {
        localStorage.setItem('browserId', browserId);
      }

      // Generate a session ID
      const sessionId = localStorage.getItem('sessionId') || 
        'session_' + Math.random().toString(36).substr(2, 9);
      
      if (!localStorage.getItem('sessionId')) {
        localStorage.setItem('sessionId', sessionId);
      }

      // Track the article click
      const { error } = await supabase
        .from('article_clicks')
        .insert({
          article_id: article.id,
          article_title: article.title,
          browser_id: browserId,
          session_id: sessionId,
          page_url: window.location.href,
          user_agent: navigator.userAgent,
          ip_address: null // We'll get this from the server later
        });

      if (error) {
        console.error('Error tracking article click:', error);
        // Don't show error to user, just log it
      } else {
        console.log('Article click tracked successfully:', article.title);
      }
    } catch (error) {
      console.error('Error tracking article click:', error);
      // Don't show error to user, just log it
    }
  };

  const handleArticleClick = (article: any) => {
    // Track the click first
    trackArticleClick(article);
    
    // Then open the dialog
    setSelectedArticle(article);
    setDialogOpen(true);
  };

  return (
    <section id="library" className="py-3 lg:py-5" style={{background: '#EFEEE7'}}>
      <div className="container mx-auto px-3 max-w-7xl">
        <div className="rounded-2xl px-[16px] py-6 lg:px-[24px] lg:py-8" style={{background: '#EFEEE7'}}>
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-display-md text-foreground font-sans">
              Lotessa Library
            </h3>
            
            <h2 className="text-display-lg text-foreground font-sans leading-tight">
              Discover Expert Content, Anytime
            </h2>
            
            <p className="text-heading-md text-foreground font-sans mx-auto text-center">
              Bite-sized insights, real-world tips, and trustworthy health information
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {articles.map(article => (
              <div 
                key={article.id} 
                onClick={() => handleArticleClick(article)} 
                className="article-card group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-[350px] sm:h-[400px] px-4 sm:px-6 pt-6 pb-6 flex flex-col border border-gray-100"
              >
                <div className="flex justify-end mb-4">
                  <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <ArrowRight className="text-foreground group-hover:text-white transition-colors" size={20} />
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col overflow-hidden">
                  <h3 className="font-bold text-body-md sm:text-body-lg text-foreground leading-tight font-sans line-clamp-3 overflow-hidden mb-3 min-h-[3.5rem] sm:min-h-[4.5rem]">
                    {article.title}
                  </h3>
                  
                  {article.subtitle ? (
                    <h4 className="font-bold text-sm sm:text-body-md text-foreground leading-tight font-sans line-clamp-2 overflow-hidden mb-3 min-h-[2rem] sm:min-h-[2.5rem]">
                      {article.subtitle}
                    </h4>
                  ) : (
                    <div className="mb-3 min-h-[2rem] sm:min-h-[2.5rem]"></div>
                  )}
                  
                  <p className="text-foreground text-body-md leading-relaxed font-sans font-normal overflow-hidden flex-1">
                    <span className="line-clamp-5">
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