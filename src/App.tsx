import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import { useAuth } from './contexts/AuthContext';

import HomePage from './pages/HomePage';
import TechnologiesPage from './pages/TechnologiesPage';
import JobsPage from './pages/JobsPage';
import CareerPage from './pages/CareerPage';
import ResourcesPage from './pages/ResourcesPage';
import TechNewsPage from './pages/TechNewsPage';
import CommunityPage from './pages/CommunityPage';

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

// Error boundary to catch global errors
const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setHasError(true);
      console.error('Global error caught:', event.error);
    };
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center p-4 bg-gray-50">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Something went wrong.</h1>
        <p className="text-gray-700 mb-6">Please refresh the page or try again later.</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Reload
        </button>
      </div>
    );
  }

  return <>{children}</>;
};

function App() {
  const { user, loading, signIn, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header
            user={user}
            onSignIn={signIn}
            onSignOut={signOut}
            mobileMenuOpen={mobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />

          <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/technologies" element={<TechnologiesPage />} />
              <Route path="/jobs" element={<JobsPage />} />
              <Route path="/career" element={<CareerPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/news" element={<TechNewsPage />} />
              <Route path="/community" element={<CommunityPage />} />
              {/* Redirect unknown routes to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
