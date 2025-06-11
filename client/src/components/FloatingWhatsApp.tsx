import { motion } from "framer-motion";
import { useState } from "react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "5511999999999";
    const message = "Olá! Gostaria de saber mais sobre os serviços do CodeDragon.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        className="relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <motion.button
          onClick={handleWhatsAppClick}
          className="bg-gradient-to-r from-circuit-green to-dragon-gold p-4 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300"
          animate={{ y: [-5, 0, -5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-whatsapp text-2xl text-white"></i>
        </motion.button>

        <motion.div
          className={`absolute bottom-16 right-0 bg-gray-800 text-white p-2 rounded-lg shadow-lg min-w-max ${
            showTooltip ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: showTooltip ? 1 : 0, y: showTooltip ? 0 : 10 }}
          transition={{ duration: 0.2 }}
        >
          <p className="font-inter text-sm">Sussurre ao Dragão</p>
          <div className="absolute bottom-0 right-4 transform translate-y-full">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
