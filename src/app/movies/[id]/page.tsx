import Loading from "@/app/movies/(categories)/loading"
import { MovieDetailPage } from "@/components/customs/MovieDetailCard"
import { Suspense } from "react"

export default function Page({ params }: { params: { id: string } }) {
  return (
    // 一旦 tab 用の Suspense で代用
    <Suspense fallback={<Loading />}>
      <MovieDetailPage movieId={params.id} />
    </Suspense>
  )
}
