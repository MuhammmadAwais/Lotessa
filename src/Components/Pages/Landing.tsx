import React from 'react'
import Navbar from '../Navbar'
import HeroSection from '../HeroSection';

const Landing : React.FC = () => {
  return (
    <div className="Landing-Page">
    <div className="Navigation">
      <Navbar />
    </div>
    <div className="Hero-Section">
      <HeroSection
        title="Your Health Companion for GLP-1 Medications"
        subtitle="Track. Learn. Connect. All in one place."
        description="Navigate the changing GLP-1 landscape with confidence. Track your progress, manage side effects, and stay informed about medication access and alternatives."
        subDescription="Whether you're on Ozempic, Mounjaro, Wegovy, or considering alternatives, Lotessa helps you maintain continuity in your health journey. Get expert insights, track your progress, and connect with a community navigating similar challenges."
        buttonTextOne="Download the App"
        buttonTextTwo="Join the Lotessa Community"
        buttonLinkOne="/"
        buttonLinkTwo="/"
        imageSrc="./public/assets/HeroImage.png"
        imageAlt="illustration"
      />
      </div>
    </div>
  );
}

export default Landing
