"use server"

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export const getFavorites = async () => {
  const supabase = createClient()
  const { data, error } = await supabase.from("favorites").select("movie_id")

  if (error) {
    console.error("An error occurred while fetching the favorites", error)
  }

  return data
}

export const addFavorite = async (id: number) => {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    const { error } = await supabase
      .from("favorites")
      .insert({ movie_id: id, user_id: user.id })

    if (error) {
      console.error("An error occurred while adding the favorite", error)
    }
  } else {
    redirect("/login")
  }
}

export const removeFavorite = async (id: number) => {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    const { data, error } = await supabase
      .from("favorites")
      .delete()
      .eq("movie_id", id)
      .eq("user_id", user.id)

    if (error) {
      console.error("An error occurred while removing the favorite", error)
    }
  } else {
    redirect("/login")
  }
}

export const isFavorite = async (id: number): Promise<boolean> => {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    const { data, error } = await supabase
      .from("favorites")
      .select("movie_id")
      .eq("movie_id", id)

    if (error) {
      console.error("An error occurred while checking the favorite", error)
    }

    if (data && data.length > 0) {
      return true
    }
  }
  return false
}
