import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function RecentBlogs() {
  const recentPosts = [
    {
      title: "Transitioning from Sales to Software Engineering",
      excerpt:
        "My journey from understanding client needs to building technical solutions, and how sales experience enhances my engineering approach.",
      date: "2024-12-15",
      slug: "sales-to-engineering-transition",
      tags: ["Career", "Engineering", "Sales"],
    },
    {
      title: "Lessons from Professional Badminton That Apply to Software Engineering",
      excerpt:
        "How the mental discipline, strategic thinking, and performance optimization from competitive sports translate to writing better code.",
      date: "2024-12-10",
      slug: "badminton-lessons-for-engineers",
      tags: ["Sports", "Engineering", "Mindset"],
    },
    {
      title: "Building on the ServiceNow Platform: A Developer's Perspective",
      excerpt:
        "Insights into ServiceNow development, best practices, and how to leverage the platform's capabilities for enterprise solutions.",
      date: "2024-12-05",
      slug: "servicenow-development-insights",
      tags: ["ServiceNow", "Development", "Enterprise"],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-bold">Recent Blog Posts</h2>
          <Link href="/blog">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
              <CardHeader>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <CardTitle className="text-xl hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
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
