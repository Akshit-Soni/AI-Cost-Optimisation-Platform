import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Clock, Target, DollarSign, CheckCircle, ArrowRight, Download, ChevronDown, ChevronUp } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const Results: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Simulate API call to generate results
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Analyzing Your AI Ecosystem</h2>
          <p className="text-gray-600 mb-4">Our AI agents are processing your data to generate personalized recommendations...</p>
          <div className="bg-white rounded-lg p-4 max-w-md mx-auto">
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Analyzing current AI spend patterns</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Identifying optimization opportunities</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 border-2 border-primary-500 border-t-transparent rounded-full animate-spin mr-2"></div>
                <span>Generating custom recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Your AI Optimization Report
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Based on your assessment, we've identified significant opportunities to optimize your AI investments.
          </p>
        </div>

        {/* Analysis Summary */}
        <Card className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">8.5/10</div>
              <div className="text-sm font-medium text-gray-900 mb-1">Optimization Score</div>
              <div className="text-xs text-gray-500">High potential for savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$4,200 - $6,800</div>
              <div className="text-sm font-medium text-gray-900 mb-1">Monthly Savings</div>
              <div className="text-xs text-gray-500">38-52% cost reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">3-6 months</div>
              <div className="text-sm font-medium text-gray-900 mb-1">Implementation Timeline</div>
              <div className="text-xs text-gray-500">Full optimization deployment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">245%</div>
              <div className="text-sm font-medium text-gray-900 mb-1">First Year ROI</div>
              <div className="text-xs text-gray-500">Return on optimization investment</div>
            </div>
          </div>
        </Card>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Quick Wins */}
          <Card>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Quick Wins</h3>
                <p className="text-sm text-gray-500">0-30 days</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Switch to GPT-4 Turbo</div>
                  <div className="text-xs text-gray-500">Save $800/month on API calls</div>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Optimize prompt engineering</div>
                  <div className="text-xs text-gray-500">Reduce token usage by 25%</div>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Implement response caching</div>
                  <div className="text-xs text-gray-500">40% reduction in repeat queries</div>
                </div>
              </li>
            </ul>
          </Card>

          {/* Strategic Improvements */}
          <Card>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                <Target className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Strategic Improvements</h3>
                <p className="text-sm text-gray-500">30-90 days</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Department-specific automation</div>
                  <div className="text-xs text-gray-500">Focus on Sales operations</div>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Multi-model strategy</div>
                  <div className="text-xs text-gray-500">Use Claude for analysis, GPT for generation</div>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Workflow optimization</div>
                  <div className="text-xs text-gray-500">Automate report generation process</div>
                </div>
              </li>
            </ul>
          </Card>

          {/* Long-term Optimization */}
          <Card>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center mr-3">
                <TrendingUp className="w-5 h-5 text-secondary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Long-term Optimization</h3>
                <p className="text-sm text-gray-500">90+ days</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Enterprise AI architecture</div>
                  <div className="text-xs text-gray-500">Centralized AI governance platform</div>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Custom model fine-tuning</div>
                  <div className="text-xs text-gray-500">Industry-specific optimizations</div>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Advanced analytics</div>
                  <div className="text-xs text-gray-500">Predictive cost management</div>
                </div>
              </li>
            </ul>
          </Card>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6">
          {/* ROI Analysis */}
          <Card>
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('roi')}
            >
              <div className="flex items-center">
                <DollarSign className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">ROI Analysis & Cost Breakdown</h3>
              </div>
              {expandedSections.roi ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
            
            {expandedSections.roi && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Current vs. Optimized Costs</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Current Monthly Spend</span>
                        <span className="font-semibold">$13,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Optimized Monthly Spend</span>
                        <span className="font-semibold text-green-600">$7,800</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-semibold text-gray-900">Monthly Savings</span>
                        <span className="font-bold text-green-600">$5,400 (41%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-900">Annual Savings</span>
                        <span className="font-bold text-green-600">$64,800</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Implementation Investment</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Setup & Configuration</span>
                        <span>$8,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Training & Onboarding</span>
                        <span>$4,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Integration Costs</span>
                        <span>$3,800</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-semibold text-gray-900">Total Investment</span>
                        <span className="font-bold">$16,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-900">Payback Period</span>
                        <span className="font-bold text-primary-600">3.1 months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>

          {/* Implementation Roadmap */}
          <Card>
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('roadmap')}
            >
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Implementation Roadmap</h3>
              </div>
              {expandedSections.roadmap ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
            
            {expandedSections.roadmap && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 text-sm font-medium text-gray-500">Month 1</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">Quick Wins Implementation</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Switch to cost-effective API endpoints</li>
                        <li>• Implement prompt optimization</li>
                        <li>• Set up response caching system</li>
                        <li>• Configure usage monitoring</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 text-sm font-medium text-gray-500">Month 2-3</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">Strategic Optimization</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Deploy multi-model strategy</li>
                        <li>• Automate department workflows</li>
                        <li>• Implement advanced monitoring</li>
                        <li>• Train team on new processes</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 text-sm font-medium text-gray-500">Month 4-6</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">Long-term Architecture</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Build enterprise AI governance</li>
                        <li>• Develop custom optimizations</li>
                        <li>• Implement predictive analytics</li>
                        <li>• Establish continuous improvement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button size="lg" icon={Download} iconPosition="left">
            Download Full Report
          </Button>
          <Button variant="outline" size="lg">
            Schedule Consultation
          </Button>
          <Link to="/assessment">
            <Button variant="ghost" size="lg" icon={ArrowRight} iconPosition="right">
              Retake Assessment
            </Button>
          </Link>
        </div>

        {/* Next Steps */}
        <Card className="mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Our team of AI optimization experts can help you implement these recommendations 
              and achieve the projected savings within your target timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Book Implementation Call
              </Button>
              <Button variant="outline" size="lg">
                Explore Pricing Options
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Results;