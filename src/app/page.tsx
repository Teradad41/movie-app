import { Home } from "@/components/custom-ui/home"
import { createClient } from "@/utils/supabase/server"

export default async function Index() {
  const canInitSupabaseClient = () => {
    try {
      createClient()
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div className="flex flex-col min-h-screen">
      <Home />
    </div>
  )
}
