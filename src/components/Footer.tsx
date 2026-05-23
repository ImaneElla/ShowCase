"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Facebook } from "lucod-react";

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    letter: "LN",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    letter: "IG",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    letter: "FB",
    icon: (
     <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.75" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        width="16" 
        height="16" 
        aria-hidden
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm tracking-[0.2em] uppercase text-black font-medium"
              style={{ background: "linear-gradient(135deg, #c9a84c 0%, #f0d080 50%, #a07830 100%)" }}
            >
              <span>Send Message</span>
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
              Full-Stack Developer
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
            © {new Date().getFullYear()} Imane Ella. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
