import Loading from "@/app/movies/[id]/loading"
import { MovieDetailPage } from "@/components/customs/MovieDetailCard"
import { Suspense } from "react"

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  return (
    <Suspense fallback={<Loading />}>
      <MovieDetailPage movieId={params.id} />
    </Suspense>
  )
}
