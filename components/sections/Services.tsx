'use client';

import { motion } from 'framer-motion';
import { Smartphone, Palette, RefreshCw, Plug, Toolbox, Lightbulb, Check } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';
import AnimatedText from '@/components/ui/AnimatedText';
import StaggeredGrid from '@/components/ui/StaggeredGrid';
import { services } from '@/data/services';

const iconMap: Record<string, any> = {
  smartphone: Smartphone,
  palette: Palette,
  'refresh-cw': RefreshCw,
  plug: Plug,
  tool: Toolbox,
  lightbulb: Lightbulb,
};

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedText
            text="What I Do"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4"
            highlightWords={['Do']}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            Comprehensive Android development services to bring your ideas to life
          </motion.p>
        </div>

        {/* Services Grid */}
        <StaggeredGrid
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          staggerDelay={0.1}
          animationType="fadeUp"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <TiltCard key={service.id} className="h-full">
                <div className="bg-surface border border-border rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <Icon className="text-primary" size={28} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>

                  {/* Description */}
                  <p className="text-text-secondary mb-4 leading-relaxed">{service.description}</p>

                  {/* Deliverables */}
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start text-sm text-text-secondary"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <motion.div whileHover={{ scale: 1.2 }}>
                          <Check className="text-primary mr-2 flex-shrink-0 mt-0.5" size={16} />
                        </motion.div>
                        <span>{deliverable}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            );
          })}
        </StaggeredGrid>
      </div>
    </section>
  );
}
