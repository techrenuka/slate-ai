'use client';  // Add this to specify client-side component

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
<section className="px-0">
  <div className="relative h-screen overflow-hidden">
    <video
      autoPlay
      muted
      loop
      className="absolute top-1/2 left-1/2 min-w-full min-h-screen w-auto h-auto z-10 -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-500"
    >
      <source src="/video/hero-ai-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    
    <div className="absolute inset-0 z-20 bg-black/60"></div>
    
    <div className="relative z-30 h-full flex justify-center items-center text-center text-white p-5">
      <div className="lg:h-2/5 h-1/2 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h3 className="w-full text-[#00D188] pb-2 text-2xl font-bold">
            Your Trusted&nbsp;AI&nbsp;Partner
          </h3>
          <h1 className="w-full text-5xl lg:text-6xl font-bold lg:leading-tight">
            In the <span className="bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent">age-of-AI</span>
            <br />Let's make AI Move together
          </h1>
        </div>
      </div>
    </div>
  </div>
</section>
    
  );
}

export default Hero;
