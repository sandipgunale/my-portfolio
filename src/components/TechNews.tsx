import React from 'react';
import { Clock, ArrowRight, Tag, Eye, Calendar } from 'lucide-react';

const TechNews: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: "OpenAI Releases GPT-5: Revolutionary Breakthrough in AI Capabilities",
      excerpt: "The latest iteration promises unprecedented reasoning abilities and multimodal understanding, setting new benchmarks for artificial intelligence applications across industries.",
      category: "Artificial Intelligence",
      readTime: "5 min read",
      views: "12.5K",
      publishedAt: "2 hours ago",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      title: "Microsoft Azure Announces New Edge Computing Initiative",
      excerpt: "Azure Edge Zones expansion brings cloud computing closer to end users, reducing latency and improving application performance globally.",
      category: "Cloud Computing",
      readTime: "3 min read",
      views: "8.2K",
      publishedAt: "6 hours ago",
      image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Zero-Day Vulnerability Discovered in Major Enterprise Software",
      excerpt: "Security researchers identify critical vulnerability affecting millions of enterprise installations, patches available immediately.",
      category: "Cybersecurity",
      readTime: "4 min read",
      views: "15.1K",
      publishedAt: "12 hours ago",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Kubernetes 1.30 Released with Enhanced Security Features",
      excerpt: "Latest version introduces improved pod security standards and automated threat detection capabilities for container orchestration.",
      category: "DevOps",
      readTime: "6 min read",
      views: "6.8K",
      publishedAt: "1 day ago",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Tech Hiring Surge: Software Engineers in High Demand",
      excerpt: "Q4 2024 report shows unprecedented demand for software engineers, with salaries increasing 15% year-over-year across all experience levels.",
      category: "Career Insights",
      readTime: "7 min read",
      views: "18.9K",
      publishedAt: "2 days ago",
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Quantum Computing Breakthrough: IBM's 1000-Qubit Processor",
      excerpt: "IBM unveils revolutionary quantum processor that could accelerate drug discovery, financial modeling, and cryptography applications.",
      category: "Emerging Tech",
      readTime: "8 min read",
      views: "11.3K",
      publishedAt: "3 days ago",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Artificial Intelligence": "bg-purple-100 text-purple-800",
      "Cloud Computing": "bg-blue-100 text-blue-800",
      "Cybersecurity": "bg-red-100 text-red-800",
      "DevOps": "bg-green-100 text-green-800",
      "Career Insights": "bg-orange-100 text-orange-800",
      "Emerging Tech": "bg-teal-100 text-teal-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Tech News & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the most recent developments in technology and career trends
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          {newsArticles.filter(article => article.featured).map((article) => (
            <div key={article.id} className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 text-white">
                  <div className="flex items-center mb-4">
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="ml-3 text-sm opacity-75 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.publishedAt}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 leading-tight">{article.title}</h3>
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm opacity-75">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </span>
                      <span className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {article.views} views
                      </span>
                    </div>
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center space-x-2">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.filter(article => !article.featured).map((article) => (
            <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                    <Tag className="h-3 w-3 inline mr-1" />
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.publishedAt}
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {article.views}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <button className="flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 group">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechNews;