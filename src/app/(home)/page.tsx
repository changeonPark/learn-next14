import { cn } from "@/shared/lib/utils"
import { MovieList } from "@/wigets/movie"

export const metadata = {
  title: "Home",
}

const HomePage = async () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      <MovieList />
    </div>
  )
}

export default HomePage
