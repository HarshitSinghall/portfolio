export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  rating: number;
  projectName?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Working with this developer was an absolute pleasure. They delivered a high-quality app that exceeded our expectations. The attention to detail and technical expertise is outstanding.',
    author: 'Sarah Johnson',
    role: 'CEO',
    company: 'FashionHub Inc.',
    rating: 5,
    projectName: 'FashionHub'
  },
  {
    id: '2',
    quote: 'Professional, reliable, and incredibly skilled. The app they built for us has transformed our business. Highly recommended for anyone looking for top-tier Android development.',
    author: 'Michael Chen',
    role: 'CTO',
    company: 'SecureBank',
    rating: 5,
    projectName: 'SecureBank'
  },
  {
    id: '3',
    quote: 'The best Android developer I have worked with. They understood our vision and turned it into reality. The code quality is exceptional and the app performs flawlessly.',
    author: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'FitTrack Pro',
    rating: 5,
    projectName: 'FitTrack Pro'
  },
  {
    id: '4',
    quote: 'Fast, efficient, and always available for questions. The communication throughout the project was excellent, and the final product speaks for itself.',
    author: 'David Kim',
    role: 'Founder',
    company: 'ChatFlow',
    rating: 5,
    projectName: 'ChatFlow'
  },
  {
    id: '5',
    quote: 'Their expertise in Kotlin and Jetpack Compose is impressive. They not only built what we asked for but also suggested improvements that made the app even better.',
    author: 'Jennifer Williams',
    role: 'VP of Engineering',
    company: 'TechStart Inc.',
    rating: 5
  },
  {
    id: '6',
    quote: 'Exceptional developer who delivers on time and on budget. The app is beautiful, fast, and our users love it. Will definitely work with them again.',
    author: 'Robert Martinez',
    role: 'Business Owner',
    company: 'Local Business Solutions',
    rating: 5
  }
];
