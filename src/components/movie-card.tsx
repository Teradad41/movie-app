import { StarIcon, UserIcon } from "@/components/icons"
import { Card, CardContent } from "@/components/ui/card"
import type { Movie } from "@/lib/definitions"
import Image from "next/image"

export function MovieCard({ movie, index }: { movie: Movie; index: number }) {
  return (
    <Card className="flex flex-col h-full cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
      <Image
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        width={300}
        height={500}
        alt={movie.title}
        className="rounded-t-md w-full h-64 object-cover"
        priority={index < 4}
      />
      <CardContent className="p-4 flex flex-col flex-1 justify-between">
        <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
        <p className="text-gray-400 text-lg line-clamp-3">
          {movie.overview || "No overview available."}
        </p>
        <div className="flex items-center justify-between pt-3 mt-auto">
          <div className="flex items-center space-x-1">
            <StarIcon className="w-5 h-5" />
            <span className="mr-2">
              {(Number(movie.vote_average) / 2).toFixed(1)}
            </span>
            <span>|</span>
            <UserIcon className="w-5 h-5 mr-2" />
            <span>{movie.vote_count}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
