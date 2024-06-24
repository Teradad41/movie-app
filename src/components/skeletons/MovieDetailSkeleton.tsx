import { Skeleton } from "@/components/ui/skeleton"

export function MovieDetailsSkeleton() {
  return (
    <>
      <Skeleton className="h-6 w-1/4 bg-gray-200 dark:bg-gray-800 rounded" />
      <div className="py-6 md:py-12 lg:py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
          <div className="flex justify-center">
            <Skeleton className="w-[400px] h-[600px] bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <Skeleton className="h-10 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
              <Skeleton className="h-10 w-10 bg-gray-200 dark:bg-gray-800 rounded-full" />
            </div>
            <Skeleton className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
            <div className="flex items-center pb-6">
              <Skeleton className="h-6 w-36 bg-gray-200 dark:bg-gray-800 rounded" />
            </div>
            <div className="space-y-10">
              <Skeleton className="h-32 bg-gray-200 dark:bg-gray-800 rounded" />
              <Skeleton className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex flex-col gap-2">
                  <Skeleton className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
                  <Skeleton className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {[1, 2, 3].map((item) => (
                <Skeleton
                  key={item}
                  className="h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
