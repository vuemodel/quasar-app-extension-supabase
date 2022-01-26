import { SupabasePlugin } from '@vuemodel/supabase'
import supabaseConfig from 'app/config/supabase.js'

export default ({ app }) => {
  app.use(SupabasePlugin, supabaseConfig)
}