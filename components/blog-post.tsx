import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

interface BlogPostProps {
  post: {
    title: string
    date: string
    content: string
    tags: string[]
  }
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  )
}
