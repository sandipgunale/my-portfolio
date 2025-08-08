import React from 'react';

const TechnologiesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Technologies</h1>
      <p className="text-gray-600 mb-6">
        Explore emerging and in-demand technologies shaping the future of IT.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800">
        <li className="bg-gradient-to-br from-blue-100 to-white p-4 rounded-xl shadow">🤖 Artificial Intelligence</li>
        <li className="bg-gradient-to-br from-green-100 to-white p-4 rounded-xl shadow">☁️ Cloud Computing</li>
        <li className="bg-gradient-to-br from-yellow-100 to-white p-4 rounded-xl shadow">🔐 Cybersecurity</li>
        <li className="bg-gradient-to-br from-purple-100 to-white p-4 rounded-xl shadow">⚙️ DevOps</li>
        <li className="bg-gradient-to-br from-red-100 to-white p-4 rounded-xl shadow">📊 Big Data</li>
        <li className="bg-gradient-to-br from-pink-100 to-white p-4 rounded-xl shadow">📱 Mobile Development</li>
      </ul>
    </div>
  );
};

export default TechnologiesPage;
