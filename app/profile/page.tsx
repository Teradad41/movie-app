import { createClient } from "../../supabase/server"
import { redirect } from "next/navigation"

export default async function Page() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/login")
  }

  return <p>Hello, {data.user.email}</p>
}
