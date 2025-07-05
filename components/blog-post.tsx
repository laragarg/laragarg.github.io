import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface BlogPostProps {
  slug: string
}

export function BlogPost({ slug }: BlogPostProps) {
  const blogPosts = {
    "transitioning-from-sales-to-engineering": {
      title: "Transitioning from Sales to Software Engineering",
      date: "2024-01-15",
      tags: ["Career", "Software Engineering", "Personal Growth"],
      readTime: "8 min read",
      content: `
        <p>Making the transition from sales to software engineering was one of the most challenging yet rewarding decisions of my career. This journey taught me valuable lessons about perseverance, continuous learning, and the importance of transferable skills.</p>
        
        <h2>The Decision to Switch</h2>
        <p>After a year in sales, I realized that while I enjoyed the customer interaction and problem-solving aspects, my true passion lay in building the solutions rather than just selling them. The technical challenges and creative problem-solving in software development called to me.</p>
        
        <h2>Challenges Faced</h2>
        <p>The transition wasn't easy. I had to:</p>
        <ul>
          <li>Learn programming languages from scratch</li>
          <li>Understand complex technical concepts</li>
          <li>Build a portfolio to demonstrate my skills</li>
          <li>Network within the tech community</li>
        </ul>
        
        <h2>Transferable Skills</h2>
        <p>My sales background provided unexpected advantages:</p>
        <ul>
          <li><strong>Communication:</strong> Ability to explain complex technical concepts clearly</li>
          <li><strong>Customer Focus:</strong> Understanding user needs and business requirements</li>
          <li><strong>Resilience:</strong> Handling rejection and setbacks with determination</li>
          <li><strong>Relationship Building:</strong> Collaborating effectively with team members</li>
        </ul>
        
        <h2>Advice for Others</h2>
        <p>If you're considering a similar transition:</p>
        <ol>
          <li>Start learning while still in your current role</li>
          <li>Build projects that showcase your skills</li>
          <li>Network with professionals in your target field</li>
          <li>Don't underestimate your transferable skills</li>
          <li>Be patient with yourself during the learning process</li>
        </ol>
        
        <p>The journey from sales to software engineering has been incredibly fulfilling. Every challenge overcome has made me a stronger developer and a more well-rounded professional.</p>
      `,
    },
    "lessons-from-professional-badminton": {
      title: "Lessons from Professional Badminton That Apply to Software Engineering",
      date: "2024-01-10",
      tags: ["Sports", "Software Engineering", "Leadership"],
      readTime: "6 min read",
      content: `
        <p>My years as a professional badminton player taught me lessons that have proven invaluable in my software engineering career. The parallels between athletic performance and software development are more significant than you might think.</p>
        
        <h2>Discipline and Consistency</h2>
        <p>In badminton, daily practice and consistent effort are non-negotiable. Similarly, in software engineering, regular coding practice, staying updated with new technologies, and maintaining coding standards require the same level of discipline.</p>
        
        <h2>Strategic Thinking</h2>
        <p>Every match in badminton requires strategy - analyzing your opponent, adapting your game plan, and making split-second decisions. Software engineering demands similar strategic thinking when architecting solutions, choosing technologies, and solving complex problems.</p>
        
        <h2>Performance Under Pressure</h2>
        <p>Professional sports teach you to perform when it matters most. In software engineering, this translates to:</p>
        <ul>
          <li>Debugging critical issues under tight deadlines</li>
          <li>Presenting solutions to stakeholders</li>
          <li>Making important technical decisions quickly</li>
          <li>Handling production incidents calmly</li>
        </ul>
        
        <h2>Continuous Improvement</h2>
        <p>Athletes constantly analyze their performance and work on weaknesses. In software engineering, this mindset drives:</p>
        <ul>
          <li>Code reviews and learning from feedback</li>
          <li>Refactoring and improving existing code</li>
          <li>Learning new technologies and methodologies</li>
          <li>Measuring and optimizing performance</li>
        </ul>
        
        <h2>Team Collaboration</h2>
        <p>While badminton can be individual, doubles play requires perfect coordination with your partner. Software development is inherently collaborative, requiring:</p>
        <ul>
          <li>Clear communication with team members</li>
          <li>Trust in your colleagues' abilities</li>
          <li>Supporting teammates when they struggle</li>
          <li>Celebrating collective achievements</li>
        </ul>
        
        <h2>Mental Resilience</h2>
        <p>Sports teach you to bounce back from defeats and learn from mistakes. In software engineering, this resilience helps when:</p>
        <ul>
          <li>Dealing with bugs and failed deployments</li>
          <li>Receiving critical feedback on your code</li>
          <li>Learning from project failures</li>
          <li>Adapting to changing requirements</li>
        </ul>
        
        <p>The competitive spirit and mental toughness developed through professional sports have been my greatest assets in navigating the challenges of software engineering.</p>
      `,
    },
    "servicenow-platform-insights": {
      title: "Building on the ServiceNow Platform: A Developer's Perspective",
      date: "2024-01-05",
      tags: ["ServiceNow", "Platform Development", "Enterprise"],
      readTime: "10 min read",
      content: `
        <p>Working as a software engineer at ServiceNow has given me deep insights into platform development and enterprise software solutions. Here are my observations and learnings from building on the ServiceNow platform.</p>
        
        <h2>Understanding the Platform</h2>
        <p>ServiceNow is more than just a ticketing system - it's a comprehensive platform for digital workflows. The platform provides:</p>
        <ul>
          <li>Low-code/no-code development capabilities</li>
          <li>Robust workflow automation</li>
          <li>Integration with enterprise systems</li>
          <li>Scalable cloud infrastructure</li>
        </ul>
        
        <h2>Development Best Practices</h2>
        <p>Building effective solutions on ServiceNow requires understanding several key principles:</p>
        
        <h3>1. Leverage Platform Capabilities</h3>
        <p>Instead of building everything from scratch, utilize the platform's built-in features:</p>
        <ul>
          <li>Use existing tables and relationships where possible</li>
          <li>Leverage platform APIs and web services</li>
          <li>Utilize built-in security and access controls</li>
          <li>Take advantage of platform updates and improvements</li>
        </ul>
        
        <h3>2. Design for Scalability</h3>
        <p>Enterprise solutions must handle large volumes of data and users:</p>
        <ul>
          <li>Optimize database queries and avoid unnecessary joins</li>
          <li>Use appropriate indexing strategies</li>
          <li>Implement efficient caching mechanisms</li>
          <li>Design with performance monitoring in mind</li>
        </ul>
        
        <h3>3. Maintain Upgrade Safety</h3>
        <p>Platform updates should not break your customizations:</p>
        <ul>
          <li>Follow ServiceNow development guidelines</li>
          <li>Use supported APIs and avoid unsupported methods</li>
          <li>Test thoroughly before and after platform upgrades</li>
          <li>Document customizations and their dependencies</li>
        </ul>
        
        <h2>Common Challenges and Solutions</h2>
        
        <h3>Integration Complexity</h3>
        <p>Enterprise environments often require integration with multiple systems. Key strategies include:</p>
        <ul>
          <li>Use REST APIs for modern integrations</li>
          <li>Implement proper error handling and retry logic</li>
          <li>Design for data consistency across systems</li>
          <li>Monitor integration performance and reliability</li>
        </ul>
        
        <h3>User Experience</h3>
        <p>Creating intuitive interfaces for enterprise users requires:</p>
        <ul>
          <li>Understanding user workflows and pain points</li>
          <li>Designing mobile-responsive interfaces</li>
          <li>Implementing progressive disclosure for complex forms</li>
          <li>Providing clear feedback and error messages</li>
        </ul>
        
        <h2>The Future of Platform Development</h2>
        <p>The ServiceNow platform continues to evolve with:</p>
        <ul>
          <li>AI and machine learning capabilities</li>
          <li>Enhanced mobile experiences</li>
          <li>Improved developer tools and APIs</li>
          <li>Greater emphasis on citizen development</li>
        </ul>
        
        <h2>Key Takeaways</h2>
        <p>Building on enterprise platforms like ServiceNow requires a different mindset than traditional software development. Success comes from understanding the platform's strengths, following best practices, and always keeping the end user's needs in focus.</p>
        
        <p>The platform approach to software development represents the future of enterprise solutions - enabling faster development, better integration, and more maintainable applications.</p>
      `,
    },
  }

  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/blog">
        <Button variant="ghost" className="mb-8 p-0 text-blue-400 hover:text-blue-300">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <div
        className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-white"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}
