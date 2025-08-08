import React from 'react';

const TechnologyDetailPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Artificial Intelligence</h1>
      <p className="text-gray-600 mb-6">
        Artificial Intelligence (AI) is transforming industries by automating decision-making,
        enhancing customer experiences, and unlocking new business models.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Machine Learning & Deep Learning</li>
        <li>AI in Healthcare, Finance, and Retail</li>
        <li>Natural Language Processing (NLP)</li>
        <li>AI Tools: TensorFlow, PyTorch, Scikit-learn</li>
      </ul>
    </div>
  );
};

export default TechnologyDetailPage;
