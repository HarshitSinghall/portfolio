'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Lightbulb, Sparkles } from 'lucide-react';
import { Project } from '@/data/projects';

interface SolutionSectionProps {
  solution: Project['solution'];
}

export default function SolutionSection({ solution }: SolutionSectionProps) {
  return (
    <section className="py-20 bg-surface relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-success/5 rounded-full blur-[120px] -translate-y-1/2" />

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
            <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center">
              <Lightbulb className="text-success" size={28} />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold">
                The <span className="text-success">Solution</span>
              </h2>
              <p className="text-text-muted text-sm mt-1">How I approached it</p>
            </div>
          </motion.div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-background border border-border rounded-2xl p-8 mb-10"
          >
            <p className="text-text-secondary text-lg leading-relaxed">
              {solution.overview}
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-primary" size={20} />
              <h3 className="text-xl font-heading font-semibold">Key Features Implemented</h3>
            </div>
          </motion.div>

          <div className="space-y-4">
            {solution.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="bg-background border border-border rounded-xl p-6 hover:border-success/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                      <CheckCircle2 className="text-success" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-heading font-semibold mb-2 group-hover:text-success transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
