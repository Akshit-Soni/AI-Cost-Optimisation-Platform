import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star, Users, Building2, Crown } from 'lucide-react';
import { Button } from '../components/UI/Button';
import { Card, CardContent, CardHeader } from '../components/UI/Card';

export const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Free Assessment',
      price: '$0',
      period: 'one-time',
      description: 'Perfect for getting started with AI cost optimization',
      icon: Star,
      features: [
        'Complete AI cost analysis',
        'Personalized recommendations',
        'ROI projections',
        'Basic implementation roadmap',
        'PDF report download',
        'Email support'
      ],
      cta: 'Start Free Assessment',
      ctaLink: '/assessment',
      popular: false,
      color: 'blue'
    },
    {
      name: 'Professional',
      price: '$2,500',
      period: 'per month',
      description: 'For companies ready to implement optimization strategies',
      icon: Users,
      features: [
        'Everything in Free Assessment',
        'Monthly optimization reviews',
        'Custom implementation support',
        'Dedicated success manager',
        'Priority email & phone support',
        'Advanced analytics dashboard',
        'Quarterly business reviews',
        'Integration assistance'
      ],
      cta: 'Contact Sales',
      ctaLink: '/contact',
      popular: true,
      color: 'teal'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations with complex AI ecosystems',
      icon: Crown,
      features: [
        'Everything in Professional',
        'White-glove implementation',
        'Custom integrations & APIs',
        'On-site consultation visits',
        '24/7 dedicated support',
        'Multi-department rollouts',
        'Custom reporting & dashboards',
        'SLA guarantees',
        'Training & workshops'
      ],
      cta: 'Contact Sales',
      ctaLink: '/contact',
      popular: false,
      color: 'purple'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I see results?',
      answer: 'Most companies see immediate insights from our free assessment in under 5 minutes. Implementation of quick wins typically shows cost reductions within 30 days.'
    },
    {
      question: 'What types of AI tools do you support?',
      answer: 'We support optimization for all major AI platforms including OpenAI, Anthropic, Microsoft Copilot, Google AI, and custom AI solutions.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use bank-level encryption and are SOC 2 Type II certified. We never store your sensitive business data and follow strict GDPR compliance.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, our Professional plan is month-to-month with no long-term commitments. Enterprise contracts are customized based on your needs.'
    },
    {
      question: 'Do you offer implementation support?',
      answer: 'Yes, our Professional and Enterprise plans include dedicated implementation support to ensure successful deployment of recommendations.'
    },
    {
      question: 'What ROI can I expect?',
      answer: 'Our clients typically see 3-5x ROI within the first year, with average cost reductions of 30-60% on their AI spending.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Start with our free assessment, then scale with plans designed for every stage of your AI optimization journey
          </p>
          <div className="inline-flex items-center space-x-2 text-sm text-gray-600">
            <Check className="h-4 w-4 text-green-500" />
            <span>No hidden fees</span>
            <Check className="h-4 w-4 text-green-500" />
            <span>Cancel anytime</span>
            <Check className="h-4 w-4 text-green-500" />
            <span>Money-back guarantee</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'ring-2 ring-teal-500 shadow-lg' : ''}`}
                hover
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-teal-500 px-4 py-1 text-sm font-medium text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pt-8">
                  <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full mb-4 ${
                    plan.color === 'blue' ? 'bg-blue-100' :
                    plan.color === 'teal' ? 'bg-teal-100' : 'bg-purple-100'
                  }`}>
                    <plan.icon className={`h-8 w-8 ${
                      plan.color === 'blue' ? 'text-blue-600' :
                      plan.color === 'teal' ? 'text-teal-600' : 'text-purple-600'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period !== 'pricing' && (
                      <span className="text-gray-600 ml-2">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={plan.ctaLink} className="block">
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-teal-600 hover:bg-teal-700' : ''}`}
                      variant={plan.popular ? 'secondary' : 'primary'}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See Your Potential Savings
            </h2>
            <p className="text-xl text-gray-600">
              Calculate your estimated ROI with our interactive tool
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Current AI Spending
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monthly AI Tools</span>
                      <span className="font-semibold">$5,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Manual Process Costs</span>
                      <span className="font-semibold">$8,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Inefficiencies</span>
                      <span className="font-semibold">$3,000</span>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total Monthly Cost</span>
                      <span className="text-red-600">$16,000</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    After Optimization
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Optimized AI Tools</span>
                      <span className="font-semibold">$2,800</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Automated Processes</span>
                      <span className="font-semibold">$3,200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Eliminated Waste</span>
                      <span className="font-semibold">$0</span>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total Monthly Cost</span>
                      <span className="text-green-600">$6,000</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        $10,000 / month
                      </div>
                      <div className="text-sm text-green-700">
                        Estimated Monthly Savings
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/assessment">
                  <Button size="lg">
                    Get My Personalized Savings Report
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and services
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index} hover>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Ready to Start Optimizing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 500+ companies that have already optimized their AI costs. 
            Start with our free assessment today.
          </p>
          <Link to="/assessment">
            <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
              Start Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};