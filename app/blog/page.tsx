import { Header } from "@/components/header"
import { BlogList } from "@/components/blog-list"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">Blog</h1>
            <p className="text-xl text-gray-300 mb-12 text-center">
              Insights from my journey across sports, sales, and software engineering
            </p>
            <BlogList />
          </div>
        </div>
      </main>
    </div>
  )
}
