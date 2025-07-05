import { Card, CardContent } from "@/components/ui/card"
import { Code, TrendingUp, Trophy } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Code className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Software Engineer</h3>
              <p className="text-gray-400">
                Building scalable solutions on the ServiceNow platform with a year of hands-on experience
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sales Background</h3>
              <p className="text-gray-400">
                Understanding client needs and translating business requirements into technical solutions
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Former Athlete</h3>
              <p className="text-gray-400">
                Professional badminton player bringing discipline, strategy, and competitive excellence
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-300 leading-relaxed">
            My unique journey combines technical expertise, business acumen, and athletic discipline. This diverse
            background allows me to approach software engineering with a holistic perspective, understanding both the
            technical challenges and business impact of every solution I build.
          </p>
        </div>
      </div>
    </section>
  )
}
