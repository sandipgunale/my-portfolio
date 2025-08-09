import React from "react";
import {
  MapPin,
  DollarSign,
  Clock,
  Briefcase,
  Star,
  Filter,
  Search,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const jobListings = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120K - $160K",
    remote: true,
    posted: "2 days ago",
    description:
      "We're looking for an experienced React developer to join our growing team focused on building scalable web applications with modern technologies.",
    requirements: [
      "5+ years React experience",
      "TypeScript proficiency",
      "Team leadership",
      "REST APIs",
    ],
    logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100",
    featured: true,
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    company: "CloudTech Solutions",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140K - $180K",
    remote: false,
    posted: "1 day ago",
    description:
      "Design and implement scalable, secure cloud infrastructure solutions across AWS, Azure, and GCP platforms.",
    requirements: [
      "AWS certification",
      "5+ years cloud experience",
      "Architecture design",
      "Infrastructure as Code",
    ],
    logo: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "StartupXYZ",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$100K - $130K",
    remote: true,
    posted: "3 days ago",
    description:
      "Help build and maintain our CI/CD pipelines, container orchestration with Kubernetes, and cloud infrastructure.",
    requirements: ["Docker/Kubernetes", "CI/CD experience", "Linux administration"],
    logo: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DataDriven Corp",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110K - $150K",
    remote: true,
    posted: "4 days ago",
    description:
      "Analyze complex datasets, develop machine learning models, and generate actionable insights for business growth.",
    requirements: ["Python/R proficiency", "Machine learning", "Statistics background"],
    logo: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    id: 5,
    title: "Cybersecurity Analyst",
    company: "SecureNet Inc.",
    location: "Washington, DC",
    type: "Full-time",
    salary: "$90K - $120K",
    remote: false,
    posted: "5 days ago",
    description:
      "Monitor and respond to security threats, conduct vulnerability assessments, and implement incident response strategies.",
    requirements: ["Security certifications", "Incident response", "Network security"],
    logo: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    id: 6,
    title: "Mobile App Developer",
    company: "MobileFirst Ltd.",
    location: "Los Angeles, CA",
    type: "Contract",
    salary: "$80K - $110K",
    remote: true,
    posted: "1 week ago",
    description:
      "Develop cross-platform mobile applications using React Native, collaborating closely with UX/UI designers and backend teams.",
    requirements: ["React Native", "iOS/Android development", "API integration"],
    logo: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    id: 7,
    title: "Machine Learning Engineer",
    company: "AI Innovations",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$130K - $170K",
    remote: true,
    posted: "3 days ago",
    description:
      "Develop and deploy ML models for real-time applications, optimizing model performance and scalability.",
    requirements: [
      "Python, TensorFlow/PyTorch",
      "ML algorithms",
      "Data preprocessing",
      "Cloud deployment",
    ],
    logo: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    id: 8,
    title: "Frontend Engineer",
    company: "NextGen Apps",
    location: "Remote",
    type: "Full-time",
    salary: "$100K - $140K",
    remote: true,
    posted: "6 days ago",
    description:
      "Build intuitive user interfaces with React, Redux, and Tailwind CSS for high-performance web apps.",
    requirements: ["React", "Redux", "CSS-in-JS", "Responsive design"],
    logo: "https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&w=100",
    featured: true,
  },
];

const JobOpportunities: React.FC = () => {
  const { user } = useAuth();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Job Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your next career opportunity with top tech companies
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search jobs, companies, or skills..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-3">
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Locations</option>
                <option>Remote</option>
                <option>San Francisco</option>
                <option>New York</option>
                <option>Seattle</option>
                <option>Austin</option>
                <option>Boston</option>
                <option>Los Angeles</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Types</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobListings.map((job) => (
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
                      <DollarSign className="h-5 w-5" />
                      <span>{job.salary}</span>
                    </div>
                    {user ? (
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                        Apply Now
                      </button>
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
