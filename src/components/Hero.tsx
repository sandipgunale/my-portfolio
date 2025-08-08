import React from 'react';
import { ArrowRight, Play, Star, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Hero: React.FC = () => {
  const { user, signIn, loading } = useAuth();

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
              <Star className="h-4 w-4 text-blue-600 mr-1" />
              <span className="text-sm font-medium text-blue-800">Latest Tech Insights</span>
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Navigate the Future of
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent block">
              Technology Careers
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with comprehensive insights into emerging technologies, job market trends, 
            and career opportunities in AI, Cloud Computing, Cybersecurity, and DevOps.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            {user ? (
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2">
                <span>Explore Technologies</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={signIn}
                disabled={loading}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <LogIn className="h-5 w-5" />
                <span>{loading ? 'Signing in...' : 'Sign in with Google'}</span>
              </button>
            )}
            
            <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              <div className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200">
                <Play className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-lg">Watch Demo</span>
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50K+", label: "Tech Professionals" },
              { number: "1200+", label: "Job Opportunities" },
              { number: "500+", label: "Tech Articles" },
              { number: "95%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;