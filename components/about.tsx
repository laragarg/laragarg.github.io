import { Card, CardContent } from "@/components/ui/card"
import { Code, TrendingUp, Trophy } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Software Engineer</h3>
                <p className="text-gray-300">
                  Building enterprise solutions at ServiceNow with a focus on scalable, user-centric applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Sales Background</h3>
                <p className="text-gray-300">
                  One year of sales experience that taught me to understand user needs and communicate technical
                  concepts effectively.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-6 text-center">
                <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Professional Athlete</h3>
                <p className="text-gray-300">
                  Former professional badminton player bringing discipline, resilience, and competitive spirit to
                  software development.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              My unique journey from professional sports to sales to software engineering has given me a distinctive
              perspective on problem-solving, team collaboration, and continuous improvement. I believe the best
              solutions come from understanding both the technical requirements and the human needs behind them.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
