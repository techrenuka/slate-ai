"use client";
import { motion } from "framer-motion";
import { section } from "framer-motion/client";

export default function ContactUs() {
  return (
    <div>
      <section className="lg:py-[7.5em] px-[1em] lg:px-0 pb-[3em]" id="contact">
        <section
          className="lg:max-w-[80%] max-w-full mx-auto "
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate3d(0px, 0px, 0px)",
            opacity: 1,
          }}
        >
          <div className="rounded-[40px] overflow-hidden contact-animation bg-[#181818]">
            <div className="w-full lg:h-[47em] flex lg:flex-nowrap flex-wrap lg:gap-16 lg:space-y-0 space-y-8">
              <div className="lg:w-[40%] w-full flex gap-8">
                <div className="w-full flex justify-center items-center h-full overflow-hidden">
                  <img
                    alt="ContactImg"
                    loading="lazy"
                    width={3819}
                    height={2542}
                    decoding="async"
                    data-nimg={1}
                    className="w-full h-full object-cover scale-[1]"
                    srcSet="/images/handshake.jpg"
                    src="/images/handshake.jpg"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div className="lg:w-[60%] w-full h-full flex lg:py-10 items-center justify-start lg:pe-10 lg:ps-0 p-5">
                <div className="flex flex-col items-start w-full">
                  <h3 className="text-5xl w-full text-start font-bold leading-[1.25em] pb-[0.4em] bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent">
                    AI is here to Stay
                    <br />
                    Let’s win together
                  </h3>
                  <p className="text-3xl text-start font-[500] text-wrap py-[0.4em] text-[#808080]">
                    Do you know, that our first Business to AI alignment session
                    as well as{" "}
                    <span className="font-[600] text-[#aaa]">
                      small PoC’s are&nbsp;free&nbsp;of&nbsp;cost?
                    </span>
                  </p>
                  <div className="flex gap-4 lg:items-center py-[4em] flex-wrap lg:w-full">
                    <div className="text-white flex items-center border rounded-full gap-4 font-[700] group cursor-pointer text-[26px] leading-[36.41px] py-3 pe-3 transition-all duration-500 border-[#252525] ps-6">
                      Schedule a&nbsp;Call
                      <div className="relative p-[2px] inline-block rounded-full group-hover:bg-gradient-to-r transition-all duration-300 ease-in-out from-[#00A6FF] via-[#FF5959] to-[#FFC073]">
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
                    <div className="text-white flex items-center border rounded-full gap-4 font-[700] group cursor-pointer text-[26px] leading-[36.41px] py-3 pe-3 transition-all duration-500 border-[#252525] ps-6">
                      Request a Free PoC
                      <div className="relative p-[2px] inline-block rounded-full group-hover:bg-gradient-to-r transition-all duration-300 ease-in-out from-[#00A6FF] via-[#FF5959] to-[#FFC073]">
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
                  <p className="text-3xl site-h3-green text-start font-[500] text-faro text-wrap py-[0.4em] text-[#808080]">
                    You can also just{" "}
                    <span className="font-[700] cursor-pointer hover:border-b transition-all text-white text-[26px] leading-[36.41px]">
                      Say Hello
                    </span>{" "}
                    or write us an{" "}
                    <span className="font-[600] cursor-pointer hover:border-b transition-all text-white text-[26px] leading-[36.41px]">
                      Email
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
