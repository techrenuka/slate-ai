"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { motion } from "framer-motion";

export default function AiDeliver() {
  return (
    <div className="w-full bg-black">
      <section className="py-10 md:py-16 flex flex-col md:flex-row justify-center items-center mx-auto max-w-7xl relative px-4 md:px-6 gap-8">
        <motion.div
          className="lg:sticky top-10 h-fit mb-10 md:mb-0 max-w-lg mx-auto md:mx-0 px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-lg text-green-400 mb-3 md:mb-4 text-center md:text-left">We Deliver</h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center md:text-left leading-tight">
            AI That Works : 
            <span className="block mt-2 leading-tight bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent">
              Connecting Every Dot
            </span>
          </h1>
          <p className="text-white/70 mt-4 md:mt-6 max-w-2xl text-center md:text-left text-sm md:text-base">
            AI's real power emerges when all the dots are connected—integrating business needs, engineering, innovation, and user experience to create impactful solutions.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="mt-6 md:mt-8 px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-sm md:text-base font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 border border-white/10 shadow-lg hover:shadow-xl">
              Get Your AI Roadmap
            </button>
          </div>
        </motion.div>
        <TracingBeam className="px-4 md:px-6 w-full md:w-[60%]">
          <div className="mx-auto antialiased pt-4 md:pt-6 relative max-w-2xl">
            {dummyContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-8 md:mb-10">
                <p className={twMerge("text-2xl md:text-3xl mb-3 md:mb-4 font-bold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-center md:text-left")}>
                  {item.title}
                </p>

                <div className="text-sm md:text-base prose prose-sm text-white dark:prose-invert">
                  {item.description}
                  
                  {item.bulletPoints && (
                    <ul className="mt-3 md:mt-4 space-y-2">
                      {item.bulletPoints.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-400 mr-2 text-lg">✓</span>
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
