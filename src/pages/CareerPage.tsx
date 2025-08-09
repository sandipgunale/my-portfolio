import React from 'react';

const CareerPage: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Career Development</h1>

      <p className="mb-6 text-gray-700">
        Discover career advice, growth strategies, skill-building tips, mentorship programs,
        and industry insights to help you advance professionally.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Career Roadmap */}
        <div className="border rounded p-6 bg-white shadow hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
            alt="Career roadmap"
            className="rounded mb-4 w-full h-40 object-cover"
          />
          <h2 className="text-xl font-semibold mb-3 text-blue-600">Career Roadmap Planning</h2>
          <p className="text-gray-700 mb-3">
            Understand the key milestones in your professional journey, from entry-level
            positions to leadership roles. Learn how to set achievable goals and plan your path forward.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-3">
            <li>Setting short and long-term career goals</li>
            <li>Identifying skill gaps and learning opportunities</li>
            <li>Mapping industry trends and emerging roles</li>
          </ul>
          <a
            href="https://www.themuse.com/advice/how-to-create-a-career-roadmap"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold"
          >
            Learn More &rarr;
          </a>
        </div>

        {/* Interview Preparation */}
        <div className="border rounded p-6 bg-white shadow hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
            alt="Interview preparation"
            className="rounded mb-4 w-full h-40 object-cover"
          />
          <h2 className="text-xl font-semibold mb-3 text-blue-600">Interview Preparation</h2>
          <p className="text-gray-700 mb-3">
            Ace your interviews with confidence. Find tips on resume building, answering common questions,
            and technical as well as behavioral interview strategies.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-3">
            <li>Crafting an impactful resume and cover letter</li>
            <li>Mock interviews and role-play exercises</li>
            <li>Handling technical tests and problem-solving scenarios</li>
          </ul>
          <a
            href="https://www.glassdoor.com/blog/guide/interview-preparation/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold"
          >
            Prepare for Interviews &rarr;
          </a>
        </div>

        {/* Skill Building */}
        <div className="border rounded p-6 bg-white shadow hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
            alt="Skill building"
            className="rounded mb-4 w-full h-40 object-cover"
          />
          <h2 className="text-xl font-semibold mb-3 text-blue-600">Skill Building & Upskilling</h2>
          <p className="text-gray-700 mb-3">
            Stay relevant by developing new skills and certifications. Explore recommended courses, workshops,
            and certifications to boost your career.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-3">
            <li>Top online platforms and certifications</li>
            <li>Soft skills for leadership and teamwork</li>
            <li>Continuous learning habits and time management</li>
          </ul>
          <a
            href="https://www.coursera.org/browse/business/personal-development"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold"
          >
            Explore Courses &rarr;
          </a>
        </div>

        {/* Mentorship & Networking */}
        <div className="border rounded p-6 bg-white shadow hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
            alt="Networking"
            className="rounded mb-4 w-full h-40 object-cover"
          />
          <h2 className="text-xl font-semibold mb-3 text-blue-600">Mentorship & Networking</h2>
          <p className="text-gray-700 mb-3">
            Build your professional network and find mentors who can guide your career progression.
            Learn how to effectively connect and engage with industry professionals.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-3">
            <li>Finding and approaching mentors</li>
            <li>Networking strategies and best practices</li>
            <li>Leveraging social platforms like LinkedIn</li>
          </ul>
          <a
            href="https://www.linkedin.com/learning/topics/networking"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold"
          >
            Start Networking &rarr;
          </a>
        </div>
      </div>

      <div className="border rounded p-6 bg-white shadow text-center text-gray-700">
        <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
        <p>
          We are actively developing comprehensive career guidance content including
          detailed roadmap planning, interview prep, skill assessments, and networking tips.
          Stay tuned!
        </p>
      </div>
    </section>
  );
};

export default CareerPage;
