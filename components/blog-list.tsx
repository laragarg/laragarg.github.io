import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export function BlogList() {
  const allPosts = [
    {
      title: "Transitioning from Sales to Software Engineering",
      excerpt:
        "Making the transition from sales to software engineering has been one of the most challenging yet rewarding experiences of my career. Here's what I learned along the way...",
      date: "2024-12-15",
      tags: ["Career", "Software Engineering", "Sales"],
      slug: "transitioning-from-sales-to-engineering",
    },
    {
      title: "Lessons from Professional Badminton That Apply to Software Engineering",
      excerpt:
        "My years playing professional badminton taught me invaluable lessons that I apply daily in my software engineering career...",
      date: "2024-12-10",
      tags: ["Sports", "Career", "Mindset"],
      slug: "lessons-from-professional-badminton",
    },
    {
      title: "Building on the ServiceNow Platform: A Developer's Perspective",
      excerpt:
        "Working at ServiceNow has given me unique insights into enterprise software development and the power of low-code/no-code platforms...",
      date: "2024-12-05",
      tags: ["ServiceNow", "Enterprise Software", "Platform Development"],
      slug: "servicenow-platform-insights",
    },
  ]

  return (
    <div className="space-y-8">
      {allPosts.map((post, index) => (
        <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
          <CardHeader>
            <div className="flex items-center text-sm text-gray-400 mb-2">
              <Calendar className="h-4 w-4 mr-2" />
              {post.date}
            </div>
            <CardTitle className="text-white text-2xl leading-tight">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-400 transition-colors">
                {post.title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary" className="bg-gray-600 text-gray-300">
                  {tag}
                </Badge>
              ))}
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
            >
              Read Full Post
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
