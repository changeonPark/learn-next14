import { getMovieInfo } from "@/entities/movie"
import { MovieInfo } from "@/features/movie-info"
import { MovieVideos } from "@/features/movie-videos"
import type { Metadata } from "next"
import { Suspense } from "react"

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata({
  params: { id },
}: {
  params: { id: string }
}): Promise<Metadata> {
  // Next14 이후부터는 fetch의 결과값을 cache하기 때문에 상관없다
  const movie = await getMovieInfo(id)

  return {
    title: movie.title,
    description: movie.overview,
  }
}

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col gap-8">
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}

export default Page
