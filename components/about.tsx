import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Trophy } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Software Engineering",
      description:
        "Building enterprise solutions at ServiceNow with focus on platform development and system architecture.",
    },
    {
      icon: Users,
      title: "Sales Experience",
      description:
        "Developed strong communication and client relationship skills through professional sales experience.",
    },
    {
      icon: Trophy,
      title: "Professional Sports",
      description: "Competed at professional level in badminton, developing mental toughness and strategic thinking.",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a software engineer with a unique background spanning professional sports, sales, and technology. This
            diverse experience gives me a distinctive perspective on problem-solving, team collaboration, and
            performance optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card key={index} className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
