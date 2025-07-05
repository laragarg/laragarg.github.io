import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-8 text-gray-300 hover:text-white">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <article>
          <header className="mb-12">
            <div className="flex items-center text-sm text-gray-400 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              {post.date}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-600 text-gray-300">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div className="prose prose-lg prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </main>
  )
}
