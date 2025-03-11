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
      className={`fixed top-0 left-0 right-0 z-50 w-full py-4 px-6 transition-all duration-300 ${
        scrolled ? 'bg-black backdrop-blur-sm' : 'bg-transparent'
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
              <img src="/images/white-logo.png" alt="Logo" className="h-8 w-auto" />
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
              { href: '/contact', label: 'Contact Us' },
            ].map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-white hover:text-[#00A6FF] transition-colors text-xl font-medium"
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
            href="/contact"
            className="bg-transparent border border-[#00A6FF] text-white px-6 py-2 rounded-full 
              hover:bg-gradient-to-r hover:from-[#00A6FF] hover:via-[#0066FF] hover:to-[#00A6FF]
              hover:border-transparent hover:shadow-[0_0_10px_#00A6FF] 
              transition-all duration-300 ease-in-out text-sm font-medium"
          >
            Have an idea?
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}
