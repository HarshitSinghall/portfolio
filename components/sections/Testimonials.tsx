'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import AnimatedText from '@/components/ui/AnimatedText';

export default function Testimonials() {
  const carouselTestimonials = testimonials.map((t) => ({
    quote: t.quote,
    author: t.author,
    role: `${t.role}, ${t.company}`,
    image: t.image,
  }));

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedText
            text="What Clients Say"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4"
            highlightWords={['Say']}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            Don&apos;t just take my word for it - hear from satisfied clients
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TestimonialCarousel testimonials={carouselTestimonials} autoPlayInterval={5000} />
        </motion.div>
      </div>
    </section>
  );
}
