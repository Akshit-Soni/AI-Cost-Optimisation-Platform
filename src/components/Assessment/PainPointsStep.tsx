import React from 'react';
import { ProcessPainPoints } from '../../types';
import { departments } from '../../data/formOptions';

interface PainPointsStepProps {
  data: ProcessPainPoints;
  onChange: (data: Partial<ProcessPainPoints>) => void;
}

const PainPointsStep: React.FC<PainPointsStepProps> = ({ data, onChange }) => {
  return (
    <div className="space-y-6">
      {/* Department with Highest Manual Workload */}
      <div>
        <label htmlFor="highestWorkloadDept" className="block text-sm font-medium text-gray-700 mb-2">
          Department with Highest Manual Workload *
        </label>
        <select
          id="highestWorkloadDept"
          value={data.highestWorkloadDept}
          onChange={(e) => onChange({ highestWorkloadDept: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          required
        >
          <option value="">Select department</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {/* Most Time-Consuming Process */}
      <div>
        <label htmlFor="timeConsumingProcess" className="block text-sm font-medium text-gray-700 mb-2">
          Most Time-Consuming Process
        </label>
        <textarea
          id="timeConsumingProcess"
          value={data.timeConsumingProcess}
          onChange={(e) => onChange({ timeConsumingProcess: e.target.value })}
          maxLength={100}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
          placeholder="e.g., Monthly report generation takes 20 hours"
        />
        <div className="flex justify-between mt-1">
          <p className="text-xs text-gray-500">
            Describe your most time-consuming manual process
          </p>
          <span className="text-xs text-gray-500">
            {data.timeConsumingProcess.length}/100
          </span>
        </div>
      </div>

      {/* Biggest Operational Bottleneck */}
      <div>
        <label htmlFor="biggestBottleneck" className="block text-sm font-medium text-gray-700 mb-2">
          Biggest Operational Bottleneck
        </label>
        <textarea
          id="biggestBottleneck"
          value={data.biggestBottleneck}
          onChange={(e) => onChange({ biggestBottleneck: e.target.value })}
          maxLength={100}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
          placeholder="e.g., Manual data entry across 5 systems"
        />
        <div className="flex justify-between mt-1">
          <p className="text-xs text-gray-500">
            What process slows down your team the most?
          </p>
          <span className="text-xs text-gray-500">
            {data.biggestBottleneck.length}/100
          </span>
        </div>
      </div>

      {/* Help text */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">💡 Tips for better recommendations:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Be specific about time spent on manual tasks</li>
          <li>• Mention any systems or tools currently used</li>
          <li>• Include frequency (daily, weekly, monthly)</li>
        </ul>
      </div>
    </div>
  );
};

export default PainPointsStep;