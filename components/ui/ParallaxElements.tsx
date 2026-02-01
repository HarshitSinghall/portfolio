'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxElement({ children, speed = 0.5, className = '' }: ParallaxElementProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, speed * 20]);

  return (
    <motion.div ref={ref} style={{ y, rotate }} className={className}>
      {children}
    </motion.div>
  );
}

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Green gradient blob */}
      <ParallaxElement speed={0.3} className="absolute top-20 right-10 opacity-20">
        <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-3xl" />
      </ParallaxElement>

      {/* Accent blob */}
      <ParallaxElement speed={-0.2} className="absolute top-1/2 left-10 opacity-10">
        <div className="w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
      </ParallaxElement>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />
    </div>
  );
}
