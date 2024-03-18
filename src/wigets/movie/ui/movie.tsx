"use client"

import { cn } from "@/shared/lib/utils"
import Link from "next/link"
import { useRouter } from "next/navigation"

type Props = {
  id: string
  title: string
  poster_path: string
}

const Movie = ({ id, poster_path, title }: Props) => {
  const router = useRouter()

  const onClick = () => {
    router.push(`/movies/${id}`)
  }

  return (
    <div className={cn("flex flex-col items-center gap-2", "cursor-pointer")} onClick={onClick}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={cn(
          "rounded",
          "transition-opacity duration-300 ease-in-out",
          "opacity-70 hover:opacity-100"
        )}
        src={poster_path}
        alt={title}
      />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  )
}

export default Movie
