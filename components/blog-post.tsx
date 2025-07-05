import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

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
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/blog">
        <Button variant="ghost" className="mb-8 p-0 h-auto text-gray-400 hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </Link>

      <header className="mb-12">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <Calendar className="h-4 w-4 mr-2" />
          {new Date(post.date).toLocaleDateString()}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        <div
          className="text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: post.content
              .split("\n")
              .map((line) => {
                if (line.startsWith("# ")) {
                  return `<h1 class="text-3xl font-bold mt-8 mb-4 text-white">${line.substring(2)}</h1>`
                } else if (line.startsWith("## ")) {
                  return `<h2 class="text-2xl font-semibold mt-6 mb-3 text-white">${line.substring(3)}</h2>`
                } else if (line.startsWith("### ")) {
                  return `<h3 class="text-xl font-medium mt-4 mb-2 text-white">${line.substring(4)}</h3>`
                } else if (line.startsWith("- ")) {
                  return `<li class="ml-4 mb-1">${line.substring(2)}</li>`
                } else if (line.trim() === "") {
                  return "<br>"
                } else {
                  return `<p class="mb-4">${line}</p>`
                }
              })
              .join(""),
          }}
        />
      </div>
    </article>
  )
}
