import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/placeholder-user.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-gray-700"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Lara Garg
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Software Engineer at ServiceNow | Former Sales Professional | Professional Badminton Player
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Bridging the gap between technical excellence and business understanding, with the discipline and
            competitive spirit of professional sports.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-200">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
            <Github className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
            <Linkedin className="mr-2 h-5 w-5" />
            Connect
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  )
}
