"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import RequestPocPopUp from "./popup/RequestPocPopUp";
import { useState, useEffect } from "react";

export default function ContactUs() {
  const [isPocPopupOpen, setIsPocPopupOpen] = useState(false);
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
        <section className="py-8 sm:py-12 lg:py-[7.5em] px-4 sm:px-6 lg:px-8" id="contact">
          <section className="max-w-[95%] sm:max-w-[90%] lg:max-w-[80%] mx-auto">
            <div className="rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] overflow-hidden contact-animation bg-[#181818]">
              <div className="w-full min-h-[30em] lg:h-[47em] flex flex-col lg:flex-row gap-6 lg:gap-16">
                <motion.div
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-full lg:w-[40%] h-[300px] sm:h-[400px] lg:h-auto"
                >
                  <div className="w-full h-full bg-[#252525]" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-full lg:w-[60%] p-4 sm:p-6 lg:p-10 flex items-center"
                >
                  <div className="flex flex-col items-start w-full gap-4 sm:gap-6">
                    <div className="h-12 w-3/4 bg-[#252525] rounded-md" />
                    <div className="space-y-3">
                      <div className="h-4 w-full bg-[#252525] rounded-md" />
                      <div className="h-4 w-5/6 bg-[#252525] rounded-md" />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 py-6 sm:py-8 lg:py-[4em] w-full">
                      <div className="h-12 w-48 bg-[#252525] rounded-full" />
                      <div className="h-12 w-48 bg-[#252525] rounded-full" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 w-full bg-[#252525] rounded-md" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="py-8 sm:py-12 lg:py-[7.5em] px-4 sm:px-6 lg:px-8" id="contact">
        <section className="max-w-[95%] sm:max-w-[90%] lg:max-w-[80%] mx-auto">
          <div className="rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] overflow-hidden contact-animation bg-[#181818]">
            <div className="w-full min-h-[30em] lg:h-[47em] flex flex-col lg:flex-row gap-6 lg:gap-16">
              <div className="w-full lg:w-[40%] h-[300px] sm:h-[400px] lg:h-auto">
                <div className="w-full h-full overflow-hidden">
                  <img
                    alt="ContactImg"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="/images/handshake.jpg"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-[60%] p-4 sm:p-6 lg:p-10 flex items-center">
                <div className="flex flex-col items-start w-full gap-4 sm:gap-6">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl w-full text-start font-bold leading-tight bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent">
                    AI is here to Stay
                    <br className="hidden sm:block" />
                    Let's win together
                  </h3>
                  <p className="text-xl sm:text-2xl lg:text-3xl text-start font-[500] text-[#808080]">
                    Do you know, that our first Business to AI alignment session
                    as well as{" "}
                    <span className="font-[600] text-[#aaa]">
                      small PoC's are&nbsp;free&nbsp;of&nbsp;cost?
                    </span>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 py-6 sm:py-8 lg:py-[4em] w-full">
                    <Link href="/contact">
                      <div className="text-white flex items-center justify-center sm:justify-start border rounded-full gap-3 sm:gap-4 font-[700] group cursor-pointer text-lg sm:text-xl lg:text-[26px] py-2 sm:py-3 px-4 sm:px-6 transition-all duration-500 border-[#252525] hover:border-[#454545]">
                        Schedule a&nbsp;Call
                        <div className="relative p-[2px] inline-block rounded-full group-hover:bg-gradient-to-r transition-all duration-300 from-[#00A6FF] via-[#FF5959] to-[#FFC073]">
                          <div className="p-2 bg-[#252525] rounded-full w-full h-full group-hover:rotate-45 transition-all duration-500 ease-in-out">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-white"
                              height={22}
                              width={22}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line x1={7} y1={17} x2={17} y2={7} />
                              <polyline points="7 7 17 7 17 17" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div onClick={() => setIsPocPopupOpen(true)} 
                      className="text-white flex items-center justify-center sm:justify-start border rounded-full gap-3 sm:gap-4 font-[700] group cursor-pointer text-lg sm:text-xl lg:text-[26px] py-2 sm:py-3 px-4 sm:px-6 transition-all duration-500 border-[#252525] hover:border-[#454545]">
                      Request a Free PoC
                      <div className="relative p-[2px] inline-block rounded-full group-hover:bg-gradient-to-r transition-all duration-300 from-[#00A6FF] via-[#FF5959] to-[#FFC073]">
                        <div className="p-2 bg-[#252525] rounded-full w-full h-full group-hover:rotate-45 transition-all duration-500 ease-in-out">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                            height={22}
                            width={22}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <line x1={7} y1={17} x2={17} y2={7} />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xl sm:text-2xl lg:text-3xl text-start font-[500] text-[#808080]">
                    You can also just{" "}
                    <span className="font-[700] cursor-pointer hover:border-b transition-all text-white text-lg sm:text-xl lg:text-[26px]">
                      Say Hello
                    </span>{" "}
                    or write us an{" "}
                    <span className="font-[600] cursor-pointer hover:border-b transition-all text-white text-lg sm:text-xl lg:text-[26px]">
                      Email
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <RequestPocPopUp 
        isOpen={isPocPopupOpen}
        onClose={() => setIsPocPopupOpen(false)}
      />
    </div>
  );
}
