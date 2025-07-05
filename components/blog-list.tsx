import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export function BlogList() {
  const blogPosts = [
    {
      title: "Transitioning from Sales to Software Engineering",
      excerpt:
        "Making the transition from sales to software engineering has been one of the most challenging yet rewarding experiences of my career. Here's what I learned along the way...",
      date: "2024-12-15",
      slug: "transitioning-from-sales-to-engineering",
      tags: ["Career", "Software Engineering", "Sales"],
      readTime: "5 min read",
    },
    {
      title: "Lessons from Professional Badminton That Apply to Software Engineering",
      excerpt:
        "My years playing professional badminton taught me invaluable lessons that I apply daily in my software engineering career...",
      date: "2024-12-10",
      slug: "lessons-from-professional-badminton",
      tags: ["Sports", "Career", "Mindset"],
      readTime: "4 min read",
    },
    {
      title: "Building on the ServiceNow Platform: A Developer's Perspective",
      excerpt:
        "Working at ServiceNow has given me unique insights into enterprise software development and the power of low-code/no-code platforms...",
      date: "2024-12-05",
      slug: "servicenow-platform-insights",
      tags: ["ServiceNow", "Enterprise Software", "Platform Development"],
      readTime: "6 min read",
    },
  ]

  return (
    <div className="space-y-8">
      {blogPosts.map((post) => (
        <Card key={post.slug} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 transition-colors">
              <a href={`/blog/${post.slug}`}>{post.title}</a>
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0 h-auto" asChild>
              <a href={`/blog/${post.slug}`} className="flex items-center gap-2">
                Read Full Article <ArrowRight size={16} />
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
