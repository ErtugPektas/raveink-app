"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TestDbPage() {
  const [status, setStatus] = useState("Yükleniyor...");
  const [envUrl, setEnvUrl] = useState("");
  const [envKey, setEnvKey] = useState("");

  useEffect(() => {
    async function test() {
      try {
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "Eksik (Undefined)";
        const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        
        setEnvUrl(url);
        setEnvKey(key ? `Mevcut (Uzunluk: ${key.length})` : "Eksik (Undefined)");

        const { data, error } = await supabase.from("campaigns").select("*");
        if (error) {
          setStatus("Veritabanı Hatası: " + error.message);
        } else {
          setStatus(`Başarılı! Bulunan Kampanya Sayısı: ${data?.length || 0}. Veri: ${JSON.stringify(data)}`);
        }
      } catch (err: any) {
        setStatus("Sistem Çökmesi (Crash): " + err.message);
      }
    }
    test();
  }, []);

  return (
    <div style={{ padding: 40, color: "#fff", background: "#000", minHeight: "100vh", fontFamily: "sans-serif", lineHeight: "1.6" }}>
      <h1 style={{ fontSize: 20, marginBottom: 20, borderBottom: "1px solid #333", paddingBottom: 10 }}>RaveInk Veritabanı Bağlantı Test Sayfası</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <p><strong>NEXT_PUBLIC_SUPABASE_URL:</strong> <code style={{ background: "#222", padding: "2px 6px" }}>{envUrl}</code></p>
        <p><strong>NEXT_PUBLIC_SUPABASE_ANON_KEY:</strong> <code style={{ background: "#222", padding: "2px 6px" }}>{envKey}</code></p>
        <p><strong>Sorgu Durumu / Sonuç:</strong></p>
        <pre style={{ background: "#111", padding: 15, border: "1px solid #222", overflowX: "auto", color: "#4ade80", fontSize: 13 }}>
          {status}
        </pre>
      </div>
    </div>
  );
}
