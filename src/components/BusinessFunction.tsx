"use client";
import Image from "next/image";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export default function BusinessFunction() {
  const items = [
    {
      title: "Finance & Accounting",
      description:
        "AI agent analyzes financial data, automates reporting, and provides predictive insights.",
      image:
        "/images/data.webp",
    },
    {
      title: "Strategic Management",
      description:
        "Utilizes AI to analyze data, assess risks, and optimize strategies for informed decision-making and agile adjustments.",
      image:
        "/images/8.webp",
    },
    {
      title: "Sales & Marketing",
      description:
        "Analyzes customer data to enhance strategies and personalize marketing approaches.",
      image:
        "/images/9.webp",
    },
    {
      title: "Research & Innovation",
      description:
        "Accelerates innovation by analyzing market trends and suggesting new product features.",
      image:
        "/images/12.jpg",
    },
    {
      title: "Human Resources",
      description:
        "Streamlines recruitment, onboarding, and employee management through intelligent automation.",
      image:
        "/images/7.jpg",
    },
    {
      title: "Information Technology",
      description:
        "Enhances cybersecurity, automates maintenance, and optimizes IT infrastructure performance.",
      image:
        "/images/6.jpg",
    },
    {
      title: "Customer Service",
      description:
        "AI transforms customer service by enhancing responsiveness and personalization.",
      image:
        "/images/10.webp",
    },
  ];

  return (
    <div>
      <section className="py-8 sm:py-12 lg:py-[7.5em] px-4 sm:px-6 lg:px-8">
        <div
          className="w-full"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate3d(0px, 0.191px, 0px) scale(0.9995, 0.9995)",
            opacity: "1",
          }}
        >
          <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-green-400 mb-2 sm:mb-3 lg:mb-4 text-center">
            ⁠We've picked <br className="sm:hidden" /> right use-cases for
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent leading-tight">
            <span>Business Functions</span>
          </h2>
          <div className="flex justify-center px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl w-full sm:w-[80%] lg:w-[40%] text-center font-[500] py-3 sm:py-4 lg:py-[0.4em] text-[#808080]">
              Boost your Team's Productivity with Right AI Agents curated as per
              your business needs
            </h3>
          </div>

          <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[95%] sm:max-w-[90%] lg:max-w-[90%] pt-6 sm:pt-8 lg:pt-[2em] mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                image={item.image}
                className={`${
                  i === 3 || i === 6 ? "lg:col-span-2" : ""
                } bg-[#181818] text-white hover:shadow-lg transition-shadow duration-300`}
              />
            ))}
          </BentoGrid>
        </div>
      </section>
    </div>
  );
}
