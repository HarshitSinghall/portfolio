'use client';

import { motion } from 'framer-motion';
import { Workflow, Clock } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProcessSectionProps {
  process: Project['process'];
}

export default function ProcessSection({ process }: ProcessSectionProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-surface to-transparent" />

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
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
              <Workflow className="text-accent" size={28} />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold">
                Development <span className="text-accent">Process</span>
              </h2>
              <p className="text-text-muted text-sm mt-1">How the project evolved</p>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-success" />

            <div className="space-y-8">
              {process.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-16 sm:pl-20"
                >
                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                    className="absolute left-0 top-4 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-surface border-2 border-primary flex items-center justify-center shadow-lg"
                  >
                    <span className="text-primary font-bold text-lg sm:text-xl">{index + 1}</span>
                  </motion.div>

                  {/* Content Card */}
                  <div className="bg-surface border border-border rounded-2xl p-6 hover:border-primary/50 transition-all group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                      <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">
                        {phase.phase}
                      </h3>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
                        <Clock size={14} />
                        {phase.duration}
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{phase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
