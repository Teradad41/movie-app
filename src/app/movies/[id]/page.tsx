export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Movie ${params.id}`,
    description: `Description for Movie ${params.id}`,
  }
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Movie {params.id}</h1>
    </div>
  )
}
