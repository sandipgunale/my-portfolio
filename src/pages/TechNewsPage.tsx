import React, { useEffect, useState } from 'react';
import { User, Clock, ArrowRight } from 'lucide-react';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  author: string | null;
  publishedAt: string;
  source: { name: string };
}

const TechNewsPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_NEWSAPI_KEY;
        if (!apiKey) throw new Error('API key is missing');

        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=9&apiKey=${apiKey}`
        );
        const data = await res.json();

        if (data.status === 'ok') {
          setArticles(data.articles);
        } else {
          setError(data.message || 'Failed to fetch news');
        }
      } catch (err) {
        setError((err as Error).message || 'Error fetching news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p className="text-center py-10">Loading news...</p>;

  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;

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
          {articles.map((article, idx) => (
            <a
              key={idx}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition transform hover:-translate-y-2 bg-gray-50"
            >
              <img
                src={article.urlToImage || '/fallback-image.jpg'}
                alt={article.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold text-blue-600 uppercase">
                    {article.source.name}
                  </span>
                  <time className="text-xs text-gray-400" dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </time>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-700 flex-grow">{article.description}</p>
                <div className="mt-4 flex items-center text-xs text-gray-500 space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{article.author ?? 'Unknown'}</span>
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
