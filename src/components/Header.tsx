// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../sevices/authService';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  user: User | null;
  onSignIn: () => Promise<void>;
  onSignOut: () => Promise<void>;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({
  user,
  onSignIn,
  onSignOut,
  mobileMenuOpen,
  toggleMobileMenu,
}) => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            TechPortal
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/technologies" className="text-gray-700 hover:text-blue-600">
              Technologies
            </Link>
            <Link to="/jobs" className="text-gray-700 hover:text-blue-600">
              Jobs
            </Link>
            <Link to="/career" className="text-gray-700 hover:text-blue-600">
              Career
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-blue-600">
              Resources
            </Link>
            <Link to="/news" className="text-gray-700 hover:text-blue-600">
              Tech News
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-blue-600">
              Community
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-700">Hello, {user.displayName ?? 'User'}</span>
                <button
                  onClick={onSignOut}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={onSignIn}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Sign In with Google
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/technologies"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-100"
              onClick={toggleMobileMenu}
            >
              Technologies
            </Link>
            <Link
              to="/jobs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-100"
              onClick={toggleMobileMenu}
            >
              Jobs
            </Link>
            <Link
              to="/career"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-100"
              onClick={toggleMobileMenu}
            >
              Career
            </Link>
            <Link
              to="/resources"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-100"
              onClick={toggleMobileMenu}
            >
              Resources
            </Link>
            <Link
              to="/news"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-100"
              onClick={toggleMobileMenu}
            >
              Tech News
            </Link>
            <Link
              to="/community"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-100"
              onClick={toggleMobileMenu}
            >
              Community
            </Link>

            {/* Auth buttons in mobile */}
            <div className="mt-4 px-3">
              {user ? (
                <>
                  <span className="block mb-2 text-gray-700">Hello, {user.displayName ?? 'User'}</span>
                  <button
                    onClick={() => {
                      onSignOut();
                      toggleMobileMenu();
                    }}
                    className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    onSignIn();
                    toggleMobileMenu();
                  }}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Sign In with Google
                </button>
              )}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
