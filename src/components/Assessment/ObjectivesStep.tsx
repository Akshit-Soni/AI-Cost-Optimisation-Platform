import React from 'react';
import { AssessmentData } from '../../types';
import { Button } from '../UI/Button';
import { PRIMARY_GOALS, TARGET_TIMELINES, SUCCESS_METRICS } from '../../data/constants';

interface ObjectivesStepProps {
  data: AssessmentData;
  onUpdate: (data: Partial<AssessmentData>) => void;
  onComplete: () => void;
  onPrev: () => void;
}

export const ObjectivesStep: React.FC<ObjectivesStepProps> = ({
  data,
  onUpdate,
  onComplete,
  onPrev
}) => {
  const isValid = data.primaryGoal && data.targetTimeline && data.successMetricPriority;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Optimization Goals</h2>
        <p className="text-gray-600">
          Define your success criteria to align our recommendations with your objectives
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Primary Goal
          </label>
          <div className="space-y-3">
            {PRIMARY_GOALS.map((goal) => (
              <label key={goal} className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="primaryGoal"
                  value={goal}
                  checked={data.primaryGoal === goal}
                  onChange={(e) => onUpdate({ primaryGoal: e.target.value })}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{goal}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Target Timeline
          </label>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {TARGET_TIMELINES.map((timeline) => (
              <label key={timeline} className="relative">
                <input
                  type="radio"
                  name="targetTimeline"
                  value={timeline}
                  checked={data.targetTimeline === timeline}
                  onChange={(e) => onUpdate({ targetTimeline: e.target.value })}
                  className="sr-only"
                />
                <div className={`cursor-pointer rounded-md border-2 p-3 text-center text-sm font-medium transition-all duration-200 ${
                  data.targetTimeline === timeline
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                }`}>
                  {timeline}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Success Metric Priority
          </label>
          <div className="space-y-3">
            {SUCCESS_METRICS.map((metric) => (
              <label key={metric} className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="successMetricPriority"
                  value={metric}
                  checked={data.successMetricPriority === metric}
                  onChange={(e) => onUpdate({ successMetricPriority: e.target.value })}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{metric}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Previous
        </Button>
        <Button onClick={onComplete} disabled={!isValid}>
          Generate My Optimization Report
        </Button>
      </div>
    </div>
  );
};