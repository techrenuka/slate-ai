"use client";

import { motion } from "motion/react";
import React from "react";

export default function Models() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <section className="w-full">
        <div
          style={{
            background:
              "-webkit-linear-gradient(45deg, rgb(171, 236, 219) 0%, rgb(10, 53, 89) 30%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 70%, rgb(10, 53, 89) 80%, rgb(171, 236, 219) 100%)",
          }}
        >
          <div className="mx-auto lg:max-w-[80%] max-w-full px-[1em] lg:px-0 flex-grow lg:py-[8.5em] py-[3em]  ">
            <div className="flex justify-center">
              <h1 className="bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-6xl inline-flex font-bold lg:leading-[1.3em] leading-[1.2em]">
                AI Models
              </h1>
            </div>
            <p className="text-[#aaaaaa] pt-3 text-center font-[400] text-[1.5em] font-urbanist">
              AI Models we use to solve business problems
            </p>
          </div>
        </div>
        <div className="flex-grow lg:py-[7.5em] py-[3em] flex">
          <div className="w-full">
            {/* Start Search */}
            <div className="flex w-full px-[1em] lg:px-0 justify-center items-center">
              <div className="flex w-full lg:w-auto flex-wrap lg:flex-nowrap gap-4">
                <div className="relative w-full lg:w-[400px]">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Type to search..."
                      className="w-full h-12 pl-12 pr-4 text-base text-white bg-[#1C1C1C] rounded-xl border border-[#333333] focus:outline-none focus:border-[#444444] placeholder:text-gray-500"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Search */}

            {/* Start OpenAI */}
            <div className="flex justify-start lg:max-w-[80%] max-w-full px-[1em] lg:px-0 mx-auto">
              <h2 className="fade-up pt-[1.5em] pb-[0.8em] blog-h2 leading-[1.25em] capitalize bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl">
                OpenAI
              </h2>
            </div>
            <div>
              <div className="relative w-full">
                <div
                  id="openai-scroll-container"
                  className="scroll-container flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] hide-scrollbar"
                >
                  <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l" />
                  <div className="flex flex-row justify-start gap-6 lg:px-[10%] px-[1em]">
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/e2cc0584-72ba-459a-b032-decab8384325"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                o1 Preview
                              </h2>
                              <p className="text-sm text-white">by OpenAI</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Advanced reasoning and problem-solving
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            O1 Preview represents a significant advancement in
                            AI technology, focusing on complex reasoning and
                            problem-solving tasks. It employs techni...
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-[#00D188] mr-3"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Complex problem-solving in STEM disciplines
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-[#00D188] mr-3"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Advanced coding tasks requiring thorough
                                analysis
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-[#00D188] mr-3"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Applications needing deep contextual
                                understanding
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-image"
                              >
                                <rect
                                  width={18}
                                  height={18}
                                  x={3}
                                  y={3}
                                  rx={2}
                                  ry={2}
                                />
                                <circle cx={9} cy={9} r={2} />
                                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                              </svg>
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-image"
                              >
                                <rect
                                  width={18}
                                  height={18}
                                  x={3}
                                  y={3}
                                  rx={2}
                                  ry={2}
                                />
                                <circle cx={9} cy={9} r={2} />
                                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/e2cc0584-72ba-459a-b032-decab8384325"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                o1 Mini
                              </h2>
                              <p className="text-sm text-white">by OpenAI</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Cost-effective AI for coding and simple tasks
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            O1 Mini is a streamlined version of the O1 series,
                            designed to offer a faster and more economical
                            alternative for users needing quick respon...
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-[#00D188] mr-3"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Quick coding tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-[#00D188] mr-3"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Simple content generation
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-[#00D188] mr-3"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Applications requiring speed over complexity
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/e2cc0584-72ba-459a-b032-decab8384325"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                GPT-4o mini
                              </h2>
                              <p className="text-sm text-white">by OpenAI</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Multimodal AI for text and vision
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            OpenAI's most cost-efficient small model, designed
                            to make advanced AI more accessible and affordable.
                            Offers superior textual and multimoda...
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-pen text-[#00D188] mr-3"
                              >
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                General language tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-theater text-[#00D188] mr-3"
                              >
                                <path d="M2 10s3-3 3-8" />
                                <path d="M22 10s-3-3-3-8" />
                                <path d="M10 2c0 4.4-3.6 8-8 8" />
                                <path d="M14 2c0 4.4 3.6 8 8 8" />
                                <path d="M2 10s2 2 2 5" />
                                <path d="M22 10s-2 2-2 5" />
                                <path d="M8 15h8" />
                                <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                                <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Reasoning
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/e2cc0584-72ba-459a-b032-decab8384325"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                GPT-4o
                              </h2>
                              <p className="text-sm text-white">by OpenAI</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Advanced reasoning and multimodal capabilities
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            GPT-4o builds on the capabilities of GPT-4,
                            emphasizing improved performance in both natural
                            language processing and multimodal tasks. It is...
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-message-circle text-[#00D188] mr-3"
                              >
                                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Sophisticated dialogues
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-heart text-[#00D188] mr-3"
                              >
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Personalized interactions
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/e2cc0584-72ba-459a-b032-decab8384325"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                GPT-4
                              </h2>
                              <p className="text-sm text-white">by OpenAI</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Enhanced text generation with reasoning
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            GPT-4 represents a significant advancement over its
                            predecessor, GPT-3, with improved accuracy, context
                            understanding, and response generati...
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-file-text text-[#00D188] mr-3"
                              >
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                <path d="M10 9H8" />
                                <path d="M16 13H8" />
                                <path d="M16 17H8" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Creative writing
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-[#00D188] mr-3"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Chatbots
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-code text-[#00D188] mr-3"
                              >
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Content generation
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/e2cc0584-72ba-459a-b032-decab8384325"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                GPT-3.5
                              </h2>
                              <p className="text-sm text-white">by OpenAI</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Text generation and understanding
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            GPT-3.5 serves as a robust model for various natural
                            language tasks, featuring improved capabilities over
                            GPT-3. It focuses on maintaining c...
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-layout-grid text-[#00D188] mr-3"
                              >
                                <rect width={7} height={7} x={3} y={3} rx={1} />
                                <rect
                                  width={7}
                                  height={7}
                                  x={14}
                                  y={3}
                                  rx={1}
                                />
                                <rect
                                  width={7}
                                  height={7}
                                  x={14}
                                  y={14}
                                  rx={1}
                                />
                                <rect
                                  width={7}
                                  height={7}
                                  x={3}
                                  y={14}
                                  rx={1}
                                />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Large-scale language tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-brain text-[#00D188] mr-3"
                              >
                                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                                <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                                <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                                <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                                <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                                <path d="M6 18a4 4 0 0 1-1.967-.516" />
                                <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Knowledge-intensive applications
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mr-[10%] pt-10">
                  <button
                    onClick={() => {
                      const container = document.querySelector(
                        "#openai-scroll-container"
                      );
                      if (container && container instanceof HTMLElement)
                        container.scrollLeft -= container.offsetWidth;
                    }}
                    className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-arrow-narrow-left h-6 w-6 text-gray-500"
                    >
                      <path d="M5 12l14 0" />
                      <path d="M5 12l4 4" />
                      <path d="M5 12l4 -4" />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      const container = document.querySelector(
                        "#openai-scroll-container"
                      );
                      if (container && container instanceof HTMLElement)
                        container.scrollLeft += container.offsetWidth;
                    }}
                    className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-arrow-narrow-right h-6 w-6 text-gray-500"
                    >
                      <path d="M5 12l14 0" />
                      <path d="M15 16l4 -4" />
                      <path d="M15 8l4 4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* End OpenAI */}

            {/* Start Anthropic */}
            <div className="flex justify-start lg:max-w-[80%] max-w-full px-[1em] lg:px-0 mx-auto">
              <h2 className="fade-up pt-[1.5em] pb-[0.8em] blog-h2 leading-[1.25em] capitalize bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl">
                Anthropic
              </h2>
            </div>
            <div>
              <div className="relative w-full">
                <div
                  id="anthropic-scroll-container"
                  className="scroll-container flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] hide-scrollbar"
                >
                  <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l" />
                  <div className="flex flex-row justify-start gap-6 lg:px-[10%] px-[1em]">
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/fea2708a-b63a-4064-b997-b6477d71264a"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Claude 3.5 Sonnet
                              </h2>
                              <p className="text-sm text-white">by Anthropic</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Poetic text generation
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Upgraded version of Claude 3 Sonnet with enhanced
                            features and improvements. Offers a balance between
                            speed and intelligence for enterprise ...
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-dollar-sign text-[#00D188] mr-3"
                              >
                                <line x1={12} x2={12} y1={2} y2={22} />
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Cost-efficient AI applications
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-chart-no-axes-column text-[#00D188] mr-3"
                              >
                                <line x1={18} x2={18} y1={20} y2={10} />
                                <line x1={12} x2={12} y1={20} y2={4} />
                                <line x1={6} x2={6} y1={20} y2={14} />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                High-volume tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-clock text-[#00D188] mr-3"
                              >
                                <circle cx={12} cy={12} r={10} />
                                <polyline points="12 6 12 12 16 14" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Real-time interactions
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/fea2708a-b63a-4064-b997-b6477d71264a"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Claude 3 Haiku
                              </h2>
                              <p className="text-sm text-white">by Anthropic</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Haiku generation
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Fastest and most compact model in the Claude 3
                            family, optimized for near-instant responsiveness
                            without compromising accuracy.
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-zap text-[#00D188] mr-3"
                              >
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                High-speed applications
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-clock text-[#00D188] mr-3"
                              >
                                <circle cx={12} cy={12} r={10} />
                                <polyline points="12 6 12 12 16 14" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Real-time interactions
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/fea2708a-b63a-4064-b997-b6477d71264a"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Claude 3 Sonnet
                              </h2>
                              <p className="text-sm text-white">by Anthropic</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Poetic structure generation
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Engineered to be dependable for scaled AI
                            deployments across various use cases, balancing
                            intelligence and speed.
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-factory text-[#00D188] mr-3"
                              >
                                <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                                <path d="M17 18h1" />
                                <path d="M12 18h1" />
                                <path d="M7 18h1" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Enterprise workloads
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-scale text-[#00D188] mr-3"
                              >
                                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                                <path d="M7 21h10" />
                                <path d="M12 3v18" />
                                <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Balanced performance
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/fea2708a-b63a-4064-b997-b6477d71264a"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Claude 3 Opus
                              </h2>
                              <p className="text-sm text-white">by Anthropic</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Creative literary generation
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Most powerful model in the Claude 3 family, designed
                            for highly complex tasks with top-level performance
                            and human-like understanding.
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-brain text-[#00D188] mr-3"
                              >
                                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                                <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                                <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                                <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                                <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                                <path d="M6 18a4 4 0 0 1-1.967-.516" />
                                <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Complex reasoning
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-chart-pie text-[#00D188] mr-3"
                              >
                                <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" />
                                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Advanced analysis
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-search text-[#00D188] mr-3"
                              >
                                <circle cx={11} cy={11} r={8} />
                                <path d="m21 21-4.3-4.3" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Research
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/fea2708a-b63a-4064-b997-b6477d71264a"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Claude 2
                              </h2>
                              <p className="text-sm text-white">by Anthropic</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            General text generation
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Significant improvement over Claude 1, with enhanced
                            capabilities in dialogue, content creation, and
                            complex reasoning.
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-message-square text-[#00D188] mr-3"
                              >
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Thoughtful dialogue
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-pencil text-[#00D188] mr-3"
                              >
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                <path d="m15 5 4 4" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Content creation
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-brain text-[#00D188] mr-3"
                              >
                                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                                <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                                <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                                <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                                <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                                <path d="M6 18a4 4 0 0 1-1.967-.516" />
                                <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Complex reasoning
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/fea2708a-b63a-4064-b997-b6477d71264a"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Claude 1
                              </h2>
                              <p className="text-sm text-white">by Anthropic</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Basic text capabilities
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Initial release of Claude, focusing on safe and
                            ethical AI interactions with basic language
                            understanding and generation capabilities.
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-clipboard text-[#00D188] mr-3"
                              >
                                <rect
                                  width={8}
                                  height={4}
                                  x={8}
                                  y={2}
                                  rx={1}
                                  ry={1}
                                />
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Basic language tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-shield text-[#00D188] mr-3"
                              >
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Safe interactions
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mr-[10%] pt-10">  
                  <button 
                  onClick={() => {
                    const container = document.querySelector(
                      "#anthropic-scroll-container"
                    );
                    if (container && container instanceof HTMLElement)
                      container.scrollLeft -= container.offsetWidth;
                  }}
                  className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50 hover:bg-gray-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-arrow-narrow-left h-6 w-6 text-gray-500"
                    >
                      <path d="M5 12l14 0" />
                      <path d="M5 12l4 4" />
                      <path d="M5 12l4 -4" />
                    </svg>
                  </button>
                  <button 
                onClick={() => {
                    const container = document.querySelector(
                      "#anthropic-scroll-container"
                    );
                    if (container && container instanceof HTMLElement)
                      container.scrollLeft += container.offsetWidth;
                  }}
                  className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50 hover:bg-gray-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-arrow-narrow-right h-6 w-6 text-gray-500"
                    >
                      <path d="M5 12l14 0" />
                      <path d="M15 16l4 -4" />
                      <path d="M15 8l4 4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* End Anthropic */}

            {/* Start Google */}
            <div className="flex justify-start lg:max-w-[80%] max-w-full px-[1em] lg:px-0 mx-auto">
              <h2 className="fade-up pt-[1.5em] pb-[0.8em] blog-h2 leading-[1.25em] capitalize bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl">
                Google
              </h2>
            </div>
            <div>
              <div className="relative w-full">
                <div
                  id="google-scroll-container"
                  className="scroll-container flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] hide-scrollbar"
                >
                  <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l" />
                  <div className="flex flex-row justify-start gap-6 lg:px-[10%] px-[1em]">
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/f1b17ecf-7a0e-4bbd-a9ff-9df9d42f42ae"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                PaLM 2
                              </h2>
                              <p className="text-sm text-white">by Google</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Multimodal processing integration model{" "}
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            State-of-the-art language model with improved
                            multilingual, reasoning and coding capabilities
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-compass text-[#00D188] mr-3"
                              >
                                <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
                                <circle cx={12} cy={12} r={10} />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Alignment research
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-cog text-[#00D188] mr-3"
                              >
                                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                                <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                <path d="M12 2v2" />
                                <path d="M12 22v-2" />
                                <path d="m17 20.66-1-1.73" />
                                <path d="M11 10.27 7 3.34" />
                                <path d="m20.66 17-1.73-1" />
                                <path d="m3.34 7 1.73 1" />
                                <path d="M14 12h8" />
                                <path d="M2 12h2" />
                                <path d="m20.66 7-1.73 1" />
                                <path d="m3.34 17 1.73-1" />
                                <path d="m17 3.34-1 1.73" />
                                <path d="m11 13.73-4 6.93" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Llama 2 fine-tuning
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/f1b17ecf-7a0e-4bbd-a9ff-9df9d42f42ae"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                PaLm
                              </h2>
                              <p className="text-sm text-white">by Google</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Advanced natural language understanding and
                            generation
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            The Pathways Language Model (PaLM) is a large
                            language model with 540 billion parameters, designed
                            to perform a wide array of natural langua...
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-[#00D188] mr-3"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Natural language processing tasks such as text
                                generation, translation, and summarization.
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-[#00D188] mr-3"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Complex reasoning tasks requiring multi-step
                                logic.
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-[#00D188] mr-3"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Code generation across various programming
                                languages.
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/f1b17ecf-7a0e-4bbd-a9ff-9df9d42f42ae"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Gemini Pro
                              </h2>
                              <p className="text-sm text-white">by Google</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Multimodal content creation
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Gemini Pro is a mid-size multimodal model optimized
                            for a wide range of reasoning tasks. It can process
                            large amounts of data, including 2 h...
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-book-open text-[#00D188] mr-3"
                              >
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Deep historical analysis
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-gem text-[#00D188] mr-3"
                              >
                                <path d="M6 3h12l4 6-10 13L2 9Z" />
                                <path d="M11 3 8 9l4 13 4-13-3-6" />
                                <path d="M2 9h20" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Predictive insights on historical events
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/f1b17ecf-7a0e-4bbd-a9ff-9df9d42f42ae"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Gemini Flash
                              </h2>
                              <p className="text-sm text-white">by Google</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Fast text generation
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Gemini Flash is Google's fastest and most
                            cost-efficient multimodal model, designed for
                            high-frequency tasks with great performance. It
                            offe...
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-code text-[#00D188] mr-3"
                              >
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Coding tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-[#00D188] mr-3"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Obedient responses
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/f1b17ecf-7a0e-4bbd-a9ff-9df9d42f42ae"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Gemma
                              </h2>
                              <p className="text-sm text-white">by Google</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Conversational AI
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Gemma is a family of lightweight, state-of-the-art
                            open models built from the same research and
                            technology used to create the Gemini models....
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-search text-[#00D188] mr-3"
                              >
                                <circle cx={11} cy={11} r={8} />
                                <path d="m21 21-4.3-4.3" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                RAG applications
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-file text-[#00D188] mr-3"
                              >
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Long context processing
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/f1b17ecf-7a0e-4bbd-a9ff-9df9d42f42ae"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Gemma 2
                              </h2>
                              <p className="text-sm text-white">by Google</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Improved conversational capabilities
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            An upgraded version of Gemma, likely with improved
                            performance and capabilities. Specific details are
                            not provided in the search results.
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-file-text text-[#00D188] mr-3"
                              >
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                <path d="M10 9H8" />
                                <path d="M16 13H8" />
                                <path d="M16 17H8" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Summarization
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-pen text-[#00D188] mr-3"
                              >
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Copywriting
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-zoom-in text-[#00D188] mr-3"
                              >
                                <circle cx={11} cy={11} r={8} />
                                <line x1={21} x2="16.65" y1={21} y2="16.65" />
                                <line x1={11} x2={11} y1={8} y2={14} />
                                <line x1={8} x2={14} y1={11} y2={11} />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Extraction
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mr-[10%] pt-10">
                  <button 
                    onClick={() => {
                        const container = document.querySelector(
                        "#google-scroll-container"
                        );
                        if (container && container instanceof HTMLElement)
                        container.scrollLeft -= container.offsetWidth;
                    }}
                  className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-arrow-narrow-left h-6 w-6 text-gray-500"
                    >
                      <path d="M5 12l14 0" />
                      <path d="M5 12l4 4" />
                      <path d="M5 12l4 -4" />
                    </svg>
                  </button>
                  <button 
                  onClick={() => {
                    const container = document.querySelector(
                      "#google-scroll-container"
                    );
                    if (container && container instanceof HTMLElement)
                      container.scrollLeft += container.offsetWidth;
                  }}
                  className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-arrow-narrow-right h-6 w-6 text-gray-500"
                    >
                      <path d="M5 12l14 0" />
                      <path d="M15 16l4 -4" />
                      <path d="M15 8l4 4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* End Google */}

            {/* Start Nousresearch */}
            <div className="flex justify-start lg:max-w-[80%] max-w-full px-[1em] lg:px-0 mx-auto">
              <h2 className="fade-up pt-[1.5em] pb-[0.8em] blog-h2 leading-[1.25em] capitalize bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl">
                nousresearch
              </h2>
            </div>
            <div>
              <div className="relative w-full">
                <div
                  id="nousresearch-scroll-container"
                  className="scroll-container flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] hide-scrollbar"
                >
                  <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l" />
                  <div className="flex flex-row justify-start gap-6 lg:px-[10%] px-[1em]">
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/8b28bba1-2eff-40a9-afeb-bded8c06a0e5"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Hermes
                              </h2>
                              <p className="text-sm text-white">
                                by nousresearch
                              </p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Language understanding and generation
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Hermes 3 is a generalist language model with many
                            improvements over Hermes 2, including advanced
                            agentic capabilities, better roleplaying, r...
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-theater text-[#00D188] mr-3"
                              >
                                <path d="M2 10s3-3 3-8" />
                                <path d="M22 10s-3-3-3-8" />
                                <path d="M10 2c0 4.4-3.6 8-8 8" />
                                <path d="M14 2c0 4.4 3.6 8 8 8" />
                                <path d="M2 10s2 2 2 5" />
                                <path d="M22 10s-2 2-2 5" />
                                <path d="M8 15h8" />
                                <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                                <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Roleplaying
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-file-text text-[#00D188] mr-3"
                              >
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                <path d="M10 9H8" />
                                <path d="M16 13H8" />
                                <path d="M16 17H8" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Interactive storytelling
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/8b28bba1-2eff-40a9-afeb-bded8c06a0e5"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Hermes 2 Theta Llama 3 8B
                              </h2>
                              <p className="text-sm text-white">
                                by nousresearch
                              </p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Optimized Hermes for Llama architecture
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Merged and RLHF'ed version of Hermes 2 Pro and
                            Meta's Llama-3 Instruct model, combining strengths
                            of both
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-pen text-[#00D188] mr-3"
                              >
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                General language tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-zap text-[#00D188] mr-3"
                              >
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Efficient processing
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/8b28bba1-2eff-40a9-afeb-bded8c06a0e5"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Hermes 2 Mistral DPO
                              </h2>
                              <p className="text-sm text-white">
                                by nousresearch
                              </p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Optimized Hermes with Mistral integration
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Improved version of OpenHermes-2.5-Mistral-7B using
                            Direct Preference Optimization
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-brain text-[#00D188] mr-3"
                              >
                                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                                <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                                <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                                <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                                <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                                <path d="M6 18a4 4 0 0 1-1.967-.516" />
                                <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Complex reasoning
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-chart-pie text-[#00D188] mr-3"
                              >
                                <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" />
                                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Advanced analysis
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-file text-[#00D188] mr-3"
                              >
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Long context tasks
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/8b28bba1-2eff-40a9-afeb-bded8c06a0e5"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Capybara
                              </h2>
                              <p className="text-sm text-white">
                                by nousresearch
                              </p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Interactive conversational AI for feedback analysis{" "}
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            34B parameter model with 200K context length,
                            trained on diverse datasets
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-dollar-sign text-[#00D188] mr-3"
                              >
                                <line x1={12} x2={12} y1={2} y2={22} />
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Cost-efficient AI applications
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-chart-no-axes-column text-[#00D188] mr-3"
                              >
                                <line x1={18} x2={18} y1={20} y2={10} />
                                <line x1={12} x2={12} y1={20} y2={4} />
                                <line x1={6} x2={6} y1={20} y2={14} />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                High-volume tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-clock text-[#00D188] mr-3"
                              >
                                <circle cx={12} cy={12} r={10} />
                                <polyline points="12 6 12 12 16 14" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Real-time interactions
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/8b28bba1-2eff-40a9-afeb-bded8c06a0e5"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Hermes 2 Yi34B
                              </h2>
                              <p className="text-sm text-white">
                                by nousresearch
                              </p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Conversational capabilities enhancement in Yi series{" "}
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Merged model combining Hermes 2 and Yi-34B, aiming
                            for improved performance
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-globe text-[#00D188] mr-3"
                              >
                                <circle cx={12} cy={12} r={10} />
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                <path d="M2 12h20" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Multilingual tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-file text-[#00D188] mr-3"
                              >
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Long context processing
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mr-[10%] pt-10">
                  <button 
                  onClick={() => {
                    const container = document.querySelector(
                      "#nousresearch-scroll-container"
                    );
                    if (container && container instanceof HTMLElement)
                      container.scrollLeft -= container.offsetWidth;
                  }}
                  className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-arrow-narrow-left h-6 w-6 text-gray-500"
                    >
                      <path d="M5 12l14 0" />
                      <path d="M5 12l4 4" />
                      <path d="M5 12l4 -4" />
                    </svg>
                  </button>
                  <button 
                  onClick={() => {
                    const container = document.querySelector(
                      "#nousresearch-scroll-container"
                    );
                    if (container && container instanceof HTMLElement)
                      container.scrollLeft += container.offsetWidth;
                  }}
                  className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-arrow-narrow-right h-6 w-6 text-gray-500"
                    >
                      <path d="M5 12l14 0" />
                      <path d="M15 16l4 -4" />
                      <path d="M15 8l4 4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* End Nousresearch */}

            {/* Start Sao10K */}
            <div className="flex justify-start lg:max-w-[80%] max-w-full px-[1em] lg:px-0 mx-auto">
              <h2 className="fade-up pt-[1.5em] pb-[0.8em] blog-h2 leading-[1.25em] capitalize bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl">
                Sao10K
              </h2>
            </div>
            <div>
              <div className="relative w-full">
                <div
                  id="sao10k-scroll-container"
                  className="scroll-container flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] hide-scrollbar"
                >
                  <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l" />
                  <div className="flex flex-row justify-start gap-6 lg:px-[10%] px-[1em]">
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/ef9ddf32-ff98-4f36-a47a-8547d9c80528"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Fimbulvetr-11B-v2-GGUF
                              </h2>
                              <p className="text-sm text-white">by Sao10K</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Data-driven text insights
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            A large language model fine-tuned on Alpaca or
                            Vicuna prompt formats, capable of generating text
                            descriptions based on images
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-image text-[#00D188] mr-3"
                              >
                                <rect
                                  width={18}
                                  height={18}
                                  x={3}
                                  y={3}
                                  rx={2}
                                  ry={2}
                                />
                                <circle cx={9} cy={9} r={2} />
                                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Image captioning
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-camera text-[#00D188] mr-3"
                              >
                                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                                <circle cx={12} cy={13} r={3} />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Visual question answering
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-palette text-[#00D188] mr-3"
                              >
                                <circle
                                  cx="13.5"
                                  cy="6.5"
                                  r=".5"
                                  fill="currentColor"
                                />
                                <circle
                                  cx="17.5"
                                  cy="10.5"
                                  r=".5"
                                  fill="currentColor"
                                />
                                <circle
                                  cx="8.5"
                                  cy="7.5"
                                  r=".5"
                                  fill="currentColor"
                                />
                                <circle
                                  cx="6.5"
                                  cy="12.5"
                                  r=".5"
                                  fill="currentColor"
                                />
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Image generation
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Sao10K */}

            {/* Start Fireworks AI */}
            <div className="flex justify-start lg:max-w-[80%] max-w-full px-[1em] lg:px-0 mx-auto">
              <h2 className="fade-up pt-[1.5em] pb-[0.8em] blog-h2 leading-[1.25em] capitalize bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl">
                Fireworks AI
              </h2>
            </div>
            <div>
              <div className="relative w-full">
                <div
                  id="fireworksai-scroll-container"
                  className="scroll-container flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] hide-scrollbar"
                >
                  <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l" />
                  <div className="flex flex-row justify-start gap-6 lg:px-[10%] px-[1em]">
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/929f26e6-b979-4695-bf4b-40d69beee09d"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                FireLLaVA-13b
                              </h2>
                              <p className="text-sm text-white">
                                by Fireworks AI
                              </p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Image generation from text
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            A large language model that can process and generate
                            both text and images, trained on
                            instruction-following tasks
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-dollar-sign text-[#00D188] mr-3"
                              >
                                <line x1={12} x2={12} y1={2} y2={22} />
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Cost-efficient AI applications
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-chart-no-axes-column text-[#00D188] mr-3"
                              >
                                <line x1={18} x2={18} y1={20} y2={10} />
                                <line x1={12} x2={12} y1={20} y2={4} />
                                <line x1={6} x2={6} y1={20} y2={14} />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                High-volume tasks
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Fireworks AI */}

            {/* Start Other */}
            <div className="flex justify-start lg:max-w-[80%] max-w-full px-[1em] lg:px-0 mx-auto">
              <h2 className="fade-up pt-[1.5em] pb-[0.8em] blog-h2 leading-[1.25em] capitalize bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl">
                other
              </h2>
            </div>
            <div>
              <div className="relative w-full">
                <div
                  id="other-scroll-container"
                  className="scroll-container flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] hide-scrollbar"
                >
                  <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l" />
                  <div className="flex flex-row justify-start gap-6 lg:px-[10%] px-[1em]">
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-white"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Weaver alpha
                              </h2>
                              <p className="text-sm text-white">by mancer</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Basic language tasks model
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            An attempt to recreate Claude-style verbosity, but
                            with less coherence and memory. Designed for use in
                            roleplay and narrative situations, it...
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-pen text-[#00D188] mr-3"
                              >
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                General language tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-[#00D188] mr-3"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Assistant-like chat
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-code text-[#00D188] mr-3"
                              >
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Code generation
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-white"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                LZLV{" "}
                              </h2>
                              <p className="text-sm text-white">by Mythomax</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            General-purpose language model
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            A multi-model merge of several LLaMA2 70B finetunes
                            for roleplaying and creative work. The goal was to
                            create a model that combines creativi...
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-book-open text-[#00D188] mr-3"
                              >
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Research
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-school text-[#00D188] mr-3"
                              >
                                <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
                                <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
                                <path d="M18 5v17" />
                                <path d="m4 6 8-4 8 4" />
                                <path d="M6 5v17" />
                                <circle cx={12} cy={9} r={2} />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Education
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-notebook text-[#00D188] mr-3"
                              >
                                <path d="M2 6h4" />
                                <path d="M2 10h4" />
                                <path d="M2 14h4" />
                                <path d="M2 18h4" />
                                <rect
                                  width={16}
                                  height={20}
                                  x={4}
                                  y={2}
                                  rx={2}
                                />
                                <path d="M16 2v20" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Small-scale applications
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-white"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Noromaid-v0.4-Mixtral-Instruct-8x7b-Zloss-GGUF
                              </h2>
                              <p className="text-sm text-white">
                                by NeverSleep
                              </p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Instruction-based conversational model
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            An experimental large language model built upon
                            Mixtral, designed for roleplaying (RP) and erotic
                            roleplaying (ERP) tasks
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-zap text-[#00D188] mr-3"
                              >
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Fast processing
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-clock text-[#00D188] mr-3"
                              >
                                <circle cx={12} cy={12} r={10} />
                                <polyline points="12 6 12 12 16 14" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                High-frequency tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-hammer text-[#00D188] mr-3"
                              >
                                <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
                                <path d="m18 15 4-4" />
                                <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Versatile applications
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-white"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Mythalion
                              </h2>
                              <p className="text-sm text-white">
                                by pygmalionai
                              </p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            General-purpose AI model
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            A blend of the new Pygmalion-13b and MythoMax,
                            focused on roleplaying and narrative tasks. It aims
                            to enhance storytelling capabilities whil...
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-database text-[#00D188] mr-3"
                              >
                                <ellipse cx={12} cy={5} rx={9} ry={3} />
                                <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                                <path d="M3 12A9 3 0 0 0 21 12" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Synthetic data generation
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-cog text-[#00D188] mr-3"
                              >
                                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                                <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                <path d="M12 2v2" />
                                <path d="M12 22v-2" />
                                <path d="m17 20.66-1-1.73" />
                                <path d="M11 10.27 7 3.34" />
                                <path d="m20.66 17-1.73-1" />
                                <path d="m3.34 7 1.73 1" />
                                <path d="M14 12h8" />
                                <path d="M2 12h2" />
                                <path d="m20.66 7-1.73 1" />
                                <path d="m3.34 17 1.73-1" />
                                <path d="m17 3.34-1 1.73" />
                                <path d="m11 13.73-4 6.93" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Llama 2 fine-tuning
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-white"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                ReMM SLERP
                              </h2>
                              <p className="text-sm text-white">by Undi95</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Advanced reasoning in language processing
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Advanced AI model optimized for high-performance
                            tasks requiring detailed data processing
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-brain text-[#00D188] mr-3"
                              >
                                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                                <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                                <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                                <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                                <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                                <path d="M6 18a4 4 0 0 1-1.967-.516" />
                                <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Advanced language tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-palette text-[#00D188] mr-3"
                              >
                                <circle
                                  cx="13.5"
                                  cy="6.5"
                                  r=".5"
                                  fill="currentColor"
                                />
                                <circle
                                  cx="17.5"
                                  cy="10.5"
                                  r=".5"
                                  fill="currentColor"
                                />
                                <circle
                                  cx="8.5"
                                  cy="7.5"
                                  r=".5"
                                  fill="currentColor"
                                />
                                <circle
                                  cx="6.5"
                                  cy="12.5"
                                  r=".5"
                                  fill="currentColor"
                                />
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Multimodal applications
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-white"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Xwin
                              </h2>
                              <p className="text-sm text-white">by xwin-lm</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Flexible language model
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Xwin-LM aims to develop and open-source alignment
                            technologies for large language models. Built upon
                            the Llama2 base models, ranked TOP-1 on...
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-theater text-[#00D188] mr-3"
                              >
                                <path d="M2 10s3-3 3-8" />
                                <path d="M22 10s-3-3-3-8" />
                                <path d="M10 2c0 4.4-3.6 8-8 8" />
                                <path d="M14 2c0 4.4 3.6 8 8 8" />
                                <path d="M2 10s2 2 2 5" />
                                <path d="M22 10s-2 2-2 5" />
                                <path d="M8 15h8" />
                                <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                                <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Roleplaying
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-file-text text-[#00D188] mr-3"
                              >
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                <path d="M10 9H8" />
                                <path d="M16 13H8" />
                                <path d="M16 17H8" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Storytelling
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-pencil text-[#00D188] mr-3"
                              >
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                <path d="m15 5 4 4" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Creative writing
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-white"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                OpenHermes 2 Mistral
                              </h2>
                              <p className="text-sm text-white">by Teknium</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Enhanced OpenHermes with Mistral capabilities{" "}
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Improved version of OpenHermes models, trained on
                            larger dataset
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-file-text text-[#00D188] mr-3"
                              >
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                <path d="M10 9H8" />
                                <path d="M16 13H8" />
                                <path d="M16 17H8" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Text-based applications
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-[#00D188] mr-3"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Chatbots
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-pen text-[#00D188] mr-3"
                              >
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Content creation
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-white"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                RWKV v5 Eagle
                              </h2>
                              <p className="text-sm text-white">by RWKV</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Conversational needs optimization model{" "}
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            7.25B parameter model using Linear Transformer
                            design, trained on 1.1T tokens across 100+ languages
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-pen text-[#00D188] mr-3"
                              >
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                High-quality language tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-puzzle text-[#00D188] mr-3"
                              >
                                <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Complex problem-solving
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-pencil text-[#00D188] mr-3"
                              >
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                <path d="m15 5 4 4" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Creative writing
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-white"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                YiLarge
                              </h2>
                              <p className="text-sm text-white">by 01.AI</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Efficient large-scale data handling model{" "}
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Large language model with strong performance across
                            various NLP tasks
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-theater text-[#00D188] mr-3"
                              >
                                <path d="M2 10s3-3 3-8" />
                                <path d="M22 10s-3-3-3-8" />
                                <path d="M10 2c0 4.4-3.6 8-8 8" />
                                <path d="M14 2c0 4.4 3.6 8 8 8" />
                                <path d="M2 10s2 2 2 5" />
                                <path d="M22 10s-2 2-2 5" />
                                <path d="M8 15h8" />
                                <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                                <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Roleplaying
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-file-text text-[#00D188] mr-3"
                              >
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                <path d="M10 9H8" />
                                <path d="M16 13H8" />
                                <path d="M16 17H8" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Interactive storytelling
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-white"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Magnum
                              </h2>
                              <p className="text-sm text-white">by Alpindale</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Creative output focus high-performance model{" "}
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Magnum 72B is the first in a new family of models
                            designed to achieve the prose quality of the Claude
                            3 models, notably Opus &amp; Sonnet. It is...
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-image text-[#00D188] mr-3"
                              >
                                <rect
                                  width={18}
                                  height={18}
                                  x={3}
                                  y={3}
                                  rx={2}
                                  ry={2}
                                />
                                <circle cx={9} cy={9} r={2} />
                                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Image captioning
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-pen text-[#00D188] mr-3"
                              >
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Text generation from images
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-white"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Dolphin 2 Mixtral
                              </h2>
                              <p className="text-sm text-white">
                                by Cognitivecomputations
                              </p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Conversational AI with unique features
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Retraining of previous Dolphin versions, based on
                            Mixtral-8x7b architecture
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-clipboard text-[#00D188] mr-3"
                              >
                                <rect
                                  width={8}
                                  height={4}
                                  x={8}
                                  y={2}
                                  rx={1}
                                  ry={1}
                                />
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                General-purpose language tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-theater text-[#00D188] mr-3"
                              >
                                <path d="M2 10s3-3 3-8" />
                                <path d="M22 10s-3-3-3-8" />
                                <path d="M10 2c0 4.4-3.6 8-8 8" />
                                <path d="M14 2c0 4.4 3.6 8 8 8" />
                                <path d="M2 10s2 2 2 5" />
                                <path d="M22 10s-2 2-2 5" />
                                <path d="M8 15h8" />
                                <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                                <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Roleplaying
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-white"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Goliath 120B
                              </h2>
                              <p className="text-sm text-white">by Alpindale</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            High-capacity text processing
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            A large LLM created by combining two fine-tuned
                            Llama 70B models into one 120B model. Combines Xwin
                            and Euryale. Offers extensive context ha...
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-zoom-in text-[#00D188] mr-3"
                              >
                                <circle cx={11} cy={11} r={8} />
                                <line x1={21} x2="16.65" y1={21} y2="16.65" />
                                <line x1={11} x2={11} y1={8} y2={14} />
                                <line x1={8} x2={14} y1={11} y2={11} />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Enhanced NLP tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-book-open text-[#00D188] mr-3"
                              >
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Research applications
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-white"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Chronos Hermes 13b
                              </h2>
                              <p className="text-sm text-white">by Austism</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Contextual text generation
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Combines Chronos (13B) and Nous Hermes (13B) in a
                            75/25 ratio, focused on historical data analysis and
                            predictive insights
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-brain text-[#00D188] mr-3"
                              >
                                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                                <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                                <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                                <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                                <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                                <path d="M6 18a4 4 0 0 1-1.967-.516" />
                                <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Complex reasoning tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-code text-[#00D188] mr-3"
                              >
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Code generation
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-pen text-[#00D188] mr-3"
                              >
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Text editing
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-white"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Airoboros
                              </h2>
                              <p className="text-sm text-white">by jondurbin</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Creative conversational AI
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            A Llama 2 70B fine-tune using synthetic data (the
                            Airoboros dataset). Currently based on
                            jondurbin/airoboros-l2-70b, but might get updated
                            i...
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-globe text-[#00D188] mr-3"
                              >
                                <circle cx={12} cy={12} r={10} />
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                <path d="M2 12h20" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Multilingual tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-theater text-[#00D188] mr-3"
                              >
                                <path d="M2 10s3-3 3-8" />
                                <path d="M22 10s-3-3-3-8" />
                                <path d="M10 2c0 4.4-3.6 8-8 8" />
                                <path d="M14 2c0 4.4 3.6 8 8 8" />
                                <path d="M2 10s2 2 2 5" />
                                <path d="M22 10s-2 2-2 5" />
                                <path d="M8 15h8" />
                                <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                                <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Reasoning
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-code text-[#00D188] mr-3"
                              >
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Coding
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mr-[10%] pt-10">
                  <button 
                  onClick={() => {
                    const container = document.querySelector(
                      "#other-scroll-container"
                    );
                    if (container && container instanceof HTMLElement)
                      container.scrollLeft -= container.offsetWidth;
                  }}
                  className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-arrow-narrow-left h-6 w-6 text-gray-500"
                    >
                      <path d="M5 12l14 0" />
                      <path d="M5 12l4 4" />
                      <path d="M5 12l4 -4" />
                    </svg>
                  </button>
                  <button 
                  onClick={() => {
                    const container = document.querySelector(
                      "#other-scroll-container"
                    );
                    if (container && container instanceof HTMLElement)
                      container.scrollLeft += container.offsetWidth;
                  }}
                  className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-arrow-narrow-right h-6 w-6 text-gray-500"
                    >
                      <path d="M5 12l14 0" />
                      <path d="M15 16l4 -4" />
                      <path d="M15 8l4 4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* End Other */}

            {/* Start Microsoft AI */}
            <div className="flex justify-start lg:max-w-[80%] max-w-full px-[1em] lg:px-0 mx-auto">
              <h2 className="fade-up pt-[1.5em] pb-[0.8em] blog-h2 leading-[1.25em] capitalize bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl">
                Microsoft AI
              </h2>
            </div>
            <div>
              <div className="relative w-full">
                <div
                  id="microsoftai-scroll-container"
                  className="scroll-container flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] hide-scrollbar"
                >
                  <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l" />
                  <div className="flex flex-row justify-start gap-6 lg:px-[10%] px-[1em]">
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/e6927903-8981-4f23-8932-2faf5a475c72"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                WizardLM 2
                              </h2>
                              <p className="text-sm text-white">
                                by Microsoft AI
                              </p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Educational and creative purposes model
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Next-generation state-of-the-art LLM with improved
                            performance on complex chat, multilingual, reasoning
                            and agent use cases
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-message-circle text-[#00D188] mr-3"
                              >
                                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                General tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-[#00D188] mr-3"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Conversation
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-[#00D188] mr-3"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Function calling
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Other */}

            {/* Start Openchat */}
            <div className="flex justify-start lg:max-w-[80%] max-w-full px-[1em] lg:px-0 mx-auto">
              <h2 className="fade-up pt-[1.5em] pb-[0.8em] blog-h2 leading-[1.25em] capitalize bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl">
                Openchat
              </h2>
            </div>
            <div>
              <div className="relative w-full">
                <div
                  id="openchat-scroll-container"
                  className="scroll-container flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] hide-scrollbar"
                >
                  <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l" />
                  <div className="flex flex-row justify-start gap-6 lg:px-[10%] px-[1em]">
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/dd5e3aac-43db-402e-85a3-99d65573a402"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                OpenChat 3.6
                              </h2>
                              <p className="text-sm text-white">by Openchat</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            User engagement in conversations
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            8B parameter model optimized for various language
                            tasks, outperforming larger models on certain
                            benchmarks.
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-pen text-[#00D188] mr-3"
                              >
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                General language tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-cog text-[#00D188] mr-3"
                              >
                                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                                <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                <path d="M12 2v2" />
                                <path d="M12 22v-2" />
                                <path d="m17 20.66-1-1.73" />
                                <path d="M11 10.27 7 3.34" />
                                <path d="m20.66 17-1.73-1" />
                                <path d="m3.34 7 1.73 1" />
                                <path d="M14 12h8" />
                                <path d="M2 12h2" />
                                <path d="m20.66 7-1.73 1" />
                                <path d="m3.34 17 1.73-1" />
                                <path d="m17 3.34-1 1.73" />
                                <path d="m11 13.73-4 6.93" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Customization
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/dd5e3aac-43db-402e-85a3-99d65573a402"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                OpenChat 3.5
                              </h2>
                              <p className="text-sm text-white">by Openchat</p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Tailored interactive discussions AI{" "}
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            8B parameter model optimized for various language
                            tasks
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-brain text-[#00D188] mr-3"
                              >
                                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                                <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                                <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                                <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                                <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                                <path d="M6 18a4 4 0 0 1-1.967-.516" />
                                <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Advanced language understanding
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-palette text-[#00D188] mr-3"
                              >
                                <circle
                                  cx="13.5"
                                  cy="6.5"
                                  r=".5"
                                  fill="currentColor"
                                />
                                <circle
                                  cx="17.5"
                                  cy="10.5"
                                  r=".5"
                                  fill="currentColor"
                                />
                                <circle
                                  cx="8.5"
                                  cy="7.5"
                                  r=".5"
                                  fill="currentColor"
                                />
                                <circle
                                  cx="6.5"
                                  cy="12.5"
                                  r=".5"
                                  fill="currentColor"
                                />
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Multimodal applications
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-[#00D188] mr-3"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Flexible task handling
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Openchat */}

            {/* Start Mistral AI */}
            <div className="flex justify-start lg:max-w-[80%] max-w-full px-[1em] lg:px-0 mx-auto">
              <h2 className="fade-uo pt-[1.5em] pb-[0.8em] blog-h2 leading-[1.25em] capitalize bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl">
                Mistral AI
              </h2>
            </div>
            <div>
              <div className="relative w-full">
                <div
                  id="mistralai-scroll-container"
                  className="scroll-container flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] hide-scrollbar"
                >
                  <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l" />
                  <div className="flex flex-row justify-start gap-6 lg:px-[10%] px-[1em]">
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/8ac1770a-c56b-4617-9b85-1073dfc519bc"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Codestral Mamba
                              </h2>
                              <p className="text-sm text-white">
                                by Mistral AI
                              </p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Specialized functionalities in language processing
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Open code model based on Mamba2 architecture,
                            performing on par with state-of-the-art
                            Transformer-based code models
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-pen text-[#00D188] mr-3"
                              >
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Creative writing
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-theater text-[#00D188] mr-3"
                              >
                                <path d="M2 10s3-3 3-8" />
                                <path d="M22 10s-3-3-3-8" />
                                <path d="M10 2c0 4.4-3.6 8-8 8" />
                                <path d="M14 2c0 4.4 3.6 8 8 8" />
                                <path d="M2 10s2 2 2 5" />
                                <path d="M22 10s-2 2-2 5" />
                                <path d="M8 15h8" />
                                <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                                <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Roleplaying
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-palette text-[#00D188] mr-3"
                              >
                                <circle
                                  cx="13.5"
                                  cy="6.5"
                                  r=".5"
                                  fill="currentColor"
                                />
                                <circle
                                  cx="17.5"
                                  cy="10.5"
                                  r=".5"
                                  fill="currentColor"
                                />
                                <circle
                                  cx="8.5"
                                  cy="7.5"
                                  r=".5"
                                  fill="currentColor"
                                />
                                <circle
                                  cx="6.5"
                                  cy="12.5"
                                  r=".5"
                                  fill="currentColor"
                                />
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Generating imaginative content
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/8ac1770a-c56b-4617-9b85-1073dfc519bc"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Mistral
                              </h2>
                              <p className="text-sm text-white">
                                by Mistral AI
                              </p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            General-purpose Mistral model
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Family of efficient language models, including
                            open-weight versions for customization and
                            deployment
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-message-circle text-[#00D188] mr-3"
                              >
                                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                General tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-[#00D188] mr-3"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Conversation
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot text-[#00D188] mr-3"
                              >
                                <path d="M12 8V4H8" />
                                <rect
                                  width={16}
                                  height={12}
                                  x={4}
                                  y={8}
                                  rx={2}
                                />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Function calling
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/8ac1770a-c56b-4617-9b85-1073dfc519bc"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Mixtral
                              </h2>
                              <p className="text-sm text-white">
                                by Mistral AI
                              </p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Mixed input handling efficiency model
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            Mixture of Experts model with 8 experts per MLP,
                            total of 45B parameters
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-pen text-[#00D188] mr-3"
                              >
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                General language tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-theater text-[#00D188] mr-3"
                              >
                                <path d="M2 10s3-3 3-8" />
                                <path d="M22 10s-3-3-3-8" />
                                <path d="M10 2c0 4.4-3.6 8-8 8" />
                                <path d="M14 2c0 4.4 3.6 8 8 8" />
                                <path d="M2 10s2 2 2 5" />
                                <path d="M22 10s-2 2-2 5" />
                                <path d="M8 15h8" />
                                <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                                <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Reasoning
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/8ac1770a-c56b-4617-9b85-1073dfc519bc"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Mistral Nemo
                              </h2>
                              <p className="text-sm text-white">
                                by Mistral AI
                              </p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Standard Mistral model for tasks
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            40-layer transformer model with 5,120 dim,
                            outperforming existing models of similar size
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-theater text-[#00D188] mr-3"
                              >
                                <path d="M2 10s3-3 3-8" />
                                <path d="M22 10s-3-3-3-8" />
                                <path d="M10 2c0 4.4-3.6 8-8 8" />
                                <path d="M14 2c0 4.4 3.6 8 8 8" />
                                <path d="M2 10s2 2 2 5" />
                                <path d="M22 10s-2 2-2 5" />
                                <path d="M8 15h8" />
                                <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                                <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Roleplaying
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-heart text-[#00D188] mr-3"
                              >
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Erotic content generation
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" w-auto rounded-3xl"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="bg-[#181818] flex flex-col h-full justify-between rounded-xl p-6 max-w-md w-80 shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                          <div className="items-center mb-6 grid grid-cols-12 ">
                            <div className="w-12 h-12 rounded-full col-span-2 bg-black flex items-center justify-center mr-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                              <img
                                src="https://admin.ai.avinashi.dev/assets/8ac1770a-c56b-4617-9b85-1073dfc519bc"
                                alt="google"
                                className="w-12 h-12 rounded-full"
                              />
                            </div>
                            <div className="col-span-10 ps-5">
                              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent truncate">
                                Mistral Large
                              </h2>
                              <p className="text-sm text-white">
                                by Mistral AI
                              </p>
                            </div>
                          </div>
                          <h3 className="text-[#00D188] font-semibold text-xl mb-4 text-faro truncate">
                            Large-scale complex task model
                          </h3>
                          <p className="font-urbanist text-gray-300 min-h-32 mb-6 leading-relaxed">
                            123B parameter dense LLM with state-of-the-art
                            reasoning, knowledge, and coding capabilities
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-file-text text-[#00D188] mr-3"
                              >
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                <path d="M10 9H8" />
                                <path d="M16 13H8" />
                                <path d="M16 17H8" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                General NLP tasks
                              </span>
                            </div>
                            <div className="flex items-center px-2 rounded-lg transition-all duration-200 ease-in-out">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-globe text-[#00D188] mr-3"
                              >
                                <circle cx={12} cy={12} r={10} />
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                <path d="M2 12h20" />
                              </svg>
                              <span className="font-urbanist text-white truncate">
                                Multilingual processing
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 justify-between items-center text-gray-400 text-xs">
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              INPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center col-span-1 flex-wrap">
                            <span className="font-urbanist font-[600] text-[1em] text-[#808080] uppercase mr-1">
                              OUTPUT
                            </span>
                            <span className="mx-1  flex items-center px-1 py-1 rounded bg-[#26262A] transition-all duration-200 ease-in-out hover:bg-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-type"
                              >
                                <polyline points="4 7 4 4 20 4 20 7" />
                                <line x1={9} x2={15} y1={20} y2={20} />
                                <line x1={12} x2={12} y1={4} y2={20} />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mr-[10%] pt-10">
                  <button 
                  onClick={() => {
                    const container = document.querySelector(
                      "#mistralai-scroll-container"
                    );
                    if (container && container instanceof HTMLElement)
                      container.scrollLeft -= container.offsetWidth;
                  }}
                  className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-arrow-narrow-left h-6 w-6 text-gray-500"
                    >
                      <path d="M5 12l14 0" />
                      <path d="M5 12l4 4" />
                      <path d="M5 12l4 -4" />
                    </svg>
                  </button>
                  <button 
                  onClick={() => {
                    const container = document.querySelector(
                      "#mistralai-scroll-container"
                    );
                    if (container && container instanceof HTMLElement)
                      container.scrollLeft -= container.offsetWidth;
                  }}
                  className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-arrow-narrow-right h-6 w-6 text-gray-500"
                    >
                      <path d="M5 12l14 0" />
                      <path d="M15 16l4 -4" />
                      <path d="M15 8l4 4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* End Mistral AI */}
          </div>
        </div>
      </section>
    </div>
  );
}
