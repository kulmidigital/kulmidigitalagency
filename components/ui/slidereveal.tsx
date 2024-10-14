"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface SlideRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | ["up" | "down", "left" | "right"];
  duration?: number;
  delay?: number;
  className?: string;
}

const SlideReveal: React.FC<SlideRevealProps> = ({
  children,
  direction = "up",
  duration = 0.5,
  delay = 0,
  className = "",
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentDirection, setCurrentDirection] = useState<"up" | "down" | "left" | "right">(
    Array.isArray(direction) ? direction[0] : direction
  );

  useEffect(() => {
    const handleResize = () => {
      if (Array.isArray(direction)) {
        setCurrentDirection(window.innerWidth >= 640 ? direction[1] : direction[0]);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [direction]);

  const variants = {
    hidden: {
      opacity: 0,
      x: currentDirection === "left" ? 100 : currentDirection === "right" ? -100 : 0,
      y: currentDirection === "up" ? 100 : currentDirection === "down" ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls, currentDirection]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideReveal;
