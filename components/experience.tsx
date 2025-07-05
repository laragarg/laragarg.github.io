import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "ServiceNow",
      period: "2023 - Present",
      description:
        "Developing and maintaining enterprise software solutions on the ServiceNow platform. Working with modern web technologies to build scalable applications.",
      skills: ["JavaScript", "ServiceNow Platform", "Web Development", "API Integration"],
    },
    {
      title: "Sales Professional",
      company: "Previous Role",
      period: "2022 - 2023",
      description:
        "Gained valuable experience in client relationship management, understanding business requirements, and translating customer needs into actionable solutions.",
      skills: ["Client Relations", "Business Analysis", "Communication", "Problem Solving"],
    },
    {
      title: "Professional Badminton Player",
      company: "Competitive Sports",
      period: "2018 - 2022",
      description:
        "Competed at professional level, developing discipline, strategic thinking, and the ability to perform under pressure. Learned the importance of continuous improvement and teamwork.",
      skills: ["Strategic Thinking", "Performance Under Pressure", "Team Collaboration", "Continuous Learning"],
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
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <p className="text-lg text-gray-300 mb-2">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="border-gray-600 text-gray-300 w-fit">
                    {exp.period}
                  </Badge>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-gray-700 text-gray-200">
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
