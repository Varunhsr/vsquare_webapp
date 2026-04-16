import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[60px] overflow-hidden border-b border-border-dim">
      <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-0 items-stretch min-h-[calc(100vh-60px)]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-24 lg:pr-20 lg:border-r border-border-dim flex flex-col justify-center"
        >
          <div className="text-brand-500 text-[11px] font-bold uppercase tracking-[3px] mb-4">
            Software Architecture & Consulting
          </div>
          
          <h1 className="font-sans text-5xl md:text-6xl font-extrabold text-text-main leading-[1.1] mb-8 tracking-tighter">
            Innovating Scalable Solutions for Modern Businesses.
          </h1>
          
          <p className="text-base text-text-dim mb-10 max-w-lg leading-relaxed">
            Vsquare Software Consultants LLP delivers high-performance cloud infrastructure, AI-driven analytics, and premium enterprise application development to help businesses lead in the digital era.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ opacity: 0.9 }}
              className="px-8 py-4 bg-brand-500 text-white font-bold text-sm transition-all"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#portfolio"
              className="px-8 py-4 border border-border-dim text-text-main font-bold text-sm transition-all hover:bg-white/5"
            >
              View Our Work
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:flex items-center justify-center p-20 bg-surface/30"
        >
          <div className="relative w-full aspect-square geometric-border overflow-hidden">
            <img 
              src="https://picsum.photos/seed/tech-minimal/800/800" 
              alt="Tech Minimal" 
              className="w-full h-full object-cover grayscale opacity-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-bg/20" />
            
            {/* Geometric accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-r border-b border-brand-500/30" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-l border-t border-brand-500/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
