/**
 * Dynamic Blog Post Page
 *
 * This page displays individual blog posts at /blog/[slug]
 * The slug comes from the markdown filename (e.g., my-post.md → /blog/my-post)
 *
 * Next.js pre-generates all blog pages at build time using generateStaticParams()
 */

import { Header } from "@/components/header"
import { BlogPost } from "@/components/blog-post"
import { Contact } from "@/components/contact"
import { notFound } from "next/navigation"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data"

/**
 * Generate static paths for all blog posts at build time
 *
 * Next.js calls this function during build to create HTML files
 * for each blog post (Static Site Generation)
 */
export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map(post => ({
    slug: post.slug,
  }))
}

interface BlogPageProps {
  params: {
    slug: string // URL slug from /blog/[slug]
  }
}

/**
 * Blog post page component
 *
 * @param params - Contains the URL slug
 * @returns Rendered blog post page or 404 if not found
 */
export default function BlogPage({ params }: BlogPageProps) {
  // Fetch the blog post by slug
  const post = getBlogPost(params.slug)

  // Show 404 page if blog post doesn't exist
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
