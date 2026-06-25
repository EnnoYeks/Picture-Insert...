
import { createClient } from "@supabase/supabase-js";

// Supabase setup
const supabaseUrl = "https://hhlogdqpgjiajeufwnop.supabase.co";
const supabaseKey = "sb_publishable_RVPCBfzNQ5OvdPp96MUqVA_AG5wazGk";

export const supabase = createClient(supabaseUrl, supabaseKey);

// App configuration object
export const CONFIG = {
  app: {
    name: "HSHS School Gallery",
    version: "1.0.0",
    school: "HAWTHORNE SCRIBNER HIGH SCHOOL",
    schoolMotto: "Educate Engage Empower.",
    schoolEmail: "info@hshs.ac.ug",
    schoolPhone: "+256 200 946933",
    schoolAddress: "Bududa Kikholo",
    schoolAnniversaryDate: "2026-08-15"
  }
};
