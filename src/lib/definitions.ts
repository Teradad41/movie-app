export type Movie = {
  id: number
  title: string
  overview: string
  poster_path: string
  vote_average: number
  vote_count: number
}

export type MovieDetail = Movie & {
  runtime: number
  tagline: string
  release_date: string
  genres: { id: number; name: string }[]
}

export type Cast = {
  id: number
  gender: number
  original_name: string
  popularity: number
  profile_path: string
  character: string
}

export type SearchParams = {
  query?: string
  page?: string
}

export type Topic = {
  title: string
  path: Tab
  action: () => Promise<Movie[]>
}

export type Tab =
  | "now-playing"
  | "popular"
  | "top-rated"
  | "upcoming"
  | "trending"
