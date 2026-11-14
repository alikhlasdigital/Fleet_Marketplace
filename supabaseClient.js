
// Koneksi Yuanma Logistik ke Supabase
const SUPABASE_URL =
  "https://mkoqlpwtmnltksyosqwr.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_NMJp3lTlhlLRirB8RW-TsA_GfleDGsh";

// Membuat koneksi
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

// Agar dapat digunakan oleh file JavaScript lain
window.supabaseClient = supabaseClient;

console.log("Yuanma Logistik: Supabase client siap");
