import { getMovieDetail } from "@/lib/data";
import { PagePresentational } from "./presentational";

type Props = {
  movieId: string;
};

export async function PageContainer({ movieId }: Props) {
  const movie = await getMovieDetail(movieId);

  return <PagePresentational movieId={movieId} movie={movie} />;
}
