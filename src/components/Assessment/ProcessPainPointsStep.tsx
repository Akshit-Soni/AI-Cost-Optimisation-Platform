import React from 'react';
import { AssessmentData } from '../../types';
import { Button } from '../UI/Button';
import { DEPARTMENTS } from '../../data/constants';

interface ProcessPainPointsStepProps {
  data: AssessmentData;
  onUpdate: (data: Partial<AssessmentData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ProcessPainPointsStep: React.FC<ProcessPainPointsStepProps> = ({
  data,
  onUpdate,
  onNext,
  onPrev
}) => {
  const isValid = data.departmentWithHighestWorkload && 
                  data.mostTimeConsumingProcess && 
                  data.biggestOperationalBottleneck;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Process Pain Points</h2>
        <p className="text-gray-600">
          Identify your biggest operational challenges to focus our recommendations
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="departmentWithHighestWorkload" className="block text-sm font-medium text-gray-700 mb-2">
            Department with Highest Manual Workload
          </label>
          <select
            id="departmentWithHighestWorkload"
            value={data.departmentWithHighestWorkload}
            onChange={(e) => onUpdate({ departmentWithHighestWorkload: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select department</option>
            {DEPARTMENTS.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="mostTimeConsumingProcess" className="block text-sm font-medium text-gray-700 mb-2">
            Most Time-Consuming Process
            <span className="text-xs text-gray-500 ml-1">(100 characters max)</span>
          </label>
          <textarea
            id="mostTimeConsumingProcess"
            value={data.mostTimeConsumingProcess}
            onChange={(e) => onUpdate({ mostTimeConsumingProcess: e.target.value })}
            maxLength={100}
            rows={3}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., Monthly report generation takes 20 hours"
          />
          <div className="text-xs text-gray-500 mt-1">
            {data.mostTimeConsumingProcess.length}/100 characters
          </div>
        </div>

        <div>
          <label htmlFor="biggestOperationalBottleneck" className="block text-sm font-medium text-gray-700 mb-2">
            Biggest Operational Bottleneck
            <span className="text-xs text-gray-500 ml-1">(100 characters max)</span>
          </label>
          <textarea
            id="biggestOperationalBottleneck"
            value={data.biggestOperationalBottleneck}
            onChange={(e) => onUpdate({ biggestOperationalBottleneck: e.target.value })}
            maxLength={100}
            rows={3}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., Manual data entry across 5 systems"
          />
          <div className="text-xs text-gray-500 mt-1">
            {data.biggestOperationalBottleneck.length}/100 characters
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={!isValid}>
          Continue to Objectives
        </Button>
      </div>
    </div>
  );
};