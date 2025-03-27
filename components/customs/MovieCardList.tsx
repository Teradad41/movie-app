import { CategoryMovieCard } from "@/components/customs/CategoryMovieCard"
import type { Movie } from "@/lib/definitions"

export function MovieCardList({ movies }: { movies: Movie[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {movies.map((movie, index) => (
        <CategoryMovieCard key={movie.id} movie={movie} index={index} />
      ))}
    </div>
  )
}
