import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "ServiceNow",
      period: "2024 - Present",
      description:
        "Developing and maintaining applications on the ServiceNow platform, focusing on workflow automation and system integrations.",
      skills: ["ServiceNow", "JavaScript", "REST APIs", "Workflow Automation"],
    },
    {
      title: "Sales Professional",
      company: "Previous Role",
      period: "2023 - 2024",
      description:
        "Built strong client relationships and developed deep understanding of business needs and market dynamics.",
      skills: ["Client Relations", "Business Analysis", "Market Research", "Communication"],
    },
    {
      title: "Professional Badminton Player",
      company: "Competitive Sports",
      period: "2020 - 2023",
      description:
        "Competed at professional level, developing mental toughness, strategic thinking, and performance under pressure.",
      skills: ["Strategic Thinking", "Performance Optimization", "Team Leadership", "Mental Resilience"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="border-gray-600 text-gray-300 w-fit">
                    {exp.period}
                  </Badge>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-gray-700 text-gray-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
