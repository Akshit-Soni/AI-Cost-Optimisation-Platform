import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, MapPin, CheckCircle, Building2, Zap, Shield } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Optimize Your AI Costs with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Intelligent Automation
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
              Get personalized AI cost optimization strategies in minutes. Reduce spending by 30-60% 
              while improving efficiency with our enterprise-grade platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link to="/assessment">
                <Button size="lg" icon={ArrowRight} iconPosition="right" className="w-full sm:w-auto">
                  Start Free Assessment
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ✓ No credit card required &nbsp;&nbsp; ✓ Results in 5 minutes &nbsp;&nbsp; ✓ Enterprise-ready
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Enterprises Choose OptimizeAI
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform delivers measurable results through intelligent analysis and actionable recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Instant ROI Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Get immediate cost-benefit calculations with detailed breakdowns of potential savings 
                and implementation costs across your AI stack.
              </p>
            </Card>

            <Card hover className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Recommendations</h3>
              <p className="text-gray-600 leading-relaxed">
                Industry-specific optimization strategies tailored to your company size, technical maturity, 
                and unique operational challenges.
              </p>
            </Card>

            <Card hover className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation Roadmaps</h3>
              <p className="text-gray-600 leading-relaxed">
                Step-by-step action plans with timelines, resource requirements, and risk assessments 
                to ensure successful optimization deployment.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg font-medium text-gray-900 mb-8">
              Trusted by 500+ companies worldwide
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="flex items-center justify-center">
                <Building2 className="w-12 h-12 text-gray-400" />
                <span className="ml-2 text-xl font-bold text-gray-400">TechCorp</span>
              </div>
              <div className="flex items-center justify-center">
                <Zap className="w-12 h-12 text-gray-400" />
                <span className="ml-2 text-xl font-bold text-gray-400">InnovateAI</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="w-12 h-12 text-gray-400" />
                <span className="ml-2 text-xl font-bold text-gray-400">SecureData</span>
              </div>
              <div className="flex items-center justify-center">
                <Building2 className="w-12 h-12 text-gray-400" />
                <span className="ml-2 text-xl font-bold text-gray-400">GlobalTech</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">47%</div>
              <p className="text-gray-600">Average cost reduction achieved by our clients</p>
            </Card>
            <Card className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">3.2x</div>
              <p className="text-gray-600">Average ROI improvement within 6 months</p>
            </Card>
            <Card className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">30 days</div>
              <p className="text-gray-600">Average time to implement first optimizations</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Enterprise-Grade AI Cost Intelligence
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform analyzes your entire AI ecosystem to identify optimization opportunities 
                that align with your business objectives and technical constraints.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Multi-vendor Analysis</h4>
                    <p className="text-gray-600">Compare costs across OpenAI, Anthropic, Google, and custom solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Usage Pattern Optimization</h4>
                    <p className="text-gray-600">Identify peak usage times and optimize resource allocation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Compliance & Security</h4>
                    <p className="text-gray-600">Ensure optimizations meet enterprise security requirements</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Sample Optimization Report</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Current Monthly Spend</span>
                    <span className="font-semibold">$8,400</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Optimized Spend</span>
                    <span className="font-semibold text-green-600">$5,200</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-2">
                    <span className="font-semibold text-gray-900">Monthly Savings</span>
                    <span className="font-bold text-green-600">$3,200 (38%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your AI Costs?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join hundreds of companies who have reduced their AI spending while improving performance. 
            Get your personalized optimization strategy in just 5 minutes.
          </p>
          <Link to="/assessment">
            <Button 
              size="lg" 
              variant="secondary" 
              icon={ArrowRight} 
              iconPosition="right"
              className="bg-white text-primary-600 hover:bg-gray-50"
            >
              Start Your Free Assessment
            </Button>
          </Link>
          <p className="text-primary-100 mt-4 text-sm">
            Free assessment • No credit card required • Instant results
          </p>
        </div>
      </section>
    </div>
  );
};

export default Landing;