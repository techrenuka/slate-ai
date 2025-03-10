"use client";
import { motion } from "framer-motion";
import { section } from "framer-motion/client";

export default function OurWork() {
  return (
    <div>
      <section className="lg:py-[7.5em] px-[1em] lg:px-0 py-[3em] overflow-hidden">
        <section className="mx-auto lg:max-w-[80%] max-w-full flex-grow">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg text-green-400 mb-2 text-center">
              ⁠Experience Our Work
            </h3>
            <h5 className="text-4xl text-white md:text-5xl font-bold text-center">
              Upcoming Launch Week Solutions
              <br />
              <span className="block leading-tight bg-gradient-to-l from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent">
                for Smarter Enterprises
              </span>
            </h5>
          </motion.div>

          <div className="lg:gap-y-[10em] gap-y-[3em] lg:pt-[7em] pt-[2em] flex flex-col">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-[40px] bg-[#181818] timeline-card h-[44em] lg:flex relative overflow-hidden">
                <div className=" flex justify-start items-center lg:w-6/12 w-full h-full">
                  <div className="lg:p-16 p-6 bg-gradient-to-t from-[rgba(0,0,0,0.85)] h-full from-[50%]  to-[rgba(0,0,0,0.6)] flex flex-col justify-center lg:from-[#181818] lg:to-[#181818]  z-30">
                    <h4 className="bg-gradient-to-tr from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl font-bold">
                      <span>Receipt AI</span>
                      <br />
                      <span className="text-white text-3xl">
                        {" "}
                        Expense Tracking Simplified
                      </span>
                    </h4>
                    <p className="font-urbanist text-fade  font-[400] text-[1.5em] lg:w-11/12 w-full    text-[#bbb] py-10">
                      Transform paper receipts into actionable data with our
                      AI-powered solution. Streamline expense management, reduce
                      errors, and integrate seamlessly with your existing
                      systems.
                    </p>
                    <div>
                      <div className="w-auto">
                        <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full hover:shadow-[0_0_20px_rgba(0,166,255,0.7)] transition-shadow duration-300">
                          <div className="text-white flex items-center bg-[#181818] rounded-full gap-4 font-[400] group/bento cursor-pointer text-[1.25em] leading-[1em] py-3 px-6 transition-all duration-500">
                            Learn More
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 top-0 h-full sm:w-6/12 w-full ">
                  <img
                    src="/images/ai-invoice.png"
                    alt="img"
                    className="h-full pt-0 object-cover w-full   rounded-e-xl"
                  />
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
              <div className="rounded-[40px] bg-[#181818] timeline-card h-[44em] lg:flex relative overflow-hidden">
                <div className="lg:w-6/12" />
                <div className=" flex justify-start items-center lg:w-6/12 w-full h-full">
                  <div className="lg:p-16 p-6 bg-gradient-to-t from-[rgba(0,0,0,0.85)] h-full from-[50%]  to-[rgba(0,0,0,0.6)] flex flex-col justify-center lg:from-[#181818] lg:to-[#181818]  z-30">
                    <h4 className="bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl font-bold">
                      <span>BrandAvatar AI</span>
                      <br />
                      <span className="text-white text-3xl">
                        {" "}
                        Paint Your Dream Digital Spokesperson
                      </span>
                    </h4>
                    <p className="font-urbanist text-fade  font-[400] text-[1.5em] lg:w-11/12 w-full    text-[#bbb] py-10">
                      Bring your ideal brand ambassador to life with
                      unparalleled customization. From ethnicity to pose, shape
                      every detail to perfectly embody your brand's essence and
                      resonate with your audience.
                    </p>
                    <div>
                      <div className="w-auto">
                        <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full hover:shadow-[0_0_20px_rgba(0,166,255,0.7)] transition-shadow duration-300">
                          <div className="text-white flex items-center bg-[#181818] rounded-full gap-4 font-[400] group/bento cursor-pointer text-[1.25em] leading-[1em] py-3 px-6 transition-all duration-500">
                            Learn More
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute lg:left-0 right-0 top-0 h-full sm:w-6/12 w-full ">
                    <img
                      src="/images/ai-brandavatar.png"
                      alt="img"
                      className="h-full pt-0 object-cover w-full rounded-s-xl"
                    />
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
              <div className="rounded-[40px] bg-[#181818] timeline-card h-[44em] lg:flex relative overflow-hidden">
                <div className="flex justify-start items-center lg:w-6/12 w-full h-full">
                  <div className="lg:p-16 p-6 bg-gradient-to-t from-[rgba(0,0,0,0.85)] h-full from-[50%] to-[rgba(0,0,0,0.6)] flex flex-col justify-center lg:from-[#181818] lg:to-[#181818] z-30">
                    <h4 className="bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl font-bold">
                      <span>WindmillTwin AI</span>
                      <br />
                      <span className="text-white text-3xl">
                        {" "}
                        Digital Twin for Turbine Optimization
                      </span>
                    </h4>
                    <p className="font-urbanist text-fade  font-[400] text-[1.5em] lg:w-11/12 w-full    text-[#bbb] py-10">
                      Harness AI-powered digital twin technology to predict and
                      visualize windmill performance in real-time. Our
                      interactive 3D interface revolutionizes turbine management
                      and optimization.
                    </p>
                    <div>
                      <div className="w-auto">
                        <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full hover:shadow-[0_0_20px_rgba(0,166,255,0.7)] transition-shadow duration-300">
                          <div className="text-white flex items-center bg-[#181818] rounded-full gap-4 font-[400] group/bento cursor-pointer text-[1.25em] leading-[1em] py-3 px-6 transition-all duration-500">
                            Learn More
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 top-0 h-full sm:w-6/12 w-full">
                  <img
                    src="/images/WindmillTwin AI.png"
                    alt="img"
                    className="h-full pt-0 object-cover w-full rounded-e-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </section>
    </div>
  );
}
