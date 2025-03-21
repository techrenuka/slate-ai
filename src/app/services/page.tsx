"use client";

import { motion } from "framer-motion";

export default function Services() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <section className="w-full mx-auto">
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
                        className="mx-auto flex flex-col items-center justify-center w-full px-4 py-[6em] md:py-16 lg:py-[10em] space-y-4 md:space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex justify-center w-full">
                            <h1 className="bg-gradient-to-l from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center leading-tight">
                                Our AI Services
                            </h1>
                        </div>
                        <p className="text-base md:text-xl lg:text-2xl text-center font-[500] site-h3 text-[#808080] max-w-3xl px-4">
                            that keep you a Step Ahead in AI Race
                        </p>
                    </motion.div>
                </motion.div>

                {/* AI PoC Development */}
                <div className="py-8 sm:py-12 md:py-16 lg:py-[10em]">
                    <motion.div
                        className="relative min-h-[30em] sm:min-h-[35em] md:min-h-[40em] lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full h-full flex flex-col lg:flex-row mx-auto px-4 sm:px-6 lg:px-8 max-w-[95%] lg:max-w-[90%]">
                            <motion.div 
                                className="w-full lg:w-6/12 lg:absolute lg:end-0 h-[300px] sm:h-[400px] lg:h-full mb-6 lg:mb-0"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/ai-poc-developement.jpg"
                                    alt="AI PoC Development"
                                    className="w-full h-full rounded-xl lg:rounded-s-xl lg:rounded-e-none object-cover"
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-1/2 flex items-center"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="w-full">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent leading-tight mb-4">
                                        AI PoC Development
                                    </h2>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-[1.5em] text-[#aaa] pb-6 font-urbanist">
                                        Transform your business challenges into innovative solutions with
                                        our AI Proof of Concept development service, guiding you from idea
                                        to implementation with precision and clarity. Unlock the power of
                                        data-driven insights and see how AI can revolutionize your
                                        operations!
                                    </p>
                                    <div className="space-y-3 ps-4 sm:ps-6 pb-8 font-urbanist">
                                        {[
                                            "Rapid AI Prototyping",
                                            "Validation Excellence",
                                            "Risk Intelligence",
                                            "Scalability Pathway",
                                            "Success Metrics"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-4 text-sm sm:text-base md:text-lg text-[#808080]">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 256 256"
                                                    className="text-[#00D188] flex-shrink-0"
                                                    height={15}
                                                    width={15}
                                                >
                                                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                                </svg>
                                                <p>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div>
                                        <a href="/services/AI-PoC-Development" className="inline-block">
                                            <div className="bg-gradient-to-r from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full custom-shadow">
                                                <div className="text-white bg-[#181818] rounded-full px-6 py-3 text-sm sm:text-base md:text-lg lg:text-[1.25em] font-[400] transition-all duration-500">
                                                    Learn More
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* AI Assistant Development */}
                <div className="py-8 sm:py-12 md:py-16 lg:py-[10em]">
                    <motion.div
                        className="relative min-h-[30em] sm:min-h-[35em] md:min-h-[40em] lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full h-full flex flex-col lg:flex-row-reverse mx-auto px-4 sm:px-6 lg:px-8 max-w-[95%] lg:max-w-[90%]">
                            <motion.div 
                                className="w-full lg:w-6/12 lg:absolute start-0 h-[300px] sm:h-[400px] lg:h-full mb-6 lg:mb-0"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/ai-assistant.png"
                                    alt="AI Assistant Development"
                                    className="w-full h-full rounded-xl lg:rounded-e-xl lg:rounded-s-none object-cover"
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-1/2 flex items-center lg:ps-20"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="w-full">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent leading-tight mb-4">
                                        AI Assistant Development
                                    </h2>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-[1.5em] text-[#aaa] pb-6 font-urbanist">
                                        Design and develop sophisticated AI assistants that transform user
                                        interactions and automate complex tasks. Our service creates
                                        intelligent, context-aware assistants tailored to your needs.
                                    </p>
                                    <div className="space-y-3 ps-4 sm:ps-6 pb-8 font-urbanist">
                                        {[
                                            "Custom Assistant Design",
                                            "Natural Language Processing",
                                            "Multi-Modal Interaction",
                                            "Context Awareness",
                                            "Continuous Learning"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-4 text-sm sm:text-base md:text-lg text-[#808080]">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 256 256"
                                                    className="text-[#00D188] flex-shrink-0"
                                                    height={15}
                                                    width={15}
                                                >
                                                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                                </svg>
                                                <p>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div>
                                        <a href="/services/Custom-AI-Assistant-Chatbot-Development" className="inline-block">
                                            <div className="bg-gradient-to-r from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full custom-shadow">
                                                <div className="text-white bg-[#181818] rounded-full px-6 py-3 text-sm sm:text-base md:text-lg lg:text-[1.25em] font-[400] transition-all duration-500">
                                                    Learn More
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* AI Strategy and Consulting -- */}
                <div className="py-8 sm:py-12 md:py-16 lg:py-[10em]">
                    <motion.div
                        className="relative min-h-[30em] sm:min-h-[35em] md:min-h-[40em] lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full h-full flex flex-col lg:flex-row mx-auto px-4 sm:px-6 lg:px-8 max-w-[95%] lg:max-w-[90%]">
                            <motion.div 
                                className="w-full lg:w-6/12 lg:absolute lg:end-0 h-[300px] sm:h-[400px] lg:h-full mb-6 lg:mb-0"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/ai-strategy.jpg"
                                    alt="AI Strategy and Consulting"
                                    className="w-full h-full rounded-xl lg:rounded-s-xl lg:rounded-e-none object-cover"
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-1/2 flex items-center"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="w-full">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent leading-tight mb-4">
                                        AI Strategy and Consulting
                                    </h2>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-[1.5em] text-[#aaa] pb-6 font-urbanist">
                                        Navigate your AI journey with confidence through our comprehensive consulting services. We help organizations chart their course in the AI landscape, ensuring strategic alignment with business objectives and market opportunities.
                                    </p>
                                    <div className="space-y-3 ps-4 sm:ps-6 pb-8 font-urbanist">
                                        {[
                                            "Strategic AI Roadmapping",
                                            "Technology Assessment Framework",
                                            "Implementation Planning",
                                            "Risk Management Strategy",
                                            "ROI Optimization"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-4 text-sm sm:text-base md:text-lg text-[#808080]">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 256 256"
                                                    className="text-[#00D188] flex-shrink-0"
                                                    height={15}
                                                    width={15}
                                                >
                                                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                                </svg>
                                                <p>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div>
                                        <a href="/services/AI-Strategy-and-Consulting" className="inline-block">
                                            <div className="bg-gradient-to-r from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full custom-shadow">
                                                <div className="text-white bg-[#181818] rounded-full px-6 py-3 text-sm sm:text-base md:text-lg lg:text-[1.25em] font-[400] transition-all duration-500">
                                                    Learn More
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* AI Agent Framework Development -- */}
                <div className="py-8 sm:py-12 md:py-16 lg:py-[10em]">
                    <motion.div
                        className="relative min-h-[30em] sm:min-h-[35em] md:min-h-[40em] lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full h-full flex flex-col lg:flex-row-reverse mx-auto px-4 sm:px-6 lg:px-8 max-w-[95%] lg:max-w-[90%]">
                            <motion.div 
                                className="w-full lg:w-6/12 lg:absolute start-0 h-[300px] sm:h-[400px] lg:h-full mb-6 lg:mb-0"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/ai-agent.png"
                                    alt="AI Agent Framework"
                                    className="w-full h-full rounded-xl lg:rounded-e-xl lg:rounded-s-none object-cover"
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-1/2 flex items-center lg:ps-20"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="w-full">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent leading-tight mb-4">
                                        AI Agent Framework Development
                                    </h2>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-[1.5em] text-[#aaa] pb-6 font-urbanist">
                                        Create sophisticated AI agent frameworks that enable autonomous
                                        decision-making and task execution. We build intelligent systems
                                        that can operate independently while maintaining human oversight.
                                    </p>
                                    <div className="space-y-3 ps-4 sm:ps-6 pb-8 font-urbanist">
                                        {[
                                            "Autonomous Operations",
                                            "Multi-Agent Architecture",
                                            "Task Orchestration",
                                            "Decision Intelligence",
                                            "Safety Controls"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-4 text-sm sm:text-base md:text-lg text-[#808080]">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 256 256"
                                                    className="text-[#00D188] flex-shrink-0"
                                                    height={15}
                                                    width={15}
                                                >
                                                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                                </svg>
                                                <p>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div>
                                        <a href="/services/AI-Agent-Framework-Development" className="inline-block">
                                            <div className="bg-gradient-to-r from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full custom-shadow">
                                                <div className="text-white bg-[#181818] rounded-full px-6 py-3 text-sm sm:text-base md:text-lg lg:text-[1.25em] font-[400] transition-all duration-500">
                                                    Learn More
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* RAG Development -- */}
                <div className="py-8 sm:py-12 md:py-16 lg:py-[10em]">
                    <motion.div
                        className="relative min-h-[30em] sm:min-h-[35em] md:min-h-[40em] lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full h-full flex flex-col lg:flex-row mx-auto px-4 sm:px-6 lg:px-8 max-w-[95%] lg:max-w-[90%]">
                            <motion.div 
                                className="w-full lg:w-6/12 lg:absolute lg:end-0 h-[300px] sm:h-[400px] lg:h-full mb-6 lg:mb-0"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/rag-development.png"
                                    alt="RAG Development"
                                    className="w-full h-full rounded-xl lg:rounded-s-xl lg:rounded-e-none object-cover"
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-1/2 flex items-center"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="w-full">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent leading-tight mb-4">
                                        RAG Development
                                    </h2>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-[1.5em] text-[#aaa] pb-6 font-urbanist">
                                        Build powerful RAG systems that combine the precision of
                                        information retrieval with the flexibility of generative AI.
                                        Create context-aware solutions that deliver accurate, relevant
                                        responses.
                                    </p>
                                    <div className="space-y-3 ps-4 sm:ps-6 pb-8 font-urbanist">
                                        {[
                                            "Knowledge Integration",
                                            "Semantic Search",
                                            "Context Management",
                                            "Accuracy Optimization",
                                            "Real-time Retrieval"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-4 text-sm sm:text-base md:text-lg text-[#808080]">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 256 256"
                                                    className="text-[#00D188] flex-shrink-0"
                                                    height={15}
                                                    width={15}
                                                >
                                                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                                </svg>
                                                <p>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div>
                                        <a href="/services/Retrieval-Augmented-Generation-RAG-Development" className="inline-block">
                                            <div className="bg-gradient-to-r from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full custom-shadow">
                                                <div className="text-white bg-[#181818] rounded-full px-6 py-3 text-sm sm:text-base md:text-lg lg:text-[1.25em] font-[400] transition-all duration-500">
                                                    Learn More
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* AI Integration with Enterprise Data -- */}
                <div className="py-8 sm:py-12 md:py-16 lg:py-[10em]">
                    <motion.div
                        className="relative min-h-[30em] sm:min-h-[35em] md:min-h-[40em] lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full h-full flex flex-col lg:flex-row-reverse mx-auto px-4 sm:px-6 lg:px-8 max-w-[95%] lg:max-w-[90%]">
                            <motion.div 
                                className="w-full lg:w-6/12 lg:absolute start-0 h-[300px] sm:h-[400px] lg:h-full mb-6 lg:mb-0"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/ai-integration.jpg"
                                    alt="AI Integration"
                                    className="w-full h-full rounded-xl lg:rounded-e-xl lg:rounded-s-none object-cover"
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-1/2 flex items-center lg:ps-20"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="w-full">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent leading-tight mb-4">
                                        AI Integration with Enterprise Data
                                    </h2>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-[1.5em] text-[#aaa] pb-6 font-urbanist">
                                        Seamlessly integrate AI solutions into your existing infrastructure with our expert integration service. We ensure smooth connectivity, optimal performance, and secure data flow across your enterprise systems.
                                    </p>
                                    <div className="space-y-3 ps-4 sm:ps-6 pb-8 font-urbanist">
                                        {[
                                            "Seamless System Integration",
                                            "Security-First Approach",
                                            "Enterprise Compatibility",
                                            "Real-time/Scheduled Synchronization",
                                            "Performance Monitoring"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-4 text-sm sm:text-base md:text-lg text-[#808080]">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 256 256"
                                                    className="text-[#00D188] flex-shrink-0"
                                                    height={15}
                                                    width={15}
                                                >
                                                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                                </svg>
                                                <p>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div>
                                        <a href="/services/AI-Integration-with-Enterprise-Data" className="inline-block">
                                            <div className="bg-gradient-to-r from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full custom-shadow">
                                                <div className="text-white bg-[#181818] rounded-full px-6 py-3 text-sm sm:text-base md:text-lg lg:text-[1.25em] font-[400] transition-all duration-500">
                                                    Learn More
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Custom AI Solution Development -- */}
                <div className="py-8 sm:py-12 md:py-16 lg:py-[10em]">
                    <motion.div
                        className="relative min-h-[30em] sm:min-h-[35em] md:min-h-[40em] lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full h-full flex flex-col lg:flex-row mx-auto px-4 sm:px-6 lg:px-8 max-w-[95%] lg:max-w-[90%]">
                            <motion.div 
                                className="w-full lg:w-6/12 lg:absolute lg:end-0 h-[300px] sm:h-[400px] lg:h-full mb-6 lg:mb-0"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/custom-ai-solution.jpg"
                                    alt="Custom AI Solution Development"
                                    className="w-full h-full rounded-xl lg:rounded-s-xl lg:rounded-e-none object-cover"
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-1/2 flex items-center"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="w-full">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent leading-tight mb-4">
                                        Custom AI Solution Development
                                    </h2>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-[1.5em] text-[#aaa] pb-6 font-urbanist">
                                        Transform your unique business challenges into powerful AI-driven solutions. Our custom development service creates tailored AI applications that perfectly align with your specific needs and objectives.
                                    </p>
                                    <div className="space-y-3 ps-4 sm:ps-6 pb-8 font-urbanist">
                                        {[
                                            "Tailored AI Solutions",
                                            "Scalable Architecture Design", 
                                            "Enterprise Integration Ready",
                                            "Performance Optimization",
                                            "Future-Proof Development"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-4 text-sm sm:text-base md:text-lg text-[#808080]">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 256 256"
                                                    className="text-[#00D188] flex-shrink-0"
                                                    height={15}
                                                    width={15}
                                                >
                                                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                                </svg>
                                                <p>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div>
                                        <a href="/services/Custom-AI-Solution-Development" className="inline-block">
                                            <div className="bg-gradient-to-r from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full custom-shadow">
                                                <div className="text-white bg-[#181818] rounded-full px-6 py-3 text-sm sm:text-base md:text-lg lg:text-[1.25em] font-[400] transition-all duration-500">
                                                    Learn More
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Advanced Prompt Engineering -- */}
                <div className="py-8 sm:py-12 md:py-16 lg:py-[10em]">
                    <motion.div
                        className="relative min-h-[30em] sm:min-h-[35em] md:min-h-[40em] lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full h-full flex flex-col lg:flex-row-reverse mx-auto px-4 sm:px-6 lg:px-8 max-w-[95%] lg:max-w-[90%]">
                            <motion.div 
                                className="w-full lg:w-6/12 lg:absolute start-0 h-[300px] sm:h-[400px] lg:h-full mb-6 lg:mb-0"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/ai-prompt-engineering.jpg"
                                    alt="Advanced Prompt Engineering"
                                    className="w-full h-full rounded-xl lg:rounded-e-xl lg:rounded-s-none object-cover"
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-1/2 flex items-center lg:ps-20"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="w-full">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent leading-tight mb-4">
                                        Advanced Prompt Engineering
                                    </h2>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-[1.5em] text-[#aaa] pb-6 font-urbanist">
                                        Optimize AI interactions through sophisticated prompt engineering
                                        and enhancement services. We design and refine prompts that
                                        maximize AI model performance and ensure consistent, high-quality
                                        outputs.
                                    </p>
                                    <div className="space-y-3 ps-4 sm:ps-6 pb-8 font-urbanist">
                                        {[
                                            "Prompt Optimization",
                                            "Context Engineering",
                                            "Test against various GenAI Models",
                                            "Performance Testing Pipeline",
                                            "Pattern Development"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-4 text-sm sm:text-base md:text-lg text-[#808080]">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 256 256"
                                                    className="text-[#00D188] flex-shrink-0"
                                                    height={15}
                                                    width={15}
                                                >
                                                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                                </svg>
                                                <p>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div>
                                        <a href="/services/Advanced-Prompt-Engineering" className="inline-block">
                                            <div className="bg-gradient-to-r from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full custom-shadow">
                                                <div className="text-white bg-[#181818] rounded-full px-6 py-3 text-sm sm:text-base md:text-lg lg:text-[1.25em] font-[400] transition-all duration-500">
                                                    Learn More
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* AI/ML Ops Management -- */}
                <div className="py-8 sm:py-12 md:py-16 lg:py-[10em]">
                    <motion.div
                        className="relative min-h-[30em] sm:min-h-[35em] md:min-h-[40em] lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full h-full flex flex-col lg:flex-row mx-auto px-4 sm:px-6 lg:px-8 max-w-[95%] lg:max-w-[90%]">
                            <motion.div 
                                className="w-full lg:w-6/12 lg:absolute lg:end-0 h-[300px] sm:h-[400px] lg:h-full mb-6 lg:mb-0"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/ai-ml-ops-management.jpg"
                                    alt="AI/ML Ops Management"
                                    className="w-full h-full rounded-xl lg:rounded-s-xl lg:rounded-e-none object-cover"
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-1/2 flex items-center"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="w-full">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent leading-tight mb-4">
                                        AI/ML Ops Management
                                    </h2>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-[1.5em] text-[#aaa] pb-6 font-urbanist">
                                        Maximize AI system reliability and performance through comprehensive MLOps practices and advanced observability. We ensure your AI systems operate efficiently, reliably, and transparently.
                                    </p>
                                    <div className="space-y-3 ps-4 sm:ps-6 pb-8 font-urbanist">
                                        {[
                                            "Full Stack Monitoring",
                                            "Automated ML Pipeline",
                                            "Performance Analytics",
                                            "Model Governance",
                                            "Real-time Alerts"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-4 text-sm sm:text-base md:text-lg text-[#808080]">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 256 256"
                                                    className="text-[#00D188] flex-shrink-0"
                                                    height={15}
                                                    width={15}
                                                >
                                                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                                </svg>
                                                <p>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div>
                                        <a href="/services/AI-ML-Ops-Management" className="inline-block">
                                            <div className="bg-gradient-to-r from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full custom-shadow">
                                                <div className="text-white bg-[#181818] rounded-full px-6 py-3 text-sm sm:text-base md:text-lg lg:text-[1.25em] font-[400] transition-all duration-500">
                                                    Learn More
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* AI Cost Optimization -- */}
                <div className="py-8 sm:py-12 md:py-16 lg:py-[10em]">
                    <motion.div
                        className="relative min-h-[30em] sm:min-h-[35em] md:min-h-[40em] lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full h-full flex flex-col lg:flex-row-reverse mx-auto px-4 sm:px-6 lg:px-8 max-w-[95%] lg:max-w-[90%]">
                            <motion.div 
                                className="w-full lg:w-6/12 lg:absolute start-0 h-[300px] sm:h-[400px] lg:h-full mb-6 lg:mb-0"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/ai-cost-optimization.jpeg"
                                    alt="AI Cost Optimization"
                                    className="w-full h-full rounded-xl lg:rounded-e-xl lg:rounded-s-none object-cover"
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-1/2 flex items-center lg:ps-20"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="w-full">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent leading-tight mb-4">
                                        AI Cost Optimization
                                    </h2>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-[1.5em] text-[#aaa] pb-6 font-urbanist">
                                        Optimize your AI investments through strategic cost management and
                                        resource optimization. We help organizations maximize ROI while
                                        maintaining high-performance AI operations.
                                    </p>
                                    <div className="space-y-3 ps-4 sm:ps-6 pb-8 font-urbanist">
                                        {[
                                            "Cost Analytics Platform",
                                            "Resource Optimization",
                                            "Budget Management",
                                            "Usage Monitoring",
                                            "ROI Tracking"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-4 text-sm sm:text-base md:text-lg text-[#808080]">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 256 256"
                                                    className="text-[#00D188] flex-shrink-0"
                                                    height={15}
                                                    width={15}
                                                >
                                                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                                </svg>
                                                <p>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div>
                                        <a href="/services/AI-Cost-Optimization" className="inline-block">
                                            <div className="bg-gradient-to-r from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full custom-shadow">
                                                <div className="text-white bg-[#181818] rounded-full px-6 py-3 text-sm sm:text-base md:text-lg lg:text-[1.25em] font-[400] transition-all duration-500">
                                                    Learn More
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* AI Learning &amp; Development */}
                <div className="py-8 sm:py-12 md:py-16 lg:py-[10em]">
                    <motion.div
                        className="relative min-h-[30em] sm:min-h-[35em] md:min-h-[40em] lg:h-[45em]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full h-full flex flex-col lg:flex-row mx-auto px-4 sm:px-6 lg:px-8 max-w-[95%] lg:max-w-[90%]">
                            <motion.div 
                                className="w-full lg:w-6/12 lg:absolute lg:end-0 h-[300px] sm:h-[400px] lg:h-full mb-6 lg:mb-0"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/images/ai-learning.jpg"
                                    alt="AI Learning and Development"
                                    className="w-full h-full rounded-xl lg:rounded-s-xl lg:rounded-e-none object-cover"
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-1/2 flex items-center"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="w-full">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent leading-tight mb-4">
                                        AI Learning &amp; Development
                                    </h2>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-[1.5em] text-[#aaa] pb-6 font-urbanist">
                                        Empower your team with comprehensive AI knowledge and practical
                                        skills. Our training programs combine theoretical understanding
                                        with hands-on experience to build true AI capability within your
                                        organization.
                                    </p>
                                    <div className="space-y-3 ps-4 sm:ps-6 pb-8 font-urbanist">
                                        {[
                                            "Customized Learning Paths",
                                            "Hands-on Workshops",
                                            "Industry Expert Training",
                                            "Practical Applications",
                                            "Continuous Support"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-4 text-sm sm:text-base md:text-lg text-[#808080]">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 256 256"
                                                    className="text-[#00D188] flex-shrink-0"
                                                    height={15}
                                                    width={15}
                                                >
                                                    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                                </svg>
                                                <p>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div>
                                        <a href="/services/AI-Learning-and-Development" className="inline-block">
                                            <div className="bg-gradient-to-r from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full custom-shadow">
                                                <div className="text-white bg-[#181818] rounded-full px-6 py-3 text-sm sm:text-base md:text-lg lg:text-[1.25em] font-[400] transition-all duration-500">
                                                    Learn More
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
