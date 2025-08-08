import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
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

// Newly imported page components
import DashboardPage from './pages/dashboard/DashboardPage';
import CommunityPage from './pages/community/CommunityPage';
import JobsPage from './pages/jobs/JobsPage';
import CareerPage from './pages/career/CareerPage';
import ResourcesPage from './pages/resources/ResourcesPage';
import TechnologiesPage from './pages/technologies/TechnologiesPage';
import TechnologyDetailPage from './pages/technologies/TechnologyDetailPage';

const App: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <Router>
      <Header />
      <nav className="flex space-x-4 justify-center mb-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/learning">Learning</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/community">Community</NavLink>
        <NavLink to="/career">Career</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/technologies">Technologies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={user ? <DashboardPage /> : <Hero />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/technologies/ai" element={<TechnologyDetailPage />} />
        <Route path="/learning" element={<LearningResources />} />
        <Route path="/news" element={<TechNews />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
