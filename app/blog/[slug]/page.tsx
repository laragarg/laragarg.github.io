import { Header } from "@/components/header"
import { BlogPost } from "@/components/blog-post"
import { Contact } from "@/components/contact"
import { notFound } from "next/navigation"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data"

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map(post => ({
    slug: post.slug,
  }))
}

interface BlogPageProps {
  params: {
    slug: string
  }
}

export default function BlogPage({ params }: BlogPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="pt-20">
        <BlogPost post={post} />
        <Contact />
      </main>
    </div>
  )
}
