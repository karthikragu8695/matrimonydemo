import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://myizzcmzjfnzaldgrqgw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15aXp6Y216amZuemFsZGdycWd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5NTU0NDYsImV4cCI6MjAyMDUzMTQ0Nn0.HndRyeK439BZTIxCNv02NFXExsalHFvZnHhR2YES34E'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)