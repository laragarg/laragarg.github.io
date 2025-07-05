import { Card, CardContent } from "@/components/ui/card"
import { Code, TrendingUp, Trophy } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Software Engineering",
      description: "Building scalable solutions on the ServiceNow platform with modern development practices.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "Sales Experience",
      description: "One year of sales experience, understanding customer needs and business requirements.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      title: "Professional Badminton",
      description: "Former professional badminton player with discipline, strategy, and competitive excellence.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A unique combination of technical expertise, business acumen, and athletic discipline shapes my approach to
            software engineering and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
          <p className="text-gray-300 leading-relaxed">
            My path has been anything but conventional. Starting as a professional badminton player, I learned the value
            of discipline, strategic thinking, and continuous improvement. Transitioning into sales gave me insights
            into customer psychology and business needs. Now, as a software engineer at ServiceNow, I combine these
            diverse experiences to build solutions that not only work technically but also serve real human needs. This
            unique perspective allows me to bridge the gap between complex technical concepts and practical business
            applications.
          </p>
        </div>
      </div>
    </section>
  )
}
