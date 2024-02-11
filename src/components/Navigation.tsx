"use client"

import { Button } from "@/shared/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {
  const path = usePathname()

  console.log("path : ", path)

  return (
    <nav>
      <Button onClick={() => alert("shadcn onclick")}>ShadCn Test</Button>
      <ul>
        <li>
          <Link href={"/"}>Home</Link> {path === "/" ? "✅" : null}
        </li>
        <li>
          <Link href={"/about-us"}>About Us</Link> {path === "/about-us" ? "✅" : null}
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
