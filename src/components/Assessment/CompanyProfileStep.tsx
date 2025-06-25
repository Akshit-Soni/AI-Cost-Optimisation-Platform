import React from 'react';
import { AssessmentData } from '../../types';
import { Button } from '../UI/Button';
import { INDUSTRIES, COMPANY_SIZES, ANNUAL_REVENUES, TECHNICAL_TEAM_SIZES } from '../../data/constants';

interface CompanyProfileStepProps {
  data: AssessmentData;
  onUpdate: (data: Partial<AssessmentData>) => void;
  onNext: () => void;
}

export const CompanyProfileStep: React.FC<CompanyProfileStepProps> = ({
  data,
  onUpdate,
  onNext
}) => {
  const isValid = data.companyName && data.industry && data.companySize && 
                  data.annualRevenue && data.technicalTeamSize;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Company Profile</h2>
        <p className="text-gray-600">
          Tell us about your company to help us provide tailored recommendations
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            value={data.companyName}
            onChange={(e) => onUpdate({ companyName: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your company name"
          />
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
            Industry
          </label>
          <select
            id="industry"
            value={data.industry}
            onChange={(e) => onUpdate({ industry: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select your industry</option>
            {INDUSTRIES.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Company Size
          </label>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {COMPANY_SIZES.map((size) => (
              <label key={size} className="relative">
                <input
                  type="radio"
                  name="companySize"
                  value={size}
                  checked={data.companySize === size}
                  onChange={(e) => onUpdate({ companySize: e.target.value })}
                  className="sr-only"
                />
                <div className={`cursor-pointer rounded-md border-2 p-3 text-center text-sm font-medium transition-all duration-200 ${
                  data.companySize === size
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                }`}>
                  {size}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="annualRevenue" className="block text-sm font-medium text-gray-700 mb-2">
            Annual Revenue
          </label>
          <select
            id="annualRevenue"
            value={data.annualRevenue}
            onChange={(e) => onUpdate({ annualRevenue: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select annual revenue range</option>
            {ANNUAL_REVENUES.map((revenue) => (
              <option key={revenue} value={revenue}>
                {revenue}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="technicalTeamSize" className="block text-sm font-medium text-gray-700 mb-2">
            Technical Team Size
          </label>
          <select
            id="technicalTeamSize"
            value={data.technicalTeamSize}
            onChange={(e) => onUpdate({ technicalTeamSize: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select technical team size</option>
            {TECHNICAL_TEAM_SIZES.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Button onClick={onNext} disabled={!isValid}>
          Continue to AI Usage
        </Button>
      </div>
    </div>
  );
};