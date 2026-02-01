'use client';

import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollToSection } from '@/lib/utils';

const quickLinks = [
  { label: 'Home', href: 'hero' },
  { label: 'About', href: 'about' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/HarshitSinghall', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/harshit-singhal1/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:harshitsinghal822@gmail.com', label: 'Email' },
];

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-2">
              Harshit Singhal
            </h3>
            <p className="text-text-secondary text-sm">
              Building exceptional Android applications that users love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-text-primary">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-surface-light rounded-full text-text-secondary hover:text-primary hover:bg-primary/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Android Developer Portfolio. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={handleBackToTop}
            className="flex items-center space-x-2 text-sm text-text-secondary hover:text-primary transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
