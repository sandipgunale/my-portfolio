import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Briefcase,
  Star,
  Search,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const jobListings = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "Infosys Technologies",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    salary: "₹12L – ₹18L per annum",
    remote: true,
    posted: "2 days ago",
    description:
      "We are seeking an experienced React developer to work on scalable enterprise web applications for global clients.",
    requirements: [
      "5+ years React experience",
      "TypeScript proficiency",
      "Team leadership",
      "REST APIs",
    ],
    logo: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=100",
    featured: true,
    applyLink: "https://careers.infosys.com",
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    company: "Tata Consultancy Services (TCS)",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    salary: "₹18L – ₹24L per annum",
    remote: false,
    posted: "1 day ago",
    description:
      "Architect scalable cloud infrastructure solutions across AWS, Azure, and GCP for enterprise clients.",
    requirements: [
      "AWS certification",
      "5+ years cloud experience",
      "Architecture design",
      "Infrastructure as Code",
    ],
    logo: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=100",
    applyLink: "https://www.tcs.com/careers",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "Wipro Digital",
    location: "Pune, Maharashtra",
    type: "Full-time",
    salary: "₹10L – ₹15L per annum",
    remote: true,
    posted: "3 days ago",
    description:
      "Maintain CI/CD pipelines, manage Kubernetes clusters, and optimize cloud deployments for high availability.",
    requirements: ["Docker/Kubernetes", "CI/CD experience", "Linux administration"],
    logo: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100",
    applyLink: "https://careers.wipro.com",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Fractal Analytics",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    salary: "₹14L – ₹20L per annum",
    remote: true,
    posted: "4 days ago",
    description:
      "Work with complex datasets, create ML models, and generate insights for analytics-driven decision-making.",
    requirements: ["Python/R proficiency", "Machine learning", "Statistics background"],
    logo: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=100",
    applyLink: "https://fractal.ai/careers",
  },
  {
    id: 5,
    title: "Cybersecurity Analyst",
    company: "HCL Technologies",
    location: "Noida, Uttar Pradesh",
    type: "Full-time",
    salary: "₹9L – ₹13L per annum",
    remote: false,
    posted: "5 days ago",
    description:
      "Monitor security threats, conduct vulnerability assessments, and manage incident response.",
    requirements: ["Security certifications", "Incident response", "Network security"],
    logo: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=100",
    applyLink: "https://www.hcltech.com/careers",
  },
  {
    id: 6,
    title: "Mobile App Developer",
    company: "Zomato",
    location: "Gurgaon, Haryana",
    type: "Contract",
    salary: "₹8L – ₹12L per annum",
    remote: true,
    posted: "1 week ago",
    description:
      "Develop high-performance mobile apps using React Native and collaborate with design & backend teams.",
    requirements: ["React Native", "iOS/Android development", "API integration"],
    logo: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=100",
    applyLink: "https://www.zomato.com/careers",
  },
  {
    id: 7,
    title: "Machine Learning Engineer",
    company: "Flipkart",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    salary: "₹15L – ₹22L per annum",
    remote: true,
    posted: "3 days ago",
    description:
      "Design and deploy ML models for e-commerce applications, ensuring scalability and accuracy.",
    requirements: [
      "Python, TensorFlow/PyTorch",
      "ML algorithms",
      "Data preprocessing",
      "Cloud deployment",
    ],
    logo: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=100",
    applyLink: "https://www.flipkartcareers.com",
  },
  {
    id: 8,
    title: "Frontend Engineer",
    company: "Freshworks",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    salary: "₹10L – ₹16L per annum",
    remote: true,
    posted: "6 days ago",
    description:
      "Create user-friendly UIs with React, Redux, and Tailwind CSS for SaaS products used by global clients.",
    requirements: ["React", "Redux", "CSS-in-JS", "Responsive design"],
    logo: "https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&w=100",
    featured: true,
    applyLink: "https://www.freshworks.com/company/careers/",
  },
];

const JobOpportunities: React.FC = () => {
  const { user } = useAuth();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedType, setSelectedType] = useState("All Types");

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.requirements.some((req) =>
        req.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesLocation =
      selectedLocation === "All Locations" ||
      job.location.toLowerCase().includes(selectedLocation.toLowerCase());

    const matchesType =
      selectedType === "All Types" ||
      job.type.toLowerCase() === selectedType.toLowerCase();

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Job Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your next career opportunity with top tech companies in India
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search jobs, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-3">
              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>All Locations</option>
                <optgroup label="Karnataka">
                  <option>Bangalore</option>
                  <option>Mysore</option>
                </optgroup>
                <optgroup label="Telangana">
                  <option>Hyderabad</option>
                </optgroup>
                <optgroup label="Maharashtra">
                  <option>Pune</option>
                  <option>Mumbai</option>
                  <option>Nagpur</option>
                </optgroup>
                <optgroup label="Tamil Nadu">
                  <option>Chennai</option>
                  <option>Coimbatore</option>
                </optgroup>
                <optgroup label="Delhi NCR">
                  <option>Gurgaon</option>
                  <option>Noida</option>
                  <option>New Delhi</option>
                </optgroup>
                <optgroup label="West Bengal">
                  <option>Kolkata</option>
                </optgroup>
                <optgroup label="Other">
                  <option>Remote</option>
                </optgroup>
              </select>

              {/* Job Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>All Types</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                job.featured ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {job.featured && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4" />
                    <span className="text-sm font-medium">Featured Job</span>
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                      <p className="text-lg text-gray-700 mb-2">{job.company}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                          {job.remote && (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs ml-2">
                              Remote
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.posted}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center text-green-600 font-bold text-lg mb-2">
                    <span className="h-5 w-5 flex items-center justify-center"></span>
                    <span>{job.salary}</span>
                  </div>

                    {user ? (
                      <a
                        href={job.applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-block"
                      >
                        Apply Now
                      </a>
                    ) : (
                      <button className="bg-gray-300 text-gray-500 px-6 py-2 rounded-lg cursor-not-allowed">
                        Sign in to Apply
                      </button>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{job.description}</p>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center text-gray-500 mt-6">No jobs found</div>
        )}

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
            Load More Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobOpportunities;
