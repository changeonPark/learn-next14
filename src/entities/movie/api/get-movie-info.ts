import { URL } from "../constants"

export const getMovieInfo = async (id: string) => {
  const response = await fetch(`${URL}/${id}`)
  return response.json()
}
