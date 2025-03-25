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
import { blogPosts, categories, BlogPost } from '../blogs/data';

import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function SlateAiApp() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const videoSectionRef = useRef<HTMLElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState<boolean>(false);

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
  }, []); // Remove isVideoVisible from dependency array

  const scrollToVideo = () => {
    videoSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const [selectedCategory, setSelectedCategory] = useState('Latest');

  const filteredPosts = selectedCategory === 'Latest'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);


  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
          style={{
            background:
              "-webkit-linear-gradient(45deg, rgb(171, 236, 219) 0%, rgb(10, 53, 89) 30%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 70%, rgb(10, 53, 89) 80%, rgb(171, 236, 219) 100%)"
          }}
        />
        <div className="relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-between w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="w-full pt-[7em] lg:w-1/2 text-left lg:pr-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Transform Your Property Management Experience
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#aaaaaa] text-lg sm:text-xl md:text-2xl font-urbanist mb-8"
            >
              Streamline operations, enhance tenant satisfaction, and maximize property performance with our comprehensive management solution.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4 items-center"
            >
              <Link href="/contact" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative bg-[#181818] text-white rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 group-hover:bg-opacity-90 flex items-center gap-2">
                  Get Started Today
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
              <Link id="slateAiDemo" href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToVideo();
                }} className="text-white hover:text-[#00a6ff] transition-colors duration-300 text-lg font-medium">
                Watch Demo
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex items-center gap-8"
            >
              <div>
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-[#aaaaaa]">Properties Managed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">98%</p>
                <p className="text-[#aaaaaa]">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-[#aaaaaa]">Support Available</p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full pb-[7em] lg:w-1/2 mt-12 lg:mt-0"
          >
            <div className="relative">
              <div className="relative">
                {isLoading ? (
                  <div className="rounded-lg shadow-2xl aspect-video w-full bg-[#181818] animate-pulse" />
                ) : (
                  <img
                    src="/images/hero-property-management.jpg"
                    alt="Property Management Dashboard"
                    className="rounded-lg shadow-2xl w-full"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile App Showcase Section */}
      <section className="py-10 overflow-hidden mx-auto w-full">
        <div className="w-full mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-b from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent leading-tight mb-5"
          >
            Amazing Visual Experience
          </motion.h2>


          <div className="hidden lg:flex flex-nowrap gap-4 justify-center overflow-x-auto pb-8 px-4 scrollbar-hide">
            {[
              "/slate-app/3. Dashboard.png",
              "/slate-app/13. Property Create Successfully.png",
              "/slate-app/15. Voice input for type of property.png",
              "/slate-app/20. Recent Activity.png",
              "/slate-app/21. Setting.png",
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative min-w-[280px] aspect-[9/17] rounded-[2rem]"
              >
                <div className="relative h-full w-full overflow-hidden">
                  <div className="relative w-full h-full">
                      <img
                        src={image}
                        alt={image.split('/').pop()?.split('.')[1]}
                        className="w-full h-full object-cover"
                      />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile & Tablet View */}
          <div className="lg:hidden">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={10}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-white/50 !opacity-100',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-gradient-to-r !from-[#00a6ff] !via-[#ff5959] !to-[#ffc073]',
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 25,
                }
              }}
              className="mySwiper pb-12"
            >
              {[
                "/slate-app/3. Dashboard.png",
                "/slate-app/13. Property Create Successfully.png",
                "/slate-app/15. Voice input for type of property.png",
                "/slate-app/20. Recent Activity.png",
                "/slate-app/21. Setting.png",
              ].map((image, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative aspect-[9/17] rounded-[2rem]"
                  >
                    <div className="relative h-full w-full overflow-hidden">
                      <img
                        src={image}
                        alt={image.split('/').pop()?.split('.')[1]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent mb-6">
              Comprehensive Property Management Suite
            </h2>
            <p className="text-[#aaaaaa] text-lg mb-16">
              Everything you need to manage your properties efficiently in one powerful platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Property Management",
                description: "Streamline property listings, track maintenance, and manage documentation efficiently.",
                icon: FaBuilding,
                features: ["Multi-property support", "Document management", "Visual property tracking"]
              },
              {
                title: "Inspection & Reports",
                description: "Comprehensive inspection tools with automated report generation.",
                icon: FaClipboardList,
                features: ["Customizable templates", "Photo documentation", "Digital signatures"]
              },
              {
                title: "Maintenance Management",
                description: "Track and manage maintenance requests with automated workflows.",
                icon: FaTools,
                features: ["Request tracking", "Vendor management", "Cost monitoring"]
              },
              {
                title: "Tenancy Management",
                description: "Digital tenancy agreements and tenant screening in one place.",
                icon: FaFileContract,
                features: ["Tenant portals", "Rent collection", "Maintenance requests"]
              },
              {
                title: "Security & Access",
                description: "Role-based access control and secure data management.",
                icon: FaUserLock,
                features: ["Multi-factor auth", "Access logs", "Data encryption"]
              },
              {
                title: "Analytics & Insights",
                description: "Real-time analytics and customizable reporting dashboard.",
                icon: FaChartLine,
                features: ["Financial tracking", "Performance metrics", "Custom reports"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#181818] p-8 rounded-xl hover:bg-[#1c1c1c] transition-colors duration-300"
              >
                <feature.icon className="text-4xl mb-6 text-gradient bg-gradient-to-r from-[#00a6ff] to-[#ff5959]" />
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-[#aaaaaa] font-urbanist mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="text-[#808080] flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00a6ff]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section ref={videoSectionRef} className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent mb-6">
              See It In Action
            </h2>
            <p className="text-[#aaaaaa] text-lg max-w-2xl mx-auto">
              Watch how our platform streamlines property management and enhances efficiency
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-xl overflow-hidden"
          >
            <ReactPlayer
              url="/video/Slate AI.mp4"
              width="100%"
              height="100%"
              playing={isVideoVisible}
              loop
              muted={false}
              className="react-player"
            />
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent mb-6">
              Simple & Efficient Process
            </h2>
            <p className="text-[#aaaaaa] text-lg max-w-2xl mx-auto">
              Get started with our platform in just a few simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Setup Your Account",
                description: "Create your account and configure your property portfolio settings",
                image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              },
              {
                step: "02",
                title: "Add Properties",
                description: "Import your properties and set up individual property profiles",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
              },
              {
                step: "03",
                title: "Manage Operations",
                description: "Handle day-to-day operations through our intuitive dashboard",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
              },
              {
                step: "04",
                title: "Track Performance",
                description: "Monitor metrics and generate insights for better decision making",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-[#181818] rounded-xl p-6 h-full hover:bg-[#1c1c1c] transition-colors duration-300">
                  <div className="mb-6">
                    <div className="relative w-full h-48">
                      {isLoading ? (
                        <div className="w-full h-full bg-[#181818] animate-pulse rounded-lg" />
                      ) : (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      )}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#00a6ff] to-[#ff5959] text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-[#aaaaaa] font-urbanist">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-[#aaaaaa] text-lg max-w-2xl mx-auto">
              See what our clients say about their experience with our platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={32}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-white/50 !opacity-100',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-gradient-to-r !from-[#00a6ff] !via-[#ff5959] !to-[#ffc073]',
              }}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              className="testimonials-swiper pb-12 !overflow-visible"
            >
              {[
                {
                  quote: "The automation features have saved us countless hours in property management tasks. Highly recommended!",
                  author: "Jennifer Wilson",
                  role: "Property Manager",
                  company: "Urban Living Properties",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                  quote: "This platform has revolutionized how we handle maintenance requests and tenant communications.",
                  author: "Michael Chang",
                  role: "Operations Director",
                  company: "Pacific Real Estate",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                  quote: "The analytics and reporting features provide invaluable insights for our property portfolio.",
                  author: "Sarah Martinez",
                  role: "CEO",
                  company: "Elite Property Management",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                {
                  quote: "Outstanding customer support and regular feature updates keep us ahead of the competition.",
                  author: "David Chen",
                  role: "Regional Director",
                  company: "Modern Homes Group",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                  quote: "The mobile app makes property inspections and maintenance tracking a breeze.",
                  author: "Rachel Adams",
                  role: "Operations Manager",
                  company: "Premier Properties",
                  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                }
              ].map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-[#181818] p-8 rounded-xl relative h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-16 h-16">
                        {isLoading ? (
                          <div className="w-full h-full bg-[#181818] animate-pulse rounded-full" />
                        ) : (
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        )}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.author}</h4>
                        <p className="text-[#aaaaaa] text-sm">{testimonial.role}</p>
                        <p className="text-[#808080] text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-[#aaaaaa] font-urbanist italic mb-4">"{testimonial.quote}"</p>
                    <div className="absolute top-4 right-4 text-4xl text-[#303030] opacity-50">"</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Blog and Articles Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent mb-6">
              Latest Insights & Articles
            </h2>
            <p className="text-[#aaaaaa] text-lg max-w-2xl mx-auto">
              Stay updated with the latest trends and best practices in property management
            </p>
          </motion.div>

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
                    <div className="relative w-full h-full">
                      {isLoading ? (
                        <div className="w-full h-full bg-[#181818] animate-pulse rounded-lg" />
                      ) : (
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                    </div>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              href="/blogs"
              className="inline-flex items-center text-white hover:text-[#00a6ff] transition-colors duration-300 text-lg font-medium"
            >
              View All Articles
              <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00a6ff] via-[#132638] to-[#614523] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Property Management?
            </h2>
            <p className="text-[#aaaaaa] text-lg mb-12 font-urbanist">
              Join thousands of property managers who have streamlined their operations with our platform
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative bg-[#181818] text-white rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 group-hover:bg-opacity-90 flex items-center gap-2">
                  Start Free Trial
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}