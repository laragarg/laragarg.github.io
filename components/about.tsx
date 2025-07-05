import { Card, CardContent } from "@/components/ui/card"
import { Code, TrendingUp, Trophy } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">About Me</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6 text-center">
                <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Software Engineer</h3>
                <p className="text-gray-300">
                  Building scalable solutions at ServiceNow, focusing on enterprise software development and platform
                  engineering.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Sales Background</h3>
                <p className="text-gray-300">
                  One year of sales experience that taught me client relations, problem-solving, and effective
                  communication skills.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6 text-center">
                <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Professional Athlete</h3>
                <p className="text-gray-300">
                  Former professional badminton player with experience in high-pressure competition and disciplined
                  training.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              My unique journey combines technical expertise, business acumen, and athletic discipline. This diverse
              background allows me to approach software engineering with a holistic perspective, understanding both the
              technical challenges and business requirements while maintaining the focus and resilience developed
              through professional sports.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
