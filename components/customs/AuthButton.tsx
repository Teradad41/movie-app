import { UserIconWrapper } from "@/components/utils/UserIconWrapper"
import { createClient } from "../../supabase/server"
import Link from "next/link"
import type React from "react"

export const AuthButton: React.FC = async () => {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return user ? (
    <UserIconWrapper />
  ) : (
    <Link
      href="/login"
      className="bg-[#243b50] text-white px-4 py-2 rounded-md hover:bg-[#2c4a6a] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-colors"
    >
      Login
    </Link>
  )
}
