import React from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Briefcase,
  BookOpen,
  Users,
  Bell,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

const dashboardCards = [
  {
    title: 'Technologies',
    description: 'Explore latest technology trends, tutorials, and career paths.',
    icon: Cpu,
    link: '/technologies',
    colorFrom: 'from-blue-500',
    colorTo: 'to-teal-500',
    stats: { new: 24, popular: 5 },
  },
  {
    title: 'Job Opportunities',
    description: 'Browse current job openings from top tech companies.',
    icon: Briefcase,
    link: '/career/job-search',
    colorFrom: 'from-green-500',
    colorTo: 'to-lime-500',
    stats: { new: 15, featured: 3 },
  },
  {
    title: 'Learning Resources',
    description: 'Access tutorials, courses, and guides to boost your skills.',
    icon: BookOpen,
    link: '/resources',
    colorFrom: 'from-purple-500',
    colorTo: 'to-pink-500',
    stats: { new: 10, updated: 7 },
  },
  {
    title: 'Community',
    description: 'Join discussions, events, and network with peers.',
    icon: Users,
    link: '/community',
    colorFrom: 'from-yellow-400',
    colorTo: 'to-orange-500',
    stats: { active: 1200, events: 8 },
  },
  {
    title: 'Notifications',
    description: 'Stay updated with latest alerts and announcements.',
    icon: Bell,
    link: '/notifications',
    colorFrom: 'from-red-500',
    colorTo: 'to-rose-500',
    stats: { unread: 5 },
  },
  {
    title: 'Performance',
    description: 'Track your progress and career growth insights.',
    icon: TrendingUp,
    link: '/performance',
    colorFrom: 'from-indigo-500',
    colorTo: 'to-blue-500',
    stats: { score: '87%', rank: 12 },
  },
];

const Dashboard: React.FC = () => {
  const user = {
    name: 'Sandip Gunale',
    role: 'Software Developer',
    avatar:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white min-h-screen py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Welcome header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-16 space-y-6 sm:space-y-0">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 shadow-lg"
              />
              <span className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-5 h-5 border-2 border-white animate-pulse" title="Online"></span>
            </div>
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                Welcome back, <span className="text-blue-600">{user.name}</span>!
              </h1>
              <p className="text-gray-600 text-lg mt-1">Role: {user.role}</p>
            </div>
          </div>
          <button className="inline-flex items-center px-7 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-xl text-white font-semibold shadow-md shadow-blue-400/50">
            View Profile
            <ArrowRight className="ml-3 w-5 h-5" />
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {dashboardCards.map(({ title, description, icon: Icon, link, colorFrom, colorTo, stats }) => (
            <Link
              to={link}
              key={title}
              className={`relative flex flex-col rounded-3xl shadow-xl p-8 bg-white hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 group`}
              aria-label={`Go to ${title}`}
            >
              <div className={`inline-flex items-center justify-center p-5 rounded-2xl bg-gradient-to-r ${colorFrom} ${colorTo} text-white mb-6 shadow-lg`}>
                <Icon className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {title}
              </h2>
              <p className="text-gray-600 flex-grow">{description}</p>

              {/* Stats badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                {Object.entries(stats).map(([key, value]) => (
                  <span
                    key={key}
                    className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide select-none"
                    title={`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
                  >
                    {key}: {value}
                  </span>
                ))}
              </div>

              {/* Explore arrow */}
              <div className="mt-8 flex items-center text-blue-600 font-semibold group-hover:underline group-hover:translate-x-1 transition-all duration-200 cursor-pointer select-none">
                <span>Explore</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
