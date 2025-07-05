import Header from "@/components/header"
import BlogList from "@/components/blog-list"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold text-center mb-8">Blog</h1>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Insights from my journey as a software engineer, former sales professional, and ex-professional badminton
            player. Exploring the intersection of technology, business, and sports.
          </p>
          <BlogList />
        </div>
      </main>
    </div>
  )
}
