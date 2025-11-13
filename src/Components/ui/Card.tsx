import React from "react";
import styled from "styled-components";


interface CardProps {
  title: string;
  subtitle: string;
  snippet: React.ReactNode | string;
  onClick: () => void; 
}

const Card: React.FC<CardProps> = ({ title, subtitle, snippet, onClick }) => {
  return (

    <StyledWrapper onClick={onClick}>
      <div className="card">
        <div className="arrow-button">
          <div className="arrow">→</div>
        </div>
        <p className="card-title">{title}</p>
        <p className="card-subtitle">{subtitle}</p>
        <p className="card-snippet ">{snippet}</p>
      </div>
    </StyledWrapper>
  );
};



const StyledWrapper = styled.div`
  .card {
    position: relative;
    height: 420px;
    max-width: 400px;
    background-color: #f9f7f5;
    border-radius: 24px; // Larger border radius
    padding: 2.5rem 2rem;
    margin: 1rem;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    /* Subtle hover effect */
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    }
  }

  .card-title {
    color: #101828; // Dark charcoal
    font-size: 1.75rem; // ~28px
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 1rem;
    /* In case title is too long */
    padding-right: 3rem;
  }

  .card-subtitle {
    color: #344054; // Medium gray
    font-size: 1.125rem; // ~18px
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  .card-snippet {
    color: #475467; // Slightly lighter gray
    font-size: 1rem; // ~16px
    font-weight: 400;
    line-height: 1.6;
    /* This hides overflow and adds the "..." */
    display: -webkit-box;
    -webkit-line-clamp: 3; // Show 3 lines before truncating
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .arrow-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 44px; // Circular button
    height: 44px;
    top: 2rem;
    right: 2rem;
    border: 1.5px solid #d0d5dd; // Light gray border
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .card:hover .arrow-button {
    border-color: #3d4457;
    background-color: #1a202c;
  }

  .arrow {
    color: #344054;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1;
    transition: all 0.3s ease;
  }

  .card:hover .arrow {
    transform: translateX(3px); /* Small arrow movement on hover */
    color: #ffffff;
  }
`;

export default Card;
