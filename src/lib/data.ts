import type { Topic } from "@/lib/definitions"

export const topics: Topic[] = [
  {
    title: "Now Playing",
    path: "now-playing",
    action: () => getNowPlayingMovies("1"),
  },
  {
    title: "Popular",
    path: "popular",
    action: () => getPopularMovies("1"),
  },
  {
    title: "Top Rated",
    path: "top-rated",
    action: () => getTopRatedMovies("1"),
  },
  {
    title: "Upcoming",
    path: "upcoming",
    action: () => getUpcomingMovies("1"),
  },
  {
    title: "Trending",
    path: "trending",
    action: () => getTrendingMovies("week"),
  },
]

const options = {
  method: "GET",
  next: { revalidate: 1800 },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
}

async function fetchMovies(endpoint: string, pageNumber: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoint}?language=ja-JP&page=${pageNumber}`,
    options,
  )
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint} movies`)
  }
  const data = await res.json()
  return data.results
}

export async function getMovieDetail(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/${id}?language=ja-JP`,
    options,
  )
  if (!res.ok) {
    throw new Error("Failed to fetch movie detail")
  }
  return await res.json()
}

export async function getMovieCastsAndCrews(id: string, type: "cast" | "crew") {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/${id}/credits?language=ja-JP`,
    options,
  )
  if (!res.ok) {
    throw new Error("Failed to fetch movie credits")
  }
  const data = await res.json()

  if (type === "cast") {
    return data.cast.slice(0, 10)
  }
  return data.crew.slice(0, 5)
}

export async function getMovieReviews(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/${id}/reviews?page=1`,
    options,
  )
  if (!res.ok) {
    throw new Error("Failed to fetch movie reviews")
  }
  const data = await res.json()
  return data.results
}

export async function getNowPlayingMovies(pageNumber: string) {
  return fetchMovies("/movie/now_playing", pageNumber)
}

export async function getPopularMovies(pageNumber: string) {
  return fetchMovies("/movie/popular", pageNumber)
}

export async function getTopRatedMovies(pageNumber: string) {
  return fetchMovies("/movie/top_rated", pageNumber)
}

export async function getUpcomingMovies(pageNumber: string) {
  return fetchMovies("/movie/upcoming", pageNumber)
}

export async function getTrendingMovies(timeWindow: "day" | "week") {
  return fetchMovies(`/trending/movie/${timeWindow}`, "1")
}
