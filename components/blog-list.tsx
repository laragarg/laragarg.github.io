import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export function BlogList() {
  const blogPosts = [
    {
      title: "Transitioning from Sales to Software Engineering",
      excerpt:
        "My journey from sales professional to software engineer and the lessons learned along the way. How transferable skills from sales helped me succeed in tech.",
      date: "2024-01-15",
      slug: "transitioning-from-sales-to-engineering",
      tags: ["Career", "Sales", "Engineering", "Transition"],
    },
    {
      title: "Lessons from Professional Badminton That Apply to Software Engineering",
      excerpt:
        "How the discipline, strategic thinking, and performance mindset from professional sports translates directly to coding, team collaboration, and project management.",
      date: "2024-01-10",
      slug: "lessons-from-professional-badminton",
      tags: ["Sports", "Engineering", "Mindset", "Performance"],
    },
    {
      title: "Building on the ServiceNow Platform: A Developer's Perspective",
      excerpt:
        "Insights into developing enterprise solutions on the ServiceNow platform, best practices I've learned, and tips for new developers joining the ecosystem.",
      date: "2024-01-05",
      slug: "servicenow-platform-insights",
      tags: ["ServiceNow", "Platform", "Development", "Enterprise"],
    },
  ]

  return (
    <div className="space-y-8">
      {blogPosts.map((post, index) => (
        <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
          <CardHeader>
            <div className="flex items-center text-sm text-gray-400 mb-2">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(post.date).toLocaleDateString()}
            </div>
            <CardTitle className="text-2xl leading-tight">
              <Link href={`/blog/${post.slug}`} className="hover:text-gray-300 transition-colors">
                {post.title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg">{post.excerpt}</p>
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
