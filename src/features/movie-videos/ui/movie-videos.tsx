import { getMovieVideos } from "@/entities/movie"

const MovieVideos = async ({ id }: { id: string }) => {
  const video = await getMovieVideos(id)

  return <h6>{JSON.stringify(video)}</h6>
}

export default MovieVideos
