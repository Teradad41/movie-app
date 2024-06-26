"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const login = async (formData: FormData) => {
  const supabase = createClient()

  // type-casting here for convenience
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

export const Signup = async (formData: FormData) => {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    throw new Error("Could not authenticate user")
  }

  revalidatePath("/", "layout")
  redirect("/")
}

export const SignOut = async () => {
  console.log("signing out")

  const supabase = createClient()
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error("An error occurred while signing out", error)
  }

  return redirect("/login")
}
