"use client";
import { motion } from "framer-motion";
import { section } from "framer-motion/client";
import { useState, useEffect } from "react";

export default function AiSolutions() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div>
        <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mx-auto">
          <div className="rounded-3xl">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
                <motion.div
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="block w-full lg:w-1/2 px-4 sm:px-6 lg:px-0"
                >
                  <div className="space-y-6">
                    <div className="h-12 w-3/4 bg-[#252525] rounded-md" />
                    <div className="space-y-3">
                      <div className="h-4 w-full bg-[#252525] rounded-md" />
                      <div className="h-4 w-5/6 bg-[#252525] rounded-md" />
                      <div className="h-4 w-4/5 bg-[#252525] rounded-md" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="hidden lg:block w-full lg:w-1/2 px-4 sm:px-6 lg:px-0"
                >
                  <div className="flex justify-center">
                    <div className="w-[259px] h-[500px] bg-[#252525] rounded-md" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mx-auto">
        <div className="rounded-3xl">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
              {/* Card 1 - From Left - Visible on all screens */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="block w-full lg:w-1/2 px-4 sm:px-6 lg:px-0"
              >
                <div className="space-y-6">
                  <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center lg:text-left leading-tight">
                    We architect AI solutions with{" "}
                    <span
                      className="block"
                      style={{
                        background: "linear-gradient(45deg, #20B4B8, #4790F2)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}
                    >
                      Data Privacy &amp; Ethics
                    </span>
                    as core components
                  </h4>
                  <p className="font-urbanist text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 text-center lg:text-left leading-relaxed">
                    Data Privacy is crucial for any business and for some of them it
                    is the actual IP for them. We architect AI solutions in such a
                    way that your Data never leaves your secured vault or used as
                    masked data instead of original data.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 - From Right - Only visible on desktop */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:block w-full lg:w-1/2 px-4 sm:px-6 lg:px-0"
              >
                <div className="flex justify-center">
                  <img
                    alt="lock"
                    loading="lazy"
                    width={259}
                    height={500}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto h-[18rem] sm:h-[22rem] md:h-[25rem] lg:h-[30rem] object-contain transition-all duration-300"
                    src="/images/lock.png"
                    style={{ color: "transparent" }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
