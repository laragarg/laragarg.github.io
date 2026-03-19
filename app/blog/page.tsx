import { Header } from "@/components/header"
import { BlogList } from "@/components/blog-list"
import { Contact } from "@/components/contact"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="pt-20">
        <BlogList />
        <Contact />
      </main>
    </div>
  )
}
