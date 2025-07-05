import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export function RecentBlogs() {
  const recentPosts = [
    {
      title: "Transitioning from Sales to Software Engineering",
      excerpt: "My journey from sales professional to software engineer and the lessons learned along the way.",
      date: "2024-01-15",
      slug: "transitioning-from-sales-to-engineering",
      tags: ["Career", "Software Engineering", "Personal Growth"],
    },
    {
      title: "Lessons from Professional Badminton That Apply to Software Engineering",
      excerpt:
        "How the discipline and strategic thinking from professional sports translates to coding and team collaboration.",
      date: "2024-01-10",
      slug: "lessons-from-professional-badminton",
      tags: ["Sports", "Software Engineering", "Leadership"],
    },
    {
      title: "Building on the ServiceNow Platform: A Developer's Perspective",
      excerpt:
        "Insights into developing applications on the ServiceNow platform and best practices for enterprise solutions.",
      date: "2024-01-05",
      slug: "servicenow-platform-insights",
      tags: ["ServiceNow", "Platform Development", "Enterprise"],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold">Recent Blog Posts</h2>
          <Link href="/blog">
            <Button variant="outline" className="bg-transparent border-gray-600 hover:bg-gray-800">
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
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <CardTitle className="text-xl mb-2 hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" className="p-0 h-auto text-blue-400 hover:text-blue-300">
                    Read More →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
