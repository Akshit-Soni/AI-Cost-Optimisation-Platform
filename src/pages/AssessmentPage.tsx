import React from 'react';
import { useAssessment } from '../hooks/useAssessment';
import { ProgressBar } from '../components/UI/ProgressBar';
import { CompanyProfileStep } from '../components/Assessment/CompanyProfileStep';
import { AIUsageStep } from '../components/Assessment/AIUsageStep';
import { ProcessPainPointsStep } from '../components/Assessment/ProcessPainPointsStep';
import { ObjectivesStep } from '../components/Assessment/ObjectivesStep';
import { ResultsDashboard } from '../components/Assessment/ResultsDashboard';
import { LoadingSpinner } from '../components/UI/LoadingSpinner';

export const AssessmentPage: React.FC = () => {
  const {
    currentStep,
    assessmentData,
    updateAssessmentData,
    nextStep,
    prevStep,
    generateResults,
    resetAssessment,
    isLoading,
    results
  } = useAssessment();

  if (results) {
    return <ResultsDashboard results={results} onRestart={resetAssessment} />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" className="mx-auto mb-6" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Analyzing Your AI Investment
          </h2>
          <p className="text-gray-600 max-w-md">
            Our AI is processing your information to generate personalized optimization recommendations. 
            This typically takes 30-60 seconds.
          </p>
        </div>
      </div>
    );
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <CompanyProfileStep
            data={assessmentData}
            onUpdate={updateAssessmentData}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <AIUsageStep
            data={assessmentData}
            onUpdate={updateAssessmentData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <ProcessPainPointsStep
            data={assessmentData}
            onUpdate={updateAssessmentData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 4:
        return (
          <ObjectivesStep
            data={assessmentData}
            onUpdate={updateAssessmentData}
            onComplete={generateResults}
            onPrev={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            AI Cost Optimization Assessment
          </h1>
          <p className="text-lg text-gray-600">
            Help us understand your current AI usage to generate personalized recommendations
          </p>
        </div>

        <div className="mb-8">
          <ProgressBar current={currentStep} total={4} />
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};