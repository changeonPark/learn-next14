import { ClientTest } from "@/features/movie-videos"
import { MovieList } from "@/wigets/movie"

export const metadata = {
  title: "Home",
}

const HomePage = async () => {
  return (
    <>
      <MovieList />
      <ClientTest />
    </>
  )
}

export default HomePage
