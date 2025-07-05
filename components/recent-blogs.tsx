import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export default function RecentBlogs() {
  const recentPosts = [
    {
      title: "Transitioning from Sales to Software Engineering",
      excerpt: "My journey from sales to tech and the transferable skills that made the transition smoother.",
      date: "2024-01-15",
      slug: "transitioning-from-sales-to-engineering",
    },
    {
      title: "Lessons from Professional Badminton That Apply to Software Engineering",
      excerpt: "How strategic thinking, discipline, and performance under pressure translate to coding.",
      date: "2024-01-10",
      slug: "lessons-from-professional-badminton",
    },
    {
      title: "Building on the ServiceNow Platform: A Developer's Perspective",
      excerpt: "Insights into developing applications on ServiceNow and best practices I've learned.",
      date: "2024-01-05",
      slug: "servicenow-platform-insights",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Recent Blog Posts</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sharing insights from my unique journey across sports, sales, and software engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <CardTitle className="text-white hover:text-gray-300 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" className="text-white hover:text-gray-300 p-0">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
