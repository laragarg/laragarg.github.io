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
              <Code className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-3 text-white">Software Engineer</h3>
              <p className="text-gray-300">
                Building scalable solutions at ServiceNow with expertise in modern web technologies and platform
                development.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-3 text-white">Sales Background</h3>
              <p className="text-gray-300">
                One year of sales experience that taught me the importance of understanding customer needs and business
                requirements.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-3 text-white">Professional Athlete</h3>
              <p className="text-gray-300">
                Former professional badminton player with a competitive mindset and discipline that drives excellence in
                everything I do.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300 leading-relaxed">
            My unique journey from professional sports to sales, and finally to software engineering, has given me a
            distinctive perspective on problem-solving, teamwork, and perseverance. I bring the strategic thinking from
            sales, the competitive drive from sports, and the technical expertise from engineering to create innovative
            solutions that make a real impact.
          </p>
        </div>
      </div>
    </section>
  )
}
