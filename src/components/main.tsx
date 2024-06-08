import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { JSX, SVGProps } from "react"

export function Main() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="flex-1 bg-gray-100 dark:bg-gray-950 py-8">
        <div className="container mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <nav className="flex justify-center space-x-4">
              <Button>Top Rated</Button>
              <Button>Popular</Button>
              <Button>Upcoming</Button>
            </nav>
            <div className="relative">
              <Input
                className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white pl-4 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search movies..."
                type="text"
              />
              <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" />
        </div>
      </div>
    </div>
  )
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={"img"}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
