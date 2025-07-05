import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "Transitioning from Sales to Software Engineering",
    excerpt:
      "My journey from sales to tech and the valuable lessons learned along the way. Discover how sales skills translate to software development and what challenges I faced during the transition.",
    date: "2024-01-15",
    slug: "transitioning-from-sales-to-engineering",
    tags: ["Career", "Tech Transition", "Personal Growth"],
    readTime: "5 min read",
  },
  {
    title: "Lessons from Professional Badminton That Apply to Software Engineering",
    excerpt:
      "How competitive sports shaped my approach to software development and teamwork. The discipline, strategic thinking, and performance under pressure that sports taught me.",
    date: "2024-01-10",
    slug: "lessons-from-professional-badminton",
    tags: ["Sports", "Engineering", "Mindset", "Performance"],
    readTime: "7 min read",
  },
  {
    title: "Building on the ServiceNow Platform: A Developer's Perspective",
    excerpt:
      "Insights into enterprise software development and platform-based solutions. What it's like to work with ServiceNow's powerful platform and build scalable enterprise applications.",
    date: "2024-01-05",
    slug: "servicenow-platform-insights",
    tags: ["ServiceNow", "Platform Development", "Enterprise Software"],
    readTime: "6 min read",
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
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <span>{post.readTime}</span>
            </div>
            <CardTitle className="text-2xl text-white hover:text-gray-300 transition-colors">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4 text-lg leading-relaxed">{post.excerpt}</p>
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
