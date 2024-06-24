import Loading from "@/app/movies/[id]/loading"
import { MovieDetailPage } from "@/components/customs/MovieDetailCard"
import { Suspense } from "react"

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <MovieDetailPage movieId={params.id} />
    </Suspense>
  )
}
