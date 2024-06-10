export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12 dark:border-gray-600 dark:border-t-gray-50" />
      <p className="mt-4 text-gray-500 dark:text-gray-400">Loading...</p>
    </div>
  )
}
