import { useLanguage } from "@/lib/i18n";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12 overflow-x-hidden">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Easy Home <span className="text-primary">Projects</span></h3>
            <p className="text-sm text-background/70">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-sm">{t.footer.quickLinks}</h4>
            <div className="space-y-2">
              {["hero", "about", "services", "contact"].map((id) => (
                <button key={id} onClick={() => scrollTo(id)} className="block text-sm text-background/70 hover:text-primary transition-colors capitalize">
                  {id === "hero" ? t.nav.home : id === "about" ? t.nav.about : id === "services" ? t.nav.services : t.nav.contact}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-sm">{t.footer.headOffice}</h4>
            <div className="space-y-3">
              <p className="text-sm text-background/70 flex gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {t.footer.headAddr}
              </p>
              <div className="w-full h-32 rounded-lg overflow-hidden border border-background/10">
                <iframe
                  title="Head Office Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps?q=D.No.+42/350-1,+Jayanagar+Colony,+Kadapa+-+516002&output=embed"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <h4 className="font-bold mt-4 mb-2 text-sm">{t.footer.branchOffice}</h4>
            <p className="text-sm text-background/70 flex gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              {t.footer.branchAddr}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-sm">Contact</h4>
            <p className="text-sm text-background/70 flex items-center gap-2 mb-2"><Phone className="w-4 h-4" />{t.footer.phone1}</p>
            <p className="text-sm text-background/70 flex items-center gap-2">
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.847 11.847 0 001.592 5.961L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.635 0 12.046-5.411 12.049-12.048a11.825 11.825 0 00-3.543-8.519" />
              </svg>
              {t.footer.phone2} (WhatsApp)
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6">
          <p className="text-xs text-background/50 text-center mb-1">{t.footer.seoText}</p>
          <p className="text-xs text-background/50 text-center mb-1">{t.footer.founder}</p>
          <p className="text-xs text-background/40 text-center">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
