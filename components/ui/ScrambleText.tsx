'use client'
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ScrambleTextProps {
  text: string;
  className?: string;
  isHovered?: boolean;
}

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?0123456789";

export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className, isHovered }) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [displayText, setDisplayText] = useState(text);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = text.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setDisplayText(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setDisplayText(text);
  };

  useEffect(() => {
    if (isHovered) {
      scramble();
    } else {
      stopScramble();
    }
    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, [isHovered]);

  return (
    <motion.span
      className={className}
      whileHover={{ scale: 1.05 }}
    >
      {displayText}
    </motion.span>
  );
};
