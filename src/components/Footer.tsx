"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ImaneElla",
    letter: "GH",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/imane-ella",
    letter: "LN",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/imane.ella",
    letter: "IG",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "https://behance.net/imaneella",
    letter: "BE",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden>
        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.49.36-1.06.62-1.7.78-.65.17-1.32.25-2.02.25H0V4.51h6.938zM6.54 9.95c.586 0 1.07-.14 1.436-.42.366-.28.55-.73.55-1.36 0-.34-.06-.63-.18-.86-.12-.23-.29-.41-.5-.55-.21-.14-.45-.24-.72-.3-.27-.05-.56-.07-.86-.07H2.5v3.57l4.04-.01zm.21 5.56c.34 0 .65-.04.95-.1.29-.07.54-.18.76-.33.21-.16.38-.36.5-.61.12-.26.18-.58.18-.95 0-.76-.2-1.31-.6-1.64-.4-.33-.96-.49-1.66-.49H2.5v4.13h4.25zm11.43-1.12c.35.34.88.51 1.57.51.49 0 .91-.12 1.27-.37.36-.25.58-.52.67-.8h2.09c-.33 1.03-.84 1.77-1.52 2.21-.68.44-1.5.66-2.46.66-.67 0-1.27-.11-1.81-.32-.54-.21-1-.52-1.38-.92-.38-.4-.67-.88-.87-1.44-.2-.56-.3-1.17-.3-1.84 0-.65.1-1.25.31-1.8.2-.56.5-1.04.88-1.44.38-.4.84-.72 1.37-.94.53-.23 1.12-.34 1.77-.34.72 0 1.35.14 1.9.41.55.27 1 .64 1.36 1.11.36.47.62 1.01.78 1.62.16.6.22 1.24.18 1.9h-6.22c.03.77.25 1.35.6 1.69zM17.6 12.5c-.28-.3-.72-.45-1.3-.45-.37 0-.68.06-.93.2-.25.13-.45.3-.6.5-.15.2-.26.42-.32.65-.06.24-.1.46-.11.67h3.88c-.1-.67-.32-1.27-.62-1.57zM14.19 6.56h5.18v1.35h-5.18V6.56z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer
      id="contact"
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-24 px-5 sm:px-8 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Top gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{ background: "linear-gradient(90deg, transparent, #c9a84c50, #c9a84c, #c9a84c50, transparent)" }}
      />

      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none rounded-full"
        style={{ width: "min(600px, 100vw)", height: 280, background: "rgba(201,168,76,0.04)", filter: "blur(90px)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* CTA block */}
        <div className="text-center mb-14 sm:mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#c9a84c]/50 text-[10px] tracking-[0.5em] uppercase mb-4 sm:mb-5"
          >
            Let's Create Together
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white leading-[1.05] mb-8 sm:mb-10"
            style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }}
          >
            Have a project
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #c9a84c 0%, #f0d080 50%, #a07830 100%)" }}
            >
              in mind?
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.32 }}
          >
            <motion.a
              href="mailto:imane@email.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm tracking-[0.2em] uppercase text-black font-medium"
              style={{ background: "linear-gradient(135deg, #c9a84c 0%, #f0d080 50%, #a07830 100%)" }}
            >
              <span>Say Hello</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="h-px mb-8 sm:mb-10 origin-center"
          style={{ background: "linear-gradient(90deg, transparent, #c9a84c18, transparent)" }}
        />

        {/* Bottom row — stacks on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.48 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4"
        >
          {/* Wordmark */}
          <div className="text-center sm:text-left">
            <span
              className="font-serif text-base sm:text-lg tracking-[0.2em] text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #c9a84c, #f0d080, #a07830)" }}
            >
              Imane Ella
            </span>
            <p className="text-[#303030] text-[10px] tracking-[0.3em] uppercase mt-1">
              UI/UX Designer & Developer
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2.5">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.52 + i * 0.06 }}
                whileHover={{ scale: 1.15, color: "#c9a84c" }}
                whileTap={{ scale: 0.92 }}
                className="w-9 h-9 rounded-full border border-[#1e1e1e] hover:border-[#c9a84c]/40 flex items-center justify-center text-[#404040] hover:text-[#c9a84c] transition-all duration-300"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[#282828] text-[10px] tracking-[0.15em] text-center sm:text-right">
            © {new Date().getFullYear()} Imane Ella.
            <br className="sm:hidden" /> All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
