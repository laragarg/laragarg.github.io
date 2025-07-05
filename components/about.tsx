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
              <Code className="mx-auto h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
              <p className="text-gray-400">
                Building scalable solutions on the ServiceNow platform with a focus on clean code and user experience.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <TrendingUp className="mx-auto h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sales Background</h3>
              <p className="text-gray-400">
                One year of sales experience taught me to understand customer needs and communicate technical solutions
                effectively.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Trophy className="mx-auto h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Professional Athlete</h3>
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
            mindset that drove my athletic success to building innovative software solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
