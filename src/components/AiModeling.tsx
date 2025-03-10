'use client';
import React, { useState, useEffect, useRef } from 'react';
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";


export default function AiModeling() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Only update scroll position when section is visible
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      } else {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set initial position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const words = [
    {
      text: "Increase User Satisfaction",
    },
    {
      text: "Deploy AI at Scale",
    },
    {
      text: "Deploy AI for ROI",
    },
    {
      text: "Integrate Smartly",
    },
    {
      text: "Optimize AI Costs",
    },
  ];
  // Update transform calculations
  const g1Transform = `translate: none; rotate: none; scale: none; transform: translate3d(0px, ${80 + scrollY * 0.08}px, 0px);`;
  const g2Transform = `translate: none; rotate: none; scale: none; transform: translate3d(0px, ${-130 + scrollY * 0.11}px, 0px);`;
  const g3Transform = `translate: none; rotate: none; scale: none; transform: translate3d(0px, ${-120 - scrollY * 0.06}px, 0px);`;
  const g5Transform = `translate: none; rotate: none; scale: none; transform: translate3d(0px, ${130 + scrollY * 0.09}px, 0px);`;
  const g6Transform = `translate: none; rotate: none; scale: none; transform: translate3d(0px, ${-100 - scrollY * 0.07}px, 0px);`;

  
  return (
    <div>
      <section ref={sectionRef} className="lg:py-[7.5em] lg:px-10 hidden lg:flex py-[3em] bg-black">
        <div className="pb-40">
          <div className="relative">
            <div style={{ 
              transform: `translate3d(0px, ${80 - scrollY * 0.04}px, 0px)`,
              translate: `none`,
              rotate: `none`,
              scale:`none`
              }}
            >
              <img
                alt="g1"
                loading="lazy"
                width="3479"
                height="1479"
                decoding="async"
                data-nimg="1"
                className="top-0 w-full object-cover"
                srcSet="/images/5.png"
                src="/images/5.png"
                style={{ color: 'transparent' }}
              />
            </div>
            <div
              className="absolute top-[6%]"
              style={{
                transform: `translate3d(0px, ${-130 - scrollY * -0.07}px, 0px)`,
                translate: `none`,
                rotate: `none`,
                scale:`none`
              }}
            >
              <img
                alt="g2"
                loading="lazy"
                width="3374"
                height="1369"
                decoding="async"
                data-nimg="1"
                className="w-full object-cover"
                srcSet="/images/1.png"
                src="/images/1.png"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
          
          <div className="relative">
            <div style={{ 
                 transform: `translate3d(0px, ${-120 - scrollY * -0.07}px, 0px)`,
              translate: `none`,
              rotate: `none`,
              scale:`none`
            }}>
              <img
                alt="g3"
                loading="lazy"
                width="3665"
                height="2560"
                decoding="async"
                data-nimg="1"
                className="absolute top-0 w-full object-cover"
                srcSet="/images/2.png"
                src="/images/2.png"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
          <div className="h-screen relative">
            <div className="sticky top-[40%]">
              <div className="flex justify-center flex-col items-center">
                <div
                  className="site-h2 leading-[1.2em] text-faro text-center pb-[0.3em] w-6/12"
                >
                  <h3 className="text-2xl md:text-3xl font-medium text-green-400">
                    We've cultivated in-depth
                  </h3>
                  <h2 className="text-4xl md:text-6xl font-semibold my-4">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 text-transparent bg-clip-text">
                      AI Modelling
                    </span>
                    <span className="text-white"> Expertise to</span>
                  </h2>

                  <TypewriterEffectSmooth words={words} />

                </div>
              </div>
            </div>
          </div>
          <div
            style={{

              transform: 'translate3d(0px, 0px, 0px)',
              opacity: '1'
            }}
          >
            <div className="flex flex-col items-center">
              <p
                className="font-urbanist w-[36%] text-center font-[400] text-[1.5em] pb-2 pt-3 text-[#808080]"
              >
                We preach UX, Scalability, Ease of Deployment,
                Integrations and Ongoing Costs right from beginning to
                avoid any surprises
              </p>
            </div>
          </div>


          <div className="flex justify-center pt-6">
            <a className="flex cursor-pointer z-[100]" href="/models"
            ><div className="w-auto">
                <div
                  className="bg-gradient-to-r w-fit from-[rgba(0,166,255,0.7)] via-[rgba(255,89,89,0.7)] to-[rgba(255,192,115,0.7)] p-[2px] rounded-full custom-shadow group"
                >
                  <div
                    className="text-white w-full flex items-center bg-[#181818] rounded-full gap-4 font-[400] cursor-pointer text-[1.25em] leading-[1em] py-3 px-12 transition-all duration-500 group-hover:bg-[#222222] relative overflow-hidden"
                  >
                    <span className="relative z-10">Explore Models</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  </div>
                </div>
              </div></a
            >
          </div>


          <div className="relative">
            <div style={{ 
              transform: `translate3d(0px, 130px, 0px)`,
              translate: `none`,
              rotate: `none`,
              scale:`none`
            }}>
              <img
                alt="g5"
                loading="lazy"
                width="3465"
                height="1432"
                decoding="async"
                data-nimg="1"
                className="top-0 w-full object-cover"
                srcSet="/images/3.png"
                src="/images/3.png"
                style={{ color: 'transparent' }}
              />
            </div>
            <div
              className="absolute top-0 start-0"
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                transform: `translate3d(0px, -100px, 0px)`
              }}
            >
              <img
                alt="g6"
                loading="lazy"
                width="3490"
                height="1326"
                decoding="async"
                data-nimg="1"
                className="w-full object-cover"
                srcSet="/images/4.png"
                src="/images/4.png"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </section>


      <div className="max-w-4xl mx-auto px-4 text-center">

      </div>

      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}