import React from 'react';
import { BarChart3, TrendingUp, Users, BookOpen, Calendar, Award, Target, Clock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Please sign in to access your dashboard
          </h2>
          <p className="text-gray-600">
            Sign in with Google to track your learning progress and career goals.
          </p>
        </div>
      </section>
    );
  }

  const stats = [
    { title: "Courses Completed", value: "12", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-100" },
    { title: "Skills Acquired", value: "8", icon: Award, color: "text-green-600", bg: "bg-green-100" },
    { title: "Study Hours", value: "156", icon: Clock, color: "text-purple-600", bg: "bg-purple-100" },
    { title: "Career Score", value: "85%", icon: Target, color: "text-orange-600", bg: "bg-orange-100" },
  ];

  const recentActivity = [
    { action: "Completed", item: "React Advanced Patterns", time: "2 hours ago", type: "course" },
    { action: "Started", item: "AWS Solutions Architect", time: "1 day ago", type: "certification" },
    { action: "Joined", item: "JavaScript Community", time: "3 days ago", type: "community" },
    { action: "Applied", item: "Senior Frontend Developer", time: "5 days ago", type: "job" },
  ];

  const skillProgress = [
    { skill: "React", level: 85, color: "bg-blue-500" },
    { skill: "TypeScript", level: 78, color: "bg-green-500" },
    { skill: "Node.js", level: 72, color: "bg-yellow-500" },
    { skill: "AWS", level: 45, color: "bg-orange-500" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-center space-x-4">
            <img
              src={user.photoURL || 'https://via.placeholder.com/80'}
              alt={user.displayName || 'User'}
              className="w-20 h-20 rounded-full border-4 border-white"
            />
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {user.displayName || user.email}!</h1>
              <p className="text-blue-100 mt-2">Continue your learning journey and achieve your career goals</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'course' ? 'bg-blue-500' :
                      activity.type === 'certification' ? 'bg-green-500' :
                      activity.type === 'community' ? 'bg-purple-500' : 'bg-orange-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-gray-900">
                        <span className="font-medium">{activity.action}</span> {activity.item}
                      </p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Progress */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                Skills Progress
              </h3>
              <div className="space-y-4">
                {skillProgress.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-blue-900">Continue Learning</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-900">Join Community</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    <span className="font-medium text-purple-900">Schedule Study</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;