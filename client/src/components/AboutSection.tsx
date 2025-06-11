import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const timelineItems = [
  {
    year: "2020",
    title: "Nascimento do Dragão",
    description: "Primeiras chamas de código acesas, iniciando nossa missão de transformar processos empresariais.",
    color: "fire-orange"
  },
  {
    year: "2022",
    title: "Evolução Digital",
    description: "Expansão para RPA e automação avançada, dominando novos territórios tecnológicos.",
    color: "circuit-blue"
  },
  {
    year: "2025",
    title: "Era dos Dragões",
    description: "Liderança em soluções integradas, com IA e machine learning alimentando nossas chamas.",
    color: "dragon-gold"
  }
];

const teamMembers = [
  {
    name: "Mestre do Fogo",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    skills: ["Python", "JavaScript", "React"],
    color: "fire-orange"
  },
  {
    name: "Domadora de Processos",
    role: "RPA Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    skills: ["UiPath", "Automation", "Power Platform"],
    color: "circuit-blue"
  },
  {
    name: "Arquiteto das Chamas",
    role: "Solutions Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    skills: ["AWS", "Docker", "Kubernetes"],
    color: "dragon-gold"
  }
];

function TimelineItem({ item, index, isLeft }: { item: typeof timelineItems[0]; index: number; isLeft: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-center ${isLeft ? 'justify-end' : 'justify-start'} mb-12`}
      initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? 50 : -50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8'}`}>
        <div className={`bg-gray-800 p-6 rounded-lg border border-${item.color}/30 hover:border-${item.color} transition-colors`}>
          <h3 className={`font-orbitron font-bold text-xl mb-2 text-${item.color}`}>{item.year}</h3>
          <h4 className="font-inter font-semibold mb-2">{item.title}</h4>
          <p className="font-inter text-gray-300 text-sm">{item.description}</p>
        </div>
      </div>
      <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${item.color} rounded-full border-4 border-dragon-dark`}></div>
    </motion.div>
  );
}

function TeamMember({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const [showSkills, setShowSkills] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`group relative bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-${member.color} transition-all duration-500`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setShowSkills(true)}
      onMouseLeave={() => setShowSkills(false)}
    >
      <img
        src={member.image}
        alt={member.name}
        className={`w-24 h-24 rounded-full mx-auto mb-4 border-3 border-${member.color} object-cover`}
      />

      <h4 className="font-orbitron font-bold text-lg text-center mb-2">{member.name}</h4>
      <p className="font-inter text-gray-400 text-center text-sm mb-4">{member.role}</p>

      <motion.div
        className="flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: showSkills ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {member.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className={`font-code text-xs bg-${member.color}/20 text-${member.color} px-2 py-1 rounded`}
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-dragon-dark relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6 text-gradient">
            Escala de Conquista
          </h2>
          <p className="font-inter text-lg text-gray-300 max-w-2xl mx-auto">
            Nossa jornada através dos reinos da tecnologia, forjando soluções com fogo e código.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-fire-orange to-circuit-blue"></div>

          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="font-orbitron font-bold text-2xl text-center mb-12 text-gradient">
            Guardiões do Código
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
