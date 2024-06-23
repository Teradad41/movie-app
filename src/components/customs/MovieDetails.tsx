import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { BeforeFavoriteHeartIcon, UserIcon } from "@/components/utils/Icons"
import { ReviewStars } from "@/components/utils/ReviewStars"
import type { MovieDetail } from "@/lib/definitions"
import { calculateRating } from "@/lib/ratings"
import Image from "next/image"
import type React from "react"

export const MovieDetails = ({ movie }: { movie: MovieDetail }) => {
  const { rating, fullStars, halfStar, emptyStars } = calculateRating(
    movie.vote_average,
  )

  return (
    <div className="py-6 md:py-12 lg:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            width={600}
            height={900}
            alt="Movie Poster"
            quality={100}
            priority={true}
            className="w-full max-w-[400px] mx-auto rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <h1 className="text-3xl md:text-4xl font-bold">{movie.title}</h1>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <BeforeFavoriteHeartIcon />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to Favorite</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {/*<AfterFavoriteHearIcon />*/}
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            {movie.tagline || "No tagline available"}
          </p>
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
          <p className="text-gray-500 dark:text-gray-400 text-lg pt-5">
            {movie.overview || "No plot summary available"}
          </p>
          <h2 className="text-2xl font-bold pt-6">Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col gap-2">
              <p className="font-medium">Release Date</p>
              <p className="text-gray-500 dark:text-gray-400">
                {movie.release_date}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium">Runtime</p>
              <p className="text-gray-500 dark:text-gray-400">
                {movie.runtime} min
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium">Genre</p>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <div key={genre.id}>
                    <Badge>{genre.name}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
