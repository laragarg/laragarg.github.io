import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export function BlogList() {
  const blogPosts = [
    {
      title: "Transitioning from Sales to Software Engineering",
      excerpt:
        "My journey from sales professional to software engineer, including the challenges, learnings, and key strategies that made the transition successful. This post covers the mindset shifts, technical skills acquisition, and networking strategies that helped me make this career pivot.",
      date: "2024-01-15",
      readTime: "8 min read",
      slug: "transitioning-from-sales-to-engineering",
      tags: ["Career Transition", "Software Engineering", "Personal Growth", "Professional Development"],
    },
    {
      title: "Lessons from Professional Badminton That Apply to Software Engineering",
      excerpt:
        "How the mental discipline, strategic thinking, and performance optimization skills from professional sports translate directly to software development. Exploring the parallels between athletic performance and coding excellence.",
      date: "2024-01-10",
      readTime: "6 min read",
      slug: "lessons-from-professional-badminton",
      tags: ["Sports Psychology", "Software Engineering", "Mental Performance", "Strategic Thinking"],
    },
    {
      title: "Building on the ServiceNow Platform: A Developer's Perspective",
      excerpt:
        "Insights into platform development at ServiceNow, including best practices, common challenges, and the unique aspects of enterprise software development. A deep dive into what makes platform engineering different from traditional software development.",
      date: "2024-01-05",
      readTime: "10 min read",
      slug: "servicenow-platform-insights",
      tags: ["ServiceNow", "Platform Development", "Enterprise Software", "JavaScript"],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blog</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Thoughts on software engineering, career transitions, and lessons from professional sports. Sharing insights
          from my unique journey across different fields and how they all connect.
        </p>
      </div>

      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg"
          >
            <CardHeader>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
              <CardTitle className="text-white text-2xl leading-tight mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-400 transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="bg-gray-700 text-gray-300">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`}>
                <div className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
