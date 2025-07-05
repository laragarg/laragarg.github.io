import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always interested in discussing new opportunities, sharing insights about the intersection of sports,
          sales, and software engineering, or just having a great conversation.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <Mail className="h-8 w-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
              <p className="text-gray-300 mb-4">Drop me a line anytime</p>
              <Button className="bg-blue-600 hover:bg-blue-700">Send Email</Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-green-400" />
              <h3 className="text-lg font-semibold mb-2 text-white">Location</h3>
              <p className="text-gray-300 mb-4">Open to remote opportunities</p>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700 bg-transparent">
                View Resume
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center space-x-6">
          <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-700 bg-transparent">
            <Linkedin className="h-5 w-5 mr-2" />
            LinkedIn
          </Button>
          <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-700 bg-transparent">
            <Github className="h-5 w-5 mr-2" />
            GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
