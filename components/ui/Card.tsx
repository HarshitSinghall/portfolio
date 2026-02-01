import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={cn(
        'bg-surface border border-border rounded-xl p-6 transition-all duration-300',
        hover && 'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
