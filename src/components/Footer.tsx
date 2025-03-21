"use client";
import { motion } from "framer-motion";
import { section } from "framer-motion/client";
import Link from "next/link";
import { useState } from "react";
import RequestPocPopUp from "./popup/RequestPocPopUp";
import ScheduleCallPopUp from "./popup/ScheduleCallPopUp";

export default function Footer() {
  const [isPocPopupOpen, setIsPocPopupOpen] = useState(false);
  const [isSchedulePopupOpen, setIsSchedulePopupOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <footer className="bg-black pt-[3em]">
      <div className="px-[1em] lg:px-6 ">
        <div className="bg-[#313131] xl:rounded-t-[100px] lg:rounded-t-[90px] rounded-t-[30px] relative overflow-hidden">
          <div className="grid xl:grid-cols-4 grid-col-1 xl:pt-16 xl:px-16 lg:pt-12 lg:px-12 pt-6 px-6">
            <div
              className="text-black py-5 xl:py-0 fade-up"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate3d(0px, 0px, 0px)",
                opacity: 1
              }}
            >
              <h6 className="text-2xl font-[700] text-[36px] leading-[50px] lg:w-9/12 w-full bg-gradient-to-tl from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent">
                AI is here to Stay
                <br />
                Let’s win together
              </h6>
              <p className="text-[#909090] text-faro font-[400] text-[21px] pt-8 w-10/12 leading-[30px]">
                Do you know, that our first Business to AI alignment session as well
                as{" "}
                <span className=" font-[600] text-[#aaa]">
                  small PoC’s are&nbsp;free&nbsp;of&nbsp;cost?
                </span>
              </p>
            </div>
            <div
              className="text-black py-5 xl:py-0 fade-up"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate3d(0px, 0px, 0px)",
                opacity: 1
              }}
            >
              <h6 className="text-faro font-[700] text-[22px] text-[#00d188] leading-[36.41px] w-9/12 pb-6">
                Let's work together
              </h6>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <div className="text-faro flex items-center rounded-full text-[#bbb] gap-4 font-[600] group/bento cursor-pointer text-[26px] leading-[36.41px] transition-all duration-500">
                    Say Hello
                    
                      <div className="relative p-[3px] inline-block rounded-full group-hover/bento:bg-gradient-to-r transition-all duration-300 ease-in-out from-[#00A6FF] via-[#FF5959] to-[#FFC073]">
                        <div className="p-2 bg-[#313131] rounded-full w-full h-full group-hover/bento:rotate-45 transition-all duration-500 ease-in-out">
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
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="text-faro flex items-center rounded-full text-[#bbb] gap-4 font-[600] group/bento cursor-pointer text-[26px] leading-[36.41px] transition-all duration-500" onClick={() => setIsSchedulePopupOpen(true)}>
                    Schedule a&nbsp;Call
                    <div className="relative p-[3px] inline-block rounded-full group-hover/bento:bg-gradient-to-r transition-all duration-300 ease-in-out from-[#00A6FF] via-[#FF5959] to-[#FFC073]" >
                      <div className="p-2 bg-[#313131] rounded-full w-full h-full group-hover/bento:rotate-45 transition-all duration-500 ease-in-out">
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
                <div className="flex flex-wrap gap-3">
                  <div 
                    className="text-faro flex items-center rounded-full text-[#bbb] gap-4 font-[600] group/bento cursor-pointer text-[26px] leading-[36.41px] transition-all duration-500"
                    onClick={() => setIsPocPopupOpen(true)}
                  >
                    Request a Free PoC
                    <div className="relative p-[3px] inline-block rounded-full group-hover/bento:bg-gradient-to-r transition-all duration-300 ease-in-out from-[#00A6FF] via-[#FF5959] to-[#FFC073]">
                      <div className="p-2 bg-[#313131] rounded-full w-full h-full group-hover/bento:rotate-45 transition-all duration-500 ease-in-out">
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
              </div>
            </div>
            <div
              className="text-black py-5 xl:py-0 fade-up"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate3d(0px, 0px, 0px)",
                opacity: 1
              }}
            >
              <h6 className="text-faro font-[700] text-[22px] leading-[36.41px] w-9/12 text-[#00d188] pb-6">
                Explore
              </h6>
              <Link
                className="text-[#909090] block text-faro font-[500] text-[20px] pt-3 w-10/12 leading-[30px]"
                href="/about"
              >
                Our Story
              </Link>
              <Link
                className="text-[#909090] block text-faro font-[500] text-[20px] pt-3 w-10/12 leading-[30px]"
                href="/models"
              >
                AI Models
              </Link>
              <Link
                className="text-[#909090] block text-faro font-[500] text-[20px] pt-3 w-10/12 leading-[30px]"
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <h1 className="text-7xl text-center md:text-[150px] lg:text-[230px] xl:text-[300px] 2xl:text-[350px] font-bold bg-gradient-to-tl from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent opacity-85">
            SLATE AI
          </h1>
        </div>
      </div>
    </footer>
    <RequestPocPopUp 
      isOpen={isPocPopupOpen}
      onClose={() => setIsPocPopupOpen(false)}
    />
    <ScheduleCallPopUp
      isOpen={isSchedulePopupOpen}
      onClose={() => setIsSchedulePopupOpen(false)}
    />
    </div>
  );
}


