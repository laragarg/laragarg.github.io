import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Users, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function Hero() {
  const highlights = [
    {
      icon: Code,
      title: "Software Engineering",
      description:
        "Building enterprise solutions at ServiceNow with focus on platform development and system architecture.",
    },
    {
      icon: Users,
      title: "Sales Experience",
      description:
        "Developed strong communication and client relationship skills through professional sales experience.",
    },
    {
      icon: Trophy,
      title: "Professional Sports",
      description: "Competed at professional level in badminton, developing mental toughness and strategic thinking.",
    },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Hero Content */}
          <div className="text-center lg:text-left">
            <div className="w-56 h-56 mx-auto lg:mx-0 mb-8 rounded-full overflow-hidden">
              <Image
                src="/Lara.jpg"
                alt="Lara Garg"
                width={224}
                height={224}
                className="w-full h-[200%] object-cover object-center -translate-y-[25%]"
                priority
              />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent break-words">
              Lara Garg
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Welcome To My World
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link href="#recent-blogs">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  Read My Recent Blogs
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - About Me */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-center lg:text-left mt-0">About Me</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm a software engineer with a unique background spanning professional sports, sales, and technology. This
              diverse experience gives me a distinctive perspective on problem-solving, team collaboration, and
              performance optimization.
            </p>

            <div className="space-y-6">
              {highlights.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <Card key={index} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
