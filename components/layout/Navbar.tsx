"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "Hakkımızda" },
  { href: "#tattoos", label: "Dövme" },
  { href: "#piercing", label: "Piercing" },
  { href: "#artists", label: "Sanatçılar" },
  { href: "#portfolio", label: "Portfolyo" },
  { href: "#announcements", label: "Kampanyalar" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const sec of sections.reverse()) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sec);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link href="/" className="group flex items-center gap-2">
            <div className="relative">
              <span className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-black tracking-widest text-white transition-colors duration-300 group-hover:text-[#C41E3A]" style={{ fontFamily: "'Cinzel', serif" }}>
                RAVE
              </span>
              <span className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-black tracking-widest text-[#C41E3A]" style={{ fontFamily: "'Cinzel', serif" }}>
                INK
              </span>
              <div className="bg-gradient-to-r absolute -bottom-1 left-0 h-[2px] w-0 from-[#8B0000] to-[#C41E3A] transition-all duration-500 group-hover:w-full" />
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium text-sm tracking-wide transition-colors duration-300 hover-underline ${
                    isActive ? "text-[#C41E3A]" : "text-white/80 hover:text-white"
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <button
            id="mobile-menu-toggle"
            className="relative z-50 p-2.5 text-white lg:hidden flex items-center justify-center min-w-[44px] min-h-[44px]"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Menüyü aç/kapat"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#0a0a0a]"
          >
            <div className="bg-gradient-to-r absolute top-0 left-0 h-[2px] w-full from-transparent via-[#C41E3A] to-transparent" />
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="font-black text-4xl tracking-widest transition-colors duration-300 hover:text-[#C41E3A] text-white"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="absolute bottom-12 flex gap-6 text-sm tracking-widest text-white/40" style={{ fontFamily: "'Cinzel', serif" }}>
              <span>@RAVEINK</span>
              <span>·</span>
              <span>HİKAYENİ DÖVMELE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
