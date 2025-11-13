import React from 'react'
import Card from './ui/Card';
import ArticlePage from './ArticlePage';
import styled from "styled-components";

interface CardContentInterface {
    id: number;
    heading: string;
    description: string;
    extended?: string | null;
}
const Library : React.FC = () => {
  const PageWrapper = styled.div`
    background-color: #e5e5e5;
  `;
  return (
    <div className="Library ">
      <PageWrapper>
        <div className="Headers flex flex-col justify-between items-center mx-4">
          <h2 className="mt-6 text-2xl lg:text-3xl font-medium text-black flex justify-between items-center mx-4">
            Lotessa Library
          </h2>
          <h1 className="flex justify-between items-center mt-8 text-2xl sm:text-2xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mx-4">
            Discover Expert Content, Anytime
          </h1>
          <p className="flex text-center justify-between items-center mt-6 text-2xl lg:text-3xl font-medium text-black mx-4">
            Bite-sized insights, real-world tips, and trustworthy health
            information
          </p>
        </div>
        <div className="Cards flex flex-wrap justify-center items-center gap-4">
          <ArticlePage />
        </div>
      </PageWrapper>
    </div>
  );
}

export default Library
