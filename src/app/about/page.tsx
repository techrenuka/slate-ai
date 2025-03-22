"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8">
        <section className="w-full px-4 sm:px-6 lg:px-0 py-12 sm:py-16 lg:py-[7.5em] mx-auto">
          <div className="flex justify-center flex-col w-full lg:max-w-[70%] pt-[3em] mx-auto">
            {/* Skeleton for title and description */}
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="gap-4 sm:gap-6 lg:gap-[6em] grid grid-cols-1"
            >
              <div className="flex flex-col bg-[#181818] min-h-[30em] sm:min-h-[32em] lg:h-[35em] rounded-xl overflow-hidden md:flex-row items-center">
                <div className="h-[250px] sm:h-[300px] md:h-full md:w-2/5 bg-[#252525]" />
                <div className="p-5 sm:p-8 md:w-3/5 lg:p-14 space-y-4">
                  <div className="h-8 w-3/4 bg-[#252525] rounded-md" />
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-[#252525] rounded-md" />
                    <div className="h-4 w-5/6 bg-[#252525] rounded-md" />
                    <div className="h-4 w-4/5 bg-[#252525] rounded-md" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skeleton for main image */}
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="lg:py-[5em] py-[3em]"
            >
              <div className="w-full h-[300px] bg-[#181818] rounded-xl" />
            </motion.div>

            {/* Skeleton for story section title */}
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="space-y-6"
            >
              <div className="flex justify-center">
                <div className="h-12 w-48 bg-[#181818] rounded-lg" />
              </div>
              <div className="space-y-3 flex flex-col items-center">
                <div className="h-4 w-1/2 bg-[#181818] rounded-md" />
              </div>
            </motion.div>

            {/* Skeleton for story cards */}
            <div className="flex flex-col gap-16 mt-16">
              {[1, 2, 3, 4, 5].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
                  className="gap-4 sm:gap-6 lg:gap-[6em] grid grid-cols-1"
                >
                  <div className="flex flex-col bg-[#181818] min-h-[30em] sm:min-h-[32em] lg:h-[35em] rounded-xl overflow-hidden md:flex-row items-center">
                    <div className={`h-[250px] sm:h-[300px] md:h-full md:w-2/5 bg-[#252525] ${index % 2 === 0 ? 'order-first md:order-first' : 'order-first md:order-last'}`} />
                    <div className="p-5 sm:p-8 md:w-3/5 lg:p-14 space-y-4">
                      <div className="h-8 w-3/4 bg-[#252525] rounded-md" />
                      <div className="space-y-3">
                        <div className="h-4 w-full bg-[#252525] rounded-md" />
                        <div className="h-4 w-5/6 bg-[#252525] rounded-md" />
                        <div className="h-4 w-4/5 bg-[#252525] rounded-md" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8">
      <section className="w-full px-4 sm:px-6 lg:px-0 py-12 sm:py-16 lg:py-[7.5em] mx-auto">
        <div className="flex justify-center flex-col w-full lg:max-w-[70%] pt-[3em] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.75 }}
          >
            <div className="text-center">
              <h2 className="bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-6xl inline-flex font-bold lg:leading-[1.3em] leading-[1.2em]">
                About Us
              </h2>
            </div>
            <p className="text-[#aaaaaa] pt-3 text-center font-[400] text-base sm:text-lg lg:text-[1.5em] font-urbanist px-4 sm:px-6 lg:px-0">
              We turn AI complexity into business simplicity. For over two
              decades, we've been the architects of digital transformation,{" "}
              <br /> evolving from global IT pioneers to AI innovation leaders.
              Today, we build the intelligent solutions that
              <br /> make enterprises smarter, faster, and ready for tomorrow.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.75 }}
            className="lg:py-[5em] py-[3em]"
          >
            <img
              src="/images/ai-solution.png"
              alt="other"
              className="w-full h-auto rounded-xl overflow-hidden shadow-lg "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.75 }}
            className="lg:pb-[5em] pb-[3em]"
          >
            <div className="text-center">
              <h2 className="bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-6xl inline-flex font-bold lg:leading-[1.3em] leading-[1.2em]">
                Our AI Story
              </h2>
            </div>
            <p className="text-[#aaaaaa] pt-3 text-center font-[400] text-base sm:text-lg lg:text-[1.5em] font-urbanist px-4 sm:px-6 lg:px-0">
              Let us walk you through how it all started and where are we right
              now!
            </p>
          </motion.div>

          <div className="flex flex-col gap-16">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.75 }}
              className="gap-4 sm:gap-6 lg:gap-[6em] grid grid-cols-1"
            >
              <div className="flex flex-col bg-[#181818] min-h-[30em] sm:min-h-[32em] lg:h-[35em] rounded-xl overflow-hidden md:flex-row items-center">
                <div className="h-[250px] sm:h-[300px] md:h-full md:w-2/5">
                  <img
                    alt="Transforming Ideas to Realities since 2003"
                    loading="lazy"
                    width={500}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover object-top h-full w-full"
                    srcSet="/images/ai-visualize.jpg"
                    src="/images/ai-visualize.jpg"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="p-5 sm:p-8 md:w-3/5 lg:p-14">
                  <h3 className="bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2em] inline-block">
                    Transforming Ideas to Realities since 2003
                  </h3>
                  <p className="text-[#e2e2e2] pt-4 font-[400] text-base sm:text-lg lg:text-[1.3em] font-urbanist">
                    Twenty years of relentless innovation has taught us one
                    thing: technology should solve real problems. Since 2003,
                    we've been the force behind digital transformations that
                    matter, serving Fortune 500 companies and ambitious startups
                    worldwide.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.75 }}
              className="gap-4 sm:gap-6 lg:gap-[6em] grid grid-cols-1"
            >
              <div className="flex flex-col bg-[#181818] min-h-[30em] sm:min-h-[32em] lg:h-[35em] rounded-xl overflow-hidden md:flex-row md:flex-row-reverse items-center">
                <div className="h-[250px] sm:h-[300px] md:h-full md:w-2/5">
                  <img
                    alt="Where It All Began"
                    loading="lazy"
                    width={500}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover object-top h-full w-full"
                    srcSet="/images/ai-new-begining.jpg"
                    src="/images/ai-new-begining.jpg"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="p-5 sm:p-8 md:w-3/5 lg:p-14">
                  <h3 className="bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2em] inline-block">
                    Where It All Began
                  </h3>
                  <p className="text-[#e2e2e2] pt-4 font-[400] text-base sm:text-lg lg:text-[1.3em] font-urbanist">
                    Our journey started with a simple belief – every business
                    deserves powerful technology that just works. We built
                    solutions that made enterprises more efficient, more
                    connected, and more successful. But we weren't content with
                    just solving today's problems.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.75 }}
              className="gap-4 sm:gap-6 lg:gap-[6em] grid grid-cols-1"
            >
              <div className="flex flex-col bg-[#181818] min-h-[30em] sm:min-h-[32em] lg:h-[35em] rounded-xl overflow-hidden md:flex-row items-center">
                <div className="h-[250px] sm:h-[300px] md:h-full md:w-2/5">
                  <img
                    alt="Romance with AI"
                    loading="lazy"
                    width={500}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover object-top h-full w-full"
                    srcSet="/images/romance-with-ai.jpg"
                    src="/images/romance-with-ai.jpg"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="p-5 sm:p-8 md:w-3/5 lg:p-14">
                  <h3 className="bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2em] inline-block">
                    Romance with AI
                  </h3>
                  <p className="text-[#e2e2e2] pt-4 font-[400] text-base sm:text-lg lg:text-[1.3em] font-urbanist">
                    When our clients needed more than off-the-shelf solutions,
                    we created MeraCRM – enterprise SaaS that adapts to how
                    businesses actually work. As we automated countless
                    processes and transformed workflows, we saw a bigger
                    opportunity emerging: the power of AI to revolutionize
                    everything.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.75 }}
              className="gap-4 sm:gap-6 lg:gap-[6em] grid grid-cols-1"
            >
              <div className="flex flex-col bg-[#181818] min-h-[30em] sm:min-h-[32em] lg:h-[35em] rounded-xl overflow-hidden md:flex-row md:flex-row-reverse items-center">
                <div className="h-[250px] sm:h-[300px] md:h-full md:w-2/5">
                  <img
                    alt="The AI Leap"
                    loading="lazy"
                    width={500}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover object-top h-full w-full"
                    srcSet="/images/ai-leap.png"
                    src="/images/ai-leap.png"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="p-5 sm:p-8 md:w-3/5 lg:p-14">
                  <h3 className="bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2em] inline-block">
                    The AI Leap
                  </h3>
                  <p className="text-[#e2e2e2] pt-4 font-[400] text-base sm:text-lg lg:text-[1.3em] font-urbanist">
                    In 2023, we took a bold step. We launched our dedicated AI
                    division – not because AI was trending, but because we saw
                    its true potential to transform businesses. This wasn't just
                    a new service; it was the natural evolution of our mission
                    to deliver technology that makes a real difference.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.75 }}
              className="gap-4 sm:gap-6 lg:gap-[6em] grid grid-cols-1"
            >
              <div className="flex flex-col bg-[#181818] min-h-[30em] sm:min-h-[32em] lg:h-[35em] rounded-xl overflow-hidden md:flex-row items-center">
                <div className="h-[250px] sm:h-[300px] md:h-full md:w-2/5">
                  <img
                    alt="Who We Are Today"
                    loading="lazy"
                    width={500}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover object-top h-full w-full"
                    srcSet="/images/who-ai-today.png"
                    src="/images/who-ai-today.png"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="p-5 sm:p-8 md:w-3/5 lg:p-14">
                  <h3 className="bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2em] inline-block">
                    Who We Are Today
                  </h3>
                  <p className="text-[#e2e2e2] pt-4 font-[400] text-base sm:text-lg lg:text-[1.3em] font-urbanist">
                    We're problem solvers, innovators, and trusted partners. Our
                    global team brings together decades of enterprise experience
                    with cutting-edge AI expertise. We don't just implement AI –
                    we shape it to fit your business, your goals, and your
                    future.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
