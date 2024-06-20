import Loading from "@/app/movies/(categories)/loading"
import { MovieCardsList } from "@/components/movie-cards-list"
import { getTrendingMovies } from "@/lib/data"
import type { Movie } from "@/lib/definitions"
import type { SearchParams } from "@/lib/definitions"
import { Suspense } from "react"

export const metadata = {
  title: "Trending",
}

export default async function Page({
  searchParams,
}: { searchParams: SearchParams }) {
  const currentPage = Number(searchParams?.page) || 1
  const fetchedMovies: Movie[] = await getTrendingMovies("week")

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-2">{metadata.title}</h2>
        <p className="text-gray-500">
          Check out the {metadata.title.toLowerCase()} movie releases.
        </p>
      </div>
      <Suspense fallback={<Loading />}>
        <MovieCardsList movies={fetchedMovies} />
      </Suspense>
    </>
  )
}
