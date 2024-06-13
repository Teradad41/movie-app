import Loading from "@/app/movies/(categories)/loading"
import { Footer } from "@/components/footer"
import { MovieTabs } from "@/components/movie-tabs"
import { PaginationCustom } from "@/components/pagination-custom"
import type React from "react"
import { Suspense } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="dark:bg-black md:pt-4 md:pb-20">
        <div className="container px-4 md:px-6 space-y-10">
          <MovieTabs />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <PaginationCustom />
        </div>
      </div>
      <Footer />
    </>
  )
}
