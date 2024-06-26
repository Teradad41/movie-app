import { Footer } from "@/components/customs/Footer"
import { HomeMovieCard } from "@/components/customs/HomeMovieCard"
import { Button } from "@/components/ui/button"
import Search from "@/components/utils/Search"
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "@/lib/data"
import type { Movie } from "@/lib/definitions"
import Link from "next/link"
import { Suspense } from "react"

type Topic = {
  title: string
  path: string
  movies: Movie[]
}

async function fetchMovies(): Promise<Topic[]> {
  const [
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    trendingMovies,
  ] = await Promise.all([
    getNowPlayingMovies("1"),
    getPopularMovies("1"),
    getTopRatedMovies("1"),
    getUpcomingMovies("1"),
    getTrendingMovies("week"),
  ])

  return [
    { title: "Now Playing", path: "now-playing", movies: nowPlayingMovies },
    { title: "Popular", path: "popular", movies: popularMovies },
    { title: "Top Rated", path: "top-rated", movies: topRatedMovies },
    { title: "Upcoming", path: "upcoming", movies: upcomingMovies },
    { title: "Trending", path: "trending", movies: trendingMovies },
  ]
}

export async function Home() {
  const topics: Topic[] = await fetchMovies()

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-[#141e30] to-[#243b55] py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Discover the Best Movies
            </h1>
            <p className="text-gray-400 text-lg">
              Search for movies, read reviews, and share your thoughts.
            </p>
            <div className="flex justify-center">
              <Suspense>
                <div className="w-full max-w-md">
                  <Search placeholder="Search for a movie..." />
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {topics.map((topic: Topic) => (
        <section key={topic.title} className="pt-12 md:pt-20">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between border-b-2 border-gray-400 dark:border-white pb-4 mb-4 md:mb-8">
              <h2 className="text-2xl font-bold">{topic.title}</h2>
              <Link
                href={`/movies/${topic.path}`}
                className="mt-2 text-gray-500 dark:text-gray-300"
              >
                View More {">"}
                {">"}
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, movieIndex) => (
                <HomeMovieCard
                  key={topic.title + String(movieIndex)}
                  movie={topic.movies[movieIndex]}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl font-bold mb-2">Movie Reviews</h2>
            <p className="text-gray-500">
              Read reviews from other users and share your own thoughts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" />
          <div className="mt-8 md:mt-12 text-center">
            <Button className="bg-primary font-bold py-3 rounded-md hover:bg-primary/80 focus:ring-2 focus:ring-primary focus:outline-none">
              Write a Review
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
