"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white">
            Lara Garg
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-gray-300 hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#experience" className="text-gray-300 hover:text-white transition-colors">
                Experience
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
