import React, { useEffect, useState } from "react";
import { User, Clock, ArrowRight } from "lucide-react";

interface Article {
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  source: { name: string };
  author: string | null;
}

const TechNewsPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiKey = import.meta.env.VITE_NEWSAPI_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      if (!apiKey) {
        setError("Missing News API key.");
        setLoading(false);
        return;
      }
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=12&apiKey=${apiKey}`
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch news: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setArticles(data.articles);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [apiKey]);

  if (loading) {
    return <p className="text-center mt-10">Loading latest tech news...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-600">Error: {error}</p>;
  }

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 px-4 sm:px-6 lg:px-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Latest Technology News
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Stay updated with the latest breakthroughs, product launches, and industry insights.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, idx) => (
            <a
              key={idx}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition transform hover:-translate-y-2 bg-gray-50"
            >
              {article.urlToImage ? (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4 text-xs sm:text-sm">
                  <span className="font-semibold text-blue-600 uppercase truncate max-w-[120px]">
                    {article.source.name}
                  </span>
                  <time className="text-gray-400" dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </time>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-3">
                  {article.title}
                </h3>
                <p className="text-gray-700 flex-grow line-clamp-4">
                  {article.description || "No description available."}
                </p>
                <div className="mt-4 flex flex-wrap items-center text-xs text-gray-500 space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span className="truncate max-w-[120px]">{article.author || "Unknown author"}</span>
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

export default TechNewsPage;
