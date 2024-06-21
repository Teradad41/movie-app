import { MovieCard } from "@/components/custom-ui/movie-card"
import type { Movie } from "@/lib/definitions"

export function MovieCardsList({ movies }: { movies: Movie[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {movies.map((movie, index) => (
        <MovieCard key={movie.id} movie={movie} index={index} />
      ))}
    </div>
  )
}
