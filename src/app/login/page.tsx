import { SubmitButton } from "@/components/submit-button"
import { createClient } from "@/utils/supabase/server"
import { headers } from "next/headers"
import Link from "next/link"
import { redirect } from "next/navigation"

export const metadata = {
  title: "Login",
}

export default function Login() {
  const signIn = async (formData: FormData) => {
    "use server"

    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return redirect("/login?message=Could not authenticate user")
    }

    return redirect("/")
  }

  const signUp = async (formData: FormData) => {
    "use server"

    const origin = headers().get("origin")
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const supabase = createClient()

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      console.error(error)
      return redirect("/login?message=Could not authenticate user")
    }

    return redirect("/login?message=Check email to continue sign in process")
  }

  return (
    <div className="flex justify-center container">
      <div className="flex flex-col py-14 md:w-1/3 gap-2">
        <Link
          href="/"
          className="py-6 hover:bg-btn-background-hover flex group text-sm"
        >
          <svg
            role={"img"}
            aria-label={"Back"}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-5 w-4 transition-transform group-hover:-translate-x-1"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>{" "}
          Back
        </Link>

        <form className="px-10 animate-in flex-1 flex flex-col gap-2 text-foreground">
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <SubmitButton
            formAction={signIn}
            className="bg-gray-950 text-white rounded-md px-4 py-3 text-foreground mb-2 hover:opacity-90 hover:bg-gray-900 focus:ring-2 focus:ring-gray-800 focus:outline-none"
            pendingText="Signing In..."
          >
            Sign In
          </SubmitButton>
          <SubmitButton
            formAction={signUp}
            className="border border-foreground/20 rounded-md px-4 py-2.5 text-foreground mb-2 hover:bg-foreground/5 focus:ring-2 focus:ring-foreground focus:outline-none"
            pendingText="Signing Up..."
          >
            Sign Up
          </SubmitButton>
        </form>
      </div>
    </div>
  )
}
