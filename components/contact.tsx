import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in discussing new opportunities, collaborations, or just having a chat about
            technology and sports.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">lara.garg@example.com</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Github className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
                <p className="text-gray-300">@laragarg</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Linkedin className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                <p className="text-gray-300">Lara Garg</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
