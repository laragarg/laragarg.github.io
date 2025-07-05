import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "ServiceNow",
      period: "2023 - Present",
      description:
        "Developing enterprise software solutions on the ServiceNow platform, focusing on workflow automation and system integrations.",
      skills: ["JavaScript", "ServiceNow Platform", "REST APIs", "System Integration", "Workflow Automation"],
    },
    {
      title: "Sales Professional",
      company: "Previous Role",
      period: "2022 - 2023",
      description:
        "Gained valuable experience in client relationship management, solution selling, and understanding business requirements.",
      skills: ["Client Relations", "Solution Selling", "Business Analysis", "Communication", "CRM"],
    },
    {
      title: "Professional Badminton Player",
      company: "Competitive Sports",
      period: "2018 - 2022",
      description:
        "Competed at professional level, developing mental resilience, strategic thinking, and performance under pressure.",
      skills: [
        "Mental Resilience",
        "Strategic Planning",
        "Performance Optimization",
        "Team Collaboration",
        "Discipline",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-gray-700 text-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
