import Loading from "@/app/movies/(categories)/loading"
import { MovieCardList } from "@/components/customs/MovieCardList"
import { getNowPlayingMovies } from "@/lib/data"
import type { Movie } from "@/lib/definitions"
import type { SearchParams } from "@/lib/definitions"
import { Suspense } from "react"

export const metadata = {
  title: "Now Playing",
}

async function MovieList({ currentPage }: { currentPage: number }) {
  const fetchedMovies: Movie[] = await getNowPlayingMovies(String(currentPage))
  return <MovieCardList movies={fetchedMovies} />
}

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  const currentPage = Number(searchParams?.page) || 1

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-2 mt-10">{metadata.title}</h2>
        <p className="text-gray-500">Check out the latest movie releases.</p>
      </div>
      <Suspense fallback={<Loading />}>
        <MovieList currentPage={currentPage} />
      </Suspense>
    </>
  )
}
