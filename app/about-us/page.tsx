import { Metadata } from "next"
import Avatar from "./components/Avatar"

export const metadata: Metadata = {
  title: "About Us",
}

const Page = () => {
  return (
    <>
      <h1>About Us</h1>
      <Avatar />
    </>
  )
}

export default Page
