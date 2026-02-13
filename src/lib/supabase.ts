import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const isConfigured = !!(supabaseUrl && supabaseServiceKey);

// Server-side client with service role (full access for CMS operations)
export const supabaseAdmin = isConfigured
    ? createClient(supabaseUrl, supabaseServiceKey)
    : null;

// Public client for read-only operations
export const supabase = isConfigured
    ? createClient(supabaseUrl, supabaseServiceKey)
    : null;

export { supabaseUrl, isConfigured };
