import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Assessment',
      price: 'Free',
      description: 'Perfect for initial cost analysis and optimization opportunities',
      features: [
        'Comprehensive AI cost assessment',
        'Personalized optimization report',
        'ROI calculations and projections',
        'Implementation roadmap',
        'Email support',
        'Basic recommendations'
      ],
      cta: 'Start Free Assessment',
      popular: false,
      ctaVariant: 'outline' as const
    },
    {
      name: 'Professional',
      price: '$2,500',
      period: '/month',
      description: 'For growing companies ready to implement optimization strategies',
      features: [
        'Everything in Assessment',
        'Monthly optimization reviews',
        'Advanced cost monitoring',
        'Custom implementation support',
        'Priority phone & email support',
        'Integration assistance',
        'Quarterly strategy sessions',
        'Performance tracking dashboard'
      ],
      cta: 'Start Professional',
      popular: true,
      ctaVariant: 'primary' as const
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex AI infrastructure',
      features: [
        'Everything in Professional',
        'Dedicated success manager',
        '24/7 priority support',
        'Custom optimization algorithms',
        'Advanced security & compliance',
        'Multi-department coordination',
        'Executive reporting',
        'On-site implementation support',
        'SLA guarantees'
      ],
      cta: 'Contact Sales',
      popular: false,
      ctaVariant: 'secondary' as const
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose the plan that fits your organization's AI optimization needs. 
            All plans include our industry-leading cost reduction guarantees.
          </p>
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-sm">
            <Star className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">
              Average 45% cost reduction in first 6 months
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`relative ${plan.popular ? 'ring-2 ring-primary-500 shadow-xl scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.ctaVariant}
                  size="lg" 
                  className="w-full"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Guarantee */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ROI Guarantee
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're so confident in our optimization results that we guarantee measurable ROI 
            within 90 days or your money back.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">30-60%</div>
              <div className="text-gray-600">Average cost reduction</div>
            </Card>
            <Card className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">90 days</div>
              <div className="text-gray-600">ROI guarantee period</div>
            </Card>
            <Card className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">24/7</div>
              <div className="text-gray-600">Monitoring & support</div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How quickly will I see cost savings?
              </h3>
              <p className="text-gray-600">
                Most clients see initial savings within 30 days of implementing our quick-win 
                recommendations. Full optimization typically delivers maximum savings within 90 days.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if I don't achieve the projected savings?
              </h3>
              <p className="text-gray-600">
                We guarantee measurable ROI within 90 days. If you don't achieve at least 20% cost 
                reduction, we'll refund your Professional plan fees or provide additional optimization 
                services at no charge.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you work with all AI platforms?
              </h3>
              <p className="text-gray-600">
                Yes, we optimize costs across all major AI platforms including OpenAI, Anthropic, 
                Google Cloud AI, Microsoft Azure AI, and custom solutions. Our platform provides 
                unified monitoring and optimization regardless of your AI stack.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a long-term contract required?
              </h3>
              <p className="text-gray-600">
                No long-term contracts required. Professional plans are month-to-month, and you can 
                cancel anytime. Enterprise plans typically include annual agreements with 
                significant discounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Saving?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join hundreds of companies who have optimized their AI costs with our platform. 
            Start with a free assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary-600 hover:bg-gray-50"
            >
              Start Free Assessment
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;