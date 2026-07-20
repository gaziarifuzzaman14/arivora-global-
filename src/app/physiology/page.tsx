'use client';

import { Users, Heart, Brain, Activity } from 'lucide-react';

const physiologyArticles = [
  {
    id: 1,
    title: 'Understanding the Human Brain',
    description: 'Neuroscience breakthroughs and brain function.',
    icon: Brain,
    date: '2024-01-17',
    category: 'Neuroscience',
  },
  {
    id: 2,
    title: 'The Cardiovascular System',
    description: 'How your heart and blood vessels work.',
    icon: Heart,
    date: '2024-01-14',
    category: 'Cardiology',
  },
  {
    id: 3,
    title: 'Exercise Physiology',
    description: 'How exercise affects your body.',
    icon: Activity,
    date: '2024-01-11',
    category: 'Fitness',
  },
  {
    id: 4,
    title: 'Human Anatomy Deep Dive',
    description: 'Comprehensive guide to body systems.',
    icon: Users,
    date: '2024-01-07',
    category: 'Anatomy',
  },
];

export default function Physiology() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A]">
      <section className="bg-gradient-to-r from-green-500 to-cyan-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">🧬 Physiology</h1>
          <p className="text-xl text-green-100">Explore the fascinating world of human biology</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {physiologyArticles.map((article) => {
            const IconComponent = article.icon;
            return (
              <article
                key={article.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <IconComponent className="w-8 h-8 text-green-500" />
                  <span className="text-sm font-semibold text-green-600 bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{article.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                  <a href="#" className="text-green-500 hover:text-green-600 font-semibold">
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