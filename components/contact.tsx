import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in discussing new opportunities, sharing experiences, or connecting with fellow
            professionals from any of my backgrounds.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-6 text-center">
                <Mail className="mx-auto mb-4 text-blue-400" size={32} />
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto" asChild>
                  <a href="mailto:lara@example.com">lara@example.com</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-6 text-center">
                <Linkedin className="mx-auto mb-4 text-blue-400" size={32} />
                <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
                <Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto" asChild>
                  <a href="https://linkedin.com/in/laragarg" target="_blank" rel="noopener noreferrer">
                    Connect with me
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-6 text-center">
                <Github className="mx-auto mb-4 text-blue-400" size={32} />
                <h3 className="font-semibold text-white mb-2">GitHub</h3>
                <Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto" asChild>
                  <a href="https://github.com/laragarg" target="_blank" rel="noopener noreferrer">
                    View my code
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-6 text-center">
                <MapPin className="mx-auto mb-4 text-blue-400" size={32} />
                <h3 className="font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-300">Available for remote work</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">Open to Opportunities</h3>
            <p className="text-gray-300 mb-6">
              Whether you're looking for a software engineer with a unique background, want to discuss career
              transitions, or simply connect with someone who shares your interests in technology or sports, I'd love to
              hear from you.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="mailto:lara@example.com">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
