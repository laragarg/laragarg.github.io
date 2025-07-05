import { Header } from "@/components/header"
import { BlogList } from "@/components/blog-list"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="pt-20">
        <BlogList />
      </main>
    </div>
  )
}
