import { UserIcon } from "@/components/custom-ui/icons"
import { ReviewStars } from "@/components/custom-ui/review-stars"
import { Card, CardContent } from "@/components/ui/card"
import type { Movie } from "@/lib/definitions"
import { calculateRating } from "@/lib/ratings"
import Image from "next/image"
import Link from "next/link"

export function MovieCard({ movie, index }: { movie: Movie; index: number }) {
  const { rating, fullStars, halfStar, emptyStars } = calculateRating(
    movie.vote_average,
  )

  return (
    <Card className="flex flex-col h-full cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
      <Link href={`/movies/${movie.id}`} prefetch={false}>
        <Image
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          width={300}
          height={500}
          alt={movie.title}
          className="rounded-t-md w-full h-64 object-cover"
          priority={index < 8}
          quality={90}
        />
        <CardContent className="p-4 flex flex-col flex-1 justify-between">
          <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
          <p className="text-gray-400 text-lg line-clamp-3">
            {movie.overview || "No overview available."}
          </p>
          <div className="flex items-center justify-between pt-3 mt-auto">
            <div className="flex items-center space-x-1">
              <ReviewStars
                fullStars={fullStars}
                halfStar={halfStar}
                emptyStars={emptyStars}
              />
              <span className="mr-2">{rating}</span>
              <span>|</span>
              <UserIcon className="w-5 h-5 mr-2" />
              <span>{movie.vote_count}</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
