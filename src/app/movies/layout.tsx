import { MovieTabs } from "@/components/movie-tabs"
import { PaginationCustom } from "@/components/pagination-custom"
import type React from "react"

export const dynamic = "force-dynamic"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-black md:pt-4 md:pb-20">
      <div className="container px-4 md:px-6 space-y-10">
        <MovieTabs />
        {children}
        <PaginationCustom />
      </div>
    </div>
  )
}
