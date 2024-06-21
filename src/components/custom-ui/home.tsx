import { Footer } from "@/components/custom-ui/footer"
import { MovieCard2 } from "@/components/custom-ui/movie-card2"
import Search from "@/components/custom-ui/search"
import { Button } from "@/components/ui/button"
import { topics } from "@/lib/data"
import type { Movie, Topic } from "@/lib/definitions"
import Link from "next/link"
import { Suspense } from "react"

export async function Home() {
  const shuffledTopics = topics.sort(() => Math.random() - 0.5)
  const randomTopics = shuffledTopics.slice(0, 3)
  const fetchedMovies: Movie[][] = await Promise.all(
    randomTopics.map((topic: Topic) => topic.action()),
  )

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

      {randomTopics.map((topic: Topic, topicIndex: number) => (
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
                <MovieCard2
                  key={fetchedMovies[topicIndex][movieIndex].id}
                  movie={fetchedMovies[topicIndex][movieIndex]}
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
      <Footer />
    </div>
  )
}
