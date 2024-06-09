"use client"

import { PaginationCustom } from "@/components/pagination-custom"
import { StarIcon } from "@/components/star-icon"
import { Card, CardContent } from "@/components/ui/card"
import { Movie } from "@/lib/definitions"
import { SearchParams } from "@/lib/definitions"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  const [movies, setMovies] = useState<Movie[]>([])
  const currentPage = Number(searchParams?.page) || 1

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }

    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movie/now_playing?language=ja-JA&page=${currentPage}`,
      options,
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results || [])
      })
      .catch((err) => console.error(err))
  }, [currentPage])

  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6 space-y-10">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold mb-2">Now Playing</h2>
          <p className="text-gray-500">Check out the latest movie releases.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie, index) => (
            <Card key={index} className="flex flex-col h-full">
              <Image
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                width={300}
                height={500}
                alt={movie.title}
                className="rounded-t-md object-cover w-full h-64"
                priority={index < 4}
              />
              <CardContent className="p-4 flex flex-col flex-1 justify-between">
                <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
                <p className="text-gray-400 text-lg line-clamp-3">
                  {movie.overview || "No overview available."}
                </p>
                <div className="flex items-center justify-between pt-3 mt-auto">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <StarIcon className="w-5 h-5" />
                    <span>{(Number(movie.vote_average) / 2).toFixed(1)}</span>
                  </div>
                  <Link
                    aria-disabled={true}
                    href={`/movies/${movie.id}`}
                    className="text-primary hover:underline"
                    prefetch={false}
                  >
                    View More
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <PaginationCustom />
      </div>
    </section>
  )
}
