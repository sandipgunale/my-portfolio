import React from 'react';
import { Brain, Cloud, Shield, GitBranch, Database, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

// Example images URLs — replace with your own or free assets
const heroImage = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80";
const decorativeBlob1 = "https://www.transparenttextures.com/patterns/diagmonds-light.png";
const decorativeBlob2 = "https://www.transparenttextures.com/patterns/arches.png";

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
    <section className="min-h-screen bg-gray-50 relative overflow-hidden flex flex-col">
      
      {/* Decorative background blobs */}
      <img
        src={decorativeBlob1}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-72 opacity-20 -translate-x-20 -translate-y-20 pointer-events-none select-none"
      />
      <img
        src={decorativeBlob2}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-96 opacity-15 translate-x-32 translate-y-32 pointer-events-none select-none"
      />

      {/* Hero Section */}
      <div className="flex-grow flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center relative z-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6 drop-shadow-lg">
          Unlock Your Future in Technology
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto drop-shadow-sm">
          Dive into the latest trends, career opportunities, and resources across AI, Cloud, Cybersecurity, DevOps, Big Data, and Mobile Development.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/jobs"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Explore Jobs
          </Link>
          <Link
            to="/technologies"
            className="px-8 py-4 border border-blue-600 text-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
          >
            Explore Technologies
          </Link>
        </div>

        {/* Hero image */}
        <div className="mt-16">
          <img
            src={heroImage}
            alt="Technology Hero"
            className="mx-auto rounded-xl shadow-lg max-w-full max-h-96 object-cover"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20 mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What You Can Discover
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map(({ icon: Icon, title, description, img }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition relative overflow-hidden"
              >
                <img
                  src={img}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-2xl pointer-events-none select-none"
                  loading="lazy"
                />
                <div className="relative z-10 bg-gradient-to-tr from-blue-500 to-teal-400 p-4 rounded-xl mb-6 shadow-lg">
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 relative z-10">{title}</h3>
                <p className="text-gray-600 text-center relative z-10">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Footer */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
          <h2 className="text-3xl font-bold mb-4 drop-shadow-lg">Ready to Start Your Tech Journey?</h2>
          <p className="mb-8 max-w-xl mx-auto text-lg drop-shadow-sm">
            Join thousands of professionals discovering the best tech career paths, learning resources, and job opportunities.
          </p>
          <Link
            to="/community"
            className="inline-block px-10 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition"
          >
            Join Our Community
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
