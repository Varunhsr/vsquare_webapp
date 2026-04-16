import { motion } from "motion/react";
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Cpu, 
  Palette, 
  BarChart3 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Application Development",
      description: "Custom, high-performance web applications built with modern frameworks for maximum scalability.",
      icon: Globe,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions for iOS and Android that users love.",
      icon: Smartphone,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      title: "Cloud Solutions & DevOps",
      description: "Secure, scalable cloud infrastructure and automated deployment pipelines for modern businesses.",
      icon: Cloud,
      color: "text-brand-500",
      bg: "bg-brand-500/10",
    },
    {
      title: "AI & Machine Learning",
      description: "Integrating intelligent features and predictive analytics into your existing workflows.",
      icon: Cpu,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      title: "UI/UX Design",
      description: "User-centric design that combines aesthetic beauty with intuitive functionality.",
      icon: Palette,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
    },
    {
      title: "IT Consulting",
      description: "Strategic technology roadmaps to help you navigate the complex digital landscape.",
      icon: BarChart3,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
  ];

  return (
    <section id="services" className="py-24 border-b border-border-dim">
      <div className="max-w-7xl mx-auto px-10">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-500 font-bold uppercase tracking-[3px] text-[11px] mb-4"
          >
            Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-4xl font-extrabold text-text-main tracking-tighter"
          >
            Core Capabilities.
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 geometric-grid">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-10 bg-surface/20 group transition-all duration-300 hover:bg-surface/40"
            >
              <h4 className="text-sm font-bold text-brand-500 uppercase tracking-widest mb-4">{service.title}</h4>
              <p className="text-sm text-text-dim leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
