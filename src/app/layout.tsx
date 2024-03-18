import "@/shared/styles/global.css"
import { Metadata } from "next"
import { Navigation } from "@/wigets/header"
import { CreatedBy } from "@/wigets/footer"
import { cn } from "@/shared/lib/utils"

// layout, page만 사용 가능!
export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies", // 다른 메타데이터와 병합되면서 Home | Next Movies처럼 자동 완성 됨
    default: "Next Movies",
  },
  description: "The best movies on the best framework",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-200 dark:bg-slate-700">
        <header className="fixed inset-0 h-10 flex justify-center">
          <Navigation />
        </header>
        <main className={cn("container flex justify-center items-center", "pt-12")}>
          {children}
        </main>
        <footer className={cn("flex justify-center items-center")}>
          <CreatedBy />
        </footer>
      </body>
    </html>
  )
}
