import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export function RecentBlogs() {
  const recentPosts = [
    {
      title: "Transitioning from Sales to Software Engineering",
      excerpt:
        "Making the transition from sales to software engineering has been one of the most challenging yet rewarding experiences of my career...",
      date: "2024-12-15",
      slug: "transitioning-from-sales-to-engineering",
      tags: ["Career", "Software Engineering"],
    },
    {
      title: "Lessons from Professional Badminton That Apply to Software Engineering",
      excerpt:
        "My years playing professional badminton taught me invaluable lessons that I apply daily in my software engineering career...",
      date: "2024-12-10",
      slug: "lessons-from-professional-badminton",
      tags: ["Sports", "Career"],
    },
    {
      title: "Building on the ServiceNow Platform: A Developer's Perspective",
      excerpt:
        "Working at ServiceNow has given me unique insights into enterprise software development and the power of low-code/no-code platforms...",
      date: "2024-12-05",
      slug: "servicenow-platform-insights",
      tags: ["ServiceNow", "Enterprise Software"],
    },
  ]

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Recent Blog Posts</h2>
            <p className="text-gray-300 text-lg">
              Sharing insights from my unique journey across sports, sales, and software engineering
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {recentPosts.map((post) => (
              <Card key={post.slug} className="bg-gray-700 border-gray-600 hover:bg-gray-650 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <Calendar size={16} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{post.title}</h3>

                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0 h-auto" asChild>
                    <a href={`/blog/${post.slug}`} className="flex items-center gap-2">
                      Read More <ArrowRight size={16} />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="/blog">View All Posts</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
