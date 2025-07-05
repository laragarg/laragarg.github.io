import { Header } from "@/components/header"
import { BlogPost } from "@/components/blog-post"
import { notFound } from "next/navigation"

const blogPosts = {
  "transitioning-from-sales-to-engineering": {
    title: "Transitioning from Sales to Software Engineering",
    date: "2024-01-15",
    tags: ["Career", "Tech Transition", "Personal Growth"],
    readTime: "5 min read",
    content: `
      Making the leap from sales to software engineering wasn't just a career change—it was a complete transformation of how I think about problems and solutions.

      ## The Decision to Switch

      After a year in sales, I realized that while I enjoyed understanding customer needs and building relationships, I was more fascinated by the technical solutions we were selling than the selling process itself. I found myself diving deep into product documentation, asking engineering teams detailed questions, and spending my free time learning to code.

      ## Leveraging Sales Skills in Engineering

      Surprisingly, my sales background has been incredibly valuable in my engineering role:

      - **Understanding User Needs**: Sales taught me to really listen to what customers want, which translates perfectly to building user-centric software
      - **Communication**: Explaining complex technical concepts to non-technical stakeholders is essentially sales skills applied to engineering
      - **Problem-Solving**: Both roles require breaking down complex problems into manageable pieces

      ## The Learning Curve

      The technical learning curve was steep, but my competitive background from badminton helped me approach it systematically. I treated learning programming languages and frameworks like training for a tournament—consistent practice, measurable goals, and continuous improvement.

      ## Advice for Others Making the Switch

      1. **Start coding while you're still in sales** - Use your current role to understand the business context
      2. **Build projects that solve real problems** - Your sales experience gives you insight into what people actually need
      3. **Don't underestimate your transferable skills** - Sales professionals often make great engineers because they understand the 'why' behind the code

      The transition wasn't easy, but combining sales insights with engineering skills has made me a more well-rounded developer who builds solutions that actually matter to users.
    `,
  },
  "lessons-from-professional-badminton": {
    title: "Lessons from Professional Badminton That Apply to Software Engineering",
    date: "2024-01-10",
    tags: ["Sports", "Engineering", "Mindset", "Performance"],
    readTime: "7 min read",
    content: `
      Professional sports and software engineering might seem worlds apart, but the mental frameworks and disciplines I developed as a competitive badminton player have been invaluable in my engineering career.

      ## The Mindset of Continuous Improvement

      In badminton, you're constantly analyzing your game, identifying weaknesses, and working to improve them. This translates perfectly to software engineering:

      - **Code Reviews** are like match analysis sessions
      - **Refactoring** is similar to adjusting your technique
      - **Learning new technologies** mirrors training new shots or strategies

      ## Performance Under Pressure

      Tournament play taught me how to perform when stakes are high. In engineering, this shows up as:

      - Debugging critical production issues
      - Presenting technical solutions to stakeholders
      - Meeting tight project deadlines

      The key is preparation and practice—just like in sports, the more you've practiced handling pressure in low-stakes situations, the better you perform when it really matters.

      ## Strategic Thinking

      Badminton is often called "physical chess" because of the strategic depth. Every shot is part of a larger game plan:

      - **Short-term tactics**: Individual rallies (like solving immediate bugs)
      - **Medium-term strategy**: Winning sets (completing features)
      - **Long-term planning**: Tournament preparation (system architecture)

      ## Team Dynamics

      Even in individual sports like badminton, you have coaches, training partners, and support staff. Similarly, software engineering is rarely a solo endeavor:

      - **Mentorship**: Like having a coach guide your development
      - **Pair Programming**: Similar to training with a partner
      - **Code Collaboration**: Like coordinating team strategies

      ## Handling Failure and Setbacks

      In sports, you lose matches. In engineering, code breaks, projects get cancelled, and systems fail. The athletic mindset of learning from failure and bouncing back quickly has been crucial:

      1. **Analyze what went wrong** without dwelling on it
      2. **Extract lessons** for future improvement
      3. **Move forward** with renewed focus

      ## The Discipline of Daily Practice

      Professional athletes train every day, even when they don't feel like it. This discipline translates directly to:

      - Consistent coding practice
      - Regular learning and skill development
      - Maintaining good development habits even under pressure

      The competitive drive that pushed me to excel in badminton now fuels my passion for writing clean, efficient code and building systems that users love.
    `,
  },
  "servicenow-platform-insights": {
    title: "Building on the ServiceNow Platform: A Developer's Perspective",
    date: "2024-01-05",
    tags: ["ServiceNow", "Platform Development", "Enterprise Software"],
    readTime: "6 min read",
    content: `
      Working with the ServiceNow platform has given me unique insights into enterprise software development and the power of platform-based solutions.

      ## What Makes ServiceNow Different

      ServiceNow isn't just another enterprise software—it's a platform that enables rapid application development for complex business processes. Coming from a traditional web development background, I was initially surprised by how much you can accomplish with minimal custom code.

      ## The Platform Advantage

      ### Rapid Development
      The platform provides pre-built components, workflows, and integrations that would take months to build from scratch:

      - **Form builders** for complex data entry
      - **Workflow engines** for business process automation
      - **Integration hubs** for connecting disparate systems
      - **Reporting tools** for business intelligence

      ### Built-in Best Practices
      The platform enforces many software engineering best practices by default:

      - **Access controls** and security models
      - **Audit trails** for compliance
      - **Version control** for configurations
      - **Testing frameworks** for quality assurance

      ## Challenges and Learning Curves

      ### Platform-Specific Knowledge
      While the platform accelerates development, it requires learning ServiceNow-specific concepts:

      - **GlideRecord** for database operations
      - **Business Rules** for server-side logic
      - **Client Scripts** for user interface behavior
      - **Script Includes** for reusable code libraries

      ### Balancing Configuration vs. Customization
      One of the biggest decisions is when to use out-of-the-box functionality versus custom development:

      - **Configuration** is faster and more maintainable
      - **Customization** provides more flexibility but requires more maintenance

      ## Enterprise Development Insights

      ### Scale and Complexity
      Enterprise software operates at a different scale than typical web applications:

      - **Thousands of users** with different roles and permissions
      - **Complex integrations** with legacy systems
      - **Strict compliance** requirements
      - **High availability** expectations

      ### The Importance of Process
      In enterprise environments, the process is often as important as the technology:

      - **Change management** for any system modifications
      - **Documentation** for knowledge transfer
      - **Testing procedures** for quality assurance
      - **Deployment processes** for risk mitigation

      ## Key Takeaways

      1. **Platform thinking** can dramatically accelerate development
      2. **Understanding business processes** is as important as technical skills
      3. **Enterprise software** requires different approaches than consumer applications
      4. **Collaboration** with business stakeholders is crucial for success

      Working on the ServiceNow platform has taught me to think beyond just writing code—it's about understanding business needs and leveraging platform capabilities to deliver solutions that truly make a difference in how organizations operate.
    `,
  },
}

export async function generateStaticParams() {
  return [
    { slug: "transitioning-from-sales-to-engineering" },
    { slug: "lessons-from-professional-badminton" },
    { slug: "servicenow-platform-insights" },
  ]
}

interface BlogPageProps {
  params: {
    slug: string
  }
}

export default function BlogPage({ params }: BlogPageProps) {
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
