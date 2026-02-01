import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/data/projects';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import ProblemSection from '@/components/case-study/ProblemSection';
import SolutionSection from '@/components/case-study/SolutionSection';
import ScreenshotGallery from '@/components/case-study/ScreenshotGallery';
import ProcessSection from '@/components/case-study/ProcessSection';
import TechStackSection from '@/components/case-study/TechStackSection';
import ResultsSection from '@/components/case-study/ResultsSection';
import NextProject from '@/components/case-study/NextProject';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.name} - Case Study | Harshit Singhal`,
    description: project.tagline,
    openGraph: {
      title: `${project.name} - Case Study`,
      description: project.tagline,
      images: [project.heroImage],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Get next project
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="pt-20">
      <CaseStudyHero project={project} />
      <ProblemSection challenge={project.challenge} />
      <SolutionSection solution={project.solution} />
      <ScreenshotGallery screenshots={project.screenshots} projectName={project.name} />
      <ProcessSection process={project.process} />
      <TechStackSection techDetails={project.techDetails} />
      <ResultsSection results={project.results} testimonial={project.testimonial} />
      <NextProject project={nextProject} />
    </div>
  );
}
