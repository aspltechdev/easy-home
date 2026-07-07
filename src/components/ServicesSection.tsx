// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useLanguage } from "@/lib/i18n";
// // import { services, type ServiceData } from "@/lib/services-data";
// // import ServiceModal from "./ServiceModal";
// // import { ArrowRight, Phone } from "lucide-react";
// // import { Button } from "@/components/ui/button";

// // const ServicesSection = () => {
// //   const { lang, t } = useLanguage();
// //   const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

// //   return (
// //     <>
// //       <section id="services" className="py-16 lg:py-24 bg-secondary overflow-x-hidden">
// //         <div className="container mx-auto px-5 sm:px-8">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-center mb-12"
// //           >
// //             <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-2">{t.services.sectionTitle}</h2>
// //             <p className="text-muted-foreground">{t.services.subtitle}</p>
// //           </motion.div>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
// //             {services.map((service, i) => {
// //               const Icon = service.icon;
// //               return (
// //                 <motion.div
// //                   key={service.id}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   whileHover={{ y: -8, scale: 1.01 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: i * 0.05 }}
// //                   onClick={() => {
// //                     setSelectedService(service);
// //                   }}
// //                   className={`bg-card rounded-xl border p-5 cursor-pointer transition-all duration-300 group relative flex flex-col h-full ${
// //                     service.id === "real-estate" 
// //                     ? "border-primary shadow-sm scale-[1.01] md:scale-102" 
// //                     : "border-border hover:border-black shadow-sm hover:shadow-md"
// //                   }`}
// //                 >
// //                   {service.id === "real-estate" && (
// //                     <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-background text-[10px] font-bold px-3 py-1 rounded-full shadow-md z-10 whitespace-nowrap uppercase tracking-widest flex items-center gap-1 animate-pulse">
// //                       <span className="w-1 h-1 rounded-full bg-background" />
// //                       Popular
// //                     </div>
// //                   )}
// //                   <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:rotate-6 transition-all duration-300 shadow-sm">
// //                     <Icon className="w-6 h-6 text-foreground" />
// //                   </div>
// //                   <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-black transition-colors line-clamp-2">
// //                     {lang === "en" ? service.titleEn : service.titleTe}
// //                   </h3>
// //                   <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-grow">
// //                     {lang === "en" ? service.descEn : service.descTe}
// //                   </p>
// //                   <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent group-hover:text-foreground transition-all duration-300 relative mt-auto">
// //                     {t.services.knowMore}
// //                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// //                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
// //                   </span>
// //                 </motion.div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </section>

// //       <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />

// //     </>
// //   );
// // };

// // export default ServicesSection;


// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLanguage } from "@/lib/i18n";
// import { services, financialPartners, type ServiceData } from "@/lib/services-data";
// import ServiceModal from "./ServiceModal";
// import { ArrowRight, Phone } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const ServicesSection = () => {
//   const { lang, t } = useLanguage();
//   const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

//   return (
//     <>
//       <section id="services" className="py-16 lg:py-24 bg-secondary overflow-x-hidden">
//         <div className="container mx-auto px-5 sm:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-2">{t.services.sectionTitle}</h2>
//             <p className="text-muted-foreground">{t.services.subtitle}</p>
//           </motion.div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
//             {services.map((service, i) => {
//               const Icon = service.icon;
//               return (
//                 <motion.div
//                   key={service.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   whileHover={{ y: -8, scale: 1.01 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.05 }}
//                   onClick={() => {
//                     setSelectedService(service);
//                   }}
//                   className={`bg-card rounded-xl border p-5 cursor-pointer transition-all duration-300 group relative flex flex-col h-full ${
//                     service.id === "real-estate" 
//                     ? "border-primary shadow-sm scale-[1.01] md:scale-102" 
//                     : "border-border hover:border-black shadow-sm hover:shadow-md"
//                   }`}
//                 >
//                   {service.id === "real-estate" && (
//                     <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-background text-[10px] font-bold px-3 py-1 rounded-full shadow-md z-10 whitespace-nowrap uppercase tracking-widest flex items-center gap-1 animate-pulse">
//                       <span className="w-1 h-1 rounded-full bg-background" />
//                       Popular
//                     </div>
//                   )}
//                   <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:rotate-6 transition-all duration-300 shadow-sm">
//                     <Icon className="w-6 h-6 text-foreground" />
//                   </div>
//                   <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-black transition-colors line-clamp-2">
//                     {lang === "en" ? service.titleEn : service.titleTe}
//                   </h3>
//                   <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-grow">
//                     {lang === "en" ? service.descEn : service.descTe}
//                   </p>
//                   <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent group-hover:text-foreground transition-all duration-300 relative mt-auto">
//                     {t.services.knowMore}
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
//                   </span>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Financial Partners Marquee */}
//           <div className="mt-16">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mb-8"
//             >
//               <h3 className="text-xl lg:text-2xl font-bold text-foreground">
//                 {lang === "en" ? "Our Financial Partners" : "మా ఆర్థిక భాగస్వాములు"}
//               </h3>
//               <p className="text-muted-foreground text-sm">
//                 {lang === "en" ? "Trusted by leading financial institutions" : "ప్రముఖ ఆర్థిక సంస్థలచే విశ్వసించబడింది"}
//               </p>
//             </motion.div>

//             <div className="w-full overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 py-6 border-y border-blue-100 dark:border-gray-700 rounded-xl">
//               <div className="relative flex overflow-x-hidden">
//                 <div className="animate-marquee whitespace-nowrap flex items-center">
//                   {financialPartners.map((partner, index) => (
//                     <span key={index} className="mx-8 text-lg font-medium text-gray-700 dark:text-gray-300">
//                       {partner}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
//                   {financialPartners.map((partner, index) => (
//                     <span key={`dup-${index}`} className="mx-8 text-lg font-medium text-gray-700 dark:text-gray-300">
//                       {partner}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
//     </>
//   );
// };

// export default ServicesSection;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { services, financialPartners, type ServiceData } from "@/lib/services-data";
import ServiceModal from "./ServiceModal";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const { lang, t } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  return (
    <>
      <section id="services" className="py-16 lg:py-24 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-2">{t.services.sectionTitle}</h2>
            <p className="text-muted-foreground">{t.services.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    setSelectedService(service);
                  }}
                  className={`bg-card rounded-xl border p-5 cursor-pointer transition-all duration-300 group relative flex flex-col h-full ${
                    service.id === "real-estate" 
                    ? "border-primary shadow-sm scale-[1.01] md:scale-102" 
                    : "border-border hover:border-black shadow-sm hover:shadow-md"
                  }`}
                >
                  {service.id === "real-estate" && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-background text-[10px] font-bold px-3 py-1 rounded-full shadow-md z-10 whitespace-nowrap uppercase tracking-widest flex items-center gap-1 animate-pulse">
                      <span className="w-1 h-1 rounded-full bg-background" />
                      Popular
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-black transition-colors line-clamp-2">
                    {lang === "en" ? service.titleEn : service.titleTe}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-grow">
                    {lang === "en" ? service.descEn : service.descTe}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent group-hover:text-foreground transition-all duration-300 relative mt-auto">
                    {t.services.knowMore}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Financial Partners Marquee */}
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                {lang === "en" ? "Our Financial Partners" : "మా ఆర్థిక భాగస్వాములు"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {lang === "en" ? "Trusted by leading financial institutions" : "ప్రముఖ ఆర్థిక సంస్థలచే విశ్వసించబడింది"}
              </p>
            </motion.div>

            {/* Working Marquee */}
            <div className="marquee-container">
              <div className="marquee-track">
                {financialPartners.map((partner, index) => (
                  <span key={index} className="marquee-item">
                    {partner}
                  </span>
                ))}
                {/* Duplicate for seamless loop */}
                {financialPartners.map((partner, index) => (
                  <span key={`dup-${index}`} className="marquee-item">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </>
  );
};

export default ServicesSection;