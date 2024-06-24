export const metadata = {
  title: "Favorites",
}

export default async function Page() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-2 mt-10">{metadata.title}</h2>
        <p className="text-gray-500">Explore your favorite movies.</p>
      </div>
    </>
  )
}
