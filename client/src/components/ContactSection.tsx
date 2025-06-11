import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: "fas fa-building",
    title: "Endereço",
    content: "Rua dos Dragões, 1337 - Tech Valley",
    color: "dragon-gold"
  },
  {
    icon: "fas fa-phone",
    title: "Telefone",
    content: "+55 (11) 9999-DRAG",
    color: "circuit-green"
  },
  {
    icon: "fas fa-envelope",
    title: "Email",
    content: "contato@codedragon.tech",
    color: "fire-orange"
  }
];

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Dragão Despertado! 🐉",
        description: "Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        service: "",
        message: ""
      });
    }, 2000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div
      ref={ref}
      className="bg-gray-800 rounded-xl p-8 border border-gray-700"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="font-orbitron font-bold text-xl mb-6 text-fire-orange">
        <i className="fas fa-scroll mr-2"></i>
        Mensagem ao Dragão
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-inter text-sm font-medium text-gray-300 mb-2">
            Nome do Cavaleiro
          </label>
          <Input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Seu nome completo"
            className="bg-gray-700 border-gray-600 focus:border-fire-orange text-white placeholder-gray-400"
            required
          />
        </div>

        <div>
          <label className="block font-inter text-sm font-medium text-gray-300 mb-2">
            Reino (Empresa)
          </label>
          <Input
            type="text"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            placeholder="Nome da sua empresa"
            className="bg-gray-700 border-gray-600 focus:border-fire-orange text-white placeholder-gray-400"
            required
          />
        </div>

        <div>
          <label className="block font-inter text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="seu.email@reino.com"
            className="bg-gray-700 border-gray-600 focus:border-fire-orange text-white placeholder-gray-400"
            required
          />
        </div>

        <div>
          <label className="block font-inter text-sm font-medium text-gray-300 mb-2">
            Tipo de Magia Necessária
          </label>
          <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
            <SelectTrigger className="bg-gray-700 border-gray-600 focus:border-fire-orange text-white">
              <SelectValue placeholder="Selecione um serviço" />
            </SelectTrigger>
            <SelectContent className="bg-gray-700 border-gray-600">
              <SelectItem value="workflows">Workflows</SelectItem>
              <SelectItem value="automation">Automação</SelectItem>
              <SelectItem value="rpa">RPA</SelectItem>
              <SelectItem value="development">Desenvolvimento de Sistemas</SelectItem>
              <SelectItem value="consulting">Consultoria Completa</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block font-inter text-sm font-medium text-gray-300 mb-2">
            Mensagem ao Dragão
          </label>
          <Textarea
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Conte-nos sobre os desafios do seu reino..."
            className="bg-gray-700 border-gray-600 focus:border-fire-orange text-white placeholder-gray-400 h-24"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-gradient-to-r from-fire-orange to-fire-red rounded-lg font-orbitron font-bold text-lg hover-flame transition-all duration-300"
        >
          {isSubmitting ? (
            <>
              <motion.i
                className="fas fa-spinner mr-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              Despertando o Dragão...
            </>
          ) : (
            <>
              <i className="fas fa-fire mr-2"></i>
              Despertar o Dragão
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}

function ContactInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="space-y-8">
      <motion.div
        ref={ref}
        className="bg-gray-800 rounded-xl p-8 border border-gray-700"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="font-orbitron font-bold text-xl mb-6 text-circuit-blue">
          <i className="fas fa-map-marker-alt mr-2"></i>
          Localização da Caverna
        </h3>

        <div className="space-y-4">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <i className={`${info.icon} text-${info.color} mr-3`}></i>
              <div>
                <p className="font-inter font-medium">{info.title}</p>
                <p className="font-inter text-gray-400 text-sm">{info.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="bg-gray-800 rounded-xl p-8 border border-gray-700"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="font-orbitron font-bold text-xl mb-6 text-dragon-gold">
          <i className="fas fa-map mr-2"></i>
          Mapa da Caverna
        </h3>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300"
            alt="Modern tech office building aerial view representing CodeDragon headquarters"
            className="w-full h-48 object-cover rounded-lg"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-dragon-dark/60 to-transparent rounded-lg flex items-end">
            <div className="p-4 text-center w-full">
              <p className="font-code text-sm text-dragon-gold">
                <motion.i
                  className="fas fa-map-pin mr-1"
                  animate={{ y: [-5, 0, -5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                CodeDragon HQ
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6 text-gradient">
            Caverna do Dragão
          </h2>
          <p className="font-inter text-lg text-gray-300 max-w-2xl mx-auto">
            Entre na nossa caverna digital e desperte o poder adormecido dos seus processos. O dragão aguarda seu chamado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
