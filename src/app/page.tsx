"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Navbar />
      <div className="h-20" /> {/* Spacer for fixed navbar */}
      <Hero />

      <About />
      <Footer />
    </main>
  );
}
