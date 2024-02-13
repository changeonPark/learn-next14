import { getMovies } from "@/entities/movie"
import Link from "next/link"

const MovieList = async () => {
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

export default MovieList
