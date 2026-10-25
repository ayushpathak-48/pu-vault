import { createClient, SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

export const getSupabaseClient = (): SupabaseClient | null => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;
  if (!client) {
    try {
      client = createClient(url, key);
    } catch {
      return null;
    }
  }
  return client;
};
