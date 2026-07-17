"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ZoomIn } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const portfolioItems = [
    { src: "/images/blackWork/1.png", alt: "Blackwork mandala dövmesi", category: "blackwork", height: "tall" },
    { src: "/images/blackWork/2.png", alt: "Blackwork geometrik dövmesi", category: "blackwork", height: "short" },
    { src: "/images/blackWork/3.png", alt: "Blackwork geometrik mandala dövmesi", category: "blackwork", height: "tall" },
    { src: "/images/blackWork/4.png", alt: "Blackwork geometrik mandala dövmesi", category: "blackwork", height: "short" },
    { src: "/images/blackWork/5.png", alt: "Blackwork geometrik mandala dövmesi", category: "blackwork", height: "tall" },
    { src: "/images/blackWork/6.png", alt: "Blackwork geometrik mandala dövmesi", category: "blackwork", height: "short" },
    { src: "/images/fineLine/1.png", alt: "Bilekte ince çizgi gül dövmesi", category: "fineline", height: "tall" },
    { src: "/images/fineLine/2.png", alt: "Bilekte ince çizgi gül dövmesi", category: "fineline", height: "tall" },
    { src: "/images/fineLine/3.png", alt: "Bilekte ince çizgi gül dövmesi", category: "fineline", height: "tall" },
    { src: "/images/colorRealism/1.png", alt: "Gerçekçi kurt portresi dövmesi", category: "realizm", height: "short" },
    { src: "/images/colorRealism/2.png", alt: "Gerçekçi kurt portresi dövmesi", category: "realizm", height: "short" },
    { src: "/images/colorRealism/3.png", alt: "Gerçekçi kurt portresi dövmesi", category: "realizm", height: "short" },
    { src: "/images/colorRealism/4.png", alt: "Gerçekçi kurt portresi dövmesi", category: "realizm", height: "short" },
    { src: "/images/colorRealism/5.png", alt: "Gerçekçi kurt portresi dövmesi", category: "realizm", height: "short" },
    { src: "/images/colorRealism/6.png", alt: "Gerçekçi kurt portresi dövmesi", category: "realizm", height: "short" },
    { src: "/images/colorRealism/7.png", alt: "Gerçekçi kurt portresi dövmesi", category: "realizm", height: "short" },
    { src: "/images/colorRealism/8.png", alt: "Gerçekçi kurt portresi dövmesi", category: "realizm", height: "tall" },
    { src: "/images/traditional/1.png", alt: "Geleneksel Amerikan kartal dövmesi", category: "traditional", height: "tall" },
    { src: "/images/traditional/2.png", alt: "Geleneksel Amerikan kartal dövmesi", category: "traditional", height: "tall" },
    { src: "/images/coverUp/1.png", alt: "Cover Up Tasarım", category: "coverup", height: "tall" },
    { src: "/images/coverUp/2.png", alt: "Cover Up Tasarım", category: "coverup", height: "tall" },
    { src: "/images/ozelTasarım/1.png", alt: "Ozel Tasarımlar", category: "ozeltasarım", height: "tall" },
];

const categories = [
  { key: "all", label: "Tüm Çalışmalar" },
  { key: "blackwork", label: "Blackwork" },
  { key: "fineline", label: "Fine Line" },
  { key: "realizm", label: "Color-Realizm" },
  { key: "traditional", label: "Geleneksel" },
  { key: "coverup", label: "Cover Up" },
  { key: "ozeltasarım", label: "Ozel Tasarım" },
];

export default function PortfolioGallery() {
  const [active, setActive] = useState<string>("all");
  const [expanded, setExpanded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleCategoryChange = (key: string) => {
    setActive(key);
    setExpanded(false);
  };

  // Filter items: If not expanded, show exactly one from each category in "all" view
  let filtered = [];
  if (active === "all") {
    if (expanded) {
      filtered = portfolioItems;
    } else {
      const categoriesSeen = new Set();
      filtered = portfolioItems.filter((item) => {
        if (!categoriesSeen.has(item.category)) {
          categoriesSeen.add(item.category);
          return true;
        }
        return false;
      });
    }
  } else {
    filtered = portfolioItems.filter((item) => item.category === active);
  }

  const slides = filtered.map((item) => ({ src: item.src, alt: item.alt }));

  const openLightbox = useCallback((i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  }, []);

  return (
    <section id="portfolio" className="section-pad relative overflow-hidden bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <AnimatedSection className="mb-20 text-center">
          <div className="mb-4 flex justify-center">
            <div className="section-label">Portfolyomuz</div>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cinzel', serif" }}>
            Kendisi İçin{" "}
            <span className="text-gradient-red">Konuşan</span>{" "}
            İşler
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => handleCategoryChange(key)}
                className={`px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm font-medium tracking-widest uppercase transition-all duration-300 border ${
                  active === key ? "bg-[#C41E3A] border-[#C41E3A] text-white" : "border-white/10 text-white/50 hover:border-[#C41E3A]/50 hover:text-white"
                }`}
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <LayoutGroup>
          <motion.div layout className="columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={`${item.src}-${active}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative cursor-pointer break-inside-avoid overflow-hidden"
                  onClick={() => openLightbox(i)}
                >
                  <div className={`relative ${item.height === "tall" ? "h-80" : "h-52"} img-zoom-wrap`}>
                    <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-all duration-400 group-hover:opacity-100">
                      <motion.div initial={{ scale: 0.5, opacity: 0 }} whileHover={{ scale: 1, opacity: 1 }} className="flex h-12 w-12 items-center justify-center border-2 border-[#C41E3A]">
                        <ZoomIn size={20} className="text-[#C41E3A]" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {active === "all" && !expanded && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setExpanded(true)}
              className="btn-outline inline-flex py-3.5 px-10 text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300 border border-white/10 hover:border-[#C41E3A] hover:bg-[#C41E3A] hover:text-white cursor-pointer"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Daha Fazlası
            </button>
          </div>
        )}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.95)" } }}
      />
    </section>
  );
}
