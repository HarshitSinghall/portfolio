'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
}

export default function AnimatedIcon({ icon: Icon, className = '', size = 28 }: AnimatedIconProps) {
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      whileHover={{
        scale: 1.1,
        rotate: [0, -10, 10, -10, 0],
      }}
      transition={{
        scale: { duration: 0.2 },
        rotate: { duration: 0.5, ease: 'easeInOut' },
      }}
    >
      <Icon size={size} />
    </motion.div>
  );
}
