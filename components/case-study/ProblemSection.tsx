'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Target } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProblemSectionProps {
  challenge: Project['challenge'];
}

export default function ProblemSection({ challenge }: ProblemSectionProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-warning/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-14 h-14 rounded-2xl bg-warning/10 flex items-center justify-center">
              <Target className="text-warning" size={28} />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold">
                The <span className="text-warning">Challenge</span>
              </h2>
              <p className="text-text-muted text-sm mt-1">Understanding the problem</p>
            </div>
          </motion.div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-surface border border-border rounded-2xl p-8 mb-8"
          >
            <p className="text-text-secondary text-lg leading-relaxed">
              {challenge.overview}
            </p>
          </motion.div>

          {/* Challenge Points */}
          <div className="grid sm:grid-cols-2 gap-4">
            {challenge.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4 p-5 bg-surface border border-border rounded-xl hover:border-warning/50 transition-all h-full">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center group-hover:bg-warning/20 transition-colors">
                    <AlertTriangle className="text-warning" size={18} />
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{point}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
