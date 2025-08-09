import React from 'react';
import { Brain, Cloud, Shield, GitBranch, Database, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/technova-logo.png';  // Import static image

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <header className="hero-header">
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="TechNova Logo"
              style={{ width: 40, height: 40, marginRight: 12 }}
            />
            <h1 style={{ fontWeight: '900', fontSize: '1.8rem', letterSpacing: '2px', color: '#00FFD1', userSelect: 'none' }}>
              TechNova
            </h1>
          </div>
          <nav>
            <Link to="/features" className="btn-primary">Explore Features</Link>
            <Link to="/contact" className="btn-secondary">Get in Touch</Link>
          </nav>
        </header>
        <div className="hero-content">
          <h2>Innovate the Future, Today</h2>
          <p>
            Harness cutting-edge technology and smart solutions for a connected tomorrow.
            Join TechNova to pioneer the next generation of digital transformation.
          </p>
          <div className="icons-row" aria-label="Technology icons">
            <Brain size={36} stroke="#00FFD1" />
            <Cloud size={36} stroke="#00FFD1" />
            <Shield size={36} stroke="#00FFD1" />
            <GitBranch size={36} stroke="#00FFD1" />
            <Database size={36} stroke="#00FFD1" />
            <Smartphone size={36} stroke="#00FFD1" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #010114, #0f1b2a);
          color: #00FFD1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem 1rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }
        .container {
          max-width: 960px;
          margin: 0 auto;
        }
        .hero-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        nav a {
          text-decoration: none;
          padding: 0.7rem 1.5rem;
          border-radius: 30px;
          font-weight: 600;
          margin: 0 0.5rem;
          transition: background-color 0.3s ease, color 0.3s ease;
          display: inline-block;
          color: #00FFD1;
        }
        .btn-primary {
          background-color: #00FFD1;
          color: #010114;
        }
        .btn-primary:hover {
          background-color: #00bfa1;
        }
        .btn-secondary {
          border: 2px solid #00FFD1;
          color: #00FFD1;
        }
        .btn-secondary:hover {
          background-color: #00FFD1;
          color: #010114;
        }
        .hero-content h2 {
          font-size: 2.8rem;
          margin-bottom: 1rem;
          font-weight: 900;
          letter-spacing: 1.5px;
        }
        .hero-content p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto 2.5rem auto;
          line-height: 1.5;
          color: #b0f7e9;
        }
        .icons-row {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          flex-wrap: wrap;
        }
        @media (max-width: 600px) {
          .hero-header {
            justify-content: center;
          }
          nav a {
            margin: 0.5rem 0.25rem;
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
          }
          .hero-content h2 {
            font-size: 2rem;
          }
          .hero-content p {
            font-size: 1rem;
            max-width: 100%;
          }
          .icons-row {
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
