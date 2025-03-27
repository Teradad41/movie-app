import type { Movie } from "@/lib/definitions";

import { CastList } from "@/app/movies/[id]/_components/_list/Casts";
import { CrewList } from "@/app/movies/[id]/_components/_list/Crews";
import { MovieDetails } from "@/app/movies/[id]/_components/_card/MovieDetail";
import { ReviewList } from "@/app/movies/[id]/_components/_list/Reviews";
import { BreadcrumbCustom } from "@/components/utils/MyBreadclumb";
import { ScrollIndicator } from "@/components/utils/ScrollIndicator";
import { Suspense } from "react";

type Props = {
  movieId: string;
  movie: Movie;
};

export function PagePresentational({ movieId, movie }: Props) {
  return (
    <>
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
              {/* <div className="mt-8 md:mt-6 text-center">
                <Button className="bg-primary font-bold py-3 rounded-md hover:bg-primary/80 focus:ring-2 focus:ring-primary focus:outline-none">
                  Write a Review
                </Button>
                <ReviewForm />
              </div> */}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
