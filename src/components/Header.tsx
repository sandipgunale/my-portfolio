import React, { useState } from 'react';
import { Search, Menu, X, Briefcase, TrendingUp, Users, BookOpen, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const navItems = [
    { name: 'Technologies', icon: TrendingUp, path: '/technologies' },
    { name: 'Jobs', icon: Briefcase, path: '/jobs' },
    { name: 'Career', icon: Users, path: '/career' },
    { name: 'Resources', icon: BookOpen, path: '/resources' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
            >
              TechPortal
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* User Info + Search + Menu */}
          <div className="flex items-center space-x-4">
            {user && (
              <div className="hidden sm:flex items-center space-x-3">
                <img
                  src={user.photoURL || 'https://via.placeholder.com/32'}
                  alt={user.displayName || 'User'}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">
                  {user.displayName || user.email}
                </span>
                <button
                  onClick={signOut}
                  className="p-2 text-gray-500 hover:text-red-600 transition-colors duration-200"
                  title="Sign out"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            )}

            <div className="hidden sm:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {user && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={user.photoURL || 'https://via.placeholder.com/32'}
                    alt={user.displayName || 'User'}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {user.displayName || user.email}
                  </span>
                </div>
                <button
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors duration-200 font-medium"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
