import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
        <p className="text-xl text-gray-300 mb-12">
          I'm always interested in discussing new opportunities, sharing insights about software engineering, or talking
          about the intersection of sports and technology.
        </p>

        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                <p className="text-gray-300 mb-6">
                  Whether you want to discuss a project, share ideas, or just say hello, I'd love to hear from you.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Follow My Journey</h3>
                <p className="text-gray-300 mb-6">
                  Stay updated with my latest projects, blog posts, and insights from my unique career path.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
