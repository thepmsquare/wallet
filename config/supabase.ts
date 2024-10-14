import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://myqeaculjdzjzbrawfbu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15cWVhY3VsamR6anpicmF3ZmJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5MTc2MjAsImV4cCI6MjA0NDQ5MzYyMH0.B0MokYrMCh5vVsVdIRrWxPuoXy0Fnq89wxcvqmgls2k";

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
