import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const blogPosts = [
  {
    id: "rpa-trends",
    title: "O Futuro do RPA: Dragões Inteligentes em 2025",
    description: "Como a inteligência artificial está transformando robôs de processo em verdadeiros dragões digitais capazes de aprender e evoluir.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    author: "Mestre do Fogo",
    date: "15 Jan 2025",
    tag: "RPA",
    color: "fire-orange"
  },
  {
    id: "workflow-optimization",
    title: "Serpentes de Processo: Domando Workflows Complexos",
    description: "Técnicas avançadas para criar workflows que fluem como serpentes digitais através dos seus processos empresariais.",
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    author: "Domadora de Processos",
    date: "12 Jan 2025",
    tag: "Workflows",
    color: "circuit-blue"
  },
  {
    id: "development-trends",
    title: "Chamas de Código: Compilando o Futuro",
    description: "As tecnologias emergentes que estão redefinindo o desenvolvimento de sistemas e criando aplicações que respiram inovação.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    author: "Arquiteto das Chamas",
    date: "10 Jan 2025",
    tag: "Dev",
    color: "dragon-gold"
  }
];

function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.article
      ref={ref}
      className={`group bg-gray-800 rounded-xl border border-gray-700 hover:border-${post.color} transition-all duration-500 overflow-hidden hover:transform hover:scale-105 cursor-pointer`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dragon-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className={`font-code text-xs bg-${post.color}/20 text-${post.color} px-2 py-1 rounded mr-2`}>
            {post.tag}
          </span>
          <span className="font-inter text-xs text-gray-400">{post.date}</span>
        </div>

        <h3 className={`font-orbitron font-bold text-lg mb-3 text-${post.color} group-hover:text-white transition-colors`}>
          {post.title}
        </h3>

        <p className="font-inter text-gray-300 text-sm mb-4">
          {post.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <i className="fas fa-user-circle text-gray-400 mr-2"></i>
            <span className="font-inter text-xs text-gray-400">{post.author}</span>
          </div>

          <button className={`font-inter text-sm text-${post.color} hover:text-white transition-colors`}>
            Ler mais <i className="fas fa-arrow-right ml-1"></i>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="mt-16 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-dragon-gold/30 max-w-2xl mx-auto">
        <div className="mb-6">
          <motion.i
            className="fas fa-dragon text-dragon-gold text-4xl mb-4 animate-flame"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <h3 className="font-orbitron font-bold text-2xl mb-2 text-dragon-gold">Portal do Dragão</h3>
          <p className="font-inter text-gray-300">
            Receba manuscritos semanais com insights que alimentam as chamas da inovação
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu.email@reino.com"
            className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-dragon-gold focus:outline-none font-inter text-white placeholder-gray-400"
            required
          />

          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-dragon-gold to-fire-orange rounded-lg font-orbitron font-semibold hover-flame transition-all duration-300"
            disabled={isSubmitted}
          >
            {isSubmitted ? (
              <>
                <i className="fas fa-check mr-2"></i>
                Dragão Convocado!
              </>
            ) : (
              "Convocar Dragão"
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-900 to-dragon-dark relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6 text-gradient">
            Manuscritos do Dragão
          </h2>
          <p className="font-inter text-lg text-gray-300 max-w-2xl mx-auto">
            Conhecimento ancestral combinado com inovação moderna. Insights que alimentam as chamas da transformação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <NewsletterSignup />
      </div>
    </section>
  );
}
