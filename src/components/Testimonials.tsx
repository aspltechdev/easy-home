import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const { t } = useLanguage();
  const items = [t.testimonials.t1, t.testimonials.t2, t.testimonials.t3];

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground">{t.testimonials.sectionTitle}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-8 relative hover:shadow-gold-lg transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-accent/20 group-hover:bg-accent transition-colors" />
              <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors rotate-12" />
              <p className="text-base text-muted-foreground leading-relaxed mb-6 italic relative z-10">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm uppercase tracking-wide">{item.name}</p>
                  <p className="text-xs text-accent font-medium">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
