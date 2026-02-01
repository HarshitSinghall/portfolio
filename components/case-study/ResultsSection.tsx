'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Quote, Star, Trophy } from 'lucide-react';
import { Project } from '@/data/projects';

interface ResultsSectionProps {
  results: Project['results'];
  testimonial?: Project['testimonial'];
}

export default function ResultsSection({ results, testimonial }: ResultsSectionProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Trophy className="text-primary" size={28} />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold">
                Project <span className="text-primary">Results</span>
              </h2>
              <p className="text-text-muted text-sm mt-1">Impact and outcomes</p>
            </div>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-surface border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all overflow-hidden h-full">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                      className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    >
                      <TrendingUp className="text-primary" size={24} />
                    </motion.div>

                    <div className="text-4xl font-bold text-primary mb-2 font-heading">
                      {result.value}
                    </div>
                    <div className="text-lg font-semibold mb-1">{result.metric}</div>
                    {result.description && (
                      <div className="text-sm text-text-muted">{result.description}</div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial */}
          {testimonial && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 via-surface to-accent/10 border border-primary/20 rounded-2xl p-8 sm:p-10 relative overflow-hidden">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 text-primary/10" size={64} />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star size={20} className="fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-lg sm:text-xl text-text-secondary mb-8 leading-relaxed relative z-10 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary text-lg">
                      {testimonial.author}
                    </h4>
                    <p className="text-text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
