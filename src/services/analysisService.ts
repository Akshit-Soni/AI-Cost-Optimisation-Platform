import { AssessmentData, AIOptimizationAnalysis, AnalysisResult } from '../types';
import { validateAndSanitizeAnalysis, convertToDisplayFormat, sanitizeText } from '../utils/dataValidation';

/**
 * Service for handling AI optimization analysis
 */
export class AnalysisService {
  /**
   * Generates mock analysis results based on assessment data
   * In production, this would call the Lyzr Studio API
   */
  static async generateAnalysis(assessmentData: AssessmentData): Promise<AnalysisResult> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Generate mock structured data based on assessment inputs
    const mockStructuredData = this.generateMockStructuredData(assessmentData);

    // Validate and sanitize the data
    const validationResult = validateAndSanitizeAnalysis(mockStructuredData);
    
    if (!validationResult.isValid) {
      console.error('Data validation failed:', validationResult.errors);
      throw new Error('Failed to generate valid analysis results');
    }

    // Store the structured data (in production, this would be saved to database)
    this.storeStructuredData(validationResult.sanitizedData!, assessmentData);

    // Convert to display format for UI
    return convertToDisplayFormat(validationResult.sanitizedData!);
  }

  /**
   * Generates mock structured data based on assessment inputs
   */
  private static generateMockStructuredData(data: AssessmentData): any {
    // Calculate optimization score based on various factors
    let optimizationScore = 5.0;
    
    // Higher spend = more optimization opportunity
    if (data.monthlyAiSpend > 5000) optimizationScore += 1.5;
    else if (data.monthlyAiSpend > 2000) optimizationScore += 1.0;
    else if (data.monthlyAiSpend > 500) optimizationScore += 0.5;

    // Multiple tools = tool sprawl opportunity
    if (data.currentAiTools.length > 3) optimizationScore += 1.0;
    else if (data.currentAiTools.length > 1) optimizationScore += 0.5;

    // Maturity level affects optimization potential
    if (data.aiMaturityLevel === 'Just Starting') optimizationScore += 1.0;
    else if (data.aiMaturityLevel === 'Regular Usage') optimizationScore += 0.5;

    // Company size affects complexity and savings potential
    if (data.companySize === '1000+') optimizationScore += 0.5;
    else if (data.companySize === '200-1000') optimizationScore += 0.3;

    // Cap at 10
    optimizationScore = Math.min(10, optimizationScore);

    // Calculate savings based on current spend and optimization score
    const savingsMultiplier = optimizationScore / 10;
    const baseSavings = data.monthlyAiSpend * 0.3; // 30% base savings
    const minSavings = Math.round(baseSavings * savingsMultiplier);
    const maxSavings = Math.round(baseSavings * savingsMultiplier * 1.8);

    // Determine timeline based on company size and complexity
    let timeline: "1 month" | "3 months" | "6 months" | "12 months" = "3 months";
    if (data.companySize === '1000+') timeline = "6 months";
    else if (data.companySize === '200-1000') timeline = "3 months";
    else timeline = "1 month";

    // Calculate ROI percentage
    const roiPercentage = Math.round(((maxSavings * 12) / (data.monthlyAiSpend * 12)) * 100);

    // Generate recommendations based on assessment data
    const quickWins = this.generateQuickWins(data);
    const strategicImprovements = this.generateStrategicImprovements(data);
    const longTermOptimization = this.generateLongTermOptimization(data);

    return {
      optimization_score: Math.round(optimizationScore * 10) / 10, // Round to 1 decimal
      monthly_savings_min: minSavings,
      monthly_savings_max: maxSavings,
      implementation_timeline: timeline,
      roi_percentage: roiPercentage,
      quick_wins: quickWins,
      strategic_improvements: strategicImprovements,
      long_term_optimization: longTermOptimization
    };
  }

  /**
   * Generate quick wins based on assessment data
   */
  private static generateQuickWins(data: AssessmentData): string[] {
    const wins: string[] = [];

    if (data.currentAiTools.length > 2) {
      wins.push('Consolidate overlapping AI tool subscriptions to reduce licensing costs by 25-40%');
    }

    if (data.monthlyAiSpend > 1000) {
      wins.push('Implement usage monitoring to identify and eliminate API overage charges');
    }

    if (data.biggestAiCostConcern === 'Tool Sprawl') {
      wins.push('Audit current tool usage and cancel underutilized premium subscriptions');
    } else if (data.biggestAiCostConcern === 'Too Expensive') {
      wins.push('Switch from premium to standard tiers for non-critical use cases');
    } else {
      wins.push('Optimize API call patterns to reduce token consumption by 20-30%');
    }

    return wins.slice(0, 3);
  }

  /**
   * Generate strategic improvements based on assessment data
   */
  private static generateStrategicImprovements(data: AssessmentData): string[] {
    const improvements: string[] = [];

    if (data.departmentWithHighestWorkload) {
      improvements.push(`Implement AI automation workflows in ${data.departmentWithHighestWorkload} to reduce manual workload by 40-60%`);
    }

    if (data.mostTimeConsumingProcess) {
      improvements.push('Deploy custom AI solutions for your most time-consuming processes');
    }

    if (data.primaryGoal === 'Process Automation') {
      improvements.push('Build integrated automation pipelines connecting multiple AI tools and business systems');
    } else if (data.primaryGoal === 'Cost Reduction') {
      improvements.push('Implement dynamic scaling and usage-based optimization strategies');
    } else {
      improvements.push('Develop AI governance framework to ensure consistent ROI across departments');
    }

    return improvements.slice(0, 3);
  }

  /**
   * Generate long-term optimization based on assessment data
   */
  private static generateLongTermOptimization(data: AssessmentData): string[] {
    const optimizations: string[] = [];

    if (data.industry && data.industry !== 'Other') {
      optimizations.push(`Develop industry-specific AI models tailored for ${data.industry} to improve accuracy and reduce costs`);
    }

    if (data.companySize === '1000+') {
      optimizations.push('Implement enterprise AI governance platform with centralized monitoring and cost allocation');
    } else {
      optimizations.push('Build custom AI infrastructure to reduce dependency on third-party APIs');
    }

    if (data.successMetricPriority === 'ROI Percentage') {
      optimizations.push('Create advanced analytics dashboard for real-time ROI tracking and predictive cost modeling');
    } else {
      optimizations.push('Establish AI center of excellence to drive organization-wide optimization initiatives');
    }

    return optimizations.slice(0, 3);
  }

  /**
   * Store structured data (placeholder for database storage)
   */
  private static storeStructuredData(structuredData: AIOptimizationAnalysis, assessmentData: AssessmentData): void {
    // In production, this would store to database with proper error handling
    const dataToStore = {
      timestamp: new Date().toISOString(),
      assessment_data: {
        company_name: sanitizeText(assessmentData.companyName),
        industry: sanitizeText(assessmentData.industry),
        company_size: sanitizeText(assessmentData.companySize),
        annual_revenue: sanitizeText(assessmentData.annualRevenue),
        technical_team_size: sanitizeText(assessmentData.technicalTeamSize),
        monthly_ai_spend: assessmentData.monthlyAiSpend,
        current_ai_tools: assessmentData.currentAiTools.map(tool => sanitizeText(tool)),
        ai_maturity_level: sanitizeText(assessmentData.aiMaturityLevel),
        biggest_ai_cost_concern: sanitizeText(assessmentData.biggestAiCostConcern),
        department_with_highest_workload: sanitizeText(assessmentData.departmentWithHighestWorkload),
        most_time_consuming_process: sanitizeText(assessmentData.mostTimeConsumingProcess, 100),
        biggest_operational_bottleneck: sanitizeText(assessmentData.biggestOperationalBottleneck, 100),
        primary_goal: sanitizeText(assessmentData.primaryGoal),
        target_timeline: sanitizeText(assessmentData.targetTimeline),
        success_metric_priority: sanitizeText(assessmentData.successMetricPriority)
      },
      analysis_result: structuredData
    };

    // Log the structured data (in production, this would be database insert)
    console.log('Storing structured analysis data:', JSON.stringify(dataToStore, null, 2));

    // Store in localStorage for demo purposes
    try {
      localStorage.setItem(`ai_analysis_${Date.now()}`, JSON.stringify(dataToStore));
    } catch (error) {
      console.warn('Failed to store data in localStorage:', error);
    }
  }

  /**
   * Retrieve stored analysis data (placeholder for database retrieval)
   */
  static getStoredAnalyses(): any[] {
    try {
      const keys = Object.keys(localStorage).filter(key => key.startsWith('ai_analysis_'));
      return keys.map(key => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
      }).filter(Boolean);
    } catch (error) {
      console.warn('Failed to retrieve stored analyses:', error);
      return [];
    }
  }
}