import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  X,
} from "lucide-react";

interface FooterInfo {
  [key: string]: string;
}

// Extended footer info descriptions
const pageInfos: FooterInfo = {
  "/technologies/ai":
    "Explore cutting-edge AI technologies including Machine Learning, NLP, and Computer Vision.",
  "/technologies/cloud":
    "Learn about cloud computing platforms and services to scale your applications.",
  "/technologies/blockchain":
    "Discover blockchain technology fundamentals and decentralized applications.",
  "/career/job-search":
    "Find your dream job with curated listings, tips, and search tools.",
  "/career/internships":
    "Explore valuable internship opportunities to gain real-world experience.",
  "/career/resume-tips":
    "Get expert advice to create an impressive resume that stands out.",
  "/company/about":
    "Learn about our mission, vision, and the team driving TechPortal forward.",
  "/company/careers":
    "Join our team! See current openings and what it’s like working at TechPortal.",
  "/company/blog":
    "Read articles, news, and insights from our team and industry experts.",
  "/support/help-center":
    "Find answers to FAQs and detailed user guides.",
  "/support/contact-us":
    "Get in touch with our support team for assistance.",
  "/support/feedback":
    "Share your feedback to help us improve your experience.",
  "/privacy-policy":
    "Review our commitment to protecting your personal information.",
  "/terms-of-service":
    "Understand the terms and conditions of using TechPortal.",
  "/cookie-policy":
    "Learn how we use cookies to enhance your experience.",
};

const Footer: React.FC = () => {
  const [activeInfoKey, setActiveInfoKey] = useState<string | null>(null);

  const footerSections = [
    {
      title: "Technologies",
      links: [
        { name: "Artificial Intelligence", path: "/technologies/ai" },
        { name: "Cloud Computing", path: "/technologies/cloud" },
        { name: "Blockchain", path: "/technologies/blockchain" },
      ],
    },
    {
      title: "Career Resources",
      links: [
        { name: "Job Search", path: "/career/job-search" },
        { name: "Internships", path: "/career/internships" },
        { name: "Resume Tips", path: "/career/resume-tips" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/company/about" },
        { name: "Careers", path: "/company/careers" },
        { name: "Blog", path: "/company/blog" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "/support/help-center" },
        { name: "Contact Us", path: "/support/contact-us" },
        { name: "Feedback", path: "/support/feedback" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Cookie Policy", path: "/cookie-policy" },
      ],
    },
  ];

  const handleLinkClick = (path: string) => {
    setActiveInfoKey((prev) => (prev === path ? null : path));
  };

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  TechPortal
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your comprehensive resource for technology insights, career
                guidance, and job market trends in the IT industry.
              </p>

              <div className="space-y-3 mb-6 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4" />
                  <span>hello@techportal.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4" />
                  <span>+91 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4" />
                  <span>Maharashtra, India</span>
                </div>
              </div>

              <div className="flex space-x-4">
                {[Github, Twitter, Linkedin, Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    aria-label="Social media link"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <button
                        onClick={() => handleLinkClick(link.path)}
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                        aria-expanded={activeInfoKey === link.path}
                        aria-controls={`footer-info-${i}`}
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold mb-2">
                Stay Updated with Tech Trends
              </h4>
              <p className="text-blue-100 mb-6">
                Get weekly insights on technology and career opportunities
              </p>

              <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                />
                <button
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
                  onClick={() => alert("Subscribed successfully!")}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TechPortal. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Crafted with ❤️ by{" "}
              <span className="font-semibold text-blue-400">Sandip Gunale</span>
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Info box below footer */}
      {activeInfoKey && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-gray-800 text-white rounded-b-lg shadow-lg mt-[-1px] relative z-20">
          <div className="flex justify-between items-start">
            <p className="max-w-4xl text-sm sm:text-base">
              {pageInfos[activeInfoKey] || "Information not available."}
            </p>
            <button
              aria-label="Close info"
              onClick={() => setActiveInfoKey(null)}
              className="ml-4 p-1 hover:bg-gray-700 rounded"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
