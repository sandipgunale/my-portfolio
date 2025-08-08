import React from 'react';
import { Users, MessageCircle, Heart, Share2, Calendar, MapPin } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Community: React.FC = () => {
  const { user } = useAuth();

  const communityPosts = [
    {
      id: 1,
      author: {
        name: "Sarah Chen",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
        role: "Senior Developer"
      },
      content: "Just completed my AWS certification! The journey was challenging but incredibly rewarding. Happy to share study resources with anyone interested.",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      tags: ["AWS", "Certification", "Cloud"]
    },
    {
      id: 2,
      author: {
        name: "Mike Rodriguez",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
        role: "DevOps Engineer"
      },
      content: "Looking for recommendations on the best Kubernetes monitoring tools. Currently evaluating Prometheus vs Grafana. What's your experience?",
      timestamp: "4 hours ago",
      likes: 18,
      comments: 12,
      tags: ["Kubernetes", "Monitoring", "DevOps"]
    },
    {
      id: 3,
      author: {
        name: "Emily Johnson",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
        role: "Data Scientist"
      },
      content: "Excited to announce that I'll be speaking at the upcoming AI Conference about ethical considerations in machine learning. See you there!",
      timestamp: "6 hours ago",
      likes: 42,
      comments: 15,
      tags: ["AI", "Conference", "Ethics"]
    }
  ];

  const upcomingEvents = [
    {
      title: "React Native Workshop",
      date: "Jan 15, 2025",
      time: "2:00 PM PST",
      attendees: 156,
      type: "Workshop"
    },
    {
      title: "Cybersecurity Meetup",
      date: "Jan 18, 2025",
      time: "6:00 PM PST",
      attendees: 89,
      type: "Meetup"
    },
    {
      title: "Cloud Architecture Discussion",
      date: "Jan 22, 2025",
      time: "1:00 PM PST",
      attendees: 203,
      type: "Discussion"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tech Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow developers, share knowledge, and grow together
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Community Feed */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MessageCircle className="h-6 w-6 text-blue-600 mr-2" />
                Community Feed
              </h3>
              
              {user && (
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src={user.photoURL || 'https://via.placeholder.com/40'}
                      alt={user.displayName || 'User'}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{user.displayName || user.email}</div>
                    </div>
                  </div>
                  <textarea
                    placeholder="Share your thoughts with the community..."
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                  />
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex space-x-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">#javascript</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">#react</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Post
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {communityPosts.map((post) => (
                  <div key={post.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-start space-x-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900">{post.author.name}</h4>
                          <span className="text-sm text-gray-500">{post.author.role}</span>
                          <span className="text-sm text-gray-400">•</span>
                          <span className="text-sm text-gray-400">{post.timestamp}</span>
                        </div>
                        
                        <p className="text-gray-700 mb-3 leading-relaxed">{post.content}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                            >
                              #{tag.toLowerCase()}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-6 text-gray-500">
                          <button className="flex items-center space-x-1 hover:text-red-500 transition-colors duration-200">
                            <Heart className="h-4 w-4" />
                            <span className="text-sm">{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors duration-200">
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-sm">{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-green-500 transition-colors duration-200">
                            <Share2 className="h-4 w-4" />
                            <span className="text-sm">Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-2" />
                Community Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Members</span>
                  <span className="font-semibold text-gray-900">12.5K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Posts Today</span>
                  <span className="font-semibold text-gray-900">89</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Online Now</span>
                  <span className="font-semibold text-green-600">1.2K</span>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 text-teal-600 mr-2" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 space-x-3">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {event.date}
                      </span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500 flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {event.attendees} attending
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                        Join
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;