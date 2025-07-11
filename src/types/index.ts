export interface CompanyProfile {
  companyName: string;
  industry: string;
  companySize: string;
  annualRevenue: string;
  technicalTeamSize: string;
}

export interface AIUsage {
  monthlySpend: number;
  currentTools: string[];
  maturityLevel: string;
  biggestConcern: string;
}

export interface ProcessPainPoints {
  highestWorkloadDept: string;
  timeConsumingProcess: string;
  biggestBottleneck: string;
}

export interface Objectives {
  primaryGoal: string;
  targetTimeline: string;
  successMetric: string;
}

export interface AssessmentData {
  companyProfile: CompanyProfile;
  aiUsage: AIUsage;
  painPoints: ProcessPainPoints;
  objectives: Objectives;
}

export interface AnalysisResults {
  optimizationScore: number;
  monthlySavingsRange: [number, number];
  timeline: string;
  roiExpectation: number;
  quickWins: string[];
  strategicImprovements: string[];
  longTermOptimization: string[];
}