/**
 * Blog Data Management
 *
 * This file handles reading blog posts from markdown files in the content/blog/ directory.
 * Each markdown file should have frontmatter (YAML metadata) at the top with:
 * - title: Post title
 * - date: Publication date (YYYY-MM-DD format)
 * - tags: Array of tags
 * - excerpt: Short description for listings
 *
 * The file name becomes the URL slug (e.g., my-post.md → /blog/my-post)
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter' // Parses YAML frontmatter from markdown
import { calculateReadingTime } from './reading-time'

// Type definition for a blog post
export interface BlogPost {
  title: string
  date: string
  tags: string[]
  slug: string
  excerpt: string
  content: string
}

// Blog post with calculated reading time
export interface BlogPostWithReadTime extends BlogPost {
  readTime: string
}

// Path to blog content directory
const contentDirectory = path.join(process.cwd(), 'content/blog')

/**
 * Get all blog posts from markdown files
 *
 * Reads all .md files from content/blog/, parses their frontmatter,
 * calculates reading time, and returns sorted by date (newest first).
 *
 * @returns Array of blog posts with reading time
 */
export function getAllBlogPosts(): BlogPostWithReadTime[] {
  // Return empty array if directory doesn't exist
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
    // Use filename as slug (remove .md extension)
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(contentDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Parse frontmatter (YAML) and markdown content
    // Example: { data: { title: "...", date: "..." }, content: "# Markdown..." }
    const { data, content } = matter(fileContents)

    // #region agent log
    try {
      fetch('http://127.0.0.1:7908/ingest/90c0fce3-ce62-487a-a177-b19951fd801d',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'bc9442'},body:JSON.stringify({sessionId:'bc9442',runId:process.env.NEXT_PHASE||process.env.NODE_ENV||'unknown',hypothesisId:'H2',location:'lib/blog-data.ts:getAllBlogPosts',message:'Loaded markdown file',data:{fileName,contentLength:content.length,hasItalicMarker:content.includes('*“')||content.includes('*"')||content.includes('*_')||content.includes('*'),},timestamp:Date.now()})}).catch(()=>{});
    } catch {}
    // #endregion agent log

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

/**
 * Get a single blog post by slug
 *
 * @param slug - The URL slug (filename without .md)
 * @returns Blog post or undefined if not found
 */
export function getBlogPost(slug: string): BlogPostWithReadTime | undefined {
  const posts = getAllBlogPosts()
  return posts.find(post => post.slug === slug)
}

// Export all posts for backward compatibility
export const blogPosts: BlogPostWithReadTime[] = getAllBlogPosts()
