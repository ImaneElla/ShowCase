"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "fr" | "ar";


export interface Translations {
  // Navbar
  nav_home: string;
  nav_about: string;
  nav_contact: string;
  nav_hire: string;
  // Hero
  hero_scroll: string;
  hero_subtitle: string;
  hero_heading1: string;
  hero_name: string;
  hero_description: string;
  hero_based: string;
  hero_cta: string;
  hero_years: string;
  hero_years_label: string;
  hero_projects: string;
  hero_projects_label: string;
  hero_dedication: string;
  hero_dedication_label: string;
  // About
  about_tag: string;
  about_heading: string;
  about_bio: string;
  about_cta: string;
  about_value1_title: string;
  about_value1_desc: string;
  about_value2_title: string;
  about_value2_desc: string;
  about_value3_title: string;
  about_value3_desc: string;
  about_toolkit: string;
  // Footer
  footer_tag: string;
  footer_heading: string;
  footer_cta: string;
  footer_rights: string;
}

const translations: Record<Language, Translations> = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_contact: "Contact",
    nav_hire: "Hire Me",
    hero_scroll: "Scroll",
    hero_subtitle: "Software Engineering & Visual Design",
    hero_heading1: "Hello, I am",
    hero_name: "Imane",
    hero_description:
      "I'm a technology enthusiast. I specialize in crafting seamless digital experiences that blend form and function.",
    hero_based: "Based in Casablanca · Open to new projects",
    hero_cta: "Explore More",
    hero_years: "3+",
    hero_years_label: "Years Exp.",
    hero_projects: "20+",
    hero_projects_label: "Projects",
    hero_dedication: "100%",
    hero_dedication_label: "Dedication",
    about_tag: "The Story",
    about_heading: "Sculpting visual poetry into flowing digital experiences.",
    about_bio:
      "Hi there, I'm Imane — a modern full-stack developer and digital stylist who views software through an editorial lens. I curate interfaces where elegant layouts flawlessly embrace rigorous architectural logic. Deeply inspired by high-fashion aesthetics, structural minimalism, and contemporary art, I translate complex technical problems into interfaces that feel incredibly effortless, intentional, and clean.",
    about_cta: "Initiate a Spark",
    about_value1_title: "Aesthetic-First Architecture",
    about_value1_desc:
      "Code and couture share a secret: true beauty lives in structural elegance before decoration.",
    about_value2_title: "Detail-Obsessed Curation",
    about_value2_desc:
      "Chasing the flawless placement of every pixel, because micromoments form lasting impressions.",
    about_value3_title: "Continuous Evolution",
    about_value3_desc:
      "Constantly expanding my creative and technical vocabulary, transforming cutting-edge tools into seamless user realities.",
    about_toolkit: "The Toolkit",
    footer_tag: "Let's Create Together",
    footer_heading: "Have a project in mind?",
    footer_cta: "Send Message",
    footer_rights: "All rights reserved.",
  },
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_contact: "Contact",
    nav_hire: "Me recruter",
    hero_scroll: "Défiler",
    hero_subtitle: "Ingénierie Logicielle & Design Visuel",
    hero_heading1: "Bonjour, je suis",
    hero_name: "Imane",
    hero_description:
      "Passionnée de technologie, je me spécialise dans la création d'expériences numériques fluides alliant forme et fonction.",
    hero_based: "Basée à Casablanca · Ouverte aux nouveaux projets",
    hero_cta: "En savoir plus",
    hero_years: "3+",
    hero_years_label: "Ans d'exp.",
    hero_projects: "20+",
    hero_projects_label: "Projets",
    hero_dedication: "100%",
    hero_dedication_label: "Dédication",
    about_tag: "Mon Histoire",
    about_heading:
      "Sculpter la poésie visuelle en expériences numériques fluides.",
    about_bio:
      "Bonjour, je suis Imane — développeuse full-stack moderne et styliste digitale qui perçoit le logiciel à travers un prisme éditorial. Je compose des interfaces où des mises en page élégantes épousent parfaitement une logique architecturale rigoureuse. Profondément inspirée par l'esthétique de la haute couture, le minimalisme structurel et l'art contemporain, je traduis des problèmes techniques complexes en interfaces qui semblent incroyablement fluides, intentionnelles et épurées.",
    about_cta: "Démarrer un projet",
    about_value1_title: "Architecture Esthétique",
    about_value1_desc:
      "Code et couture partagent un secret : la vraie beauté réside dans l'élégance structurelle avant la décoration.",
    about_value2_title: "Curation Méticuleuse",
    about_value2_desc:
      "À la poursuite du placement parfait de chaque pixel, car les micromoments forment des impressions durables.",
    about_value3_title: "Évolution Continue",
    about_value3_desc:
      "J'élargis constamment mon vocabulaire créatif et technique, transformant les outils de pointe en réalités utilisateurs fluides.",
    about_toolkit: "La Boîte à Outils",
    footer_tag: "Créons Ensemble",
    footer_heading: "Vous avez un projet en tête ?",
    footer_cta: "Envoyer un message",
    footer_rights: "Tous droits réservés.",
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "عني",
    nav_contact: "تواصل",
    nav_hire: "توظيفي",
    hero_scroll: "تمرير",
    hero_subtitle: "هندسة البرمجيات والتصميم البصري",
    hero_heading1: "مرحباً، أنا",
    hero_name: "إيمان",
    hero_description:
      "شغوفة بالتكنولوجيا، متخصصة في صنع تجارب رقمية سلسة تجمع بين الشكل والوظيفة.",
    hero_based: "مقيمة في الدار البيضاء · مفتوحة لمشاريع جديدة",
    hero_cta: "اكتشف المزيد",
    hero_years: "+3",
    hero_years_label: "سنوات خبرة",
    hero_projects: "+20",
    hero_projects_label: "مشروع",
    hero_dedication: "100%",
    hero_dedication_label: "تفانٍ",
    about_tag: "قصتي",
    about_heading: "نحت القصائد البصرية في تجارب رقمية متدفقة.",
    about_bio:
      "مرحباً، أنا إيمان — مطوّرة full-stack عصرية ومصمّمة رقمية ترى البرمجيات من خلال منظور افتتاحي. أصمّم واجهات تجمع بين التخطيط الأنيق والمنطق المعماري الصارم. مستوحاة بعمق من جماليات الموضة الراقية، والتبسيط البنيوي، والفن المعاصر، أترجم المشكلات التقنية المعقدة إلى واجهات تبدو سلسة ومقصودة ونظيفة.",
    about_cta: "ابدأ مشروعاً",
    about_value1_title: "معمارية جمالية أولاً",
    about_value1_desc:
      "البرمجة والأزياء الراقية تتشاركان سراً: الجمال الحقيقي يسكن في الأناقة البنيوية قبل الزخرفة.",
    about_value2_title: "تنسيق مهووس بالتفاصيل",
    about_value2_desc:
      "أسعى لتحقيق التموضع المثالي لكل بكسل، لأن اللحظات الدقيقة تترك انطباعات دائمة.",
    about_value3_title: "تطور مستمر",
    about_value3_desc:
      "أوسّع باستمرار مفرداتي الإبداعية والتقنية، محوّلةً أحدث الأدوات إلى تجارب مستخدم سلسة.",
    about_toolkit: "أدوات العمل",
    footer_tag: "لنبتكر معاً",
    footer_heading: "هل لديك مشروع في ذهنك؟",
    footer_cta: "إرسال رسالة",
    footer_rights: "جميع الحقوق محفوظة.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved && ["en", "fr", "ar"].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
  };

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language], isRTL }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}