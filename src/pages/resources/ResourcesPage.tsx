import React from 'react';

const ResourcesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Learning Resources</h1>
      <p className="text-gray-600 mb-6">
        Browse top-rated courses, books, and tutorials to upskill in today's tech.
      </p>
      <ul className="space-y-3">
        <li className="bg-white p-4 shadow rounded-md">📘 “Mastering React” – Free ebook</li>
        <li className="bg-white p-4 shadow rounded-md">📺 DevOps Bootcamp – YouTube Series</li>
        <li className="bg-white p-4 shadow rounded-md">🎓 Google Cloud Certification Path</li>
      </ul>
    </div>
  );
};

export default ResourcesPage;
