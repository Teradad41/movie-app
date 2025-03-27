import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "@/lib/data";
import { PagePresentational } from "./presentational";
import type { Topic } from "../_types";

async function fetchMovies(): Promise<Topic[]> {
  const [
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    trendingMovies,
  ] = await Promise.all([
    getNowPlayingMovies("1"),
    getPopularMovies("1"),
    getTopRatedMovies("1"),
    getUpcomingMovies("1"),
    getTrendingMovies("week"),
  ]);

  return [
    { title: "Now Playing", path: "now-playing", movies: nowPlayingMovies },
    { title: "Popular", path: "popular", movies: popularMovies },
    { title: "Top Rated", path: "top-rated", movies: topRatedMovies },
    { title: "Upcoming", path: "upcoming", movies: upcomingMovies },
    { title: "Trending", path: "trending", movies: trendingMovies },
  ];
}

export async function PageContainer() {
  const topics = await fetchMovies();

  return <PagePresentational topics={topics} />;
}
