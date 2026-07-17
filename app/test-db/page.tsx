import { supabase } from "@/lib/supabase";

// Force dynamic rendering so it runs at request time on Vercel
export const dynamic = "force-dynamic";

export default async function TestDbPage() {
  let status = "Yükleniyor...";
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "Eksik (Undefined)";
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY 
    ? `Mevcut (Uzunluk: ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.length})` 
    : "Eksik (Undefined)";

  try {
    const { data, error } = await supabase.from("campaigns").select("*");
    if (error) {
      status = "Veritabanı Hatası: " + error.message;
    } else {
      status = `Başarılı! Bulunan Kampanya Sayısı: ${data?.length || 0}. Veri: ${JSON.stringify(data)}`;
    }
  } catch (err: any) {
    status = "Sistem Çökmesi (Crash): " + err.message;
  }

  return (
    <div style={{ padding: 40, color: "#fff", background: "#000", minHeight: "100vh", fontFamily: "sans-serif", lineHeight: "1.6" }}>
      <h1 style={{ fontSize: 20, marginBottom: 20, borderBottom: "1px solid #333", paddingBottom: 10 }}>RaveInk Veritabanı Bağlantı Test Sayfası (Server-Side)</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <p><strong>NEXT_PUBLIC_SUPABASE_URL:</strong> <code style={{ background: "#222", padding: "2px 6px" }}>{url}</code></p>
        <p><strong>NEXT_PUBLIC_SUPABASE_ANON_KEY:</strong> <code style={{ background: "#222", padding: "2px 6px" }}>{key}</code></p>
        <p><strong>Sorgu Durumu / Sonuç:</strong></p>
        <pre style={{ background: "#111", padding: 15, border: "1px solid #222", overflowX: "auto", color: "#4ade80", fontSize: 13, whiteSpace: "pre-wrap" }}>
          {status}
        </pre>
      </div>
    </div>
  );
}
