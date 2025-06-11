import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const portfolioItems = [
  {
    id: "ecommerce",
    title: "Dragão do E-commerce",
    description: "Automação completa de vendas online com integração multi-plataforma e gestão inteligente de estoque.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    icon: "fas fa-shopping-cart",
    color: "fire-orange",
    kpis: [
      { label: "Aumento de Vendas", value: 247, suffix: "%" },
      { label: "Redução de Tempo", value: -78, suffix: "%" }
    ],
    tags: ["RPA", "API Integration"]
  },
  {
    id: "financial",
    title: "Guardião Financeiro",
    description: "Sistema de workflows para gestão financeira com relatórios automáticos e análise preditiva.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    icon: "fas fa-chart-line",
    color: "circuit-blue",
    kpis: [
      { label: "Precisão", value: 99.8, suffix: "%" },
      { label: "Economia", value: 2.3, suffix: "M", prefix: "R$ " }
    ],
    tags: ["Workflows", "BI"]
  },
  {
    id: "hr",
    title: "Dragão dos Talentos",
    description: "Automação de RH com onboarding inteligente, avaliações automatizadas e gestão de performance.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    icon: "fas fa-users",
    color: "circuit-green",
    kpis: [
      { label: "Satisfação", value: 94, suffix: "%" },
      { label: "Eficiência", value: 340, suffix: "%" }
    ],
    tags: ["Automation", "AI"]
  }
];

function AnimatedKPI({ kpi, isVisible, delay }: { kpi: any; isVisible: boolean; delay: number }) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 2000;
        const startTime = Date.now();
        const targetValue = Math.abs(kpi.value);

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          
          const value = easeOutCubic * targetValue;
          setCurrentValue(kpi.value < 0 ? -value : value);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        animate();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, kpi.value, delay]);

  const barWidth = Math.min(Math.abs(currentValue) / Math.abs(kpi.value) * 100, 100);

  return (
    <div className="flex justify-between items-center">
      <span className="font-inter text-xs text-gray-400">{kpi.label}</span>
      <div className="flex items-center">
        <div className="w-20 h-2 bg-gray-700 rounded-full mr-2">
          <motion.div
            className={`h-2 bg-gradient-to-r ${
              kpi.value < 0 
                ? 'from-circuit-blue to-circuit-green' 
                : 'from-fire-orange to-fire-red'
            } rounded-full`}
            style={{ width: `${barWidth}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${barWidth}%` }}
            transition={{ duration: 2, delay: delay / 1000 }}
          />
        </div>
        <span className={`font-code text-xs ${kpi.value < 0 ? 'text-circuit-blue' : 'text-fire-orange'}`}>
          {kpi.prefix || ""}{kpi.value < 0 ? '' : '+'}
          {currentValue.toFixed(kpi.suffix === 'M' ? 1 : 0)}{kpi.suffix}
        </span>
      </div>
    </div>
  );
}

function PortfolioCard({ item, index }: { item: typeof portfolioItems[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-${item.color} transition-all duration-500 overflow-hidden`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dragon-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <div className="flex items-center mb-3">
          <i className={`${item.icon} text-${item.color} mr-2`}></i>
          <h3 className={`font-orbitron font-bold text-xl text-${item.color}`}>{item.title}</h3>
        </div>

        <p className="font-inter text-gray-300 mb-4 text-sm">
          {item.description}
        </p>

        <div className="space-y-2 mb-4">
          {item.kpis.map((kpi, kpiIndex) => (
            <AnimatedKPI
              key={kpiIndex}
              kpi={kpi}
              isVisible={isInView}
              delay={kpiIndex * 500}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className={`font-code text-xs bg-${item.color}/20 text-${item.color} px-2 py-1 rounded`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6 text-gradient">
            Bestiário de Conquistas
          </h2>
          <p className="font-inter text-lg text-gray-300 max-w-2xl mx-auto">
            Cada projeto é uma criatura única no nosso códex, com estatísticas que impressionam e resultados que transformam.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
