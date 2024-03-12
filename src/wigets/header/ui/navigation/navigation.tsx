"use client"

import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/shared/ui/navigation-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"

type routePath = {
  path: string
  title: string
}

const routePaths: routePath[] = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about-us",
    title: "About Us",
  },
]

const Navigation = () => {
  const path = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {routePaths.map((route) => (
          <NavigationMenuItem key={route.path}>
            <Link href={route.path} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {route.title} {path === route.path ? "✅" : null}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>
  )
}

export default Navigation
