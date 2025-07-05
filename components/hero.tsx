import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Software Engineer
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">
            ServiceNow Developer • Former Sales Professional • Ex-Professional Badminton Player
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Bridging the gap between technical excellence and business understanding, with the discipline and
            competitive spirit of professional sports.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <Button variant="outline" size="lg" className="border-gray-600 hover:border-white bg-transparent">
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
          <Button variant="outline" size="lg" className="border-gray-600 hover:border-white bg-transparent">
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="border-gray-600 hover:border-white bg-transparent">
            <Mail className="mr-2 h-5 w-5" />
            Contact
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="mx-auto h-8 w-8 text-gray-400" />
        </div>
      </div>
    </section>
  )
}
