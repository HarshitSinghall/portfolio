'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';
import Badge from './Badge';
import TiltCard from './TiltCard';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <TiltCard className="group h-full">
      <Link href={`/case-study/${project.slug}`} data-cursor="project">
        <div className="relative overflow-hidden rounded-xl bg-surface border border-border hover:border-primary/50 transition-all duration-300 h-full">
          {/* Project Image */}
          <div className="relative h-64 sm:h-72 bg-surface-light overflow-hidden">
            <Image
              src={project.heroImage}
              alt={project.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* App Icon Badge */}
            {project.icon && (
              <div className="absolute top-4 left-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg">
                  <Image
                    src={project.icon}
                    alt={`${project.name} icon`}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-primary/20 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full flex items-center space-x-2 shadow-xl">
                <span className="text-primary font-medium">View Case Study</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="text-primary" size={20} />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Project Info */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <Badge variant="primary">{project.category}</Badge>
              <span className="text-text-muted text-sm">{project.year}</span>
            </div>

            <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-text-secondary mb-4 line-clamp-2">{project.tagline}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 3 && (
                <Badge variant="outline" className="text-xs">+{project.techStack.length - 3}</Badge>
              )}
            </div>
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}
