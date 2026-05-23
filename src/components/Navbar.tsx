"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = (href: string) => {
    setMenuOpen(false);
    // smooth scroll after menu close animation
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-2.5 mx-3 sm:mx-4 mt-3 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-black/70 border border-[#c9a84c]/20 shadow-[0_8px_32px_rgba(201,168,76,0.08)]"
            : "py-4 sm:py-5 bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); closeMenu("#home"); }}
            className="relative group flex items-center gap-2 min-w-0"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span
              className="font-serif text-lg sm:text-xl tracking-[0.2em] text-transparent bg-clip-text shrink-0"
              style={{ backgroundImage: "linear-gradient(135deg, #c9a84c 0%, #f0d080 50%, #a07830 100%)" }}
            >
              IE
            </span>
            <span className="text-[#6a6a6a] text-[10px] tracking-[0.3em] uppercase font-light hidden xs:inline">
              Portfolio
            </span>
          </motion.a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <a
                  href={link.href}
                  className="relative text-[#7a7a7a] hover:text-[#c9a84c] text-xs tracking-[0.15em] uppercase transition-colors duration-300 group py-1"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full bg-[#c9a84c] transition-all duration-300" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <motion.a
            href="mailto:imane@email.com"
            className="hidden md:inline-flex items-center gap-2 px-4 lg:px-5 py-2 rounded-full text-xs tracking-[0.15em] uppercase border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Hire Me
          </motion.a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 -mr-1 z-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  menuOpen
                    ? i === 0 ? { rotate: 45, y: 6 }
                    : i === 1 ? { opacity: 0, scaleX: 0 }
                    : { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="block h-px w-6 bg-[#c9a84c] origin-center"
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: "rgba(6,6,6,0.97)", backdropFilter: "blur(24px)" }}
          >
            {/* Gold glow orb */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: "40%", left: "50%", transform: "translate(-50%,-50%)",
                width: 320, height: 320, borderRadius: "50%",
                background: "rgba(201,168,76,0.06)", filter: "blur(80px)",
              }}
            />

            <ul className="flex flex-col items-center gap-7 relative z-10">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={() => closeMenu(link.href)}
                    className="text-4xl sm:text-5xl font-serif text-[#c9a84c] tracking-widest hover:text-white transition-colors duration-200 active:scale-95"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* Bottom contact hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-12 text-center"
            >
              <p className="text-[#3a3a3a] text-[10px] tracking-[0.4em] uppercase mb-2">Developed by</p>
              <a
                className="text-[#c9a84c]/60 text-sm font-serif tracking-wide hover:text-[#c9a84c] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Imane Ella
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
