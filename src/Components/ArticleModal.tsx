import React from "react";
import styled from "styled-components";



interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;

  children: React.ReactNode;
}

const ArticleModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
}) => {

  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        <ContentWrapper>
          <TextSection>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <ArticleBody>{children}</ArticleBody>
          </TextSection>
          <ImageSection>

            <img src="../../public/assets/CardImage.png" alt="App Progress" />
          </ImageSection>
        </ContentWrapper>
      </ModalContent>
    </ModalBackdrop>
  );
};

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0; /* top, right, bottom, left = 0 */
  background-color: rgba(0, 0, 0, 0.8); /* Dark backdrop */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  overflow-y: auto; /* Allow backdrop to scroll if modal is too tall */
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px; 
  max-height: 90vh; 
  background-color: #101828; 
  border-radius: 16px;
  padding: 3rem 4rem;
  color: #f2f4f7; // Light text color
  overflow-y: auto; // Make content scrollable
  font-family: Arial, Helvetica, sans-serif;
  scrollbar-width: none; /* Hide the scrollbar */
  -ms-overflow-style: none; 

  @media (max-width: 768px) {
    padding: 3rem 2rem;
    max-height: 95vh;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  color: #98a2b3;
  font-size: 2.5rem;
  line-height: 1;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 3rem;

  /* Stack vertically on smaller screens */
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const TextSection = styled.div`
  flex: 2; /* Takes 2/3 of the space */

  h1 {
    font-size: 2.5rem; // Large title
    color: #ffffff;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  h2 {
    font-size: 1.25rem;
    color: #eaecf0; // Lighter gray
    font-weight: 400;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.1rem;
    }
  }
`;

const ArticleBody = styled.div`
  color: #d0d5dd; // Body text color
  font-size: 1rem;
  line-height: 1.7;

  p {
    margin-bottom: 1.5rem;
  }

  h3 {
    color: #ffffff;
    font-size: 1.1rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }
`;

const ImageSection = styled.div`
  flex: 1; /* Takes 1/3 of the space */
  display: flex;
  align-items: flex-start;
  justify-content: center;

  img {
    width: 100%;
    max-width: 300px; // Max width for the phone
    height: auto;
  }

  @media (max-width: 900px) {
    align-items: center; /* Center image when stacked */
    padding-top: 1rem;
  }
`;

export default ArticleModal;
