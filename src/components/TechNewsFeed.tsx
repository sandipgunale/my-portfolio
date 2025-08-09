// src/components/TechNewsFeed.tsx
import React, { useEffect, useState } from 'react';

const TechNewsFeed: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?q=information technology OR IT OR software OR cybersecurity&sortBy=publishedAt&apiKey=YOUR_API_KEY'
    )
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch news:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading latest news...</p>;

  return (
    <section className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Latest IT News</h2>
      {articles.length === 0 && <p>No news available.</p>}
      <ul>
        {articles.map((article, idx) => (
          <li key={idx} className="mb-4 border-b pb-4">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
              {article.title}
            </a>
            <p className="text-gray-700">{article.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechNewsFeed;
