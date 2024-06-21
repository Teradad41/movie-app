import {
  EmptyStarIcon,
  HalfStarIcon,
  StarIcon,
} from "@/components/custom-ui/icons"
import type { Movie } from "@/lib/definitions"
import { calculateRating } from "@/lib/ratings"
import Image from "next/image"
import Link from "next/link"

export function MovieCard2({ movie }: { movie: Movie }) {
  const { rating, fullStars, halfStar, emptyStars } = calculateRating(
    movie.vote_average,
  )

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-md mx-auto cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-black dark:hover:shadow-white">
      <Link href={`/movies/${movie.id}`}>
        <div className="relative">
          <Image
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt="movie poster"
            width={500}
            height={300}
            className="w-full h-72 object-cover"
            quality={90}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h2 className="text-2xl font-bold text-white mb-2">
              {movie.title}
            </h2>
            <div className="flex items-center text-yellow-500 mb-2">
              {Array.from({ length: fullStars }).map((_, index) => (
                <StarIcon
                  key={String(index)}
                  className="w-5 h-5 mr-1 text-yellow-400"
                />
              ))}
              {halfStar && <HalfStarIcon className="w-5 h-5 mr-1" />}
              {Array.from({ length: emptyStars }).map((_, index) => (
                <EmptyStarIcon
                  key={String(index)}
                  className="w-5 h-5 mr-1 text-gray-400"
                />
              ))}
              <span className="text-yellow-400 ml-2">{rating}</span>
            </div>
            <p className="text-gray-300 line-clamp-2">
              {movie.overview || "No overview available."}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
