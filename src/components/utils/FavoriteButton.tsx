"use client"

import {
  addFavorite,
  removeFavorite,
} from "@/app/movies/(categories)/favorites/action"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"
import {
  AfterFavoriteHearIcon,
  BeforeFavoriteHeartIcon,
} from "@/components/utils/Icons"
import type { Movie } from "@/lib/definitions"
import React, { useState } from "react"

type FavoriteButtonProps = {
  movie: Movie
  initialFavorite: boolean
}

export const FavoriteButton = ({
  movie,
  initialFavorite,
}: FavoriteButtonProps) => {
  const [favorite, setFavorite] = useState<boolean>(initialFavorite)
  const [loading, setLoading] = useState<boolean>(false)
  const { toast } = useToast()

  const handleClick = async () => {
    setLoading(true)

    try {
      setFavorite(!favorite)
      toast({
        description: favorite ? "Removed from Favorite" : "Added to Favorite",
        className: "text-white dark:text-black bg-primary",
      })

      if (favorite) {
        await removeFavorite(movie.id)
      } else {
        await addFavorite(movie)
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
