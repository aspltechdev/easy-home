import { createContext, useContext } from "react";

export type Language = "en" | "te";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      contact: "Contact",
      cta: "Get Free Consultation",
      call: "89197 82135",
    },
    hero: {
      h1: "Trusted Financial & Legal Services in Kadapa, Andhra Pradesh",
      sub: "Loans · Insurance · Tax Filing · Company Registration · Real Estate",
      desc: "Easy Home Projects, led by K. Praveen Kumar Reddy (SABP), helps you with PMEGP loans, HDFC Life Insurance, Care Health Insurance, GST registration, income tax filing, and company registration — all in one place. Serving Kadapa and Gooty for over 10 years.",
      badge1: "1000+ Happy Clients",
      badge2: "10+ Years Experience",
      badge3: "HDFC & Care Partner",
      cta1: "Explore Our Services",
      cta2: "Call: 89197 82135",
    },
    about: {
      sectionTitle: "Meet K. Praveen Kumar Reddy",
      subtitle: "Your Financial Expert in Kadapa",
      p1: "K. Praveen Kumar Reddy is the founder of Easy Home Projects and a State Authorised Business Partner (SABP). He is an officially empanelled advisor for HDFC Life Insurance and Care Health Insurance in Andhra Pradesh.",
      p2: "With over 10 years of experience, Praveen has helped more than 1,000 clients get PMEGP loans, Mudra loans, GST registrations, company registrations, and tax filings done quickly and correctly.",
      cta: "Read Our Full Story →",
    },
    services: {
      sectionTitle: "Our Services",
      subtitle: "Everything You Need in One Place",
      knowMore: "Know More",
      applyNow: "Apply Now",
      askWhatsapp: "Ask Praveen via WhatsApp",
      eligibility: "Eligibility",
      documents: "Documents Required",
      contactDirectly: "Contact Praveen Directly",
    },
    why: {
      sectionTitle: "Why Choose Us",
      stat1: "10+ Years of Experience",
      stat1desc: "Serving individuals and businesses across Kadapa and Gooty since over a decade.",
      stat2: "1000+ Happy Clients",
      stat2desc: "Hundreds of clients trust Praveen for loans, tax filing, and company registration.",
      stat3: "All Services Under One Roof",
      stat3desc: "Loans, insurance, tax, company registration, real estate — no need to go anywhere else.",
      stat4: "Fast & Hassle-Free",
      stat4desc: "Praveen personally handles each case — quick processing, zero unnecessary delays.",
    },
    testimonials: {
      sectionTitle: "What Our Clients Say",
      t1: { name: "Ravi Kumar", location: "Kadapa", text: "Praveen sir got my PMEGP loan approved in under 3 weeks. He handled the project report, bank visits, everything. Excellent service." },
      t2: { name: "Sunitha Reddy", location: "Gooty", text: "I was totally confused about GST. They explained everything clearly and my filing has been on time ever since. Highly recommended." },
      t3: { name: "Mohammed Iqbal", location: "Kadapa", text: "Registered my Pvt Ltd company in less than 2 weeks. Professional, affordable, and very knowledgeable. Will definitely use again." },
    },
    contact: {
      sectionTitle: "Ready to Get Started?",
      subtitle: "Let's Talk Today!",
      desc: "Call Praveen now or send a WhatsApp message. We respond quickly and guide you for free — no charges for consultation.",
      call: "Call: 89197 82135",
      whatsapp: "WhatsApp: 89197 82135",
    },
    footer: {
      tagline: "Trusted Financial & Legal Partner in Kadapa & Gooty, Andhra Pradesh",
      quickLinks: "Quick Links",
      headOffice: "Head Office",
      branchOffice: "Branch Office",
      headAddr: "D.No. 42/350-1, Jayanagar Colony, Kadapa – 516002",
      branchAddr: "Khaja Complex, Ananthapur Road, Gooty – 515401",
      phone1: "89197 82135",
      phone2: "89197 82135",
      copyright: "© 2026 Easy Home Projects. All rights reserved.",
      seoText: "Financial services, GST registration, PMEGP loans, income tax filing, company registration, and insurance in Kadapa and Andhra Pradesh.",
      founder: "Founded by K. Praveen Kumar Reddy (SABP)",
    },
  },
  te: {
    nav: {
      home: "ఇల్లు",
      about: "మా గురించి",
      services: "సేవలు",
      contact: "సంప్రదించు",
      cta: "ఉచిత సలహా పొందండి",
      call: "89197 82135",
    },
    hero: {
      h1: "కడప, ఆంధ్ర ప్రదేశ్‌లో నమ్మకమైన ఆర్థిక & చట్టపరమైన సేవలు",
      sub: "రుణాలు · బీమా · పన్ను దాఖలు · కంపెనీ రిజిస్ట్రేషన్ · రియల్ ఎస్టేట్",
      desc: "ఈజీ హోమ్ ప్రాజెక్ట్స్, K. ప్రవీణ్ కుమార్ రెడ్డి (SABP) నేతృత్వంలో, PMEGP రుణాలు, HDFC లైఫ్ ఇన్సూరెన్స్, కేర్ హెల్త్ ఇన్సూరెన్స్, GST రిజిస్ట్రేషన్, ఆదాయపు పన్ను దాఖలు మరియు కంపెనీ రిజిస్ట్రేషన్ — అన్నీ ఒకే చోట. కడప మరియు గూటీలో 10 సంవత్సరాలకు పైగా సేవ.",
      badge1: "1000+ సంతోషకరమైన ఖాతాదారులు",
      badge2: "10+ సంవత్సరాల అనుభవం",
      badge3: "HDFC & కేర్ భాగస్వామి",
      cta1: "మా సేవలను చూడండి",
      cta2: "కాల్: 89197 82135",
    },
    about: {
      sectionTitle: "K. ప్రవీణ్ కుమార్ రెడ్డిని కలవండి",
      subtitle: "కడపలో మీ ఆర్థిక నిపుణుడు",
      p1: "K. ప్రవీణ్ కుమార్ రెడ్డి ఈజీ హోమ్ ప్రాజెక్ట్స్ వ్యవస్థాపకుడు మరియు స్టేట్ ఆథరైజ్డ్ బిజినెస్ పార్ట్‌నర్ (SABP). ఆంధ్ర ప్రదేశ్‌లో HDFC లైఫ్ ఇన్సూరెన్స్ మరియు కేర్ హెల్త్ ఇన్సూరెన్స్ కోసం అధికారికంగా ఎంపనెల్ చేయబడిన సలహాదారు.",
      p2: "10 సంవత్సరాలకు పైగా అనుభవంతో, ప్రవీణ్ 1,000 కంటే ఎక్కువ మంది ఖాతాదారులకు PMEGP రుణాలు, ముద్ర రుణాలు, GST రిజిస్ట్రేషన్లు, కంపెనీ రిజిస్ట్రేషన్లు మరియు పన్ను దాఖలులు త్వరగా మరియు సరిగ్గా చేయడంలో సహాయం చేశారు.",
      cta: "మా పూర్తి కథ చదవండి →",
    },
    services: {
      sectionTitle: "మా సేవలు",
      subtitle: "అన్నీ ఒకే చోట",
      knowMore: "మరింత తెలుసుకోండి",
      applyNow: "ఇప్పుడు దరఖాస్తు చేయండి",
      askWhatsapp: "ప్రవీణ్‌ని WhatsApp ద్వారా అడగండి",
      eligibility: "అర్హత",
      documents: "అవసరమైన పత్రాలు",
      contactDirectly: "ప్రవీణ్‌ని నేరుగా సంప్రదించండి",
    },
    why: {
      sectionTitle: "మమ్మల్ని ఎందుకు ఎంచుకోవాలి",
      stat1: "10+ సంవత్సరాల అనుభవం",
      stat1desc: "దశాబ్దానికి పైగా కడప మరియు గూటీలో వ్యక్తులు మరియు వ్యాపారాలకు సేవ.",
      stat2: "1000+ సంతోషకరమైన ఖాతాదారులు",
      stat2desc: "వందలాది మంది ఖాతాదారులు రుణాలు, పన్ను దాఖలు మరియు కంపెనీ రిజిస్ట్రేషన్ కోసం ప్రవీణ్‌ను నమ్ముతారు.",
      stat3: "ఒకే చోట అన్ని సేవలు",
      stat3desc: "రుణాలు, బీమా, పన్ను, కంపెనీ రిజిస్ట్రేషన్, రియల్ ఎస్టేట్ — మరెక్కడికీ వెళ్ళవలసిన అవసరం లేదు.",
      stat4: "వేగంగా & ఇబ్బంది లేకుండా",
      stat4desc: "ప్రవీణ్ ప్రతి కేసును వ్యక్తిగతంగా నిర్వహిస్తారు — వేగవంతమైన ప్రాసెసింగ్, అనవసరమైన ఆలస్యాలు శూన్యం.",
    },
    testimonials: {
      sectionTitle: "మా ఖాతాదారులు ఏమంటున్నారు",
      t1: { name: "రవి కుమార్", location: "కడప", text: "ప్రవీణ్ సర్ నా PMEGP రుణాన్ని 3 వారాల్లో ఆమోదించారు. ప్రాజెక్ట్ రిపోర్ట్, బ్యాంక్ సందర్శనలు, అన్నీ నిర్వహించారు. అద్భుతమైన సేవ." },
      t2: { name: "సునీత రెడ్డి", location: "గూటీ", text: "నాకు GST గురించి పూర్తిగా అయోమయంగా ఉంది. వారు అన్నింటినీ స్పష్టంగా వివరించారు. అత్యంత సిఫార్సు చేయబడింది." },
      t3: { name: "మొహమ్మద్ ఇక్బాల్", location: "కడప", text: "నా Pvt Ltd కంపెనీని 2 వారాల్లో రిజిస్టర్ చేశారు. ప్రొఫెషనల్, అందుబాటులో ఉన్న ధరలు, చాలా జ్ఞానవంతులు." },
    },
    contact: {
      sectionTitle: "ప్రారంభించడానికి సిద్ధంగా ఉన్నారా?",
      subtitle: "ఈ రోజే మాట్లాడండి!",
      desc: "ప్రవీణ్‌కు ఇప్పుడు కాల్ చేయండి లేదా WhatsApp సందేశం పంపండి. మేము త్వరగా స్పందిస్తాము మరియు ఉచితంగా మార్గదర్శనం చేస్తాము.",
      call: "కాల్: 89197 82135",
      whatsapp: "WhatsApp: 89197 82135",
    },
    footer: {
      tagline: "కడప & గూటీ, ఆంధ్ర ప్రదేశ్‌లో నమ్మకమైన ఆర్థిక & చట్టపరమైన భాగస్వామి",
      quickLinks: "త్వరిత లింక్‌లు",
      headOffice: "ప్రధాన కార్యాలయం",
      branchOffice: "శాఖ కార్యాలయం",
      headAddr: "D.No. 42/350-1, జయనగర్ కాలనీ, కడప – 516002",
      branchAddr: "ఖాజా కాంప్లెక్స్, అనంతపూర్ రోడ్, గూటీ – 515401",
      phone1: "89197 82135",
      phone2: "89197 82135",
      copyright: "© 2026 ఈజీ హోమ్ ప్రాజెక్ట్స్. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.",
      seoText: "కడప మరియు ఆంధ్ర ప్రదేశ్‌లో ఆర్థిక సేవలు, GST రిజిస్ట్రేషన్, PMEGP రుణాలు, ఆదాయపు పన్ను దాఖలు, కంపెనీ రిజిస్ట్రేషన్ మరియు బీమా.",
      founder: "K. ప్రవీణ్ కుమార్ రెడ్డి (SABP) స్థాపించారు",
    },
  },
};

export type Translations = typeof translations.en;

export const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export const useLanguage = () => useContext(LanguageContext);
