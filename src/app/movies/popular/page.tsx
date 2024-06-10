import { MovieCard } from "@/components/movie-card"
import { MovieTabs } from "@/components/movie-tabs"
import { PaginationCustom } from "@/components/pagination-custom"
import { getPopularMovies } from "@/lib/data"
import type { Movie } from "@/lib/definitions"
import type { SearchParams } from "@/lib/definitions"

export const metadata = {
  title: "Popular",
}

export default async function Page({
  searchParams,
}: { searchParams: SearchParams }) {
  const currentPage = Number(searchParams?.page) || 1
  const fetchedMovies: Movie[] = await getPopularMovies(String(currentPage))

  return (
    <section className="dark:bg-black pt-3 pb-12 md:pt-4 md:pb-20">
      <div className="container px-4 md:px-6 space-y-10">
        <MovieTabs />
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold mb-2">Popular</h2>
          <p className="text-gray-500">Check out the popular movie releases.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fetchedMovies.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} index={index} />
          ))}
        </div>
        <PaginationCustom />
      </div>
    </section>
  )
}
