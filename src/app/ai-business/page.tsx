"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AIInBusiness() {
    return (
        <div className="min-h-screen mx-auto bg-black w-full overflow-x-hidden">
            <section>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        background:
                            "-webkit-linear-gradient(45deg, rgb(171, 236, 219) 0%, rgb(10, 53, 89) 30%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 70%, rgb(10, 53, 89) 80%, rgb(171, 236, 219) 100%)"
                    }}
                >
                    <motion.div 
                        className="mx-auto flex flex-col items-center justify-center max-w-full lg:px-10 flex-grow py-20 lg:py-[10em] mb-[5em]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="bg-gradient-to-l from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-3xl md:text-4xl lg:text-6xl inline-flex font-bold text-center leading-tight">
                            Transforming Industries with AI/ML Excellence
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-center font-[500] site-h3 pt-1 w-full text-[#808080]">
                            Real Success Stories: Transforming Industries with AI
                        </p>
                    </motion.div>
                </motion.div>

                {/* Finance & Accounting */}
                <div className="lg:pb-[10em] pb-[5em]">
                    <motion.div
                        className="relative lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full flex h-full flex-wrap mx-auto lg:max-w-[80%] max-w-full px-4 lg:px-0">
                            <motion.div 
                                className="lg:w-6/12 w-full lg:absolute end-0 h-full"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/business-finance.png"
                                    alt=""
                                    className="w-full h-full lg:rounded-s-xl lg:rounded-e-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div 
                                className="lg:w-6/12 w-full h-full flex items-center"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-9/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl leading-[1.25em] inline">
                                        Finance &amp; Accounting
                                    </h2>
                                    <p className="text-fade font-[400] text-base md:text-lg lg:text-[1.5em] text-[#aaa] pb-6 pt-3 lg:w-10/12 w-full font-urbanist">
                                        AI agent analyzes financial data, automates reporting, and
                                        provides predictive insights.
                                    </p>
                                    <div className="text-fade font-[400] text-base md:text-lg lg:text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Automated Reporting:</strong>&nbsp;Streamlines
                                                    financial processes.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Fraud Detection:</strong>&nbsp;Identifies suspicious
                                                    activities.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Budget Analysis:</strong>&nbsp;Optimizes spending
                                                    patterns.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Risk Evaluation:</strong>&nbsp;Assesses financial
                                                    vulnerabilities.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Compliance Checks:</strong> Ensures regulatory
                                                    adherence.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/business-functions/Finance & Accounting">
                                                <div className="w-auto">
                                                    <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] custom-shadow  via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px]  rounded-full">
                                                        <div className="text-white flex items-center  bg-[#181818] rounded-full  gap-4 font-[400] group/bento cursor-pointer text-[1.25em] leading-[1em]  py-3 px-6 transition-all duration-500">
                                                            Learn More
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Strategic Management */}
                <div className="lg:pb-[10em] pb-[5em]">
                    <motion.div 
                        className="relative lg:h-[45em] "
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="w-full flex h-full flex-wrap mx-auto lg:max-w-[80%] max-w-full px-4 lg:px-0 lg:flex-row-reverse">
                            <motion.div 
                                className="lg:w-6/12 w-full  lg:absolute start-0 h-full"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/8.webp"
                                    alt=""
                                    className="w-full h-full lg:rounded-e-xl lg:rounded-s-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div 
                                className="lg:w-6/12 w-full h-full flex items-center  lg:ps-20"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-10/12 w-11/12 capitalize text-faro bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl leading-[1.25em]">
                                        Strategic Management
                                    </h2>
                                    <p className="text-fade font-[400] text-[1.5em]  text-[#aaa]  pb-6 pt-3  w-full font-urbanist">
                                        Utilizes AI to analyze data, assess risks, and optimize strategies
                                        for informed decision-making and agile adjustments.
                                    </p>
                                    <div className="text-fade font-[400] text-base md:text-lg lg:text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Trend Analysis:</strong>&nbsp;Informs decisions
                                                    through data insights.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Risk Forecasting:</strong>&nbsp;Anticipates
                                                    potential challenges.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Scenario Modeling:</strong>&nbsp;Evaluates strategic
                                                    options.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>KPI Monitoring:</strong>&nbsp;Tracks performance
                                                    metrics automatically.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Agile Adjustments:</strong>&nbsp;Adapts strategies
                                                    based on market changes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/business-functions/Strategic Management">
                                                <div className="w-auto">
                                                    <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] custom-shadow  via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px]  rounded-full">
                                                        <div className="text-white flex items-center  bg-[#181818] rounded-full  gap-4 font-[400] group/bento cursor-pointer text-[1.25em] leading-[1em]  py-3 px-6 transition-all duration-500">
                                                            Learn More
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* ⁠⁠Sales & Marketing */}
                <div className="lg:pb-[10em] pb-[5em]">
                    <div
                        className="relative lg:h-[45em] "
                        style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate3d(0px, 100px, 0px) scale(0.95, 0.95)",
                            opacity: 1
                        }}
                    >
                        <div className="w-full flex h-full flex-wrap mx-auto lg:max-w-[80%] max-w-full px-4 lg:px-0">
                            <motion.div
                                className="lg:w-6/12 w-full lg:absolute end-0 h-full"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/9.webp"
                                    alt=""
                                    className="w-full h-full lg:rounded-s-xl lg:rounded-e-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div 
                                className="lg:w-6/12 w-full h-full flex items-center"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-9/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl leading-[1.25em] inline">
                                        {" "}
                                        ⁠⁠Sales &amp; Marketing{" "}
                                    </h2>
                                    <p className="text-fade font-[400] text-base md:text-lg lg:text-[1.5em] text-[#aaa] pb-6 pt-3 lg:w-10/12 w-full font-urbanist">
                                        Analyzes customer data to enhance strategies and personalize
                                        marketing approaches.
                                    </p>
                                    <div className="text-fade font-[400] text-base md:text-lg lg:text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Customer Segmentation:</strong>&nbsp;Targets
                                                    marketing efforts effectively.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Behavior Prediction:</strong>&nbsp;Anticipates
                                                    customer actions.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Chatbot Engagement:</strong>&nbsp;Provides instant
                                                    customer support.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Content Enhancement:</strong>&nbsp;Optimizes
                                                    marketing materials.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Sales Forecasting:</strong>&nbsp;Predicts future
                                                    sales trends.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/business-functions/ ⁠⁠Sales & Marketing ">
                                                <div className="w-auto">
                                                    <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] custom-shadow  via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px]  rounded-full">
                                                        <div className="text-white flex items-center  bg-[#181818] rounded-full  gap-4 font-[400] group/bento cursor-pointer text-[1.25em] leading-[1em]  py-3 px-6 transition-all duration-500">
                                                            Learn More
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Research & Innovation */}
                <div className="lg:pb-[10em] pb-[5em]">
                    <motion.div 
                        className="relative lg:h-[45em] "
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="w-full flex h-full flex-wrap mx-auto lg:max-w-[80%] max-w-full px-4 lg:px-0 lg:flex-row-reverse">
                            <motion.div 
                                className="lg:w-6/12 w-full  lg:absolute start-0 h-full"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/12.jpg"
                                    alt=""
                                    className="w-full h-full lg:rounded-e-xl lg:rounded-s-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div 
                                className="lg:w-6/12 w-full h-full flex items-center  lg:ps-20"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-10/12 w-11/12 capitalize text-faro bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl leading-[1.25em]">
                                        Research &amp; Innovation
                                    </h2>
                                    <p className="text-fade font-[400] text-[1.5em]  text-[#aaa]  pb-6 pt-3  w-full font-urbanist">
                                        Accelerates innovation by analyzing market trends and suggesting
                                        new product features.
                                    </p>
                                    <div className="text-fade font-[400] text-base md:text-lg lg:text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Trend Discovery:</strong>&nbsp;Identifies emerging
                                                    research areas.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Data Insights:</strong>&nbsp;Extracts valuable
                                                    information for innovation.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Collaboration Tools:</strong>&nbsp;Enhances teamwork
                                                    efficiency.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Patent Review:</strong>&nbsp;Evaluates existing
                                                    patents for opportunities.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Rapid Prototyping:</strong>&nbsp;Tests concepts
                                                    quickly through simulations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/business-functions/Research & Innovation">
                                                <div className="w-auto">
                                                    <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] custom-shadow  via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px]  rounded-full">
                                                        <div className="text-white flex items-center  bg-[#181818] rounded-full  gap-4 font-[400] group/bento cursor-pointer text-[1.25em] leading-[1em]  py-3 px-6 transition-all duration-500">
                                                            Learn More
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Human Resources */}
                <div className="lg:pb-[10em] pb-[5em]">
                    <div
                        className="relative lg:h-[45em] "
                        style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate3d(0px, 100px, 0px) scale(0.95, 0.95)",
                            opacity: 1
                        }}
                    >
                        <div className="w-full flex h-full flex-wrap mx-auto lg:max-w-[80%] max-w-full px-4 lg:px-0">
                            <motion.div 
                                className="lg:w-6/12 w-full lg:absolute end-0 h-full"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/7.jpg"
                                    alt=""
                                    className="w-full h-full lg:rounded-s-xl lg:rounded-e-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div 
                                className="lg:w-6/12 w-full h-full flex items-center"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-9/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl leading-[1.25em] inline">
                                        Human Resources
                                    </h2>
                                    <p className="text-fade font-[400] text-base md:text-lg lg:text-[1.5em] text-[#aaa] pb-6 pt-3 lg:w-10/12 w-full font-urbanist">
                                        Streamlines recruitment, onboarding, and employee management
                                        through intelligent automation.
                                    </p>
                                    <div className="text-fade font-[400] text-base md:text-lg lg:text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Resume Screening:</strong>&nbsp;Automates candidate
                                                    selection.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Onboarding Automation:</strong>&nbsp;Streamlines new
                                                    hire integration.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Performance Analysis:</strong>&nbsp;Evaluates
                                                    employee contributions objectively.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Engagement Insights:</strong>&nbsp;Analyzes feedback
                                                    for culture improvement.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Training Recommendations:</strong>&nbsp;Personalizes
                                                    employee development.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/business-functions/Human Resources">
                                                <div className="w-auto">
                                                    <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] custom-shadow  via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px]  rounded-full">
                                                        <div className="text-white flex items-center  bg-[#181818] rounded-full  gap-4 font-[400] group/bento cursor-pointer text-[1.25em] leading-[1em]  py-3 px-6 transition-all duration-500">
                                                            Learn More
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Information Technology */}
                <div className="lg:pb-[10em] pb-[5em]">
                    <motion.div 
                        className="relative lg:h-[45em] "
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="w-full flex h-full flex-wrap mx-auto lg:max-w-[80%] max-w-full px-4 lg:px-0 lg:flex-row-reverse">
                            <motion.div 
                                className="lg:w-6/12 w-full  lg:absolute start-0 h-full"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/6.jpg"
                                    alt=""
                                    className="w-full h-full lg:rounded-e-xl lg:rounded-s-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div 
                                className="lg:w-6/12 w-full h-full flex items-center  lg:ps-20"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-10/12 w-11/12 capitalize text-faro bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl leading-[1.25em]">
                                        Information Technology
                                    </h2>
                                    <p className="text-fade font-[400] text-[1.5em]  text-[#aaa]  pb-6 pt-3  w-full font-urbanist">
                                        Enhances cybersecurity, automates maintenance, and optimizes IT
                                        infrastructure performance.
                                    </p>
                                    <div className="text-fade font-[400] text-base md:text-lg lg:text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Threat Detection:</strong>&nbsp;Monitors network
                                                    security in real-time.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Support Automation:</strong>&nbsp;Provides quick IT
                                                    assistance via chatbots.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Predictive Maintenance:</strong>&nbsp;Foresees
                                                    system failures proactively.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Resource Optimization:</strong>&nbsp;Manages IT
                                                    resources efficiently.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Backup Automation:</strong>&nbsp;Ensures data safety
                                                    with automated processes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/business-functions/Information Technology">
                                                <div className="w-auto">
                                                    <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] custom-shadow  via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px]  rounded-full">
                                                        <div className="text-white flex items-center  bg-[#181818] rounded-full  gap-4 font-[400] group/bento cursor-pointer text-[1.25em] leading-[1em]  py-3 px-6 transition-all duration-500">
                                                            Learn More
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Customer Service */}
                <div className="lg:pb-[10em] pb-[5em]">
                    <div
                        className="relative lg:h-[45em] "
                        style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate3d(0px, 100px, 0px) scale(0.95, 0.95)",
                            opacity: 1
                        }}
                    >
                        <div className="w-full flex h-full flex-wrap mx-auto lg:max-w-[80%] max-w-full px-4 lg:px-0">
                            <motion.div 
                                className="lg:w-6/12 w-full lg:absolute end-0 h-full"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/10.webp"
                                    alt=""
                                    className="w-full h-full lg:rounded-s-xl lg:rounded-e-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div 
                                className="lg:w-6/12 w-full h-full flex items-center"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-9/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl leading-[1.25em] inline">
                                        Customer Service
                                    </h2>
                                    <p className="text-fade font-[400] text-base md:text-lg lg:text-[1.5em] text-[#aaa] pb-6 pt-3 lg:w-10/12 w-full font-urbanist">
                                        AI transforms customer service by enhancing responsiveness and
                                        personalization.
                                    </p>
                                    <div className="text-fade font-[400] text-base md:text-lg lg:text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>24/7 Support:</strong>&nbsp;Delivers constant
                                                    customer assistance via chatbots.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Sentiment Analysis:</strong>&nbsp;Measures customer
                                                    satisfaction effectively.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Personalized Recommendations:</strong>&nbsp;Suggests
                                                    products based on preferences.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Automated Ticketing:</strong>&nbsp;Streamlines issue
                                                    resolution processes.
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] function text-[#808080]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 256 256"
                                                className="text-[#00D188]"
                                                height={15}
                                                width={15}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                            </svg>{" "}
                                            <div>
                                                <p>
                                                    <strong>Feedback Loop Creation:</strong>&nbsp;Continuously
                                                    improves service quality.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/business-functions/Customer Service">
                                                <div className="w-auto">
                                                    <div className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] custom-shadow  via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px]  rounded-full">
                                                        <div className="text-white flex items-center  bg-[#181818] rounded-full  gap-4 font-[400] group/bento cursor-pointer text-[1.25em] leading-[1em]  py-3 px-6 transition-all duration-500">
                                                            Learn More
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
