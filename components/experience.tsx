import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "ServiceNow",
      period: "Present",
      description: "Developing platform solutions and contributing to enterprise software development.",
      skills: ["JavaScript", "Platform Development", "Enterprise Software", "API Development"]
    },
    {
      title: "Sales Professional",
      company: "Previous Role",
      period: "1 Year",
      description: "Gained valuable experience in customer relations, business development, and understanding market needs.",
      skills: ["Customer Relations", "Business Development", "Market Analysis", "Communication"]
    },
    {
      title: "Professional Badminton Player",
      company: "Competitive Sports",
      period: "Several Years",
      description: "Competed at professional level, developing discipline, strategic thinking, and performance optimization.",
      skills: ["Strategic Planning", "Performance Optimization", "Team Collaboration", "Pressure Management"]
    }
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
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300 mt-2 md:mt-0">
                    {exp.period}
                  </Badge>
                </div>
                
                <p className="text-gray-300 mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="border-gray-600 text-gray-300">
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
