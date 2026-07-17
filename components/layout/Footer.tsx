import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";

const footerLinks = {
  "Hizmetler": [
    { label: "Blackwork Dövme", href: "#tattoos" },
    { label: "İnce Çizgi Dövme", href: "#tattoos" },
    { label: "Realizm Dövme", href: "#tattoos" },
    { label: "Geleneksel Dövme", href: "#tattoos" },
    { label: "Kulak Piercing", href: "#piercing" },
    { label: "Septum Piercing", href: "#piercing" },
  ],
  "Stüdyo": [
    { label: "RaveInk Hakkında", href: "#about" },
    { label: "Sanatçılarımız", href: "#artists" },
    { label: "Portfolyo", href: "#portfolio" },
    { label: "Müşteri Yorumları", href: "#testimonials" },
    { label: "Sık Sorulan Sorular", href: "#faq" },
  ],
  "İletişim": [
    { label: "Bize Ulaşın", href: "#contact" },
      { label: "WhatsApp Yazın", href: "https://wa.me/905337124810" },
    { label: "Instagram Galerimiz", href: "#instagram" },
  ],
};

const socials = [
    { Icon: FaInstagram, href: "https://www.instagram.com/raveinktattoostudio/", label: "Instagram" },
  
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#050505]">
      <div className="bg-gradient-to-r absolute top-0 right-0 left-0 h-[2px] from-transparent via-[#C41E3A] to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #C41E3A 0px, #C41E3A 1px, transparent 1px, transparent 30px)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {/* Marka */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-black tracking-widest text-white" style={{ fontFamily: "'Cinzel', serif" }}>
                RAVE<span className="text-[#C41E3A]">INK</span>
              </span>
            </div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/50" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Sanat derinin üzerinde hayat bulur. 2022'den bu yana anlamlı ve dünya standartlarında vücut sanatı yaratmaya adanmış premium dövme ve piercing stüdyosu.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-[#C41E3A]/50 hover:text-[#C41E3A]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-5 text-xs font-semibold tracking-[0.2em] text-[#C41E3A] uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover-underline text-sm text-white/50 transition-colors duration-300 hover:text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs tracking-wide text-white/30" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            © {new Date().getFullYear()} RaveInk Stüdyo. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-xs text-white/30" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <a href="#" className="transition-colors hover:text-white">Gizlilik Politikası</a>
            <a href="#" className="transition-colors hover:text-white">Kullanım Koşulları</a>
            <a href="#" className="transition-colors hover:text-white">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
