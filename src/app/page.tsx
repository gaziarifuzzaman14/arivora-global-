'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Zap, Beaker, BookOpen, Newspaper, Users } from 'lucide-react';

const categories = [
  {
    id: 'science',
    title: '🔬 Science Hub',
    description: 'Explore fundamental sciences and discoveries',
    icon: Beaker,
    color: 'from-blue-500 to-cyan-500',
    href: '/science',
  },
  {
    id: 'technology',
    title: '💻 Technology & Innovation',
    description: 'Latest tech trends and innovations',
    icon: Zap,
    color: 'from-purple-500 to-blue-500',
    href: '/technology',
  },
  {
    id: 'physiology',
    title: '🧬 Physiology',
    description: 'Human body and biological systems',
    icon: Users,
    color: 'from-green-500 to-cyan-500',
    href: '/physiology',
  },
  {
    id: 'history',
    title: '📚 History & Research',
    description: 'Historical events and research findings',
    icon: BookOpen,
    color: 'from-amber-500 to-orange-500',
    href: '/history',
  },
  {
    id: 'news',
    title: '📰 News & Updates',
    description: 'Latest news and global updates',
    icon: Newspaper,
    color: 'from-red-500 to-pink-500',
    href: '/news',
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full">
      <section className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#06B6D4] rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#2563EB] rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#06B6D4] via-[#2563EB] to-[#06B6D4]">
              Arivora Global
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your comprehensive educational hub for Science, Technology, History, Research & News
            </p>

            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, research..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-[#06B6D4] transition"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white dark:bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#0F172A] dark:text-white">
            Explore Our Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link key={category.id} href={category.href}>
                  <div className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition`}></div>

                    <div className="relative p-8 h-full flex flex-col">
                      <div className="mb-4">
                        <IconComponent className="w-12 h-12 text-[#2563EB] dark:text-[#06B6D4] group-hover:scale-110 transition" />
                      </div>

                      <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-3 group-hover:text-[#2563EB] transition">
                        {category.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 flex-grow mb-6">
                        {category.description}
                      </p>

                      <div className="flex items-center text-[#2563EB] dark:text-[#06B6D4] group-hover:gap-2 transition">
                        <span className="font-semibold">Explore</span>
                        <span className="group-hover:translate-x-2 transition">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Choose Arivora Global?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Comprehensive Content', description: 'Deep dive into science, technology, history and more' },
              { title: 'Expert Curated', description: 'Carefully selected articles and research from trusted sources' },
              { title: 'Always Updated', description: 'Fresh news and latest discoveries delivered regularly' },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold mb-4">{i + 1}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}