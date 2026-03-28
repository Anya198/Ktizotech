'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { clsx, type ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

interface TextRotatorProps {
    words: string[];
    className?: string;
    interval?: number;
    textGradient?: boolean;
    letterAnimation?: boolean;
    color?: string;
}

const TextRotator = ({
    words,
    className = "",
    interval = 3000,
    color = "currentColor"
}: TextRotatorProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [tick, setTick] = useState(0); // Add a tick to force re-animation

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
            setTick(t => t + 1); // Increment tick every interval
        }, interval);

        return () => clearInterval(timer);
    }, [words.length, interval]);

    const letterVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(5px)",
            scale: 0.9
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                delay: i * 0.02,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
            }
        }),
        exit: (i: number) => ({
            opacity: 0,
            y: -20,
            filter: "blur(5px)",
            scale: 0.9,
            transition: {
                delay: i * 0.01,
                duration: 0.3,
                ease: "easeInOut"
            }
        })
    };

    return (
        <span className={cn(
            "relative inline-block",
            className
        )}
        style={{ color }}
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={`${currentIndex}-${tick}`} // Use tick in key to force re-animation
                    className="flex flex-wrap"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {(() => {
                        let globalLetterIndex = 0;
                        return words[currentIndex].split(/(\n)/).map((segment, segmentIndex) => {
                            if (segment === '\n') {
                                return <div key={`br-${segmentIndex}`} className="w-full h-0" />;
                            }
                            
                            return segment.split('').map((letter, i) => {
                                const currentIndexValue = globalLetterIndex++;
                                return (
                                    <motion.span
                                        key={`${currentIndex}-${tick}-${segmentIndex}-${i}`}
                                        custom={currentIndexValue}
                                        variants={letterVariants}
                                        style={{
                                            display: 'inline-block',
                                            whiteSpace: 'pre',
                                            fontWeight: 'inherit'
                                        }}
                                    >
                                        {letter}
                                    </motion.span>
                                );
                            });
                        });
                    })()}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

export default TextRotator;
