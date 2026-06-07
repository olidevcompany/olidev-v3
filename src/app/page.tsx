import HeroSection from "@/components/hero/HeroSection";
import SplineCoreSection from "@/components/sections/SplineCoreSection";
import CinematicPlatformsSection from "@/components/sections/CinematicPlatformsSection";
import AudioGuideWidget from "@/components/ui/audio-guide-widget";
import FloatingChatWidget from "@/components/ui/floating-chat-widget";
import TechnologyStackSection from "@/components/sections/TechnologyStackSection";
import InstitutionalArchitectureSection from "@/components/sections/InstitutionalArchitectureSection";
import CinematicVideoSection from "@/components/sections/CinematicVideoSection";
import FAQSection from "@/components/sections/FAQSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SplineCoreSection />
      <CinematicPlatformsSection />
      <AudioGuideWidget />
      <FloatingChatWidget />
      <TechnologyStackSection />
      <InstitutionalArchitectureSection />
      <CinematicVideoSection />
      <FAQSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
}