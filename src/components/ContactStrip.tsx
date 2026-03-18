import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const ContactStrip = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 lg:py-24 bg-primary/10 overflow-x-hidden">
      <div className="container mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-2">{t.contact.sectionTitle}</h2>
          <p className="text-xl font-semibold text-accent mb-4">{t.contact.subtitle}</p>
          <p className="text-muted-foreground mb-8">{t.contact.desc}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918919782135">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent font-bold shadow-gold gap-2 w-full sm:w-auto">
                <Phone className="w-5 h-5" /> {t.contact.call}
              </Button>
            </a>
            <a href="https://wa.me/918919782135?text=Hi%2C+I+need+help+with+your+services" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-whatsapp text-foreground hover:bg-whatsapp hover:text-whatsapp-foreground font-bold gap-2 w-full sm:w-auto">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.847 11.847 0 001.592 5.961L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.635 0 12.046-5.411 12.049-12.048a11.825 11.825 0 00-3.543-8.519" />
                </svg>
                {t.contact.whatsapp}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactStrip;
