"use client";

import { motion } from "framer-motion";
import { ChevronDown, Eye } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero_background.png" alt="RaveInk dövme stüdyosu atmosferik arka plan" fill priority className="object-cover" sizes="100vw" />
        <div className="bg-gradient-to-b absolute inset-0 from-black/70 via-black/50 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,0,0,0.15)_0%,transparent_70%)]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "150px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10 flex items-center justify-center"
        >
          <div className="section-label">
            <span>Kur. 2022</span>
            <span>Premium Dövme & Piercing Stüdyosu</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10 text-3xl sm:text-5xl md:text-7xl lg:text-[90px] leading-[0.9] font-black tracking-tight"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          <span className="block text-white">Hikayeni</span>
          <span className="text-gradient-red glow-red-text block">Dövmele.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mx-auto mb-16 max-w-2xl text-base sm:text-lg leading-relaxed text-white/60 md:text-xl"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Premium, steril bir stüdyo ortamında dünya standartlarında dövme sanatçılığı ve profesyonel piercing hizmetleri. Hayaliniz, derinizde hayat buluyor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#portfolio" className="btn-primary w-full sm:w-auto justify-center">
            <Eye size={16} />
            <span>Portfolyoyu Gör</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-16 sm:mt-28 flex flex-col items-center justify-center gap-6 sm:gap-10 sm:flex-row"
        >
          {[
            { value: "10+", label: "Yıllık Deneyim" },
            { value: "5.000+", label: "Mutlu Müşteri" },
            { value: "%100", label: "Steril Ekipman" },
          ].map((stat, i) => (
            <div key={i} className="group text-center">
              <div className="text-3xl font-black text-[#C41E3A] transition-transform duration-300 group-hover:scale-110" style={{ fontFamily: "'Cinzel', serif" }}>
                {stat.value}
              </div>
              <div className="mt-1 text-xs tracking-widest text-white/40 uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] text-white/30 uppercase" style={{ fontFamily: "'Cinzel', serif" }}>Kaydır</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
          <ChevronDown className="text-[#C41E3A]" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
