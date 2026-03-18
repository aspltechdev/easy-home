import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import type { ServiceData } from "@/lib/services-data";
import { useEffect } from "react";

interface Props {
  service: ServiceData | null;
  onClose: () => void;
}

const ServiceModal = ({ service, onClose }: Props) => {
  const { lang, t } = useLanguage();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!service) return null;

  const title = lang === "en" ? service.titleEn : service.titleTe;
  const body = lang === "en" ? service.modalBodyEn : service.modalBodyTe;
  const eligibility = lang === "en" ? service.eligibilityEn : service.eligibilityTe;
  const documents = lang === "en" ? service.documentsEn : service.documentsTe;

  const phone = service.phone || "8919782135";
  const callLabel = lang === "en" 
    ? (service.customCallLabelEn || t.services.contactDirectly)
    : (service.customCallLabelTe || t.services.contactDirectly);
  const whatsappLabel = lang === "en"
    ? (service.customWhatsappLabelEn || t.services.askWhatsapp)
    : (service.customWhatsappLabelTe || t.services.askWhatsapp);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl font-bold text-foreground">{title}</h2>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-full hover:bg-secondary transition-colors">
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-5">{body}</p>

            {eligibility && (
              <div className="mb-4">
                <h3 className="text-sm font-bold text-foreground mb-1">{t.services.eligibility}</h3>
                <p className="text-sm text-muted-foreground">{eligibility}</p>
              </div>
            )}

            {documents && documents.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-bold text-foreground mb-2">{t.services.documents}</h3>
                <ul className="list-disc list-inside space-y-1">
                  {documents.map((doc) => (
                    <li key={doc} className="text-sm text-muted-foreground">{doc}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              {service.externalLink ? (
                <a href={service.externalLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-accent font-bold gap-2">
                    <ExternalLink className="w-4 h-4" /> {service.buttonLabel}
                  </Button>
                </a>
              ) : (
                <a href={`tel:+91${phone}`} className="flex-1">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-accent font-bold gap-2">
                    {service.phone && <Phone className="w-4 h-4" />} {callLabel}
                  </Button>
                </a>
              )}
              <a
                href={`https://wa.me/91${phone}?text=Hi%2C+I+need+help+with+your+services`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" className="w-full border-whatsapp text-foreground hover:bg-whatsapp hover:text-whatsapp-foreground font-bold gap-2">
                  <MessageCircle className="w-4 h-4" /> {whatsappLabel}
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceModal;
