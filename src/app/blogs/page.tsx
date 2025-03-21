"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

const categories = ['Latest', 'Design', 'Development', 'Management', 'Marketing'];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'E-Learning App Design And How To Make It Better',
    excerpt: 'Kids and adults are becoming more and more tech-savvy, especially the kids who are used to all kinds of gadgets from a very early age.',
    date: 'March 15, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    category: 'Design'
  },
  {
    id: '2',
    title: 'How Apples M1 Chips Make macOS Development Much Less Costly',
    excerpt: 'The macOS market share is much smaller than iOS one. There are many reasons for that, but the main one is that consumers Apples main focus.',
    date: 'March 10, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Development'
  },
  {
    id: '3',
    title: 'How To Outsource Web Development And Web Design',
    excerpt: 'Everything is within reach of todays individual. All you need is phone or a laptop. We are no longer restricted by our location and have the ability to expand our influence beyond spatial.',
    date: 'March 8, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Management'
  },
  // Add more blog posts as needed
];

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('Latest');

  const filteredPosts = selectedCategory === 'Latest' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* Categories */}
        <nav className="flex gap-8 mb-12 border-b border-gray-800 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent font-medium'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Blog Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filteredPosts.map((post) => (
            <Link href={`/blogs/${post.id}`} key={post.id}>
              <motion.div 
                className="group cursor-pointer bg-[#181818] rounded-lg overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-48 mb-4 overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-lg font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-semibold text-white mt-2 mb-2 line-clamp-2 group-hover:bg-gradient-to-r group-hover:from-[#00a6ff] group-hover:via-[#ff5959] group-hover:to-[#ffc073] group-hover:bg-clip-text group-hover:text-transparent">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    {post.date}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}