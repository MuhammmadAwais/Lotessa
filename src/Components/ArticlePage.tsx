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
    extended: <p>Full text for "How Does GLP-1 Medication Work?"</p>,
  },
  {
    id: 3,
    heading: "What Are GLP-1 Medications?",
    description:
      "If you've just been prescribed a GLP-1 medication, you might be hearing a lot of new terms",
    extended: <p>Full text for "What Are GLP-1 Medications?"</p>,
  },
  {
    id: 4,
    heading: "Tracking for Sustained Long-Term GLP-1 Goals",
    description: "GLP-1 is just the beginning, habits carry you the distance",
    extended: <p>Full text for "Tracking for Sustained Long-Term Goals."</p>,
  },
  {
    id: 5,
    heading: "Why Tracking Your GLP-1 Matters, Even When Prices Soar",
    description: "when uncertainty strikes, data becomes your safety net",
    extended: <p>Full text for "Why Tracking Your GLP-1 Matters."</p>,
  },
  {
    id: 6,
    heading: "The Future of GLP-1 Access in the UK",
    description: "A period of change, but not the end of your journey",
    extended: <p>Full text for "The Future of GLP-1 Access in the UK."</p>,
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

          snippet={article.description}
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
