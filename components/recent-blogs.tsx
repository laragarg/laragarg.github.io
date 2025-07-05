import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export function RecentBlogs() {
  const recentPosts = [
    {
      slug: "transitioning-from-sales-to-engineering",
      title: "Transitioning from Sales to Software Engineering",
      date: "2024-12-15",
      excerpt:
        "Making the transition from sales to software engineering has been one of the most challenging yet rewarding experiences of my career.",
      tags: ["Career", "Software Engineering", "Sales"],
    },
    {
      slug: "lessons-from-professional-badminton",
      title: "Lessons from Professional Badminton That Apply to Software Engineering",
      date: "2024-12-10",
      excerpt:
        "My years playing professional badminton taught me invaluable lessons that I apply daily in my software engineering career.",
      tags: ["Sports", "Career", "Mindset"],
    },
    {
      slug: "servicenow-platform-insights",
      title: "Building on the ServiceNow Platform: A Developer's Perspective",
      date: "2024-12-05",
      excerpt:
        "Working at ServiceNow has given me unique insights into enterprise software development and the power of low-code/no-code platforms.",
      tags: ["ServiceNow", "Enterprise Software", "Platform Development"],
    },
  ]

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold text-white">Recent Blog Posts</h2>
            <Link href="/blog">
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700 bg-transparent">
                View All Posts
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.slug} className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <CardTitle className="text-white text-lg leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:text-gray-300 transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
