import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"

export function CustomSkeleton() {
  return (
    <>
      <div className="py-2">
        <Skeleton className="h-7 w-32 bg-gray-200 dark:bg-gray-800 mb-2" />
        <Skeleton className="h-4 w-64 bg-gray-200 dark:bg-gray-800" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={String(index)}
            className="flex flex-col h-full border border-gray-200 dark:border-none rounded-3xl transition-transform duration-300 ease-in-out"
          >
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Movie</span>
            </Link>
            <Skeleton className="w-full h-80 bg-gray-200 dark:bg-gray-800" />
            <Skeleton className="p-4 bg-white dark:bg-gray-950">
              <Skeleton className="h-6 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-2" />
              <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-4" />
              <Skeleton className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <Skeleton className="h-5 w-5 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse mr-1" />
                <Skeleton className="h-4 w-10 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                <Skeleton className="mx-2">|</Skeleton>
                <Skeleton className="h-5 w-5 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse mr-1" />
                <Skeleton className="h-4 w-10 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              </Skeleton>
            </Skeleton>
          </div>
        ))}
      </div>
    </>
  )
}
