import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export function Contact() {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:laragarg13@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/laragarg/",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/laragarg/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/lara_not_brian",
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

        <div className="flex justify-center items-center gap-8">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label={link.name}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
