'use client';

import { Newspaper, Lightbulb, TrendingUp, AlertCircle } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'Breaking: New Scientific Discovery',
    description: 'Scientists announce groundbreaking research findings.',
    icon: AlertCircle,
    date: '2024-01-20',
    category: 'Breaking News',
  },
  {
    id: 2,
    title: 'Tech Industry Updates',
    description: 'Latest news from major technology companies.',
    icon: TrendingUp,
    date: '2024-01-18',
    category: 'Tech News',
  },
  {
    id: 3,
    title: 'Innovation in Education',
    description: 'How technology is transforming education.',
    icon: Lightbulb,
    date: '2024-01-15',
    category: 'Education',
  },
  {
    id: 4,
    title: 'Global Science Update',
    description: 'International scientific collaboration news.',
    icon: Newspaper,
    date: '2024-01-12',
    category: 'Global News',
  },
];

export default function News() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A]">
      <section className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">📰 News & Updates</h1>
          <p className="text-xl text-red-100">Stay informed with the latest global news and updates</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticles.map((article) => {
            const IconComponent = article.icon;
            return (
              <article
                key={article.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition border-l-4 border-red-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <IconComponent className="w-8 h-8 text-red-500" />
                  <span className="text-sm font-semibold text-red-600 bg-red-100 dark:bg-red-900 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{article.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                  <a href="#" className="text-red-500 hover:text-red-600 font-semibold">
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