import React from 'react';
import { Brain, Users, Shield, Award, CheckCircle, TrendingUp } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About OptimizeAI
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to help enterprises maximize the value of their AI investments 
              through intelligent cost optimization and strategic guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                As AI adoption accelerates across enterprises, organizations are struggling with 
                spiraling costs, tool sprawl, and unclear ROI. We built OptimizeAI to solve this 
                challenge with data-driven insights and actionable recommendations.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our platform leverages advanced analytics and industry expertise to help companies 
                reduce AI spending by 30-60% while improving efficiency and performance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Reduce AI costs without sacrificing performance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Provide clear ROI visibility and tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Enable smarter AI investment decisions</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">500+</h3>
                <p className="text-gray-600">Companies optimized</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge AI technology with deep industry expertise to deliver 
              measurable results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data-Driven Analysis</h3>
              <p className="text-gray-600">
                Our platform analyzes your entire AI ecosystem, usage patterns, and costs to 
                identify optimization opportunities with precision.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Guidance</h3>
              <p className="text-gray-600">
                Our team of AI optimization specialists provides personalized recommendations 
                tailored to your industry and business objectives.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600">
                All optimizations maintain the highest security standards and compliance 
                requirements for enterprise environments.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Platform */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Powered by Lyzr Studio</h3>
                <p className="text-gray-300 mb-6">
                  Our optimization engine is built on Lyzr Studio's multi-agent AI system, 
                  providing sophisticated analysis and recommendations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-sm">Real-time cost monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-sm">Multi-vendor optimization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-sm">Predictive analytics</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Advanced Technology Platform
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our platform leverages state-of-the-art AI agents to continuously monitor, 
                analyze, and optimize your AI infrastructure for maximum efficiency.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="text-center p-4 bg-secondary-50 rounded-lg">
                  <div className="text-2xl font-bold text-secondary-600">< 5min</div>
                  <div className="text-sm text-gray-600">Analysis Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team combines decades of experience in AI, enterprise software, and cost optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">SK</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sarah Kim</h3>
              <p className="text-primary-600 text-sm font-medium mb-3">CEO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                Former VP of AI Strategy at Microsoft. 15+ years optimizing enterprise AI deployments.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">MC</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marcus Chen</h3>
              <p className="text-secondary-600 text-sm font-medium mb-3">CTO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                Ex-Google AI researcher. PhD in Machine Learning. Expert in AI cost optimization algorithms.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">LP</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lisa Park</h3>
              <p className="text-accent-600 text-sm font-medium mb-3">VP of Customer Success</p>
              <p className="text-gray-600 text-sm">
                Former McKinsey consultant. 12+ years helping enterprises optimize technology investments.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Recognition & Awards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Innovation Award 2024</h3>
                <p className="text-gray-600 text-sm text-center">
                  Recognized for breakthrough AI cost optimization technology
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Enterprise AI Leader</h3>
                <p className="text-gray-600 text-sm text-center">
                  Named top AI cost optimization platform by Gartner
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Best ROI Platform</h3>
                <p className="text-gray-600 text-sm text-center">
                  Highest customer satisfaction in AI optimization category
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your AI Costs?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join hundreds of companies who trust OptimizeAI to maximize their AI investments.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary-600 hover:bg-gray-50"
          >
            Start Your Assessment
          </Button>
        </div>
      </section>
    </div>
  )
  );
};

export default About;