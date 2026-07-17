import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "RaveInk | Premium Dövme & Piercing Stüdyosu",
  description:
    "RaveInk, blackwork, ince çizgi, realizm, geleneksel ve özel tasarım dövmelerin yanı sıra profesyonel piercing hizmetleri sunan premium bir dövme ve piercing stüdyosudur. Bugün randevunuzu alın.",
  keywords:
    "dövme stüdyosu, piercing stüdyosu, blackwork dövme, ince çizgi dövme, realizm dövme, kulak piercingı, septum piercingı, dövme sanatçısı, RaveInk",
  openGraph: {
    title: "RaveInk | Premium Dövme & Piercing Stüdyosu",
    description:
      "RaveInk ile hikayeni dövmele — sanatın deriyle buluştuğu yer. Dünya standartlarında sanatçılar tarafından premium dövme ve piercing hizmetleri.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
