import { Card } from "@/components/ui/card"
import { ReviewStars } from "@/components/utils/ReviewStars"
import type { Movie } from "@/lib/definitions"
import { calculateRating } from "@/lib/ratings"
import Image from "next/image"
import Link from "next/link"

export function HomeMovieCard({ movie }: { movie: Movie }) {
  const { rating, fullStars, halfStar, emptyStars } = calculateRating(
    movie.vote_average,
  )

  return (
    <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden w-full max-w-md mx-auto transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-white/20">
      <Link href={`/movies/${movie.id}`} className="block relative group">
        <Image
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt="movie poster"
          width={500}
          height={300}
          className="w-full h-72 object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h2 className="text-2xl font-bold text-white mb-2 line-clamp-2">
              {movie.title}
            </h2>
            <div className="flex items-center text-yellow-500 mb-2">
              <ReviewStars
                fullStars={fullStars}
                halfStar={halfStar}
                emptyStars={emptyStars}
              />
              <span
                className="text-yellow-400 ml-2"
                aria-label={`Rating: ${rating} out of 5`}
              >
                {rating}
              </span>
            </div>
            <p className="text-gray-300 line-clamp-3">
              {movie.overview || "No overview available."}
            </p>
          </div>
        </div>
      </Link>
    </Card>
  )
}
