import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Experience</h2>

          <div className="space-y-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl">Software Engineer</CardTitle>
                    <p className="text-blue-400 font-medium">ServiceNow</p>
                  </div>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Current
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Developing enterprise applications on the ServiceNow platform, focusing on workflow automation and
                  system integrations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-600">JavaScript</Badge>
                  <Badge className="bg-blue-600">ServiceNow Platform</Badge>
                  <Badge className="bg-blue-600">REST APIs</Badge>
                  <Badge className="bg-blue-600">Workflow Design</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl">Sales Representative</CardTitle>
                    <p className="text-green-400 font-medium">Previous Role</p>
                  </div>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    1 Year
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Developed client relationships and technical solution presentations, gaining valuable insights into
                  user requirements and business processes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-600">Client Relations</Badge>
                  <Badge className="bg-green-600">Technical Presentations</Badge>
                  <Badge className="bg-green-600">Solution Design</Badge>
                  <Badge className="bg-green-600">Business Analysis</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl">Professional Badminton Player</CardTitle>
                    <p className="text-yellow-400 font-medium">Athletic Career</p>
                  </div>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Multiple Years
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Competed at professional level, developing mental resilience, strategic thinking, and performance
                  under pressure.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-yellow-600">Mental Resilience</Badge>
                  <Badge className="bg-yellow-600">Strategic Thinking</Badge>
                  <Badge className="bg-yellow-600">Performance Optimization</Badge>
                  <Badge className="bg-yellow-600">Team Collaboration</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
