"use client"

import { useState } from "react"
import { getMovieVideos } from "../api/movie-videos.api"
import { Button } from "@/shared/ui/button"

const ClientTest = () => {
  const [data, setData] = useState<string>("")

  return (
    <>
      <Button
        onClick={async () => {
          const newData = await getMovieVideos()
          setData(newData)
        }}
      >
        serverActionTest
      </Button>

      <span>{JSON.stringify(data)}</span>
    </>
  )
}

export default ClientTest
