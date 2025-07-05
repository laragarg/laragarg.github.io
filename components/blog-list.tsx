import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

export default function BlogList() {
  const blogPosts = [
    {
      title: "Transitioning from Sales to Software Engineering",
      excerpt:
        "My journey from understanding client needs to building technical solutions, and how sales experience enhances my engineering approach. Learn about the transferable skills and mindset shifts that made this transition successful.",
      date: "2024-12-15",
      readTime: "8 min read",
      slug: "sales-to-engineering-transition",
      tags: ["Career", "Engineering", "Sales", "Transition"],
    },
    {
      title: "Lessons from Professional Badminton That Apply to Software Engineering",
      excerpt:
        "How the mental discipline, strategic thinking, and performance optimization from competitive sports translate to writing better code. Discover the surprising parallels between athletic excellence and software craftsmanship.",
      date: "2024-12-10",
      readTime: "6 min read",
      slug: "badminton-lessons-for-engineers",
      tags: ["Sports", "Engineering", "Mindset", "Performance"],
    },
    {
      title: "Building on the ServiceNow Platform: A Developer's Perspective",
      excerpt:
        "Insights into ServiceNow development, best practices, and how to leverage the platform's capabilities for enterprise solutions. A comprehensive guide for developers new to the ServiceNow ecosystem.",
      date: "2024-12-05",
      readTime: "12 min read",
      slug: "servicenow-development-insights",
      tags: ["ServiceNow", "Development", "Enterprise", "Platform"],
    },
  ]

  return (
    <div className="space-y-8">
      {blogPosts.map((post, index) => (
        <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
          <CardHeader>
            <div className="flex items-center text-sm text-gray-400 mb-2 space-x-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>
            <CardTitle className="text-2xl hover:text-blue-400 transition-colors">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4 text-lg leading-relaxed">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary" className="bg-gray-700 text-gray-300">
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
