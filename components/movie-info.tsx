const URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

const getMovie = async (id: string) => {
  console.log(`fetching movies: ${Date.now()}`)
  await new Promise((resolve) => setTimeout(resolve, 1500))
  const response = await fetch(`${URL}/${id}`)

  return response.json()
}

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id)
  return <div>{movie.title}</div>
}

export default MovieInfo
