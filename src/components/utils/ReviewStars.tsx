import { EmptyStarIcon, HalfStarIcon, StarIcon } from "@/components/utils/Icons"

type ReviewStarsProps = {
  fullStars: number
  halfStar: boolean
  emptyStars: number
}

export function ReviewStars({
  fullStars,
  halfStar,
  emptyStars,
}: ReviewStarsProps) {
  return (
    <>
      {Array.from({ length: fullStars }).map((_, index) => (
        <StarIcon key={String(index)} className="w-5 h-5 text-yellow-400" />
      ))}
      {halfStar && <HalfStarIcon className="w-5 h-5 text-yellow-400" />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <EmptyStarIcon key={String(index)} className="w-5 h-5 text-gray-400" />
      ))}
    </>
  )
}
