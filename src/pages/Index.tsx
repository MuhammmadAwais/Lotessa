import LotessaHeader from "@/features/landing/components/LotessaHeader";
import HeroSection from "@/features/landing/components/HeroSection";
import CommunitySection from "@/features/landing/components/CommunitySection";
import LibrarySection from "@/features/landing/components/LibrarySection";
import PartnerSection from "@/components/PartnerSection";
import ContactSection from "@/components/ContactSection";
import LotessaFooter from "@/features/landing/components/LotessaFooter";

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
