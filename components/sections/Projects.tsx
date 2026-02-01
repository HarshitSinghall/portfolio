'use client';

import { motion } from 'framer-motion';
import { getFeaturedProjects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import AnimatedText from '@/components/ui/AnimatedText';
import StaggeredGrid from '@/components/ui/StaggeredGrid';

export default function Projects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="py-20 sm:py-32 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedText
            text="Featured Work"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4"
            highlightWords={['Work']}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            A showcase of my recent Android development projects
          </motion.p>
        </div>

        {/* Projects Grid */}
        <StaggeredGrid
          className="grid md:grid-cols-2 gap-8"
          staggerDelay={0.15}
          animationType="scaleIn"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </StaggeredGrid>
      </div>
    </section>
  );
}
