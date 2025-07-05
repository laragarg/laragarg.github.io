import Link from "next/link"
import { Code, Home, FileText, User } from "lucide-react"

export function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
            <Code className="h-6 w-6" />
            <span className="font-bold text-xl">Your Name</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link href="/blog" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
              <FileText className="h-4 w-4" />
              <span>Blog</span>
            </Link>
            <Link
              href="#about"
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
            >
              <User className="h-4 w-4" />
              <span>About</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
