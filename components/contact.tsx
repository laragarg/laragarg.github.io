import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export function Contact() {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:lara@example.com",
      label: "lara@example.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/laragarg",
      label: "linkedin.com/in/laragarg",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/laragarg",
      label: "github.com/laragarg",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/laragarg",
      label: "@laragarg",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always interested in connecting with fellow developers, discussing career transitions, or sharing insights
          about the intersection of sports and technology.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{link.name}</h3>
                  <Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto text-sm" asChild>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
