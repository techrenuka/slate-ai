"use client";
import { motion } from "framer-motion";

export default function Industries() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <section className="w-full max-w-full overflow-x-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full"
                    style={{
                        background:
                            "-webkit-linear-gradient(45deg, rgb(171, 236, 219) 0%, rgb(10, 53, 89) 30%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 70%, rgb(10, 53, 89) 80%, rgb(171, 236, 219) 100%)"
                    }}
                >
                    <div className="mx-auto flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8 lg:px-0 py-[6em] sm:py-16 md:py-20 lg:py-[10em] mb-[3em] sm:mb-[4em] md:mb-[5em]">
                        <h1 className="bg-gradient-to-l from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-6xl inline-flex font-bold text-center leading-tight max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
                            Transforming Industries with AI/ML Excellence
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-center font-[500] site-h3 pt-1 sm:pt-2 md:pt-3 w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] text-[#808080]">
                            Real Success Stories: Transforming Industries with AI
                        </p>
                    </div>
                </motion.div>

                {/* Finance */}
                <div className="w-full lg:pb-[10em] pb-[5em] px-4 lg:px-0 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.75 }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:h-[45em]"
                        
                    >
                        <div className="w-full flex h-full flex-wrap mx-auto lg:max-w-[80%] px-0">
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.75 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="lg:w-6/12 w-full lg:absolute end-0 h-full">
                                <img
                                    src="/images/business-finance.png"
                                    alt="Business Fianance"
                                    className="w-full h-full lg:rounded-s-xl lg:rounded-e-none rounded-xl object-cover "
                                />
                           </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.75 }}
                                transition={{ duration: 0.8 }}
                                className="lg:w-6/12 w-full h-full flex items-center">
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-9/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-3xl lg:text-5xl leading-[1.25em] inline-block">
                                        Finance
                                    </h2>
                                    <p className="text-fade font-[400] text-lg lg:text-[1.5em]  text-[#aaa]  pb-6 pt-3  lg:w-10/12 w-full font-urbanist">
                                        In finance, we combine AI with enterprise's own big data to
                                        protect transactions and enhance customer interactions. Through
                                        predictive analytics and automated processes, we enable financial
                                        institutions to stay ahead of fraud, optimizing strategies and
                                        deliver personalized services that build trust and drive growth.
                                    </p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="text-fade font-[400] text-lg lg:text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>AI-based fraud detection</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Automated trading algorithms</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Personalized financial advisory</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>AI-driven customer service bots</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Risk assessment models</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/industries/Finance">
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

                {/* Retail */}
                <div className="w-full lg:pb-[10em] pb-[5em] px-4 lg:px-0 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.75 }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:h-[45em]"
                        style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate3d(0px, 100px, 0px) scale(0.95, 0.95)",
                            opacity: 1
                        }}
                    >
                        <div className="w-full flex  h-full flex-wrap   mx-auto lg:max-w-[80%] max-w-full px-[1em] lg:px-0 lg:flex-row-reverse">
                            <div className="lg:w-6/12 w-full  lg:absolute start-0 h-full">
                                <img
                                    src="/images/smart-business.jpg"
                                    alt="Smart Business"
                                    className="w-full h-full lg:rounded-e-xl lg:rounded-s-none rounded-xl object-cover "
                                />
                            </div>
                            <div className="lg:w-6/12 w-full h-full flex items-center  lg:ps-20">
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-10/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-3xl lg:text-5xl leading-[1.25em] inline-block">
                                        Retail
                                    </h2>
                                    <p className="text-fade font-[400] text-lg lg:text-[1.5em]  text-[#aaa]  pb-6 pt-3  w-full font-urbanist">
                                        In retail, we blend AI with cloud-based and mobile solutions to
                                        personalize shopping experiences and optimize supply chains. From
                                        AI-powered inventory management to blockchain for supply chain
                                        transparency, our technologies enhance customer satisfaction and
                                        business operations, ensuring a competitive edge in a dynamic
                                        market.
                                    </p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="text-fade font-[400] text-lg lg:text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>AI-driven product recommendations</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Predictive inventory management</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Dynamic pricing models</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Virtual fitting rooms</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Automated supply chain planning</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/industries/Retail">
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
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Logistics */}
                <div className="w-full lg:pb-[10em] pb-[5em] px-4 lg:px-0 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.75 }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:h-[45em]"
                        style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate3d(0px, 100px, 0px) scale(0.95, 0.95)",
                            opacity: 1
                        }}
                    >
                        <div className="w-full flex h-full flex-wrap mx-auto lg:max-w-[80%] px-0">
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.75 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="lg:w-6/12 w-full lg:absolute end-0 h-full">
                                <img
                                    src="/images/delivery-robot.jpg"
                                    alt=""
                                    className="w-full h-full lg:rounded-s-xl lg:rounded-e-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.75 }}
                                transition={{ duration: 0.8 }}
                                className="lg:w-6/12 w-full h-full flex items-center">
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-9/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-3xl lg:text-5xl leading-[1.25em] inline-block">
                                        Logistics
                                    </h2>
                                    <p className="text-fade font-[400] text-lg lg:text-[1.5em]  text-[#aaa]  pb-6 pt-3  lg:w-10/12 w-full font-urbanist">
                                        In logistics, we integrate AI with IoT and advanced analytics to
                                        streamline operations and enhance safety. From route optimization
                                        to real-time fleet management, our technologies enable more
                                        efficient, reliable, and cost-effective logistics solutions,
                                        driving better outcomes for businesses and their customers.
                                    </p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="text-fade font-[400] text-lg lg:text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Predictive maintenance systems</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>AI-driven quality control</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Supply chain optimization</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Robotics and automation</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Demand forecasting</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/industries/Logistics">
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

                {/* Healthcare */}
                <div className="w-full lg:pb-[10em] pb-[5em] px-4 lg:px-0 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.75 }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:h-[45em]"
                        style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate3d(0px, 100px, 0px) scale(0.95, 0.95)",
                            opacity: 1
                        }}
                    >
                        <div className="w-full flex  h-full flex-wrap   mx-auto lg:max-w-[80%] max-w-full px-[1em] lg:px-0 lg:flex-row-reverse">
                            <div className="lg:w-6/12 w-full  lg:absolute start-0 h-full">
                                <img
                                    src="/images/ai-healthcare.jpg"
                                    alt=""
                                    className="w-full h-full lg:rounded-e-xl lg:rounded-s-none rounded-xl object-cover "
                                />
                            </div>
                            <div className="lg:w-6/12 w-full h-full flex items-center  lg:ps-20">
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-10/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-3xl lg:text-5xl leading-[1.25em] inline-block">
                                        Healthcare
                                    </h2>
                                    <p className="text-fade font-[400] text-lg lg:text-[1.5em]  text-[#aaa]  pb-6 pt-3  w-full font-urbanist">
                                        In healthcare, we integrate AI with advanced data analytics and
                                        cloud solutions to enhance patient outcomes and streamline
                                        operations. From AI-assisted diagnostics to personalized treatment
                                        plans, our technologies enable healthcare providers to deliver
                                        faster, more accurate care, improving the quality of life and
                                        operational efficiency.
                                    </p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="text-fade font-[400] text-lg lg:text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>AI-powered diagnostics</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Personalized treatment plans</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Automated administration</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Robotic surgery</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Virtual health assistants</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Remote patient monitoring</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/industries/Healthcare">
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
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Manufacturing */}
                <div className="w-full lg:pb-[10em] pb-[5em] px-4 lg:px-0 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.75 }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:h-[45em]"
                        style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate3d(0px, 100px, 0px) scale(0.95, 0.95)",
                            opacity: 1
                        }}
                    >
                        <div className="w-full flex h-full flex-wrap mx-auto lg:max-w-[80%] px-0">
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.75 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="lg:w-6/12 w-full lg:absolute end-0 h-full">
                                <img
                                    src="/images/ai-manufacturing.avif"
                                    alt=""
                                    className="w-full h-full lg:rounded-s-xl lg:rounded-e-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.75 }}
                                transition={{ duration: 0.8 }}
                                className="lg:w-6/12 w-full h-full flex items-center">
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-9/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-3xl lg:text-5xl leading-[1.25em] inline-block">
                                        Manufacturing
                                    </h2>
                                    <p className="text-fade font-[400] text-lg lg:text-[1.5em]  text-[#aaa]  pb-6 pt-3  lg:w-10/12 w-full font-urbanist">
                                        In manufacturing, we leverage AI alongside IoT and automation
                                        technologies to boost productivity and maintain high standards.
                                        Our solutions enable predictive maintenance, improve quality
                                        control, and optimize supply chains, ensuring that manufacturers
                                        can operate more efficiently and produce better products with less
                                        waste.
                                    </p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="text-fade font-[400] text-lg lg:text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Predictive maintenance systems</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>AI-driven quality control</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Supply chain optimization</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Robotics and automation</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Demand forecasting</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/industries/Manufacturing">
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

                {/* Fitness */}
                <div className="w-full lg:pb-[10em] pb-[5em] px-4 lg:px-0 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.75 }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:h-[45em]"
                        style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate3d(0px, 100px, 0px) scale(0.95, 0.95)",
                            opacity: 1
                        }}
                    >
                        <div className="w-full flex  h-full flex-wrap   mx-auto lg:max-w-[80%] max-w-full px-[1em] lg:px-0 lg:flex-row-reverse">
                            <div className="lg:w-6/12 w-full  lg:absolute start-0 h-full">
                                <img
                                    src="/images/ai-fitness.avif"
                                    alt=""
                                    className="w-full h-full lg:rounded-e-xl lg:rounded-s-none rounded-xl object-cover "
                                />
                            </div>
                            <div className="lg:w-6/12 w-full h-full flex items-center  lg:ps-20">
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-10/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-3xl lg:text-5xl leading-[1.25em] inline-block">
                                        Fitness
                                    </h2>
                                    <p className="text-fade font-[400] text-lg lg:text-[1.5em]  text-[#aaa]  pb-6 pt-3  w-full font-urbanist">
                                        In logistics, we integrate AI with IoT and advanced analytics to
                                        streamline operations and enhance safety. From route optimization
                                        to real-time fleet management, our technologies enable more
                                        efficient, reliable, and cost-effective logistics solutions,
                                        driving better outcomes for businesses and their customers.
                                    </p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="text-fade font-[400] text-lg lg:text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Predictive maintenance systems</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>AI-driven quality control</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Supply chain optimization</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Robotics and automation</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Demand forecasting</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/industries/Fitness">
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
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* E-commerce */}
                <div className="w-full lg:pb-[10em] pb-[5em] px-4 lg:px-0 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.75 }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:h-[45em]"
                        style={{
                            translate: "none", 
                            rotate: "none",
                            scale: "none",
                            transform: "translate3d(0px, 100px, 0px) scale(0.95, 0.95)",
                            opacity: 1
                        }}
                    >
                        <div className="w-full flex h-full flex-wrap mx-auto lg:max-w-[80%] px-0">
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.75 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="lg:w-6/12 w-full lg:absolute end-0 h-full">
                                <img
                                    src="/images/ai-ecommerce.jpg"
                                    alt=""
                                    className="w-full h-full lg:rounded-s-xl lg:rounded-e-none rounded-xl object-cover "
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.75 }}
                                transition={{ duration: 0.8 }}
                                className="lg:w-6/12 w-full h-full flex items-center">
                                <div className="lg:pt-0 pt-6">
                                    <h2 className="text-fade lg:w-9/12 w-11/12 capitalize font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-3xl lg:text-5xl leading-[1.25em] inline-block">
                                        E-commerce
                                    </h2>
                                    <p className="text-fade font-[400] text-lg lg:text-[1.5em]  text-[#aaa]  pb-6 pt-3  lg:w-10/12 w-full font-urbanist">
                                        In e-commerce, we harness AI alongside advanced data analytics and
                                        cloud technologies to optimize customer experiences and streamline
                                        operations. From AI-driven product recommendations to automated
                                        inventory management, our solutions empower retailers to deliver
                                        personalized shopping experiences, increase sales, and enhance
                                        operational efficiency.
                                    </p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="text-fade font-[400] text-lg lg:text-[1.5em] ps-6 leading-[1.5em] text-[#808080] pb-10 font-urbanist">
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>AI-driven product recommendations</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Personalized shopping experiences</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Automated inventory management</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Dynamic pricing strategies</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Chatbots for customer service</p>
                                            </div>
                                        </div>
                                        <div className=" list-none flex items-center gap-6 text-fade font-[400] text-sm lg:text-[1em] leading-[1.8em] text-[#808080]">
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
                                                <p>Fraud detection and prevention</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div className="flex gap-5">
                                        <div className="">
                                            <a href="/industries/E-commerce">
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
