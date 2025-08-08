import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechCategories from './components/TechCategories';
import JobOpportunities from './components/JobOpportunities';
import LearningResources from './components/LearningResources';
import TechNews from './components/TechNews';
import Community from './components/Community';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { user, loading, signIn, signOut } = useAuth();

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        {/* Show Dashboard if signed in */}
        {user ? (
          <>
            <Dashboard />
            <div className="flex justify-center mt-4">
              <button
                onClick={signOut}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Sign Out
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center mt-4">
            <button
              onClick={signIn}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Sign In with Google
            </button>
          </div>
        )}

        <TechCategories />
        <JobOpportunities />
        <LearningResources />
        <TechNews />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;
