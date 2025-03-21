'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full py-4 px-6 transition-all duration-300 ${scrolled ? 'bg-black backdrop-blur-sm' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center">
            <div className="text-white font-semibold text-xl">
              {/* <img src="/images/white-logo.png" alt="Logo" className="h-8 w-auto" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="120" height="40" viewBox="0 0 300.000000 101.000000" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#00a6ff', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#ff5959', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#ffc073', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <g transform="translate(0.000000,101.000000) scale(0.050000,-0.050000)" fill="url(#textGradient)" stroke="none">
                  <path d="M2305 1885 c-199 -7 -220 -18 -120 -65 90 -42 91 -48 93 -834 2 -764 -2 -800 -98 -819 -146 -29 -33 -52 260 -52 293 0 406 23 260 52 -97 19 -100 50 -100 924 l0 809 -55 -4 c-30 -2 -138 -7 -240 -11z"/>
                  <path d="M879 1824 c-164 -84 -712 -520 -748 -594 -49 -105 -37 -345 21 -424 86 -114 130 -126 804 -209 754 -93 716 -86 755 -146 33 -50 15 -119 -39 -156 -12 -8 -308 -15 -657 -15 -715 0 -715 0 -715 149 0 51 -10 72 -40 81 -22 7 -67 35 -100 63 l-60 51 0 -159 c0 -180 36 -257 158 -340 94 -62 1380 -71 1502 -10 210 106 232 410 38 538 -70 47 -137 59 -747 136 -759 95 -751 92 -751 250 0 76 10 103 55 145 115 107 629 476 663 476 44 0 691 -484 709 -530 7 -18 13 -82 13 -142 0 -86 7 -112 35 -122 19 -7 59 -29 88 -49 77 -54 77 -54 77 150 0 274 -16 297 -426 603 -418 314 -475 336 -635 254z"/>
                  <path d="M4390 1629 c-44 -14 -109 -27 -145 -27 l-65 -2 0 -150 0 -150 -90 0 c-49 0 -90 -9 -90 -20 0 -11 41 -20 90 -20 l90 0 1 -435 c0 -239 8 -474 18 -522 50 -262 430 -312 571 -76 59 99 31 122 -42 35 -55 -66 -139 -83 -184 -38 -17 17 -24 163 -24 530 l0 506 130 0 c73 0 130 9 130 20 0 11 -57 20 -130 20 l-130 0 0 180 c0 198 4 193 -130 149z"/>
                  <path d="M3156 1296 c-202 -54 -297 -259 -169 -368 175 -151 388 81 224 245 l-69 69 50 19 c182 69 290 -10 303 -222 13 -202 -11 -231 -268 -319 -314 -107 -416 -245 -337 -453 78 -204 360 -236 545 -61 52 49 65 55 65 27 0 -118 247 -179 412 -101 86 41 89 76 6 57 -94 -20 -97 -1 -98 471 0 501 -10 540 -159 615 -98 49 -358 60 -505 21z m344 -737 c0 -251 -34 -319 -159 -319 -208 0 -194 283 22 454 142 112 137 117 137 -135z"/>
                  <path d="M5227 1287 c-443 -157 -439 -1051 5 -1183 274 -81 561 50 637 291 20 64 -2 56 -100 -33 -245 -227 -529 -38 -529 352 l0 106 328 0 328 0 -10 85 c-41 353 -307 507 -659 382z m291 -50 c42 -45 82 -194 82 -308 l0 -69 -183 0 -182 0 13 102 c35 259 163 390 270 275z"/>
                </g>
              </svg>
            </div>
          </Link>
        </motion.div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden z-50 text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <motion.div
          initial={false}
          animate={{ x: mobileMenuOpen ? '0%' : '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed lg:hidden top-0 right-0 w-full h-screen bg-black/95 backdrop-blur-md z-40 flex items-center justify-center"
        >
          <nav className="flex flex-col items-center space-y-8">
            {[
              { href: '/about', label: 'About Us' },
              { href: '/models', label: 'Models' },
              { href: '/industries', label: 'Industries' },
              { href: '/ai-business', label: 'AI In Business' },
              { href: '/services', label: 'Services' },
              { href: '/blogs', label: 'Blogs' },
              { href: '/contact', label: 'Contact Us' },
              { href: '/slateai-app', label: 'Slate AI APP' },
            ].map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`text-white hover:text-[#00A6FF] transition-colors text-xl font-medium ${
                    link.href === '/slateai-app' ? 'border border-[#00A6FF] px-6 py-2 rounded-full hover:bg-gradient-to-r hover:from-[#00A6FF] hover:via-[#0066FF] hover:to-[#00A6FF] hover:border-transparent hover:shadow-[0_0_10px_#00A6FF]' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex lg:justify-center items-center space-x-8">
          {[
            { href: '/about', label: 'About Us' },
            { href: '/models', label: 'Models' },
            { href: '/industries', label: 'Industries' },
            { href: '/ai-business', label: 'AI In Business' },
            { href: '/services', label: 'Services' },
            { href: '/blogs', label: 'Blogs' },
            { href: '/contact', label: 'Contact Us' },
          ].map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className="text-white hover:text-[#00A6FF] transition-colors text-base font-medium"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:block"
        >
          <Link
            href="/slateai-app"
            className="bg-transparent border border-[#00A6FF] text-white px-6 py-2 rounded-full 
              hover:bg-gradient-to-r hover:from-[#00A6FF] hover:via-[#0066FF] hover:to-[#00A6FF]
              hover:border-transparent hover:shadow-[0_0_10px_#00A6FF] 
              transition-all duration-300 ease-in-out text-base font-bold"
          >
            Slate AI APP
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}
