"use client";
import { motion } from "framer-motion";
import { section } from "framer-motion/client";

export default function OurService() {
  return (
    <div>
      <section className="lg:py-[7.5em] px-[1em] lg:px-0 py-[3em] overflow-x-hidden">
        <section className="lg:max-w-[80%] max-w-full mx-auto">
          <div className="rounded-[30px]">
            <div
              className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate3d(0px, 19.4551px, 0px) scale(0.9514, 0.9514)",
                opacity: "1",
              }}
            >
              <h3 className="text-base sm:text-lg lg:text-xl text-green-400 mb-2 sm:mb-3 lg:mb-4 text-center font-medium">
                Our Services can help in
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl text-white font-bold text-center leading-tight">
                Your Business Journey with AI
                <br className="sm:hidden" />
                <span className="block mt-2 sm:mt-3 lg:mt-4 leading-tight bg-gradient-to-tl from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent">
                  from Concept to{" "}
                  <br className="sm:hidden" />
                  <span className="inline sm:inline">User Experience</span>
                </span>
              </h2>
            </div>
            <div className="xl:px-[5em] lg:px-[1em]">
              <div className="h-full  w-full grid lg:grid-cols-2 grid-cols-1 pb-[10%]  xl:gap-16 lg:gap-8 gap-8">
                {/* Card 1 - From Left */}
                <motion.div
                  initial={{ opacity: 0, x: -180 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="flex col-span-1 rounded-[1em] sm:rounded-[1.5em] lg:rounded-[2em] overflow-hidden"
                >
                  <div className="relative w-full p-4 sm:p-8 lg:p-14 bg-[url(/images/effect1.png)] bg-cover bg-center rounded-[1em] sm:rounded-[1.5em] lg:rounded-[2em] border border-[#ffffff1a]">
                    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                      <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
                        <h5 className="bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-start pb-1 sm:pb-2 font-[500] text-3xl sm:text-4xl lg:text-[56px] leading-tight sm:leading-[1.2] lg:leading-[68px]">
                          PoC
                          <br className="hidden lg:block"/> Development
                        </h5>
                        <p className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb] w-full sm:w-11/12">
                          Rapidly validate AI concepts with functional
                          Proof-of-Concept models
                        </p>
                      </div>
                      <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                        <div className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="text-[#00D188] mt-1.5 w-4 h-4 sm:w-5 sm:h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                          </svg>
                          <span className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb]">
                            Swift prototyping of AI solutions for feasibility
                            testing
                          </span>
                        </div>
                        <div className="flex items-start gap-5">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="text-[#00D188] mt-2 w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                          </svg>
                          <span className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb]">
                            Iterative refinement based on stakeholder feedback
                          </span>
                        </div>
                        <div className="flex items-start gap-5">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="text-[#00D188] mt-2 w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                          </svg>
                          <span className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb]">
                            Scalability assessment for full-scale implementation potential
                          </span>
                        </div>
                        <div className="flex items-start gap-5">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="text-[#00D188] mt-2 w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                          </svg>
                          <span className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb]">
                            Clear documentation of PoC outcomes and insights
                          </span>
                        </div>
                      </div>
                      {/* <div className="mt-4">
                        <div className="w-auto">
                          <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full hover:shadow-[0_0_20px_rgba(0,166,255,0.7)] transition-shadow duration-300">
                            <div className="text-white flex items-center bg-[#181818] rounded-full gap-4 font-[400] cursor-pointer text-[1.25em] leading-[1em] py-3 px-6 transition-all duration-500">
                              Learn More
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </motion.div>

                {/* Card 2 - From Right */}
                <motion.div
                  initial={{ opacity: 0, x: 180 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="flex col-span-1 lg:translate-y-[15%] rounded-[1em] sm:rounded-[1.5em] lg:rounded-[2em] overflow-hidden"
                >
                  <div className="relative w-full p-4 sm:p-8 lg:p-14 bg-[url(/images/effect2.png)] bg-cover bg-center rounded-[1em] sm:rounded-[1.5em] lg:rounded-[2em] border border-[#ffffff1a]">
                    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                      <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
                        <h5 className="bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-start pb-1 sm:pb-2 font-[500] text-3xl sm:text-4xl lg:text-[56px] leading-tight sm:leading-[1.2] lg:leading-[68px]">
                          AI
                          <br className="hidden lg:block"/> Consulting
                        </h5>
                        <p className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb] w-full sm:w-11/12">
                          Expert guidance to shape your AI strategy and
                          implementation
                        </p>
                      </div>
                      <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                        <div className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="text-[#00D188] mt-1.5 w-4 h-4 sm:w-5 sm:h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                          </svg>
                          <span className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb]">
                            Comprehensive AI readiness assessments for your organization
                          </span>
                        </div>
                        <div className="flex items-start gap-5">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="text-[#00D188] mt-2 w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                          </svg>
                          <span className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb]">
                          Strategic roadmapping for long-term AI integration
                          </span>
                        </div>
                        <div className="flex items-start gap-5">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="text-[#00D188] mt-2 w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                          </svg>
                          <span className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb]">
                          Ethics and compliance reviews for responsible AI
                          </span>
                        </div>
                        <div className="flex items-start gap-5">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="text-[#00D188] mt-2 w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                          </svg>
                          <span className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb]">
                          Knowledge transfer sessions to empower your team
                          </span>
                        </div>
                      </div>
                      {/* <div className="mt-4">
                        <div className="w-auto">
                          <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full hover:shadow-[0_0_20px_rgba(0,166,255,0.7)] transition-shadow duration-300">
                            <div className="text-white flex items-center bg-[#181818] rounded-full gap-4 font-[400] cursor-pointer text-[1.25em] leading-[1em] py-3 px-6 transition-all duration-500">
                              Learn More
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </motion.div>

                {/* Card 3 - From Left */}
                <motion.div
                  initial={{ opacity: 0, x: -180 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="flex col-span-1 rounded-[1em] sm:rounded-[1.5em] lg:rounded-[2em] overflow-hidden"
                >
                  <div className="relative w-full p-4 sm:p-8 lg:p-14 bg-[url(/images/effect2.png)] bg-cover bg-center rounded-[1em] sm:rounded-[1.5em] lg:rounded-[2em] border border-[#ffffff1a]">
                    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                      <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
                        <h5 className="bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-start pb-1 sm:pb-2 font-[500] text-3xl sm:text-4xl lg:text-[56px] leading-tight sm:leading-[1.2] lg:leading-[68px]">
                          Optimizing
                          <br className="hidden lg:block"/> AI
                        </h5>
                        <p className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb] w-full sm:w-11/12">
                          Revitalizing and enhancing inefficient or abandoned AI projects
                        </p>
                      </div>
                      <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                        <div className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="text-[#00D188] mt-1.5 w-4 h-4 sm:w-5 sm:h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                          </svg>
                          <span className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb]">
                            Comprehensive audit of existing AI implementations
                          </span>
                        </div>
                        <div className="flex items-start gap-5">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="text-[#00D188] mt-2 w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                          </svg>
                          <span className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb]">
                          Identifying and resolving issues from previous vendors
                          </span>
                        </div>
                        <div className="flex items-start gap-5">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="text-[#00D188] mt-2 w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                          </svg>
                          <span className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb]">
                          Optimizing AI models for improved accuracy and efficiency
                          </span>
                        </div>
                        <div className="flex items-start gap-5">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="text-[#00D188] mt-2 w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                          </svg>
                          <span className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb]">
                          Seamless takeover and upgrade of stalled AI initiatives
                          </span>
                        </div>
                      </div>
                      {/* <div className="mt-4">
                        <div className="w-auto">
                          <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full hover:shadow-[0_0_20px_rgba(0,166,255,0.7)] transition-shadow duration-300">
                            <div className="text-white flex items-center bg-[#181818] rounded-full gap-4 font-[400] cursor-pointer text-[1.25em] leading-[1em] py-3 px-6 transition-all duration-500">
                              Learn More
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </motion.div>

                {/* Card 4 - From Right */}
                <motion.div
                  initial={{ opacity: 0, x: 180 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="flex col-span-1 rounded-[1em] sm:rounded-[1.5em] lg:rounded-[2em] overflow-hidden lg:translate-y-[15%]"
                >
                  <div className="relative w-full p-4 sm:p-8 lg:p-14 bg-[url(/images/effect1.png)] bg-cover bg-center rounded-[1em] sm:rounded-[1.5em] lg:rounded-[2em] border border-[#ffffff1a]">
                    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                      <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
                        <h5 className="bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-start pb-1 sm:pb-2 font-[500] text-3xl sm:text-4xl lg:text-[56px] leading-tight sm:leading-[1.2] lg:leading-[68px]">
                          Comprehensive
                          <br className="hidden lg:block"/> AI Deliverables
                        </h5>
                        <p className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb] w-full sm:w-11/12">
                          Tangible AI-powered solutions driving real-world
                          business impact
                        </p>
                      </div>
                      <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                        <div className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="text-[#00D188] mt-1.5 w-4 h-4 sm:w-5 sm:h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                          </svg>
                          <span className="text-base sm:text-lg lg:text-[1.35em] text-[#aaa] font-[400] leading-snug sm:leading-relaxed">
                            Fully functional AI-integrated platforms tailored to your needs
                          </span>
                        </div>
                        <div className="flex items-start gap-5">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="text-[#00D188] mt-2 w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                          </svg>
                          <span className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb]">
                          Cross-platform mobile applications leveraging cutting-edge AI capabilities
                          </span>
                        </div>
                        <div className="flex items-start gap-5">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="text-[#00D188] mt-2 w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                          </svg>
                          <span className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb]">
                          Responsive web interfaces with embedded AI functionalities
                          </span>
                        </div>
                        <div className="flex items-start gap-5">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="text-[#00D188] mt-2 w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                          </svg>
                          <span className="text-lg sm:text-xl lg:text-[1.7em] font-[400] leading-snug sm:leading-relaxed lg:leading-[1.4em] text-[#bbb]">
                          Customized AI models deployed within user-friendly ecosystems
                          </span>
                        </div>
                      </div>
                      {/* <div className="mt-4">
                        <div className="w-auto">
                          <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full hover:shadow-[0_0_20px_rgba(0,166,255,0.7)] transition-shadow duration-300">
                            <div className="text-white flex items-center bg-[#181818] rounded-full gap-4 font-[400] cursor-pointer text-[1.25em] leading-[1em] py-3 px-6 transition-all duration-500">
                              Learn More
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
