import { getMovies } from "@/entities/movie"
import Movie from "./movie"

const MovieList = async () => {
  const movies = await getMovies()

  return (
    <>
      {movies.map((movie: any) => (
        <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
      ))}
    </>
  )
}

export { MovieList }
