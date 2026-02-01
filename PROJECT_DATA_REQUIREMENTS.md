# Project Data Requirements Sheet

This document outlines all the data fields required to add a new project to your portfolio. Projects are defined in `data/projects.ts`.

## Project Overview

Each project requires the following information:

### Basic Information

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| **id** | string | Yes | Unique identifier for the project | "1", "2", "3" |
| **slug** | string | Yes | URL-friendly identifier (lowercase, hyphens) | "ecommerce-fashion-app" |
| **name** | string | Yes | Project/App name | "FashionHub" |
| **tagline** | string | Yes | Short description (under 60 chars) | "Modern e-commerce app for fashion enthusiasts" |
| **category** | enum | Yes | Project category | "e-commerce", "fintech", "health", "social", "productivity", "other" |
| **year** | number | Yes | Year completed | 2024 |
| **featured** | boolean | Yes | Show on homepage? | true or false |

### Visual Assets

| Field | Type | Required | Description | Format |
|-------|------|----------|-------------|--------|
| **thumbnail** | string | Yes | Card image (homepage) | Path: "/images/projects/project-thumb.jpg" |
| **heroImage** | string | Yes | Hero section image | Path: "/images/projects/project-hero.jpg" |
| **screenshots** | array | No | Additional screenshots | Array of paths: ["/images/projects/project-1.jpg"] |

**Image Specifications:**
- Thumbnail: 800x600px (4:3 ratio)
- Hero Image: 1920x1080px (16:9 ratio)
- Screenshots: 1080x1920px (mobile screens) or 1920x1080px (tablets)
- Format: JPG or PNG
- Location: Place in `public/images/projects/` folder

### Technical Details

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| **techStack** | array | Yes | Technologies used | ["Kotlin", "Jetpack Compose", "Firebase"] |
| **duration** | string | Yes | Development time | "4 months", "3 months" |
| **teamSize** | string | Yes | Team composition | "Solo", "2 developers", "3 developers" |
| **role** | string | Yes | Your role in project | "Lead Android Developer", "Android Developer" |
| **clientName** | string | No | Client/Company name | "FashionHub Inc." |
| **playStoreLink** | string | No | Play Store URL | "https://play.google.com/store/apps/details?id=..." |

### Challenge Section

Describes the problems the project aimed to solve.

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| **challenge.overview** | string | Yes | Main challenge summary (2-3 sentences) | "The client needed a modern e-commerce platform that could handle high traffic..." |
| **challenge.points** | array | Yes | Key challenges (3-5 bullet points) | ["Complex product filtering", "Real-time inventory", "Payment integration"] |

### Solution Section

Describes how you solved the challenges.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| **solution.overview** | string | Yes | Solution summary (2-3 sentences) |
| **solution.features** | array | Yes | Key features (3-4 items) |
| **solution.features[].title** | string | Yes | Feature name |
| **solution.features[].description** | string | Yes | Feature description |
| **solution.features[].image** | string | No | Feature screenshot |

**Example:**
```typescript
solution: {
  overview: "Built a fully native Android app using Jetpack Compose...",
  features: [
    {
      title: "Smart Product Discovery",
      description: "Advanced filtering, sorting, and AI-powered recommendations...",
      image: "/images/projects/feature-1.jpg" // optional
    }
  ]
}
```

### Development Process

Timeline of development phases.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| **process** | array | Yes | Development phases (3-4 phases) |
| **process[].phase** | string | Yes | Phase name |
| **process[].description** | string | Yes | What was done in this phase |
| **process[].duration** | string | Yes | Time spent |

**Example:**
```typescript
process: [
  {
    phase: "Research & Discovery",
    description: "Analyzed competitor apps and conducted user research...",
    duration: "2 weeks"
  },
  {
    phase: "UI/UX Design",
    description: "Created wireframes and high-fidelity prototypes...",
    duration: "3 weeks"
  }
]
```

**Common Phases:**
- Research & Discovery
- UI/UX Design / Design
- Architecture Planning
- Development / Core Development
- Testing / Testing & QA
- Beta Testing
- Optimization
- Testing & Launch / Launch / Deployment

### Technical Deep Dive

Detailed technical implementation.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| **techDetails** | array | Yes | Technical categories (3-5 items) |
| **techDetails[].category** | string | Yes | Category name |
| **techDetails[].items** | array | Yes | Technologies in this category |

**Common Categories:**
- Languages: ["Kotlin", "Java"]
- UI Framework: ["Jetpack Compose", "XML Views"]
- Architecture: ["MVVM", "Clean Architecture", "MVI"]
- Libraries: ["Retrofit", "Room", "Hilt", "Coil", "Coroutines"]
- Backend: ["Firebase", "REST API", "GraphQL"]
- Security: ["SQLCipher", "SSL Pinning", "Android Keystore"]
- Real-time: ["Firebase Realtime Database", "WebSockets"]
- Media: ["CameraX", "ExoPlayer", "WebRTC"]
- Key Features: ["WorkManager", "Google Maps API", "Push Notifications"]

**Example:**
```typescript
techDetails: [
  {
    category: "Languages",
    items: ["Kotlin"]
  },
  {
    category: "Architecture",
    items: ["MVVM", "Clean Architecture"]
  }
]
```

### Results & Metrics

Project outcomes and success metrics.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| **results** | array | Yes | Key metrics (3-4 items) |
| **results[].metric** | string | Yes | Metric name |
| **results[].value** | string | Yes | Metric value |
| **results[].description** | string | No | Additional context |

**Common Metrics:**
- Downloads: "50K+", "100K+"
- Rating: "4.7/5", "4.8/5"
- Active Users: "100K+", "85%"
- Revenue: "$50K+", "$100K+ monthly"
- Conversion Rate: "+35%", "+50%"
- Performance: "50% faster", "60% reduction"
- Engagement: "70% daily active users"
- Uptime: "99.9%"
- Transactions: "$5M+ monthly"
- Messages: "1M+ daily"
- Security Score: "A+", "A"

**Example:**
```typescript
results: [
  {
    metric: "Downloads",
    value: "50K+",
    description: "in first 3 months"
  },
  {
    metric: "Rating",
    value: "4.7/5",
    description: "on Play Store"
  }
]
```

### Client Testimonial (Optional)

Client feedback about the project.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| **testimonial.quote** | string | No | Client testimonial |
| **testimonial.author** | string | No | Client name |
| **testimonial.role** | string | No | Client position |
| **testimonial.image** | string | No | Client photo path |

**Example:**
```typescript
testimonial: {
  quote: "The app exceeded our expectations. The clean design and smooth performance have significantly improved our mobile sales.",
  author: "Sarah Johnson",
  role: "CEO, FashionHub Inc.",
  image: "/images/testimonials/sarah.jpg" // optional
}
```

## Complete Project Template

```typescript
{
  // Basic Info
  id: "7",
  slug: "my-awesome-app",
  name: "My Awesome App",
  tagline: "A brief description of what the app does",
  category: "productivity", // e-commerce | fintech | health | social | productivity | other
  year: 2025,
  featured: true, // Show on homepage

  // Visual Assets
  thumbnail: "/images/projects/myapp-thumb.jpg",
  heroImage: "/images/projects/myapp-hero.jpg",
  screenshots: [
    "/images/projects/myapp-1.jpg",
    "/images/projects/myapp-2.jpg"
  ],

  // Technical Info
  techStack: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM"],
  duration: "3 months",
  teamSize: "Solo",
  role: "Android Developer",
  clientName: "Company Name", // optional
  playStoreLink: "https://play.google.com/store/apps/details?id=...", // optional

  // Challenge
  challenge: {
    overview: "Describe the main problem or challenge this project addressed (2-3 sentences).",
    points: [
      "First major challenge",
      "Second challenge",
      "Third challenge"
    ]
  },

  // Solution
  solution: {
    overview: "Describe how you solved the challenges (2-3 sentences).",
    features: [
      {
        title: "Feature Name 1",
        description: "Description of this feature and its benefits."
      },
      {
        title: "Feature Name 2",
        description: "Description of this feature and its benefits."
      },
      {
        title: "Feature Name 3",
        description: "Description of this feature and its benefits."
      }
    ]
  },

  // Development Process
  process: [
    {
      phase: "Research",
      description: "What you did in this phase.",
      duration: "1 week"
    },
    {
      phase: "Development",
      description: "What you built in this phase.",
      duration: "10 weeks"
    },
    {
      phase: "Testing & Launch",
      description: "How you tested and deployed.",
      duration: "2 weeks"
    }
  ],

  // Technical Details
  techDetails: [
    {
      category: "Languages",
      items: ["Kotlin"]
    },
    {
      category: "Architecture",
      items: ["MVVM", "Clean Architecture"]
    },
    {
      category: "Key Libraries",
      items: ["Retrofit", "Room", "Hilt", "Coil"]
    }
  ],

  // Results & Metrics
  results: [
    {
      metric: "Downloads",
      value: "25K+",
      description: "in first 2 months"
    },
    {
      metric: "Rating",
      value: "4.8/5",
      description: "on Play Store"
    },
    {
      metric: "Engagement",
      value: "75%",
      description: "daily active users"
    }
  ],

  // Testimonial (optional)
  testimonial: {
    quote: "Client feedback about the project.",
    author: "Client Name",
    role: "CEO, Company Name"
  }
}
```

## Adding Your Project

1. **Prepare all data** using the template above
2. **Add images** to `public/images/projects/` folder
3. **Open** `data/projects.ts` file
4. **Add your project object** to the `projects` array
5. **Set `featured: true`** if you want it on the homepage
6. **Save the file** - the project will appear automatically

## Tips for Writing Good Content

### Tagline
- Keep under 60 characters
- Focus on the main benefit or purpose
- Examples:
  - "Modern e-commerce app for fashion enthusiasts"
  - "Next-generation mobile banking experience"
  - "Your personal fitness companion"

### Challenge Overview
- 2-3 sentences
- Explain the business problem or user need
- Set context for why the project was needed

### Challenge Points
- 3-5 bullet points
- Focus on technical or business challenges
- Be specific (not generic)

### Solution Overview
- 2-3 sentences
- Explain your approach at a high level
- Mention key technologies or methodologies

### Feature Descriptions
- 3-4 key features
- Each feature should have a clear benefit
- Use action-oriented titles

### Results
- Use specific numbers
- Show impact and value
- Include context where helpful

## Current Projects Count

You currently have **6 projects** in your portfolio:
1. FashionHub (E-commerce) - Featured
2. SecureBank (Fintech) - Featured
3. FitTrack Pro (Health) - Featured
4. ChatFlow (Social) - Featured
5. QuickBite (Food Delivery)
6. SkyView (Weather)

**Note:** With 12+ apps delivered and 3 years of experience, you can add 6-10 more projects to your portfolio to better showcase your work.
