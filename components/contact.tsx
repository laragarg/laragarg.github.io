import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl text-gray-300 mb-12">
          I'm always interested in new opportunities and interesting conversations. 
          Let's connect and discuss how we can work together.
        </p>
        
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Let's Connect</h3>
                <p className="text-gray-300 mb-6">
                  Whether you want to discuss technology, share experiences, or explore collaboration opportunities.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Follow Me</h3>
                <div className="flex justify-center md:justify-start space-x-4">
                  <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <p className="text-gray-400">
          © 2024 Lara Garg. Built with Next.js and deployed on GitHub Pages.
        </p>
      </div>
    </section>
  )
}
