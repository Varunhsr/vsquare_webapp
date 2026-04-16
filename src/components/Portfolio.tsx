import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      name: "FinTech Pro",
      category: "Web Application",
      description: "A secure, real-time banking dashboard with advanced analytics.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "https://picsum.photos/seed/fintech/600/400",
    },
    {
      name: "HealthSync",
      category: "Mobile App",
      description: "Cross-platform health tracking app with wearable integration.",
      tech: ["React Native", "Firebase", "HealthKit"],
      image: "https://picsum.photos/seed/health/600/400",
    },
    {
      name: "EcoStore",
      category: "E-commerce",
      description: "Sustainable marketplace with AI-driven product recommendations.",
      tech: ["Next.js", "Shopify API", "Python"],
      image: "https://picsum.photos/seed/ecommerce/600/400",
    },
    {
      name: "CloudScale",
      category: "DevOps",
      description: "Automated infrastructure management for high-traffic platforms.",
      tech: ["Terraform", "Kubernetes", "Docker"],
      image: "https://picsum.photos/seed/devops/600/400",
    },
  ];

  return (
    <section id="portfolio" className="py-24 border-b border-border-dim">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-500 font-bold uppercase tracking-[3px] text-[11px] mb-4">Portfolio</h2>
            <h3 className="font-sans text-4xl font-extrabold text-text-main tracking-tighter">
              Selected Works.
            </h3>
          </div>
          <a href="#" className="text-brand-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:opacity-80 transition-opacity">
            View All <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 geometric-grid">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden bg-surface/20 p-10"
            >
              <div className="aspect-[16/9] overflow-hidden geometric-border mb-8">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex flex-col">
                <p className="text-brand-500 text-[10px] font-bold uppercase tracking-[2px] mb-2">{project.category}</p>
                <h4 className="text-xl font-bold text-text-main mb-3 tracking-tight">{project.name}</h4>
                <p className="text-text-dim text-sm mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-surface border border-border-dim text-[9px] font-bold text-text-dim uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
