import { URL } from "../constants"

export const getMovieVideos = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  // throw new Error("somthing error...")

  const response = await fetch(`${URL}/${id}/videos`)

  return response.json()
}
