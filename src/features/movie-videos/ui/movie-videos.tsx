import { getMovieVideos } from "@/entities/movie"

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getMovieVideos(id)

  return (
    <div className="grid grid-cols-4 gap-4">
      {videos.map((video: any) => (
        <iframe
          className="rounded-2xl opacity-80 hover:opacity-100 transition-opacity duration-500"
          key={video.key}
          src={`https://www.youtube.com/embed/${video.key}`}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  )
}

export default MovieVideos
