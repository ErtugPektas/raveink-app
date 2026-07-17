"use client";

import Image from "next/image";
import { CheckCircle, Shield, Thermometer, Droplets, ZoomIn } from "lucide-react";
import AnimatedSection, { StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const piercingTypes = [
    { name: "Kulak Piercing", desc: "Lobe, helix, conch, daith, tragus, rook — tüm kıkırdak ve lobe konumları mevcut.", icon: "👂", image: "/images/kulakPiercing/1.png" },
    { name: "Burun Piercing", desc: "Titanyum, bioplastik veya cerrahi çelik takı seçenekleriyle burun delme hizmetleri.", icon: "👃", image: "/images/burunPiercing/1.png" },
    { name: "Septum", desc: "Klasik ve dairesel barbeller, clickerlar ile mükemmel septum görünümü.", icon: "💫", image: "/images/septumPiercing/1.png" },
    { name: "Dudak Piercing", desc: "Labret, medusa, Monroe ve snake bites — uzman piercerlarımızdan tüm dudak konumları.", icon: "💋", image: "/images/dudakPiercing/1.png" },
    { name: "Kaş Piercing", desc: "Kavisli barbeller ve düz arkalı takılarla yüzey ve dermal kaş piercingleri.", icon: "✨", image: "/images/kaşPiercing/1.png" },
    { name: "Vücut Piercing", desc: "Tamamen steril ortamda göbek ve industrial piercingler.", icon: "⚡", image: "/images/vücutPiercing/1.png" },
];

// Her kategori için 6'şar fotoğraf
// Kendi gerçek fotoğraflarınızı eklemek için bu dizilerdeki yolları değiştirin
const piercingGallery: Record<string, string[]> = {
  "Kulak Piercing": [
        "/images/kulakPiercing/1.png",
        "/images/kulakPiercing/2.png",
        "/images/kulakPiercing/3.png",
        "/images/kulakPiercing/4.png",
        "/images/kulakPiercing/5.png",
        "/images/kulakPiercing/6.png",
  ],
  "Burun Piercing": [
    "/images/burunPiercing/1.png",
    "/images/burunPiercing/2.png",
    "/images/burunPiercing/3.png",
    "/images/burunPiercing/4.png",
    "/images/burunPiercing/5.png",
    
  ],
  Septum: [
      "/images/septumPiercing/1.png",
      "/images/septumPiercing/2.png",
      "/images/septumPiercing/3.png",
  ],
  "Dudak Piercing": [
      "/images/dudakPiercing/1.png",
      "/images/dudakPiercing/2.png",
      "/images/dudakPiercing/3.png",
      "/images/dudakPiercing/4.png",
      "/images/dudakPiercing/5.png",
      "/images/dudakPiercing/6.png",
  ],
  "Kaş Piercing": [
      "/images/kaşPiercing/1.png",
      "/images/kaşPiercing/2.png",
      "/images/kaşPiercing/3.png",
      "/images/kaşPiercing/4.png",
  ],
  "Vücut Piercing": [
      "/images/vücutPiercing/1.png",
      "/images/vücutPiercing/2.png",
      "/images/vücutPiercing/3.png",
      "/images/vücutPiercing/4.png",
      "/images/vücutPiercing/5.png",
      "/images/vücutPiercing/6.png",
  ],
};

const aftercareSteps = [
  "Serum fizyolojik ile günde 3 kez temizleyin",
  "Piercinge dokunmayın,oynatmayın,çevirmeyin.",
  "Darbe ve sürtünmeden koruyun",
  "Temiz yastık kılıfında uyuyun",
  "Sorularınız için bizimle iletişime geçin.",
];

const safetyItems = [
  { Icon: Thermometer, label: "Otoklav Sterilizasyonu", desc: "Tüm yeniden kullanılabilir aletler tıbbi kalite otoklav ile sterilize edilir" },
  { Icon: Shield, label: "Tek Kullanımlık İğneler", desc: "Her zaman %100 tek kullanımlık, steril iğneler kullanılır" },
];

function PiercingCard({ name, desc, icon, image }: { name: string; desc: string; icon: string; image: string }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPopupPos({ x: rect.left + rect.width / 2, y: rect.top });
    hoverTimer.current = setTimeout(() => setShowPopup(true), 600);
  };

  const handleMouseLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setShowPopup(false);
  };

  const handleClick = () => {
    const galleryEl = document.getElementById("piercing-gallery");
    if (galleryEl) galleryEl.scrollIntoView({ behavior: "smooth", block: "start" });
    // Galeri filtresini tetikle
    setTimeout(() => {
      const btn = document.getElementById(`piercing-gallery-btn-${name}`);
      if (btn) btn.click();
    }, 500);
  };

  return (
    <>
      <motion.div
        variants={staggerItem}
        className="group card-hover cursor-pointer border border-white/5 bg-[#111111] p-8 text-center transition-all duration-400 hover:border-[#C41E3A]/30"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className="mb-4 text-4xl">{icon}</div>
        <h3 className="mb-2 text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#C41E3A]" style={{ fontFamily: "'Cinzel', serif" }}>
          {name}
        </h3>
        <p className="text-sm leading-relaxed text-white/50" style={{ fontFamily: "'Montserrat', sans-serif" }}>{desc}</p>
        <div className="mt-4 text-xs text-white/20 transition-colors duration-300 group-hover:text-[#C41E3A]/60" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Örnekleri gör →
        </div>
      </motion.div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="pointer-events-none fixed z-[9999]"
            style={{ left: popupPos.x, top: popupPos.y - 8, transform: "translate(-50%, -100%)" }}
          >
            <div className="relative w-56 overflow-hidden border border-[#C41E3A]/40 shadow-2xl" style={{ boxShadow: "0 8px 40px rgba(196,30,58,0.25)" }}>
              <div className="relative h-40 w-56">
                <Image src={image} alt={name} fill className="object-cover" sizes="224px" />
                <div className="bg-gradient-to-t absolute inset-0 from-black/70 to-transparent" />
                <div className="absolute right-0 bottom-2 left-0 text-center text-xs font-semibold tracking-widest text-white/90 uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
                  {name}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function PiercingSection() {
  const [expanded, setExpanded] = useState(false);
  const [activeGallery, setActiveGallery] = useState("Kulak Piercing");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const currentPhotos = piercingGallery[activeGallery] || [];
  const slides = currentPhotos.map((src) => ({ src }));

  return (
    <section id="piercing" className="section-pad relative overflow-hidden bg-[#0a0a0a]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(139,0,0,0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-12">
        <AnimatedSection className="mb-24 text-center">
          <div className="mb-4 flex justify-center">
            <div className="section-label">Piercing Stüdyosu</div>
          </div>
          <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl" style={{ fontFamily: "'Cinzel', serif" }}>
            Profesyonel <span className="text-gradient-red">Piercing</span> Hizmetleri
          </h2>
          <p className="mx-auto max-w-xl text-sm text-white/50 md:text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Tamamen steril bir ortamda hassas piercing işlemi, premium takı seçenekleri ve uzman bakım rehberliği.
          </p>
        </AnimatedSection>

        {/* Piercing Tür Kartları */}
        <StaggerContainer className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {piercingTypes.map((pt) => (
            <PiercingCard key={pt.name} {...pt} />
          ))}
        </StaggerContainer>

        {/* Bakım + Güvenlik */}
        <div className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <AnimatedSection variant="slideLeft">
            <div className="border border-white/5 bg-[#111111] p-6 sm:p-8">
              <h3 className="mb-6 text-center text-2xl font-bold text-white" style={{ fontFamily: "'Cinzel', serif" }}>Bakım Talimatları</h3>
              <div className="space-y-3">
                {aftercareSteps.slice(0, expanded ? aftercareSteps.length : 4).map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-[#C41E3A]" />
                    <p className="text-sm text-white/60" style={{ fontFamily: "'Montserrat', sans-serif" }}>{step}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => setExpanded(!expanded)} className="mt-5 text-[#C41E3A] text-sm font-medium hover:text-white transition-colors duration-300 w-full text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {expanded ? "Daha az göster ↑" : "Tüm adımları göster ↓"}
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideRight">
            <div className="border border-white/5 bg-[#111111] p-6 sm:p-8">
              <h3 className="mb-6 text-center text-2xl font-bold text-white" style={{ fontFamily: "'Cinzel', serif" }}>Güvenlik & Sterilizasyon</h3>
              <div className="space-y-6">
                {safetyItems.map(({ Icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-[#C41E3A]/20 bg-[#C41E3A]/10">
                      <Icon size={18} className="text-[#C41E3A]" />
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-semibold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>{label}</div>
                      <div className="text-xs text-white/50" style={{ fontFamily: "'Montserrat', sans-serif" }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ─── PİERCİNG GALERİSİ ─── */}
        <div id="piercing-gallery">
        <AnimatedSection className="mt-4">
          <div className="mb-10 text-center">
            <div className="mb-4 flex justify-center">
              <div className="section-label">Örnekler</div>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cinzel', serif" }}>
              Piercing <span className="text-gradient-red">Galerisi</span>
            </h3>
            <p className="text-xs text-white/40 sm:text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>Görmek istediğiniz piercing türünü seçin</p>
          </div>

          {/* Filtre Butonları */}
          <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {piercingTypes.map(({ name, icon }) => (
              <button
                key={name}
                id={`piercing-gallery-btn-${name}`}
                onClick={() => setActiveGallery(name)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:px-5 py-2.5 sm:text-sm font-medium tracking-wide border transition-all duration-300 ${
                  activeGallery === name
                    ? "bg-[#C41E3A] border-[#C41E3A] text-white shadow-lg"
                    : "border-white/10 text-white/50 hover:border-[#C41E3A]/50 hover:text-white bg-[#111111]"
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>{icon}</span>
                <span>{name}</span>
              </button>
            ))}
          </div>

          {/* Fotoğraf Izgarası */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGallery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6"
            >
              {currentPhotos.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group relative aspect-square cursor-pointer overflow-hidden border border-white/5 transition-all duration-300 hover:border-[#C41E3A]/40"
                  onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
                >
                  <Image src={src} alt={`${activeGallery} örnek ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn size={22} className="text-white" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>
        </div> {/* closes piercing-gallery */}
      </div> {/* closes max-w-7xl */}

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
        styles={{ container: { backgroundColor: "rgba(0,0,0,0.95)" } }}
      />
    </section>
  );
}
