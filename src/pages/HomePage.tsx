import React from 'react';
import { Brain, Cloud, Shield, GitBranch, Database, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Explore AI trends, from ML to NLP, shaping the future of tech.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Learn about AWS, Azure, GCP and serverless innovations.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Stay updated on zero-trust models and advanced threat detection.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: GitBranch,
    title: "DevOps & Automation",
    description: "Master CI/CD, Kubernetes, and infrastructure as code.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Database,
    title: "Big Data & Analytics",
    description: "Understand real-time processing and predictive analytics.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Discover cross-platform and native app development trends.",
    img: "https://images.unsplash.com/photo-1512499617640-c2f999464c4f?auto=format&fit=crop&w=600&q=80"
  }
];

const HomePage: React.FC = () => {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 via-blue-600 to-teal-600 text-white py-20 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-lg">
              Unlock Your Future in Technology
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 text-cyan-100 drop-shadow">
              Dive into the latest trends, career opportunities, and resources across AI, Cloud, Cybersecurity, DevOps, Big Data, and Mobile Development.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6 sm:mt-8">
              <Link
                to="/jobs"
                className="w-full sm:w-auto px-8 py-4 bg-white text-blue-700 rounded-lg text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transform transition"
              >
                Explore Jobs
              </Link>
              <Link
                to="/technologies"
                className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-700 hover:scale-105 transform transition"
              >
                Explore Technologies
              </Link>
            </div>
            <Link
              to="/news"
              className="inline-block mt-6 text-lg font-semibold text-cyan-200 hover:text-white underline underline-offset-4 transition"
            >
              Explore Tech News &rarr;
            </Link>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80"
              alt="Technology Hero"
              className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl object-cover scale-100 hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>
        {/* Decorative Blur Circle */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
        {features.map(({ icon: Icon, title, description, img }, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
            style={{ perspective: '600px' }}
          >
            <img
              src={img}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-3xl pointer-events-none select-none group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="relative z-10 bg-gradient-to-tr from-blue-500 to-teal-400 p-5 rounded-xl mb-6 shadow-lg">
              <Icon className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
            <p className="text-gray-700 text-center relative z-10">{description}</p>
          </div>
        ))}
      </section>

      {/* Call to Action Footer */}
      <section className="bg-gradient-to-r from-blue-700 to-teal-600 text-white py-16 sm:py-20 text-center shadow-xl">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 drop-shadow-lg">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="mb-8 sm:mb-10 max-w-2xl mx-auto text-lg drop-shadow-sm">
            Join thousands of professionals discovering the best tech career paths, learning resources, and job opportunities.
          </p>
          <Link
            to="/community"
            className="inline-block w-full sm:w-auto px-14 py-4 sm:py-5 bg-white text-blue-700 rounded-full font-semibold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition"
          >
            Join Our Community
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
