import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { KPIStrip } from "@/components/home/KPIStrip";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { SampleWorkPreview } from "@/components/home/SampleWorkPreview";
import { ActionCTA } from "@/components/home/ActionCTA";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Header />
      <main>
        <HeroSection />
        <KPIStrip />
        <ServicesPreview />
        <SampleWorkPreview />
        <ActionCTA />
        <TestimonialsPreview />
        <ActionCTA showTitle={false} />
        <WhyUsSection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Index;
