import { Header } from "@/components/header"
import { BlogPost } from "@/components/blog-post"

// This would typically come from a CMS or markdown files
const getBlogPost = (slug: string) => {
  const posts = {
    "transitioning-from-sales-to-engineering": {
      title: "Transitioning from Sales to Software Engineering",
      date: "2024-12-15",
      content: `
        <p>Making the transition from sales to software engineering has been one of the most challenging yet rewarding experiences of my career. Here's what I learned along the way...</p>
        
        <h2>The Skills That Transferred</h2>
        <p>Surprisingly, many skills from sales directly apply to engineering:</p>
        <ul>
          <li><strong>Problem-solving:</strong> Understanding client pain points translates well to debugging and system design</li>
          <li><strong>Communication:</strong> Explaining complex technical concepts to stakeholders</li>
          <li><strong>Persistence:</strong> Both fields require pushing through challenges and setbacks</li>
        </ul>
        
        <h2>The Learning Curve</h2>
        <p>The technical learning curve was steep, but my sales background helped me approach it systematically. I treated learning programming languages like learning about new products - understanding the features, benefits, and use cases.</p>
        
        <h2>Advice for Others</h2>
        <p>If you're considering a similar transition, remember that your previous experience isn't wasted - it's a unique advantage that sets you apart from other engineers.</p>
      `,
      tags: ["Career", "Software Engineering", "Sales"],
    },
    "lessons-from-professional-badminton": {
      title: "Lessons from Professional Badminton That Apply to Software Engineering",
      date: "2024-12-10",
      content: `
        <p>My years playing professional badminton taught me invaluable lessons that I apply daily in my software engineering career...</p>
        
        <h2>Mental Resilience</h2>
        <p>In badminton, you can lose a point and immediately need to reset for the next one. Similarly, in engineering, bugs and failed deployments require quick mental recovery and focused problem-solving.</p>
        
        <h2>Precision Under Pressure</h2>
        <p>Tournament play taught me to maintain precision when stakes are high - a skill that's crucial during production incidents or tight deadlines.</p>
        
        <h2>Continuous Improvement</h2>
        <p>Professional sports instill a mindset of constant refinement. Every practice session, every match is an opportunity to improve. I apply this same philosophy to code reviews, learning new technologies, and refining my craft.</p>
        
        <h2>Team Dynamics</h2>
        <p>Even in singles play, you have coaches, training partners, and support staff. Software engineering is similarly collaborative, requiring clear communication and mutual support.</p>
      `,
      tags: ["Sports", "Career", "Mindset"],
    },
    "servicenow-platform-insights": {
      title: "Building on the ServiceNow Platform: A Developer's Perspective",
      date: "2024-12-05",
      content: `
        <p>Working at ServiceNow has given me unique insights into enterprise software development and the power of low-code/no-code platforms...</p>
        
        <h2>The Platform Advantage</h2>
        <p>ServiceNow's platform approach allows for rapid application development while maintaining enterprise-grade security and scalability. Here's what makes it special:</p>
        
        <h2>Key Learnings</h2>
        <ul>
          <li><strong>Configuration over Customization:</strong> Leveraging platform capabilities reduces technical debt</li>
          <li><strong>Integration Patterns:</strong> How to connect disparate enterprise systems effectively</li>
          <li><strong>User Experience:</strong> Building intuitive interfaces for complex business processes</li>
        </ul>
        
        <h2>Technical Deep Dive</h2>
        <p>The platform's architecture teaches valuable lessons about building scalable, multi-tenant applications that can be applied to any software project.</p>
      `,
      tags: ["ServiceNow", "Enterprise Software", "Platform Development"],
    },
  }

  return posts[slug as keyof typeof posts] || null
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
            <p className="text-gray-300">The blog post you're looking for doesn't exist.</p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <BlogPost post={post} />
    </div>
  )
}
