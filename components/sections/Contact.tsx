'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedText from '@/components/ui/AnimatedText';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'harshitsinghal822@gmail.com',
    href: 'mailto:harshitsinghal822@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/harshit-singhal1',
    href: 'https://www.linkedin.com/in/harshit-singhal1/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/HarshitSinghall',
    href: 'https://github.com/HarshitSinghall',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dehradun, Uttarakhand, India',
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('Dpg6Tz29CKnLaeoD2');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = 'service_t8ohpsi';
      const confirmationTemplateId = 'template_e36qm7v'; // Template for form filler
      const notificationTemplateId = 'template_1avpcvd'; // Template for you (notification)

      // Template parameters for CONFIRMATION email (to form filler)
      const confirmationParams = {
        to_name: formData.name,
        to_email: formData.email,
        from_name: 'Harshit Singhal',
        project_type: formData.projectType,
        budget: formData.budget || 'Not specified',
        message: formData.message,
        reply_to: 'harshitsinghal822@gmail.com',
      };

      // Template parameters for NOTIFICATION email (to you)
      const notificationParams = {
        to_name: 'Harshit',
        to_email: 'harshitsinghal822@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType,
        budget: formData.budget || 'Not specified',
        message: formData.message,
        reply_to: formData.email,
      };

      // Send confirmation email to form filler
      console.log('1. Sending confirmation email to:', formData.email);
      await emailjs.send(serviceId, confirmationTemplateId, confirmationParams);
      console.log('✓ Confirmation email sent!');

      // Send notification email to you
      console.log('2. Sending notification email to: harshitsinghal822@gmail.com');
      await emailjs.send(serviceId, notificationTemplateId, notificationParams);
      console.log('✓ Notification email sent!');

      console.log('Both emails sent successfully!');
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: unknown) {
      const err = error as { text?: string; status?: number };
      console.error('Failed to send emails');
      console.error('Status:', err.status);
      console.error('Error:', err.text);

      setIsSubmitting(false);
      setSubmitStatus('error');

      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inputClasses =
    'w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300';

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedText
            text="Let's Work Together"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4"
            highlightWords={['Together']}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? Let&apos;s discuss how I can help bring it to life
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  <option value="">Select project type</option>
                  <option value="new-app">New App Development</option>
                  <option value="redesign">App Redesign</option>
                  <option value="modernization">App Modernization</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <label htmlFor="budget" className="block text-sm font-medium mb-2">
                  Budget Range (Optional)
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select budget range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                <MagneticButton
                  onClick={() => {}}
                  className={`w-full px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </MagneticButton>
              </motion.div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="p-4 bg-success/10 border border-success/20 rounded-lg text-success text-sm"
                >
                  Thank you! Your message has been sent. I&apos;ll get back to you within 24 hours.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm"
                >
                  Oops! Something went wrong. Please try again or contact me directly via email.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Get in Touch</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to
                be part of your vision. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5, borderColor: 'rgba(61, 220, 132, 0.5)' }}
                  className="flex items-center space-x-4 p-4 bg-surface border border-border rounded-lg transition-all cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
                  >
                    <method.icon className="text-primary" size={20} />
                  </motion.div>
                  <div>
                    <div className="text-sm text-text-muted">{method.label}</div>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-text-primary hover:text-primary transition-colors"
                        data-cursor="link"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <div className="text-text-primary">{method.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-primary/10 border border-primary/20 rounded-xl"
            >
              <motion.div
                className="flex items-center gap-2 mb-2"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <h4 className="font-semibold text-primary">Currently Available</h4>
              </motion.div>
              <p className="text-sm text-text-secondary">
                I&apos;m currently accepting new projects. Let&apos;s discuss how I can help bring
                your Android app idea to life!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
