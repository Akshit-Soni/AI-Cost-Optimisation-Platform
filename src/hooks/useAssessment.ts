import { useState } from 'react';
import { AssessmentData, AnalysisResult } from '../types';
import { AnalysisService } from '../services/analysisService';

const initialAssessmentData: AssessmentData = {
  companyName: '',
  industry: '',
  companySize: '',
  annualRevenue: '',
  technicalTeamSize: '',
  monthlyAiSpend: 0,
  currentAiTools: [],
  aiMaturityLevel: '',
  biggestAiCostConcern: '',
  departmentWithHighestWorkload: '',
  mostTimeConsumingProcess: '',
  biggestOperationalBottleneck: '',
  primaryGoal: '',
  targetTimeline: '',
  successMetricPriority: ''
};

export const useAssessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>(initialAssessmentData);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const updateAssessmentData = (data: Partial<AssessmentData>) => {
    setAssessmentData(prev => ({ ...prev, ...data }));
  };

  const generateResults = async (): Promise<AnalysisResult> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Use the AnalysisService to generate and validate results
      const analysisResults = await AnalysisService.generateAnalysis(assessmentData);
      
      setResults(analysisResults);
      setIsLoading(false);
      
      return analysisResults;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to generate analysis';
      setError(errorMessage);
      setIsLoading(false);
      throw error;
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetAssessment = () => {
    setCurrentStep(1);
    setAssessmentData(initialAssessmentData);
    setResults(null);
    setIsLoading(false);
    setError(null);
  };

  return {
    currentStep,
    assessmentData,
    updateAssessmentData,
    nextStep,
    prevStep,
    generateResults,
    resetAssessment,
    isLoading,
    results,
    error
  };
};