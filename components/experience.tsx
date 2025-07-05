import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, TrendingUp, Trophy } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      icon: Building,
      title: "Software Engineer",
      company: "ServiceNow",
      period: "2023 - Present",
      description:
        "Developing enterprise software solutions on the ServiceNow platform, focusing on workflow automation and system integrations.",
      skills: ["JavaScript", "ServiceNow Platform", "REST APIs", "System Integration", "Workflow Automation"],
    },
    {
      icon: TrendingUp,
      title: "Sales Professional",
      company: "Previous Role",
      period: "2022 - 2023",
      description:
        "Built client relationships and drove revenue growth through consultative selling and solution-oriented approaches.",
      skills: ["Client Relations", "Consultative Selling", "CRM", "Lead Generation", "Presentation Skills"],
    },
    {
      icon: Trophy,
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon
              return (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-gray-700 rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-xl mb-1">{exp.title}</CardTitle>
                        <p className="text-gray-300 font-medium">{exp.company}</p>
                        <p className="text-gray-400 text-sm">{exp.period}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-gray-700 text-gray-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
