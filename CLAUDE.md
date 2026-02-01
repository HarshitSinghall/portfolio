# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern portfolio website for a freelance Android developer, built as a single-page application with dynamic case study pages. The site showcases projects, services, testimonials, and includes a contact form powered by EmailJS.

**Tech Stack:**
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- GSAP (advanced animations)
- Lenis (smooth scrolling)
- EmailJS (contact form)

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Lint code
npm lint
```

## Architecture

### Application Structure

The application follows Next.js App Router conventions with a clear separation of concerns:

- **`app/`** - Next.js routing and pages
  - `layout.tsx` - Root layout with global fonts (Inter, Outfit, JetBrains Mono), metadata, and wrapper components (CustomCursor, ScrollProgress, FloatingShapes, SmoothScroll)
  - `page.tsx` - Home page composed of section components in sequential order
  - `case-study/[slug]/page.tsx` - Dynamic case study pages with static generation via `generateStaticParams()`

- **`components/`** - React components organized by function
  - `layout/` - SmoothScroll (Lenis integration), Header, Footer
  - `sections/` - Main page sections (Hero, About, Services, Projects, Process, Testimonials, FAQ, CTA, Contact)
  - `case-study/` - Case study page sections (CaseStudyHero, ProblemSection, SolutionSection, ProcessSection, TechStackSection, ResultsSection, NextProject)
  - `ui/` - Reusable components (Button, Card, Badge, ProjectCard, TestimonialCard, AccordionItem, ScrollProgress, CustomCursor, etc.)

- **`data/`** - TypeScript files exporting data structures
  - `projects.ts` - All project data with comprehensive Project interface including challenge, solution, process, techDetails, results, and testimonial
  - `services.ts` - Service offerings
  - `testimonials.ts` - Client testimonials
  - `faq.ts` - FAQ data

- **`lib/`** - Utility functions and constants
  - `animations.ts` - Framer Motion animation variants (fadeUp, fadeIn, scaleIn, slideInLeft/Right, staggerContainer, staggerItem) and transition presets
  - `utils.ts` - Helper functions

- **`hooks/`** - Custom React hooks
  - `useScrollProgress.ts` - Scroll position tracking
  - `useMediaQuery.ts` - Responsive breakpoints

### Key Design Patterns

**Single-Page Layout with Smooth Scrolling:**
The home page (`app/page.tsx`) renders all sections in a single page. The `SmoothScroll` component wraps the entire application and uses Lenis for smooth scroll behavior with custom easing.

**Dynamic Case Studies:**
Case study pages are dynamically generated from the `projects` array in `data/projects.ts`. Each project has a `slug` field used for routing. The page uses `generateStaticParams()` for static generation at build time.

**Animation System:**
- Framer Motion variants are centralized in `lib/animations.ts`
- Common patterns: fadeUp, fadeIn, scaleIn, staggered animations
- Custom easing curve: `[0.22, 1, 0.36, 1]`
- Transitions: defaultTransition (0.6s), springTransition, fastTransition (0.3s)

**Component Composition:**
Sections compose smaller UI components. For example, Projects section uses ProjectCard components, which themselves use Badge and Button components.

**Color System:**
Defined in `tailwind.config.ts`:
- Primary: `#3DDC84` (Android green)
- Background: `#0A0A0A` (dark theme)
- Surface: `#141414` / `#1F1F1F`
- Text hierarchy: primary (white), secondary (#A0A0A0), muted (#666666)

### Data Flow

**Project Data Structure:**
Projects in `data/projects.ts` follow the `Project` interface with fields:
- Basic info: id, slug, name, tagline, category, thumbnail, heroImage, screenshots
- Metadata: techStack, duration, year, teamSize, role, clientName, playStoreLink, featured
- Case study sections: challenge (overview + points), solution (overview + features), process (phases with descriptions), techDetails (categorized items), results (metrics), testimonial

**Helper Functions:**
- `getProjectBySlug(slug)` - Returns project by slug
- `getFeaturedProjects()` - Returns only featured projects

### Contact Form

The Contact section (`components/sections/Contact.tsx`) uses EmailJS for email delivery. Configuration requires EmailJS service ID, template ID, and public key.

## Important Conventions

**File Naming:**
- Components use PascalCase (e.g., `ProjectCard.tsx`)
- Data files use lowercase (e.g., `projects.ts`)
- All components are `.tsx` files

**Client Components:**
Components that use hooks, browser APIs, or event handlers must include `'use client'` directive (e.g., `SmoothScroll`, `CustomCursor`, section components with animations)

**Animation Performance:**
Respect `prefers-reduced-motion` for accessibility. Many components check this setting to reduce or disable animations.

**Image Paths:**
Images are stored in `public/images/` with subdirectories for projects, testimonials, and icons. Reference with `/images/...` paths.

**Responsive Design:**
Tailwind breakpoints are used throughout. Custom hooks like `useMediaQuery` help with responsive behavior in JavaScript.

## Customization Points

**Personal Information:**
- `app/layout.tsx` - SEO metadata
- `components/sections/Hero.tsx` - Stats and headline
- `components/sections/Contact.tsx` - Email, LinkedIn, Twitter, location
- `components/layout/Footer.tsx` - Social links

**Content Data:**
- `data/projects.ts` - Add/edit projects and case studies
- `data/services.ts` - Services offered
- `data/testimonials.ts` - Client testimonials
- `data/faq.ts` - FAQ entries

**Styling:**
- `tailwind.config.ts` - Color scheme, fonts, animations
- Primary color: `#3DDC84` (Android green)
- Background: `#0A0A0A`

## Build Output

Next.js generates optimized output in `.next/` directory. The site uses:
- Static generation for case study pages
- App Router for modern Next.js features
- Automatic code splitting by route
- Optimized fonts (variable fonts for Inter, Outfit, JetBrains Mono)
