"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";

type FAQItem = { q: string; a: string };
type FAQCategory = { label: string; items: FAQItem[] };

const faqData: FAQCategory[] = [
  {
    label: "Dövme Hazırlığı",
    items: [
      {
        q: "Dövme randevuma nasıl hazırlanmalıyım?",
        a: "Randevunuzdan önceki günlerde bol su için. İşlemden 2–3 saat önce dolu bir öğün yiyin; kan şekerinizi dengede tutmak için önemlidir. En az 24 saat öncesinden alkol almaktan kaçının. Dövme bölgesine kolay erişim sağlayan rahat giysiler giyin. Bir önceki gün dövme bölgesini güneş yanığına uğratmayın veya tıraş etmeyin.",
      },
      {
        q: "Yanımda birini getirebilir miyim?",
        a: "Bir destek kişisi getirebilirsiniz. Stüdyo alanı nedeniyle yanınızda yalnızca bir misafir olmasını rica ediyoruz. Küçükler için (yasal izinle ebeveyn onayıyla) tüm işlem boyunca bir ebeveyn ya da vasi hazır bulunmalıdır.",
      },
      {
        q: "İptal veya yeniden programlama yapmam gerekirse ne yapmalıyım?",
        a: "İptal veya yeniden programlama için en az 48 saat önceden haber vermeniz gerekmektedir. Depozitolar iade edilmez ancak yeni bir randevu tarihine (30 gün içinde) aktarılabilir. Geç iptal durumunda depozito kaybolabilir.",
      },
    ],
  },
  {
    label: "Dövme Bakımı",
    items: [
      {
        q: "Yeni dövmeme nasıl bakmalıyım?",
            a: "Dövme bitiminden sonra sanatçınızın yapıştırdığı bandı 3-4 gün sonra çıkarın.Çıkarttıktan sonra Activex sabun ve ılık suyla yıkayın.Kurulayın ve günde 5-6 kez dövme sanatçınızın önderdiği bakım kremini sürün .2 hafta boyunca doğrudan güneş ışığından, yüzmekten ve uzun süre ıslatmaktan kaçının.",
      },
      {
        q: "Dövmemin kabuk bağlaması ve kaşıması normal mi?",
        a: "Tamamen normal! İyileşme sürecinde (genellikle 4–14. günler) kabuk bağlama ve hafif kaşıntı sürecin bir parçasıdır. Kaşımayın ve koparmayın. Nemlendirmeye devam edin. Aşırı kızarıklık, şişme veya akıntı yaşarsanız hemen bizi arayın.",
      },
      {
        q: "Dövmem ne zaman tamamen iyileşir?",
        a: "Dış tabaka 2–4 haftada iyileşir; ancak tam derin iyileşme 3–6 ay sürer. Bu süreçte renkler soluk görünebilir — deri yerleştikçe parlaklık geri gelir. Seansınızdan 60 gün içinde ücretsiz rötuş hizmetimizden yararlanabilirsiniz.",
      },
    ],
  },
  {
    label: "Piercing Bakımı",
    items: [
      {
        q: "Yeni piercingimi nasıl temizlerim?",
            a: "Serum fizyolojik ile günde 3 kez temizleyin. • Bölgeye kirli ellerle dokunmayın. * Alkol, oksijenli su, batikon, antibiyotikli krem ve ev yapımı tuzlu su kullanmayın.",
      },
      {
        q: "Piercing iyileşmesi ne kadar sürer?",
        a: "Kulak memesi: 6–8 hafta. Kıkırdak: 6–12 ay. Septum: 6–8 hafta. Dudak ve kaş: 3–6 ay. Göbek: 6–12 ay. Tam iyileşene kadar takıyı değiştirmeyin.",
      },
    ],
  },
  {
    label: "Randevu & Fiyatlandırma",
    items: [
      {
        q: "Nasıl randevu alabilirim?",
        a: "WhatsApp'tan doğrudan yazabilir, mesai saatlerinde arayabilir ya da ücretsiz danışma için stüdyoya gelebilirsiniz. Özel tasarımlar için 2–4 hafta önceden randevu almanızı öneririz. Yerinizi garantilemek için depozito gereklidir.",
      },
      {
        q: "Fiyatlandırma nasıl yapılıyor?",
        a: "Fiyatlandırma boyut, karmaşıklık, konum ve stile göre belirlenir. Büyük özel işler seans veya paket bazında fiyatlandırılır.",
      },
      {
        q: "Kapıdan müşteri kabul ediyor musunuz?",
        a: "Flash tasarımlar ve piercinglar için sanatçıların uygunluğuna göre kapıdan müşteri kabul ediyoruz. Özel dövmeler için tasarım süresi nedeniyle önceden randevu almanızı her zaman öneririz.",
      },
    ],
  },
];

function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className={`text-sm font-medium transition-colors duration-300 ${open ? "text-[#C41E3A]" : "text-white/80 group-hover:text-white"}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {item.q}
        </span>
        <div className={`w-6 h-6 flex items-center justify-center flex-shrink-0 border transition-colors duration-300 ${open ? "border-[#C41E3A] text-[#C41E3A]" : "border-white/20 text-white/40"}`}>
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
            <p className="pr-10 pb-5 text-sm leading-relaxed text-white/50" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="faq" className="section-pad relative overflow-hidden bg-[#0a0a0a]">
      <div className="mx-auto max-w-4xl px-6">
        <AnimatedSection className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <div className="section-label">SSS</div>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cinzel', serif" }}>
            Sık Sorulan{" "}
            <span className="text-gradient-red">Sorular</span>
          </h2>
          <p className="text-sm text-white/50" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Randevunuzdan önce bilmeniz gereken her şey.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {faqData.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(i)}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs tracking-wider uppercase font-medium transition-all duration-300 border ${
                activeCategory === i ? "bg-[#C41E3A] border-[#C41E3A] text-white" : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
              }`}
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {cat.label}
            </button>
          ))}
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="border border-white/5 bg-[#111111] px-5 py-2 sm:px-8"
          >
            {faqData[activeCategory].items.map((item, i) => (
              <FAQAccordion key={i} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatedSection className="mt-10 text-center">
          <p className="mb-4 text-sm text-white/40" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Hâlâ sorunuz var mı?
          </p>
          <a href="#contact" className="btn-outline inline-flex">
            <span>Bizimle İletişime Geçin</span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
