import { Home } from "@/components/customs/Home"
import { createClient } from "@/utils/supabase/server"

export default function Page() {
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
