import Loading from "@/app/movies/(categories)/loading"
import { MovieCardsList } from "@/components/custom-ui/movie-cards-list"
import { getNowPlayingMovies } from "@/lib/data"
import type { Movie } from "@/lib/definitions"
import type { SearchParams } from "@/lib/definitions"
import { Suspense } from "react"

export const metadata = {
  title: "Now Playing",
}

export default async function Page({
  searchParams,
}: { searchParams: SearchParams }) {
  const currentPage = Number(searchParams?.page) || 1
  const fetchedMovies: Movie[] = await getNowPlayingMovies(String(currentPage))

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-2">{metadata.title}</h2>
        <p className="text-gray-500">Check out the latest movie releases.</p>
      </div>
      <Suspense fallback={<Loading />}>
        <MovieCardsList movies={fetchedMovies} />
      </Suspense>
    </>
  )
}
