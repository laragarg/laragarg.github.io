import Header from "@/components/header"
import BlogList from "@/components/blog-list"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Insights from my journey across professional sports, sales, and software engineering.
            </p>
          </div>
          <BlogList />
        </div>
      </main>
    </div>
  )
}
