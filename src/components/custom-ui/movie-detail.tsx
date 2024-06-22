import { ScrollIndicator } from "@/components/custom-ui/ScrollIndicator"
import { BreadcrumbCustom } from "@/components/custom-ui/breadclumb-custom"
import { UserIcon } from "@/components/custom-ui/icons"
import { ReviewList } from "@/components/custom-ui/review-list"
import { ReviewStars } from "@/components/custom-ui/review-stars"
import { Badge } from "@/components/ui/badge"
import { getMovieCastsAndCrews, getMovieDetail } from "@/lib/data"
import type { Cast, Crew, MovieDetail } from "@/lib/definitions"
import { calculateRating } from "@/lib/ratings"
import Image from "next/image"
import { Suspense } from "react"

export async function MovieDetailPage({ movieId }: { movieId: string }) {
  const movie: MovieDetail = await getMovieDetail(movieId)
  const { casts, crews } = await getMovieCastsAndCrews(movieId)
  const { rating, fullStars, halfStar, emptyStars } = calculateRating(
    movie.vote_average,
  )

  return (
    <div>
      <section className="w-full bg-gray-100 dark:bg-gray-800">
        <div className="container pt-5 px-6">
          <BreadcrumbCustom tabName={"popular"} movieTitle={movie.title} />
        </div>
        <div className="py-12 md:py-24 lg:py-32">
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
              <h1 className="text-3xl md:text-4xl font-bold">{movie.title}</h1>
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
        <ScrollIndicator />
      </section>

      <section className="w-full py-4 md:py-10 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10">
            {/*casts*/}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-10">Casts</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {casts.map((cast: Cast) => (
                  <div
                    key={cast.id}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="relative">
                      {cast.profile_path && (
                        <Image
                          src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
                          width={80}
                          height={80}
                          alt="Avatar"
                          className="rounded-xl"
                        />
                      )}
                      {!cast.profile_path && (
                        <div className="py-12">
                          <UserIcon />
                        </div>
                      )}
                    </div>
                    <div className="text-center text-sm">
                      <p className="font-medium">{cast.original_name}</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        as {cast.character}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/*crews*/}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-10">Crews</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {crews.map((crew: Crew) => (
                  <div
                    key={crew.id}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="relative">
                      {crew.profile_path && (
                        <Image
                          src={`https://image.tmdb.org/t/p/w300${crew.profile_path}`}
                          width={80}
                          height={80}
                          alt="Avatar"
                          className="rounded-xl"
                        />
                      )}
                      {!crew.profile_path && (
                        <div className="py-12">
                          <UserIcon />
                        </div>
                      )}
                    </div>
                    <div className="text-center text-sm">
                      <p className="font-medium">{crew.original_name}</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        {crew.job}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Suspense>
              <ReviewList movieId={movieId} />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  )
}
