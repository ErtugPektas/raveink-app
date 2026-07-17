"use client";

import { motion } from "framer-motion";
import { Zap, Feather, Eye, Anchor, Palette, ArrowRight } from "lucide-react";
import AnimatedSection, { StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";

const services = [
  {
    Icon: Zap,
    title: "Blackwork",
    description:
      "Güçlü bir etki yaratan kalın geometrik desenler, tribal tasarımlar ve katı siyah illüstrasyonlar. Keskin kontrastı ve grafik etkiyi sevenler için mükemmel.",
        tags: ["Geometrik", "Tribal","Neo-Sigilism", "Soyut", "Mandala"],
  },
  {
    Icon: Feather,
    title: "Fine Line",
    description:
      "Ultra ince iğnelerle işlenmiş narin, karmaşık tasarımlar. Minimalist zarafet sanatsal hassasiyetle buluşuyor — ince ama etkileyici vücut sanatı için ideal.",
    tags: ["Yazı","Tek çizgi tasarımlar", "Minimalist"],
  },
  {
    Icon: Eye,
    title: "Color-Realism",
    description:
      "Dövme ile fotoğraf arasındaki sınırı ortadan kaldıran hyper-realistik portreler, hayvanlar ve sahneler.",
    tags: ["Portre","3D Etki"],
  },
  {
    Icon: Anchor,
    title: "Traditional",
    description:
      "Kalın konturlar, ikonik imgeler ve zamanın testinden geçmiş doymuş renk paletleriyle klasik Amerikan ve Japon geleneksel stilleri.",
    tags: ["Amerikan", "Japon", "Neo-Trad", "Denizci"],
  },
  {
    Icon: Palette,
    title: "Özel Tasarım",
    description:
      "Hayalinizi hayata geçirelim. Sanatçılarımız konsept çiziminden son dövmeye kadar sizinle birlikte çalışır. Hiçbir tasarım çok karmaşık değil.",
    tags: ["Konseptüel", "Watercolor", "İllüstratif"],
  },
];

export default function TattooServices() {
  return (
    <section id="tattoos" className="section-pad relative overflow-hidden bg-[#050505]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #C41E3A 0px, #C41E3A 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #C41E3A 0px, #C41E3A 1px, transparent 1px, transparent 80px)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-12">
        <AnimatedSection className="mb-24 text-center">
          <div className="mb-4 flex justify-center">
            <div className="section-label">Dövme Hizmetlerimiz</div>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cinzel', serif" }}>
            Her Stil,{" "}
            <span className="text-gradient-red">Mükemmel Şekilde</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-white/50 md:text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Kalın blackwork'ten foto-gerçekçi portrelere kadar sanatçılarımız her büyük dövme stilinde uzmanlaşmıştır.
          </p>
        </AnimatedSection>

        <StaggerContainer className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, description, tags }, i) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="group card-hover relative overflow-hidden border border-white/5 bg-[#111111] p-10 text-center transition-all duration-500 hover:border-[#C41E3A]/30"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(ellipse at top left, rgba(196,30,58,0.06) 0%, transparent 70%)" }} />
              <div className="absolute top-6 right-6 text-6xl font-black text-white/[0.03] select-none" style={{ fontFamily: "'Cinzel', serif" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-[#C41E3A]/20 bg-[#C41E3A]/10 transition-colors duration-300 group-hover:bg-[#C41E3A]/20">
                <Icon size={22} className="text-[#C41E3A]" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#C41E3A]" style={{ fontFamily: "'Cinzel', serif" }}>
                {title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-white/50" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="border border-white/10 px-2 py-1 text-xs text-white/40" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex translate-x-[-10px] items-center justify-center gap-2 text-sm font-medium text-[#C41E3A] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Daha fazla <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <AnimatedSection>
          <div className="bg-gradient-to-r relative flex flex-col items-center justify-between gap-6 overflow-hidden from-[#8B0000] to-[#C41E3A] p-6 text-center sm:p-10 md:flex-row md:text-left">
            <div
              className="absolute inset-0 opacity-10"
              style={{ backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 20px)` }}
            />
            <div className="relative z-10">
              <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl" style={{ fontFamily: "'Cinzel', serif" }}>
                Fiyatlandırma hakkında bilgi almak ister misiniz?
              </h3>
              <p className="text-sm text-white/70" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Her dövme benzersizdir. Ücretsiz danışma randevusu alın ve kişisel fiyat teklifinizi öğrenin.
              </p>
            </div>
            <a href="#contact" className="relative z-10 inline-flex w-full items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-bold tracking-wide text-[#8B0000] transition-all duration-300 hover:bg-[#0a0a0a] hover:text-white md:w-auto md:px-8 md:py-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Ücretsiz Danışma <ArrowRight size={16} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
