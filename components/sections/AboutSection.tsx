"use client";

import Image from "next/image";
import { Shield, Award, Users, Heart } from "lucide-react";
import AnimatedSection, { StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const badges = [
  { Icon: Shield, label: "%100 Steril", desc: "Tüm ekipmanlarda otoklav sterilizasyonu" },
  { Icon: Users, label: "Uzman Sanatçılar", desc: "Sanatçı başına ortalama 10+ yıl deneyim" },
  { Icon: Heart, label: "Müşteri Odaklı", desc: "Konforunuz ve güvenliğiniz önceliğimiz" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-[#0a0a0a]">
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_right,rgba(139,0,0,0.05)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          {/* Sol: Görseller */}
          <AnimatedSection variant="slideLeft">
            <div className="relative">
              <div className="img-zoom-wrap relative h-[500px] w-full">
                <Image src="/images/hakkımızda.png" alt="RaveInk stüdyo içi" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="bg-gradient-to-t absolute inset-0 from-black/50 to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="glass-dark absolute right-0 bottom-0 border border-[#C41E3A]/20 p-4 text-center md:-right-6 md:-bottom-6 md:p-6"
              >
                <div className="text-3xl font-black text-[#C41E3A] md:text-4xl" style={{ fontFamily: "'Cinzel', serif" }}>10+</div>
                <div className="mt-1 tracking-widest text-[10px] text-white/50 uppercase md:text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Yıllık Ustalık</div>
              </motion.div>
              <div className="absolute -top-2 -left-2 h-16 w-16 border-t-2 border-l-2 border-[#C41E3A]/40 md:-top-4 md:-left-4 md:h-24 md:w-24" />
              <div className="absolute -right-2 -bottom-2 h-16 w-16 border-r-2 border-b-2 border-[#C41E3A]/40 md:-right-4 md:-bottom-4 md:h-24 md:w-24" />
            </div>
          </AnimatedSection>

          {/* Sağ: İçerik */}
          <AnimatedSection variant="slideRight">
            <div className="text-center lg:text-left">
              <div className="mb-4 flex justify-center lg:justify-start">
                <div className="section-label">Stüdyomuz Hakkında</div>
              </div>
              <h2
                className="mb-8 text-2xl leading-tight font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Sanat Yaratıyoruz,{" "}
                <span className="text-gradient-red">İz Bırakıyoruz.</span>
              </h2>
              <div className="divider-red mx-auto lg:mx-0" />
              <p className="mt-6 mb-6 text-sm leading-relaxed text-white/60 md:text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                2022 yılında kurulan RaveInk, deriyi yaşayan bir tuvale dönüştürme tutkusundan doğdu. Bugün bölgenin en prestijli dövme ve piercing destinasyonlarından biri haline geldik.
              </p>
              <p className="mb-12 text-sm leading-relaxed text-white/60 md:text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Sanatçılarımız; hyper-realistik portrelerden karmaşık blackwork geometriklerine kadar her stilde deneyime sahip. Harika dövmelerin harika sohbetlerle başladığına inanıyoruz, bu yüzden her randevu derinlemesine bir danışmayla başlar.
              </p>

              <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {badges.map(({ Icon, label, desc }) => (
                  <motion.div
                    key={label}
                    variants={staggerItem}
                    className="glass group border border-white/5 p-4 text-center transition-colors duration-300 hover:border-[#C41E3A]/30"
                  >
                    <Icon size={20} className="mx-auto mb-2 text-[#C41E3A] transition-transform duration-300 group-hover:scale-110" />
                    <div className="mb-1 text-sm font-semibold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>{label}</div>
                    <div className="text-xs text-white/40" style={{ fontFamily: "'Montserrat', sans-serif" }}>{desc}</div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
