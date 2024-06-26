import Loading from "@/app/movies/(categories)/loading"
import { MovieCardList } from "@/components/customs/MovieCardList"
import type { Movie } from "@/lib/definitions"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { Suspense } from "react"

export const metadata = {
  title: "Favorites",
}

async function FavoriteMovieList() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  const response = await supabase
    .from("favorites")
    .select("movie_id, title, overview, poster_path, vote_average, vote_count")

  if (response.error) {
    console.error(
      "An error occurred while fetching the favorites",
      response.error,
    )
    return null
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const data: Movie[] = response.data.map((item: any) => ({
    id: item.movie_id,
    title: item.title,
    overview: item.overview,
    poster_path: item.poster_path,
    vote_average: item.vote_average,
    vote_count: item.vote_count,
  }))

  return <MovieCardList movies={data} />
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-bold mb-2 mt-10">
            Your {metadata.title}
          </h2>
          <p className="text-gray-500">Explore your favorite movies.</p>
        </div>
        <FavoriteMovieList />
      </div>
    </Suspense>
  )
}
