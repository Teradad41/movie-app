import { Footer } from "@/components/custom-ui/footer"
import { MovieTabs } from "@/components/custom-ui/movie-tabs"
import { PaginationCustom } from "@/components/custom-ui/pagination-custom"
import type React from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="dark:bg-black md:pt-4 md:pb-20">
        <div className="container px-4 md:px-6 space-y-10">
          <MovieTabs />
          {children}
          <PaginationCustom />
        </div>
      </div>
      <Footer />
    </>
  )
}
