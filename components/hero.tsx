import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Software Engineer
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          ServiceNow Developer • Former Sales Professional • Ex-Badminton Player
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Bridging the gap between technical excellence and business understanding, with the discipline and competitive
          spirit learned from professional sports.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
          >
            Read My Blog
          </Button>
        </div>
        <div className="animate-bounce">
          <ArrowDown className="mx-auto h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  )
}
