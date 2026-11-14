const SUPABASE_URL =
  "https://mkoqlpwtmnltksyosqwr.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_NMJp3lTlhlLRirB8RW-TsA_GfleDGsh";

if (!window.supabase || !window.supabase.createClient) {
  console.error("Library Supabase belum dimuat!");
} else {
  window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );

  console.log("Yuanma Logistik berhasil terhubung ke Supabase Client!");
}
