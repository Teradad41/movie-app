import { EmptyStarIcon, HalfStarIcon, StarIcon } from "@/components/icons"
import type { Movie } from "@/lib/definitions"
import Image from "next/image"

export function MovieCard2({ movie }: { movie: Movie }) {
  const rating = (Number(movie.vote_average) / 2).toFixed(1)
  const fullStars = Math.floor(Number(rating))
  const halfStar = Number(rating) % 1 !== 0
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-md mx-auto cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-black dark:hover:shadow-yellow-200">
      <div className="relative">
        <Image
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt="movie poster"
          width={500}
          height={300}
          className="w-full h-72 object-cover"
          quality={100}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h2 className="text-2xl font-bold text-white mb-2">{movie.title}</h2>
          <div className="flex items-center text-yellow-500 mb-2">
            {[...Array(fullStars)].map((_, index) => (
              <StarIcon
                key={String(index)}
                className="w-5 h-5 mr-1 text-yellow-400"
              />
            ))}
            {halfStar && <HalfStarIcon className="w-5 h-5 mr-1" />}
            {[...Array(emptyStars)].map((_, index) => (
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
    </div>
  )
}
