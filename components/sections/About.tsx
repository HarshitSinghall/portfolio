'use client';

import { motion } from 'framer-motion';
import { Users, Star, Code, Smartphone } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedText from '@/components/ui/AnimatedText';
import TechBadge from '@/components/ui/TechBadge';
import StaggeredGrid from '@/components/ui/StaggeredGrid';
import CountUp from '@/components/ui/CountUp';

const stats = [
  { icon: Code, value: 5, label: 'Years Experience', suffix: '+' },
  { icon: Smartphone, value: 50, label: 'Apps Delivered', suffix: '+' },
  { icon: Users, value: 40, label: 'Happy Clients', suffix: '+' },
  { icon: Star, value: 5, label: '5-Star Reviews', suffix: '', decimals: 1 },
];

const techStack = [
  'Kotlin',
  'Java',
  'Jetpack Compose',
  'XML',
  'Android SDK',
  'MVVM',
  'Clean Architecture',
  'Retrofit',
  'Room',
  'Hilt',
  'Coroutines',
  'Flow',
  'Firebase',
  'Git',
  'REST APIs',
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedText
            text="About Me"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4"
            highlightWords={['Me']}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            Passionate Android developer with a focus on creating exceptional mobile experiences
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              className="relative w-full max-w-md mx-auto aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-9xl">
                👨‍💻
              </div>
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-primary/50"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(61, 220, 132, 0.2)',
                    '0 0 40px rgba(61, 220, 132, 0.4)',
                    '0 0 20px rgba(61, 220, 132, 0.2)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-primary text-background px-6 py-3 rounded-lg font-semibold shadow-lg"
            >
              4+ Years Experience
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-text-secondary leading-relaxed">
              I&apos;m a passionate Android developer with over 5 years of experience building
              high-quality native mobile applications. I specialize in creating beautiful,
              performant, and user-friendly apps using the latest Android technologies.
            </p>
            <p className="text-text-secondary leading-relaxed">
              My expertise lies in Kotlin, Jetpack Compose, and modern Android architecture
              patterns. I&apos;ve worked with clients ranging from startups to established businesses,
              helping them bring their ideas to life through innovative mobile solutions.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I believe in writing clean, maintainable code and following industry best practices.
              Whether you need a new app built from scratch, want to modernize an existing app, or
              require technical consultation, I&apos;m here to help.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <StaggeredGrid
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          staggerDelay={0.1}
          animationType="scaleIn"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all group"
              whileHover={{ y: -5, borderColor: 'rgba(61, 220, 132, 0.5)' }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="mx-auto mb-3 text-primary" size={32} />
              </motion.div>
              <div className="text-3xl font-bold text-primary mb-1">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                />
              </div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </StaggeredGrid>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-heading font-bold text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <TechBadge name={tech} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
