import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative pt-[72px] lg:pt-24 bg-secondary flex items-center overflow-x-hidden">
      <div className="container mx-auto px-5 sm:px-8 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] text-foreground mb-6 break-words">
              {t.hero.h1}
            </h1>
            <p className="text-sm sm:text-lg font-bold text-accent mb-6 tracking-wide uppercase">{t.hero.sub}</p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0 font-medium">
              {t.hero.desc}
            </p>

            {/* Image in Mobile - Shows between Paragraph and Badges */}
            <div className="lg:hidden flex justify-center mb-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full max-w-[280px]"
              >
                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-border bg-white relative">
                  <img 
                    src="/69131-removebg-preview.png" 
                    alt="K. Praveen Kumar Reddy" 
                    className="w-full h-full object-cover object-top scale-[1.1] translate-y-2"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-4 text-center border-t-2 border-border">
                    <p className="font-bold text-foreground text-sm leading-tight">K. Praveen Kumar Reddy</p>
                    <p className="text-[10px] text-muted-foreground font-semibold mt-1">SABP — Partner</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 mb-10">
              {[t.hero.badge1, t.hero.badge3].map((badge, idx) => (
                <div 
                  key={badge} 
                  className={`flex items-center gap-3 text-xs sm:text-sm font-bold text-foreground bg-white rounded-2xl p-3 px-4 shadow-md border border-border group hover:border-black transition-all`}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <span className="leading-tight">{badge}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-2 sm:px-0">
              <Button size="lg" onClick={scrollToServices} className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-black hover:text-white font-bold shadow-xl gap-2 transition-all h-16 rounded-full px-8 text-lg">
                {t.hero.cta1} <ArrowRight className="w-5 h-5" />
              </Button>
              <a href="tel:+918919782135" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full bg-white text-foreground hover:bg-black hover:text-white font-bold shadow-xl gap-2 border-2 border-border h-16 transition-all rounded-full px-8 text-lg">
                  <Phone className="w-5 h-5" /> {t.hero.cta2}
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Desktop Image Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex flex-shrink-0 w-[320px] justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-border bg-white relative group hover:border-black transition-all"
            >
              <img 
                src="/69131-removebg-preview.png" 
                alt="K. Praveen Kumar Reddy" 
                className="w-full h-full object-cover object-top scale-[1.1] translate-y-2 transition-transform duration-500 group-hover:scale-[1.15]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-5 text-center border-t-2 border-border transform transition-transform duration-300">
                <p className="font-bold text-foreground text-base leading-tight">K. Praveen Kumar Reddy</p>
                <p className="text-[11px] text-muted-foreground font-semibold mt-1">SABP — State Authorised Business Partner</p>
                <p className="text-[11px] text-accent font-black uppercase tracking-widest mt-1.5">Founder, Easy Home Projects</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
