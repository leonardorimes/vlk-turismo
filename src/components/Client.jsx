import { createClient } from "@supabase/supabase-js";

// Acessando as variáveis de ambiente do Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// Criando a instância do Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);
