'use client';

import { BookOpen, Globe, Clock, Scroll } from 'lucide-react';

const historyArticles = [
  {
    id: 1,
    title: 'Ancient Civilizations',
    description: 'Exploring the great civilizations of the past.',
    icon: Scroll,
    date: '2024-01-19',
    category: 'Ancient History',
  },
  {
    id: 2,
    title: 'Industrial Revolution Impact',
    description: 'How the Industrial Revolution changed the world.',
    icon: Globe,
    date: '2024-01-13',
    category: 'Modern History',
  },
  {
    id: 3,
    title: 'Timeline of Scientific Discovery',
    description: 'Major scientific breakthroughs through history.',
    icon: Clock,
    date: '2024-01-09',
    category: 'Science History',
  },
  {
    id: 4,
    title: 'Historical Research Methods',
    description: 'How historians research and document history.',
    icon: BookOpen,
    date: '2024-01-06',
    category: 'Research',
  },
];

export default function History() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A]">
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">📚 History & Research</h1>
          <p className="text-xl text-amber-100">Learn from the past, understand the present</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {historyArticles.map((article) => {
            const IconComponent = article.icon;
            return (
              <article
                key={article.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <IconComponent className="w-8 h-8 text-amber-500" />
                  <span className="text-sm font-semibold text-amber-600 bg-amber-100 dark:bg-amber-900 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{article.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                  <a href="#" className="text-amber-500 hover:text-amber-600 font-semibold">
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