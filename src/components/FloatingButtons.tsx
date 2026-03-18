import { Phone } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const FloatingButtons = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-5 items-end"
        >
          {/* Call Button */}
          <div className="relative flex items-center group">
            <AnimatePresence>
              {hovered === 'call' && (
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="mr-3 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold shadow-xl whitespace-nowrap border border-white/20"
                >
                  Call Praveen
                </motion.span>
              )}
            </AnimatePresence>
            <a
              href="tel:+918919782135"
              onMouseEnter={() => setHovered('call')}
              onMouseLeave={() => setHovered(null)}
              aria-label="Call Easy Home Projects"
              className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-gold-lg hover:scale-110 active:scale-95 transition-all flex items-center justify-center animate-float border-2 border-white/20"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>

          {/* WhatsApp Button */}
          <div className="relative flex items-center group">
            <AnimatePresence>
              {hovered === 'whatsapp' && (
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="mr-3 bg-whatsapp text-whatsapp-foreground px-4 py-1.5 rounded-full text-xs font-bold shadow-xl whitespace-nowrap border border-white/20"
                >
                  WhatsApp Us
                </motion.span>
              )}
            </AnimatePresence>
            <a
              href="https://wa.me/918919782135?text=Hi%2C+I+need+help+with+your+services"
              onMouseEnter={() => setHovered('whatsapp')}
              onMouseLeave={() => setHovered(null)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Easy Home Projects on WhatsApp"
              className="w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center justify-center animate-float border-2 border-white/20"
              style={{ animationDelay: "1s" }}
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.847 11.847 0 001.592 5.961L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.635 0 12.046-5.411 12.049-12.048a11.825 11.825 0 00-3.543-8.519" />
              </svg>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingButtons;
