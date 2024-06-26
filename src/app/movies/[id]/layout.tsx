import { MovieTabs } from "@/components/customs/MovieTabs"
import { Toaster } from "@/components/ui/toaster"
import type React from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-black md:py-4 md:pb-20">
      <div className="container px-4 md:px-6">
        <MovieTabs />
        {children}
        <Toaster />
      </div>
    </div>
  )
}
