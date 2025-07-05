import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Lara Garg
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Software Engineer at ServiceNow | Former Sales Professional | Professional Badminton Player
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Bridging the gap between technology and business through code, strategy, and athletic discipline.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
            Read My Blog
          </Button>
        </div>
        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  )
}
