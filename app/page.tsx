import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RecentBlogs } from "@/components/recent-blogs"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <RecentBlogs />
        <Contact />
      </main>
    </div>
  )
}
