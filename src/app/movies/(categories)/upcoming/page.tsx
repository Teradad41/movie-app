import Loading from "@/app/movies/(categories)/loading"
import { MovieCardList } from "@/components/customs/MovieCardList"
import { getUpcomingMovies } from "@/lib/data"
import type { Movie } from "@/lib/definitions"
import type { SearchParams } from "@/lib/definitions"
import { Suspense } from "react"

export const metadata = {
  title: "Upcoming",
}

export default async function Page({
  searchParams,
}: { searchParams: SearchParams }) {
  const currentPage = Number(searchParams?.page) || 1
  const fetchedMovies: Movie[] = await getUpcomingMovies(String(currentPage))

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-2 mt-10">{metadata.title}</h2>
        <p className="text-gray-500">
          Check out the {metadata.title.toLowerCase()} movie releases.
        </p>
      </div>
      <Suspense fallback={<Loading />}>
        <MovieCardList movies={fetchedMovies} />
      </Suspense>
    </>
  )
}
