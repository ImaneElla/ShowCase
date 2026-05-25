"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";


export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const { t, isRTL } = useLanguage();

  const stats = [
      { value: t.hero_years, label: t.hero_years_label },
      { value: t.hero_projects, label: t.hero_projects_label },
      { value: t.hero_dedication, label: t.hero_dedication_label },
    ];


  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Gold radial glows — sized for viewport */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(700px, 120vw)",
            height: "min(700px, 120vw)",
            background: "rgba(201,168,76,0.055)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute rounded-full hidden sm:block"
          style={{
            top: "20%", right: "15%",
            width: 280, height: 280,
            background: "rgba(160,120,48,0.07)",
            filter: "blur(70px)",
          }}
        />
      </div>

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px 160px",
        }}
      />

      {/* Side scroll indicator — desktop only */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-px h-28 origin-top"
          style={{ background: "linear-gradient(180deg, transparent, #c9a84c60, transparent)" }}
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-[#c9a84c]/40 text-[9px] tracking-[0.5em] uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          {t.hero_scroll}
        </motion.span>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-px h-16 origin-top"
          style={{ background: "linear-gradient(180deg, #c9a84c50, transparent)" }}
        />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 text-center px-5 sm:px-8 w-full max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] uppercase font-light whitespace-nowrap">
          {t.hero_subtitle}  
          </span>
          <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#c9a84c]" />
        </motion.div>

        {/* Name — fluid size */}
        <div className="overflow-hidden mb-1 sm:mb-2">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif leading-[0.88] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)" }}
          >
           {t.hero_heading1}
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6 sm:mb-8">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif leading-[0.88] tracking-[-0.02em] text-transparent bg-clip-text"
            style={{
              fontSize: "clamp(3.5rem, 16vw, 7.5rem)",
              backgroundImage: "linear-gradient(135deg, #c9a84c 0%, #f0d080 40%, #e8c060 60%, #a07830 100%)",
            }}
          >
            {t.hero_name}
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="text-[#656565] text-sm sm:text-base tracking-wide max-w-xs sm:max-w-md mx-auto leading-relaxed mb-8 sm:mb-12 font-light"
        >
          {t.hero_description}
          <br className="hidden sm:block" />
          <span className="sm:hidden "> </span>
          <br/> 
          <span className=" text-[9px] uppercase md:text-[10px] "> 
          {t.hero_based}
          </span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="relative w-50 md:w-auto xs:w-auto px-7 sm:px-9 py-3.5 rounded-full text-xs sm:text-sm tracking-[0.15em] uppercase text-black font-medium overflow-hidden text-center"
            style={{ background: "linear-gradient(135deg, #c9a84c 0%, #f0d080 50%, #a07830 100%)" }}
          >
          {t.hero_cta}
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 0.8 }}
          className="flex items-center justify-center gap-6 sm:gap-10 mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-[#c9a84c]/10"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="font-serif text-xl sm:text-2xl text-transparent bg-clip-text mb-0.5"
                style={{ backgroundImage: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
              >
                {s.value}
              </div>
              <div className="text-[#4a4a4a] text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}