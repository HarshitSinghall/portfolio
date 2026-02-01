'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code2, Smartphone } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedText from '@/components/ui/AnimatedText';
import TypeWriter from '@/components/ui/TypeWriter';
import FlipCounter from '@/components/ui/FlipCounter';
import { scrollToSection } from '@/lib/utils';

const stats = [
  { value: 12, label: 'Apps Delivered', suffix: '+' },
  { value: 4, label: 'Years Experience', suffix: '' },
  { value: 5, label: 'Star Rating', suffix: '/5' },
];

const codeSnippets = [
  'fun onCreate() {',
  '@Composable',
  'LaunchedEffect',
  'viewModel.state',
  'suspend fun',
  'Flow<Data>',
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(61, 220, 132, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(61, 220, 132, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(61, 220, 132, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/10 font-mono text-sm pointer-events-none select-none hidden md:block"
          style={{
            left: `${15 + (index % 3) * 30}%`,
            top: `${20 + Math.floor(index / 3) * 40}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        >
          {snippet}
        </motion.div>
      ))}

      {/* Background Icons */}
      <motion.div
        className="absolute top-20 right-10 opacity-10"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Code2 size={200} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-10 opacity-10"
        animate={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      >
        <Smartphone size={150} />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-primary font-semibold mb-2"
            >
              Harshit Singhal
            </motion.div>
            <AnimatedText
              text="I Build Android Apps"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight"
            />
            <AnimatedText
              text="That Users Love"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight text-primary"
              delay={0.3}
              highlightWords={['Love']}
            />
          </div>

          {/* Subheadline with TypeWriter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Freelance Android developer specializing in{' '}
            <TypeWriter
              words={[
                'Native Android Apps',
                'Jetpack Compose UIs',
                'Scalable Solutions',
                'Beautiful Experiences',
              ]}
              className="text-primary font-medium"
            />
          </motion.div>

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <MagneticButton
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
            >
              Let&apos;s Talk
            </MagneticButton>
          </motion.div>

          {/* Social Proof Stats with Flip Counter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1">
                  <FlipCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-primary cursor-pointer"
              onClick={() => scrollToSection('about')}
              whileHover={{ scale: 1.2 }}
            >
              <ArrowDown size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
