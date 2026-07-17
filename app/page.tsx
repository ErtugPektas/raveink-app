import HeroSection from "@/components/sections/HeroSection";
import Announcements from "@/components/sections/Announcements";
import AboutSection from "@/components/sections/AboutSection";
import TattooServices from "@/components/sections/TattooServices";
import PiercingSection from "@/components/sections/PiercingSection";
import ArtistTeam from "@/components/sections/ArtistTeam";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import Testimonials from "@/components/sections/Testimonials";
import InstagramFeed from "@/components/sections/InstagramFeed";
import FAQ from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/ContactSection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import FloatingLogo from "@/components/ui/FloatingLogo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Announcements />
      <AboutSection />
      <TattooServices />
      <PiercingSection />
      <ArtistTeam />
      <PortfolioGallery />
      <Testimonials />
      <InstagramFeed />
      <FAQ />
      <ContactSection />
      <WhatsAppButton />
      <FloatingLogo />
    </>
  );
}
