import Link from "next/link";

import type { Topic } from "@/app/_types";
import { MovieCard } from "@/app/_components/_card/MovieCard";

type Props = {
  topic: Topic;
};

export function MovieSection({ topic }: Props) {
  return (
    <section className="pt-12 md:pt-20">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between border-b-2 border-gray-400 dark:border-white pb-4 mb-4 md:mb-8">
          <h2 className="text-2xl font-bold">{topic.title}</h2>
          <Link
            href={`/movies/${topic.path}`}
            className="mt-2 text-gray-500 dark:text-gray-300"
          >
            View More {">"}
            {">"}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, movieIndex) => (
            <MovieCard
              key={`${topic.title}-${movieIndex}`}
              movie={topic.movies[movieIndex]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
