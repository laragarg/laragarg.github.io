import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { RecentBlogs } from "@/components/recent-blogs"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <About />
      <Experience />
      <RecentBlogs />
      <Contact />
    </div>
  )
}
