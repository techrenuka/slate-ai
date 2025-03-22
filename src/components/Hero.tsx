'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
<section className="px-0">
  <div className="relative h-screen overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="absolute top-1/2 left-1/2 min-w-full min-h-screen w-auto h-auto z-10 -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-500"
    >
      <source src="/video/ai-background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    
    <div className="absolute inset-0 z-20 bg-black/60"></div>
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-30 h-full flex justify-center items-center text-center text-white p-5"
    >
      <div className="lg:h-2/5 h-1/2 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full text-[#00D188] pb-2 text-2xl font-bold"
          >
            Your Trusted&nbsp;AI&nbsp;Partner
          </motion.h3>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full text-5xl lg:text-6xl font-bold lg:leading-tight"
          >
            In the <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent"
            >age-of-AI</motion.span>
            <br />Let's make AI Move together
          </motion.h1>
        </div>
      </div>
    </motion.div>
  </div>
</section>
    
  );
}

export default Hero;
