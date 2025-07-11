import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAssessment } from '../hooks/useAssessment';
import ProgressBar from '../components/UI/ProgressBar';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import step components
import CompanyProfileStep from '../components/Assessment/CompanyProfileStep';
import AIUsageStep from '../components/Assessment/AIUsageStep';
import PainPointsStep from '../components/Assessment/PainPointsStep';
import ObjectivesStep from '../components/Assessment/ObjectivesStep';

const Assessment: React.FC = () => {
  const navigate = useNavigate();
  const {
    currentStep,
    assessmentData,
    updateCompanyProfile,
    updateAIUsage,
    updatePainPoints,
    updateObjectives,
    nextStep,
    prevStep,
    isStepValid
  } = useAssessment();

  const handleNext = () => {
    if (currentStep === 4) {
      // Submit assessment and navigate to results
      navigate('/results');
    } else {
      nextStep();
    }
  };

  const handleSubmit = async () => {
    // Here you would typically send the data to your backend/API
    console.log('Assessment Data:', assessmentData);
    navigate('/results');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <CompanyProfileStep 
            data={assessmentData.companyProfile}
            onChange={updateCompanyProfile}
          />
        );
      case 2:
        return (
          <AIUsageStep 
            data={assessmentData.aiUsage}
            onChange={updateAIUsage}
          />
        );
      case 3:
        return (
          <PainPointsStep 
            data={assessmentData.painPoints}
            onChange={updatePainPoints}
          />
        );
      case 4:
        return (
          <ObjectivesStep 
            data={assessmentData.objectives}
            onChange={updateObjectives}
          />
        );
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Company Profile';
      case 2: return 'Current AI Usage';
      case 3: return 'Process Pain Points';
      case 4: return 'Optimization Objectives';
      default: return '';
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1: return 'Tell us about your company to personalize your optimization strategy';
      case 2: return 'Help us understand your current AI investments and challenges';
      case 3: return 'Identify your biggest operational bottlenecks and manual processes';
      case 4: return 'Define your goals and success metrics for AI optimization';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            AI Cost Optimization Assessment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This assessment will analyze your current AI usage and provide personalized 
            recommendations to optimize your costs and improve efficiency.
          </p>
        </div>

        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} totalSteps={4} className="mb-8" />

        {/* Main Content */}
        <Card className="mb-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Step {currentStep}: {getStepTitle()}
            </h2>
            <p className="text-gray-600">
              {getStepDescription()}
            </p>
          </div>
          
          {renderStep()}
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            icon={ArrowLeft}
            iconPosition="left"
          >
            Previous
          </Button>

          <div className="text-sm text-gray-500">
            Step {currentStep} of 4
          </div>

          {currentStep === 4 ? (
            <Button
              onClick={handleSubmit}
              disabled={!isStepValid(currentStep)}
              icon={ArrowRight}
              iconPosition="right"
            >
              Generate Results
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!isStepValid(currentStep)}
              icon={ArrowRight}
              iconPosition="right"
            >
              Next Step
            </Button>
          )}
        </div>

        {/* Help Text */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Your progress is automatically saved. You can return to complete this assessment later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assessment;