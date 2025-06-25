import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Target, MapPin, CheckCircle2, Users, Building2 } from 'lucide-react';
import { Button } from '../components/UI/Button';
import { Card, CardContent } from '../components/UI/Card';

export const HomePage: React.FC = () => {
  const benefits = [
    {
      icon: BarChart3,
      title: 'Instant ROI Analysis',
      description: 'Get immediate cost-benefit calculations and identify optimization opportunities within minutes.'
    },
    {
      icon: Target,
      title: 'Custom Recommendations',
      description: 'Industry-specific optimization strategies tailored to your company size and AI usage patterns.'
    },
    {
      icon: MapPin,
      title: 'Implementation Roadmaps',
      description: 'Step-by-step action plans with timelines, priorities, and measurable success metrics.'
    }
  ];

  const companyLogos = [
    { name: 'TechCorp', width: 120 },
    { name: 'InnovateLabs', width: 140 },
    { name: 'DataSystems', width: 130 },
    { name: 'AIVentures', width: 110 },
    { name: 'CloudScale', width: 125 }
  ];

  const stats = [
    { value: '500+', label: 'Companies Optimized' },
    { value: '45%', label: 'Average Cost Reduction' },
    { value: '$2.8M', label: 'Total Savings Generated' },
    { value: '3.2x', label: 'Average ROI Improvement' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                <span className="block">Optimize Your</span>
                <span className="block text-blue-600">AI Costs with</span>
                <span className="block">Intelligent Automation</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Get personalized AI cost optimization strategies in minutes. 
                Reduce spending by 30-60% while improving efficiency through 
                our intelligent analysis platform.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/assessment">
                  <Button size="lg" className="w-full sm:w-auto group">
                    Start Free Assessment
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl bg-white p-8 shadow-xl border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">AI Cost Analysis</h3>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Live Demo
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Current Monthly Spend</span>
                      <span className="font-semibold text-gray-900">$8,400</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Optimized Spend</span>
                      <span className="font-semibold text-green-600">$4,200</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-1/2"></div>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span className="text-gray-900">Monthly Savings</span>
                      <span className="text-green-600">$4,200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose AI CostOptimizer?
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines advanced AI analysis with industry expertise to deliver 
              actionable insights that transform your AI investment strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card key={index} hover className="text-center">
                <CardContent className="pt-8">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Proven Results
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Join hundreds of companies that have optimized their AI investments
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg font-medium text-gray-900 mb-8">
              Trusted by 500+ companies worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {companyLogos.map((logo, index) => (
                <div 
                  key={index} 
                  className="bg-gray-200 rounded px-6 py-3 text-gray-600 font-semibold"
                  style={{ width: logo.width }}
                >
                  {logo.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Ready to Optimize Your AI Costs?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get your personalized AI cost optimization report in just 5 minutes. 
            No commitment required.
          </p>
          <Link to="/assessment">
            <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
              Start Your Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};