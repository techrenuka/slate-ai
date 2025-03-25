"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { BsArrowLeft } from 'react-icons/bs';

import { blogPosts } from '../data';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link 
            href="/blogs" 
            className="text-blue-400 hover:text-blue-300 flex items-center justify-center gap-2"
          >
            <BsArrowLeft /> Back to blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back Button */}
        <Link 
          href="/blogs" 
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <BsArrowLeft className="mr-2" /> Back to blogs
        </Link>

        {/* Hero Image */}
        <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <span className="text-lg font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent">
          {post.title}
        </h1>

        {/* Date */}
        <div className="text-gray-400 mb-8">
          {post.date}
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed mb-6">
            {post.excerpt}
          </p>
          
          {/* Example content - you can replace this with actual blog content */}
          <div className="space-y-6">
            <p className="text-gray-300">
              In today's rapidly evolving technological landscape, staying ahead of the curve is more important than ever. As we delve deeper into the digital age, the intersection of innovation and practical application becomes increasingly crucial for businesses and individuals alike.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
              Key Takeaways
            </h2>

            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Understanding the fundamentals of modern technology</li>
              <li>Implementing best practices in development</li>
              <li>Staying updated with industry trends</li>
              <li>Focusing on user experience and accessibility</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
              Looking Ahead
            </h2>

            <p className="text-gray-300">
              As we look to the future, it's clear that the pace of technological advancement shows no signs of slowing. Staying informed and adaptable will be key to success in this ever-evolving landscape.
            </p>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-white font-semibold mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-[#181818] text-white rounded-lg hover:bg-[#222222] transition-colors">
              Twitter
            </button>
            <button className="px-4 py-2 bg-[#181818] text-white rounded-lg hover:bg-[#222222] transition-colors">
              LinkedIn
            </button>
            <button className="px-4 py-2 bg-[#181818] text-white rounded-lg hover:bg-[#222222] transition-colors">
              Facebook
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}