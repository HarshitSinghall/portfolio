'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FlipCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function FlipDigit({ digit }: { digit: string }) {
  return (
    <div className="relative w-8 h-12 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-primary"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function FlipCounter({ value, suffix = '', duration = 2000 }: FlipCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  const digits = count.toString().split('');

  return (
    <div ref={ref} className="flex items-center justify-center">
      {digits.map((digit, index) => (
        <FlipDigit key={index} digit={digit} />
      ))}
      {suffix && <span className="text-3xl font-bold text-primary ml-1">{suffix}</span>}
    </div>
  );
}
