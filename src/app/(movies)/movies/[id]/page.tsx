import MovieInfo from "@/components/movie-info"
import MovieVideos from "@/components/movie-videos"
import { Suspense } from "react"

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  // { params: { id: '1' }, searchParams: { region: 'kr', page: '2' } }

  return (
    <div>
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
