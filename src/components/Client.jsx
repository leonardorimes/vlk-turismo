import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://laawkfzemxcsdphxrnda.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhYXdrZnplbXhjc2RwaHhybmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMDgzNzAsImV4cCI6MjA0NzY4NDM3MH0.LomsFC_0BU6DcNhy-_WlZAC4_SlDmlV_87ZxCegyqus";
export const supabase = createClient(supabaseUrl, supabaseKey);
