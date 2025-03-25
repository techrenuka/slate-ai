"use client";

import { motion } from "framer-motion";
import React from "react";
import { useState, useEffect } from 'react';

const SkeletonSection = ({ imageOnLeft = false }) => (
  <div className="py-8 sm:py-12 md:py-16 lg:pb-[10em]">
    <div className="relative min-h-[30em] sm:min-h-[35em] md:min-h-[40em] lg:h-[45em]">
      <div className="w-full flex flex-col lg:flex-row h-full mx-auto max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] px-4 sm:px-6 lg:px-0">
        <div className={`w-full lg:w-6/12 ${imageOnLeft ? 'lg:order-1' : 'lg:order-2'} h-[300px] sm:h-[400px] lg:h-full`}>
          <div className="w-full h-full rounded-xl object-cover bg-[#252525] animate-pulse" />
        </div>
        <div className={`w-full lg:w-6/12 flex items-center mt-6 lg:mt-0 ${imageOnLeft ? 'lg:order-2 lg:ps-20' : 'lg:order-1'}`}>
          <div className="w-full space-y-4">
            <div className="h-12 w-3/4 bg-[#252525] rounded animate-pulse" />
            <div className="h-24 w-full bg-[#252525] rounded animate-pulse" />
            <div className="space-y-3 ps-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-4 w-4 rounded-full bg-[#252525] animate-pulse" />
                  <div className="h-6 w-full bg-[#252525] rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function AIInBusiness() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen mx-auto bg-black w-full overflow-x-hidden">
        <section>
          <div className="bg-gradient-to-r from-[#252525] to-[#181818] animate-pulse">
            <div className="mx-auto flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-10 py-[6em] sm:py-16 md:py-20 lg:py-[10em] mb-[3em] sm:mb-[4em] lg:mb-[5em]">
              <div className="h-16 w-3/4 bg-[#252525] rounded animate-pulse mb-4" />
              <div className="h-8 w-1/2 bg-[#252525] rounded animate-pulse" />
            </div>
          </div>

          <SkeletonSection />
          <SkeletonSection imageOnLeft={true} />
          <SkeletonSection />
          <SkeletonSection imageOnLeft={true} />
        </section>
      </div>
    );
  }
    return (
        <div className="min-h-screen mx-auto bg-black w-full overflow-x-hidden">
            <section>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        background:
                            "-webkit-linear-gradient(45deg, rgb(171, 236, 219) 0%, rgb(10, 53, 89) 30%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 70%, rgb(10, 53, 89) 80%, rgb(171, 236, 219) 100%)"
                    }}
                >
                    <motion.div 
                        className="mx-auto flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-10 py-[6em] sm:py-16 md:py-20 lg:py-[10em] mb-[3em] sm:mb-[4em] lg:mb-[5em]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="bg-gradient-to-l from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl inline-flex font-bold text-center leading-tight max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]">
                            Transforming Industries with AI/ML Excellence
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center font-[500] site-h3 pt-2 sm:pt-3 md:pt-4 w-full max-w-[95%] sm:max-w-[85%] lg:max-w-[75%] text-[#808080]">
                            Real Success Stories: Transforming Industries with AI
                        </p>
                    </motion.div>
                </motion.div>

                {/* Finance & Accounting */}
                <div className="py-8 sm:py-12 md:py-16 lg:pb-[10em]">
                    <motion.div
                        className="relative min-h-[30em] sm:min-h-[35em] md:min-h-[40em] lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full flex flex-col lg:flex-row h-full mx-auto max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] px-4 sm:px-6 lg:px-0">
                            <motion.div 
                                className="w-full lg:w-6/12 lg:absolute lg:end-0 h-[300px] sm:h-[400px] lg:h-full order-1 lg:order-2"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/business-finance.png"
                                    alt="Finance and Accounting"
                                    className="w-full h-full rounded-xl lg:rounded-s-xl lg:rounded-e-none object-cover"
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-6/12 flex items-center mt-6 lg:mt-0 order-2 lg:order-1"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="w-full">
                                    <h2 className="text-fade w-full sm:w-11/12 lg:w-9/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                                        Finance &amp; Accounting
                                    </h2>
                                    <p className="text-fade font-[400] text-sm sm:text-base md:text-lg lg:text-[1.5em] text-[#aaa] py-4 sm:py-6 w-full lg:w-10/12 font-urbanist">
                                        AI agent analyzes financial data, automates reporting, and
                                        provides predictive insights.
                                    </p>
                                    <div className="text-fade font-[400] text-sm sm:text-base md:text-lg lg:text-[1.5em] ps-4 sm:ps-6 leading-relaxed text-[#808080] pb-6 sm:pb-8 lg:pb-10 font-urbanist space-y-3">
                                        {[
                                            { title: "Automated Reporting", desc: "Streamlines financial processes" },
                                            { title: "Fraud Detection", desc: "Identifies suspicious activities" },
                                            { title: "Budget Analysis", desc: "Optimizes spending patterns" },
                                            { title: "Risk Evaluation", desc: "Assesses financial vulnerabilities" },
                                            { title: "Compliance Checks", desc: "Ensures regulatory adherence" }
                                        ].map((item, index) => (
                                            <div key={index} className="list-none flex items-center gap-4 sm:gap-6 text-fade text-[0.9em] sm:text-[1em] leading-[1.8em] function text-[#808080]">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 256 256"
                                                    className="text-[#00D188] h-3 w-3 sm:h-4 sm:w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                                </svg>
                                                <p>
                                                    <strong>{item.title}:</strong>&nbsp;{item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div className="flex gap-5">
                                        <a href="/business-functions/Finance & Accounting" className="w-auto">
                                            <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] custom-shadow via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full">
                                                <div className="text-white flex items-center bg-[#181818] rounded-full gap-4 font-[400] group/bento cursor-pointer text-sm sm:text-base md:text-lg lg:text-[1.25em] py-2 sm:py-3 px-4 sm:px-6 transition-all duration-500">
                                                    Learn More
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Strategic Management */}
                <div className="py-8 sm:py-12 md:py-16 lg:pb-[10em]">
                    <motion.div 
                        className="relative min-h-[30em] sm:min-h-[35em] md:min-h-[40em] lg:h-[45em]"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="w-full flex flex-col lg:flex-row-reverse h-full mx-auto max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] px-4 sm:px-6 lg:px-0">
                            <motion.div 
                                className="w-full lg:w-6/12 lg:absolute start-0 h-[300px] sm:h-[400px] lg:h-full"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/8.webp"
                                    alt="Strategic Management"
                                    className="w-full h-full rounded-xl lg:rounded-e-xl lg:rounded-s-none object-cover"
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-6/12 flex items-center mt-6 lg:mt-0 lg:ps-20"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="w-full">
                                    <h2 className="text-fade w-full sm:w-11/12 lg:w-10/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                                        Strategic Management
                                    </h2>
                                    <p className="text-fade font-[400] text-sm sm:text-base md:text-lg lg:text-[1.5em] text-[#aaa] py-4 sm:py-6 w-full lg:w-full font-urbanist">
                                        Utilizes AI to analyze data, assess risks, and optimize strategies
                                        for informed decision-making and agile adjustments.
                                    </p>
                                    <div className="text-fade font-[400] text-sm sm:text-base md:text-lg lg:text-[1.5em] ps-4 sm:ps-6 leading-relaxed text-[#808080] pb-6 sm:pb-8 lg:pb-10 font-urbanist space-y-3">
                                        {[
                                            { title: "Trend Analysis", desc: "Informs decisions through data insights" },
                                            { title: "Risk Forecasting", desc: "Anticipates potential challenges" },
                                            { title: "Scenario Modeling", desc: "Evaluates strategic options" },
                                            { title: "KPI Monitoring", desc: "Tracks performance metrics automatically" },
                                            { title: "Agile Adjustments", desc: "Adapts strategies based on market changes" }
                                        ].map((item, index) => (
                                            <div key={index} className="list-none flex items-center gap-4 sm:gap-6 text-fade text-[0.9em] sm:text-[1em] leading-[1.8em] function text-[#808080]">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 256 256"
                                                    className="text-[#00D188] h-3 w-3 sm:h-4 sm:w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                                </svg>
                                                <p>
                                                    <strong>{item.title}:</strong>&nbsp;{item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div className="flex gap-5">
                                        <a href="/business-functions/Strategic Management" className="w-auto">
                                            <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] custom-shadow via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full">
                                                <div className="text-white flex items-center bg-[#181818] rounded-full gap-4 font-[400] group/bento cursor-pointer text-sm sm:text-base md:text-lg lg:text-[1.25em] py-2 sm:py-3 px-4 sm:px-6 transition-all duration-500">
                                                    Learn More
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* ⁠⁠Sales & Marketing */}
                <div className="py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20">
                    <div className="relative min-h-[20em] sm:min-h-[25em] md:min-h-[30em] lg:min-h-[35em] xl:min-h-[40em]">
                        <div className="w-full flex flex-col lg:flex-row h-full mx-auto max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] px-3 sm:px-4 md:px-5 lg:px-6">
                            <motion.div
                                className="w-full lg:w-1/2 lg:absolute lg:end-0 h-[250px] sm:h-[300px] md:h-[350px] lg:h-full order-1 lg:order-2"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/9.webp"
                                    alt="Sales and Marketing"
                                    className="w-full h-full rounded-lg sm:rounded-xl object-cover"
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-1/2 flex items-center mt-4 sm:mt-5 md:mt-6 lg:mt-0 order-2 lg:order-1"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="w-full">
                                    <h2 className="text-fade w-full sm:w-[95%] lg:w-[90%] capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
                                        Sales &amp; Marketing
                                    </h2>
                                    <p className="text-fade font-[400] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#aaa] py-3 sm:py-4 md:py-5 lg:py-6 w-full lg:w-[95%] font-urbanist">
                                        Analyzes customer data to enhance strategies and personalize
                                        marketing approaches.
                                    </p>
                                    <div className="text-fade font-[400] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ps-3 sm:ps-4 md:ps-5 leading-relaxed text-[#808080] pb-4 sm:pb-6 md:pb-8 lg:pb-10 font-urbanist space-y-2 sm:space-y-3">
                                        {[
                                            { title: "Customer Segmentation", desc: "Targets marketing efforts effectively" },
                                            { title: "Behavior Prediction", desc: "Anticipates customer actions" },
                                            { title: "Chatbot Engagement", desc: "Provides instant customer support" },
                                            { title: "Content Enhancement", desc: "Optimizes marketing materials" },
                                            { title: "Sales Forecasting", desc: "Predicts future sales trends" }
                                        ].map((item, index) => (
                                            <div key={index} className="list-none flex items-center gap-2 sm:gap-3 md:gap-4 text-fade text-[0.85em] sm:text-[0.9em] md:text-[0.95em] lg:text-[1em] leading-[1.6em] sm:leading-[1.7em] md:leading-[1.8em] function text-[#808080]">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 256 256"
                                                    className="text-[#00D188] h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                                </svg>
                                                <p>
                                                    <strong>{item.title}:</strong>&nbsp;{item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div className="flex gap-3 sm:gap-4 md:gap-5">
                                        <a href="/business-functions/Sales & Marketing" className="w-auto">
                                            <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] custom-shadow via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full">
                                                <div className="text-white flex items-center bg-[#181818] rounded-full gap-3 sm:gap-4 font-[400] group/bento cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-5 lg:px-6 transition-all duration-500">
                                                    Learn More
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Research & Innovation */}
                <div className="py-4 sm:py-6 md:py-8 lg:py-10 xl:py-[10em]">
                    <motion.div 
                        className="relative min-h-[30em] sm:min-h-[35em] md:min-h-[40em] lg:min-h-[45em]"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="w-full flex flex-col lg:flex-row-reverse h-full mx-auto max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] px-3 sm:px-4 md:px-5 lg:px-6">
                            <motion.div 
                                className="w-full lg:w-1/2 lg:absolute start-0 h-[250px] sm:h-[300px] md:h-[350px] lg:h-full"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/12.jpg"
                                    alt="Research and Innovation"
                                    className="w-full h-full rounded-lg sm:rounded-xl lg:rounded-e-xl lg:rounded-s-none object-cover"
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-1/2 flex items-center mt-4 sm:mt-5 md:mt-6 lg:mt-0 lg:ps-8 xl:ps-20"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="w-full">
                                    <h2 className="text-fade w-full sm:w-[95%] lg:w-[90%] capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                                        Research &amp; Innovation
                                    </h2>
                                    <p className="text-fade font-[400] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#aaa] py-3 sm:py-4 md:py-5 lg:py-6 w-full lg:w-[95%] font-urbanist">
                                        Accelerates innovation by analyzing market trends and suggesting new product features.
                                    </p>
                                    <div className="text-fade font-[400] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ps-3 sm:ps-4 md:ps-5 leading-relaxed text-[#808080] pb-4 sm:pb-6 md:pb-8 lg:pb-10 font-urbanist space-y-2 sm:space-y-3">
                                        {[
                                            { title: "Trend Discovery", desc: "Identifies emerging research areas" },
                                            { title: "Data Insights", desc: "Extracts valuable information for innovation" },
                                            { title: "Collaboration Tools", desc: "Enhances teamwork efficiency" },
                                            { title: "Patent Review", desc: "Evaluates existing patents for opportunities" },
                                            { title: "Rapid Prototyping", desc: "Tests concepts quickly through simulations" }
                                        ].map((item, index) => (
                                            <div key={index} className="list-none flex items-center gap-2 sm:gap-3 md:gap-4 text-fade text-[0.85em] sm:text-[0.9em] md:text-[0.95em] lg:text-[1em] leading-[1.6em] sm:leading-[1.7em] md:leading-[1.8em] function text-[#808080]">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 256 256"
                                                    className="text-[#00D188] h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                                </svg>
                                                <p>
                                                    <strong>{item.title}:</strong>&nbsp;{item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div className="flex gap-3 sm:gap-4 md:gap-5">
                                        <a href="/business-functions/Research & Innovation" className="w-auto">
                                            <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] custom-shadow via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full">
                                                <div className="text-white flex items-center bg-[#181818] rounded-full gap-3 sm:gap-4 font-[400] group/bento cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-5 lg:px-6 transition-all duration-500">
                                                    Learn More
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Human Resources */}
                <div className="py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20">
                    <div className="relative min-h-[30em] sm:min-h-[35em] md:min-h-[40em] lg:min-h-[45em]">
                        <div className="w-full flex flex-col lg:flex-row h-full mx-auto max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] px-3 sm:px-4 md:px-5 lg:px-6">
                            <motion.div
                                className="w-full lg:w-1/2 lg:absolute end-0 h-[250px] sm:h-[300px] md:h-[350px] lg:h-full order-1 lg:order-2"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/7.jpg"
                                    alt="Human Resources"
                                    className="w-full h-full rounded-lg sm:rounded-xl object-cover"
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-1/2 flex items-center mt-4 sm:mt-5 md:mt-6 lg:mt-0 order-2 lg:order-1"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="w-full">
                                    <h2 className="text-fade w-full sm:w-[95%] lg:w-[90%] capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
                                        Human Resources
                                    </h2>
                                    <p className="text-fade font-[400] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#aaa] py-3 sm:py-4 md:py-5 lg:py-6 w-full lg:w-[95%] font-urbanist">
                                        Streamlines recruitment, onboarding, and employee management through intelligent automation.
                                    </p>
                                    <div className="text-fade font-[400] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ps-3 sm:ps-4 md:ps-5 leading-relaxed text-[#808080] pb-4 sm:pb-6 md:pb-8 lg:pb-10 font-urbanist space-y-2 sm:space-y-3">
                                        {[
                                            { title: "Resume Screening", desc: "Automates candidate selection" },
                                            { title: "Onboarding Automation", desc: "Streamlines new hire integration" },
                                            { title: "Performance Analysis", desc: "Evaluates employee contributions objectively" },
                                            { title: "Engagement Insights", desc: "Analyzes feedback for culture improvement" },
                                            { title: "Training Recommendations", desc: "Personalizes employee development" }
                                        ].map((item, index) => (
                                            <div key={index} className="list-none flex items-center gap-2 sm:gap-3 md:gap-4 text-fade text-[0.85em] sm:text-[0.9em] md:text-[0.95em] lg:text-[1em] leading-[1.6em] sm:leading-[1.7em] md:leading-[1.8em] function text-[#808080]">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 256 256"
                                                    className="text-[#00D188] h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                                </svg>
                                                <p>
                                                    <strong>{item.title}:</strong>&nbsp;{item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div className="flex gap-3 sm:gap-4 md:gap-5">
                                        <a href="/business-functions/Human Resources" className="w-auto">
                                            <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] custom-shadow via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full">
                                                <div className="text-white flex items-center bg-[#181818] rounded-full gap-3 sm:gap-4 font-[400] group/bento cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-5 lg:px-6 transition-all duration-500">
                                                    Learn More
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Information Technology */}
                <div className="py-4 sm:py-8 md:py-12 lg:py-16 xl:py-[10em]">
                    <motion.div 
                        className="relative min-h-[30em] sm:min-h-[35em] md:min-h-[40em] lg:min-h-[45em]"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="w-full flex flex-col lg:flex-row-reverse h-full mx-auto max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] px-3 sm:px-4 md:px-5 lg:px-6">
                            <motion.div 
                                className="w-full lg:w-1/2 lg:absolute start-0 h-[250px] sm:h-[300px] md:h-[350px] lg:h-full"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/6.jpg"
                                    alt="Information Technology Services"
                                    className="w-full h-full rounded-lg sm:rounded-xl lg:rounded-e-xl lg:rounded-s-none object-cover"
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-1/2 flex items-center mt-4 sm:mt-5 md:mt-6 lg:mt-0 lg:ps-8 xl:ps-20"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="w-full">
                                    <h2 className="text-fade w-full sm:w-[95%] lg:w-[90%] capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                                        Information Technology
                                    </h2>
                                    <p className="text-fade font-[400] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#aaa] py-3 sm:py-4 md:py-5 lg:py-6 w-full lg:w-[95%] font-urbanist">
                                        Enhances cybersecurity, automates maintenance, and optimizes IT infrastructure performance.
                                    </p>
                                    <div className="text-fade font-[400] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ps-3 sm:ps-4 md:ps-5 leading-relaxed text-[#808080] pb-4 sm:pb-6 md:pb-8 lg:pb-10 font-urbanist space-y-2 sm:space-y-3">
                                        {[
                                            { title: "Threat Detection", desc: "Monitors network security in real-time" },
                                            { title: "Support Automation", desc: "Provides quick IT assistance via chatbots" },
                                            { title: "Predictive Maintenance", desc: "Foresees system failures proactively" },
                                            { title: "Resource Optimization", desc: "Manages IT resources efficiently" },
                                            { title: "Backup Automation", desc: "Ensures data safety with automated processes" }
                                        ].map((item, index) => (
                                            <div key={index} className="list-none flex items-center gap-2 sm:gap-3 md:gap-4 text-fade text-[0.85em] sm:text-[0.9em] md:text-[0.95em] lg:text-[1em] leading-[1.6em] sm:leading-[1.7em] md:leading-[1.8em] function text-[#808080]">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 256 256"
                                                    className="text-[#00D188] h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                                </svg>
                                                <p>
                                                    <strong>{item.title}:</strong>&nbsp;{item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div className="flex gap-3 sm:gap-4 md:gap-5">
                                        <a href="/business-functions/Information Technology" className="w-auto">
                                            <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] custom-shadow via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full">
                                                <div className="text-white flex items-center bg-[#181818] rounded-full gap-3 sm:gap-4 font-[400] group/bento cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-5 lg:px-6 transition-all duration-500">
                                                    Learn More
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Customer Service */}
                <div className="py-4 sm:py-8 md:py-12 lg:py-16 xl:py-[10em]">
                    <div
                        className="relative min-h-[30em] md:min-h-[35em] lg:min-h-[40em] xl:min-h-[45em]"
                        style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate3d(0px, 100px, 0px) scale(0.95, 0.95)",
                            opacity: 1
                        }}
                    >
                        <div className="w-full flex flex-col lg:flex-row h-full mx-auto max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] px-3 sm:px-4 md:px-5 lg:px-6">
                            <motion.div 
                                className="w-full lg:w-1/2 lg:absolute end-0 h-[200px] sm:h-[250px] md:h-[300px] lg:h-full order-1 lg:order-2 overflow-hidden"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/10.webp"
                                    alt="Customer Service"
                                    className="w-full h-full rounded-lg sm:rounded-xl object-cover object-center"
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-1/2 flex items-center mt-6 sm:mt-8 md:mt-10 lg:mt-0 order-2 lg:order-1"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="w-full space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                                    <h2 className="text-fade w-full sm:w-[95%] lg:w-[90%] capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                                        Customer Service
                                    </h2>
                                    <p className="text-fade font-[400] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#aaa] w-full lg:w-[95%] font-urbanist">
                                        AI transforms customer service by enhancing responsiveness and
                                        personalization.
                                    </p>
                                    <div className="text-fade font-[400] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ps-3 sm:ps-4 md:ps-5 leading-relaxed text-[#808080] pb-4 sm:pb-6 md:pb-8 lg:pb-10 font-urbanist space-y-2 sm:space-y-3">
                                        {[
                                            { title: "24/7 Support", desc: "Delivers constant customer assistance via chatbots" },
                                            { title: "Sentiment Analysis", desc: "Measures customer satisfaction effectively" },
                                            { title: "Personalized Recommendations", desc: "Suggests products based on preferences" },
                                            { title: "Automated Ticketing", desc: "Streamlines issue resolution processes" },
                                            { title: "Feedback Loop Creation", desc: "Continuously improves service quality" }
                                        ].map((item, index) => (
                                            <div key={index} className="list-none flex items-center gap-2 sm:gap-3 md:gap-4 text-fade text-[0.85em] sm:text-[0.9em] md:text-[0.95em] lg:text-[1em] leading-[1.6em] sm:leading-[1.7em] md:leading-[1.8em] function text-[#808080]">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 256 256"
                                                    className="text-[#00D188] h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                                </svg>
                                                <p>
                                                    <strong>{item.title}:</strong>&nbsp;{item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div className="flex gap-3 sm:gap-4 md:gap-5">
                                        <a href="/business-functions/Customer Service" className="w-auto">
                                            <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] custom-shadow via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full">
                                                <div className="text-white flex items-center bg-[#181818] rounded-full gap-3 sm:gap-4 font-[400] group/bento cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-5 lg:px-6 transition-all duration-500">
                                                    Learn More
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
