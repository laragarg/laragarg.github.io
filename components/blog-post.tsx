import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BlogPostProps {
  post: {
    title: string
    date: string
    readTime: string
    content: string
  }
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/blog">
          <Button variant="ghost" className="text-gray-400 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {post.readTime}
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{post.title}</h1>
      </div>

      <div
        className="prose prose-lg prose-invert max-w-none
          prose-headings:text-white prose-headings:font-semibold
          prose-p:text-gray-300 prose-p:leading-relaxed
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white prose-strong:font-semibold
          prose-ul:text-gray-300 prose-li:text-gray-300
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-16 pt-8 border-t border-gray-700">
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            Thanks for reading! Feel free to connect with me to discuss this topic further.
          </p>
          <Link href="/#contact">
            <Button className="bg-white text-gray-900 hover:bg-gray-200">Get In Touch</Button>
          </Link>
        </div>
      </div>
    </article>
  )
}
