import type { Movie } from "@/lib/definitions";

export type Topic = {
  title: string;
  path: string;
  movies: Movie[];
};
