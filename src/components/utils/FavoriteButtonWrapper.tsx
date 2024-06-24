import { isFavorite } from "@/app/movies/favorites/action"
import { FavoriteButton } from "@/components/utils/FavoriteButton"

type FavoriteButtonWrapperProps = {
  movieId: number
}

export const FavoriteButtonWrapper = async ({
  movieId,
}: FavoriteButtonWrapperProps) => {
  const favorite: boolean = await isFavorite(movieId)

  return <FavoriteButton movieId={movieId} initialFavorite={favorite} />
}
