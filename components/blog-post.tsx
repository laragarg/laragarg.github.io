import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface BlogPostProps {
  post: {
    title: string
    date: string
    tags: string[]
    readTime: string
    content: string
  }
}

export function BlogPost({ post }: BlogPostProps) {
  // Simple markdown-like parsing for demo purposes
  const formatContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-white">
            {line.replace("## ", "")}
          </h2>
        )
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-white">
            {line.replace("### ", "")}
          </h3>
        )
      }
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="text-gray-300 mb-2 ml-4">
            {line.replace("- ", "")}
          </li>
        )
      }
      if (line.match(/^\d+\./)) {
        return (
          <li key={index} className="text-gray-300 mb-2 ml-4 list-decimal">
            {line.replace(/^\d+\.\s*/, "")}
          </li>
        )
      }
      if (line.trim() === "") {
        return <br key={index} />
      }
      return (
        <p key={index} className="text-gray-300 mb-4 leading-relaxed">
          {line}
        </p>
      )
    })
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/blog">
        <Button variant="ghost" className="mb-8 text-gray-400 hover:text-white">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Button>
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            {post.readTime}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-200">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <div className="prose prose-lg prose-invert max-w-none">{formatContent(post.content)}</div>
    </article>
  )
}
