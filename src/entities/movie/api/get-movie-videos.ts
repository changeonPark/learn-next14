import { URL } from "../constants"

export const getMovieVideos = async (id: string) => {
  const response = await fetch(`${URL}/${id}/videos`)

  return response.json()
}
