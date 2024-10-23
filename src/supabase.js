import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ucykchstsicryrljdmhw.supabase.co";
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjeWtjaHN0c2ljcnlybGpkbWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3MTQ3NDcsImV4cCI6MjA0NTI5MDc0N30.fkbkjQZTZayyVaoJ59eIVAM2g0vQAb5YnS7S7AZ48kQ'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
