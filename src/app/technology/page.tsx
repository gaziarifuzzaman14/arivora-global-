'use client';

import { Zap, Code, Smartphone, Cpu } from 'lucide-react';

const techArticles = [
  {
    id: 1,
    title: 'AI and Machine Learning Trends',
    description: 'The latest developments in artificial intelligence.',
    icon: Cpu,
    date: '2024-01-18',
    category: 'AI/ML',
  },
  {
    id: 2,
    title: 'Web Development 2024',
    description: 'Modern frameworks and best practices.',
    icon: Code,
    date: '2024-01-16',
    category: 'Web Dev',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Cross-platform frameworks and tools.',
    icon: Smartphone,
    date: '2024-01-12',
    category: 'Mobile',
  },
  {
    id: 4,
    title: 'Cloud Computing Innovations',
    description: 'Understanding cloud infrastructure.',
    icon: Zap,
    date: '2024-01-08',
    category: 'Cloud',
  },
];

export default function Technology() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A]">
      <section className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">💻 Technology & Innovation</h1>
          <p className="text-xl text-purple-100">Stay updated with the latest tech trends and innovations</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techArticles.map((article) => {
            const IconComponent = article.icon;
            return (
              <article
                key={article.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <IconComponent className="w-8 h-8 text-purple-500" />
                  <span className="text-sm font-semibold text-purple-600 bg-purple-100 dark:bg-purple-900 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{article.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                  <a href="#" className="text-purple-500 hover:text-purple-600 font-semibold">
                    Read More →
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}