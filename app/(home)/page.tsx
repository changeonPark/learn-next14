export const metadata = {
  title: "Home",
}

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

const getMovies = async () => {
  console.log("call getMovies")

  await new Promise((resolve) => setTimeout(resolve, 5000))

  const response = await fetch(URL)
  const data = await response.json()
  return data
}

const HomePage = async () => {
  const movies = await getMovies()

  return <h1>{JSON.stringify(movies)}</h1>
}

export default HomePage
