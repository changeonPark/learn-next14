import { URL } from "../constants"

export const getMovies = async () => {
  const response = await fetch(URL)
  return response.json()
}
