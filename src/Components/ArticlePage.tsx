import React, { useState } from "react";
import Card from "./ui/Card";
import ArticleModal from "./ArticleModal";
import styled from "styled-components";


interface CardContentInterface {
  id: number;
  heading: string;
  description: string;
  extended: React.ReactNode;
}


const CardContent: CardContentInterface[] = [
  {
    id: 1,
    heading:
      "Common Myths About GLP-1 Weight Loss Drugs & The Truths You Actually Need",
    description:
      "Sorting through the most common myths and the truths you actually need to hear",
    extended: (
      <>
        <p>
          So, you've done your homework, talked to your doctor, and maybe even
          decided to start (or seriously consider) a GLP-1 medication.
        </p>
        <p>Then the opinions start arriving.</p>
        <p>A colleague tells you it's "basically cheating."</p>
        <p>
          A family member warns you that you'll "never be able to enjoy your
          favourite foods again."
        </p>
        <p>
          And somewhere online, someone claims they "lost 20 pounds in a month
          without changing a thing."
        </p>
        <p>
          It can be hard to know what's real and what's just a story passed
          along without facts. Let's sort through some of the most common myths
          and the truths you actually need to hear.
        </p>
        <h3>"You'll lose all the weight instantly."</h3>
        <p>
          GLP-1s don't work like a switch you flip overnight. They help regulate
          appetite and blood sugar, making it easier to make consistent choices
          but results happen gradually over months. Slow, steady progress is not
          only more realistic, it's healthier for long-term success.
        </p>
      </>
    ),
  },
  {
    id: 2,
    heading: "How Does GLP-1 Medication Work?",
    description: "What actually happens inside your body when you take them",
    extended: (
      <>
        <p>
          In our last article, we talked about what GLP-1 medications are a
          lab-made version of a natural hormone your body already produces. Now,
          let's look at what actually happens inside your body when you take
          them.
        </p>

        <p>
          We'll keep it clear and simple, so you can picture it without feeling
          like you're reading a science manual.
        </p>

        <p>Think of GLP-1 as your body's group text:</p>

        <ul>
          <li>When you eat, your gut sends out a "group message" to:</li>
          <ul>
            <li>
              Pancreas: "Send out some insulin to handle the sugar from this
              meal."
            </li>
            <li>
              Stomach: "Slow down emptying so we can process food slowly."
            </li>
            <li>Brain: "We're full now, no need to keep eating."</li>
          </ul>
        </ul>

        <p>Your natural GLP-1 hormone is the one sending those messages.</p>

        <p>What changes with the medication</p>

        <p>
          Here's the thing, your natural GLP-1 works fast, but it doesn't hang
          around long. The signal fades within minutes. When you take a GLP-1
          medication, you're basically giving that same message more staying
          power.
        </p>

        <p>
          So instead of a quick "blip" of communication, the signal lasts long
          enough to:
        </p>

        <ul>
          <li>Keep blood sugar from spiking and crashing.</li>
          <li>Make fullness last well past the last bite.</li>
          <li>Quiet those "time for a snack" thoughts that pop up too soon.</li>
        </ul>

        <p>The 3 key things GLP-1 meds do</p>

        <p>
          While the details can vary between different GLP-1 medications, they
          usually work in these ways:
        </p>

        <ul>
          <li>Balance blood sugar</li>
          <ul>
            <li>
              They help your pancreas release insulin when it's needed and
              reduce another hormone (glucagon) that would otherwise raise blood
              sugar.
            </li>
          </ul>
          <li>Slow digestion</li>
          <ul>
            <li>
              Your stomach empties more slowly, helping you feel satisfied and
              avoiding big spikes (and crashes) in blood sugar.
            </li>
          </ul>
          <li>Reduce appetite</li>
          <ul>
            <li>
              They send signals to the brain's hunger control areas, so cravings
              feel less urgent and portions naturally get smaller.
            </li>
          </ul>
        </ul>

        <p>Why it's not the same as dieting</p>

        <p>
          A lot of diets rely on willpower and that's tough when your body's
          screaming for food. GLP-1 medication works differently. Instead of
          pushing against hunger, it makes that hunger less intense to begin
          with.
        </p>

        <p>
          It's a bit like turning down background noise so you can focus on the
          main conversation in this case, your actual hunger cues.
        </p>

        <p>A gradual process</p>

        <p>
          GLP-1 medications aren't meant to cause overnight changes. Your
          provider will usually start you on a low dose and slowly increase it
          over several weeks. This helps your body adapt and can reduce side
          effects along the way.
        </p>

        <p>Bottom line</p>

        <p>
          GLP-1 medications don't replace your own efforts, they make those
          efforts feel less like an uphill battle. By strengthening your body's
          natural "after-meal" signals, they help you manage blood sugar, stay
          full longer, and cut back on unneeded snacks.
        </p>

        <p>
          In the next part of our series, we'll walk through the questions to
          ask your doctor if you're wondering whether GLP-1 medication is a good
          fit for you.
        </p>
      </>
    ),
  },
  {
    id: 3,
    heading: "What Are GLP-1 Medications?",
    description:
      "If you've just been prescribed a GLP-1 medication, you might be hearing a lot of new terms",
    extended: (
      <>
        <p>
          If you've just been prescribed a GLP-1 medication, you might be
          hearing a lot of new terms, seeing before-and-after stories online,
          and wondering… what exactly is this, and how does it fit into my
          journey? Let's break it down in plain language.
        </p>

        <p>
          First things first: GLP-1 stands for glucagon-like peptide-1, a
          natural hormone your body already makes.
        </p>

        <p>
          Its "day job" is to help regulate blood sugar and appetite. Think of
          GLP-1 as part of your body's metabolic traffic control system,
          directing signals between your gut, pancreas, and brain to keep things
          running smoothly after you eat.
        </p>

        <p>Where the medication comes in</p>

        <p>
          GLP-1 medications are designed to mimic that natural hormone, but in a
          way that's more powerful and longer-lasting.
        </p>

        <p>
          They were first developed to help people with type 2 diabetes keep
          blood sugar levels in check, and many people also noticed another
          effect: steady, sustainable weight loss when used alongside healthy
          habits.
        </p>

        <p>Common GLP-1 medications</p>

        <p>Some names you might hear include:</p>

        <ul>
          <li>Semaglutide (brands like Ozempic®, Wegovy®)</li>
          <li>Tirzepatide (brand like Mounjaro®)</li>
          <li>Liraglutide (brand like Saxenda®)</li>
        </ul>

        <p>
          Each works in a similar way, but your doctor will choose the one and
          the dosing schedule that's best for you.
        </p>

        <p>More than "just a weight-loss drug"</p>

        <p>
          GLP-1 medications aren't a quick-fix or one-size-fits-all solution.
          They work best as part of a complete plan medication plus changes in
          nutrition, movement, sleep, and overall lifestyle.
        </p>

        <p>
          Think of the medication as a co-pilot: it can help you navigate the
          route, but you're still steering the ship.
        </p>

        <p>What's next in this series</p>

        <p>In upcoming articles, we'll explore:</p>

        <ul>
          <li>How GLP-1 medications work inside your body</li>
          <li>How to decide if they're the right fit for you</li>
          <li>Clearing up some of the most common myths you may have heard</li>
        </ul>

        <p>The bottom line</p>

        <p>
          GLP-1 medications are a modern medical tool with the potential to
          improve health and, for many, support weight loss. Used under medical
          supervision and combined with lifestyle changes, they can be a
          powerful ally in your long-term health journey.
        </p>
      </>
    ),
  },
  {
    id: 4,
    heading: "Tracking for Sustained Long-Term GLP-1 Goals",
    description: "GLP-1 is just the beginning, habits carry you the distance",
    extended: (
      <>
        <p>
          GLP-1 medications like Mounjaro can be a powerful kick-start to weight
          loss, but long-term success relies on more than injections. Lifestyle
          changes such as nutrition, activity, sleep will cement your progress.
          That's where consistent tracking becomes your long-term ally.
        </p>

        <p>Why consistency wins</p>

        <p>
          Tracking isn't only for when you're actively taking the medication.
          It's for building and maintaining habits that sustain your results.
          Research shows that people who track their weight, food, and activity
          are more likely to keep the weight off years after treatment ends.
          It's about reinforcing behaviors, not just monitoring numbers.
        </p>

        <p>Beyond the scales</p>

        <p>
          The best progress stories aren't only told in kilograms lost.
          Non-scale victories like better sleep, improved fitness, or increased
          energy are often the strongest motivators. By logging these alongside
          your weight and symptoms, you get a fuller picture of your health
          journey.
        </p>

        <p>Lotessa keeps you moving forward</p>

        <p>
          Lotessa helps you track everything in one place: weight, body
          measurements, symptoms, activity, and those priceless non-scale wins.
          Whether you're in the middle of treatment, transitioning off, or
          months beyond your last dose, you can see how far you've come and stay
          motivated to go further.
        </p>

        <p>
          Medications can start the change whilst your habits and tracking will
          keep it alive. Lotessa is your partner in making it last.
        </p>
      </>
    ),
  },
  {
    id: 5,
    heading: "Why Tracking Your GLP-1 Matters, Even When Prices Soar",
    description: "when uncertainty strikes, data becomes your safety net",
    extended: (
      <>
        <p>
          The recent rise in Mounjaro prices has caused some people to rethink
          their dosing schedules or pause treatment altogether. In these
          moments, tracking your progress, symptoms, and side effects becomes
          even more critical. Without it, you risk losing valuable insights into
          what works for your body.
        </p>

        <p>Evidence-backed benefits of tracking</p>

        <p>
          Studies from NICE and the NHS show that medication tracking can
          improve adherence by up to 40%. By logging your injections, symptoms,
          and lifestyle habits, you can spot patterns such as side effects
          linked to dose changes that may influence your care plan. This helps
          you avoid unnecessary dose increases or waste, saving both money and
          progress.
        </p>

        <p>Empowering your conversations with your clinician</p>

        <p>
          Tracking provides a clear record you can share with your GP or
          pharmacist. If you need to switch medications or adjust dosing, having
          this history means decisions are based on evidence, not guesswork.
        </p>

        <p>Lotessa turns tracking into confidence</p>

        <p>
          With easy dose logging, side-effect monitoring, and progress charts,
          Lotessa makes tracking effortless and even motivating. Your data stays
          with you, so you stay in control, no matter what changes in the
          market.
        </p>

        <p>
          When prices go up, your commitment doesn't have to go down. Lotessa is
          here to keep you steady, informed, and on track.
        </p>
      </>
    ),
  },
  {
    id: 6,
    heading: "The Future of GLP-1 Access in the UK",
    description: "A period of change, but not the end of your journey",
    extended: (
      <>
       <p>The recent Mounjaro price hike has caused worry for many UK users, especially those paying privately. While NHS patients will see no immediate change, the private market is experiencing significant shifts. This is part of a wider realignment in global drug pricing, with manufacturers bringing UK costs in line with other countries.</p>

<p>What this means for you</p>

<p>Firstly, the good news: the UK remains a priority market for GLP-1 treatments. NHS access is secure for those eligible, and several alternative medications, including Wegovy and Ozempic, remain available both privately and on prescription. New GLP-1 and dual-action therapies are also in late-stage trials and may enter the UK market in the next 1–3 years, adding competition and potentially stabilising prices.</p>

<p>Staying ahead through information and planning</p>

<p>Times of change can be unsettling, but they're also a chance to take control. Staying informed about medication availability, alternative options, and policy updates means you can adapt quickly. Informed patients are better positioned to work with their GP or pharmacist to find the right treatment plan — and continuity is key to lasting results.</p>

<p>Lotessa: your companion in a shifting landscape</p>

<p>Lotessa keeps your health data organised, your doses tracked, and your progress visible. So, whether you stay on your current medication, switch, or pause, you'll have the insights to make confident decisions with your healthcare provider.</p>

<p>Your health journey isn't ending, it's evolving. Let Lotessa help you navigate it with clarity and confidence.</p>
      </>
    ),
  },
];

const ArticlePage: React.FC = () => {

  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(
    null
  );


  const selectedArticle = CardContent.find(
    (article) => article.id === selectedArticleId
  );

  return (
    <PageWrapper>

      {CardContent.map((article) => (
        <Card
          key={article.id}
          title={article.heading}
          subtitle={article.description}

          snippet={article.extended}
          onClick={() => setSelectedArticleId(article.id)}
        />
      ))}


      {selectedArticle && (
        <ArticleModal
          isOpen={!!selectedArticle}
          onClose={() => setSelectedArticleId(null)}
          title={selectedArticle.heading}
          subtitle={selectedArticle.description}
        >
          {selectedArticle.extended}
        </ArticleModal>
      )}
    </PageWrapper>
  );
};

const PageWrapper = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem; /* Adds space between cards */
  padding: 2rem;
  min-height: 100vh;
  background: #e5e5e5; 
`;

export default ArticlePage;
