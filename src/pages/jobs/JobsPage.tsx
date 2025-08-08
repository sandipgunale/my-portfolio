import React from 'react';

const JobsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Job Opportunities</h1>
      <p className="text-gray-600 mb-6">
        Discover the latest job opportunities in top tech domains and apply directly.
      </p>
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
          <h3 className="font-semibold">Frontend Developer – Remote</h3>
          <p className="text-sm text-gray-600">React, TypeScript · ₹10–15 LPA · Apply by Aug 20</p>
        </li>
        <li className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
          <h3 className="font-semibold">Cloud Engineer – Amazon</h3>
          <p className="text-sm text-gray-600">AWS Certified · ₹18–25 LPA · Apply by Aug 22</p>
        </li>
      </ul>
    </div>
  );
};

export default JobsPage;
