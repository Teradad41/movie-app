import { MovieCard2 } from "@/components/movie-card2"
import Search from "@/components/search"
import { Button } from "@/components/ui/button"
import {
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "@/lib/data"
import type { Movie } from "@/lib/definitions"
import Link from "next/link"
import { Suspense } from "react"

export async function Home() {
  const topRatedMovies: Movie[] = await getTopRatedMovies("1")
  const trendingMovies: Movie[] = await getTrendingMovies("week")
  const upcomingMovies: Movie[] = await getUpcomingMovies("1")

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-900 py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Discover the Best Movies
            </h1>
            <p className="text-gray-400 text-lg">
              Search for movies, read reviews, and share your thoughts.
            </p>
            <form className="flex items-center max-w-xl mx-auto">
              <Suspense>
                <Search placeholder="Search for a movie..." />
              </Suspense>
            </form>
          </div>
        </div>
      </section>
      <section className="pt-12 md:pt-20">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between border-b-2 border-gray-400 dark:border-white pb-4 mb-4 md:mb-8">
            <h2 className="text-2xl font-bold">Top Rated</h2>
            <Link href="/movies/top-rated" className="mt-2 text-gray-500">
              View More {">"}
              {">"}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <MovieCard2 key={String(index)} movie={topRatedMovies[index]} />
            ))}
          </div>
        </div>
      </section>
      <section className="pt-8 md:pt-12">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between border-b-2 border-gray-400 dark:border-white pb-4 mb-4 md:mb-8">
            <h2 className="text-2xl font-bold">Trending</h2>
            <Link href="/movies/top-rated" className="mt-2 text-gray-500">
              View More {">"}
              {">"}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <MovieCard2 key={String(index)} movie={trendingMovies[index]} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between border-b-2 border-gray-400 dark:border-white pb-4 mb-4 md:mb-8">
            <h2 className="text-2xl font-bold">Upcoming</h2>
            <Link href="/movies/upcoming" className="mt-2 text-gray-500">
              View More {">"}
              {">"}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <MovieCard2 key={String(index)} movie={upcomingMovies[index]} />
            ))}
          </div>
        </div>
        {/*<div className="mt-12 md:mt-20 text-center">*/}
        {/*  <Button*/}
        {/*    className="bg-primary font-bold py-6 px-5 rounded-md hover:bg-primary/80 focus:ring-2 focus:ring-primary focus:outline-none">*/}
        {/*    Explore More →*/}
        {/*  </Button>*/}
        {/*</div>*/}
      </section>
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl font-bold mb-2">Movie Reviews</h2>
            <p className="text-gray-500">
              Read reviews from other users and share your own thoughts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/*card here*/}
          </div>
          <div className="mt-8 md:mt-12 text-center">
            <Button className="bg-primary font-bold py-3 rounded-md hover:bg-primary/80 focus:ring-2 focus:ring-primary focus:outline-none">
              Write a Review
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
