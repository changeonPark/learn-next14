"use server"

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

export const getMovieVideos = async () => {
  console.log(`fetching vidoes: ${Date.now()}`)
  await new Promise((resolve) => setTimeout(resolve, 3000))

  // throw new Error("somthing error...")

  const response = await fetch(`${URL}/1029575/videos`)

  return response.json()
}
