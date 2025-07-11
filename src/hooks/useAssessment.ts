import { useState, useEffect } from 'react';
import { AssessmentData, CompanyProfile, AIUsage, ProcessPainPoints, Objectives } from '../types';

const initialCompanyProfile: CompanyProfile = {
  companyName: '',
  industry: '',
  companySize: '',
  annualRevenue: '',
  technicalTeamSize: ''
};

const initialAIUsage: AIUsage = {
  monthlySpend: 1000,
  currentTools: [],
  maturityLevel: '',
  biggestConcern: ''
};

const initialPainPoints: ProcessPainPoints = {
  highestWorkloadDept: '',
  timeConsumingProcess: '',
  biggestBottleneck: ''
};

const initialObjectives: Objectives = {
  primaryGoal: '',
  targetTimeline: '',
  successMetric: ''
};

export const useAssessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    companyProfile: initialCompanyProfile,
    aiUsage: initialAIUsage,
    painPoints: initialPainPoints,
    objectives: initialObjectives
  });

  // Load saved data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('assessmentData');
    const savedStep = localStorage.getItem('assessmentStep');
    
    if (savedData) {
      setAssessmentData(JSON.parse(savedData));
    }
    if (savedStep) {
      setCurrentStep(parseInt(savedStep));
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('assessmentData', JSON.stringify(assessmentData));
    localStorage.setItem('assessmentStep', currentStep.toString());
  }, [assessmentData, currentStep]);

  const updateCompanyProfile = (profile: Partial<CompanyProfile>) => {
    setAssessmentData(prev => ({
      ...prev,
      companyProfile: { ...prev.companyProfile, ...profile }
    }));
  };

  const updateAIUsage = (usage: Partial<AIUsage>) => {
    setAssessmentData(prev => ({
      ...prev,
      aiUsage: { ...prev.aiUsage, ...usage }
    }));
  };

  const updatePainPoints = (painPoints: Partial<ProcessPainPoints>) => {
    setAssessmentData(prev => ({
      ...prev,
      painPoints: { ...prev.painPoints, ...painPoints }
    }));
  };

  const updateObjectives = (objectives: Partial<Objectives>) => {
    setAssessmentData(prev => ({
      ...prev,
      objectives: { ...prev.objectives, ...objectives }
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const resetAssessment = () => {
    setCurrentStep(1);
    setAssessmentData({
      companyProfile: initialCompanyProfile,
      aiUsage: initialAIUsage,
      painPoints: initialPainPoints,
      objectives: initialObjectives
    });
    localStorage.removeItem('assessmentData');
    localStorage.removeItem('assessmentStep');
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(assessmentData.companyProfile.companyName && 
                 assessmentData.companyProfile.industry && 
                 assessmentData.companyProfile.companySize);
      case 2:
        return !!(assessmentData.aiUsage.maturityLevel && 
                 assessmentData.aiUsage.biggestConcern);
      case 3:
        return !!(assessmentData.painPoints.highestWorkloadDept);
      case 4:
        return !!(assessmentData.objectives.primaryGoal && 
                 assessmentData.objectives.targetTimeline);
      default:
        return false;
    }
  };

  return {
    currentStep,
    assessmentData,
    updateCompanyProfile,
    updateAIUsage,
    updatePainPoints,
    updateObjectives,
    nextStep,
    prevStep,
    resetAssessment,
    isStepValid
  };
};