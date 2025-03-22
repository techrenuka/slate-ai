"use client";
import { motion } from "framer-motion";
import { section } from "framer-motion/client";
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function OurWork() {
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
        <section className="py-8 sm:py-12 lg:py-[7.5em] px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
          <section className="mx-auto max-w-[95%] lg:max-w-[80%] flex-grow">
            <div className="space-y-4 text-center">
              <Skeleton className="w-32 h-6 mx-auto bg-[#181818]" />
              <Skeleton className="w-96 h-16 mx-auto bg-[#181818]" />
            </div>

            <div className="mt-8 sm:mt-12 lg:mt-[7em] space-y-8 sm:space-y-12 lg:space-y-[10em]">
              {/* Receipt AI Skeleton */}
              <div className="rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] bg-[#181818] min-h-[500px] sm:min-h-[600px] lg:h-[44em] relative overflow-hidden">
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="relative lg:static w-full lg:w-6/12 order-2 lg:order-1">
                    <div className="p-6 sm:p-8 lg:p-16 h-full flex flex-col justify-center space-y-4">
                      <Skeleton className="w-3/4 h-12 bg-[#252525]" />
                      <Skeleton className="w-1/2 h-8 bg-[#252525]" />
                      <Skeleton className="w-full h-24 bg-[#252525]" />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 h-[200px] sm:h-[300px] lg:h-full order-1 lg:order-2">
                    <Skeleton className="w-full h-full bg-[#252525]" />
                  </div>
                </div>
              </div>

              {/* BrandAvatar AI Skeleton */}
              <div className="rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] bg-[#181818] min-h-[500px] sm:min-h-[600px] lg:h-[44em] relative overflow-hidden">
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="w-full lg:w-6/12 h-[200px] sm:h-[300px] lg:h-full order-1">
                    <Skeleton className="w-full h-full bg-[#252525]" />
                  </div>
                  <div className="relative lg:static w-full lg:w-6/12 order-2">
                    <div className="p-6 sm:p-8 lg:p-16 h-full flex flex-col justify-center space-y-4">
                      <Skeleton className="w-3/4 h-12 bg-[#252525]" />
                      <Skeleton className="w-1/2 h-8 bg-[#252525]" />
                      <Skeleton className="w-full h-24 bg-[#252525]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* WindmillTwin AI Skeleton */}
              <div className="rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] bg-[#181818] min-h-[500px] sm:min-h-[600px] lg:h-[44em] relative overflow-hidden">
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="relative lg:static w-full lg:w-6/12 order-2 lg:order-1">
                    <div className="p-6 sm:p-8 lg:p-16 h-full flex flex-col justify-center space-y-4">
                      <Skeleton className="w-3/4 h-12 bg-[#252525]" />
                      <Skeleton className="w-1/2 h-8 bg-[#252525]" />
                      <Skeleton className="w-full h-24 bg-[#252525]" />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 h-[200px] sm:h-[300px] lg:h-full order-1 lg:order-2">
                    <Skeleton className="w-full h-full bg-[#252525]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
  return (
    <div>
      <section className="py-8 sm:py-12 lg:py-[7.5em] px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
        <section className="mx-auto max-w-[95%] lg:max-w-[80%] flex-grow">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-base sm:text-lg text-green-400 mb-3 sm:mb-4 text-center">
              ⁠Experience Our Work
            </h3>
            <h5 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold text-center leading-tight">
              Upcoming Launch Week Solutions
              <br />
              <span className="block mt-2 sm:mt-3 leading-tight bg-gradient-to-l from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent">
                for Smarter Enterprises
              </span>
            </h5>
          </motion.div>

          <div className="mt-8 sm:mt-12 lg:mt-[7em] space-y-8 sm:space-y-12 lg:space-y-[10em]">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] bg-[#181818] min-h-[500px] sm:min-h-[600px] lg:h-[44em] relative overflow-hidden">
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="relative lg:static w-full lg:w-6/12 order-2 lg:order-1">
                    <div className="p-6 sm:p-8 lg:p-16 bg-gradient-to-t from-[#181818] via-[#181818]/95 to-transparent lg:from-[#181818] lg:to-[#181818] relative z-10 h-full flex flex-col justify-center">
                      <h4 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
                        <span className="bg-gradient-to-tr from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent inline-block">Receipt AI</span>
                        <span className="text-white text-xl sm:text-2xl lg:text-3xl mt-2 sm:mt-3 block leading-tight">
                          Expense Tracking Simplified
                        </span>
                      </h4>
                      <p className="font-urbanist text-sm sm:text-base lg:text-[1.5em] text-[#bbb] mt-4 sm:mt-6 lg:mt-10 max-w-prose">
                        Transform paper receipts into actionable data with our
                        AI-powered solution. Streamline expense management, reduce
                        errors, and integrate seamlessly with your existing
                        systems.
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 h-[200px] sm:h-[300px] lg:h-full order-1 lg:order-2">
                    <img
                      src="/images/ai-invoice.png"
                      alt="Receipt AI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] bg-[#181818] min-h-[500px] sm:min-h-[600px] lg:h-[44em] relative overflow-hidden">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] bg-[#181818] min-h-[500px] sm:min-h-[600px] lg:h-[44em] relative overflow-hidden">
                    <div className="flex flex-col lg:flex-row h-full">
                      {index % 2 === 0 ? (
                        <>
                          <div className="relative lg:static w-full lg:w-6/12 order-2 lg:order-1">
                            <div className="p-6 sm:p-8 lg:p-16 h-full flex flex-col justify-center space-y-4">
                              <Skeleton className="w-3/4 h-12 bg-[#252525]" />
                              <Skeleton className="w-full h-24 bg-[#252525]" />
                            </div>
                          </div>
                          <div className="w-full lg:w-6/12 h-[200px] sm:h-[300px] lg:h-full order-1 lg:order-2">
                            <Skeleton className="w-full h-full bg-[#252525]" />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-full lg:w-6/12 h-[200px] sm:h-[300px] lg:h-full order-1">
                            <Skeleton className="w-full h-full bg-[#252525]" />
                          </div>
                          <div className="relative lg:static w-full lg:w-6/12 order-2">
                            <div className="p-6 sm:p-8 lg:p-16 h-full flex flex-col justify-center space-y-4">
                              <Skeleton className="w-3/4 h-12 bg-[#252525]" />
                              <Skeleton className="w-full h-24 bg-[#252525]" />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
                <div className="w-full lg:w-6/12 h-[200px] sm:h-[300px] lg:h-full order-1">
                    <img
                      src="/images/ai-brandavatar.png"
                      alt="BrandAvatar AI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative lg:static w-full lg:w-6/12 order-2">
                    <div className="p-6 sm:p-8 lg:p-16 bg-gradient-to-t from-[#181818] via-[#181818]/95 to-transparent lg:from-[#181818] lg:to-[#181818] relative z-10 h-full flex flex-col justify-center">
                      <h4 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
                        <span className="bg-gradient-to-tr from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent inline-block">BrandAvatar AI</span>
                        <span className="text-white text-xl sm:text-2xl lg:text-3xl mt-2 sm:mt-3 block leading-tight">
                          Paint Your Dream Digital Spokesperson
                        </span>
                      </h4>
                      <p className="font-urbanist text-sm sm:text-base lg:text-[1.5em] text-[#bbb] mt-4 sm:mt-6 lg:mt-10 max-w-prose">
                        Bring your ideal brand ambassador to life with
                        unparalleled customization. From ethnicity to pose, shape
                        every detail to perfectly embody your brand's essence and
                        resonate with your audience.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            
            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] bg-[#181818] min-h-[500px] sm:min-h-[600px] lg:h-[44em] relative overflow-hidden">
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="relative lg:static w-full lg:w-6/12 order-2 lg:order-1">
                    <div className="p-6 sm:p-8 lg:p-16 bg-gradient-to-t from-[#181818] via-[#181818]/95 to-transparent lg:from-[#181818] lg:to-[#181818] relative z-10 h-full flex flex-col justify-center">
                      <h4 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
                        <span className="bg-gradient-to-tr from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent inline-block">WindmillTwin AI</span>
                        <span className="text-white text-xl sm:text-2xl lg:text-3xl mt-2 sm:mt-3 block leading-tight">
                          Digital Twin for Turbine Optimization
                        </span>
                      </h4>
                      <p className="font-urbanist text-sm sm:text-base lg:text-[1.5em] text-[#bbb] mt-4 sm:mt-6 lg:mt-10 max-w-prose">
                        Harness AI-powered digital twin technology to predict and
                        visualize windmill performance in real-time. Our
                        interactive 3D interface revolutionizes turbine management
                        and optimization.
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 h-[200px] sm:h-[300px] lg:h-full order-1 lg:order-2">
                    <img
                      src="/images/WindmillTwin AI.png"
                      alt="WindmillTwin AI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </section>
    </div>
  );
}
