import { AIOptimizationAnalysis, DataValidationResult } from '../types';

/**
 * Sanitizes text input by removing potentially harmful characters
 * and limiting length to prevent data overflow
 */
export const sanitizeText = (text: string, maxLength: number = 500): string => {
  if (typeof text !== 'string') return '';
  
  return text
    .trim()
    .replace(/[<>\"'&]/g, '') // Remove potentially harmful characters
    .substring(0, maxLength); // Limit length
};

/**
 * Validates and sanitizes numeric values
 */
export const sanitizeNumber = (value: any, min?: number, max?: number): number => {
  const num = typeof value === 'number' ? value : parseFloat(value);
  
  if (isNaN(num) || !isFinite(num)) {
    throw new Error('Invalid numeric value');
  }
  
  if (min !== undefined && num < min) {
    throw new Error(`Value must be at least ${min}`);
  }
  
  if (max !== undefined && num > max) {
    throw new Error(`Value must be at most ${max}`);
  }
  
  return Math.round(num * 100) / 100; // Round to 2 decimal places
};

/**
 * Validates implementation timeline enum
 */
export const validateImplementationTimeline = (timeline: string): "1 month" | "3 months" | "6 months" | "12 months" => {
  const validTimelines = ["1 month", "3 months", "6 months", "12 months"] as const;
  
  if (!validTimelines.includes(timeline as any)) {
    throw new Error(`Invalid implementation timeline: ${timeline}`);
  }
  
  return timeline as "1 month" | "3 months" | "6 months" | "12 months";
};

/**
 * Validates and sanitizes array of strings
 */
export const sanitizeStringArray = (arr: any[], maxItems: number, maxLength: number = 200): string[] => {
  if (!Array.isArray(arr)) {
    throw new Error('Expected array');
  }
  
  return arr
    .slice(0, maxItems) // Limit number of items
    .map(item => sanitizeText(String(item), maxLength))
    .filter(item => item.length > 0); // Remove empty strings
};

/**
 * Validates and sanitizes the complete AI optimization analysis data
 */
export const validateAndSanitizeAnalysis = (data: any): DataValidationResult => {
  const errors: string[] = [];
  
  try {
    const sanitizedData: AIOptimizationAnalysis = {
      optimization_score: 0,
      monthly_savings_min: 0,
      monthly_savings_max: 0,
      implementation_timeline: "3 months",
      roi_percentage: 0,
      quick_wins: [],
      strategic_improvements: [],
      long_term_optimization: []
    };

    // Validate optimization_score
    try {
      sanitizedData.optimization_score = sanitizeNumber(data.optimization_score, 1, 10);
    } catch (error) {
      errors.push(`optimization_score: ${error.message}`);
    }

    // Validate monthly_savings_min
    try {
      sanitizedData.monthly_savings_min = sanitizeNumber(data.monthly_savings_min, 0);
    } catch (error) {
      errors.push(`monthly_savings_min: ${error.message}`);
    }

    // Validate monthly_savings_max
    try {
      sanitizedData.monthly_savings_max = sanitizeNumber(data.monthly_savings_max, 0);
      
      // Ensure max >= min
      if (sanitizedData.monthly_savings_max < sanitizedData.monthly_savings_min) {
        errors.push('monthly_savings_max must be greater than or equal to monthly_savings_min');
      }
    } catch (error) {
      errors.push(`monthly_savings_max: ${error.message}`);
    }

    // Validate implementation_timeline
    try {
      sanitizedData.implementation_timeline = validateImplementationTimeline(data.implementation_timeline);
    } catch (error) {
      errors.push(`implementation_timeline: ${error.message}`);
    }

    // Validate roi_percentage
    try {
      sanitizedData.roi_percentage = sanitizeNumber(data.roi_percentage, 0);
    } catch (error) {
      errors.push(`roi_percentage: ${error.message}`);
    }

    // Validate quick_wins
    try {
      sanitizedData.quick_wins = sanitizeStringArray(data.quick_wins, 3);
      if (sanitizedData.quick_wins.length === 0) {
        errors.push('quick_wins: At least one quick win is required');
      }
    } catch (error) {
      errors.push(`quick_wins: ${error.message}`);
    }

    // Validate strategic_improvements
    try {
      sanitizedData.strategic_improvements = sanitizeStringArray(data.strategic_improvements, 3);
      if (sanitizedData.strategic_improvements.length === 0) {
        errors.push('strategic_improvements: At least one strategic improvement is required');
      }
    } catch (error) {
      errors.push(`strategic_improvements: ${error.message}`);
    }

    // Validate long_term_optimization
    try {
      sanitizedData.long_term_optimization = sanitizeStringArray(data.long_term_optimization, 3);
      if (sanitizedData.long_term_optimization.length === 0) {
        errors.push('long_term_optimization: At least one long-term optimization is required');
      }
    } catch (error) {
      errors.push(`long_term_optimization: ${error.message}`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedData: errors.length === 0 ? sanitizedData : undefined
    };

  } catch (error) {
    return {
      isValid: false,
      errors: [`Validation failed: ${error.message}`]
    };
  }
};

/**
 * Converts structured data format to UI display format
 */
export const convertToDisplayFormat = (structuredData: AIOptimizationAnalysis): any => {
  return {
    optimizationScore: structuredData.optimization_score,
    estimatedMonthlySavings: {
      min: structuredData.monthly_savings_min,
      max: structuredData.monthly_savings_max
    },
    implementationTimeline: structuredData.implementation_timeline,
    roiExpectation: structuredData.roi_percentage,
    quickWins: structuredData.quick_wins,
    strategicImprovements: structuredData.strategic_improvements,
    longTermOptimization: structuredData.long_term_optimization
  };
};

/**
 * Converts UI display format to structured data format
 */
export const convertToStructuredFormat = (displayData: any): AIOptimizationAnalysis => {
  return {
    optimization_score: displayData.optimizationScore || 0,
    monthly_savings_min: displayData.estimatedMonthlySavings?.min || 0,
    monthly_savings_max: displayData.estimatedMonthlySavings?.max || 0,
    implementation_timeline: displayData.implementationTimeline || "3 months",
    roi_percentage: displayData.roiExpectation || 0,
    quick_wins: displayData.quickWins || [],
    strategic_improvements: displayData.strategicImprovements || [],
    long_term_optimization: displayData.longTermOptimization || []
  };
};