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
              <h3 className="text-xl font-semibold mb-3">Software Engineer</h3>
              <p className="text-gray-400">
                Building scalable solutions at ServiceNow with a focus on platform development and user experience.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-3">Sales Background</h3>
              <p className="text-gray-400">
                One year of sales experience that taught me the importance of understanding customer needs and business
                value.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-3">Professional Athlete</h3>
              <p className="text-gray-400">
                Former professional badminton player with a competitive mindset that drives excellence in everything I
                do.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300 leading-relaxed">
            My unique journey from professional sports to sales and finally to software engineering has given me a
            distinctive perspective on problem-solving, teamwork, and perseverance. I bring the discipline of an
            athlete, the customer-focused mindset of a salesperson, and the technical skills of an engineer to every
            project I work on.
          </p>
        </div>
      </div>
    </section>
  )
}
