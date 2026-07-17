"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import AnimatedSection, { StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const artists = [
  {
    name: "Kaan FİDAN",
    specialty: "Tattoo Artist, Founder",
    experience: "10 yıl",
        bio: "Kaan, 10 yılı aşkın süredir profesyonel olarak dövme sanatıyla ilgilenen ve özellikle Color Realism alanında uzmanlaşmış bir dövme sanatçısıdır. Kariyeri boyunca çeşitli markalarla sponsorluk iş birlikleri gerçekleştirmiş, çalışmalarını sürekli geliştirerek ulusal ve uluslararası standartlarda üretmeye devam etmektedir. RAVE INK TATTOO'nun kurucusu.",
    image: "/images/artist_1.png",
        instagram: "https://www.instagram.com/kaanfidan.art/",
  
    tags: ["Color", "Realism"],
  },
  {
    name: "Nazar FİDAN",
    specialty: "PIERCER, Founder",
    experience: "3 Yıl",
      bio: "3 yılı aşkın süredir profesyonel piercing uygulamaları gerçekleştiren Nazar Fidan, sterilizasyon standartları, anatomiye uygun uygulamalar ve güvenli çalışma prensipleri doğrultusunda hizmet vermektedir. Güncel teknikleri takip ederek her müşterisine estetik, güvenli ve konforlu bir deneyim sunmayı hedeflemektedir. Doğru yerleşim, uygun takı seçimi ve profesyonel danışmanlık yaklaşımıyla çalışmalarını sürdürmektedir..",
    image: "/images/Nazar.png",
      instagram: "https://www.instagram.com/ravepiercing/",
    tags: ["Piercing"],
  },
  
];

export default function ArtistTeam() {
  return (
    <section id="artists" className="section-pad relative overflow-hidden bg-[#050505]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,0,0,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <AnimatedSection className="mb-16 text-center">
          <div className="mb-4 flex justify-center">
            <div className="section-label">Ekibimizle Tanışın</div>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cinzel', serif" }}>
            Sanatın Arkasındaki{" "}
            <span className="text-gradient-red">Sanatçılar</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-white/50 md:text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Uzun süredir beraber çalışan ve birleşik deneyime sahip sınırları zorlama tutkusuna sahip dünya standartlarında dövme ve piercing sanatçıları.
          </p>
        </AnimatedSection>

        <StaggerContainer className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {artists.map(({ name, specialty, experience, bio, image, instagram, tags }) => (
            <motion.div
              key={name}
              variants={staggerItem}
              className="group card-hover relative overflow-hidden border border-white/5 bg-[#111111] transition-all duration-500 hover:border-[#C41E3A]/30"
            >
              <div className="img-zoom-wrap relative h-80">
                <Image src={image} alt={`${name} — RaveInk dövme sanatçısı`} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="bg-gradient-to-t absolute inset-0 from-[#111111] via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 opacity-0 transition-all duration-400 group-hover:opacity-100">
                  <motion.a href={instagram} target="_blank" rel="noopener noreferrer" aria-label={`${name} Instagram`}
                    className="flex h-12 w-12 items-center justify-center bg-[#C41E3A] text-white transition-colors duration-300 hover:bg-white hover:text-[#C41E3A]"
                    whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <FaInstagram size={18} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6 text-center">
                <div className="mb-1 text-xs font-semibold tracking-[0.2em] text-[#C41E3A] uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
                  {specialty}
                </div>
                <h3 className="mb-1 text-xl font-bold text-white" style={{ fontFamily: "'Cinzel', serif" }}>
                  {name}
                </h3>
                <div className="mb-4 text-xs text-white/40" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {experience} deneyim
                </div>
                <p className="mb-4 text-sm leading-relaxed text-white/50" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {bio}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="border border-white/10 px-2 py-1 text-xs text-white/40" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
