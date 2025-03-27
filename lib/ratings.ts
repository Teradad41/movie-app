export function calculateRating(voteAverage: number) {
  const rating = (Number(voteAverage) / 2).toFixed(1)
  const fullStars = Math.floor(Number(rating))
  const halfStar = Number(rating) % 1 !== 0
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  return { fullStars, halfStar, emptyStars, rating }
}
