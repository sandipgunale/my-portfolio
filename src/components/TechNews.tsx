import React from 'react';
import { User, Clock , ArrowRight} from 'lucide-react';

const newsArticles = [
  {
    title: "AI Breakthrough: GPT-5 Released",
    summary:
      "OpenAI has announced GPT-5, the next-generation language model, with improved reasoning, safety, and context understanding capabilities.",
    date: "August 1, 2025",
    author: "Jane Doe",
    category: "Artificial Intelligence",
    url: "https://openai.com/index/gpt-5-new-era-of-work/",
    imageUrl: "/images/OpenAI-ChatGPT-Sam-Altman-GPT-5-AI-model-1024x577.jpg",
  },
  {
    title: "Microsoft Azure Expands Cloud Regions",
    summary:
      "Microsoft Azure adds new data center regions across Asia and Europe to improve latency and data residency compliance for customers.",
    date: "July 28, 2025",
    author: "John Smith",
    category: "Cloud Computing",
    url: "https://azure.microsoft.com/en-us/blog/",
    imageUrl: "/images/Microsoft-azure-cloud-migration.jpg.webp",
  },
  {
    title: "Cybersecurity Threats in 2025: What to Watch",
    summary:
      "Experts warn about increasing ransomware and AI-powered phishing attacks targeting enterprises worldwide.",
    date: "July 30, 2025",
    author: "Alice Johnson",
    category: "Cybersecurity",
    url: "https://cybersecuritynews.com/2025-threats",
    imageUrl: "/images/cyberespionage-1024x585.jpg",
  },
  {
    title: "DevOps Best Practices for Scalable CI/CD",
    summary:
      "Learn how top companies are optimizing their continuous integration and deployment pipelines using Kubernetes and GitOps.",
    date: "August 2, 2025",
    author: "Michael Lee",
    category: "DevOps",
    url: "https://devops.com/best-practices",
    imageUrl: "/images/How-to-hire-DevOps-Engineers.jpg",
  },
  {
    title: "Big Data Analytics in Retail",
    summary:
      "Retailers are leveraging big data analytics to personalize shopping experiences and optimize supply chains.",
    date: "July 29, 2025",
    author: "Emily Davis",
    category: "Big Data",
    url: "https://bigdataretail.com/analytics",
    imageUrl: "/images/WhatisBigData.jpg",
  },
];

const TechNews: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Latest Technology News</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Stay updated with the latest breakthroughs, product launches, and industry insights.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article, idx) => (
            <a
              key={idx}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition transform hover:-translate-y-2 bg-gray-50"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold text-blue-600 uppercase">{article.category}</span>
                  <time className="text-xs text-gray-400" dateTime={article.date}>
                    {article.date}
                  </time>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-700 flex-grow">{article.summary}</p>
                <div className="mt-4 flex items-center text-xs text-gray-500 space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Reading time ~5 mins</span>
                  </div>
                </div>
                <button className="mt-6 text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 self-start">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechNews;
