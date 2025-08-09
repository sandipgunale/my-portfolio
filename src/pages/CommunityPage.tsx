import React from 'react';
import Community from '../components/Community';

const CommunityPage: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Developer Communities</h1>
      <p className="mb-6 text-gray-700">
        Connect with fellow developers, ask questions, share knowledge, and grow your network by joining these active tech communities.
      </p>
      <Community />
    </section>
  );
};

export default CommunityPage;
