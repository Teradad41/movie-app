export type Movie = {
  id: number
  title: string
  overview: string
  poster_path: string
  vote_average: number
  vote_count: number
}

export type SearchParams = {
  query?: string
  page?: string
}

export type Tab = "now-playing" | "popular" | "top-rated" | "upcoming"
