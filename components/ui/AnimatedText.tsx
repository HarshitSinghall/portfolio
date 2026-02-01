'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  type?: 'words' | 'chars' | 'lines';
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export default function AnimatedText({
  text,
  className = '',
  once = true,
  type = 'words',
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.03,
  highlightWords = [],
  highlightClassName = 'text-primary',
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-10%' });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const items = type === 'words' ? text.split(' ') : text.split('');

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      style={{ perspective: 1000 }}
    >
      {items.map((item, index) => {
        const isHighlighted = highlightWords.some((word) =>
          item.toLowerCase().includes(word.toLowerCase())
        );
        return (
          <motion.span
            key={index}
            variants={child}
            className={`inline-block ${isHighlighted ? highlightClassName : ''}`}
            style={{ transformOrigin: 'bottom' }}
          >
            {item}
            {type === 'words' && index < items.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
