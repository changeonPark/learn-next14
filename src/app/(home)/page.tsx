import Link from "next/link"

export const metadata = {
  title: "Home",
}

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

const getMovies = async () => {
  const response = await fetch(URL)
  return response.json()
}

const HomePage = async () => {
  const movies = await getMovies()

  return (
    <div>
      {movies.map((movie: any) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  )
}

export default HomePage
