import React from 'react';
import { Card, CardContent } from '../components/UI/Card';
import { Brain, Shield, Users, Zap, Award, Clock } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced algorithms analyze your AI usage patterns and identify optimization opportunities across your entire tech stack.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols ensure your sensitive business data remains protected throughout the analysis.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team combines AI researchers, enterprise consultants, and industry specialists with 50+ years of collective experience.'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Get actionable recommendations in minutes, not weeks. Our streamlined process delivers immediate value and quick wins.'
    }
  ];

  const stats = [
    { icon: Award, value: '500+', label: 'Companies Served' },
    { icon: Clock, value: '45%', label: 'Average Cost Reduction' },
    { icon: Users, value: '50+', label: 'Expert Team Members' },
    { icon: Zap, value: '3.2x', label: 'ROI Improvement' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              About AI CostOptimizer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to help enterprises maximize their AI investments through 
              intelligent analysis, personalized recommendations, and proven optimization strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As AI adoption accelerates across enterprises, many organizations find themselves 
                overspending on tools, underutilizing capabilities, and struggling to measure ROI. 
                We believe every company deserves to maximize their AI investment without the complexity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our platform combines cutting-edge analysis with human expertise to deliver 
                personalized optimization strategies that reduce costs by 30-60% while 
                improving operational efficiency.
              </p>
            </div>
            <div className="relative">
              <Card className="p-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$2.8M+</div>
                  <div className="text-gray-600 mb-4">Total savings generated for our clients</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                  </div>
                  <div className="text-sm text-gray-500">Helping companies optimize since 2023</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine advanced technology with human expertise to deliver 
              unparalleled AI cost optimization results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <Card key={index} hover>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600">
              Proven results across hundreds of enterprise clients
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
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

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Industry experts with deep AI and enterprise consulting experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: 'Sarah Chen',
                role: 'CEO & Co-Founder',
                background: 'Former AI Strategy Lead at Google Cloud',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
              },
              {
                name: 'Michael Rodriguez',
                role: 'CTO & Co-Founder',
                background: 'Ex-Principal Engineer at Microsoft AI',
                image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
              },
              {
                name: 'Dr. Emily Watson',
                role: 'Head of AI Research',
                background: 'PhD in Machine Learning, Stanford',
                image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
              }
            ].map((member, index) => (
              <Card key={index} hover>
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.background}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technology & Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on enterprise-grade infrastructure with industry-leading security standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Data Privacy',
                description: 'GDPR compliant with end-to-end encryption and zero data retention policy'
              },
              {
                title: 'Cloud Infrastructure',
                description: 'Built on AWS with 99.9% uptime SLA and global CDN for optimal performance'
              },
              {
                title: 'AI Models',
                description: 'Proprietary algorithms trained on 10M+ data points from enterprise AI usage'
              },
              {
                title: 'Integration Ready',
                description: 'APIs and webhooks for seamless integration with existing enterprise systems'
              },
              {
                title: 'Real-time Analytics',
                description: 'Live monitoring and alerts to track optimization progress and ROI'
              },
              {
                title: 'Compliance',
                description: 'SOC 2 Type II certified with regular third-party security audits'
              }
            ].map((item, index) => (
              <Card key={index} hover>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};