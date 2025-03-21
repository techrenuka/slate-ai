"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AiDeliver() {
  return (
    <div className="w-full bg-black">
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 flex flex-col lg:flex-row justify-center items-start mx-auto max-w-7xl relative px-4 sm:px-6 lg:px-8 gap-6 sm:gap-8 lg:gap-12">
        <motion.div
          className="lg:sticky lg:top-10 h-fit w-full lg:w-[40%] mb-8 lg:mb-0 mx-auto lg:mx-0 px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base sm:text-lg text-green-400 mb-2 sm:mb-3 lg:mb-4 text-center lg:text-left">
            We Deliver
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center lg:text-left leading-tight">
            AI That Works : 
            <span className="block mt-2 leading-tight bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent">
              Connecting Every Dot
            </span>
          </h1>
          <p className="text-white/70 mt-3 sm:mt-4 lg:mt-6 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left text-sm sm:text-base">
            AI's real power emerges when all the dots are connected—integrating business needs, engineering, innovation, and user experience to create impactful solutions.
          </p>
          <Link href="/contact">
            <div className="flex justify-center lg:justify-start">
              <button className="mt-4 sm:mt-6 lg:mt-8 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-sm sm:text-base font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 border border-white/10 shadow-lg hover:shadow-xl hover:scale-105">
                Get Your AI Roadmap
              </button>
            </div>
          </Link>
        </motion.div>

        <TracingBeam className="w-full lg:w-[60%] px-4 sm:px-6">
          <div className="mx-auto antialiased pt-4 sm:pt-6 relative max-w-2xl">
            {dummyContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-6 sm:mb-8 lg:mb-10">
                <p className={twMerge("text-xl sm:text-2xl lg:text-3xl mb-3 lg:mb-4 font-bold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-center lg:text-left")}>
                  {item.title}
                </p>

                <div className="text-sm sm:text-base prose prose-sm max-w-none text-white dark:prose-invert">
                  {item.description}
                  
                  {item.bulletPoints && (
                    <ul className="mt-2 sm:mt-3 lg:mt-4 space-y-2">
                      {item.bulletPoints.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-400 mr-2 text-base sm:text-lg flex-shrink-0">✓</span>
                          <span className="text-white/80">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </section>
    </div>
  );
}

const dummyContent = [
  {
    title: "Strategic AI Implementation",
    description: (
      <>
        <p>
          Transform your business operations with enterprise-grade AI solutions that deliver measurable ROI. Our proven methodology ensures successful implementation with minimal disruption.
        </p>
      </>
    ),
    bulletPoints: [
      "Reduce operational costs by up to 45%",
      "Increase productivity by 300%",
      "Achieve ROI within 6 months",
      "Enterprise-grade security compliance"
    ]
  },
  {
    title: "Custom AI Solutions",
    description: (
      <>
        <p>
          Leverage our expertise in developing tailored AI solutions that address your specific business challenges, from process automation to advanced analytics.
        </p>
      </>
    ),
    bulletPoints: [
      "Industry-specific AI models",
      "Seamless integration with existing systems",
      "Scalable architecture design",
      "24/7 support and maintenance"
    ]
  },
  {
    title: "AI Innovation Lab",
    description: (
      <>
        <p>
          Stay ahead of the competition with cutting-edge AI solutions developed in our innovation lab, designed specifically for enterprise needs.
        </p>
      </>
    ),
    bulletPoints: [
      "Latest AI/ML technologies",
      "Rapid prototyping and testing",
      "Continuous innovation pipeline",
      "Industry-specific solutions"
    ]
  }
];
