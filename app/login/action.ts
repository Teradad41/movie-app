"use server"

import { createClient } from "../../supabase/server"
import { revalidatePath } from "next/cache"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export const signInWithEmail = async (formData: FormData) => {
  const supabase = createClient()

  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    throw new Error("Could not authenticate user")
  }

  revalidatePath("/", "layout")
  redirect("/")
}

export const signInWithGoogle = async () => {
  const supabase = createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${getURL()}/auth/callback`,
    },
  })

  if (data.url) {
    redirect(data.url)
  }
}

export const signInWithGithub = async () => {
  const supabase = createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${getURL()}/auth/callback`,
    },
  })

  if (data.url) {
    redirect(data.url)
  }
}

export const signUp = async (formData: FormData) => {
  const origin = (await headers()).get("origin")
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

export const signOut = async () => {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error("An error occurred while signing out", error)
  }

  return redirect("/login")
}

const getURL = () => {
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000"
}
