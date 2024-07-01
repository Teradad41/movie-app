import { CastList } from "@/components/customs/CastList"
import { CrewList } from "@/components/customs/CrewList"
import { MovieDetails } from "@/components/customs/MovieDetails"
import { ReviewForm } from "@/components/customs/ReviewForm"
import { ReviewList } from "@/components/customs/ReviewList"
import { Button } from "@/components/ui/button"
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
        <BreadcrumbCustom movieTitle={movie.title} />
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
              <div className="mt-8 md:mt-6 text-center">
                <Button className="bg-primary font-bold py-3 rounded-md hover:bg-primary/80 focus:ring-2 focus:ring-primary focus:outline-none">
                  Write a Review
                </Button>
                <ReviewForm />
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
