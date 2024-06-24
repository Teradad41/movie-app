"use client"

import { addFavorite, removeFavorite } from "@/app/movies/favorites/action"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  AfterFavoriteHearIcon,
  BeforeFavoriteHeartIcon,
} from "@/components/utils/Icons"
import React, { useState } from "react"

type FavoriteButtonProps = {
  movieId: number
  initialFavorite: boolean
}

export const FavoriteButton = ({
  movieId,
  initialFavorite,
}: FavoriteButtonProps) => {
  const [favorite, setFavorite] = useState<boolean>(initialFavorite)
  const [loading, setLoading] = useState<boolean>(false)

  const handleClick = async () => {
    setLoading(true)

    try {
      setFavorite(!favorite)
      if (favorite) {
        await removeFavorite(movieId)
      } else {
        await addFavorite(movieId)
      }
    } catch (error) {
      console.error("An error occurred while updating the favorite", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={handleClick} aria-disabled={loading}>
          {favorite ? <AfterFavoriteHearIcon /> : <BeforeFavoriteHeartIcon />}
        </TooltipTrigger>
        <TooltipContent>
          <p>{favorite ? "Remove from Favorite" : "Add to Favorite"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
