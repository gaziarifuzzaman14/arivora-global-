'use client';

import { Beaker, Atom, Microscope, Zap } from 'lucide-react';

const scienceArticles = [
  {
    id: 1,
    title: 'Quantum Computing Revolution',
    description: 'Exploring the future of quantum computers and their impact on science.',
    icon: Atom,
    date: '2024-01-15',
    category: 'Physics',
  },
  {
    id: 2,
    title: 'DNA Editing and CRISPR',
    description: 'Understanding the breakthrough in genetic engineering.',
    icon: Microscope,
    date: '2024-01-10',
    category: 'Biology',
  },
  {
    id: 3,
    title: 'The Physics of Black Holes',
    description: 'Deep dive into the mysteries of black holes and space-time.',
    icon: Zap,
    date: '2024-01-05',
    category: 'Astronomy',
  },
  {
    id: 4,
    title: 'Chemical Reactions Explained',
    description: 'Understanding the fundamentals of chemistry.',
    icon: Beaker,
    date: '2024-01-01',
    category: 'Chemistry',
  },
];

export default function Science() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A]">
      <section className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">🔬 Science Hub</h1>
          <p className="text-xl text-blue-100">Explore the wonders of scientific discovery and research</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scienceArticles.map((article) => {
            const IconComponent = article.icon;
            return (
              <article
                key={article.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <IconComponent className="w-8 h-8 text-[#2563EB]" />
                  <span className="text-sm font-semibold text-[#06B6D4] bg-cyan-100 dark:bg-cyan-900 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{article.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                  <a href="#" className="text-[#2563EB] hover:text-[#06B6D4] font-semibold">
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