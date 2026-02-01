'use client';

import { motion } from 'framer-motion';
import { faqs } from '@/data/faq';
import Accordion from '@/components/ui/Accordion';
import AnimatedText from '@/components/ui/AnimatedText';

export default function FAQ() {
  const accordionItems = faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <section id="faq" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedText
            text="Frequently Asked Questions"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4"
            highlightWords={['Questions']}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            Got questions? I&apos;ve got answers
          </motion.p>
        </div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-surface border border-border rounded-xl overflow-hidden p-6"
        >
          <Accordion items={accordionItems} />
        </motion.div>
      </div>
    </section>
  );
}
