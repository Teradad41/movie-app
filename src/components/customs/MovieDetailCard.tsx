import { CastList } from "@/components/customs/CastList"
import { CrewList } from "@/components/customs/CrewList"
import { MovieDetails } from "@/components/customs/MovieDetails"
import { ReviewList } from "@/components/customs/ReviewList"
import { BreadcrumbCustom } from "@/components/utils/MyBreadclumb"
import { ScrollIndicator } from "@/components/utils/ScrollIndicator"
import { getMovieDetail } from "@/lib/data"
import type { Movie } from "@/lib/definitions"
import { Suspense } from "react"

export async function MovieDetailPage({ movieId }: { movieId: string }) {
  const movie: Movie = await getMovieDetail(movieId)

  return (
    <div>
      <div>
        <BreadcrumbCustom tabName={"popular"} movieTitle={movie.title} />
        <MovieDetails movie={movie} />
        <ScrollIndicator />
      </div>
      <div className="w-full py-4 md:py-10 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10">
            <Suspense>
              <CastList movieId={movieId} />
            </Suspense>
            <Suspense>
              <CrewList movieId={movieId} />
            </Suspense>
            <Suspense>
              <ReviewList movieId={movieId} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
