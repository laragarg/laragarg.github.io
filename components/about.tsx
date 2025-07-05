import { Card, CardContent } from "@/components/ui/card"
import { Code, TrendingUp, Trophy } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Code className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">Software Engineer</h3>
              <p className="text-gray-400">
                Building scalable solutions on the ServiceNow platform with a focus on clean code and user experience.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">Sales Background</h3>
              <p className="text-gray-400">
                One year of sales experience taught me to understand customer needs and communicate technical concepts
                effectively.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">Professional Athlete</h3>
              <p className="text-gray-400">
                Former professional badminton player with discipline, strategic thinking, and performance under
                pressure.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-300 leading-relaxed">
            My unique journey from professional sports to sales to software engineering has given me a distinctive
            perspective on problem-solving, teamwork, and delivering results. I bring the same dedication and strategic
            mindset that made me successful in badminton to every line of code I write and every project I tackle.
          </p>
        </div>
      </div>
    </section>
  )
}
