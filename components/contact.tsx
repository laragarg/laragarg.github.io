import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function Contact() {
  const contactLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:your.email@example.com",
      text: "your.email@example.com",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      text: "Connect on LinkedIn",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/laragarg",
      text: "View my code",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      href: "https://twitter.com/yourhandle",
      text: "Follow me",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm always interested in discussing technology, sharing experiences, or exploring new opportunities. Feel free
          to reach out!
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactLinks.map((link, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center text-gray-400">{link.icon}</div>
                <h3 className="font-semibold text-white mb-2">{link.label}</h3>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Open to Opportunities</h3>
          <p className="text-gray-300 mb-6">
            Whether you're looking to collaborate on a project, discuss technology trends, or explore career
            opportunities, I'd love to hear from you.
          </p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-200">
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
