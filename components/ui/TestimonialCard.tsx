'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-surface border border-border rounded-xl p-6 sm:p-8 relative hover:border-primary/50 transition-all duration-300"
    >
      {/* Quote Icon */}
      <Quote className="absolute top-6 right-6 text-primary/20" size={40} />

      {/* Rating */}
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-primary text-primary" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-text-secondary mb-6 leading-relaxed relative z-10">
        "{testimonial.quote}"
      </p>

      {/* Author Info */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-text-primary">{testimonial.author}</h4>
          <p className="text-sm text-text-muted">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>

      {/* Project Name (if available) */}
      {testimonial.projectName && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-text-muted">
            Project: <span className="text-primary">{testimonial.projectName}</span>
          </p>
        </div>
      )}
    </motion.div>
  );
}
