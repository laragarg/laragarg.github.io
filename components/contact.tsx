import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities, collaborations, or just having a conversation about technology,
          sports, or career transitions. Feel free to reach out!
        </p>

        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Let's Connect</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:your.email@example.com"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    your.email@example.com
                  </a>
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 mr-3" />
                    LinkedIn Profile
                  </a>
                  <a
                    href="https://github.com/yourusername"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-3" />
                    GitHub Profile
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Quick Message</h3>
                <Button className="w-full bg-white text-gray-900 hover:bg-gray-200">Send Email</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center space-x-6">
          <a
            href="https://twitter.com/yourhandle"
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/yourusername"
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
