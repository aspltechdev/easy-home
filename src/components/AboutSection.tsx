import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { Award, Users, Briefcase } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 lg:py-24 bg-background overflow-x-hidden">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">About Us</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex-shrink-0 w-64 h-80 rounded-2xl bg-secondary border-2 border-border overflow-hidden shadow-xl relative group hover:border-black transition-all"
            >
              <img 
                src="/69131-removebg-preview.png" 
                alt="K. Praveen Kumar Reddy" 
                className="w-full h-full object-cover object-top scale-[1.15] translate-y-2 transition-transform duration-500 group-hover:scale-[1.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <motion.div whileHover={{ scale: 1.1 }} className="bg-background/90 backdrop-blur-md p-2 rounded-xl border border-primary/20 shadow-md">
                  <Award className="w-5 h-5 text-accent" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="bg-background/90 backdrop-blur-md p-2 rounded-xl border border-primary/20 shadow-md">
                  <Users className="w-5 h-5 text-accent" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="bg-background/90 backdrop-blur-md p-2 rounded-xl border border-primary/20 shadow-md">
                  <Briefcase className="w-5 h-5 text-accent" />
                </motion.div>
              </div>
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{t.about.sectionTitle}</h3>
              <p className="text-accent font-bold mb-4 uppercase tracking-wider text-sm">{t.about.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-base">{t.about.p1}</p>
              <p className="text-muted-foreground leading-relaxed mb-5 text-base">{t.about.p2}</p>
              {/* CTA removed as per user request */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
