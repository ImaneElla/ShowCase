"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { category: "Design", items: ["Figma", "UI/UX", "Prototyping", "Design Systems"] },
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Motion", items: ["Framer Motion", "GSAP", "CSS Animations"] },
  { category: "Tools", items: ["Git", "VS Code", "Vercel", "Notion"] },
];

const values = [
  {
    icon: "◈",
    title: "Aesthetic-First",
    desc: "Design isn't decoration — it's the first language between product and user.",
  },
  {
    icon: "◇",
    title: "Detail-Obsessed",
    desc: "The smallest refinements create the largest impressions.",
  },
  {
    icon: "○",
    title: "Always Learning",
    desc: "Every project is a new vocabulary. Every challenge, a new canvas.",
  },
];

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32 px-5 sm:px-8 bg-[#0a0a0a] overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 rounded-full"
          style={{ width: "min(500px, 90vw)", height: "min(500px, 90vw)", background: "rgba(201,168,76,0.035)", filter: "blur(90px)" }}
        />
        <div
          className="absolute bottom-0 left-0 rounded-full"
          style={{ width: "min(400px, 80vw)", height: "min(400px, 80vw)", background: "rgba(160,120,48,0.04)", filter: "blur(80px)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Label */}
        <FadeUp>
          <div className="flex items-center gap-3 mb-10 sm:mb-14 lg:mb-16">
            <div className="h-px w-8 sm:w-10 bg-gradient-to-r from-transparent to-[#c9a84c]" />
            <span className="text-[#c9a84c]/70 text-[10px] tracking-[0.5em] uppercase">About</span>
          </div>
        </FadeUp>

        {/* Two-col: stacks on mobile, side by side on lg */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">

          {/* Left — Bio */}
          <div>
            <FadeUp delay={0.08}>
              <h2
                className="font-serif text-white leading-[1.1] mb-6 sm:mb-8"
                style={{ fontSize: "clamp(1.9rem, 6vw, 3rem)" }}
              >
                I design{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(135deg, #c9a84c 0%, #f0d080 50%, #a07830 100%)" }}
                >
                  digital luxury
                </span>{" "}
                from Morocco.
              </h2>
            </FadeUp>

            <FadeUp delay={0.16}>
              <p className="text-[#606060] text-sm leading-[1.85] mb-4 sm:mb-5 tracking-wide">
                I'm Imane Ella — a UI/UX designer and frontend developer who
                believes every pixel deserves intention. I bridge the gap between
                beautiful design and clean, performant code.
              </p>
            </FadeUp>

            <FadeUp delay={0.24}>
              <p className="text-[#505050] text-sm leading-[1.85] mb-8 sm:mb-10 tracking-wide">
                My work draws inspiration from luxury fashion, architecture, and
                editorial design — translated into interfaces that feel as refined
                as they are functional. Currently open to internships &amp;
                collaborative projects.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:imane@email.com"
                  className="inline-flex items-center px-5 sm:px-6 py-2.5 rounded-full border border-[#c9a84c]/30 text-[#c9a84c] text-[11px] tracking-[0.2em] uppercase hover:bg-[#c9a84c]/10 active:scale-95 transition-all duration-300"
                >
                  Get in Touch
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-5 sm:px-6 py-2.5 rounded-full text-[#484848] text-[11px] tracking-[0.2em] uppercase hover:text-[#c9a84c] active:scale-95 transition-all duration-300"
                >
                  Download CV →
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right — Values cards */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={0.1 * i + 0.15}>
                <div className="group p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl border border-[#1e1e1e] hover:border-[#c9a84c]/25 bg-[#0d0d0d] hover:bg-[#101010] active:bg-[#111] transition-all duration-500">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span
                      className="text-lg sm:text-xl mt-0.5 shrink-0 text-transparent bg-clip-text"
                      style={{ backgroundImage: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
                    >
                      {v.icon}
                    </span>
                    <div>
                      <h3 className="text-white text-sm font-medium tracking-wide mb-1.5">
                        {v.title}
                      </h3>
                      <p className="text-[#525252] text-xs leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Divider + Skills heading */}
        <FadeUp delay={0.05}>
          <div
            className="mb-8 sm:mb-10 h-px w-full"
            style={{ background: "linear-gradient(90deg, transparent, #c9a84c25, transparent)" }}
          />
          <h3 className="text-[#3e3e3e] text-[10px] tracking-[0.5em] uppercase mb-8 sm:mb-10 text-center">
            Skills & Technologies
          </h3>
        </FadeUp>

        {/* Skills grid — 2 cols mobile, 4 cols md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {skills.map((group, gi) => (
            <FadeUp key={group.category} delay={0.07 * gi + 0.08}>
              <div className="h-full p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#1a1a1a] bg-[#0c0c0c]">
                <div
                  className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-3 sm:mb-4 text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(135deg, #c9a84c, #a07830)" }}
                >
                  {group.category}
                </div>
                <ul className="flex flex-col gap-1.5 sm:gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-[#525252] text-[11px] sm:text-xs tracking-wide hover:text-[#c9a84c]/80 transition-colors duration-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
