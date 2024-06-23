import { UserIcon } from "@/components/utils/Icons"
import { ReviewStars } from "@/components/utils/ReviewStars"
import type { Review } from "@/lib/definitions"
import { calculateRating } from "@/lib/ratings"
import Image from "next/image"
import Link from "next/link"

export function ReviewItem({ review }: { review: Review }) {
  const { rating, fullStars, halfStar, emptyStars } = calculateRating(
    review.author_details.rating ?? 0,
  )

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
      <div className="flex items-center gap-4 mb-4">
        {review.author_details.avatar_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w300${review.author_details.avatar_path}`}
            width={40}
            height={40}
            alt="User Avatar"
            className="rounded-full"
          />
        ) : (
          <div className="px-2 h-10 w-10 bg-gray-200 dark:bg-black rounded-full flex justify-center items-center">
            <UserIcon />
          </div>
        )}
        <div>
          <h3 className="text-lg font-medium pb-1">
            {review.author_details.name || "Guest"}
          </h3>
          {review.author_details.rating && (
            <div className="flex items-center gap-0.5">
              <ReviewStars
                fullStars={fullStars}
                halfStar={halfStar}
                emptyStars={emptyStars}
              />
              <p className="pl-1.5">{rating}</p>
            </div>
          )}
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-400 line-clamp-4">
        {review.content}
      </p>
      {review.content.length > 800 && (
        <div className="flex justify-end pt-1">
          <Link
            href={review.url}
            prefetch={false}
            className="text-blue-500 hover:underline focus:outline-none "
          >
            Read more
          </Link>
        </div>
      )}
    </div>
  )
}
