import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in discussing technology, career transitions, or sports. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">your.email@example.com</p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href="mailto:your.email@example.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Your City, Country</p>
                <p className="text-sm text-gray-400">Open to remote opportunities</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
