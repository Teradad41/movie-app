import { UserIcon } from "@/components/utils/Icons"
import { getMovieCastsAndCrews } from "@/lib/data"
import type { Crew } from "@/lib/definitions"
import Image from "next/image"
import type React from "react"

export const CrewList = async ({ movieId }: { movieId: string }) => {
  const crews: Crew[] = await getMovieCastsAndCrews(movieId, "crew")

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-10">Crews</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {crews.map((crew, index) => (
          <div key={`${crew.id}-${index}`} className="flex flex-col items-center space-y-2">
            <div className="relative">
              {crew.profile_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/w300${crew.profile_path}`}
                  width={80}
                  height={80}
                  alt="Avatar"
                  className="rounded-xl"
                />
              )}
              {!crew.profile_path && (
                <div className="py-12">
                  <UserIcon />
                </div>
              )}
            </div>
            <div className="text-center text-sm">
              <p className="font-medium">{crew.original_name}</p>
              <p className="text-gray-500 dark:text-gray-400">{crew.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
