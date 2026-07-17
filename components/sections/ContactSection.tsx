"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import AnimatedSection from "@/components/ui/AnimatedSection";

const hours = [
  { day: "Salı – Pazar", time: "14:00 – 23:00" },
  { day: "Pazartesi", time: "Kapalıyız" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-[#0a0a0a]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,0,0,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <AnimatedSection className="mb-20 text-center">
          <div className="mb-4 flex justify-center">
            <div className="section-label">Bizi Bulun</div>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cinzel', serif" }}>
            Stüdyoyu{" "}
            <span className="text-gradient-red">Ziyaret Edin</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <AnimatedSection variant="slideLeft">
            <div className="space-y-6">
              <div className="flex items-start gap-4 border border-white/5 bg-[#111111] p-6 transition-colors duration-300 hover:border-[#C41E3A]/20">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-[#C41E3A]/20 bg-[#C41E3A]/10">
                  <MapPin size={18} className="text-[#C41E3A]" />
                </div>
                <div>
                  <div className="mb-1 font-semibold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>Adres</div>
                  <div className="text-sm text-white/50" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Görükle, Üçoluk Cd. Yerleşim Sitesi No: 11<br />
                    16110 Nilüfer / Bursa<br />
                    Türkiye
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 border border-white/5 bg-[#111111] p-6 transition-colors duration-300 hover:border-[#C41E3A]/20">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-[#C41E3A]/20 bg-[#C41E3A]/10">
                  <Phone size={18} className="text-[#C41E3A]" />
                </div>
                <div>
                  <div className="mb-1 font-semibold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>Telefon</div>
                  <a href="tel:+905337124810" className="block text-sm text-white/50 transition-colors hover:text-[#C41E3A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    +90 (533) 712 48 10
                  </a>
                  <a href="https://wa.me/905337124810" className="text-sm text-white/50 transition-colors hover:text-[#C41E3A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    WhatsApp: +90 (533) 712 48 10
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 border border-white/5 bg-[#111111] p-6 transition-colors duration-300 hover:border-[#C41E3A]/20">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-[#C41E3A]/20 bg-[#C41E3A]/10">
                  <Mail size={18} className="text-[#C41E3A]" />
                </div>
                <div>
                  <div className="mb-1 font-semibold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>E-posta</div>
                  <a href="mailto:merhaba@raveink.studio" className="block text-sm text-white/50 transition-colors hover:text-[#C41E3A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                      ravetattoo12@gmail.com
                  </a>
                  <a href="mailto:randevu@raveink.studio" className="text-sm text-white/50 transition-colors hover:text-[#C41E3A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                      ravetattoo12@gmail.com
                  </a>
                </div>
              </div>

              <div className="border border-white/5 bg-[#111111] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Clock size={18} className="text-[#C41E3A]" />
                  <div className="font-semibold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>Çalışma Saatleri</div>
                </div>
                <div className="space-y-2">
                  {hours.map(({ day, time }) => (
                    <div key={day} className="flex items-center justify-between text-sm">
                      <span className="text-white/50" style={{ fontFamily: "'Montserrat', sans-serif" }}>{day}</span>
                      <span className="text-white/80" style={{ fontFamily: "'Montserrat', sans-serif" }}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                {[
                  { Icon: FaInstagram, href: "https://www.instagram.com/raveinktattoostudio/", label: "Instagram" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center gap-2 border border-white/10 px-4 py-2 text-sm text-white/50 transition-all duration-300 hover:border-[#C41E3A]/50 hover:text-[#C41E3A]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Icon size={14} /> {label}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideRight">
            <div className="relative h-[350px] overflow-hidden border border-white/5 lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d28.8481155!3d40.2262323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca0f9e1be35ef5%3A0xce790451d9a1c2f4!2sRave%C4%B0nk%20Tattoo-Piercing!5e0!3m2!1str!2str!4v1749305997000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)", minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RaveInk Stüdyo Konumu — Nilüfer, Bursa"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
