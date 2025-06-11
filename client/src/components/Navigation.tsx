import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-dragon-dark/90 backdrop-blur-sm" : "bg-transparent"
      } border-b border-dragon-gold/20`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <i className="fas fa-dragon text-dragon-gold text-2xl animate-flame"></i>
            <span className="font-orbitron font-bold text-xl text-gradient">CodeDragon</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-dragon-gold transition-colors font-inter"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-dragon-gold transition-colors font-inter"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-dragon-gold transition-colors font-inter"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="hover:text-dragon-gold transition-colors font-inter"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className="hover:text-dragon-gold transition-colors font-inter"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-dragon-gold transition-colors font-inter"
            >
              Contato
            </button>
          </div>

          <button
            className="md:hidden text-dragon-gold text-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 py-4 border-t border-dragon-gold/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left hover:text-dragon-gold transition-colors font-inter"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left hover:text-dragon-gold transition-colors font-inter"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-dragon-gold transition-colors font-inter"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left hover:text-dragon-gold transition-colors font-inter"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="text-left hover:text-dragon-gold transition-colors font-inter"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-dragon-gold transition-colors font-inter"
              >
                Contato
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
