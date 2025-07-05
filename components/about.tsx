import { Card, CardContent } from "@/components/ui/card"
import { Code, TrendingUp, Trophy } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-6 text-center">
                <Code className="mx-auto mb-4 text-blue-400" size={48} />
                <h3 className="text-xl font-semibold mb-3 text-white">Software Engineer</h3>
                <p className="text-gray-300">
                  Building scalable solutions at ServiceNow with a focus on enterprise platforms and user experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-6 text-center">
                <TrendingUp className="mx-auto mb-4 text-green-400" size={48} />
                <h3 className="text-xl font-semibold mb-3 text-white">Sales Background</h3>
                <p className="text-gray-300">
                  One year of sales experience that taught me to understand customer needs and communicate complex
                  solutions effectively.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-6 text-center">
                <Trophy className="mx-auto mb-4 text-yellow-400" size={48} />
                <h3 className="text-xl font-semibold mb-3 text-white">Professional Athlete</h3>
                <p className="text-gray-300">
                  Former professional badminton player with experience in high-pressure competition and continuous
                  improvement.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              My unique journey from professional sports to sales to software engineering has given me a distinctive
              perspective on problem-solving, teamwork, and perseverance. I bring the discipline of an athlete, the
              communication skills of a salesperson, and the technical expertise of an engineer to every project I work
              on.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
