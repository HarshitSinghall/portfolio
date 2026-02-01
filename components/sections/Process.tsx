'use client';

import { motion } from 'framer-motion';
import {
  Search,
  Calendar,
  Palette,
  Code2,
  TestTube,
  Rocket
} from 'lucide-react';
import { fadeUp } from '@/lib/animations';

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your requirements, goals, target users, and project scope.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Technical planning, architecture design, and timeline estimation.',
    icon: Calendar,
  },
  {
    number: '03',
    title: 'Design',
    description: 'UI/UX design, wireframing, and creating interactive prototypes.',
    icon: Palette,
  },
  {
    number: '04',
    title: 'Development',
    description: 'Agile development with regular updates and milestone deliveries.',
    icon: Code2,
  },
  {
    number: '05',
    title: 'Testing',
    description: 'Rigorous QA, user testing, and bug fixes for a flawless experience.',
    icon: TestTube,
  },
  {
    number: '06',
    title: 'Launch & Support',
    description: 'Play Store deployment and ongoing maintenance and support.',
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            How I <span className="text-primary">Work</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A proven process that ensures successful project delivery
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-surface border border-border rounded-xl p-6 hover:border-primary/50 transition-all h-full relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative"
                  >
                    <step.icon className="text-primary" size={28} />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-background text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
