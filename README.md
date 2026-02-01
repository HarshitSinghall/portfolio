# Android Developer Portfolio Website

A modern, high-converting portfolio website for a freelance Android developer, built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Single-page design** with smooth scrolling navigation
- **Dynamic case study pages** for project showcases
- **Modern animations** using Framer Motion and GSAP
- **Fully responsive** design for all screen sizes
- **Optimized performance** with Next.js App Router
- **Type-safe** with TypeScript
- **SEO-friendly** with proper meta tags

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP, Lenis (smooth scrolling)
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/                      # Next.js app directory
│   ├── case-study/[slug]/   # Dynamic case study pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── layout/              # Layout components (Header, Footer, SmoothScroll)
│   ├── sections/            # Main page sections (Hero, About, Services, etc.)
│   ├── ui/                  # Reusable UI components
│   └── case-study/          # Case study page components
├── data/                    # Data files (projects, testimonials, services, FAQ)
├── lib/                     # Utilities and animation variants
├── hooks/                   # Custom React hooks
└── public/                  # Static assets
```

## Customization

### 1. Update Your Information

Edit the following files with your actual information:

**Contact Information:**
- `components/sections/Contact.tsx` - Update email, LinkedIn, Twitter, location
- `components/layout/Footer.tsx` - Update social links

**Personal Data:**
- `app/layout.tsx` - Update metadata (name, description)
- `components/sections/Hero.tsx` - Update stats and headline
- `components/sections/About.tsx` - Update bio text

### 2. Add Your Projects

Edit `data/projects.ts` to add your real projects with:
- Project details (name, description, tech stack)
- Case study content (challenge, solution, results)
- Screenshots and images

### 3. Add Testimonials

Edit `data/testimonials.ts` to add real client testimonials.

### 4. Customize Services

Edit `data/services.ts` to customize the services you offer.

### 5. Update FAQ

Edit `data/faq.ts` to add/modify frequently asked questions.

### 6. Add Images

Place your images in the `public/images/` directory:
- `public/images/projects/` - Project screenshots
- `public/images/testimonials/` - Client photos
- `public/images/icons/` - Custom icons

### 7. Customize Colors

Edit `tailwind.config.ts` to change the color scheme. The default uses Android green (#3DDC84) as the primary color.

### 8. Update Meta Tags

Edit `app/layout.tsx` to update SEO meta tags, Open Graph tags, and Twitter Card information.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

To test the production build locally:

```bash
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

This Next.js app can be deployed to:
- Netlify
- AWS Amplify
- Google Cloud Run
- Any platform supporting Node.js

## Performance Optimization Tips

1. **Images:** Replace placeholder images with optimized WebP images
2. **Fonts:** The project uses Google Fonts (Inter, Outfit, JetBrains Mono)
3. **Code Splitting:** Next.js automatically splits code by route
4. **SEO:** Add proper meta descriptions for each page/project

## Accessibility

The site includes:
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Respects `prefers-reduced-motion` setting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Support

If you have questions or need help customizing, feel free to reach out!

---

Built with ❤️ using Next.js and Tailwind CSS
"# portfolio" 
