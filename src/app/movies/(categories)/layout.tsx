import { Footer } from "@/components/customs/Footer"
import { MovieTabs } from "@/components/customs/MovieTabs"
import { MyPagination } from "@/components/utils/MyPagination"
import type React from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="dark:bg-black md:py-4 md:pb-20">
        <div className="container px-4 md:px-6">
          <MovieTabs />
          <div className="space-y-10">
            {children}
            <div className="pt-4 sm:pt-6 md:pt-8 pb-10 md:pb-0">
              <MyPagination />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
