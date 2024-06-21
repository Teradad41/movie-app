import {
  EmptyStarIcon,
  HalfStarIcon,
  StarIcon,
  UserIcon,
} from "@/components/icons"
import { getMovieCasts, getMovieDetail } from "@/lib/data"
import type { Cast, MovieDetail } from "@/lib/definitions"
import { calculateRating } from "@/lib/ratings"
import Image from "next/image"

export async function MovieDetailPage({ movieId }: { movieId: string }) {
  const movie: MovieDetail = await getMovieDetail(movieId)
  const casts: Cast[] = await getMovieCasts(movieId)
  const { rating, fullStars, halfStar, emptyStars } = calculateRating(movie.vote_average)

  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
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
              {Array.from({ length: fullStars }).map((_, index) => (
                <StarIcon
                  key={String(index)}
                  className="w-5 h-5 text-yellow-400"
                />
              ))}
              {halfStar && <HalfStarIcon className="w-5 h-5 text-yellow-400" />}
              {Array.from({ length: emptyStars }).map((_, index) => (
                <EmptyStarIcon
                  key={String(index)}
                  className="w-5 h-5 text-gray-400"
                />
              ))}
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
                    <span
                      key={genre.id}
                      className="inline-block bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-800 text-sm font-semibold px-3 py-1 rounded-full"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-4 md:py-10 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-10">Cast</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {casts.map((cast) => (
                  <div
                    key={cast.id}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="relative">
                      <Image
                        src={
                          cast.profile_path
                            ? `https://image.tmdb.org/t/p/w300${cast.profile_path}`
                            : "/default-avatar.png"
                        }
                        width={80}
                        height={80}
                        alt="Avatar"
                        className="rounded-xl"
                      />
                      {!cast.profile_path && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-400 dark:text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            role={"img"}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
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
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Reviews</h2>
              <div className="grid gap-6">
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src="/placeholder.svg"
                      width={40}
                      height={40}
                      alt="User Avatar"
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-medium">John Doe</h3>
                      <div className="flex items-center gap-0.5">
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Interstellar is a masterpiece of science fiction filmmaking.
                    The visuals are stunning, the story is thought-provoking,
                    and the performances are outstanding. This is a must-see for
                    any fan of the genre.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src="/placeholder.svg"
                      width={40}
                      height={40}
                      alt="User Avatar"
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-medium">Jane Smith</h3>
                      <div className="flex items-center gap-0.5">
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Interstellar is a stunning and emotional journey that left
                    me thinking for days. The performances are incredible, and
                    the visuals are breathtaking. This is a film that deserves
                    to be seen on the biggest screen possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
