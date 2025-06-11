import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="bg-dragon-dark text-white dragon-scales">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
