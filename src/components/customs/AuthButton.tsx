import { Button } from "@/components/ui/button"
import { UserIcon } from "@/components/utils/Icons"
import { createClient } from "@/utils/supabase/server"
import Link from "next/link"
import { redirect } from "next/navigation"
import type React from "react"

export const AuthButton: React.FC = async () => {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const singOut = async () => {
    "use server"

    const supabase = createClient()
    await supabase.auth.signOut()
    return redirect("/")
  }

  return user ? (
    <>
      <Link
        href="/profile"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <UserIcon className="w-6 h-6" />
      </Link>
      <form action={singOut}>
        <Button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-colors">
          Logout
        </Button>
      </form>
    </>
  ) : (
    <Link
      href="/login"
      className="bg-[#243b50] text-white px-4 py-2 rounded-md hover:bg-[#2c4a6a] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-colors"
    >
      Login
    </Link>
  )
}
