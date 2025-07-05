import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"

export function BlogList() {
  const blogPosts = [
    {
      title: "Transitioning from Sales to Software Engineering",
      excerpt:
        "My journey from sales professional to software engineer and the lessons learned along the way. This post covers the challenges, the learning process, and advice for others making similar transitions.",
      date: "2024-01-15",
      slug: "transitioning-from-sales-to-engineering",
      tags: ["Career", "Software Engineering", "Personal Growth"],
      readTime: "8 min read",
    },
    {
      title: "Lessons from Professional Badminton That Apply to Software Engineering",
      excerpt:
        "How the discipline and strategic thinking from professional sports translates to coding and team collaboration. Exploring the parallels between athletic performance and software development.",
      date: "2024-01-10",
      slug: "lessons-from-professional-badminton",
      tags: ["Sports", "Software Engineering", "Leadership"],
      readTime: "6 min read",
    },
    {
      title: "Building on the ServiceNow Platform: A Developer's Perspective",
      excerpt:
        "Insights into developing applications on the ServiceNow platform and best practices for enterprise solutions. A deep dive into platform capabilities and development workflows.",
      date: "2024-01-05",
      slug: "servicenow-platform-insights",
      tags: ["ServiceNow", "Platform Development", "Enterprise"],
      readTime: "10 min read",
    },
  ]

  return (
    <div className="space-y-8">
      {blogPosts.map((post, index) => (
        <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
          <CardHeader>
            <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <span>{post.readTime}</span>
            </div>
            <CardTitle className="text-2xl mb-2 hover:text-blue-400 transition-colors">
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
            <Link href={`/blog/${post.slug}`}>
              <Button variant="outline" className="bg-transparent border-gray-600 hover:bg-gray-800">
                Read Full Post
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
