import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-b border-border-dim">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-[1fr_340px] gap-0 geometric-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 flex flex-col justify-center"
          >
            <h2 className="text-brand-500 font-bold uppercase tracking-[3px] text-[11px] mb-4">Contact</h2>
            <h3 className="font-sans text-4xl font-extrabold text-text-main mb-8 tracking-tighter">
              Start a Project.
            </h3>
            <p className="text-text-dim text-base mb-12 max-w-lg leading-relaxed">
              Vsquare Software Consultants LLP delivers high-performance cloud infrastructure and AI-driven analytics. Reach out to discuss your technical needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div>
                  <p className="text-text-main text-[11px] uppercase tracking-widest font-bold mb-1">Email</p>
                  <a href="mailto:info@vsquare.io" className="text-sm text-text-dim hover:text-brand-500 transition-colors">
                    info@vsquare.io
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div>
                  <p className="text-text-main text-[11px] uppercase tracking-widest font-bold mb-1">Phone</p>
                  <a href="tel:+918130789531" className="text-sm text-text-dim hover:text-brand-500 transition-colors">
                    +91-8130789531
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div>
                  <p className="text-text-main text-[11px] uppercase tracking-widest font-bold mb-1">Headquarters</p>
                  <p className="text-sm text-text-dim leading-snug">
                    Level 4, Tech Park, Gurugram, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-10 bg-surface/30 flex flex-col"
          >
            <div className="text-lg font-bold text-text-main mb-8">Inquiry Form</div>
            <form className="space-y-6 flex-grow" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-text-dim uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-surface border border-border-dim rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-text-dim uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@company.com"
                  className="w-full bg-surface border border-border-dim rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-text-dim uppercase tracking-widest">Project Scope</label>
                <textarea 
                  rows={3}
                  placeholder="Tell us about your technical needs..."
                  className="w-full bg-surface border border-border-dim rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ opacity: 0.9 }}
                className="w-full py-4 bg-brand-500 text-white font-bold text-sm transition-all"
              >
                Submit Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
