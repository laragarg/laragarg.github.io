import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface BlogPostProps {
  slug: string
}

export default function BlogPost({ slug }: BlogPostProps) {
  // In a real app, you'd fetch this data based on the slug
  const blogPosts: Record<string, any> = {
    "sales-to-engineering-transition": {
      title: "Transitioning from Sales to Software Engineering",
      date: "2024-12-15",
      readTime: "8 min read",
      tags: ["Career", "Engineering", "Sales", "Transition"],
      content: `
        <p>Making the leap from sales to software engineering might seem like a dramatic career change, but the skills I developed in sales have proven invaluable in my engineering role at ServiceNow.</p>
        
        <h2>The Transferable Skills</h2>
        <p>Sales taught me to understand client needs deeply, communicate complex ideas simply, and solve problems creatively. These skills translate directly to software engineering:</p>
        
        <ul>
          <li><strong>Client Focus:</strong> Understanding user requirements and translating them into technical specifications</li>
          <li><strong>Communication:</strong> Explaining technical concepts to non-technical stakeholders</li>
          <li><strong>Problem Solving:</strong> Breaking down complex challenges into manageable solutions</li>
        </ul>
        
        <h2>The Learning Journey</h2>
        <p>The transition wasn't without challenges. I had to develop technical skills while leveraging my existing business acumen. Here's how I approached it:</p>
        
        <p>1. <strong>Structured Learning:</strong> I focused on understanding fundamental programming concepts before diving into specific technologies.</p>
        <p>2. <strong>Practical Application:</strong> I built projects that solved real business problems, combining my sales insights with new technical skills.</p>
        <p>3. <strong>Continuous Growth:</strong> I embraced the learning mindset that served me well in sales.</p>
        
        <h2>Advice for Others</h2>
        <p>If you're considering a similar transition, remember that your existing skills are assets, not obstacles. The key is finding ways to apply your unique perspective to technical challenges.</p>
      `,
    },
    "badminton-lessons-for-engineers": {
      title: "Lessons from Professional Badminton That Apply to Software Engineering",
      date: "2024-12-10",
      readTime: "6 min read",
      tags: ["Sports", "Engineering", "Mindset", "Performance"],
      content: `
        <p>Professional badminton taught me lessons that have become fundamental to my approach as a software engineer. The parallels between athletic excellence and software craftsmanship are striking.</p>
        
        <h2>Mental Discipline and Focus</h2>
        <p>In badminton, maintaining focus during long rallies is crucial. Similarly, debugging complex code requires sustained concentration and mental clarity. The meditation and focus techniques I learned as an athlete help me tackle challenging programming problems.</p>
        
        <h2>Strategic Thinking</h2>
        <p>Every shot in badminton is part of a larger strategy. In software engineering, every line of code contributes to the overall architecture. Both require:</p>
        
        <ul>
          <li>Long-term planning and vision</li>
          <li>Adaptability when strategies need to change</li>
          <li>Understanding the opponent/problem deeply</li>
        </ul>
        
        <h2>Performance Under Pressure</h2>
        <p>Competitive sports prepare you for high-pressure situations. When production systems go down or deadlines loom, the composure I developed as an athlete helps me think clearly and execute solutions effectively.</p>
        
        <h2>Continuous Improvement</h2>
        <p>Athletes constantly analyze their performance and seek marginal gains. This mindset translates perfectly to software engineering, where code reviews, refactoring, and learning new technologies are part of continuous improvement.</p>
        
        <p>The discipline, strategic thinking, and performance mindset from professional sports have made me a better engineer. These skills are transferable and valuable in any technical career.</p>
      `,
    },
    "servicenow-development-insights": {
      title: "Building on the ServiceNow Platform: A Developer's Perspective",
      date: "2024-12-05",
      readTime: "12 min read",
      tags: ["ServiceNow", "Development", "Enterprise", "Platform"],
      content: `
        <p>ServiceNow is a powerful platform for enterprise solutions, but it has its own unique development paradigms. Here are insights I've gained during my time developing on the platform.</p>
        
        <h2>Understanding the ServiceNow Architecture</h2>
        <p>ServiceNow is built on a multi-tenant architecture with a robust data model. Key concepts include:</p>
        
        <ul>
          <li><strong>Tables and Records:</strong> Everything in ServiceNow is stored in tables</li>
          <li><strong>Business Rules:</strong> Server-side logic that runs when records are queried, updated, inserted, or deleted</li>
          <li><strong>Client Scripts:</strong> Client-side JavaScript that enhances user experience</li>
          <li><strong>Script Includes:</strong> Reusable server-side JavaScript functions</li>
        </ul>
        
        <h2>Best Practices for ServiceNow Development</h2>
        
        <h3>1. Follow the Platform Conventions</h3>
        <p>ServiceNow has established patterns and conventions. Fighting against the platform usually leads to maintenance headaches. Embrace the ServiceNow way of doing things.</p>
        
        <h3>2. Leverage Out-of-the-Box Functionality</h3>
        <p>Before building custom solutions, explore what ServiceNow offers out-of-the-box. The platform is feature-rich, and custom development should complement, not replace, standard functionality.</p>
        
        <h3>3. Performance Considerations</h3>
        <p>Be mindful of performance, especially with:</p>
        <ul>
          <li>GlideRecord queries - use proper filtering and avoid unnecessary database calls</li>
          <li>Business Rules - keep them lightweight and avoid complex logic</li>
          <li>Client Scripts - minimize DOM manipulation and API calls</li>
        </ul>
        
        <h2>Common Pitfalls to Avoid</h2>
        <p>1. <strong>Over-customization:</strong> Resist the urge to customize everything. Standard functionality is easier to maintain and upgrade.</p>
        <p>2. <strong>Poor Error Handling:</strong> Always implement proper error handling in your scripts.</p>
        <p>3. <strong>Ignoring Security:</strong> Follow ServiceNow security best practices, especially around ACLs and data access.</p>
        
        <h2>The Learning Path</h2>
        <p>For developers new to ServiceNow, I recommend:</p>
        <ol>
          <li>Start with the ServiceNow Developer Program</li>
          <li>Get hands-on experience with a Personal Developer Instance</li>
          <li>Focus on understanding the data model and core concepts</li>
          <li>Practice with real-world scenarios and use cases</li>
        </ol>
        
        <p>ServiceNow development is rewarding once you understand the platform's strengths and work with them rather than against them.</p>
      `,
    },
  }

  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
        <Link href="/blog">
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/blog">
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 mb-8 bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {new Date(post.date).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime}
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag: string, index: number) => (
            <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="prose prose-invert prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
