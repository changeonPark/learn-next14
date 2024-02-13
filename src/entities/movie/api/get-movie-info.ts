import { URL } from "../constants"

export const getMovieInfo = async (id: string) => {
  console.log(`fetching movies: ${Date.now()}`)

  await new Promise((resolve) => setTimeout(resolve, 1500))

  const response = await fetch(`${URL}/${id}`)
  return response.json()
}
