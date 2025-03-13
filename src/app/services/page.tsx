"use client";

import { motion } from "framer-motion";

export default function Services() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
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
                        className="mx-auto flex flex-col items-center justify-center max-w-full lg:px-0 flex-grow py-20 lg:py-[10em] mb-[5em]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex justify-center">
                            <h1 className="bg-gradient-to-l from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-6xl inline-flex font-bold text-center leading-tight">
                                Our AI Services
                            </h1>
                        </div>
                        <p className="text-2xl text-center font-[500] site-h3 pt-1 w-full text-[#808080]">
                            that keep you a Step Ahead in AI Race
                        </p>
                    </motion.div>
                </motion.div>

                {/* AI PoC Development */}
                <div className="lg:pb-[10em] pb-[5em]">
                    <motion.div
                        className="relative lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full flex  h-full flex-wrap   mx-auto lg:max-w-[80%] max-w-full px-[1em] lg:px-0">
                            <motion.div 
                                className="lg:w-6/12 w-full lg:absolute end-0 h-full"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/ai-poc-developement.jpg"
                                    alt="AI PoC Development"
                                    className="w-full h-full lg:rounded-s-xl lg:rounded-e-none rounded-xl object-cover"
                                />
                            </motion.div>
                            <motion.div 
                                className="lg:w-6/12 w-full h-full flex items-center"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-9/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl leading-[1.25em] inline">
                                        AI PoC Development
                                    </h2>
                                    <p className="text-fade font-[400] text-[1.5em]  text-[#aaa]  pb-6 pt-3  lg:w-10/12 w-full font-urbanist">
                                        Transform your business challenges into innovative solutions with
                                        our AI Proof of Concept development service, guiding you from idea
                                        to implementation with precision and clarity. Unlock the power of
                                        data-driven insights and see how AI can revolutionize your
                                        operations!
                                    </p>
                                    <div className="text-fade font-[400] text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Rapid AI Prototyping</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Validation Excellence</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Risk Intelligence</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Scalability Pathway</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Success Metrics</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/services/AI-PoC-Development">
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

                {/* AI Assistant Development */}
                <div className="lg:pb-[10em] pb-[5em]">
                    <motion.div
                        className="relative lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full flex  h-full flex-wrap   mx-auto lg:max-w-[80%] max-w-full px-[1em] lg:px-0 lg:flex-row-reverse">
                            <motion.div 
                                className="lg:w-6/12 w-full  lg:absolute start-0 h-full"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/ai-assistant.png"
                                    alt=""
                                    className="w-full h-full lg:rounded-e-xl lg:rounded-s-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div 
                                className="lg:w-6/12 w-full h-full flex items-center  lg:ps-20"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-10/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl leading-[1.25em] inline">
                                        AI Assistant Development
                                    </h2>
                                    <p className="text-fade font-[400] text-[1.5em]  text-[#aaa]  pb-6 pt-3  w-full font-urbanist">
                                        Design and develop sophisticated AI assistants that transform user
                                        interactions and automate complex tasks. Our service creates
                                        intelligent, context-aware assistants tailored to your needs.
                                    </p>
                                    <div className="text-fade font-[400] text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Custom Assistant Design</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Natural Language Processing</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Multi-Modal Interaction</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Context Awareness</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Continuous Learning</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/services/Custom-AI-Assistant-Chatbot-Development">
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

                {/* AI Strategy and Consulting -- */}
                <div className="lg:pb-[10em] pb-[5em]">
                    <motion.div
                        className="relative lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full flex  h-full flex-wrap   mx-auto lg:max-w-[80%] max-w-full px-[1em] lg:px-0">
                            <motion.div 
                                className="lg:w-6/12 w-full lg:absolute end-0 h-full"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/ai-strategy.jpg"
                                    alt=""
                                    className="w-full h-full lg:rounded-s-xl lg:rounded-e-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div 
                                className="lg:w-6/12 w-full h-full flex items-center"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-9/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl leading-[1.25em] inline">
                                        AI Strategy and Consulting
                                    </h2>
                                    <p className="text-fade font-[400] text-[1.5em]  text-[#aaa]  pb-6 pt-3  lg:w-10/12 w-full font-urbanist">
                                        Navigate your AI journey with confidence through our comprehensive
                                        consulting services. We help organizations chart their course in
                                        the AI landscape, ensuring strategic alignment with business
                                        objectives and market opportunities.
                                    </p>
                                    <div className="text-fade font-[400] text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Strategic AI Roadmapping</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Technology Assessment Framework</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Implementation Planning</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Risk Management Strategy</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>ROI Optimization</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/services/AI-Strategy-and-Consulting">
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

                {/* AI Agent Framework Development -- */}
                <div className="lg:pb-[10em] pb-[5em]">
                    <motion.div
                        className="relative lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full flex  h-full flex-wrap   mx-auto lg:max-w-[80%] max-w-full px-[1em] lg:px-0 lg:flex-row-reverse">
                            <motion.div 
                                className="lg:w-6/12 w-full  lg:absolute start-0 h-full"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/ai-agent.png"
                                    alt=""
                                    className="w-full h-full lg:rounded-e-xl lg:rounded-s-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div 
                                className="lg:w-6/12 w-full h-full flex items-center  lg:ps-20"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-10/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl leading-[1.25em] inline">
                                        AI Agent Framework Development
                                    </h2>
                                    <p className="text-fade font-[400] text-[1.5em]  text-[#aaa]  pb-6 pt-3  w-full font-urbanist">
                                        Create sophisticated AI agent frameworks that enable autonomous
                                        decision-making and task execution. We build intelligent systems
                                        that can operate independently while maintaining human oversight.
                                    </p>
                                    <div className="text-fade font-[400] text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Autonomous Operations</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Multi-Agent Architecture</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Task Orchestration</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Decision Intelligence</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Safety Controls</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/services/AI-Agent-Framework-Development">
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

                {/* RAG Development -- */}
                <div className="lg:pb-[10em] pb-[5em]">
                    <motion.div
                        className="relative lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full flex  h-full flex-wrap   mx-auto lg:max-w-[80%] max-w-full px-[1em] lg:px-0">
                            <motion.div 
                                className="lg:w-6/12 w-full lg:absolute end-0 h-full"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/rag-development.png"
                                    alt=""
                                    className="w-full h-full lg:rounded-s-xl lg:rounded-e-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div 
                                className="lg:w-6/12 w-full h-full flex items-center"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-9/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl leading-[1.25em] inline">
                                        RAG Development
                                    </h2>
                                    <p className="text-fade font-[400] text-[1.5em]  text-[#aaa]  pb-6 pt-3  lg:w-10/12 w-full font-urbanist">
                                        Build powerful RAG systems that combine the precision of
                                        information retrieval with the flexibility of generative AI.
                                        Create context-aware solutions that deliver accurate, relevant
                                        responses.
                                    </p>
                                    <div className="text-fade font-[400] text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Knowledge Integration</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Semantic Search</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Context Management</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Accuracy Optimization</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Real-time Retrieval</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/services/Retrieval-Augmented-Generation-RAG-Development">
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

                {/* AI Integration with Enterprise Data -- */}
                <div className="lg:pb-[10em] pb-[5em]">
                    <motion.div
                        className="relative lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full flex  h-full flex-wrap   mx-auto lg:max-w-[80%] max-w-full px-[1em] lg:px-0 lg:flex-row-reverse">
                            <motion.div 
                                className="lg:w-6/12 w-full  lg:absolute start-0 h-full"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/ai-integration.jpg"
                                    alt=""
                                    className="w-full h-full lg:rounded-e-xl lg:rounded-s-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div 
                                className="lg:w-6/12 w-full h-full flex items-center  lg:ps-20"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-10/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl leading-[1.25em] inline">
                                        AI Integration with Enterprise Data
                                    </h2>
                                    <p className="text-fade font-[400] text-[1.5em]  text-[#aaa]  pb-6 pt-3  w-full font-urbanist">
                                        Seamlessly integrate AI solutions into your existing
                                        infrastructure with our expert integration service. We ensure
                                        smooth connectivity, optimal performance, and secure data flow
                                        across your enterprise systems.
                                    </p>
                                    <div className="text-fade font-[400] text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Seamless System Integration</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Security-First Approach</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Enterprise Compatibility</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Real-time/Scheduled Synchronization</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Performance Monitoring</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/services/AI-Integration-with-Enterprise-Data">
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

                {/* Custom AI Solution Development -- */}
                <div className="lg:pb-[10em] pb-[5em]">
                    <motion.div
                        className="relative lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full flex  h-full flex-wrap   mx-auto lg:max-w-[80%] max-w-full px-[1em] lg:px-0">
                            <motion.div 
                                className="lg:w-6/12 w-full lg:absolute end-0 h-full"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/custom-ai-solution.jpg"
                                    alt=""
                                    className="w-full h-full lg:rounded-s-xl lg:rounded-e-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div 
                                className="lg:w-6/12 w-full h-full flex items-center"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-9/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl leading-[1.25em] inline">
                                        Custom AI Solution Development
                                    </h2>
                                    <p className="text-fade font-[400] text-[1.5em]  text-[#aaa]  pb-6 pt-3  lg:w-10/12 w-full font-urbanist">
                                        Transform your unique business challenges into powerful AI-driven
                                        solutions. Our custom development service creates tailored AI
                                        applications that perfectly align with your specific needs and
                                        objectives.
                                    </p>
                                    <div className="text-fade font-[400] text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Tailored AI Solutions</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Scalable Architecture Design</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Enterprise Integration Ready</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Performance Optimization</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Future-Proof Development</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/services/Custom-AI-Solution-Development">
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

                {/* Advanced Prompt Engineering -- */}
                <div className="lg:pb-[10em] pb-[5em]">
                    <motion.div
                        className="relative lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full flex  h-full flex-wrap   mx-auto lg:max-w-[80%] max-w-full px-[1em] lg:px-0 lg:flex-row-reverse">
                            <motion.div 
                                className="lg:w-6/12 w-full  lg:absolute start-0 h-full"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/ai-prompt-engineering.jpg"
                                    alt=""
                                    className="w-full h-full lg:rounded-e-xl lg:rounded-s-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div 
                                className="lg:w-6/12 w-full h-full flex items-center  lg:ps-20"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-10/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl leading-[1.25em] inline">
                                        Advanced Prompt Engineering
                                    </h2>
                                    <p className="text-fade font-[400] text-[1.5em]  text-[#aaa]  pb-6 pt-3  w-full font-urbanist">
                                        Optimize AI interactions through sophisticated prompt engineering
                                        and enhancement services. We design and refine prompts that
                                        maximize AI model performance and ensure consistent, high-quality
                                        outputs.
                                    </p>
                                    <div className="text-fade font-[400] text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Prompt Optimization</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Context Engineering</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Test against various GenAI Models</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Performance Testing Pipeline</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Pattern Development</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/services/Advanced-Prompt-Engineering">
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

                {/* AI/ML Ops Management -- */}
                <div className="lg:pb-[10em] pb-[5em]">
                    <motion.div
                        className="relative lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full flex  h-full flex-wrap   mx-auto lg:max-w-[80%] max-w-full px-[1em] lg:px-0">
                            <motion.div 
                                className="lg:w-6/12 w-full lg:absolute end-0 h-full"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/ai-ml-ops-management.jpg"
                                    alt=""
                                    className="w-full h-full lg:rounded-s-xl lg:rounded-e-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div 
                                className="lg:w-6/12 w-full h-full flex items-center"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-9/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl leading-[1.25em] inline">
                                        AI/ML Ops Management
                                    </h2>
                                    <p className="text-fade font-[400] text-[1.5em]  text-[#aaa]  pb-6 pt-3  lg:w-10/12 w-full font-urbanist">
                                        Maximize AI system reliability and performance through
                                        comprehensive MLOps practices and advanced observability. We
                                        ensure your AI systems operate efficiently, reliably, and
                                        transparently.
                                    </p>
                                    <div className="text-fade font-[400] text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Full Stack Monitoring</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Automated ML Pipeline</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Performance Analytics</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Model Governance</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Real-time Alerts</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/services/AI-ML-Ops-Management">
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

                {/* AI Cost Optimization -- */}
                <div className="lg:pb-[10em] pb-[5em]">
                    <motion.div
                        className="relative lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full flex  h-full flex-wrap   mx-auto lg:max-w-[80%] max-w-full px-[1em] lg:px-0 lg:flex-row-reverse">
                            <motion.div 
                                className="lg:w-6/12 w-full  lg:absolute start-0 h-full"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/ai-cost-optimization.jpeg"
                                    alt=""
                                    className="w-full h-full lg:rounded-e-xl lg:rounded-s-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div 
                                className="lg:w-6/12 w-full h-full flex items-center  lg:ps-20"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-10/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl leading-[1.25em] inline">
                                        AI Cost Optimization
                                    </h2>
                                    <p className="text-fade font-[400] text-[1.5em]  text-[#aaa]  pb-6 pt-3  w-full font-urbanist">
                                        Optimize your AI investments through strategic cost management and
                                        resource optimization. We help organizations maximize ROI while
                                        maintaining high-performance AI operations.
                                    </p>
                                    <div className="text-fade font-[400] text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Cost Analytics Platform</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Resource Optimization</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Budget Management</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Usage Monitoring</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>ROI Tracking</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/services/AI-Cost-Optimization">
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

                {/* AI Learning &amp; Development */}
                <div className="lg:pb-[10em] pb-[5em]">
                    <motion.div
                        className="relative lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full flex  h-full flex-wrap   mx-auto lg:max-w-[80%] max-w-full px-[1em] lg:px-0">
                            <motion.div 
                                className="lg:w-6/12 w-full lg:absolute end-0 h-full"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/ai-learning.jpg"
                                    alt=""
                                    className="w-full h-full lg:rounded-s-xl lg:rounded-e-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div 
                                className="lg:w-6/12 w-full h-full flex items-center"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-9/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-5xl leading-[1.25em] inline">
                                        AI Learning &amp; Development
                                    </h2>
                                    <p className="text-fade font-[400] text-[1.5em]  text-[#aaa]  pb-6 pt-3  lg:w-10/12 w-full font-urbanist">
                                        Empower your team with comprehensive AI knowledge and practical
                                        skills. Our training programs combine theoretical understanding
                                        with hands-on experience to build true AI capability within your
                                        organization.
                                    </p>
                                    <div className="text-fade font-[400] text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Customized Learning Paths</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Hands-on Workshops</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Industry Expert Training</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Practical Applications</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Continuous Support</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/services/AI-Learning-and-Development">
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
            </section>
        </div>
    );
}
