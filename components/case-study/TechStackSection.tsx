'use client';

import { motion } from 'framer-motion';
import { Layers, Code2 } from 'lucide-react';
import { Project } from '@/data/projects';
import Badge from '@/components/ui/Badge';

interface TechStackSectionProps {
  techDetails: Project['techDetails'];
}

export default function TechStackSection({ techDetails }: TechStackSectionProps) {
  return (
    <section className="py-20 bg-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />

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
              <Layers className="text-primary" size={28} />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold">
                Technology <span className="text-primary">Stack</span>
              </h2>
              <p className="text-text-muted text-sm mt-1">Tools and technologies used</p>
            </div>
          </motion.div>

          {/* Tech Categories Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techDetails.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-background border border-border rounded-2xl p-6 h-full hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <Code2 className="text-primary" size={20} />
                    <h3 className="text-lg font-heading font-semibold text-primary">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 + itemIndex * 0.05 }}
                      >
                        <Badge variant="outline" className="text-sm">
                          {item}
                        </Badge>
                      </motion.div>
                    ))}
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
