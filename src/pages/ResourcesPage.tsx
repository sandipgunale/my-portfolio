import React from 'react';
import LearningResources from '../components/LearningResources';

const ResourcesPage: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Learning Resources</h1>
      <p className="mb-6 text-gray-700">
        Access curated learning platforms, books, documentation, and communities to help you grow your technical skills effectively.
      </p>
      <LearningResources />
    </section>
  );
};

export default ResourcesPage;
