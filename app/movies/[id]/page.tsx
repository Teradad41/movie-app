import { Suspense } from "react";
import { PageContainer } from "./_containers";
import { MovieDetailsSkeleton } from "@/components/skeletons/MovieDetailSkeleton";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function MovieDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <Suspense fallback={<MovieDetailsSkeleton />}>
      <PageContainer movieId={id} />
    </Suspense>
  );
}
