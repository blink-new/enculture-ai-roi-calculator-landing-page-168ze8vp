import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Slider } from './components/ui/slider'
import { Calculator, TrendingUp, Users, DollarSign, BarChart3, CheckCircle, ArrowRight, Menu, X } from 'lucide-react'

function App() {
  const [employees, setEmployees] = useState([100])
  const [avgSalary, setAvgSalary] = useState([75000])
  const [turnoverRate, setTurnoverRate] = useState([15])
  const [engagementImprovement, setEngagementImprovement] = useState([20])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // ROI Calculations
  const currentTurnoverCost = employees[0] * (turnoverRate[0] / 100) * (avgSalary[0] * 0.75) // 75% of salary as replacement cost
  const improvedTurnoverRate = turnoverRate[0] * (1 - engagementImprovement[0] / 100)
  const newTurnoverCost = employees[0] * (improvedTurnoverRate / 100) * (avgSalary[0] * 0.75)
  const annualSavings = currentTurnoverCost - newTurnoverCost
  const productivityGains = employees[0] * avgSalary[0] * (engagementImprovement[0] / 100) * 0.1 // 10% productivity correlation
  const totalROI = annualSavings + productivityGains

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-black">Enculture</div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Science</a>
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Pricing</a>
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">About us</a>
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact us</a>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Book a demo</Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-900 hover:text-blue-600"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">Science</a>
              <a href="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">Pricing</a>
              <a href="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">About us</a>
              <a href="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">Contact us</a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-4">Book a demo</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Calculate the ROI of
              <br />
              <span className="text-blue-600">Culture Transformation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how much your organization can save and gain by building a culture that drives results. 
              Get instant insights into turnover reduction, productivity gains, and measurable business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Your ROI
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-900 px-8 py-4 text-lg">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Interactive ROI Calculator
            </h2>
            <p className="text-lg text-gray-600">
              Adjust the parameters below to see your potential return on investment
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Calculator Inputs */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-black">Your Organization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <Label className="text-base font-medium text-gray-900">Number of Employees</Label>
                  <div className="mt-4">
                    <Slider
                      value={employees}
                      onValueChange={setEmployees}
                      max={5000}
                      min={10}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>10</span>
                      <span className="font-medium text-black">{employees[0]} employees</span>
                      <span>5,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium text-gray-900">Average Annual Salary</Label>
                  <div className="mt-4">
                    <Slider
                      value={avgSalary}
                      onValueChange={setAvgSalary}
                      max={200000}
                      min={30000}
                      step={5000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>$30K</span>
                      <span className="font-medium text-black">${avgSalary[0].toLocaleString()}</span>
                      <span>$200K</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium text-gray-900">Current Turnover Rate</Label>
                  <div className="mt-4">
                    <Slider
                      value={turnoverRate}
                      onValueChange={setTurnoverRate}
                      max={50}
                      min={5}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>5%</span>
                      <span className="font-medium text-black">{turnoverRate[0]}%</span>
                      <span>50%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium text-gray-900">Expected Engagement Improvement</Label>
                  <div className="mt-4">
                    <Slider
                      value={engagementImprovement}
                      onValueChange={setEngagementImprovement}
                      max={50}
                      min={5}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>5%</span>
                      <span className="font-medium text-black">{engagementImprovement[0]}%</span>
                      <span>50%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              <Card className="p-6 bg-blue-50 border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-black">Total Annual ROI</h3>
                    <p className="text-3xl font-bold text-blue-600">${totalROI.toLocaleString()}</p>
                  </div>
                  <TrendingUp className="h-12 w-12 text-blue-600" />
                </div>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-600">Turnover Savings</h4>
                      <p className="text-2xl font-bold text-green-600">${annualSavings.toLocaleString()}</p>
                    </div>
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-600">Productivity Gains</h4>
                      <p className="text-2xl font-bold text-purple-600">${productivityGains.toLocaleString()}</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-gray-50">
                <h4 className="font-semibold text-black mb-4">Key Improvements</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Turnover reduced from {turnoverRate[0]}% to {improvedTurnoverRate.toFixed(1)}%</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{engagementImprovement[0]}% improvement in employee engagement</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Enhanced productivity and performance</span>
                  </div>
                </div>
              </Card>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg">
                Get Detailed ROI Report
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Culture ROI Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your culture is either driving growth or dragging you down. Measure and improve it with data-driven insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-4">Reduce Turnover Costs</h3>
              <p className="text-gray-600">
                Every employee who leaves costs 75% of their annual salary to replace. 
                Improve culture to retain top talent and save significantly.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-4">Boost Productivity</h3>
              <p className="text-gray-600">
                Engaged employees are 23% more productive. Transform your culture 
                to unlock hidden potential and drive measurable results.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-4">Data-Driven Decisions</h3>
              <p className="text-gray-600">
                Make culture transformation measurable with advanced analytics, 
                sentiment tracking, and actionable insights for leadership.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Culture?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a personalized culture assessment and discover your organization's 
            potential for growth and improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Get Culture Health Check-up
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-black mb-4">Enculture</div>
              <p className="text-gray-600">
                Experience Enculture and unlock your organisation's true potential
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Science</a></li>
                <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-600">ROI Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">About us</a></li>
                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>Copyright ©2025 Enculture.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App