const URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

const getMovie = async (id: string) => {
  console.log(`fetching movies: ${Date.now()}`)
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch(`${URL}/${id}`)

  return response.json()
}

const getVideo = async (id: string) => {
  console.log(`fetching vidoes: ${Date.now()}`)
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch(`${URL}/${id}/videos`)

  return response.json()
}

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  // { params: { id: '1' }, searchParams: { region: 'kr', page: '2' } }
  console.time("fetching")
  const [movie, video] = await Promise.all([getMovie(id), getVideo(id)])
  console.timeEnd("fetching")

  return <h1>Movie: {movie.title}</h1>
}

export default Page
