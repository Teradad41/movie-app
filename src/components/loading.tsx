export function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="inline-flex items-center space-x-2">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-500 border-t-transparent" />
        <p className="text-gray-500">Loading...</p>
      </div>
    </div>
  )
}
