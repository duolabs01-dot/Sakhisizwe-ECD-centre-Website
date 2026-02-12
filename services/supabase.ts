import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://aeecauwirwkpvoovbsnx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZWNhdXdpcndrcHZvb3Zic254Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4MjM2MjgsImV4cCI6MjA4NjM5OTYyOH0.TI9mFTN5rpzj21BSwcpp3dabUruELFzVLX9M05srxCM';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);