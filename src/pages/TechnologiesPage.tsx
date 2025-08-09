import React from 'react';
import TechCategories from '../components/TechCategories';

const TechnologiesPage: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Technology Categories</h1>
      <p className="mb-6 text-gray-700">
        Explore various technology domains, learn about popular tools, frameworks, and career paths in each category.
      </p>
      <TechCategories />
    </section>
  );
};

export default TechnologiesPage;
