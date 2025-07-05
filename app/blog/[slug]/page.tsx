import { notFound } from "next/navigation"
import Header from "@/components/header"
import BlogPost from "@/components/blog-post"

const blogPosts = {
  "transitioning-from-sales-to-engineering": {
    title: "Transitioning from Sales to Software Engineering",
    date: "2024-01-15",
    readTime: "5 min read",
    content: `
      <p>Making the leap from sales to software engineering might seem like a dramatic career change, but the transition taught me that many skills are more transferable than you might think.</p>
      
      <h2>The Decision to Switch</h2>
      <p>After a year in sales, I realized that while I enjoyed solving customer problems, I was more fascinated by the technical solutions behind those problems. The logical thinking required in sales—understanding customer needs, crafting solutions, and communicating complex ideas—actually prepared me well for programming.</p>
      
      <h2>Transferable Skills</h2>
      <p>Several skills from my sales experience proved invaluable in software engineering:</p>
      <ul>
        <li><strong>Problem-solving:</strong> Sales taught me to break down complex customer problems into manageable parts</li>
        <li><strong>Communication:</strong> Explaining technical concepts to non-technical stakeholders</li>
        <li><strong>Persistence:</strong> Debugging code requires the same persistence as closing deals</li>
        <li><strong>Customer focus:</strong> Understanding end-user needs when building applications</li>
      </ul>
      
      <h2>The Learning Journey</h2>
      <p>The transition wasn't without challenges. I had to dedicate significant time to learning programming fundamentals, but my sales background helped me understand the business context of the applications I was building.</p>
      
      <p>At ServiceNow, I've found that my sales experience gives me a unique perspective on how our platform serves real business needs, making me a more effective developer.</p>
    `,
  },
  "lessons-from-professional-badminton": {
    title: "Lessons from Professional Badminton That Apply to Software Engineering",
    date: "2024-01-10",
    readTime: "7 min read",
    content: `
      <p>Professional sports and software engineering might seem worlds apart, but my experience as a professional badminton player has been surprisingly relevant to my career in tech.</p>
      
      <h2>Strategic Thinking</h2>
      <p>In badminton, every shot is strategic. You're constantly thinking several moves ahead, anticipating your opponent's responses, and adapting your game plan. This translates directly to software architecture and problem-solving.</p>
      
      <p>When designing systems, I apply the same strategic mindset—considering edge cases, planning for scalability, and thinking about how different components will interact.</p>
      
      <h2>Performance Under Pressure</h2>
      <p>Professional sports teach you to perform when it matters most. Whether it's a crucial match point or a production bug that needs immediate fixing, the ability to stay calm and think clearly under pressure is invaluable.</p>
      
      <h2>Continuous Improvement</h2>
      <p>In badminton, you're constantly analyzing your performance, identifying weaknesses, and working to improve. This mindset of continuous learning and improvement is essential in tech, where technologies and best practices are constantly evolving.</p>
      
      <h2>Team Collaboration</h2>
      <p>Even in individual sports like badminton, you work with coaches, training partners, and support staff. Similarly, software development is rarely a solo endeavor—it requires effective collaboration with designers, product managers, and other developers.</p>
      
      <h2>Discipline and Consistency</h2>
      <p>Professional sports require daily discipline and consistent effort. The same applies to software engineering—consistent coding practices, regular learning, and disciplined approach to problem-solving lead to better outcomes.</p>
    `,
  },
  "servicenow-platform-insights": {
    title: "Building on the ServiceNow Platform: A Developer's Perspective",
    date: "2024-01-05",
    readTime: "6 min read",
    content: `
      <p>Working as a software engineer at ServiceNow has given me deep insights into platform development and the unique challenges and opportunities it presents.</p>
      
      <h2>Understanding the Platform Approach</h2>
      <p>ServiceNow isn't just a software company—it's a platform that enables organizations to digitize their workflows. This platform approach means thinking beyond individual applications to consider how different systems integrate and work together.</p>
      
      <h2>Key Development Principles</h2>
      <p>Several principles guide effective development on the ServiceNow platform:</p>
      
      <h3>Configuration Over Customization</h3>
      <p>Whenever possible, use out-of-the-box functionality and configuration options rather than custom code. This ensures easier upgrades and better maintainability.</p>
      
      <h3>Understand the Data Model</h3>
      <p>ServiceNow's power lies in its robust data model. Understanding table relationships, inheritance, and data flow is crucial for building effective applications.</p>
      
      <h3>Leverage Platform Features</h3>
      <p>The platform provides powerful features like workflow automation, reporting, and integration capabilities. Learning to leverage these effectively can save significant development time.</p>
      
      <h2>Best Practices I've Learned</h2>
      <ul>
        <li><strong>Start with requirements:</strong> Understand the business process before jumping into technical implementation</li>
        <li><strong>Think in terms of workflows:</strong> ServiceNow excels at workflow automation—design with this in mind</li>
        <li><strong>Plan for integration:</strong> Most ServiceNow implementations involve integrating with other systems</li>
        <li><strong>Consider the user experience:</strong> The platform provides many UX options—choose the right one for your users</li>
      </ul>
      
      <h2>The Future of Platform Development</h2>
      <p>Platform development is evolving rapidly, with increased focus on low-code/no-code solutions, AI integration, and mobile-first experiences. Staying current with these trends while maintaining solid fundamentals is key to success.</p>
    `,
  },
}

// This function tells Next.js which dynamic routes to pre-generate
export async function generateStaticParams() {
  return [
    { slug: "transitioning-from-sales-to-engineering" },
    { slug: "lessons-from-professional-badminton" },
    { slug: "servicenow-platform-insights" },
  ]
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const validSlugs = [
    "transitioning-from-sales-to-engineering",
    "lessons-from-professional-badminton",
    "servicenow-platform-insights",
  ]

  if (!validSlugs.includes(params.slug)) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="pt-20">
        <BlogPost slug={params.slug} />
      </main>
    </div>
  )
}
