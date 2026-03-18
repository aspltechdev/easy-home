import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { Calendar, Users, Layers, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Calendar, title: t.why.stat1, desc: t.why.stat1desc },
    { icon: Users, title: t.why.stat2, desc: t.why.stat2desc },
    { icon: Layers, title: t.why.stat3, desc: t.why.stat3desc },
    { icon: Zap, title: t.why.stat4, desc: t.why.stat4desc },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground">{t.why.sectionTitle}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-xl bg-secondary/50 border border-border hover:shadow-gold-lg hover:bg-background hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 shadow-sm group-hover:rotate-[360deg] duration-700">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{stat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
