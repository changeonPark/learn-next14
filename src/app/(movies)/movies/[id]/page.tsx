import { MovieInfo } from "@/features/movie-info"
import { MovieVideos } from "@/features/movie-videos"
import { Suspense } from "react"

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  // { params: { id: '1' }, searchParams: { region: 'kr', page: '2' } }

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
