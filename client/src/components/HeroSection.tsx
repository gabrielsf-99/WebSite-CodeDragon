import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "dragon.initialize()";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="circuit-pattern absolute inset-0 animate-circuit"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-4 h-4 bg-circuit-blue rounded-full opacity-60"
          style={{ top: "20%", left: "10%" }}
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-3 h-3 bg-circuit-green rounded-full opacity-40"
          style={{ top: "40%", right: "20%" }}
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-dragon-gold rounded-full opacity-80"
          style={{ bottom: "40%", left: "25%" }}
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute w-5 h-5 bg-fire-orange rounded-full opacity-50"
          style={{ bottom: "20%", right: "33%" }}
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Digital dragon illustration */}
        <motion.div
          className="mb-8 relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
            alt="Digital dragon with circuit patterns"
            className="mx-auto w-64 h-64 object-cover rounded-full border-4 border-dragon-gold animate-glow opacity-80 mb-8"
          />
        </motion.div>

        <motion.h1
          className="font-orbitron font-black text-4xl md:text-6xl lg:text-7xl mb-6 text-gradient animate-float"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Domine seus Processos
          <br />
          <span className="text-dragon-gold">com a Força de um Dragão</span>
        </motion.h1>

        <motion.p
          className="font-inter text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Transforme sua empresa com workflows inteligentes, automação poderosa e sistemas que respiram vida.
          <span className="font-code text-circuit-blue"> {`{ CodeDragon }`}</span> desperta o poder adormecido dos seus processos.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-gradient-to-r from-fire-orange to-fire-red rounded-lg font-orbitron font-bold text-lg hover-flame transition-all duration-300 transform hover:scale-105"
          >
            <i className="fas fa-fire mr-2"></i>
            Solicitar Demonstração
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className="px-8 py-4 border-2 border-circuit-blue text-circuit-blue rounded-lg font-inter font-semibold hover:bg-circuit-blue hover:text-dragon-dark transition-all duration-300"
          >
            <i className="fas fa-play mr-2"></i>
            Ver Como Funciona
          </button>
        </motion.div>

        <motion.div
          className="mt-12 font-code text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <span className="animate-pulse">&gt;</span>
          <span className="text-circuit-green"> {typedText}</span>
          <span className="text-dragon-gold"> // Iniciando transformação...</span>
        </motion.div>
      </div>
    </section>
  );
}
