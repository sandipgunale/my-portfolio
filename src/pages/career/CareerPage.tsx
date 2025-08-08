import React from 'react';

const CareerPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Career Resources</h1>
      <p className="text-gray-600 mb-6">
        Plan your tech career with expert tools and guidance tailored to your goals.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
        <li className="bg-gray-50 p-4 rounded-xl shadow">📝 Resume Builder</li>
        <li className="bg-gray-50 p-4 rounded-xl shadow">🎯 Skills Assessment</li>
        <li className="bg-gray-50 p-4 rounded-xl shadow">📈 Salary Guide 2025</li>
        <li className="bg-gray-50 p-4 rounded-xl shadow">🤝 Interview Prep</li>
      </ul>
    </div>
  );
};

export default CareerPage;
