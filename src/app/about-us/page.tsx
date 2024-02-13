import { Avatar } from "@/wigets/avatar"
import { Metadata } from "next"

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
