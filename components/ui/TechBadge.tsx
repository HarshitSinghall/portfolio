'use client';

import { motion } from 'framer-motion';

interface TechBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

export default function TechBadge({ name, icon }: TechBadgeProps) {
  return (
    <motion.span
      className="inline-flex items-center gap-2 px-4 py-2 bg-surface-light border border-border rounded-lg text-sm font-medium text-text-secondary cursor-default"
      whileHover={{
        scale: 1.05,
        borderColor: '#3DDC84',
        color: '#3DDC84',
        backgroundColor: 'rgba(61, 220, 132, 0.1)',
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {icon}
      {name}
    </motion.span>
  );
}
