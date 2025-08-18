import LotessaHeader from "@/components/LotessaHeader";
import HeroSection from "@/components/HeroSection";
import CommunitySection from "@/components/CommunitySection";
import LibrarySection from "@/components/LibrarySection";
import PartnerSection from "@/components/PartnerSection";
import ContactSection from "@/components/ContactSection";


const Index = () => {
  return (
    <div className="min-h-screen">
      <LotessaHeader />
      <main>
        <HeroSection />
        <CommunitySection />
        <LibrarySection />
        <PartnerSection />
        <ContactSection />
      </main>
      
    </div>
  );
};

export default Index;
