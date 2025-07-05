import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"

export default function BlogList() {
  const blogPosts = [
    {
      title: "Transitioning from Sales to Software Engineering",
      excerpt:
        "My journey from sales to tech and the transferable skills that made the transition smoother than expected.",
      date: "2024-01-15",
      slug: "transitioning-from-sales-to-engineering",
      readTime: "5 min read",
    },
    {
      title: "Lessons from Professional Badminton That Apply to Software Engineering",
      excerpt:
        "How strategic thinking, discipline, and performance under pressure from professional sports translate directly to coding and software development.",
      date: "2024-01-10",
      slug: "lessons-from-professional-badminton",
      readTime: "7 min read",
    },
    {
      title: "Building on the ServiceNow Platform: A Developer's Perspective",
      excerpt:
        "Insights into developing applications on ServiceNow, best practices I've learned, and tips for new platform developers.",
      date: "2024-01-05",
      slug: "servicenow-platform-insights",
      readTime: "6 min read",
    },
  ]

  return (
    <div className="space-y-8">
      {blogPosts.map((post, index) => (
        <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
          <CardHeader>
            <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <span>{post.readTime}</span>
            </div>
            <CardTitle className="text-2xl text-white hover:text-gray-300 transition-colors">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400 mb-4 leading-relaxed">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-white hover:text-gray-300 transition-colors font-medium"
            >
              Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
