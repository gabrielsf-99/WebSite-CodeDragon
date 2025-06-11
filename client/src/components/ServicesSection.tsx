import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: "workflows",
    title: "Workflows",
    description: "Serpentes digitais que fluem através dos seus processos, otimizando cada etapa com precisão dracônica.",
    image: "https://pixabay.com/get/ge378e9cf4c68b1354aaa9e0eb81aa8c872ec04ed9d1910601d4342c60d05a0cb38dd8ea9e77781dc9ffb6058a63382124dccb48b03aeb59cc0bdee063827dec7_1280.jpg",
    color: "fire-orange",
    code: "{workflow.optimize()}"
  },
  {
    id: "automation",
    title: "Automação",
    description: "Dragões mecânicos que trabalham incansavelmente, executando tarefas com a força de mil engrenagens.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    color: "circuit-blue",
    code: "{automate.execute()}"
  },
  {
    id: "rpa",
    title: "RPA",
    description: "Dragões robóticos que tecem fios de código, automatizando interfaces com inteligência artificial.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    color: "circuit-green",
    code: "{rpa.weave()}"
  },
  {
    id: "development",
    title: "Desenvolvimento",
    description: "Dragões de fogo que compilam bits em chamas vivas, forjando sistemas que respiram inovação.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    color: "dragon-gold",
    code: "{dev.compile()}"
  }
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`group relative p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-${service.color} transition-all duration-500 transform hover:scale-105 hover-flame cursor-pointer`}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/10 to-${service.color}/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

      <div className="relative z-10">
        <div className="mb-4">
          <img
            src={service.image}
            alt={`${service.title} service illustration`}
            className={`w-16 h-16 object-cover rounded-lg mx-auto border-2 border-${service.color}/50`}
          />
        </div>

        <h3 className={`font-orbitron font-bold text-xl mb-3 text-center text-${service.color}`}>
          {service.title}
        </h3>

        <p className="font-inter text-gray-300 text-center mb-4">
          {service.description}
        </p>

        <div className="flex justify-center">
          <span className={`font-code text-xs text-circuit-blue bg-gray-800 px-2 py-1 rounded`}>
            {service.code}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6 text-gradient">
            Nossos Poderes Dracônicos
          </h2>
          <p className="font-inter text-lg text-gray-300 max-w-2xl mx-auto">
            Cada serviço é uma especialização única, forjada no fogo da experiência e temperada com a precisão do código.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
