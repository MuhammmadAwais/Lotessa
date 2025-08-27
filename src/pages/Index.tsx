import LotessaHeader from "@/components/LotessaHeader";
import HeroSection from "@/components/HeroSection";
import CommunitySection from "@/components/CommunitySection";
import LibrarySection from "@/components/LibrarySection";
import PartnerSection from "@/components/PartnerSection";
import ContactSection from "@/components/ContactSection";
import LotessaFooter from "@/components/LotessaFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <LotessaHeader />
      {/* <div className="pt-20"></div> */}
      <main className="space-y-1">
        <HeroSection />
        <CommunitySection />
        <LibrarySection />
        <PartnerSection />
        <ContactSection />
      </main>
      <LotessaFooter />
    </div>
  );
};

export default Index;
