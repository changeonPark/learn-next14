import { getMovieInfo } from "@/entities/movie"

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovieInfo(id)
  return <div>{movie.title}</div>
}

export default MovieInfo
