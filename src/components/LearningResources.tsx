import React from 'react';
import { BookOpen, Play, Download, Star, Clock, Users, Award } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const LearningResources: React.FC = () => {
  const { user } = useAuth();

  const courses = [
    {
      id: 1,
      title: "Complete React Developer Course",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 12500,
      duration: "40 hours",
      level: "Intermediate",
      price: "$89",
      image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Master React from basics to advanced concepts including hooks, context, and testing.",
      topics: ["React Hooks", "State Management", "Testing", "Performance"]
    },
    {
      id: 2,
      title: "AWS Cloud Practitioner Certification",
      instructor: "Mike Chen",
      rating: 4.9,
      students: 8900,
      duration: "25 hours",
      level: "Beginner",
      price: "$79",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Prepare for AWS Cloud Practitioner certification with hands-on labs and practice exams.",
      topics: ["Cloud Concepts", "AWS Services", "Security", "Pricing"]
    },
    {
      id: 3,
      title: "Python for Data Science",
      instructor: "Dr. Emily Rodriguez",
      rating: 4.7,
      students: 15200,
      duration: "35 hours",
      level: "Beginner",
      price: "$99",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Learn Python programming and data analysis with pandas, numpy, and matplotlib.",
      topics: ["Python Basics", "Data Analysis", "Visualization", "Machine Learning"]
    },
    {
      id: 4,
      title: "Cybersecurity Fundamentals",
      instructor: "Alex Thompson",
      rating: 4.6,
      students: 6700,
      duration: "30 hours",
      level: "Beginner",
      price: "$69",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Essential cybersecurity concepts, threat detection, and incident response.",
      topics: ["Network Security", "Threat Analysis", "Incident Response", "Compliance"]
    },
    {
      id: 5,
      title: "DevOps with Docker & Kubernetes",
      instructor: "James Wilson",
      rating: 4.8,
      students: 9800,
      duration: "45 hours",
      level: "Advanced",
      price: "$119",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Master containerization and orchestration with Docker and Kubernetes.",
      topics: ["Docker", "Kubernetes", "CI/CD", "Monitoring"]
    },
    {
      id: 6,
      title: "Mobile App Development with React Native",
      instructor: "Lisa Park",
      rating: 4.5,
      students: 7300,
      duration: "38 hours",
      level: "Intermediate",
      price: "$95",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Build cross-platform mobile apps with React Native and publish to app stores.",
      topics: ["React Native", "Navigation", "API Integration", "App Store Deployment"]
    }
  ];

  const freebies = [
    {
      title: "JavaScript ES6+ Cheat Sheet",
      type: "PDF Guide",
      downloads: "25K",
      icon: Download
    },
    {
      title: "Git Commands Reference",
      type: "Quick Reference",
      downloads: "18K",
      icon: BookOpen
    },
    {
      title: "CSS Grid Layout Tutorial",
      type: "Video Series",
      downloads: "12K",
      icon: Play
    },
    {
      title: "API Design Best Practices",
      type: "eBook",
      downloads: "8K",
      icon: BookOpen
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Learning Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advance your skills with our comprehensive courses and free resources
          </p>
        </div>

        {/* Featured Courses */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Courses</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                      <span className="text-sm text-gray-500">({course.students.toLocaleString()})</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{course.price}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.topics.slice(0, 3).map((topic, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  {user ? (
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                      Enroll Now
                    </button>
                  ) : (
                    <button className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg cursor-not-allowed font-semibold">
                      Sign in to Enroll
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Free Resources */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Resources</h3>
            <p className="text-gray-600">Download these helpful resources to boost your learning</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {freebies.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <resource.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{resource.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{resource.type}</p>
                <div className="flex items-center justify-center space-x-1 text-sm text-gray-500 mb-4">
                  <Download className="h-4 w-4" />
                  <span>{resource.downloads} downloads</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                  Download Free
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <Award className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Structured Learning Paths</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Follow our curated learning paths designed by industry experts to master specific technologies and advance your career.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
              Explore Learning Paths
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningResources;