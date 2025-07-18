import React from 'react';
import { AIUsage } from '../../types';
import { aiTools, maturityLevels, aiConcerns } from '../../data/formOptions';

interface AIUsageStepProps {
  data: AIUsage;
  onChange: (data: Partial<AIUsage>) => void;
}

const AIUsageStep: React.FC<AIUsageStepProps> = ({ data, onChange }) => {
  const handleToolChange = (tool: string, checked: boolean) => {
    if (checked) {
      onChange({ currentTools: [...data.currentTools, tool] });
    } else {
      onChange({ currentTools: data.currentTools.filter(t => t !== tool) });
    }
  };

  return (
    <div className="space-y-6">
      {/* Monthly AI Spend */}
      <div>
        <label htmlFor="monthlySpend" className="block text-sm font-medium text-gray-700 mb-2">
          Estimated Monthly AI Spend: ${data.monthlySpend.toLocaleString()}
        </label>
        <input
          type="range"
          id="monthlySpend"
          min="0"
          max="10000"
          step="100"
          value={data.monthlySpend}
          onChange={(e) => onChange({ monthlySpend: parseInt(e.target.value) })}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>$0</span>
          <span>$5,000</span>
          <span>$10,000+</span>
        </div>
      </div>

      {/* Current AI Tools */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Current AI Tools (Select all that apply)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {aiTools.map((tool) => (
            <label key={tool} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={data.currentTools.includes(tool)}
                onChange={(e) => handleToolChange(tool, e.target.checked)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm text-gray-700">{tool}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* AI Maturity Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            AI Maturity Level *
          </label>
          <div className="space-y-2">
            {maturityLevels.map((level) => (
              <label key={level} className="flex items-center">
                <input
                  type="radio"
                  name="maturityLevel"
                  value={level}
                  checked={data.maturityLevel === level}
                  onChange={(e) => onChange({ maturityLevel: e.target.value })}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">{level}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Biggest AI Cost Concern */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Biggest AI Cost Concern *
          </label>
          <div className="space-y-2">
            {aiConcerns.map((concern) => (
              <label key={concern} className="flex items-center">
                <input
                  type="radio"
                  name="biggestConcern"
                  value={concern}
                  checked={data.biggestConcern === concern}
                  onChange={(e) => onChange({ biggestConcern: e.target.value })}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">{concern}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIUsageStep;