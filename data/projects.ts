export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: 'e-commerce' | 'fintech' | 'health' | 'social' | 'productivity' | 'utility' | 'location' | 'other';
  icon: string;
  thumbnail: string;
  heroImage: string;
  screenshots: string[];
  techStack: string[];
  duration: string;
  year: number;
  teamSize: string;
  role: string;
  clientName?: string;
  playStoreLink?: string;
  featured: boolean;

  challenge: {
    overview: string;
    points: string[];
  };
  solution: {
    overview: string;
    features: {
      title: string;
      description: string;
      image?: string;
    }[];
  };
  process: {
    phase: string;
    description: string;
    duration: string;
  }[];
  techDetails: {
    category: string;
    items: string[];
  }[];
  results: {
    metric: string;
    value: string;
    description?: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    image?: string;
  };
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'home-workout-fitness-app',
    name: 'Home Workout',
    tagline: 'A beginner-friendly fitness companion for daily home workouts',
    category: 'health',
    icon: '/images/projects/workout-icon.png',
    thumbnail: '/images/projects/workout-hero.png',
    heroImage: '/images/projects/workout-hero.png',
    screenshots: [
      '/images/projects/workout-1.png',
      '/images/projects/workout-2.png',
      '/images/projects/workout-3.png',
      '/images/projects/workout-4.png',
      '/images/projects/workout-5.png',
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Room', 'MVVM', 'Coroutines', 'OneSignal'],
    duration: '2 months',
    year: 2024,
    teamSize: 'Solo',
    role: 'Android Developer (End-to-End)',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.rezzfitness.homeworkout',
    featured: true,
    challenge: {
      overview: 'With countless fitness apps available, most are either overly complex or require gym equipment. This app aimed to bring simple, equipment-free workouts to users of all levels while keeping performance light and UX intuitive on low-end devices.',
      points: [
        'Designing an intuitive UI that motivates daily fitness engagement',
        'Ensuring workouts and animations feel natural and clear with Jetpack Compose',
        'Optimizing performance for low-spec devices',
        'Providing customizable workout levels from beginner to advanced',
        'Maintaining smooth offline access to exercise instructions'
      ]
    },
    solution: {
      overview: 'I built a structured home workout app that allows users to perform guided bodyweight exercises designed by fitness experts — without needing gym equipment. The app leverages a modern Kotlin and Jetpack Compose UI, backed by Firebase for real-time personalization and local persistence for offline access.',
      features: [
        {
          title: 'Structured Workout Plans',
          description: 'Multi-week plans targeting core areas like abs, arms, chest, legs, shoulders, and back, suitable for beginner to advanced levels.'
        },
        {
          title: 'On-Screen Instructions & Timer',
          description: 'Users receive clear audio, animation, and video guidance to follow correct exercise form during every session.'
        },
        {
          title: 'No Equipment Fitness',
          description: 'All routines are designed to be done anywhere using bodyweight exercises, making fitness accessible to everyone.'
        },
        {
          title: 'Daily Motivation & Notifications',
          description: 'Push notifications encourage users to stay consistent with their fitness goals.'
        },
        {
          title: 'Adaptive Difficulty Levels',
          description: 'Users can choose from beginner, intermediate, and advanced workouts based on their current fitness level.'
        }
      ]
    },
    process: [
      {
        phase: 'Research & Planning',
        description: 'Analyzed common barriers beginners face with fitness apps and designed workouts that are simple, clear, and equipment-free.',
        duration: '1 week'
      },
      {
        phase: 'UI/UX & Architecture Design',
        description: 'Created a clean, motivational interface using Jetpack Compose with a focus on smooth animations and accessibility.',
        duration: '1 week'
      },
      {
        phase: 'Core Feature Implementation',
        description: 'Built guided workout logic, timers, progress tracking, and integrated Firebase for user preferences and notifications.',
        duration: '3 weeks'
      },
      {
        phase: 'Testing & Optimizations',
        description: 'Tested across low-end and high-end devices to ensure consistent performance and fluid UI.',
        duration: '1 week'
      }
    ],
    techDetails: [
      {
        category: 'Languages',
        items: ['Kotlin']
      },
      {
        category: 'UI',
        items: ['Jetpack Compose']
      },
      {
        category: 'Architecture',
        items: ['MVVM', 'Coroutines']
      },
      {
        category: 'Backend & APIs',
        items: ['Firebase Authentication', 'Firebase Realtime Database', 'Room']
      },
      {
        category: 'Notifications',
        items: ['OneSignal']
      }
    ],
    results: [
      {
        metric: 'Downloads',
        value: '5K+',
        description: 'Reached a niche fitness audience with strong beginner engagement'
      },
      {
        metric: 'User Engagement',
        value: 'High',
        description: 'Steady daily usage due to short, effective workouts'
      },
      {
        metric: 'Performance',
        value: 'Optimized',
        description: 'Smooth UI on low-end devices'
      }
    ]
  },
  {
    id: '2',
    slug: 'smart-budget-manager',
    name: 'Smart Budget Manager',
    tagline: 'A simple, no-frills personal finance & budget tracking app',
    category: 'fintech',
    icon: '/images/projects/budget-icon.png',
    thumbnail: '/images/projects/budget-hero.png',
    heroImage: '/images/projects/budget-hero.png',
    screenshots: [
      '/images/projects/budget-1.png',
      '/images/projects/budget-2.png',
      '/images/projects/budget-3.png',
      '/images/projects/budget-4.png',
      '/images/projects/budget-5.png',
      '/images/projects/budget-6.png',
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Coroutines', 'MVVM', 'Charts Library'],
    duration: '1.8 months',
    year: 2025,
    teamSize: 'Solo',
    role: 'Android Developer (End-to-End)',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.monify.smart.budget',
    featured: true,
    challenge: {
      overview: 'Users often struggle to track their daily financial transactions and maintain a consistent budget due to complex or bank-linked apps that overwhelm beginners. Smart Budget Manager was built to simplify personal budget management with an easy, intuitive flow and minimal setup required.',
      points: [
        'Designing an intuitive flow that makes expense logging effortless and quick',
        'Building efficient data storage to handle offline and real-time interactions',
        'Creating clear visual insights (charts/graphs) to show spending patterns',
        'Balancing simplicity and usefulness for both beginners and intermediate users',
        'Structuring the app to work smoothly even on low-end devices with minimal lag'
      ]
    },
    solution: {
      overview: 'Smart Budget Manager focuses on simplicity and utility — users can log incomes and expenses, set budgets, and see visual summaries of their financial data via clean charts. The app empowers users to make better financial decisions without forcing bank sync or login friction.',
      features: [
        {
          title: 'Instant Expense & Income Logging',
          description: 'Users can add a transaction with just a few taps, choosing categories, dates, and optional notes.'
        },
        {
          title: 'Budget Creation & Alerts',
          description: 'Set monthly budgets for categories (e.g., Food, Transport, Bills), with alerts when thresholds are reached.'
        },
        {
          title: 'Visual Spending Insights',
          description: 'Interactive pie charts and bar graphs give users quick clarity on where their money is going.'
        },
        {
          title: 'Custom Categories',
          description: 'Users can customize spending categories to match their lifestyle needs.'
        },
        {
          title: 'Offline First Experience',
          description: 'All data is stored locally using Room so the app remains fast and usable without internet connectivity.'
        }
      ]
    },
    process: [
      {
        phase: 'Discovery & Planning',
        description: 'Researched user pain points with existing budgeting tools and identified the need for a simple, approachable finance app.',
        duration: '1 week'
      },
      {
        phase: 'UI/UX & Architecture',
        description: 'Designed a minimal UI in Jetpack Compose and planned an MVVM structure with Room database for persistence.',
        duration: '1 week'
      },
      {
        phase: 'Core Development',
        description: 'Built core features: transactions, budgets, visual summaries, and category management.',
        duration: '3 weeks'
      },
      {
        phase: 'Optimizations & Testing',
        description: 'Focused on UI smoothness, data integrity, offline performance, and visual accuracy of charts.',
        duration: '1 week'
      }
    ],
    techDetails: [
      {
        category: 'Languages',
        items: ['Kotlin']
      },
      {
        category: 'UI',
        items: ['Jetpack Compose']
      },
      {
        category: 'Architecture',
        items: ['MVVM', 'Room Database', 'Coroutines']
      },
      {
        category: 'Charts & Visualization',
        items: ['Compose Charts Library']
      }
    ],
    results: [
      {
        metric: 'Downloads',
        value: '5K-10K+',
        description: 'Early users in a niche segment seeking simple budget tracking'
      },
      {
        metric: 'User Retention',
        value: 'High',
        description: 'Consistent daily use due to ease of entry and clear insights'
      },
      {
        metric: 'Performance',
        value: 'Smooth',
        description: 'Fluid interaction even on entry-level devices'
      }
    ]
  },
  {
    id: '3',
    slug: 'utrackme-location-tracker',
    name: 'UTrackMe',
    tagline: 'Your go-to companion for smart location tracking & travel logging',
    category: 'location',
    icon: '/images/projects/utrackme-icon.png',
    thumbnail: '/images/projects/utrackme-hero.png',
    heroImage: '/images/projects/utrackme-hero.png',
    screenshots: [
      '/images/projects/utrackme-1.png',
      '/images/projects/utrackme-2.png',
      '/images/projects/utrackme-3.png',
      '/images/projects/utrackme-4.png',
      '/images/projects/utrackme-5.png',
      '/images/projects/utrackme-6.png',
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'Google Maps SDK', 'FusedLocationProvider', 'Firebase', 'MVVM', 'Coroutines'],
    duration: '2.2 months',
    year: 2025,
    teamSize: 'Solo',
    role: 'Android Developer (End-to-End)',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.oussx.utrackme&hl=en_IN',
    featured: true,
    challenge: {
      overview: 'Users increasingly need simple tools to track their movements, visualize routes, and log travel history without complex fitness or social app clutter. UTrackMe was developed to give users a lightweight, privacy-aware solution for real-time location tracking, route visualization, and history recording — all while preserving battery life.',
      points: [
        'Achieving accurate GPS tracking in varying environments (urban canyons, indoors)',
        'Balancing location update frequency with battery efficiency',
        'Rendering routes and markers smoothly on Google Maps',
        'Organizing travel logs for easy future reference',
        'Ensuring privacy and security for sensitive location data'
      ]
    },
    solution: {
      overview: 'UTrackMe provides a clear, map-centric UX that tracks user routes, visualizes travel paths, logs history entries, and supports sharing and exporting. Using modern Android tools like Kotlin, Jetpack Compose, and the FusedLocationProvider API, the app delivers reliable location tracking with minimal battery impact.',
      features: [
        {
          title: 'Real-Time Location Tracking',
          description: 'Continuously updates the user\'s position with efficient GPS polling and smart battery management.'
        },
        {
          title: 'Interactive Route Mapping',
          description: 'Google Maps-powered route paths and markers with smooth zoom/pan experiences.'
        },
        {
          title: 'Travel Log History',
          description: 'Users can revisit past routes, timestamped with dates and locations for easy review.'
        },
        {
          title: 'Export & Sharing',
          description: 'Export route data for sharing with friends or saving offline (CSV/KML formats).'
        },
        {
          title: 'Privacy & Controls',
          description: 'Users decide when tracking starts/stops and what data they want to store.'
        }
      ]
    },
    process: [
      {
        phase: 'Discovery & Requirement Gathering',
        description: 'Identified core pain points around travel tracking: accuracy, battery efficiency, and ease of use.',
        duration: '1 week'
      },
      {
        phase: 'Architecture Design & Maps Integration',
        description: 'Designed a scalable MVVM architecture and integrated Google Maps with location services.',
        duration: '1 week'
      },
      {
        phase: 'Core Feature Development',
        description: 'Implemented real-time tracking, route drawing, history logging, and export/sharing capabilities.',
        duration: '4 weeks'
      },
      {
        phase: 'Testing & Optimizations',
        description: 'Stress-tested GPS tracking under different conditions and optimized performance.',
        duration: '1.2 weeks'
      }
    ],
    techDetails: [
      {
        category: 'Languages',
        items: ['Kotlin']
      },
      {
        category: 'UI',
        items: ['Jetpack Compose']
      },
      {
        category: 'Maps & Location',
        items: ['Google Maps SDK', 'FusedLocationProvider']
      },
      {
        category: 'Backend & Sync',
        items: ['Firebase Realtime Database', 'Firebase Authentication']
      },
      {
        category: 'Architecture',
        items: ['MVVM', 'Coroutines']
      }
    ],
    results: [
      {
        metric: 'Precision',
        value: 'High',
        description: 'Reliable route tracking with minimal GPS drift'
      },
      {
        metric: 'Battery',
        value: 'Optimized',
        description: 'Smart polling reduced power usage'
      },
      {
        metric: 'UX',
        value: 'Intuitive',
        description: 'Clean interface with privacy-first approach'
      }
    ]
  },
  {
    id: '4',
    slug: 'vault-privacy-utility',
    name: 'Vault Privacy Utility',
    tagline: 'A secure vault app combining utility and privacy protection',
    category: 'utility',
    icon: '/images/projects/vault-icon.png',
    thumbnail: '/images/projects/vault-hero.png',
    heroImage: '/images/projects/vault-hero.png',
    screenshots: [
      '/images/projects/vault-1.png',
      '/images/projects/vault-2.png',
      '/images/projects/vault-3.png',
      '/images/projects/vault-4.png',
      '/images/projects/vault-5.png',
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Biometric Authentication', 'MVVM', 'Encryption Libraries', 'Coroutines'],
    duration: '2.3 months',
    year: 2025,
    teamSize: 'Solo',
    role: 'Android Developer (End-to-End)',
    featured: true,
    challenge: {
      overview: 'Users increasingly demand secure ways to hide sensitive files, photos, and personal data. Many existing vault apps suffer from confusing interfaces, weak encryption, or intrusive ads. This project strives to build a clean, intuitive, and privacy-centric vault application that makes storing and retrieving private content both safe and simple.',
      points: [
        'Ensuring strong encryption and secure storage for photos and sensitive files',
        'Implementing biometric and password-based authentication layers',
        'Designing a seamless user experience with minimal UI friction',
        'Balancing privacy with utility features like photo view, file manager, and quick access',
        'Delivering a responsive app that feels fluid even on low-end devices'
      ]
    },
    solution: {
      overview: 'The Vault Privacy Utility app provides a secure environment for users to protect sensitive files and photos behind encrypted storage combined with biometric or password protection. Built with Kotlin and Jetpack Compose, the app balances a sleek UX with enterprise-ready security foundations, making privacy accessible to everyday users.',
      features: [
        {
          title: 'Encrypted Storage',
          description: 'Files and media are stored locally with strong encryption, isolating them from regular file explorers.'
        },
        {
          title: 'Biometric + Password Lock',
          description: 'Users can unlock private content using fingerprint, face ID (when available), or custom PIN/password.'
        },
        {
          title: 'Secure Photo Viewer',
          description: 'Integrated image viewer that loads protected photos without exposing them to the system gallery.'
        },
        {
          title: 'File Manager & Organization',
          description: 'Sorting, folders, and tagging help users organize private content efficiently.'
        },
        {
          title: 'Optional Cloud Backup (Future)',
          description: 'Future-ready design for encrypted backup & sync (optional, secure) using Firebase.'
        }
      ]
    },
    process: [
      {
        phase: 'Product Design & Market Research',
        description: 'Studied common issues in existing vault apps — weak encryption, privacy leaks, confusing UI — and defined a better user experience.',
        duration: '1 week'
      },
      {
        phase: 'UI / UX & Architecture',
        description: 'Created smooth screens with Jetpack Compose and designed an MVVM architecture that isolates encryption logic safely.',
        duration: '1.2 weeks'
      },
      {
        phase: 'Core Feature Implementation',
        description: 'Developed secure file storage, biometric locking, encrypted galleries, and file management workflows.',
        duration: '3.5 weeks'
      },
      {
        phase: 'Security Hardening & Testing',
        description: 'Tested encryption integrity, authentication flows, and edge cases like unauthorized access attempts.',
        duration: '1.4 weeks'
      }
    ],
    techDetails: [
      {
        category: 'Languages',
        items: ['Kotlin']
      },
      {
        category: 'UI',
        items: ['Jetpack Compose']
      },
      {
        category: 'Architecture',
        items: ['MVVM', 'Coroutines', 'Room', 'Encryption']
      },
      {
        category: 'Authentication',
        items: ['Biometric Prompt API', 'PIN / Password Safety']
      },
      {
        category: 'Storage & Sync',
        items: ['Encrypted Local Storage', 'Firebase (planned)']
      }
    ],
    results: [
      {
        metric: 'Security',
        value: 'Strong',
        description: 'Protected using vetted encryption schemas'
      },
      {
        metric: 'UX Simplicity',
        value: 'High',
        description: 'Minimal steps to lock and unlock content'
      },
      {
        metric: 'Performance',
        value: 'Optimized',
        description: 'Performs well on limited hardware'
      }
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}
