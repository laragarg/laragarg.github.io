import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export function BlogList() {
  const posts = [
    {
      slug: "transitioning-from-sales-to-engineering",
      title: "Transitioning from Sales to Software Engineering",
      date: "2024-12-15",
      excerpt:
        "Making the transition from sales to software engineering has been one of the most challenging yet rewarding experiences of my career. Here's what I learned along the way.",
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
    <div className="space-y-8">
      {posts.map((post) => (
        <Card key={post.slug} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
          <CardHeader>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <CardTitle className="text-white text-2xl">
              <Link href={`/blog/${post.slug}`} className="hover:text-gray-300 transition-colors">
                {post.title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-300">
                  {tag}
                </Badge>
              ))}
            </div>
            <Link href={`/blog/${post.slug}`}>
              <Button variant="ghost" className="text-gray-400 hover:text-white p-0">
                Read Full Post
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
