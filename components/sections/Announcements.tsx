"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Megaphone, Tag, Clock, ChevronRight, X } from "lucide-react";
import AnimatedSection, { StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";

type AnnouncementType = "kampanya" | "duyuru" | "etkinlik";

interface Announcement {
  id: number;
  type: AnnouncementType;
  badge: string;
  title: string;
  summary: string;
  detail: string;
  expiry?: string;
  icon: React.ElementType;
}

const announcements: Announcement[] = [
  {
    id: 1,
    type: "kampanya",
    badge: "Kampanya",
    title: "Yaz Sezonu %20 İndirim",
    summary: "Temmuz – Ağustos boyunca tüm dövme seanslarında %20 indirim fırsatını kaçırmayın.",
    detail:
      "Yaz kampanyamız kapsamında seçili tüm sanatçılarımızdan randevu alarak %20 indirimli seans fırsatından yararlanabilirsiniz. Kampanya 1 Temmuz – 31 Ağustos tarihleri arasında geçerlidir. Randevu için WhatsApp veya iletişim formumuzu kullanabilirsiniz.",
    expiry: "31 Ağustos 2025",
    icon: Tag,
  },
  {
    id: 2,
    type: "duyuru",
    badge: "Duyuru",
    title: "Yeni Sanatçı: Elif Çelik Aramıza Katıldı",
    summary: "Fine-line ve botanik dövme alanında uzmanlaşmış Elif Çelik stüdyomuza katıldı.",
    detail:
      "Elif Çelik, 7 yıllık fine-line ve botanik dövme deneyimiyle RaveInk ailesine dahil oldu. Randevu almak veya tasarımlarını incelemek için bizimle iletişime geçebilirsiniz. İlk 10 randevu için özel fiyat avantajı sunulmaktadır.",
    icon: Megaphone,
  },
  {
    id: 3,
    type: "etkinlik",
    badge: "Etkinlik",
    title: "Flash Day – 12 Temmuz",
    summary: "Tek günlük flash dövme etkinliğimizde hazır tasarımlardan seçim yapın, aynı gün yaptırın.",
    detail:
      "12 Temmuz Cumartesi günü düzenleyeceğimiz Flash Day etkinliğinde sanatçılarımızın hazırladığı özel tasarımlara sabit fiyat uygulanacaktır. Yer sayısı sınırlıdır; ön kayıt için DM veya WhatsApp üzerinden ulaşın.",
    expiry: "12 Temmuz 2025",
    icon: Clock,
  },
];

const typeColors: Record<AnnouncementType, string> = {
  kampanya: "text-[#C41E3A] border-[#C41E3A]/40 bg-[#C41E3A]/10",
  duyuru: "text-amber-400 border-amber-400/40 bg-amber-400/10",
  etkinlik: "text-sky-400 border-sky-400/40 bg-sky-400/10",
};

const typeAccent: Record<AnnouncementType, string> = {
  kampanya: "border-[#C41E3A]/30",
  duyuru: "border-amber-400/30",
  etkinlik: "border-sky-400/30",
};

export default function Announcements() {
  const [selected, setSelected] = useState<Announcement | null>(null);

  return (
    <section id="announcements" className="section-pad relative overflow-hidden bg-[#0a0a0a]">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,0,0,0.06)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        {/* Header */}
        <AnimatedSection variant="fadeUp" className="mb-14 text-center">
          <div className="mb-4 flex justify-center">
            <div className="section-label">Güncel Bilgiler</div>
          </div>
          <h2
            className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Duyurular &amp;{" "}
            <span className="text-gradient-red">Kampanyalar</span>
          </h2>
          <div className="divider-red mx-auto" />
          <p
            className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/50 md:text-base"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Son gelişmeleri, özel fırsatları ve etkinliklerimizi buradan takip edin.
          </p>
        </AnimatedSection>

        {/* Cards grid */}
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {announcements.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                variants={staggerItem}
                className={`glass-dark group relative flex cursor-pointer flex-col gap-4 border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(196,30,58,0.15)] ${typeAccent[item.type]}`}
                onClick={() => setSelected(item)}
              >
                {/* Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${typeColors[item.type]}`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Icon size={11} />
                    {item.badge}
                  </span>
                  {item.expiry && (
                    <span
                      className="text-[10px] text-white/30"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.expiry}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold text-white sm:text-lg"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {item.title}
                </h3>

                {/* Summary */}
                <p
                  className="flex-1 text-xs leading-relaxed text-white/50 sm:text-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.summary}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-1 text-xs font-semibold text-[#C41E3A] transition-gap duration-300 group-hover:gap-2">
                  <span style={{ fontFamily: "'Montserrat', sans-serif" }}>Devamını Oku</span>
                  <ChevronRight size={13} />
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 h-8 w-8 border-t border-r border-[#C41E3A]/20" />
              </motion.article>
            );
          })}
        </StaggerContainer>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className={`glass-dark fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 border p-8 ${typeAccent[selected.type]}`}
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 text-white/40 transition-colors hover:text-white"
                aria-label="Kapat"
              >
                <X size={20} />
              </button>

              {/* Badge */}
              <span
                className={`mb-5 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${typeColors[selected.type]}`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <selected.icon size={11} />
                {selected.badge}
              </span>

              <h3
                className="mb-4 text-xl font-bold text-white sm:text-2xl"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {selected.title}
              </h3>

              <div className="divider-red mb-5" style={{ marginLeft: 0 }} />

              <p
                className="text-sm leading-relaxed text-white/60"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {selected.detail}
              </p>

              {selected.expiry && (
                <p
                  className="mt-5 text-xs text-white/30"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Son geçerlilik: {selected.expiry}
                </p>
              )}

              <a
                href="https://wa.me/905XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-7 inline-flex w-full items-center justify-center gap-2 text-sm"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Randevu Al
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
