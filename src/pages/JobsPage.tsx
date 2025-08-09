import React from 'react';
import JobOpportunities from '../components/JobOpportunities';

const JobsPage: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Job Opportunities</h1>
      <p className="mb-6 text-gray-700">
        Find the latest job openings, internships, and freelance gigs in the tech industry tailored for different experience levels.
      </p>
      <JobOpportunities />
    </section>
  );
};

export default JobsPage;
