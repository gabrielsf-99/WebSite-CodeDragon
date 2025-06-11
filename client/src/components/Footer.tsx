import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  { name: "Workflows", href: "#services" },
  { name: "Automação", href: "#services" },
  { name: "RPA", href: "#services" },
  { name: "Desenvolvimento", href: "#services" },
  { name: "Consultoria", href: "#contact" }
];

const links = [
  { name: "Sobre Nós", href: "#about" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Blog", href: "#blog" },
  { name: "Contato", href: "#contact" },
  { name: "Carreiras", href: "#contact" }
];

const socialLinks = [
  { icon: "fab fa-linkedin", href: "#", color: "fire-orange" },
  { icon: "fab fa-twitter", href: "#", color: "circuit-blue" },
  { icon: "fab fa-instagram", href: "#", color: "dragon-gold" },
  { icon: "fab fa-github", href: "#", color: "circuit-green" }
];

const legalLinks = [
  { name: "Privacidade", href: "#" },
  { name: "Termos", href: "#" },
  { name: "Cookies", href: "#" }
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-dragon-dark border-t border-dragon-gold/20 py-12 dragon-scales">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center space-x-3 mb-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.i
                className="fas fa-dragon text-dragon-gold text-3xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <span className="font-orbitron font-bold text-2xl text-gradient">CodeDragon</span>
            </motion.div>

            <motion.p
              className="font-inter text-gray-300 mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Onde código encontra poder. Transformamos processos empresariais com a força de dragões digitais,
              automatizando o futuro uma chama por vez.
            </motion.p>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 hover:text-${social.color} transition-colors`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h4 className="font-orbitron font-bold text-lg mb-4 text-fire-orange">Serviços</h4>
            <ul className="space-y-2 font-inter text-gray-300">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="hover:text-fire-orange transition-colors"
                  >
                    {service.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h4 className="font-orbitron font-bold text-lg mb-4 text-circuit-blue">Links</h4>
            <ul className="space-y-2 font-inter text-gray-300">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-circuit-blue transition-colors"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center mb-4 md:mb-0">
            <span className="font-inter text-gray-400 text-sm">
              © 2025 CodeDragon - Desenvolvido com
            </span>
            <motion.i
              className="fas fa-fire text-fire-orange mx-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-inter text-gray-400 text-sm">e</span>
            <span className="font-code text-circuit-blue mx-2">{`{código}`}</span>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            {legalLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="font-inter text-gray-400 hover:text-dragon-gold transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
