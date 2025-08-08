import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <p className="text-gray-600 mb-6">
        Welcome to your TechPortal Dashboard. Track your progress, view key metrics, and manage your learning journey.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>🧠 6 Technologies mastered</li>
        <li>💼 6 Active job listings available</li>
        <li>📚 10+ Learning resources tailored for you</li>
        <li>👥 Over 25,000 users enrolled</li>
      </ul>
    </div>
  );
};

export default DashboardPage;
