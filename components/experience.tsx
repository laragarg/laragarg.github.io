import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "ServiceNow",
      period: "2023 - Present",
      description:
        "Developing and maintaining applications on the ServiceNow platform, focusing on workflow automation and system integrations.",
      technologies: ["ServiceNow", "JavaScript", "REST APIs", "Workflow Automation"],
    },
    {
      title: "Sales Representative",
      company: "Previous Role",
      period: "2022 - 2023",
      description:
        "Built relationships with clients, understood business requirements, and delivered tailored solutions to meet customer needs.",
      technologies: ["CRM", "Sales Strategy", "Client Relations", "Business Analysis"],
    },
    {
      title: "Professional Badminton Player",
      company: "Competitive Sports",
      period: "2018 - 2022",
      description:
        "Competed at professional level, developing discipline, strategic thinking, and performance under pressure.",
      technologies: ["Strategic Planning", "Performance Analysis", "Team Collaboration", "Mental Resilience"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A diverse background spanning technology, business, and professional sports.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300 mt-2 md:mt-0">
                    {exp.period}
                  </Badge>
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-gray-600 text-gray-300">
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
