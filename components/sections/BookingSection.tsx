"use client";

import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Send, CheckCircle, User, Mail, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
};

const serviceOptions = [
  "Blackwork Dövme",
  "İnce Çizgi Dövme",
  "Realizm Dövme",
  "Geleneksel Dövme",
  "Özel Tasarım Dövme",
  "Kulak Piercing",
  "Burun Piercing",
  "Septum Piercing",
  "Dudak Piercing",
  "Kaş Piercing",
  "Vücut Piercing",
  "Dövme Danışmanlığı (Ücretsiz)",
];

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Randevu formu:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="booking" className="section-pad bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,0,0,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: `repeating-linear-gradient(-45deg, #C41E3A 0px, #C41E3A 1px, transparent 1px, transparent 40px)` }}
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="section-label">Randevu Al</div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
            Seansınızı{" "}
            <span className="text-gradient-red">Rezerve Edin</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Bilgilerinizi doldurun, randevunuzu 24 saat içinde onaylayacağız.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="glass border border-white/8 p-5 sm:p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C41E3A] to-transparent" />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 flex items-center justify-center bg-[#C41E3A]/10 border border-[#C41E3A]/30 mb-6"
                  >
                    <CheckCircle size={36} className="text-[#C41E3A]" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                    Randevu Alındı!
                  </h3>
                  <p className="text-white/50" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Randevunuzu 24 saat içinde e-posta yoluyla onaylayacağız.
                  </p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-white/50 tracking-widest uppercase mb-2" htmlFor="booking-name" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Ad Soyad *
                      </label>
                      <div className="relative">
                        <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                        <input
                          id="booking-name"
                          {...register("name", { required: "Ad soyad zorunludur" })}
                          placeholder="Adınız soyadınız"
                          className={`w-full bg-[#111111] border pl-10 pr-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors duration-300 focus:border-[#C41E3A]/60 ${errors.name ? "border-red-500/50" : "border-white/10"}`}
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        />
                      </div>
                      {errors.name && <p className="text-red-400 text-xs mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 tracking-widest uppercase mb-2" htmlFor="booking-email" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        E-posta *
                      </label>
                      <div className="relative">
                        <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                        <input
                          id="booking-email"
                          type="email"
                          {...register("email", { required: "E-posta zorunludur", pattern: { value: /\S+@\S+\.\S+/, message: "Geçersiz e-posta" } })}
                          placeholder="sizin@email.com"
                          className={`w-full bg-[#111111] border pl-10 pr-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors duration-300 focus:border-[#C41E3A]/60 ${errors.email ? "border-red-500/50" : "border-white/10"}`}
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        />
                      </div>
                      {errors.email && <p className="text-red-400 text-xs mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-white/50 tracking-widest uppercase mb-2" htmlFor="booking-phone" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Telefon
                      </label>
                      <div className="relative">
                        <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                        <input
                          id="booking-phone"
                          type="tel"
                          {...register("phone")}
                          placeholder="+90 (555) 000-0000"
                          className="w-full bg-[#111111] border border-white/10 pl-10 pr-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors duration-300 focus:border-[#C41E3A]/60"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 tracking-widest uppercase mb-2" htmlFor="booking-service" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Hizmet Türü *
                      </label>
                      <select
                        id="booking-service"
                        {...register("service", { required: "Lütfen bir hizmet seçin" })}
                        className={`w-full bg-[#111111] border px-4 py-3 text-sm text-white outline-none transition-colors duration-300 focus:border-[#C41E3A]/60 appearance-none cursor-pointer ${errors.service ? "border-red-500/50" : "border-white/10"}`}
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <option value="" className="bg-[#111111]">Hizmet seçin...</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s} className="bg-[#111111]">{s}</option>
                        ))}
                      </select>
                      {errors.service && <p className="text-red-400 text-xs mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{errors.service.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/50 tracking-widest uppercase mb-2" htmlFor="booking-date" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Tercih Edilen Tarih
                    </label>
                    <div className="relative">
                      <Calendar size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                      <input
                        id="booking-date"
                        type="date"
                        {...register("date")}
                        className="w-full bg-[#111111] border border-white/10 pl-10 pr-4 py-3 text-sm text-white outline-none transition-colors duration-300 focus:border-[#C41E3A]/60"
                        style={{ fontFamily: "'Montserrat', sans-serif", colorScheme: "dark" }}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/50 tracking-widest uppercase mb-2" htmlFor="booking-message" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Ek Bilgiler
                    </label>
                    <div className="relative">
                      <MessageSquare size={14} className="absolute left-4 top-4 text-white/30" />
                      <textarea
                        id="booking-message"
                        {...register("message")}
                        rows={4}
                        placeholder="Dövme fikrinizi, referans görselleri, konumu, boyutu veya sorularınızı açıklayın..."
                        className="w-full bg-[#111111] border border-white/10 pl-10 pr-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors duration-300 focus:border-[#C41E3A]/60 resize-none"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? "Gönderiliyor..." : "Randevumu Al"}</span>
                  </button>

                  <p className="text-center text-white/30 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Yerinizi onaylamak için depozito gerekebilir. 24 saat içinde size ulaşacağız.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
