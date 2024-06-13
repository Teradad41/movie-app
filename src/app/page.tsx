import { Home } from "@/components/home"
import { createClient } from "@/utils/supabase/server"
import { Suspense } from "react"

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
      <Suspense>
        <Home />
      </Suspense>
    </div>
  )
}
