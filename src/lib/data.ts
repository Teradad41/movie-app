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
    `${process.env.NEXT_PUBLIC_API_URL}${endpoint}?language=ja-JA&page=${pageNumber}`,
    options,
  )
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint} movies`)
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
