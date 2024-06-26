import { isFavorite } from "@/app/movies/(categories)/favorites/action"
import { FavoriteButton } from "@/components/utils/FavoriteButton"
import type { Movie } from "@/lib/definitions"

export const FavoriteButtonWrapper = async ({ movie }: { movie: Movie }) => {
  const favorite = await isFavorite(movie.id)

  return <FavoriteButton movie={movie} initialFavorite={favorite} />
}
