import { ReviewItem } from "@/components/custom-ui/review-item"
import { getMovieReviews } from "@/lib/data"
import type { Review } from "@/lib/definitions"

export async function ReviewList({ movieId }: { movieId: string }) {
  const reviews: Review[] = await getMovieReviews(movieId)

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold my-6">Reviews</h2>
      {reviews.length === 0 && <p className="text-gray-500">No reviews yet</p>}
      <div className="grid gap-6">
        {reviews.map((review: Review) => (
          <div key={review.id}>
            <ReviewItem review={review} />
          </div>
        ))}
      </div>
    </div>
  )
}
