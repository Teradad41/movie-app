import { MovieDetailPage } from "@/components/custom-ui/movie-detail"
import { Suspense } from "react"

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <Suspense>
      <MovieDetailPage movieId={params.id} />
    </Suspense>
  )
}
