import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-foreground cursor-pointer" onClick={() => scrollTo("hero")}>
            Easy Home <span className="text-gradient-gold">Projects</span>
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 relative">
          <button onClick={() => scrollTo("hero")} className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-all hover:translate-y-[-1px]">{t.nav.home}</button>
          <button onClick={() => scrollTo("about")} className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-all hover:translate-y-[-1px]">{t.nav.about}</button>
          
          <div 
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            className="h-full flex items-center"
          >
            <button 
              onClick={() => scrollTo("services")}
              className="flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-foreground transition-all hover:translate-y-[-1px]"
            >
              {t.nav.services} <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, y: 15, x: "-50%" }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-12 left-1/2 w-[600px] pt-4"
                >
                  <div className="bg-background border border-border rounded-2xl shadow-2xl overflow-hidden p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
                    <div className="grid grid-cols-2 gap-x-10 gap-y-1 relative z-10">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => {
                            scrollTo("services");
                            setDropdownOpen(false);
                          }}
                          className="flex items-center gap-4 w-full text-left px-4 py-3 rounded-xl transition-all group border border-transparent hover:border-foreground"
                        >
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:rotate-6 transition-all shadow-sm">
                            <service.icon className="w-6 h-6 text-foreground" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[14px] font-bold text-foreground group-hover:text-black transition-colors">
                              {lang === "en" ? service.titleEn : service.titleTe}
                            </span>
                            <span className="text-[11px] text-muted-foreground line-clamp-1">Expert financial guidance</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={() => scrollTo("contact")} className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-all hover:translate-y-[-1px]">{t.nav.contact}</button>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "te" : "en")}
            className="text-xs font-bold px-4 py-2 rounded-full border-2 border-primary/20 bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm active:scale-95"
          >
            {lang === "en" ? "తెలుగు" : "EN"}
          </button>
          <a href="tel:+918919782135">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-accent font-bold shadow-gold gap-1.5 px-5 rounded-full transition-all hover:scale-105 active:scale-95">
              <Phone className="w-3.5 h-3.5" />
              {t.nav.call}
            </Button>
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "te" : "en")}
            className="text-[10px] font-bold px-3 py-1.5 rounded-full border border-primary/30 bg-secondary text-foreground active:scale-95 transition-transform"
          >
            {lang === "en" ? "తెలుగు" : "EN"}
          </button>
          <button 
            onClick={() => setOpen(!open)} 
            className="p-2 transition-transform active:rotate-90 duration-200"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border px-4 pb-6 space-y-2 overflow-hidden shadow-inner"
          >
            <div className="flex flex-col gap-1 pt-2">
              <button onClick={() => scrollTo("hero")} className="w-full text-left text-sm font-bold py-3 px-4 text-foreground hover:bg-secondary rounded-xl active:scale-95 transition-all">{t.nav.home}</button>
              <button onClick={() => scrollTo("about")} className="w-full text-left text-sm font-bold py-3 px-4 text-foreground hover:bg-secondary rounded-xl active:scale-95 transition-all">{t.nav.about}</button>
              
              <div className="flex flex-col">
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)} 
                  className={`flex items-center justify-between w-full text-left text-sm font-bold py-3 px-4 rounded-xl active:scale-95 transition-all ${mobileServicesOpen ? 'bg-secondary/80 text-primary' : 'text-foreground hover:bg-secondary'}`}
                >
                  {t.nav.services}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden bg-secondary/30 rounded-xl mx-2 mb-2"
                    >
                      <div className="grid grid-cols-1 gap-1 py-2 px-2">
                        {services.map(s => (
                          <button 
                            key={s.id} 
                            onClick={() => scrollTo("services")}
                            className="text-[12px] font-semibold text-muted-foreground hover:text-foreground py-2.5 px-3 flex items-center gap-3 rounded-lg hover:bg-background/50 transition-colors"
                          >
                            <s.icon className="w-4 h-4 text-accent" />
                            {lang === 'en' ? s.titleEn : s.titleTe}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button onClick={() => scrollTo("contact")} className="w-full text-left text-sm font-bold py-3 px-4 text-foreground hover:bg-secondary rounded-xl active:scale-95 transition-all">{t.nav.contact}</button>
            </div>
            <a href="tel:+918919782135" className="block pt-2">
              <Button size="sm" className="w-full bg-primary text-primary-foreground font-bold gap-2 py-6 rounded-xl shadow-gold shadow-sm">
                <Phone className="w-4 h-4" />
                {t.nav.call}
              </Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
