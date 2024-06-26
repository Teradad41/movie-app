"use server"

import type { Movie } from "@/lib/definitions"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export const addFavorite = async (movie: Movie) => {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    const value = {
      movie_id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      user_id: user.id,
    }

    const { error } = await supabase.from("favorites").insert(value)

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

export const isFavorite = async (id: number) => {
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
