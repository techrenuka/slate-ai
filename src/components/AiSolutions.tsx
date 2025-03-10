"use client";
import { motion } from "framer-motion";
import { section } from "framer-motion/client";

export default function AiSolutions() {
  return (
    <div><section className="max-w-[90%] py-8 mx-auto">
          <div className="rounded-[30px]">
            <div className="xl:px-[5em] lg:px-[1em]">
              <div className="h-full w-full flex items-center flex-col lg:flex-row xl:gap-16 lg:gap-8 gap-8">
                {/* Card 1 - From Left */}
                <motion.div
                  initial={{ opacity: 0, x: -180 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="flex overflow-hidden"
                >
                  <div className="flex justify-start w-full">
                    <div className="relative">
                      <h4
                        className="text-4xl text-white md:text-5xl font-bold text-center md:text-left"
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform: "translate3d(0px, 0px, 0px)",
                          opacity: 1,
                        }}
                      >
                        We architect AI solutions with{" "}
                        <span
                          className="block"
                          style={{
                            background:
                              "-webkit-linear-gradient(45deg, rgb(32, 180, 184), rgb(71, 144, 242)) text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          Data Privacy &amp; Ethics
                        </span>
                        as core components
                      </h4>
                      <p
                        className="font-urbanist  text-[1.5em] font-[400]  text-[#808080] text-center lg:text-start  text-fade pt-[2em] lg:w-11/12 w-full"
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform: "translate3d(0px, 0px, 0px)",
                          opacity: 1,
                        }}
                      >
                        Data Privacy is crucial for any business and for some of
                        them it is the actual IP for them. We architect AI
                        solutions in such a way that your Data never leaves your
                        secured vault or used as masked data instead
                        of&nbsp;original&nbsp;data.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2 - From Right */}
                <motion.div
                  initial={{ opacity: 0, x: 180 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center justify-center lg:w-1/2 w-full"
                >
                  <img
                    alt="lock"
                    loading="lazy"
                    width={259}
                    height={500}
                    decoding="async"
                    data-nimg={1}
                    className="object-contain w-auto h-[25rem] lg:h-[30rem]"
                    src="/images/lock.png"
                    style={{
                      color: "transparent",
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
