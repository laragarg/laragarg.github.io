import { Header } from "@/components/header"
import { BlogList } from "@/components/blog-list"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            Sharing insights from my unique journey through professional sports, sales, and software engineering.
          </p>
          <BlogList />
        </div>
      </main>
    </div>
  )
}
