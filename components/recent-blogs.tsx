import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const recentPosts = [
  {
    title: "Transitioning from Sales to Software Engineering",
    excerpt:
      "My journey from sales professional to software engineer and the transferable skills that made the transition successful.",
    date: "2024-01-15",
    slug: "transitioning-from-sales-to-engineering",
    tags: ["Career", "Software Engineering", "Sales"],
  },
  {
    title: "Lessons from Professional Badminton That Apply to Software Engineering",
    excerpt:
      "How the discipline, strategy, and mental resilience from professional sports translate to writing better code.",
    date: "2024-01-10",
    slug: "lessons-from-professional-badminton",
    tags: ["Sports", "Software Engineering", "Mindset"],
  },
  {
    title: "Building on the ServiceNow Platform: A Developer's Perspective",
    excerpt:
      "Insights into ServiceNow development, best practices, and what makes the platform unique for enterprise solutions.",
    date: "2024-01-05",
    slug: "servicenow-platform-insights",
    tags: ["ServiceNow", "Development", "Enterprise"],
  },
]

export function RecentBlogs() {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-bold">Recent Blog Posts</h2>
          <Link href="/blog">
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
              <CardHeader>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <CardTitle className="text-white hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-gray-700 text-gray-200 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
