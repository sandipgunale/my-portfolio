import React from 'react';
import { Brain, Cloud, Shield, GitBranch, Database, Smartphone, ArrowRight, TrendingUp } from 'lucide-react';

const TechCategories: React.FC = () => {
  const categories = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Machine learning, deep learning, and neural networks revolutionizing industries",
      trends: ["ChatGPT Integration", "Computer Vision", "Natural Language Processing"],
      growth: "+45%",
      jobs: "12.5K",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "AWS, Azure, and GCP dominating the enterprise infrastructure landscape",
      trends: ["Serverless Architecture", "Multi-Cloud Strategy", "Edge Computing"],
      growth: "+38%",
      jobs: "8.2K",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Zero-trust security models and advanced threat detection systems",
      trends: ["Zero Trust Security", "Ransomware Protection", "AI-Powered Threats"],
      growth: "+52%",
      jobs: "9.8K",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600"
    },
    {
      icon: GitBranch,
      title: "DevOps & Automation",
      description: "CI/CD pipelines, containerization, and infrastructure as code",
      trends: ["Kubernetes Adoption", "GitOps Workflows", "Site Reliability Engineering"],
      growth: "+41%",
      jobs: "7.3K",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      icon: Database,
      title: "Big Data & Analytics",
      description: "Real-time data processing and predictive analytics solutions",
      trends: ["Real-time Analytics", "Data Mesh Architecture", "Streaming Platforms"],
      growth: "+35%",
      jobs: "6.1K",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform solutions and native app development trends",
      trends: ["Flutter Growth", "5G Applications", "AR/VR Integration"],
      growth: "+29%",
      jobs: "5.4K",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technology Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the latest developments and career opportunities across major technology domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-xl ${category.bgColor}`}>
                    <category.icon className={`h-8 w-8 ${category.textColor}`} />
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center text-green-600 font-bold text-lg">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>{category.growth}</span>
                    </div>
                    <div className="text-xs text-gray-500">Growth</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Hot Trends:</h4>
                  <div className="space-y-2">
                    {category.trends.map((trend, trendIndex) => (
                      <div key={trendIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                        {trend}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{category.jobs}</div>
                    <div className="text-xs text-gray-500">Open Positions</div>
                  </div>
                  
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechCategories;