import { Card, CardContent } from '@/components/ui/card'
import { Code, TrendingUp, Trophy } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Code className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Software Engineer</h3>
              <p className="text-gray-300">
                Building scalable solutions at ServiceNow with a focus on platform development and user experience.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Sales Background</h3>
              <p className="text-gray-300">
                One year of sales experience that taught me the importance of understanding customer needs and business value.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Professional Athlete</h3>
              <p className="text-gray-300">
                Former professional badminton player with discipline, strategic thinking, and performance under pressure.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed">
            My unique journey from professional sports to sales to software engineering has given me a distinctive perspective 
            on problem-solving, teamwork, and delivering results. I bring the discipline of an athlete, the customer focus 
            of a salesperson, and the technical skills of an engineer to every project I work on.
          </p>
        </div>
      </div>
    </section>
  )
}
