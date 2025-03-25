"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { blogPosts, categories, BlogPost } from './data';

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('Latest');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = selectedCategory === 'Latest' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Categories Skeleton */}
          <nav className="flex overflow-x-auto whitespace-nowrap pb-2 mb-12 border-b border-gray-800 hide-scrollbar">
            <div className="flex gap-4 md:gap-8 px-4 md:px-0 min-w-full md:min-w-0">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className="h-8 w-24 bg-[#181818] rounded-lg animate-pulse"
                />
              ))}
            </div>
          </nav>

          {/* Blog Grid Skeleton */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="bg-[#181818] rounded-lg overflow-hidden">
                <div className="relative h-48 mb-4 bg-[#222222] animate-pulse" />
                <div className="p-6">
                  <div className="w-24 h-6 bg-[#222222] rounded-lg animate-pulse mb-4" />
                  <div className="w-full h-8 bg-[#222222] rounded-lg animate-pulse mb-4" />
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-[#222222] rounded-lg animate-pulse" />
                    <div className="w-3/4 h-4 bg-[#222222] rounded-lg animate-pulse" />
                  </div>
                  <div className="mt-4 w-20 h-4 bg-[#222222] rounded-lg animate-pulse" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Categories */}
        <nav className="flex overflow-x-auto whitespace-nowrap pb-2 mb-12 border-b border-gray-800 hide-scrollbar">
          <div className="flex gap-4 md:gap-8 px-4 md:px-0 min-w-full md:min-w-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm md:text-lg font-medium transition-colors flex-shrink-0 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent font-medium'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
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