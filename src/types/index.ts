export interface AssessmentData {
  // Step 1: Company Profile
  companyName: string;
  industry: string;
  companySize: string;
  annualRevenue: string;
  technicalTeamSize: string;
  
  // Step 2: Current AI Usage
  monthlyAiSpend: number;
  currentAiTools: string[];
  aiMaturityLevel: string;
  biggestAiCostConcern: string;
  
  // Step 3: Process Pain Points
  departmentWithHighestWorkload: string;
  mostTimeConsumingProcess: string;
  biggestOperationalBottleneck: string;
  
  // Step 4: Objectives
  primaryGoal: string;
  targetTimeline: string;
  successMetricPriority: string;
}

// Structured data format for analysis results
export interface AIOptimizationAnalysis {
  optimization_score: number; // 1-10
  monthly_savings_min: number; // USD
  monthly_savings_max: number; // USD
  implementation_timeline: "1 month" | "3 months" | "6 months" | "12 months";
  roi_percentage: number; // First year ROI percentage
  quick_wins: string[]; // Max 3 items, 0-30 days
  strategic_improvements: string[]; // Max 3 items, 30-90 days
  long_term_optimization: string[]; // Max 3 items, 90+ days
}

// Legacy interface for UI display (maps to structured format)
export interface AnalysisResult {
  optimizationScore: number;
  estimatedMonthlySavings: {
    min: number;
    max: number;
  };
  implementationTimeline: string;
  roiExpectation: number;
  quickWins: string[];
  strategicImprovements: string[];
  longTermOptimization: string[];
}

export interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}

// Data validation and sanitization utilities
export interface DataValidationResult {
  isValid: boolean;
  errors: string[];
  sanitizedData?: AIOptimizationAnalysis;
}