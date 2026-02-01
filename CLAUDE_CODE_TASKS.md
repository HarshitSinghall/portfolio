# Portfolio Website Enhancement Tasks for Claude Code

## Project Context

You are enhancing an existing Next.js 16 portfolio website for an Android developer. The website already has a solid foundation with:
- Next.js 16 + React 19 + TypeScript
- Tailwind CSS dark theme
- Basic Framer Motion animations
- Lenis smooth scrolling
- GSAP installed but underutilized

**Goal**: Transform this from a "good" portfolio into a **stunning, memorable, conversion-focused** experience with advanced animations, micro-interactions, and visual polish that will make visitors say "Wow!"

---

## Task 1: Install Additional Animation Dependencies

**Priority**: HIGH | **Estimated Time**: 5 minutes

### Instructions:
```bash
# Install these additional packages for advanced animations
npm install @react-spring/web react-intersection-observer splitting
npm install -D @types/splitting
```

### Files to Modify:
- `package.json` - Verify all dependencies are installed

---

## Task 2: Create Custom Cursor Component

**Priority**: MEDIUM | **Estimated Time**: 30 minutes

### Description:
Create a custom animated cursor that follows mouse movement with a trailing effect. The cursor should:
- Be a small dot (8px) with a larger ring (40px) that follows with delay
- Change size/color when hovering over interactive elements
- Hide on mobile devices
- Show "View" text when hovering over project cards
- Show "Click" text when hovering over buttons

### Create File: `components/ui/CustomCursor.tsx`

```typescript
'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has mouse
    const hasMouseDevice = window.matchMedia('(pointer: fine)').matches;
    if (!hasMouseDevice) return;
    
    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="project"]')) {
        setIsHovering(true);
        setHoverText('View');
      } else if (target.closest('[data-cursor="button"]')) {
        setIsHovering(true);
        setHoverText('');
      } else if (target.closest('[data-cursor="link"]')) {
        setIsHovering(true);
        setHoverText('');
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setHoverText('');
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border-2 border-primary flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
          backgroundColor: isHovering ? 'rgba(61, 220, 132, 0.1)' : 'transparent',
        }}
        transition={{ duration: 0.2 }}
      >
        {hoverText && (
          <span className="text-xs font-medium text-primary">{hoverText}</span>
        )}
      </motion.div>
    </>
  );
}
```

### Add to Layout:
In `app/layout.tsx`, import and add `<CustomCursor />` inside the body.

### Add data-cursor attributes:
- Add `data-cursor="project"` to all project cards
- Add `data-cursor="button"` to all buttons
- Add `data-cursor="link"` to all navigation links

---

## Task 3: Implement Magnetic Button Effect

**Priority**: HIGH | **Estimated Time**: 25 minutes

### Description:
Create a magnetic effect where buttons slightly follow the cursor when hovering near them, creating a "pull" effect.

### Create File: `components/ui/MagneticButton.tsx`

```typescript
'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = href ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.5 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={className}
        data-cursor="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </Component>
    </motion.div>
  );
}
```

### Files to Update:
- Replace standard buttons in Hero section CTAs
- Replace "Let's Talk" button in Header
- Replace "Download Resume" button in About section
- Replace all CTA buttons throughout the site

---

## Task 4: Create Text Reveal Animation Component

**Priority**: HIGH | **Estimated Time**: 30 minutes

### Description:
Create a sophisticated text reveal animation that animates text character by character or word by word with a mask effect.

### Create File: `components/ui/AnimatedText.tsx`

```typescript
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  type?: 'words' | 'chars' | 'lines';
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export default function AnimatedText({
  text,
  className = '',
  once = true,
  type = 'words',
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.03,
  highlightWords = [],
  highlightClassName = 'text-primary',
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-10%' });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const items = type === 'words' ? text.split(' ') : text.split('');

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      style={{ perspective: 1000 }}
    >
      {items.map((item, index) => {
        const isHighlighted = highlightWords.some(
          (word) => item.toLowerCase().includes(word.toLowerCase())
        );
        return (
          <motion.span
            key={index}
            variants={child}
            className={`inline-block ${isHighlighted ? highlightClassName : ''}`}
            style={{ transformOrigin: 'bottom' }}
          >
            {item}
            {type === 'words' && index < items.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
```

### Files to Update:
- Hero section main headline
- All section titles (About, Services, Projects, etc.)
- CTA section headline

---

## Task 5: Implement Scroll Progress Indicator

**Priority**: MEDIUM | **Estimated Time**: 15 minutes

### Description:
Add a progress bar at the top of the page showing how far the user has scrolled.

### Create File: `components/ui/ScrollProgress.tsx`

```typescript
'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}
```

### Add to Layout:
Add `<ScrollProgress />` to `app/layout.tsx`

---

## Task 6: Create Parallax Background Elements

**Priority**: MEDIUM | **Estimated Time**: 25 minutes

### Description:
Add floating decorative elements that move at different speeds based on scroll position to create depth.

### Create File: `components/ui/ParallaxElements.tsx`

```typescript
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxElement({ children, speed = 0.5, className = '' }: ParallaxElementProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, speed * 20]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Green gradient blob */}
      <ParallaxElement speed={0.3} className="absolute top-20 right-10 opacity-20">
        <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-3xl" />
      </ParallaxElement>
      
      {/* Accent blob */}
      <ParallaxElement speed={-0.2} className="absolute top-1/2 left-10 opacity-10">
        <div className="w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
      </ParallaxElement>
      
      {/* Small floating dots */}
      <ParallaxElement speed={0.5} className="absolute top-1/3 right-1/4">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </ParallaxElement>
      
      <ParallaxElement speed={-0.4} className="absolute top-2/3 left-1/3">
        <div className="w-3 h-3 rounded-full bg-accent" />
      </ParallaxElement>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />
    </div>
  );
}
```

### Create SVG File: `public/grid.svg`
```svg
<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0h60v60H0z" fill="none" stroke="white" stroke-width="0.5"/>
</svg>
```

### Add to Layout:
Add `<FloatingShapes />` to `app/layout.tsx`

---

## Task 7: Enhance Hero Section Animations

**Priority**: HIGH | **Estimated Time**: 45 minutes

### Description:
Completely revamp the Hero section with advanced animations including:
- Animated gradient background
- 3D text effect on headline
- Floating device mockup
- Particle effect or animated code snippets
- Stats counter with flip animation

### Update File: `components/sections/Hero.tsx`

**Key Changes:**

1. **Animated Gradient Background:**
```typescript
<motion.div 
  className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"
  animate={{
    background: [
      'radial-gradient(circle at 20% 50%, rgba(61, 220, 132, 0.15) 0%, transparent 50%)',
      'radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
      'radial-gradient(circle at 50% 80%, rgba(61, 220, 132, 0.15) 0%, transparent 50%)',
      'radial-gradient(circle at 20% 50%, rgba(61, 220, 132, 0.15) 0%, transparent 50%)',
    ],
  }}
  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
/>
```

2. **Animated Code Snippets Background:**
Create floating code snippets that drift across the background:
```typescript
const codeSnippets = [
  'fun onCreate() {',
  '@Composable',
  'LaunchedEffect',
  'viewModel.state',
  'suspend fun',
  'Flow<Data>',
];

// Render these as absolutely positioned, slowly drifting elements
```

3. **3D Rotating Device Mockup:**
Add a phone mockup that subtly rotates on mouse movement:
```typescript
const [rotateX, setRotateX] = useState(0);
const [rotateY, setRotateY] = useState(0);

const handleMouseMove = (e: MouseEvent) => {
  const { clientX, clientY } = e;
  const { innerWidth, innerHeight } = window;
  setRotateY((clientX / innerWidth - 0.5) * 20);
  setRotateX((clientY / innerHeight - 0.5) * -20);
};
```

4. **Flip Counter Animation for Stats:**
Use a number flip animation instead of simple counting:
```typescript
// Create FlipNumber component that animates each digit
```

---

## Task 8: Create Animated Project Cards with 3D Tilt

**Priority**: HIGH | **Estimated Time**: 35 minutes

### Description:
Enhance project cards with 3D tilt effect on hover, image zoom, and glowing border effect.

### Create File: `components/ui/TiltCard.tsx`

```typescript
'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotateX((y - centerY) / 10);
    setRotateY((centerX - x) / 10);
    setGlowPosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`relative ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      data-cursor="project"
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(61, 220, 132, 0.3) 0%, transparent 50%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
```

### Update Project Cards:
Wrap existing ProjectCard content with TiltCard component

---

## Task 9: Add Staggered Grid Reveal Animation

**Priority**: MEDIUM | **Estimated Time**: 20 minutes

### Description:
Create a reusable component for staggered grid animations where items reveal one by one.

### Create File: `components/ui/StaggeredGrid.tsx`

```typescript
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StaggeredGridProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  animationType?: 'fadeUp' | 'scaleIn' | 'slideIn';
}

export default function StaggeredGrid({
  children,
  className = '',
  staggerDelay = 0.1,
  animationType = 'fadeUp',
}: StaggeredGridProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    slideIn: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={animations[animationType]}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
```

### Files to Update:
- Services section grid
- Projects section grid
- Stats grid in Hero/About
- Tech stack badges

---

## Task 10: Create Animated Section Dividers

**Priority**: LOW | **Estimated Time**: 15 minutes

### Description:
Add animated SVG dividers between sections for visual interest.

### Create File: `components/ui/SectionDivider.tsx`

```typescript
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function SectionDivider() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={ref} className="h-24 relative overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,50 Q360,0 720,50 T1440,50"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          style={{ pathLength }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3DDC84" stopOpacity="0" />
            <stop offset="50%" stopColor="#3DDC84" stopOpacity="1" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
```

---

## Task 11: Enhance Navigation with Active Section Indicator

**Priority**: HIGH | **Estimated Time**: 30 minutes

### Description:
Add an animated pill/indicator that slides to highlight the currently active section.

### Update File: `components/layout/Header.tsx`

```typescript
// Add state for active section
const [activeSection, setActiveSection] = useState('hero');
const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

// Use Intersection Observer for each section
useEffect(() => {
  const sections = ['hero', 'about', 'services', 'projects', 'process', 'testimonials', 'faq', 'contact'];
  
  const observers = sections.map((section) => {
    const element = document.getElementById(section);
    if (!element) return null;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(section);
        }
      },
      { threshold: 0.3 }
    );
    
    observer.observe(element);
    return observer;
  });

  return () => {
    observers.forEach((observer) => observer?.disconnect());
  };
}, []);

// Animated indicator in nav
<motion.div
  className="absolute bottom-0 h-0.5 bg-primary rounded-full"
  layoutId="activeSection"
  animate={indicatorStyle}
  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
/>
```

---

## Task 12: Add Typing Animation for Hero Subheadline

**Priority**: MEDIUM | **Estimated Time**: 20 minutes

### Description:
Create a typewriter effect that cycles through different value propositions.

### Create File: `components/ui/TypeWriter.tsx`

```typescript
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypeWriterProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypeWriter({
  words,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-0.5 h-6 bg-primary ml-1"
      />
    </span>
  );
}
```

### Usage in Hero:
```typescript
<TypeWriter
  words={[
    'Native Android Apps',
    'Jetpack Compose UIs',
    'Scalable Solutions',
    'Beautiful Experiences',
  ]}
  className="text-primary"
/>
```

---

## Task 13: Create Animated Stats Counter with Flip Effect

**Priority**: MEDIUM | **Estimated Time**: 30 minutes

### Description:
Create a number counter that flips digits like a mechanical counter.

### Create File: `components/ui/FlipCounter.tsx`

```typescript
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FlipCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function FlipDigit({ digit }: { digit: string }) {
  return (
    <div className="relative w-8 h-12 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-primary"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function FlipCounter({ value, suffix = '', duration = 2000 }: FlipCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  const digits = count.toString().split('');

  return (
    <div ref={ref} className="flex items-center">
      {digits.map((digit, index) => (
        <FlipDigit key={index} digit={digit} />
      ))}
      {suffix && <span className="text-3xl font-bold text-primary ml-1">{suffix}</span>}
    </div>
  );
}
```

---

## Task 14: Add Smooth Accordion Animation for FAQ

**Priority**: MEDIUM | **Estimated Time**: 20 minutes

### Description:
Enhance FAQ accordion with smooth height animation and icon rotation.

### Update/Create File: `components/ui/Accordion.tsx`

```typescript
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-6 text-left group"
        data-cursor="button"
      >
        <span className="text-lg font-medium group-hover:text-primary transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          {isOpen ? (
            <Minus className="w-5 h-5 text-primary" />
          ) : (
            <Plus className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" />
          )}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-text-secondary leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
```

---

## Task 15: Create Animated Testimonial Carousel

**Priority**: MEDIUM | **Estimated Time**: 35 minutes

### Description:
Build an auto-playing carousel with smooth transitions and manual navigation.

### Create File: `components/ui/TestimonialCarousel.tsx`

```typescript
'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

export default function TestimonialCarousel({
  testimonials,
  autoPlayInterval = 5000,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), autoPlayInterval);
    return () => clearInterval(timer);
  }, [paginate, autoPlayInterval]);

  return (
    <div className="relative max-w-3xl mx-auto">
      <Quote className="absolute -top-4 -left-4 w-16 h-16 text-primary/20" />
      
      <div className="overflow-hidden py-8">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center px-8"
          >
            <p className="text-xl md:text-2xl text-text-primary mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex flex-col items-center">
              {testimonials[currentIndex].image && (
                <div className="w-16 h-16 rounded-full bg-surface mb-4 overflow-hidden">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <p className="font-semibold text-text-primary">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-text-secondary text-sm">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => paginate(-1)}
          className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          data-cursor="button"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary w-6' : 'bg-border hover:bg-text-muted'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={() => paginate(1)}
          className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          data-cursor="button"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
```

---

## Task 16: Add Page Transition Animation

**Priority**: LOW | **Estimated Time**: 25 minutes

### Description:
Add smooth page transitions when navigating to case study pages.

### Create File: `components/layout/PageTransition.tsx`

```typescript
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Page content */}
        {children}
        
        {/* Transition overlay */}
        <motion.div
          className="fixed inset-0 bg-primary z-50 origin-bottom"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="fixed inset-0 bg-primary z-50 origin-top"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
```

---

## Task 17: Create Animated Service Card Icons

**Priority**: MEDIUM | **Estimated Time**: 20 minutes

### Description:
Add animated icons that play on hover for service cards.

### Create File: `components/ui/AnimatedIcon.tsx`

```typescript
'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  icon: LucideIcon;
  className?: string;
}

export default function AnimatedIcon({ icon: Icon, className = '' }: AnimatedIconProps) {
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      whileHover={{
        scale: 1.1,
        rotate: [0, -10, 10, -10, 0],
      }}
      transition={{
        scale: { duration: 0.2 },
        rotate: { duration: 0.5, ease: 'easeInOut' },
      }}
    >
      <Icon className="w-full h-full" />
    </motion.div>
  );
}
```

---

## Task 18: Add Scroll-Triggered Number Counter for Results

**Priority**: HIGH | **Estimated Time**: 15 minutes

### Description:
Implement count-up animation for all statistics that triggers when scrolled into view.

### Create/Update File: `components/ui/CountUp.tsx`

```typescript
'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export default function CountUp({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(easeProgress * end);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}
```

---

## Task 19: Create Loading Animation for Page Load

**Priority**: LOW | **Estimated Time**: 20 minutes

### Description:
Add a branded loading animation that shows on initial page load.

### Create File: `components/ui/PageLoader.tsx`

```typescript
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          <div className="text-center">
            {/* Animated logo/name */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-8"
            >
              <span className="text-primary">&lt;/&gt;</span>
              <span className="text-text-primary ml-2">Dev</span>
            </motion.div>
            
            {/* Loading bar */}
            <div className="w-48 h-1 bg-surface rounded-full overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

---

## Task 20: Implement Smooth Scroll Snap for Sections (Optional)

**Priority**: LOW | **Estimated Time**: 15 minutes

### Description:
Add optional scroll snap behavior for full-section scrolling.

### Add to Global CSS:

```css
/* Optional: Add scroll snap */
.scroll-snap-container {
  scroll-snap-type: y proximity;
}

.scroll-snap-section {
  scroll-snap-align: start;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Task 21: Add Hover Effects to Tech Stack Badges

**Priority**: MEDIUM | **Estimated Time**: 15 minutes

### Description:
Create interactive hover effects for technology badges in About section.

### Create/Update File: `components/ui/TechBadge.tsx`

```typescript
'use client';

import { motion } from 'framer-motion';

interface TechBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

export default function TechBadge({ name, icon }: TechBadgeProps) {
  return (
    <motion.span
      className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-full text-sm text-text-secondary cursor-default"
      whileHover={{
        scale: 1.05,
        borderColor: '#3DDC84',
        color: '#3DDC84',
        backgroundColor: 'rgba(61, 220, 132, 0.1)',
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {icon}
      {name}
    </motion.span>
  );
}
```

---

## Task 22: Create Animated CTA Section Background

**Priority**: MEDIUM | **Estimated Time**: 20 minutes

### Description:
Add an animated gradient or particle background to the CTA section.

### Update CTA Section with:

```typescript
<section className="relative py-32 overflow-hidden">
  {/* Animated gradient background */}
  <motion.div
    className="absolute inset-0"
    animate={{
      background: [
        'radial-gradient(ellipse at 0% 0%, rgba(61, 220, 132, 0.2) 0%, transparent 50%)',
        'radial-gradient(ellipse at 100% 100%, rgba(61, 220, 132, 0.2) 0%, transparent 50%)',
        'radial-gradient(ellipse at 100% 0%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)',
        'radial-gradient(ellipse at 0% 100%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)',
        'radial-gradient(ellipse at 0% 0%, rgba(61, 220, 132, 0.2) 0%, transparent 50%)',
      ],
    }}
    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
  />
  
  {/* Floating particles */}
  {[...Array(20)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-primary/30 rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    />
  ))}
  
  {/* Content */}
  <div className="relative z-10 container mx-auto text-center">
    {/* ... existing content ... */}
  </div>
</section>
```

---

## Task 23: Final Polish and Performance Optimization

**Priority**: HIGH | **Estimated Time**: 30 minutes

### Checklist:

1. **Reduce Motion Support:**
   - Wrap all animations in `@media (prefers-reduced-motion: no-preference)`
   - Provide fallback static states

2. **Performance Checks:**
   - Use `will-change` sparingly
   - Ensure animations use transform/opacity only
   - Add `loading="lazy"` to images
   - Use Intersection Observer with appropriate thresholds

3. **Mobile Optimizations:**
   - Disable custom cursor on touch devices
   - Reduce animation complexity on mobile
   - Test all interactions on touch

4. **Accessibility:**
   - Ensure all interactive elements have focus states
   - Add `aria-label` where needed
   - Test keyboard navigation

### Add to globals.css:

```css
/* Performance optimizations */
.gpu-accelerated {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Focus visible for keyboard navigation */
:focus-visible {
  outline: 2px solid #3DDC84;
  outline-offset: 2px;
}

/* Hide focus for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

---

## Implementation Order (Recommended)

### Phase 1: Core Enhancements (Day 1)
1. Task 1: Install dependencies
2. Task 5: Scroll progress indicator
3. Task 4: Animated text component
4. Task 18: Count up animation
5. Task 9: Staggered grid reveal

### Phase 2: Interactive Elements (Day 2)
6. Task 3: Magnetic button effect
7. Task 2: Custom cursor
8. Task 8: 3D tilt cards
9. Task 11: Active navigation indicator

### Phase 3: Section Enhancements (Day 3)
10. Task 7: Hero section overhaul
11. Task 12: Typewriter effect
12. Task 13: Flip counter
13. Task 14: FAQ accordion
14. Task 15: Testimonial carousel

### Phase 4: Polish (Day 4)
15. Task 6: Parallax elements
16. Task 17: Animated service icons
17. Task 21: Tech badge effects
18. Task 22: CTA background
19. Task 10: Section dividers

### Phase 5: Final Touches (Day 5)
20. Task 16: Page transitions
21. Task 19: Page loader
22. Task 20: Scroll snap (optional)
23. Task 23: Final polish & optimization

---

## Testing Checklist

After completing all tasks, verify:

- [ ] All animations work smoothly (60fps)
- [ ] Mobile experience is polished
- [ ] No console errors
- [ ] Reduced motion preference is respected
- [ ] All interactive elements have hover/focus states
- [ ] Page loads under 3 seconds
- [ ] Lighthouse score > 90
- [ ] All links work correctly
- [ ] Forms validate and submit properly
- [ ] Cross-browser testing (Chrome, Firefox, Safari)

---

## Notes for Claude Code

1. **Test Incrementally**: After each task, run `npm run dev` and test in browser
2. **Keep Existing Functionality**: Don't break what's already working
3. **Comment Complex Code**: Add explanatory comments for animation logic
4. **Use TypeScript Properly**: Define interfaces for all props
5. **Follow File Structure**: Keep components organized in appropriate folders
6. **Commit After Each Task**: Create logical git commits

---

**END OF TASK LIST**
