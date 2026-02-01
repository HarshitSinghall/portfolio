export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on complexity, but most apps take 1-3 months from initial concept to Play Store launch. Simple apps can be completed in 4-8 weeks, while complex applications may take 6+ months. I provide detailed timeline estimates after understanding your requirements.'
  },
  {
    id: '2',
    question: 'How much does an Android app cost?',
    answer: 'App development costs depend on features, complexity, and design requirements. Simple apps start around $500, while complex apps with advanced features can range from $1,000-$20,000+. I offer free consultations to discuss your project and provide accurate quotes.'
  },
  {
    id: '3',
    question: 'Do you work with startups?',
    answer: 'Absolutely! I love working with startups and understand the unique challenges you face. I offer flexible payment terms, MVP-focused development, and strategic guidance to help bring your idea to life within budget.'
  },
  {
    id: '4',
    question: 'What technologies do you use?',
    answer: 'I specialize in modern Android development using Kotlin, Jetpack Compose, and the latest Android libraries. For architecture, I use MVVM and Clean Architecture patterns. I\'m also experienced with Firebase, REST APIs, Room database, Retrofit, Hilt/Dagger, and more.'
  },
  {
    id: '5',
    question: 'How do you handle communication during the project?',
    answer: 'I believe in transparent, regular communication. We\'ll have weekly check-ins via video call, and I provide daily progress updates through your preferred channel (Slack, email, etc.). You\'ll have access to a project management tool to track progress in real-time.'
  },
  {
    id: '6',
    question: 'Do you provide post-launch support?',
    answer: 'Yes! I offer 30 days of free bug fixes after launch. I also provide ongoing maintenance packages for continued support, updates, and feature additions. Your app\'s long-term success is important to me.'
  },
  {
    id: '7',
    question: 'Can you work with my existing team?',
    answer: 'Definitely! I\'m experienced in collaborative environments and can work alongside your designers, backend developers, and project managers. I\'m comfortable using Git, following your coding standards, and participating in code reviews.'
  },
  {
    id: '8',
    question: 'What information do you need to start?',
    answer: 'To begin, I\'ll need a clear understanding of your app idea, target audience, key features, design preferences (if any), and timeline expectations. If you have wireframes, designs, or technical documentation, that\'s helpful but not required. We\'ll discuss everything in detail during our initial consultation.'
  }
];
