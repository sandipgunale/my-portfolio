import React from 'react';

const CommunityPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Community</h1>
      <p className="text-gray-600 mb-6">
        Engage with like-minded professionals, join discussions, ask questions, and grow your network.
      </p>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h2 className="font-semibold text-lg text-blue-600">Latest Post: “How to start in AI?”</h2>
          <p className="text-gray-700">Get beginner-friendly guidance from our community mentors.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h2 className="font-semibold text-lg text-green-600">Upcoming Webinar: Cloud Careers</h2>
          <p className="text-gray-700">August 15 · Hosted by Google Cloud Engineers</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
