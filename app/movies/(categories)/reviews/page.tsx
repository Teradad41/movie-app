export const metadata = {
  title: "Reviews",
}

export default function Page() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 mt-10">{metadata.title}</h2>
      <p className="text-gray-500">
        Here you can find reviews of the movies you love.
      </p>
    </div>
  )
}
