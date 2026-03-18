import { useState, useMemo } from "react";
import { LanguageContext, translations, type Language } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactStrip from "@/components/ContactStrip";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  const [lang, setLang] = useState<Language>("en");
  const t = useMemo(() => translations[lang], [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactStrip />
      <Footer />
      <FloatingButtons />
    </LanguageContext.Provider>
  );
};

export default Index;
