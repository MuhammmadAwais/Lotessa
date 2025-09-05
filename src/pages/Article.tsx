import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import LotessaHeader from "@/components/LotessaHeader";
import LotessaFooter from "@/components/LotessaFooter";

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
    content: `The recent rise in Mounjaro prices has caused some people to rethink their dosing schedules or pause treatment altogether. During times of uncertainty like this, one thing becomes more important than ever: tracking your progress.

## The Power of Data During Uncertainty

When external factors threaten to disrupt your treatment plan, having detailed records of your journey becomes invaluable. Here's why:

### 1. Evidence for Healthcare Providers
Comprehensive tracking data helps your doctor:
- Make informed decisions about treatment modifications
- Understand what's working for your unique situation
- Advocate for you with insurance providers or NHS services

### 2. Personal Motivation
Seeing your progress documented can provide motivation during challenging times. Your data tells the story of your journey, including:
- Weight loss milestones
- Health improvements
- Side effect patterns
- Quality of life changes

## What to Track

### Essential Metrics
- Weight (weekly)
- Blood glucose levels (if diabetic)
- Blood pressure
- Energy levels
- Sleep quality
- Mood changes

### Side Effects and Symptoms
- Nausea levels and timing
- Digestive issues
- Injection site reactions
- Any concerning symptoms

### Lifestyle Factors
- Diet and nutrition
- Exercise routines
- Stress levels
- Medication timing

## Making Data Work for You

### Weekly Reviews
Set aside time each week to review your data. Look for:
- Patterns in your responses
- Correlations between lifestyle and outcomes
- Areas for improvement

### Monthly Summaries
Create monthly reports to share with your healthcare provider. Include:
- Progress photos
- Key metrics trends
- Notable events or changes
- Questions or concerns

## During Treatment Changes

If you need to modify your treatment due to cost or availability:

1. **Document your current status** comprehensively
2. **Work with your provider** to create a transition plan
3. **Continue tracking** throughout any changes
4. **Compare outcomes** to optimize your new approach

## Technology as Your Ally

Modern tracking tools can simplify this process:
- Mobile apps for daily logging
- Smart scales for automatic weight tracking
- Glucose monitors with data sharing
- Photo documentation for visual progress

## The Long-Term View

Remember that GLP-1 treatment is often a long-term journey. Short-term disruptions don't negate the progress you've made. Your tracking data serves as proof of what's possible and guides you toward sustainable solutions.

## Building Your Support Network

Share your data story with:
- Healthcare providers
- Support groups
- Trusted family and friends
- Online communities

Your documented journey can inspire others and help you find resources and solutions you might not have discovered alone.

## Conclusion

While pricing changes and access challenges are frustrating, they don't have to derail your health journey. By maintaining detailed tracking of your progress, you're building a foundation for long-term success, regardless of external circumstances.

Your data is your power – use it wisely.`,
    author: "Emma Thompson, RN",
    date: "March 12, 2024",
    readTime: "7 min read",
    id: 2
  },
  {
    title: "Real Stories: Finding Success Beyond the Scale",
    subtitle: "When the numbers don't tell the whole story",
    description: "True transformation goes far beyond what the scale shows. Here are inspiring stories from our community about the victories that matter most.",
    content: `True transformation goes far beyond what the scale shows. While weight loss often gets the spotlight in GLP-1 discussions, the real victories happening in our community extend far beyond the numbers on a scale.

## Sarah's Story: Energy and Confidence

"I started my GLP-1 journey hoping to lose weight, but what I gained was so much more valuable," shares Sarah, a 42-year-old teacher from Manchester.

"Yes, I lost 28 pounds, but the real transformation was in my energy levels. I used to come home from work completely drained, barely able to help my kids with homework. Now I'm coaching my daughter's football team and planning weekend hiking trips."

### The Hidden Victories
- Increased stamina throughout the day
- Better sleep quality
- Improved self-confidence
- More active lifestyle

## Marcus's Journey: Health Beyond Weight

Marcus, a 55-year-old accountant, found that his GLP-1 treatment transformed his relationship with food and his overall health markers.

"The scale showed a 35-pound loss, but my doctor was more excited about my other numbers," Marcus explains. "My HbA1c dropped from 8.2% to 6.1%. My blood pressure normalized. I stopped needing my sleep apnea machine."

### Health Improvements
- Better diabetes management
- Normalized blood pressure
- Reduced sleep apnea symptoms
- Lower cholesterol levels

## Lisa's Transformation: Mental Health Matters

For Lisa, a 38-year-old marketing professional, the mental health benefits were unexpected but life-changing.

"I started GLP-1 for weight management, but it completely changed my relationship with food," Lisa shares. "The constant food noise in my head just... stopped. I could finally think about other things."

### Psychological Benefits
- Reduced food cravings and obsessions
- Improved mood stability
- Better emotional regulation
- Increased mental clarity

## David's Experience: Social Life Renaissance

David, a 47-year-old engineer, found that his treatment opened doors to social experiences he'd been avoiding.

"I realized I'd been declining invitations for years because I was uncomfortable with my appearance," David reflects. "Now I'm saying yes to things again. I joined a hiking group, started dating, and even signed up for a cooking class."

### Social Improvements
- Increased social confidence
- More active social life
- New hobbies and interests
- Better relationships

## The Ripple Effect

What's remarkable about these stories is how one positive change creates ripples throughout people's lives:

### Family Dynamics
- More active participation in family activities
- Modeling healthy behaviors for children
- Improved energy for parenting
- Better family meal planning

### Professional Life
- Increased confidence at work
- More energy for career advancement
- Better focus and productivity
- Improved professional relationships

### Personal Relationships
- Enhanced intimacy and connection
- More social engagement
- New friendships through activities
- Improved self-esteem in relationships

## Beyond the Physical

While weight loss is often the initial goal, our community members consistently report that the non-scale victories become the most meaningful:

### Quality of Life Improvements
- Better mobility and flexibility
- Reduced joint pain
- Improved breathing
- Enhanced physical capabilities

### Emotional Well-being
- Reduced anxiety around food
- Improved body image
- Greater self-compassion
- Enhanced mood stability

## Measuring True Success

These stories remind us that success in GLP-1 treatment should be measured across multiple dimensions:

1. **Physical Health**: Beyond weight - blood sugar, blood pressure, energy
2. **Mental Health**: Mood, anxiety, relationship with food
3. **Social Health**: Relationships, activities, confidence
4. **Functional Health**: Daily activities, sleep, mobility

## Your Story Matters

Every journey is unique, and every victory – no matter how small it might seem – deserves celebration. Whether it's climbing a flight of stairs without getting winded, sleeping through the night, or simply feeling more confident in your own skin, these moments matter.

## Sharing Your Journey

Consider keeping track of your non-scale victories:
- Energy level improvements
- Mood changes
- New activities you can enjoy
- Health marker improvements
- Confidence boosts

## The Bigger Picture

These stories illustrate that GLP-1 treatment, when approached holistically, can catalyze profound life changes that extend far beyond weight loss. The medication provides a foundation, but the real transformation happens when people use that foundation to build healthier, more fulfilling lives.

Your journey is valid, your victories matter, and your story has the power to inspire others who are just beginning their own transformation.

What will your beyond-the-scale victory be?`,
    author: "Dr. Michael Roberts",
    date: "March 10, 2024",
    readTime: "8 min read",
    id: 3
  },
  {
    title: "What Are GLP-1 Medications?",
    subtitle: "",
    description: "If you've just been prescribed a GLP-1 medication, you might be hearing a lot of new terms, seeing before-and-after stories online, and wondering... what exactly is this?",
    content: `If you've just been prescribed a GLP-1 medication, you might be hearing a lot of new terms, seeing before-and-after stories online, and wondering... what exactly is this?

Let's break down GLP-1 medications in simple, understandable terms.

## What Does GLP-1 Stand For?

GLP-1 stands for "Glucagon-Like Peptide-1." It's a hormone your body naturally produces in your intestines when you eat. Think of it as your body's natural "I'm satisfied" signal.

## How Your Body Naturally Uses GLP-1

When you eat, your intestines release GLP-1, which:
- Tells your pancreas to release insulin (helping lower blood sugar)
- Slows down how quickly food leaves your stomach
- Signals to your brain that you're full and satisfied
- Reduces your appetite for several hours

## What Are GLP-1 Medications?

GLP-1 medications are synthetic versions of this natural hormone, but they're designed to last much longer in your body than the hormone you naturally produce.

### Common GLP-1 Medications Include:
- **Semaglutide**: Brand names Ozempic, Wegovy
- **Tirzepatide**: Brand name Mounjaro, Zepbound
- **Liraglutide**: Brand names Victoza, Saxenda
- **Dulaglutide**: Brand name Trulicity

## How Are They Different from Natural GLP-1?

Your natural GLP-1 breaks down quickly in your body – within minutes. The medications are modified to:
- Last much longer (days or weeks instead of minutes)
- Be more resistant to breakdown
- Provide consistent effects
- Require less frequent dosing

## What Conditions Do They Treat?

GLP-1 medications were originally developed for:

### Type 2 Diabetes
- Help control blood sugar levels
- Improve insulin sensitivity
- Reduce HbA1c (long-term blood sugar marker)

### Weight Management
- Approved for chronic weight management
- Help reduce appetite and food cravings
- Support sustainable weight loss

### Cardiovascular Health
- Some have proven cardiovascular benefits
- May reduce risk of heart attack and stroke
- Help with blood pressure management

## How Are They Taken?

Most GLP-1 medications are:
- **Injectable**: Usually given as a small injection under the skin
- **Weekly or daily**: Depending on the specific medication
- **Self-administered**: You can do this at home after proper training
- **Pen devices**: Most come in easy-to-use pen injectors

### Recently Available:
- **Oral versions**: Some semaglutide is now available in pill form

## What to Expect When Starting

### First Few Weeks:
- Reduced appetite
- Feeling full sooner when eating
- Possible side effects (usually mild and temporary)
- Gradual blood sugar improvements

### Over Time:
- Continued appetite regulation
- Steady weight loss (if prescribed for weight management)
- Improved blood sugar control
- Better energy levels

## Common Side Effects

Most people tolerate GLP-1 medications well, but some may experience:
- Nausea (usually temporary)
- Digestive changes
- Decreased appetite
- Fatigue initially

These typically improve as your body adjusts to the medication.

## Who Might Benefit?

GLP-1 medications may be prescribed for people with:
- Type 2 diabetes
- Obesity or significant overweight
- Metabolic syndrome
- Cardiovascular risk factors
- Difficulty with appetite control

## Important Considerations

### Medical Supervision Required
- These are prescription medications
- Require proper medical evaluation
- Need ongoing monitoring
- Should be part of comprehensive health plan

### Lifestyle Integration
- Work best with healthy eating patterns
- Enhanced by regular physical activity
- Require consistent medication adherence
- Benefit from ongoing support

## The Science Behind the Success

GLP-1 medications work by:
1. **Slowing gastric emptying**: Food stays in your stomach longer, helping you feel full
2. **Reducing appetite signals**: Less hunger between meals
3. **Improving insulin function**: Better blood sugar control
4. **Affecting brain pathways**: Reduced food cravings and thoughts about food

## Looking Forward

GLP-1 medications represent a significant advancement in treating both diabetes and obesity. They address underlying biological mechanisms that make weight management and blood sugar control challenging.

### Research Continues
Scientists are exploring GLP-1 medications for:
- Addiction treatment
- Alzheimer's disease
- Liver disease
- Other metabolic conditions

## Key Takeaways

- GLP-1 medications mimic a natural hormone your body produces
- They help with both blood sugar control and weight management
- They're most effective as part of a comprehensive health approach
- They require medical supervision and ongoing support
- They represent a new understanding of how hormones affect appetite and metabolism

## Next Steps

If you're considering or have been prescribed a GLP-1 medication:
1. Discuss thoroughly with your healthcare provider
2. Understand the specific medication prescribed for you
3. Learn proper injection techniques
4. Plan for lifestyle integration
5. Set realistic expectations
6. Establish ongoing support systems

Remember: GLP-1 medications are tools that work best when combined with healthy lifestyle choices and proper medical guidance. They're not magic bullets, but they can be powerful allies in your health journey.`,
    author: "Dr. Jennifer Lee, Endocrinologist",
    date: "March 8, 2024",
    readTime: "10 min read",
    id: 4
  },
  {
    title: "How Does GLP-1 Medication Work?",
    subtitle: "",
    description: "In our last article, we talked about what GLP-1 medications are a lab-made version of a natural hormone your body already produces.",
    content: `In our last article, we talked about what GLP-1 medications are: a lab-made version of a natural hormone your body already produces. Now let's dive deeper into exactly how these medications work in your body to create the changes you experience.

## The Journey Through Your Body

When you inject a GLP-1 medication, here's the fascinating journey it takes:

### 1. Absorption and Distribution
- The medication is absorbed from the injection site into your bloodstream
- It circulates throughout your body, reaching various organs
- The extended-release formulation provides steady levels for days or weeks

### 2. Binding to Receptors
GLP-1 medications bind to specific receptors located in:
- **Pancreas**: For blood sugar control
- **Stomach**: For digestion regulation
- **Brain**: For appetite and satiety signals
- **Heart**: For cardiovascular benefits

## The Pancreas: Your Blood Sugar Command Center

### Insulin Production
When GLP-1 binds to pancreatic receptors:
- Beta cells receive the signal to produce insulin
- **But only when blood sugar is elevated**
- This reduces risk of dangerous low blood sugar
- Insulin helps cells absorb glucose from the bloodstream

### Glucagon Suppression
- Alpha cells reduce glucagon production
- Glucagon normally tells the liver to release stored sugar
- Less glucagon means less sugar released into blood
- Results in more stable blood sugar levels

## The Stomach: Slowing Things Down

### Gastric Emptying
GLP-1 medications significantly slow how quickly food leaves your stomach:
- Food stays in your stomach 2-3 times longer than normal
- This creates sustained feelings of fullness
- Nutrients are absorbed more gradually
- Blood sugar spikes are reduced

### Digestive Benefits
- More time for proper digestion
- Better nutrient absorption
- Reduced post-meal blood sugar spikes
- Enhanced feeling of satisfaction after eating

## The Brain: Changing Your Relationship with Food

### Hypothalamus Regulation
The hypothalamus is your brain's appetite control center. GLP-1 affects:
- **Satiety signals**: Enhanced "I'm full" messaging
- **Hunger signals**: Reduced "I need food" messaging
- **Food reward pathways**: Less pleasure-seeking from food
- **Stress eating patterns**: Improved emotional eating control

### Dopamine Pathways
GLP-1 medications influence brain chemistry:
- Reduced dopamine response to food
- Less food cravings and obsessive thoughts
- Decreased "food noise" in your mind
- Better impulse control around eating

## The Cardiovascular System: Heart Health Benefits

### Direct Heart Effects
- Improved heart muscle function
- Better blood flow
- Reduced inflammation in blood vessels
- Lower blood pressure in many people

### Indirect Benefits
- Weight loss reduces heart strain
- Better blood sugar control protects vessels
- Improved cholesterol profiles
- Reduced risk of heart attack and stroke

## Timeline of Effects

### Week 1-2: Initial Changes
- Appetite reduction begins
- Slight nausea possible as body adjusts
- Early blood sugar improvements
- Beginning of weight loss

### Week 3-8: Establishment Phase
- Appetite regulation becomes consistent
- Significant reduction in food cravings
- Steady weight loss pattern emerges
- Blood sugar levels stabilize

### Month 3-6: Optimization
- Maximum appetite control achieved
- Consistent weight loss continues
- HbA1c shows significant improvement
- Cardiovascular benefits become apparent

### Month 6+: Long-term Benefits
- Sustained weight management
- Maintained blood sugar control
- Potential cardiovascular protection
- Improved quality of life markers

## Why Individual Responses Vary

### Genetic Factors
- GLP-1 receptor sensitivity varies between people
- Metabolism rates differ
- Baseline hormone levels vary
- Previous dieting history affects response

### Lifestyle Factors
- Diet quality influences effectiveness
- Exercise enhances benefits
- Sleep quality affects hormone response
- Stress levels impact medication efficacy

### Medical Factors
- Concurrent medications may interact
- Underlying health conditions influence response
- Duration of diabetes affects pancreatic function
- Age and gender play roles in metabolism

## Maximizing Medication Effectiveness

### Timing Strategies
- Consistent injection timing
- Proper injection site rotation
- Taking medication as prescribed
- Not skipping doses

### Lifestyle Enhancement
- **Protein-rich meals**: Enhance satiety effects
- **Regular exercise**: Improves insulin sensitivity
- **Adequate sleep**: Supports hormone balance
- **Stress management**: Reduces cortisol interference

### Hydration and Nutrition
- Staying well-hydrated
- Eating nutrient-dense foods
- Avoiding processed foods when possible
- Listening to hunger and fullness cues

## The Science of Satiety

### Natural vs. Enhanced Satiety
Your body naturally produces GLP-1 after meals, but it breaks down quickly. GLP-1 medications provide:
- Prolonged satiety signals
- More consistent appetite control
- Reduced between-meal cravings
- Better recognition of fullness

### Hormonal Symphony
GLP-1 medications work alongside other hormones:
- **Leptin**: The "fullness" hormone
- **Ghrelin**: The "hunger" hormone
- **Insulin**: The "energy storage" hormone
- **Cortisol**: The "stress" hormone

## Common Questions About Mechanism

### "Will my body become dependent?"
- GLP-1 medications don't create physical dependence
- They enhance your body's natural systems
- If discontinued, natural GLP-1 production continues
- Weight and appetite patterns may gradually return to baseline

### "How long do effects last?"
- Weekly medications provide steady levels for 7 days
- Daily medications work for 24 hours
- Some effects (like appetite reduction) are noticed within hours
- Full benefits typically develop over several weeks

### "Why do some people respond better?"
Response varies due to:
- Individual receptor sensitivity
- Baseline metabolic health
- Adherence to lifestyle recommendations
- Concurrent health conditions

## Looking at the Bigger Picture

GLP-1 medications work by addressing fundamental biological mechanisms that regulate:
- Energy balance
- Blood sugar control
- Appetite and satiety
- Metabolic health

They don't force weight loss or suppress appetite unnaturally. Instead, they restore and enhance your body's natural regulatory systems that may have become dysregulated due to:
- Insulin resistance
- Chronic inflammation
- Hormonal imbalances
- Genetic predispositions

## The Bottom Line

Understanding how GLP-1 medications work helps you:
- Set realistic expectations
- Optimize your treatment approach
- Recognize normal responses vs. concerning symptoms
- Work effectively with your healthcare team
- Integrate lifestyle changes that enhance medication benefits

Remember: these medications are sophisticated tools that work with your body's natural systems. The better you understand how they work, the more effectively you can use them as part of your overall health strategy.`,
    author: "Dr. Robert Chen, Clinical Pharmacologist",
    date: "March 5, 2024",
    readTime: "12 min read",
    id: 5
  },
  {
    title: "Common Myths About GLP-1 Weight Loss Drugs & The Truths You Actually Need",
    subtitle: "",
    description: "So, you've done your homework, talked to your doctor, and maybe even decided to start (or seriously consider) a GLP-1 medication.",
    content: `So, you've done your homework, talked to your doctor, and maybe even decided to start (or seriously consider) a GLP-1 medication. But as you scroll through social media or chat with friends, you're bombarded with conflicting information, scary stories, and miracle claims.

Let's cut through the noise and address the most common myths about GLP-1 medications with facts, science, and real-world experience.

## Myth #1: "GLP-1 Medications Are Just Appetite Suppressants"

### The Myth
Many people believe GLP-1 medications simply suppress appetite, like old-fashioned diet pills.

### The Truth
GLP-1 medications work through multiple sophisticated mechanisms:
- **Hormonal regulation**: They mimic your body's natural fullness hormone
- **Blood sugar control**: They improve insulin function and reduce glucose production
- **Gastric emptying**: They slow digestion for sustained satiety
- **Brain signaling**: They affect neural pathways related to food reward and craving
- **Cardiovascular benefits**: They provide heart and blood vessel protection

Unlike simple appetite suppressants, GLP-1 medications address underlying metabolic dysfunction.

## Myth #2: "You'll Gain All the Weight Back When You Stop"

### The Myth
"As soon as you stop the medication, you'll regain all the weight immediately."

### The Truth
Weight regain patterns are complex and individual:
- **Gradual return**: Weight typically returns gradually, not immediately
- **Lifestyle matters**: People who maintain healthy habits keep more weight off
- **Metabolic improvements**: Some benefits (like improved insulin sensitivity) can persist
- **Behavior changes**: Many people develop lasting healthier eating patterns
- **Partial maintenance**: Many maintain some of their weight loss long-term

Research shows that people who combine medication with lifestyle changes often maintain significant weight loss even after discontinuation.

## Myth #3: "GLP-1 Medications Are Dangerous"

### The Myth
Social media horror stories suggest these medications cause severe, widespread complications.

### The Truth
GLP-1 medications have extensive safety data:
- **Decades of use**: Some have been used for diabetes for over 15 years
- **Large studies**: Clinical trials involved hundreds of thousands of participants
- **FDA approval**: Rigorous safety review process
- **Ongoing monitoring**: Post-market surveillance continues to confirm safety
- **Known side effects**: Most side effects are mild and temporary

Like all medications, they carry risks, but these are well-understood and manageable with proper medical supervision.

## Myth #4: "They Only Work for Severely Obese People"

### The Myth
"You have to be extremely overweight for these medications to be effective."

### The Truth
GLP-1 medications are effective across weight ranges:
- **BMI flexibility**: Approved for BMI ≥30 or BMI ≥27 with comorbidities
- **Diabetes benefits**: Helpful for blood sugar control regardless of weight
- **Individual response**: Effectiveness varies by person, not just starting weight
- **Health improvements**: Benefits often extend beyond weight loss
- **Quality of life**: Many experience improved well-being at various weight losses

The key is appropriate medical evaluation and realistic goal setting.

## Myth #5: "Natural Methods Are Always Better"

### The Myth
"You should be able to lose weight naturally without medication."

### The Truth
This myth ignores biological reality:
- **Hormonal dysfunction**: Many people have underlying metabolic issues
- **Genetic factors**: Some people are biologically predisposed to weight challenges
- **Medical tool**: GLP-1 medications are medical treatments, like insulin for diabetes
- **Combined approach**: They work best with, not instead of, lifestyle changes
- **Success enhancement**: They can make "natural" methods more effective

Medication doesn't replace healthy habits; it can make them more achievable.

## Myth #6: "The Side Effects Are Unbearable"

### The Myth
"Everyone gets terrible nausea and can't eat anything."

### The Truth
Side effect experiences vary widely:
- **Individual variation**: Some people have minimal side effects
- **Temporary nature**: Most side effects improve within weeks
- **Dosage dependent**: Starting low and increasing slowly reduces problems
- **Management strategies**: Many side effects can be minimized with proper techniques
- **Risk vs. benefit**: Most people find benefits outweigh temporary discomfort

Proper medical guidance and gradual dose escalation significantly improve tolerance.

## Myth #7: "You Can't Eat Anything on These Medications"

### The Myth
"GLP-1 medications make it impossible to enjoy food or eat normally."

### The Truth
Most people develop healthier, sustainable eating patterns:
- **Appetite normalization**: Reduces excessive hunger and cravings
- **Portion awareness**: Helps recognize appropriate serving sizes
- **Food enjoyment**: Many report increased satisfaction from smaller amounts
- **Social eating**: Most can participate normally in meals with others
- **Flexibility**: Allows for occasional treats and special occasions

The goal is regulated appetite, not food aversion.

## Myth #8: "They're Just a Quick Fix"

### The Myth
"People use GLP-1 medications to avoid doing the real work of lifestyle change."

### The Truth
Successful users typically make significant lifestyle improvements:
- **Enhanced motivation**: Weight loss success encourages continued healthy choices
- **Reduced barriers**: Less food noise makes healthy eating easier
- **Behavior change**: Many develop lasting habits during treatment
- **Medical tool**: Like glasses for vision, they help overcome biological challenges
- **Long-term thinking**: Most effective when viewed as part of comprehensive health plan

## Myth #9: "They're Too Expensive to Be Worth It"

### The Myth
"The cost is never justified for weight loss medication."

### The Truth
Cost-effectiveness varies by individual circumstances:
- **Health cost savings**: Preventing diabetes, heart disease can save thousands
- **Insurance coverage**: Increasing availability through health plans
- **Quality of life**: Difficult to quantify improved energy, confidence, mobility
- **Career benefits**: Some people see professional advantages
- **Alternative costs**: Compare to costs of other weight loss attempts

Individual value assessment should include both financial and health considerations.

## Myth #10: "You Can Get the Same Results with Willpower"

### The Myth
"If you just try hard enough, you don't need medication."

### The Truth
This ignores the biology of weight regulation:
- **Hormonal factors**: Appetite hormones can be dysregulated
- **Genetic predisposition**: Some people face greater biological challenges
- **Insulin resistance**: Makes weight loss significantly more difficult
- **Brain chemistry**: Food reward pathways can be altered
- **Medical condition**: Obesity is recognized as a chronic medical condition

Willpower alone cannot overcome underlying metabolic dysfunction.

## The Real Truth About GLP-1 Medications

Here's what the evidence actually shows:

### They Are Effective
- Significant weight loss in clinical trials
- Meaningful improvements in health markers
- High satisfaction rates among users
- Sustained benefits with continued use

### They Require Medical Supervision
- Proper evaluation before starting
- Ongoing monitoring during treatment
- Individualized dosing and adjustment
- Integration with comprehensive health plan

### They Work Best with Lifestyle Changes
- Enhanced effectiveness with healthy eating
- Greater benefits with regular exercise
- Improved outcomes with stress management
- Better maintenance with ongoing support

### Individual Results Vary
- Response depends on multiple factors
- Not everyone experiences dramatic results
- Some people may not tolerate them well
- Realistic expectations are important

## Making Informed Decisions

When considering GLP-1 medications:

1. **Consult qualified healthcare providers**
2. **Discuss your individual circumstances**
3. **Understand both benefits and risks**
4. **Consider your goals and expectations**
5. **Plan for comprehensive lifestyle approach**
6. **Prepare for ongoing commitment**

## The Bottom Line

GLP-1 medications are sophisticated medical tools with proven benefits and manageable risks. They're not magic bullets, dangerous drugs, or moral failures. They're FDA-approved treatments that can be valuable components of comprehensive health management for appropriate candidates.

The key is getting accurate information from qualified sources, maintaining realistic expectations, and using them as part of a holistic approach to health and well-being.

Don't let myths and misinformation prevent you from exploring potentially beneficial medical treatment. Instead, work with your healthcare team to make informed decisions based on science, your individual circumstances, and your personal health goals.`,
    author: "Dr. Amanda Foster, Obesity Medicine Specialist",
    date: "March 1, 2024",
    readTime: "15 min read",
    id: 6
  }
];

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const articleId = parseInt(id || "1");
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article not found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-background">
      <LotessaHeader />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation */}
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-8 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Articles
        </Button>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            {article.title}
          </h1>
          
          {article.subtitle && (
            <h2 className="text-xl md:text-2xl text-foreground font-medium mb-6 leading-relaxed">
              {article.subtitle}
            </h2>
          )}

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
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

          {/* Share Button */}
          <Button
            onClick={handleShare}
            variant="outline"
            size="sm"
            className="mb-8"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share Article
          </Button>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-muted-foreground leading-relaxed space-y-6"
            style={{ 
              whiteSpace: 'pre-line',
              lineHeight: '1.7'
            }}
          >
            {article.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="text-muted-foreground ml-4">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }
              if (paragraph.trim() === '') {
                return <br key={index} />;
              }
              return (
                <p key={index} className="text-muted-foreground mb-4">
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
      </article>
      
      <LotessaFooter />
    </div>
  );
};

export default Article;