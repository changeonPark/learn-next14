import { getMovieInfo } from "@/entities/movie"
import Link from "next/link"

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovieInfo(id)

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-[50px] w-4/5 mx-auto">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={movie.poster_path} className="rounded-2xl max-w-full" alt={movie.title} />
      <div className="flex flex-col mt-5 gap-5">
        <h1 className="text-orange-400 text-4xl font-semibold">{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(2)}</h3>
        <p>{movie.overview}</p>
        {movie.homepage && (
          <a href={movie.homepage} target={"_blank"}>
            Homepage &rarr;
          </a>
        )}
      </div>
    </div>
  )
}

export default MovieInfo
