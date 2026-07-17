"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function FloatingLogo() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Logo görünüyor olsun, 300px aşağı inince aktif olsun
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ scale: 0, opacity: 0, x: -20 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          exit={{ scale: 0, opacity: 0, x: -20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 left-6 z-[999] flex h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 items-center justify-center rounded-full border border-white/10 bg-black/85 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-[#C41E3A]/60 hover:shadow-[0_0_25px_rgba(196,30,58,0.4)]"
          style={{
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.6)",
          }}
          aria-label="Yukarı Kaydır"
        >
          {/* Nabız / Işıma Efekti */}
          <span className="absolute inset-0 rounded-full bg-[#C41E3A] opacity-5 animate-pulse" />
          
          <div className="relative h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 flex items-center justify-center overflow-hidden">
            <Image
              src="/images/raveink-logo.png"
              alt="RaveInk Logo"
              fill
              className="object-contain filter invert mix-blend-screen scale-[2.2] md:scale-[2.5] lg:scale-[2.7]"
              sizes="(max-width: 768px) 48px, (max-width: 1024px) 64px, 80px"
              priority
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
