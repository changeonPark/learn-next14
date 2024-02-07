const URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

const getVideo = async (id: string) => {
  console.log(`fetching vidoes: ${Date.now()}`)
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch(`${URL}/${id}/videos`)

  return response.json()
}

const MovieVideos = async ({ id }: { id: string }) => {
  const video = await getVideo(id)

  return <h6>{JSON.stringify(video)}</h6>
}

export default MovieVideos
