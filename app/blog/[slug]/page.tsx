import { Header } from "@/components/header"
import { BlogPost } from "@/components/blog-post"
import { notFound } from "next/navigation"

const blogPosts = {
  "transitioning-from-sales-to-engineering": {
    title: "Transitioning from Sales to Software Engineering",
    date: "2024-01-15",
    content: `
# Transitioning from Sales to Software Engineering

Making the leap from sales to software engineering might seem like a dramatic career change, but the skills are more transferable than you might think. Here's my journey and what I learned along the way.

## The Decision to Switch

After a year in sales, I realized that while I enjoyed the problem-solving aspect and working with clients, I was more interested in building the solutions than selling them. The technical challenges and the ability to create something from scratch drew me to software engineering.

## Transferable Skills

### 1. Understanding Customer Needs
In sales, you learn to listen carefully to what customers actually need, not just what they say they want. This skill is invaluable in software engineering when gathering requirements and designing user-centered solutions.

### 2. Communication
Explaining complex technical concepts to non-technical stakeholders is essentially the same skill as explaining product benefits to potential customers. Both require breaking down complexity into understandable terms.

### 3. Problem-Solving Under Pressure
Sales taught me to think quickly and find creative solutions when deals were on the line. This translates well to debugging code under tight deadlines or finding workarounds for technical limitations.

## The Learning Journey

The transition wasn't without challenges. I had to:
- Learn programming fundamentals from scratch
- Understand software architecture and design patterns
- Adapt to a different pace and style of work
- Build technical credibility in a new field

## Advice for Others Making the Switch

1. **Start coding while still in your current role** - Use evenings and weekends to build a foundation
2. **Focus on practical projects** - Build things that solve real problems
3. **Network within the tech community** - Attend meetups and connect with other developers
4. **Don't undervalue your previous experience** - Your unique background is an asset

The combination of sales experience and technical skills has made me a more well-rounded engineer, especially when working on customer-facing features or communicating with stakeholders.
    `,
    tags: ["Career", "Sales", "Engineering", "Transition"],
  },
  "lessons-from-professional-badminton": {
    title: "Lessons from Professional Badminton That Apply to Software Engineering",
    date: "2024-01-10",
    content: `
# Lessons from Professional Badminton That Apply to Software Engineering

Professional sports and software engineering might seem worlds apart, but the mental frameworks and disciplines I developed as a professional badminton player have been invaluable in my engineering career.

## The Mindset of Continuous Improvement

### Deliberate Practice
In badminton, every training session had a specific focus - footwork, shot accuracy, or tactical awareness. Similarly, in software engineering, I approach learning with the same deliberate practice mindset:
- Focus on one concept at a time
- Practice until it becomes second nature
- Seek feedback and iterate

### Performance Analysis
Professional athletes constantly analyze their performance through video reviews and statistics. I apply this same analytical approach to my code:
- Regular code reviews
- Performance monitoring
- Learning from bugs and failures

## Strategic Thinking Under Pressure

### Reading the Game
In badminton, you need to quickly assess your opponent's weaknesses and adapt your strategy mid-game. This translates to:
- Understanding system bottlenecks
- Adapting to changing requirements
- Making quick technical decisions under pressure

### Risk Assessment
Every shot in badminton involves risk vs. reward calculations. In engineering:
- Choosing between different technical approaches
- Balancing feature complexity with delivery timelines
- Deciding when to refactor vs. when to ship

## Team Dynamics and Communication

### Doubles Partnership
Playing doubles taught me the importance of:
- Clear communication during high-pressure situations
- Trust in your partner's abilities
- Coordinated strategy execution

These skills directly apply to:
- Pair programming sessions
- Sprint planning and execution
- Cross-functional team collaboration

## Discipline and Consistency

### Daily Training Routine
Professional sports require showing up every day, regardless of motivation. This discipline helps with:
- Consistent coding practice
- Regular learning and skill development
- Maintaining code quality standards

### Mental Resilience
Sports teach you to bounce back from losses and setbacks. In engineering:
- Debugging complex issues without getting frustrated
- Learning from failed deployments
- Staying motivated during challenging projects

## The Competitive Edge

The competitive spirit from sports drives me to:
- Continuously improve my technical skills
- Stay updated with industry trends
- Strive for excellence in code quality

Professional sports gave me a framework for high performance that I now apply to software engineering. The discipline, strategic thinking, and resilience developed on the badminton court serve me well in the world of code.
    `,
    tags: ["Sports", "Engineering", "Mindset", "Performance"],
  },
  "servicenow-platform-insights": {
    title: "Building on the ServiceNow Platform: A Developer's Perspective",
    date: "2024-01-05",
    content: `
# Building on the ServiceNow Platform: A Developer's Perspective

Working at ServiceNow has given me deep insights into enterprise platform development. Here are some key learnings and best practices I've discovered while building on the ServiceNow platform.

## Understanding the Platform Architecture

### The Power of Configuration Over Customization
ServiceNow's strength lies in its configuration-first approach:
- Use out-of-the-box functionality whenever possible
- Leverage platform features like workflows and business rules
- Custom code should be the last resort, not the first

### Data Model Design
The platform's table structure is fundamental:
- Extend existing tables when possible
- Design with reporting and performance in mind
- Consider data relationships early in the design process

## Development Best Practices

### Script Performance
- Avoid unnecessary database queries in loops
- Use GlideRecord efficiently with proper query conditions
- Leverage server-side includes for reusable code

### User Experience
- Design with the end user in mind
- Use platform UI components for consistency
- Test across different form factors and browsers

### Security Considerations
- Follow the principle of least privilege
- Use ACLs (Access Control Lists) appropriately
- Validate all user inputs

## Integration Patterns

### REST API Development
- Design RESTful endpoints following platform conventions
- Implement proper error handling and status codes
- Document APIs thoroughly for consumers

### External System Integration
- Use MID Server for secure on-premise connections
- Implement retry logic for external API calls
- Monitor integration health and performance

## Testing and Quality Assurance

### Automated Testing
- Write unit tests for business logic
- Use ATF (Automated Test Framework) for UI testing
- Implement continuous integration practices

### Performance Testing
- Test with realistic data volumes
- Monitor system performance metrics
- Optimize queries and scripts based on results

## Deployment and Change Management

### Update Set Management
- Keep update sets focused and atomic
- Test thoroughly in sub-production environments
- Document changes and rollback procedures

### Version Control
- Use external version control for custom applications
- Maintain clear branching strategies
- Implement code review processes

## Key Takeaways

1. **Platform-First Thinking**: Always explore platform capabilities before building custom solutions
2. **Performance Matters**: Enterprise platforms serve thousands of users - optimize accordingly
3. **User-Centric Design**: The best technical solution is worthless if users can't or won't use it
4. **Continuous Learning**: The platform evolves rapidly - stay updated with new features and best practices

Building on enterprise platforms like ServiceNow requires a different mindset than traditional application development. Success comes from understanding and leveraging the platform's strengths while following established patterns and best practices.
    `,
    tags: ["ServiceNow", "Platform", "Development", "Enterprise"],
  },
}

export async function generateStaticParams() {
  return [
    { slug: "transitioning-from-sales-to-engineering" },
    { slug: "lessons-from-professional-badminton" },
    { slug: "servicenow-platform-insights" },
  ]
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="pt-20">
        <BlogPost post={post} />
      </main>
    </div>
  )
}
