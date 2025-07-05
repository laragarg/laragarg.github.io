import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities, collaborations, or just having a chat about technology, sports, or
          career transitions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
            <CardContent className="p-6 text-center">
              <Mail className="mx-auto h-8 w-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">your.email@example.com</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
            <CardContent className="p-6 text-center">
              <Github className="mx-auto h-8 w-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">@yourusername</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
            <CardContent className="p-6 text-center">
              <Linkedin className="mx-auto h-8 w-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">@yourprofile</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
            <CardContent className="p-6 text-center">
              <MapPin className="mx-auto h-8 w-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-400 text-sm">Your City, Country</p>
            </CardContent>
          </Card>
        </div>

        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Mail className="mr-2 h-5 w-5" />
          Send Message
        </Button>
      </div>
    </section>
  )
}
