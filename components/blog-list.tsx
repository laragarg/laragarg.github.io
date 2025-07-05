import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

export function BlogList() {
  const blogPosts = [
    {
      title: "Transitioning from Sales to Software Engineering",
      excerpt:
        "My journey from sales professional to software engineer and the transferable skills that made the transition successful. Learn about the challenges, opportunities, and key strategies that helped me make this career pivot.",
      date: "2024-01-15",
      slug: "transitioning-from-sales-to-engineering",
      tags: ["Career", "Software Engineering", "Sales"],
    },
    {
      title: "Lessons from Professional Badminton That Apply to Software Engineering",
      excerpt:
        "How the discipline, strategy, and mental resilience from professional sports translate to building better software. Discover the unexpected parallels between athletic performance and coding excellence.",
      date: "2024-01-10",
      slug: "lessons-from-professional-badminton",
      tags: ["Sports", "Software Engineering", "Mindset"],
    },
    {
      title: "Building on the ServiceNow Platform: A Developer's Perspective",
      excerpt:
        "Insights into developing applications on ServiceNow, best practices, and common challenges faced by new developers. A comprehensive guide for those starting their ServiceNow development journey.",
      date: "2024-01-05",
      slug: "servicenow-platform-insights",
      tags: ["ServiceNow", "Development", "Platform"],
    },
  ]

  return (
    <div className="space-y-8">
      {blogPosts.map((post, index) => (
        <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
          <CardHeader>
            <div className="flex items-center text-sm text-gray-400 mb-2">
              <Calendar className="mr-2 h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <CardTitle className="text-2xl text-white hover:text-blue-400 transition-colors">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary" className="bg-gray-700 text-gray-300">
                  {tag}
                </Badge>
              ))}
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Read full article
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
