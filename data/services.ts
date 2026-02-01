export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Custom Android App Development',
    description: 'Build native Android applications from scratch tailored to your specific business needs. From concept to deployment, I handle everything.',
    icon: 'smartphone',
    deliverables: [
      'Native Android apps with Kotlin',
      'Modern UI with Jetpack Compose',
      'Clean architecture & best practices',
      'Play Store deployment'
    ]
  },
  {
    id: '2',
    title: 'UI/UX Design for Mobile',
    description: 'Create beautiful, intuitive user interfaces that your users will love. I focus on user-centered design principles and Material Design guidelines.',
    icon: 'palette',
    deliverables: [
      'Wireframes & prototypes',
      'High-fidelity UI designs',
      'Design system creation',
      'Responsive layouts'
    ]
  },
  {
    id: '3',
    title: 'App Modernization',
    description: 'Update legacy Android apps to modern standards. Migrate from Java to Kotlin, XML to Compose, and implement latest Android best practices.',
    icon: 'refresh-cw',
    deliverables: [
      'Code refactoring',
      'Migration to latest technologies',
      'Performance optimization',
      'Architecture improvements'
    ]
  },
  {
    id: '4',
    title: 'API Integration',
    description: 'Seamlessly connect your Android app with backend services. Implement RESTful APIs, GraphQL, or real-time solutions with Firebase.',
    icon: 'plug',
    deliverables: [
      'REST API integration',
      'Firebase services setup',
      'WebSocket implementation',
      'Authentication flows'
    ]
  },
  {
    id: '5',
    title: 'App Maintenance & Support',
    description: 'Keep your app running smoothly with ongoing maintenance, bug fixes, and feature updates. I provide reliable post-launch support.',
    icon: 'tool',
    deliverables: [
      'Bug fixes & updates',
      'Performance monitoring',
      'OS compatibility updates',
      'Technical support'
    ]
  },
  {
    id: '6',
    title: 'Technical Consultation',
    description: 'Get expert advice on Android development strategies, architecture decisions, and technology choices for your project.',
    icon: 'lightbulb',
    deliverables: [
      'Architecture planning',
      'Technology stack selection',
      'Code reviews',
      'Best practices guidance'
    ]
  }
];
