import React from 'react'
import Navbar from '../Navbar'
import HeroSection from '../HeroSection';
import Community from '../Community';
import Library from '../Library';
import Contact from '../Contact';
import Footer from '../Footer';
import {
  ButtonHeartIcon,
  UsersIcon,
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  ExampleLogo,
} from "../Icons/Icons";
import PartnerSection from '../PartnerSection';


const Landing : React.FC = () => {
    const primaryButtonProps = {
      text: "Download the App",
      icon: <ButtonHeartIcon />,
      href: "/",
    };

    const secondaryButtonProps = {
      text: "Join the Lotessa Community",
      icon: <UsersIcon />,
      href: "/",
    };

    const socialIconsProps = [
      {
        icon: <InstagramIcon />,
        href: "/",
        alt: "Instagram",
      },
      {
        icon: <LinkedInIcon />,
        href: "/",
        alt: "LinkedIn",
      },
      {
        icon: <FacebookIcon />,
        href: "/",
        alt: "Facebook",
      },
    ];
  return (
    <div className="Landing-Page">
      <div className="Navigation">
        <Navbar />
      </div>
      {/* IDS ARE GIVEN BASED ON NAVBAR */}
      <div id="download" className="Hero-Section">
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
      <div id="community" className="Community-Section m-14">
        <h1 className="flex justify-center items-center text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 ">
          Join the Community
        </h1>
        <Community
          title="You're Not Alone"
          description="Join a supportive, judgement-free community where you can ask questions, share progress, and connect with others who understand your journey. Whether you're just starting or deep into your transformation, there's a space for you here."
          buttonTextOne="Join the Lotessa Community"
          buttonLinkOne="/"
          imageSrc="./public/assets/CommunityImage.png"
          imageAlt="illustration"
        />
      </div>
      <div id="library" className="Library-Section">
        <Library />
      </div>
      <div id="partner" className="Partner-Section">
        <PartnerSection />
      </div>
      <div id="contact" className="Contact-Section">
        <Contact />
      </div>

      <div className="Footer-Section mt-20">
        <div className="flex flex-col justify-end ">
          <Footer
            logo={<ExampleLogo />}
            primaryButton={primaryButtonProps}
            secondaryButton={secondaryButtonProps}
            socialIcons={socialIconsProps}
          >
            <p>
              Lotessa is{" "}
              <strong className="font-semibold text-[#0A2540]">
                not a medical device
              </strong>{" "}
              and does not provide medical advice. Always consult a qualified
              healthcare professional regarding your health condition and
              treatment.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="#terms"
                className="font-semibold text-[#0A2540] underline decoration-gray-400 decoration-1 underline-offset-2 transition-colors hover:text-gray-900"
              >
                Terms and Conditions
              </a>
              <a
                href="#cookies"
                className="font-semibold text-[#0A2540] underline decoration-gray-400 decoration-1 underline-offset-2 transition-colors hover:text-gray-900"
              >
                Cookies Policy
              </a>
              <a
                href="#privacy"
                className="font-semibold text-[#0A2540] underline decoration-gray-400 decoration-1 underline-offset-2 transition-colors hover:text-gray-900"
              >
                Privacy Policy
              </a>
            </div>
            <div className="mt-6">
              <a
                href="#report"
                className="font-semibold text-[#0A2540] underline decoration-gray-400 decoration-1 underline-offset-2 transition-colors hover:text-gray-900"
              >
                Report an issue
              </a>
            </div>
          </Footer>
        </div>
      </div>
    </div>
  );
}

export default Landing
