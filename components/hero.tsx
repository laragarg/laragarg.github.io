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
    <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="mx-auto lg:mx-0 mb-8 max-w-xs">
              <Image
                src="/Lara.jpg"
                alt="Lara Garg"
                width={400}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            <div className="w-full max-w-xs mx-auto lg:mx-0">
              <Link href="#recent-blogs" className="block">
                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  Jump To My Recent Blogs
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - About Me */}
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-xl">
              <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed text-center">
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
      </div>
    </section>
  )
}
