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
  original_name: string
  popularity: number
  profile_path: string
  character: string
}

export type Crew = {
  id: number
  original_name: string
  profile_path: string
  job: string
}

export type Review = {
  id: string
  author_details: {
    name: string
    username: string
    avatar_path: string | null
    rating: number | null
  }
  content: string
  created_at: string
  url: string
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
  | "favorites"
  | "reviews"
