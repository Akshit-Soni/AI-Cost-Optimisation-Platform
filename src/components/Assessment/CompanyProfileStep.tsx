import React from 'react';
import { CompanyProfile } from '../../types';
import { industries, companySizes, annualRevenues, technicalTeamSizes } from '../../data/formOptions';

interface CompanyProfileStepProps {
  data: CompanyProfile;
  onChange: (data: Partial<CompanyProfile>) => void;
}

const CompanyProfileStep: React.FC<CompanyProfileStepProps> = ({ data, onChange }) => {
  return (
    <div className="space-y-6">
      {/* Company Name */}
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
          Company Name *
        </label>
        <input
          type="text"
          id="companyName"
          value={data.companyName}
          onChange={(e) => onChange({ companyName: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          placeholder="Enter your company name"
          required
        />
      </div>

      {/* Industry */}
      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
          Industry *
        </label>
        <select
          id="industry"
          value={data.industry}
          onChange={(e) => onChange({ industry: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          required
        >
          <option value="">Select your industry</option>
          {industries.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Company Size (Employees) *
          </label>
          <div className="space-y-2">
            {companySizes.map((size) => (
              <label key={size} className="flex items-center">
                <input
                  type="radio"
                  name="companySize"
                  value={size}
                  checked={data.companySize === size}
                  onChange={(e) => onChange({ companySize: e.target.value })}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">{size} employees</span>
              </label>
            ))}
          </div>
        </div>

        {/* Annual Revenue */}
        <div>
          <label htmlFor="annualRevenue" className="block text-sm font-medium text-gray-700 mb-2">
            Annual Revenue
          </label>
          <select
            id="annualRevenue"
            value={data.annualRevenue}
            onChange={(e) => onChange({ annualRevenue: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          >
            <option value="">Select revenue range</option>
            {annualRevenues.map((revenue) => (
              <option key={revenue} value={revenue}>
                {revenue}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Technical Team Size */}
      <div>
        <label htmlFor="technicalTeamSize" className="block text-sm font-medium text-gray-700 mb-2">
          Technical Team Size
        </label>
        <select
          id="technicalTeamSize"
          value={data.technicalTeamSize}
          onChange={(e) => onChange({ technicalTeamSize: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
        >
          <option value="">Select team size</option>
          {technicalTeamSizes.map((size) => (
            <option key={size} value={size}>
              {size} people
            </option>
          ))}
        </select>
        <p className="mt-1 text-xs text-gray-500">
          Include developers, engineers, and technical staff
        </p>
      </div>
    </div>
  );
};

export default CompanyProfileStep;