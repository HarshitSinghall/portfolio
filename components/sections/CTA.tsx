'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, MessageCircle } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedText from '@/components/ui/AnimatedText';
import { scrollToSection } from '@/lib/utils';

const trustIndicators = [
  { icon: Sparkles, text: 'Free consultation' },
  { icon: Calendar, text: 'No commitment' },
  { icon: MessageCircle, text: 'Reply within 24 hours' },
];

interface Particle {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

export default function CTA() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse at 0% 0%, rgba(61, 220, 132, 0.2) 0%, transparent 50%)',
            'radial-gradient(ellipse at 100% 100%, rgba(61, 220, 132, 0.2) 0%, transparent 50%)',
            'radial-gradient(ellipse at 100% 0%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)',
            'radial-gradient(ellipse at 0% 100%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)',
            'radial-gradient(ellipse at 0% 0%, rgba(61, 220, 132, 0.2) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div>
            <AnimatedText
              text="Ready to Build Your Next"
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-2"
            />
            <AnimatedText
              text="Android App?"
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 text-primary"
              delay={0.2}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto"
            >
              Let&apos;s turn your idea into a beautiful, high-performing Android application that
              your users will love. Get in touch today!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <MagneticButton
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Start a Project
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Schedule a Call
              </MagneticButton>
            </motion.div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-2 text-text-secondary"
                  whileHover={{ scale: 1.05, color: '#3DDC84' }}
                >
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <indicator.icon className="text-primary" size={20} />
                  </motion.div>
                  <span className="text-sm font-medium">{indicator.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
