import React from 'react';
import { Objectives } from '../../types';
import { primaryGoals, timelines, successMetrics } from '../../data/formOptions';

interface ObjectivesStepProps {
  data: Objectives;
  onChange: (data: Partial<Objectives>) => void;
}

const ObjectivesStep: React.FC<ObjectivesStepProps> = ({ data, onChange }) => {
  return (
    <div className="space-y-6">
      {/* Primary Goal */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Primary Optimization Goal *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {primaryGoals.map((goal) => (
            <label key={goal} className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-primary-300 transition-colors cursor-pointer">
              <input
                type="radio"
                name="primaryGoal"
                value={goal}
                checked={data.primaryGoal === goal}
                onChange={(e) => onChange({ primaryGoal: e.target.value })}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
              />
              <span className="ml-3 text-sm font-medium text-gray-700">{goal}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Target Timeline */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Target Implementation Timeline *
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {timelines.map((timeline) => (
            <label key={timeline} className="flex items-center p-3 border-2 border-gray-200 rounded-lg hover:border-primary-300 transition-colors cursor-pointer text-center">
              <input
                type="radio"
                name="targetTimeline"
                value={timeline}
                checked={data.targetTimeline === timeline}
                onChange={(e) => onChange({ targetTimeline: e.target.value })}
                className="sr-only"
              />
              <span className={`text-sm font-medium w-full ${
                data.targetTimeline === timeline 
                  ? 'text-primary-600' 
                  : 'text-gray-700'
              }`}>
                {timeline}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Success Metric Priority */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Most Important Success Metric
        </label>
        <div className="space-y-2">
          {successMetrics.map((metric) => (
            <label key={metric} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="successMetric"
                value={metric}
                checked={data.successMetric === metric}
                onChange={(e) => onChange({ successMetric: e.target.value })}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
              />
              <span className="ml-3 text-sm text-gray-700">{metric}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Summary Preview */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 rounded-lg p-4">
        <h4 className="font-medium text-primary-900 mb-2">🎯 Your Optimization Focus:</h4>
        <div className="text-sm text-primary-800 space-y-1">
          {data.primaryGoal && <p>• Primary goal: <strong>{data.primaryGoal}</strong></p>}
          {data.targetTimeline && <p>• Timeline: <strong>{data.targetTimeline}</strong></p>}
          {data.successMetric && <p>• Key metric: <strong>{data.successMetric}</strong></p>}
        </div>
      </div>
    </div>
  );
};

export default ObjectivesStep;