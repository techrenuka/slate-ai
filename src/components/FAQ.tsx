"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FAQ() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const faqData = [
    {
      question: "What sets an AI agency from UK apart from others globally?",
      answer:
        "UK AI agencies, particularly industry leaders like ours, bring a unique blend of technical expertise and cost-effectiveness. We've got a massive pool of skilled developers and data scientists, many trained at top institutes and with experience in Silicon Valley. Our teams are renowned for their innovative problem-solving skills and ability to handle complex projects. As one of the foremost AI agencies in UK, we've consistently delivered cutting-edge solutions to global clients. Plus, the time zone difference often works in favor of international clients, allowing for round-the-clock development and support.",
    },
    {
      question: "How can an AI agency help my business stay competitive?",
      answer:
        "A leading AI agency like ours can give your business a serious edge. We'll help you automate repetitive tasks, freeing up your team for more creative work. Our advanced AI solutions, developed by some of UK's top AI talent, can crunch through massive amounts of data to spot trends and opportunities you might miss. We can also help you personalize customer experiences, predict market changes, and optimize your operations. It's like giving your business a superpower, backed by our track record of success with both Fortune 500 companies and innovative startups.",
    },
    {
      question:
        "What are the current trends in AI that businesses should be aware of?",
      answer:
        "As a frontrunner in UK's AI landscape, we're always at the cutting edge of AI trends. We're seeing huge strides in natural language processing. Computer vision is another hot area, with applications in everything from self-driving cars to medical diagnostics. Explainable AI is gaining traction as businesses need to understand how AI makes decisions. And don't forget about edge AI, which brings powerful processing right to your devices. Our team of top AI researchers and developers are often invited to speak about these trends at major conferences.",
    },
    {
      question: "How does an AI agency ensure data privacy and security?",
      answer:
        "Data privacy is our top priority, and as a leading AI agency, we set the standard for data protection in UK. We use state-of-the-art encryption for all data transfers and storage. Our team follows strict data handling protocols and we're up to date with global privacy regulations like GDPR. We also build privacy features right into our AI models, using advanced techniques like federated learning when possible. Plus, we'll work with you to create a clear data governance plan tailored to your needs, drawing on our extensive experience with diverse clients.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === faqData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? faqData.length - 1 : prev - 1));
  };

  return (
    <div>
      <section className="py-8 sm:py-12 lg:py-[7.5em] px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-green-400 mb-2 sm:mb-3 text-center">
          ⁠We've picked <br className="sm:hidden" /> right use-cases for
        </h3>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent">
          <span>Business Functions</span>
        </h2>
        <section className="mx-auto my-6 sm:my-8 lg:my-10 w-full sm:max-w-[80%] lg:max-w-[60%] px-4 sm:px-6 lg:px-0">
          <div className="relative min-h-[350px] sm:min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="py-3 sm:py-4"
              >
                <h6 className="text-xl sm:text-2xl lg:text-[1.5em] font-[400] w-full text-[#eee] mb-3 sm:mb-4">
                  {faqData[currentSlide].question}
                </h6>
                <p className="text-base sm:text-lg lg:text-[1.3em] font-[400] w-full text-[#bbb] pt-1 font-urbanist leading-relaxed">
                  {faqData[currentSlide].answer}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8 sm:mt-10 lg:mt-12">
              <button
                onClick={prevSlide}
                className="p-2 sm:p-3 rounded-full hover:bg-[#ffffff1a] transition-colors"
                aria-label="Previous question"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white sm:w-6 sm:h-6"
                >
                  <path
                    d="M15 19l-7-7 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="flex gap-2 sm:gap-3">
                {faqData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors ${
                      currentSlide === index
                        ? "bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073]"
                        : "bg-[#ffffff1a] hover:bg-[#ffffff30]"
                    }`}
                    aria-label={`Go to question ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 sm:p-3 rounded-full hover:bg-[#ffffff1a] transition-colors"
                aria-label="Next question"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white sm:w-6 sm:h-6"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
