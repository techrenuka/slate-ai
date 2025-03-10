"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { motion } from "framer-motion";

export default function AiDeliver() {
  return (
    <div className="w-full bg-black">
      <section className="py-10 flex flex-col md:flex-row justify-center items-center mx-auto max-w-7xl relative">
        <motion.div
          className="sticky top-10 h-fit mb-20 max-w-md mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-lg text-green-400 mb-2 text-center md:text-left">We Deliver</h2>
          <h1 className="text-4xl text-white md:text-5xl font-bold text-center md:text-left">
            AI That Works : 
            <span className="block leading-tight bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent">
              Connecting Every Dot
            </span>
          </h1>
          <p className="text-white/70 mt-6 max-w-2xl text-center md:text-left">
            AI's real power emerges when all the dots are connected—integrating business needs, engineering, innovation, and user experience to create impactful solutions.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 border border-white/10">
              Get Your AI Roadmap
            </button>
          </div>
        </motion.div>
        <TracingBeam className="px-6 w-full md:w-auto">
          <div className="mx-auto antialiased pt-4 relative max-w-2xl">
            {dummyContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <p className={twMerge("text-3xl mb-4 font-bold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-center md:text-left")}>
                  {item.title}
                </p>

                <div className="text-base prose prose-sm text-white dark:prose-invert">
                  {item.description}
                  
                  {item.bulletPoints && (
                    <ul className="mt-4 space-y-2">
                      {item.bulletPoints.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-400 mr-2">✓</span>
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

// Update the dummy content with more meaningful titles
const dummyContent = [
  {
    title: "Business Problems",
    description: (
      <>
        <p>
          We identify and prioritize the challenges that will have the greatest impact on your business, ensuring every AI initiative aligns with your financial goals and drives meaningful transformation.
        </p>
      </>
    ),
    bulletPoints: [
      "Identify high-ROI opportunities in market trends",
      "Prioritize challenges for maximum business impact",
      "Quantify potential value and implementation costs",
      "Align AI investments with financial goals"
    ]
  },
  {
    title: "Solution Engineering",
    description: (
      <>
        <p>
          By designing scalable, cost-effective architectures, we turn visionary concepts into reality, balancing cutting-edge technology with proven solutions to maximize efficiency and ROI.
        </p>
      </>
    ),
    bulletPoints: [
      "Design cost-effective, scalable system architectures",
      "Optimize resource allocation for maximum efficiency",
      "Balance cutting-edge tech with proven solutions",
      "Implement phased approach for quicker ROI"
    ]
  },
  {
    title: "Artificial Intelligence",
    description: (
      <>
        <p>
          Our AI solutions are tailored for high-impact, low-complexity applications, delivering clear, measurable returns while continuously optimizing to maintain ongoing value.
        </p>
      </>
    ),
    bulletPoints: [
      "Develop AI solutions with clear ROI potential",
      "Prioritize high-impact, low-complexity AI applications",
      "Leverage transfer learning to reduce costs",
      "Continuously optimize AI for ongoing value"
    ]
  },
  {
    title: "User Experience",
    description: (
      <>
        <p>
          We craft intuitive interfaces that not only enhance user productivity but also reduce training costs, ensuring advanced technology is effortlessly accessible and efficient.
        </p>
      </>
    ),
    bulletPoints: [
      "Create interfaces that boost user productivity",
      "Design for reduced training and support costs",
      "Implement analytics for UX-driven cost savings",
      "Balance feature richness with development efficiency"
    ]
  },
];
