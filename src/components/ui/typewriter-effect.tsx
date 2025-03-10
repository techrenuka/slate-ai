"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  
  useEffect(() => {
    if (isInView) {
      const cycleWords = async () => {
        for (let i = 0; i < wordsArray.length; i++) {
          // Type the word
          await animate(
            "span",
            { opacity: 1 },
            { duration: 0.15, delay: stagger(0.05) }
          );
          
          // Wait before erasing
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          // Erase the word
          await animate(
            "span",
            { opacity: 0 },
            { duration: 0.1, delay: stagger(0.03, { from: "last" }) }
          );
          
          // Move to next word
          setCurrentWordIndex((prev) => (prev + 1) % wordsArray.length);
          
          // Small pause before typing next word
          await new Promise(resolve => setTimeout(resolve, 300));
        }
        
        // Restart the cycle
        cycleWords();
      };
      
      cycleWords();
    }
  }, [isInView, animate]);
  
  const currentWord = wordsArray[currentWordIndex];
  
  return (
    <div className={cn("flex justify-center items-center space-x-1 my-6", className)}>
      <div ref={scope} className="flex justify-center">
        <div className="text-3xl md:text-5xl font-medium">
          {currentWord.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn("opacity-0 text-white", currentWord.className)}
            >
              {char}
            </span>
          ))}
        </div>
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            repeatDelay: 0.2,
          }}
          className={cn(
            "block rounded-sm w-[4px] h-8 md:h-12 bg-white ml-1",
            cursorClassName
          )}
        ></motion.span>
      </div>
    </div>
  );
};
