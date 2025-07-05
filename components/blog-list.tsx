import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "Transitioning from Sales to Software Engineering",
    excerpt:
      "My journey from sales professional to software engineer and the transferable skills that made the transition successful. Learn about the challenges, opportunities, and key insights from making this career pivot.",
    date: "2024-01-15",
    slug: "transitioning-from-sales-to-engineering",
    tags: ["Career", "Software Engineering", "Sales"],
    readTime: "8 min read",
  },
  {
    title: "Lessons from Professional Badminton That Apply to Software Engineering",
    excerpt:
      "How the discipline, strategy, and mental resilience from professional sports translate to writing better code. Discover the unexpected parallels between athletic performance and software development.",
    date: "2024-01-10",
    slug: "lessons-from-professional-badminton",
    tags: ["Sports", "Software Engineering", "Mindset"],
    readTime: "6 min read",
  },
  {
    title: "Building on the ServiceNow Platform: A Developer's Perspective",
    excerpt:
      "Insights into ServiceNow development, best practices, and what makes the platform unique for enterprise solutions. A deep dive into the tools, workflows, and methodologies that drive success.",
    date: "2024-01-05",
    slug: "servicenow-platform-insights",
    tags: ["ServiceNow", "Development", "Enterprise"],
    readTime: "10 min read",
  },
]

export function BlogList() {
  return (
    <div className="space-y-8">
      {blogPosts.map((post, index) => (
        <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
          <CardHeader>
            <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <span>{post.readTime}</span>
            </div>
            <CardTitle className="text-white hover:text-blue-400 transition-colors">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary" className="bg-gray-700 text-gray-200">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
