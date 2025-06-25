import React from 'react';
import { AssessmentData } from '../../types';
import { Button } from '../UI/Button';
import { AI_TOOLS, AI_MATURITY_LEVELS, AI_COST_CONCERNS } from '../../data/constants';

interface AIUsageStepProps {
  data: AssessmentData;
  onUpdate: (data: Partial<AssessmentData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const AIUsageStep: React.FC<AIUsageStepProps> = ({
  data,
  onUpdate,
  onNext,
  onPrev
}) => {
  const isValid = data.aiMaturityLevel && data.biggestAiCostConcern;

  const handleToolChange = (tool: string, checked: boolean) => {
    if (checked) {
      onUpdate({ currentAiTools: [...data.currentAiTools, tool] });
    } else {
      onUpdate({ currentAiTools: data.currentAiTools.filter(t => t !== tool) });
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Current AI Usage</h2>
        <p className="text-gray-600">
          Help us understand your current AI investment and usage patterns
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Monthly AI Spend: ${data.monthlyAiSpend.toLocaleString()}
          </label>
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={data.monthlyAiSpend}
            onChange={(e) => onUpdate({ monthlyAiSpend: parseInt(e.target.value) })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$0</span>
            <span>$10,000+</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Current AI Tools (select all that apply)
          </label>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {AI_TOOLS.map((tool) => (
              <label key={tool} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={data.currentAiTools.includes(tool)}
                  onChange={(e) => handleToolChange(tool, e.target.checked)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{tool}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            AI Maturity Level
          </label>
          <div className="space-y-3">
            {AI_MATURITY_LEVELS.map((level) => (
              <label key={level} className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="aiMaturityLevel"
                  value={level}
                  checked={data.aiMaturityLevel === level}
                  onChange={(e) => onUpdate({ aiMaturityLevel: e.target.value })}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{level}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Biggest AI Cost Concern
          </label>
          <div className="space-y-3">
            {AI_COST_CONCERNS.map((concern) => (
              <label key={concern} className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="biggestAiCostConcern"
                  value={concern}
                  checked={data.biggestAiCostConcern === concern}
                  onChange={(e) => onUpdate({ biggestAiCostConcern: e.target.value })}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{concern}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={!isValid}>
          Continue to Pain Points
        </Button>
      </div>
    </div>
  );
};