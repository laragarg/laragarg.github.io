import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Software Engineer
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          ServiceNow Developer • Former Sales Professional • Ex-Professional Badminton Player
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Bridging the gap between technical excellence and business understanding, with the discipline and competitive
          spirit of a professional athlete.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-200">
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
            Read My Blog
          </Button>
        </div>
        <div className="mt-16">
          <ArrowDown className="w-6 h-6 mx-auto animate-bounce text-gray-400" />
        </div>
      </div>
    </section>
  )
}
