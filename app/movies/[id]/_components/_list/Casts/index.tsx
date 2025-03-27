import { UserIcon } from "@/components/utils/Icons"
import { getMovieCastsAndCrews } from "@/lib/data"
import type { Cast } from "@/lib/definitions"
import Image from "next/image"
import type React from "react"

export const CastList = async ({ movieId }: { movieId: string }) => {
  const casts: Cast[] = await getMovieCastsAndCrews(movieId, "cast")

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-10">Casts</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {casts.map((cast) => (
          <div key={cast.id} className="flex flex-col items-center space-y-2">
            <div className="relative">
              {cast.profile_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
                  width={80}
                  height={80}
                  alt="Avatar"
                  className="rounded-xl"
                />
              )}
              {!cast.profile_path && (
                <div className="py-12">
                  <UserIcon />
                </div>
              )}
            </div>
            <div className="text-center text-sm">
              <p className="font-medium">{cast.original_name}</p>
              <p className="text-gray-500 dark:text-gray-400">
                as {cast.character}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
