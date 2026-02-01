'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

interface NextProjectProps {
  project: Project;
}

export default function NextProject({ project }: NextProjectProps) {
  return (
    <section className="py-20 bg-surface border-t border-border relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-primary mb-2 tracking-wider">CONTINUE EXPLORING</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold">
              Next Project
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link href={`/case-study/${project.slug}`} className="block group">
              <div className="bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                    <Image
                      src={project.heroImage}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent md:bg-gradient-to-l" />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      {project.icon && (
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-border">
                          <Image
                            src={project.icon}
                            alt={`${project.name} icon`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <Badge variant="primary">{project.category}</Badge>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-text-secondary mb-6 line-clamp-2">
                      {project.tagline}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                      <span>View Case Study</span>
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Back to All Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8"
          >
            <Link href="/#projects">
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
