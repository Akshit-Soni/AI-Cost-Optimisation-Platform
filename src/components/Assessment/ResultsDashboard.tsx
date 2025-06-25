import React, { useState } from 'react';
import { AnalysisResult } from '../../types';
import { Button } from '../UI/Button';
import { Card, CardContent, CardHeader } from '../UI/Card';
import { 
  BarChart3, 
  Clock, 
  TrendingUp, 
  Target, 
  ChevronDown, 
  ChevronUp,
  Download,
  RefreshCw,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface ResultsDashboardProps {
  results: AnalysisResult;
  onRestart: () => void;
  error?: string | null;
}

export const ResultsDashboard: React.FC<ResultsDashboardProps> = ({
  results,
  onRestart,
  error
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  // Handle error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-sm border border-red-200 p-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-6">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Analysis Error
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {error}
            </p>
            <Button onClick={onRestart}>
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const recommendations = [
    {
      title: 'Quick Wins (0-30 days)',
      items: results.quickWins,
      color: 'green',
      icon: CheckCircle2
    },
    {
      title: 'Strategic Improvements (30-90 days)',
      items: results.strategicImprovements,
      color: 'blue',
      icon: Target
    },
    {
      title: 'Long-term Optimization (90+ days)',
      items: results.longTermOptimization,
      color: 'purple',
      icon: TrendingUp
    }
  ];

  const handleDownloadReport = () => {
    // Create a comprehensive report object
    const reportData = {
      generated_at: new Date().toISOString(),
      optimization_score: results.optimizationScore,
      monthly_savings: {
        min: results.estimatedMonthlySavings.min,
        max: results.estimatedMonthlySavings.max
      },
      implementation_timeline: results.implementationTimeline,
      roi_percentage: results.roiExpectation,
      recommendations: {
        quick_wins: results.quickWins,
        strategic_improvements: results.strategicImprovements,
        long_term_optimization: results.longTermOptimization
      }
    };

    // Create and download JSON file
    const dataStr = JSON.stringify(reportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `ai-optimization-report-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your AI Optimization Report
          </h1>
          <p className="text-xl text-gray-600">
            Personalized recommendations to optimize your AI investment
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {results.optimizationScore}/10
              </div>
              <div className="text-sm text-gray-600">
                Optimization Score
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                ${results.estimatedMonthlySavings.min.toLocaleString()} - ${results.estimatedMonthlySavings.max.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">
                Monthly Savings
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 mb-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {results.implementationTimeline}
              </div>
              <div className="text-sm text-gray-600">
                Implementation
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 mb-4">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {results.roiExpectation}%
              </div>
              <div className="text-sm text-gray-600">
                First Year ROI
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations */}
        <div className="grid grid-cols-1 gap-8 mb-12 lg:grid-cols-3">
          {recommendations.map((rec, index) => (
            <Card key={index} className="h-fit">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    rec.color === 'green' ? 'bg-green-100' :
                    rec.color === 'blue' ? 'bg-blue-100' : 'bg-purple-100'
                  }`}>
                    <rec.icon className={`h-4 w-4 ${
                      rec.color === 'green' ? 'text-green-600' :
                      rec.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                    }`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {rec.title}
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {rec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <div className={`mt-1.5 h-2 w-2 rounded-full ${
                        rec.color === 'green' ? 'bg-green-500' :
                        rec.color === 'blue' ? 'bg-blue-500' : 'bg-purple-500'
                      }`} />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Analysis */}
        <Card className="mb-8">
          <CardHeader>
            <button
              onClick={() => toggleSection('analysis')}
              className="flex w-full items-center justify-between text-left"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                Detailed ROI Analysis
              </h3>
              {expandedSections.includes('analysis') ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </CardHeader>
          {expandedSections.includes('analysis') && (
            <CardContent>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Current State Analysis</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• High tool sprawl increasing management overhead</li>
                    <li>• Underutilized premium features on current subscriptions</li>
                    <li>• Manual processes consuming 40+ hours per week</li>
                    <li>• Lack of usage monitoring leading to overage costs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Optimized State Benefits</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Consolidated tool stack reducing licensing costs</li>
                    <li>• Automated workflows saving 25+ hours per week</li>
                    <li>• Usage-based scaling preventing overage charges</li>
                    <li>• Performance monitoring ensuring ROI visibility</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Implementation Roadmap */}
        <Card className="mb-8">
          <CardHeader>
            <button
              onClick={() => toggleSection('roadmap')}
              className="flex w-full items-center justify-between text-left"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                Implementation Roadmap
              </h3>
              {expandedSections.includes('roadmap') ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </CardHeader>
          {expandedSections.includes('roadmap') && (
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <span className="text-sm font-semibold text-green-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Month 1: Quick Wins</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Implement tool consolidation and usage monitoring to achieve immediate 20-30% cost reduction
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-sm font-semibold text-blue-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Months 2-3: Process Automation</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Deploy automated workflows in high-impact areas to reduce manual workload
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                    <span className="text-sm font-semibold text-purple-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Months 4-6: Advanced Optimization</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Implement custom solutions and advanced analytics for long-term efficiency gains
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="group" onClick={handleDownloadReport}>
            <Download className="h-5 w-5 mr-2" />
            Download Full Report
          </Button>
          <Button variant="outline" size="lg" onClick={onRestart}>
            <RefreshCw className="h-5 w-5 mr-2" />
            Take Assessment Again
          </Button>
        </div>
      </div>
    </div>
  );
};