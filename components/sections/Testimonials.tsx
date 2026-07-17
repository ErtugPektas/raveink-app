"use client";

import { FaGoogle, FaStar, FaQuoteRight } from "react-icons/fa6";
import AnimatedSection, { StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const reviews = [
  {
    "name": "Ertuğ Pektaş",
    "date": "8 Haziran 2026",
    "rating": 5,
    "text": "İnanılmaz ince insanlar, gerçekten tanıştığım için çok memnun oldum. Hem dövme sürecim boyunca ve hatta daha sonrasında bakımlarıyla alakalı da çok fazla yardımcı oldular. Kaan Bey ve Nazar Hanım'a teşekkürlerimi iletiyorum.",
    "avatar": "EP",
    "reviewer_picture_url": "https://lh3.googleusercontent.com/a-/ALV-UjXooc05JvrNNdUwonYITMBIBElobmBnpPY3amFu_qquHh5l49w=s120-c-rp-mo-br100"
  },
  {
    "name": "Sinem Savran",
    "date": "18 Mart 2026",
    "rating": 5,
    "text": "Kendilerini ilk sosyal medyada takip etmeye başladım, piercing hakkında her soruma bıkmadan usanmadan cevap verdiler. Daha sonrasında iş yerlerine gidip işlem yaptırdım, Nazar hanımın oldukça bilgili ve deneyimli olduğu her halinden belliydi ve işlem sırasında olabildiğince sakinleştirdi. İşlemden sonraki günlerde de takip için mutlaka yazdı sordu fotoğraf istedi, kontrol için tekrar gideceğim hala daha tüm sorularımı cevaplamaya devam ediyor☺️ Bu arada oldukça steril çalıştığını söylememe gerek yok.",
    "avatar": "SS",
    "reviewer_picture_url": "https://lh3.googleusercontent.com/a-/ALV-UjUnm8ZudQUIJ02C_TioNdOZTgxdbyYypIoxPjjFxJTQzIM80Y-m=s120-c-rp-mo-ba12-br100"
  },
  {
    "name": "betül",
    "date": "4 Nisan 2026",
    "rating": 5,
    "text": "dovmemi gecen yaz yaptirdim hic arastirarak da yaptirmamistim kaldirimda raveinki gordum girip hemen yaptirdim ve cok memnun kaldim cok kararsiz biri oldugum icin boyutu secerken sikinti yasadim ama cok yardimci oldular suan bursada degilim isim olmadikca gitmiyorum ama yeniden dovme yaptiracak olsam kesinlikle gorukleye gidip yaptiririm iki minimal kampanyasiyla yaptirmistim cok ilgililerdi ve gayet de bilgilendirdiler 🙏🏻🙏🏻❤️❤️",
    "avatar": "B",
    "reviewer_picture_url": "https://lh3.googleusercontent.com/a-/ALV-UjVuXzMwo9wu2Bfv2ZNnJ3UiOSSVwFiAMh39b8QrZcEUVBn2Uq0J=s120-c-rp-mo-ba12-br100"
  },
  {
    "name": "Tolgahan ÖZER",
    "date": "5 Aralık 2025",
    "rating": 5,
    "text": "Tasarımından uygulamasına , anlatımından karar anına kadar ilgi alaka güler yüzlü hizmet vermeleri paha biçilemez. Mesleki duruşları tecrübeleri ile sabit . Sonuçta hayat boyu taşıyacağınız hayalleri gerçeğe dönüştürüyorlar ve muazzam bir ciddiyetle yapıyorlar . Hijyen ve sağlığa gösterdikleri titizlik bu ciddiyetin bir göstergesi , Kaan hocam ve tüm Raveink ailesine teşekkürü borç bilirim.",
    "avatar": "TÖ",
    "reviewer_picture_url": "https://lh3.googleusercontent.com/a-/ALV-UjUwD7KC8Gs1F7ts-R5Dgi7whG_BSpr7T6Ckk8VIqBD7MBrN2Hdj=s120-c-rp-mo-ba12-br100"
  },
  {
    "name": "Aras Charless",
    "date": "25 Nisan 2026",
    "rating": 5,
    "text": "Piercing yaptırmak için çok yer araştırdım ilk defa yaptıracağım için gerildim, çok iyi ilgilendiler. Diğer yerlere göre ucuz olması ilk başta tedirgin etti ama gayet iyi ve sterildi. Tek kullanımlıktı eldivenlerde iğne de. Bakımların her detayını anlattılar, bir şey olduğu durumda mikrop kapmasın diye müdahale etmemeden direk yazıp gel dediler. Ben memnun kaldım yine olsa yine giderim.",
    "avatar": "AC",
    "reviewer_picture_url": "https://lh3.googleusercontent.com/a-/ALV-UjXGKm6QbWdhOCfa9Wx9-b_61BcvMTi4nDUTnoqzmc9Rah3BGKn6=s120-c-rp-mo-br100"
  },
  {
    "name": "Aynur Kocaer",
    "date": "31 Ağustos 2025",
    "rating": 5,
    "text": "İlk dövmemden 2 dövmemden sonra memnun kalmamın sonucunda Emir bey'e Cover Up için gittim çok eski ve yıpranmış dövmem ve yara izlerim üzerine çalıştık şuan iyileşme süresinde olmasına rağmen tüm renkleri çizgileri canlı duruyor. Yapılan sanatın işleyişi de sanatçıların enerjisi de mükemmeldi hersey için teşekkür ederim en kısa zamanda tekrar görüşmek üzere 🩵✨️",
    "avatar": "AK",
    "reviewer_picture_url": "https://lh3.googleusercontent.com/a/ACg8ocI4eqSYf18tFOtDuPyQ1LUs7s3wCEkqbMP8EqV6Vi1jRtlomw=s120-c-rp-mo-br100"
  }
];

export default function Testimonials() {
  const googleReviewsUrl = "https://search.google.com/local/reviews?placeid=ChIJ9V7jG54PyhQR9MKh2VEEec4";
  const writeReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJ9V7jG54PyhQR9MKh2VEEec4";

  return (
    <section id="testimonials" className="section-pad bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,0,0,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="section-label">Müşteri Hikayeleri</div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
            Müşterilerimiz <span className="text-gradient-red">Ne Diyor</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-lg">5.0</span>
              <div className="flex text-amber-500 gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} className="drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" />
                ))}
              </div>
            </div>
            <span className="hidden sm:inline text-white/30">|</span>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <FaGoogle size={14} />
              <span>Google Değerlendirmesi</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Yorumlar Kart Izgarası */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="glass border border-white/5 p-6 relative overflow-hidden transition-all duration-300 hover:border-[#C41E3A]/30 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="absolute top-4 right-4 text-white/[0.02] pointer-events-none select-none">
                <FaQuoteRight size={60} />
              </div>

              <div>
                {/* Profil & Google Logo */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {review.reviewer_picture_url ? (
                      <img
                        src={review.reviewer_picture_url}
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B0000] to-[#C41E3A] flex items-center justify-center text-white font-bold text-sm tracking-wider">
                        {review.avatar}
                      </div>
                    )}
                    <div>
                      <h4 className="text-white text-sm font-semibold tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {review.name}
                      </h4>
                      <div className="text-[10px] text-emerald-500 flex items-center gap-1">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Doğrulanmış Müşteri
                      </div>
                    </div>
                  </div>
                  <div className="text-white/20 hover:text-[#C41E3A] transition-colors duration-300">
                    <FaGoogle size={16} />
                  </div>
                </div>

                {/* Yıldız Değerlendirme & Tarih */}
                <div className="flex items-center justify-between mb-4 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <div className="flex text-amber-500 gap-0.5">
                    {[...Array(review.rating)].map((_, idx) => (
                      <FaStar key={idx} size={11} />
                    ))}
                  </div>
                  <span className="text-white/30 text-[11px]">{review.date}</span>
                </div>

                {/* Yorum Metni */}
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Aksiyon Butonları */}
        <AnimatedSection className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto text-center justify-center text-xs"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <FaGoogle size={14} />
            <span>Tüm Google Yorumlarını Oku</span>
          </a>
          <a
            href={writeReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full sm:w-auto text-center justify-center text-xs"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>Yorum Yaz</span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
