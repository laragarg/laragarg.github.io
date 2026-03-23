import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { calculateReadingTime } from './reading-time'

export interface BlogPost {
  title: string
  date: string
  tags: string[]
  slug: string
  excerpt: string
  content: string
}

export interface BlogPostWithReadTime extends BlogPost {
  readTime: string
}

const contentDirectory = path.join(process.cwd(), 'content/blog')

// Get all blog posts from markdown files
export function getAllBlogPosts(): BlogPostWithReadTime[] {
  // Check if content directory exists
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  // Get all markdown files (excluding README.md)
  const fileNames = fs.readdirSync(contentDirectory)
  const markdownFiles = fileNames.filter(fileName =>
    fileName.endsWith('.md') && fileName.toLowerCase() !== 'readme.md'
  )

  // Parse each markdown file
  const posts = markdownFiles.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(contentDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Parse frontmatter and content
    const { data, content } = matter(fileContents)

    const post: BlogPost = {
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      slug,
      excerpt: data.excerpt,
      content,
    }

    return {
      ...post,
      readTime: calculateReadingTime(content),
    }
  })

  // Sort posts by date (most recent first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get a single blog post by slug
export function getBlogPost(slug: string): BlogPostWithReadTime | undefined {
  const posts = getAllBlogPosts()
  return posts.find(post => post.slug === slug)
}

// Export for backward compatibility
export const blogPosts: BlogPostWithReadTime[] = getAllBlogPosts()
