import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CTO",
      company: "GlobalStream Inc.",
      content: "Vsquare transformed our legacy systems into a modern, cloud-native powerhouse. Their technical depth is unmatched.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Founder",
      company: "InnovateHub",
      content: "Working with Vsquare was a game-changer for our startup. They delivered a high-quality MVP in record time.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "TechFlow",
      content: "The UI/UX design team at Vsquare is incredible. They truly understood our vision and brought it to life beautifully.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 border-b border-border-dim">
      <div className="max-w-7xl mx-auto px-10">
        <div className="mb-16">
          <h2 className="text-brand-500 font-bold uppercase tracking-[3px] text-[11px] mb-4">Testimonials</h2>
          <h3 className="font-sans text-4xl font-extrabold text-text-main tracking-tighter">
            Client Feedback.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 geometric-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-surface/20 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-brand-500" />
                ))}
              </div>
              
              <p className="text-text-dim text-sm italic mb-8 leading-relaxed flex-grow">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-border-dim">
                <div className="w-10 h-10 geometric-border overflow-hidden bg-surface">
                  <img src={`https://picsum.photos/seed/${t.name}/100/100`} alt={t.name} className="grayscale" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-text-main text-sm font-bold">{t.name}</h4>
                  <p className="text-text-dim text-[10px] uppercase tracking-widest">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
