import { Card, CardContent } from "@/components/ui/card"
import { FavoriteButtonWrapper } from "@/components/utils/FavoriteButtonWrapper"
import { UserIcon } from "@/components/utils/Icons"
import { ReviewStars } from "@/components/utils/ReviewStars"
import type { Movie } from "@/lib/definitions"
import { calculateRating } from "@/lib/ratings"
import Image from "next/image"
import Link from "next/link"

export function CategoryMovieCard({
  movie,
  index,
}: { movie: Movie; index: number }) {
  const { rating, fullStars, halfStar, emptyStars } = calculateRating(
    movie.vote_average,
  )

  return (
    <Card className="flex flex-col h-full cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
      <Link
        href={`/movies/${movie.id}`}
        prefetch={false}
        className="flex flex-col h-full"
      >
        <Image
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          width={300}
          height={500}
          alt={movie.title}
          className="rounded-t-md w-full h-64 object-cover"
          priority={index < 8}
          quality={90}
        />
        <CardContent className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
          <p className="text-gray-400 line-clamp-3 mb-4 flex-grow">
            {movie.overview || "No overview available."}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center space-x-1">
              <ReviewStars
                fullStars={fullStars}
                halfStar={halfStar}
                emptyStars={emptyStars}
              />
              <span className="mr-2">{rating}</span>
              <span>|</span>
              <UserIcon className="w-5 h-5 mx-2" />
              <span>{movie.vote_count}</span>
            </div>
            <div className="mt-2 mb-0">
              <FavoriteButtonWrapper movieId={movie.id} />
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
