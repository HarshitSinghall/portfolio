'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Users, Briefcase, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

interface CaseStudyHeroProps {
  project: Project;
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-background to-surface" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-[128px]" />
        <div className="absolute bottom-20 right-40 w-64 h-64 bg-accent rounded-full blur-[96px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/#projects">
            <Button variant="outline" size="sm">
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </Button>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* App Icon & Category */}
            <div className="flex items-center gap-4 mb-6">
              {project.icon && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-xl border border-border"
                >
                  <Image
                    src={project.icon}
                    alt={`${project.name} icon`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )}
              <div>
                <Badge variant="primary" className="mb-2">
                  {project.category}
                </Badge>
                <div className="text-sm text-text-muted flex items-center gap-2">
                  <Clock size={14} />
                  {project.year}
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4 leading-tight">
              {project.name}
            </h1>

            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              {project.tagline}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-4 text-center"
              >
                <Calendar size={20} className="mx-auto mb-2 text-primary" />
                <div className="text-sm text-text-muted mb-1">Duration</div>
                <div className="font-semibold text-sm">{project.duration}</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-4 text-center"
              >
                <Users size={20} className="mx-auto mb-2 text-primary" />
                <div className="text-sm text-text-muted mb-1">Team</div>
                <div className="font-semibold text-sm">{project.teamSize}</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-4 text-center"
              >
                <Briefcase size={20} className="mx-auto mb-2 text-primary" />
                <div className="text-sm text-text-muted mb-1">Role</div>
                <div className="font-semibold text-xs">{project.role.split('(')[0].trim()}</div>
              </motion.div>
            </div>

            {/* Play Store Link */}
            {project.playStoreLink && (
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                href={project.playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                <ExternalLink size={18} />
                View on Play Store
              </motion.a>
            )}
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border">
              <Image
                src={project.heroImage}
                alt={`${project.name} hero image`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -left-4 bg-primary text-background px-5 py-2 rounded-lg font-semibold shadow-xl"
            >
              {project.year}
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Stack Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <h3 className="text-sm font-semibold text-text-muted mb-4 tracking-wider">TECHNOLOGIES USED</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
              >
                <Badge variant="outline" className="px-4 py-2">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
