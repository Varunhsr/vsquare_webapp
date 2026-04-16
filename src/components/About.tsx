import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    "Expert Software Development",
    "Strategic IT Consulting",
    "Cloud-Native Architecture",
    "AI & Machine Learning Integration",
    "Agile Project Management",
    "Dedicated Support & Maintenance",
  ];

  return (
    <section id="about" className="py-24 border-b border-border-dim">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-0 geometric-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 flex flex-col justify-center"
          >
            <h2 className="text-brand-500 font-bold uppercase tracking-[3px] text-[11px] mb-4">About</h2>
            <h3 className="font-sans text-4xl font-extrabold text-text-main mb-6 tracking-tighter">
              Engineering Excellence.
            </h3>
            <p className="text-text-dim text-base mb-8 leading-relaxed">
              Vsquare Software Consultants LLP is a premier technology partner specializing in bespoke digital experiences. We bridge the gap between vision and reality through strategic consulting and expert engineering.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-500" />
                  <span className="text-text-main text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-surface/20 p-12 flex items-center justify-center"
          >
            <div className="w-full aspect-video geometric-border overflow-hidden">
              <img 
                src="https://picsum.photos/seed/engineering/800/450" 
                alt="Engineering" 
                className="w-full h-full object-cover grayscale opacity-60"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
