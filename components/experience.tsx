import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "ServiceNow",
      period: "2023 - Present",
      description:
        "Developing and maintaining applications on the ServiceNow platform, focusing on workflow automation and user experience improvements.",
      technologies: ["ServiceNow", "JavaScript", "HTML/CSS", "REST APIs", "Workflow Automation"],
    },
    {
      title: "Sales Professional",
      company: "Previous Company",
      period: "2022 - 2023",
      description:
        "Built relationships with clients, identified business needs, and presented technical solutions. Achieved consistent sales targets while developing strong communication skills.",
      technologies: ["CRM", "Sales Strategy", "Client Relations", "Technical Presentations"],
    },
    {
      title: "Professional Badminton Player",
      company: "Various Tournaments",
      period: "2018 - 2022",
      description:
        "Competed at professional level, developing discipline, strategic thinking, and performance under pressure. Managed training schedules and competitive strategies.",
      technologies: ["Strategic Planning", "Performance Analysis", "Team Coordination", "Mental Resilience"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="border-gray-600 text-gray-300 mt-2 md:mt-0">
                    {exp.period}
                  </Badge>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-gray-700 text-gray-300">
                      {tech}
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
