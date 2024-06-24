import { isFavorite } from "@/app/protected/favorites/action"
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
