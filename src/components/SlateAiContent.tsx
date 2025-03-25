"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBuilding, FaClipboardList, FaTools, FaFileContract, FaUserLock, FaChartLine } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface SlateAiContentProps {
  blogPosts: any[];
}

export default function SlateAiContent({ blogPosts }: SlateAiContentProps) {
  const [isLoading, setIsLoading] = useState(true);
  const videoSectionRef = useRef<HTMLElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState('Latest');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVideoVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    return () => {
      if (videoSectionRef.current) {
        observer.unobserve(videoSectionRef.current);
      }
    };
  }, []);

  const scrollToVideo = () => {
    videoSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const filteredPosts = selectedCategory === 'Latest'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  // Rest of your component JSX remains the same
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Copy all the JSX from the original component */}
    </div>
  );
}