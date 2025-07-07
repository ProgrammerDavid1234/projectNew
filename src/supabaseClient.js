// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vegqdjftmborcltjtppb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlZ3FkamZ0bWJvcmNsdGp0cHBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4OTMzMzEsImV4cCI6MjA2NzQ2OTMzMX0.7gi8BBSQI2ZE3dU7EtFtpF6Uvrf6Q6v4qOuTZuNcEJA'
export const supabase = createClient(supabaseUrl, supabaseKey)
