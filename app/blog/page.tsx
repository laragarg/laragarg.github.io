import { BlogList } from "@/components/blog-list"
import { Header } from "@/components/header"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
          <p className="text-gray-300 mb-12 text-lg">
            Thoughts on software engineering, technology, and life lessons from sports.
          </p>
          <BlogList />
        </div>
      </main>
    </div>
  )
}
