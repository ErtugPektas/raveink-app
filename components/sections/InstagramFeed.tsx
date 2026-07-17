"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import AnimatedSection, { StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const instaImages = [
  { src: "/images/blackWork/1.png", alt: "Blackwork dövme çalışması" },
  { src: "/images/fineLine/1.png", alt: "Fine line dövme çalışması" },
  { src: "/images/kulakPiercing/1.png", alt: "Profesyonel kulak piercingı" },
  { src: "/images/colorRealism/3.png", alt: "Realistik dövme çalışması" },
  { src: "/images/septumPiercing/1.png", alt: "Septum piercing uygulaması" },
  { src: "/images/traditional/1.png", alt: "Geleneksel dövme çalışması" },
];

export default function InstagramFeed() {
  return (
    <section id="instagram" className="section-pad relative overflow-hidden bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <div className="section-label">
              <FaInstagram size={12} />
                          <span>@raveinktattoostudio</span>
              <FaInstagram size={12} />
            </div>
          </div>
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "'Cinzel', serif" }}>
            Yolculuğumuzu{" "}
            <span className="text-gradient-red">Takip Edin</span>
          </h2>
          <p className="text-white/50" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Stüdyodan günlük güncellemeler, perde arkası ve taze mürekkep.
          </p>
        </AnimatedSection>

        <StaggerContainer className="mb-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {instaImages.map(({ src, alt }, i) => (
            <motion.a
              key={i}
                  href="https://www.instagram.com/raveinktattoostudio/"
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              className="group img-zoom-wrap relative aspect-square overflow-hidden"
            >
              <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw" />
              <div className="absolute inset-0 flex items-center justify-center bg-[#C41E3A]/0 transition-all duration-400 group-hover:bg-[#C41E3A]/60">
                <FaInstagram size={24} className="scale-50 text-white opacity-0 transition-opacity duration-300 group-hover:scale-100 group-hover:opacity-100" />
              </div>
            </motion.a>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center">
                  <a href="https://www.instagram.com/raveinktattoostudio/" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
            <FaInstagram size={16} />
            <span>Instagram&apos;da Takip Et</span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
