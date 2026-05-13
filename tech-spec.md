# HARSHOLLASHA - Technical Specification

## 1. Development Environment

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 19 |
| Language | TypeScript | ~5.6 |
| Bundler | Vite | 6 |
| CSS Framework | Tailwind CSS | 3 |
| Component Library | shadcn/ui | latest |
| Routing | React Router | 7 |
| Animation | GSAP + ScrollTrigger | 3 |
| Icons | Lucide React | latest |

**Font Loading**: Google Fonts via `<link>` tags in `index.html` (Playfair Display, Poppins, Satisfy).

---

## 2. Dependencies

### Core (pre-installed with template)

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.0.0 | UI framework |
| react-dom | ^19.0.0 | React DOM renderer |
| typescript | ~5.6.0 | Type safety |
| vite | ^6.0.0 | Build tool & dev server |
| tailwindcss | ^3.4.0 | Utility-first CSS |
| postcss | ^8.4.0 | CSS processing |
| autoprefixer | ^10.4.0 | CSS vendor prefixes |
| @tailwindcss/typography | ^0.5.0 | Prose typography plugin |

### Routing

| Package | Version | Purpose |
|---------|---------|---------|
| react-router-dom | ^7.0.0 | Client-side routing for 12 pages |

### Animation

| Package | Version | Purpose |
|---------|---------|---------|
| gsap | ^3.12.0 | Core animation engine — timelines, tweens, scroll-driven animations |

### shadcn/ui Base (installed during init)

| Package | Version | Purpose |
|---------|---------|---------|
| class-variance-authority | ^0.7.0 | Component variant management |
| clsx | ^2.1.0 | Conditional class joining |
| tailwind-merge | ^2.6.0 | Tailwind class conflict resolution |
| lucide-react | ^0.400.0 | Icon library (line-art icons) |

### Form Handling

| Package | Version | Purpose |
|---------|---------|---------|
| react-hook-form | ^7.54.0 | Performant form state management |

---

## 3. Component Inventory

### 3.1 shadcn/ui Components

| Component | Installation | Usage | Customization |
|-----------|-------------|-------|---------------|
| Button | `npx shadcn add button` | All CTA buttons, form submits, nav actions | Custom variants: primary (Green 900), secondary (outline), ghost. Yellow 500 accent variant for featured contexts |
| Card | `npx shadcn add card` | Service cards, blog cards, pricing cards, team cards, testimonial cards | Custom border-radius (12-16px), shadow levels, hover lift effect |
| Input | `npx shadcn add input` | Contact form, consultation modal, newsletter | Custom border (Grey 200), focus state (Green 600), height 48px |
| Textarea | `npx shadcn add textarea` | Message fields in forms | Same styling as Input, min-height 120px |
| Select | `npx shadcn add select` | Service dropdown in forms | Custom arrow icon, same border/focus as Input |
| Dialog | `npx shadcn add dialog` | Consultation booking modal, video lightbox | Custom open/close animations (scale + fade), backdrop styling |
| Accordion | `npx shadcn add accordion` | FAQ sections on Course and Contact pages | Custom plus-to-X icon rotation, height animation, Green 900 heading styling |
| Label | `npx shadcn add label` | Form field labels | Poppins 500, 0.875rem, Green 900 |
| Badge | `npx shadcn add badge` | Category tags, "Most Popular" badge, status indicators | Custom colors: Yellow 500 for featured, Green 700 for active |
| Separator | `npx shadcn add separator` | Footer divider, pricing card dividers | Custom color: rgba(255,255,255,0.2) on dark, Green 400 on light |
| Sheet | `npx shadcn add sheet` | Mobile navigation panel | Slide from right, backdrop overlay, staggered menu items |
| ScrollArea | `npx shadcn add scroll-area` | Mobile nav scroll, modal content overflow | Smooth scrolling container |

### 3.2 Custom Components

| Component | File | Props Interface | Description |
|-----------|------|-----------------|-------------|
| Navbar | `components/Navbar.tsx` | — | Fixed top nav with logo, links, services dropdown, CTA. Scroll-aware (adds shadow/blur). Mobile: hamburger triggers Sheet |
| Footer | `components/Footer.tsx` | — | 3-column footer with logo, quick links, contact info, social icons |
| MagneticButton | `components/MagneticButton.tsx` | `{ children, className?, strength? }` | Wrapper that adds magnetic pull effect on hover using mouse position tracking |
| CustomCursor | `components/CustomCursor.tsx` | — | Desktop-only custom cursor (dot + expanded circle on hover). Hidden on touch devices. Uses rAF for smooth tracking |
| ScrollReveal | `components/ScrollReveal.tsx` | `{ children, direction?, delay?, duration?, stagger? }` | Reusable scroll-triggered reveal wrapper using GSAP ScrollTrigger. Configurable direction (up/down/left/right) |
| OrbitCarousel | `components/OrbitCarousel.tsx` | `{ items: OrbitItem[], radius? }` | Circular orbit carousel for services section. Cards rotate around center point. Active card highlighted |
| TestimonialCarousel | `components/TestimonialCarousel.tsx` | `{ testimonials: Testimonial[] }` | Horizontal scrollable carousel with navigation dots, auto-advance (5s), pause on hover |
| InfiniteMarquee | `components/InfiniteMarquee.tsx` | `{ children, speed?, pauseOnHover? }` | Continuously scrolling marquee. Duplicates children for seamless loop. CSS animation-based |
| VideoLightbox | `components/VideoLightbox.tsx` | `{ thumbnail, videoSrc }` | Thumbnail with play button → opens Dialog with video player. Autoplay on open |
| FAQAccordion | `components/FAQAccordion.tsx` | `{ items: FAQItem[] }` | Wrapper around shadcn Accordion with custom styling (plus-to-X icon, Green 900 headings) |
| PricingCard | `components/PricingCard.tsx` | `{ plan, price, period, features, featured?, cta }` | Pricing tier card with check-list features. Featured variant: Green 900 bg, Yellow 500 accent |
| ServiceCard | `components/ServiceCard.tsx` | `{ icon, title, description, href }` | Card with icon, title, description. Hover: lift + shadow increase |
| BlogCard | `components/BlogCard.tsx` | `{ image, category, title, excerpt, date, readTime, href }` | Card with 16:9 image, category badge, title, excerpt. Hover: image scale + lift |
| TestimonialCard | `components/TestimonialCard.tsx` | `{ quote, author, role, avatar }` | Yellow 50 bg card with Satisfy font quote, author info, avatar |
| TeamCard | `components/TeamCard.tsx` | `{ avatar, name, role, socials? }` | Vertical card with circular avatar, name, role. Hover: lift + avatar scale |
| CertificationBadge | `components/CertificationBadge.tsx` | — | Floating circular badge for course certification. Subtle floating animation |
| BackToTop | `components/BackToTop.tsx` | — | Fixed bottom-right button. Appears after 500px scroll. Fade + slide animation |
| PageLoader | `components/PageLoader.tsx` | — | Full-screen loader with brand logo. Fades out after assets load |
| DecorativeShape | `components/DecorativeShape.tsx` | `{ variant, position, size?, opacity? }` | Renders organic SVG blob shapes. Continuous floating animation via CSS |
| SectionHeader | `components/SectionHeader.tsx` | `{ label, heading, description?, align? }` | Reusable section header: label (uppercase) + heading (Playfair Display) + optional description |
| ProcessTimeline | `components/ProcessTimeline.tsx` | `{ steps: ProcessStep[] }` | Horizontal timeline (desktop) / vertical (mobile). Numbered circles connected by line |
| CounterAnimation | `components/CounterAnimation.tsx` | `{ target, suffix?, duration? }` | Animated count-up from 0 to target. Triggers once on scroll-into-view. 2s duration, ease-out |
| ContactForm | `components/ContactForm.tsx` | `{ variant?, onSubmit? }` | Full contact form with validation. Variants: full (all fields), compact (name/email/message only) |

---

## 4. Animation Implementation Plan

### Animation Philosophy

Calm, organic motion mirroring spiritual wellness. Gentle ease-out curves, moderate durations (0.5s–1s), subtle movements. All animations respect `prefers-reduced-motion`.

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| **Custom cursor tracking** | Custom (rAF) | `requestAnimationFrame` loop tracking mouse position. Lerp interpolation for smooth trailing. Dot (8px) expands to circle (40px) on interactive hover. Magnetic pull within 50px radius. | High |
| **Magnetic button effect** | Custom (rAF) | Mousemove listener calculates offset from button center. rAF loop applies `transform: translate()` with lerp smoothing. Max displacement ~20px. | Medium |
| **Page load sequence** | GSAP | Master timeline: loader fade-out (opacity 1→0, 0.5s) → hero content staggered fade-up (0.8s–1.2s total). Chain with `gsap.timeline()`. | Medium |
| **Scroll-triggered reveals** | GSAP + ScrollTrigger | `ScrollReveal` component wraps content. GSAP ScrollTrigger with `start: "top 80%"`. Animate `opacity` + `translateY` (30–50px). Stagger groups with `stagger: 0.1–0.15s`. Reusable across all pages. | Medium |
| **Hero entrance sequence** | GSAP | Timeline: bg fade (1.2s) → heading fade-up (1s, 0.3s delay) → subtitle (0.8s, 0.5s delay) → CTAs (0.6s, 0.7s delay) → course card (0.8s, 1s delay). | Medium |
| **Smooth scrolling** | CSS + Custom | `scroll-behavior: smooth` for anchor links. For enhanced feel, custom rAF-based lerp scroll loop. | Low |
| **Orbit carousel** | GSAP | Cards positioned absolutely using trigonometry (sin/cos) around center point. GSAP tweens rotate container. Active card: scale 1.1, full opacity. Inactive: scale 0.9, 70% opacity. 0.6s ease-out transition. | High |
| **Testimonial carousel** | Custom (state) | React state tracks active index. CSS `transform: translateX()` for sliding. Auto-advance interval (5s), cleared on hover/touch. Navigation dots update active state. | Medium |
| **Infinite marquee** | CSS Animation | Duplicate content children. CSS `@keyframes` translateX from 0 to -50%. `animation: marquee 30s linear infinite`. `animation-play-state: paused` on hover. | Low |
| **Counter animation** | GSAP + ScrollTrigger | `gsap.to()` with `snap` plugin on scroll-into-view. Count from 0 to target over 2s, ease-out. Trigger once via `once: true`. | Low |
| **FAQ accordion** | shadcn Accordion | Built-in height animation (0.3s). Custom plus icon rotates 45deg via CSS `transform: rotate(45deg)` on `[data-state=open]`. | Low |
| **Modal/dialog** | shadcn Dialog | Built-in animations. Customize: backdrop `opacity 0→0.5` (0.2s), content `scale 0.95→1` + `opacity 0→1` (0.3s ease-out). | Low |
| **Video lightbox** | shadcn Dialog + Custom | Dialog with video `<iframe>`. Autoplay on open. Pause on close. | Low |
| **Button hover states** | CSS/Tailwind | `transition-all duration-300`. `hover:scale-[1.02]` + shadow increase. Applied via Tailwind classes. | Low |
| **Card hover effects** | CSS/Tailwind | `hover:-translate-y-1 hover:shadow-lg transition-all duration-300`. Image `hover:scale-105` with `overflow-hidden`. | Low |
| **Floating decorative shapes** | CSS Animation | `@keyframes float` with `translateY` oscillation (±10px). Duration 6–8s, `ease-in-out`, `infinite`. Pure CSS, no JS needed. | Low |
| **Navigation dropdown** | CSS/Tailwind | `opacity 0 translateY(4px)` → `opacity 100 translateY(0)` on hover/focus. 0.2s transition. | Low |
| **Mobile menu** | shadcn Sheet | Built-in slide-from-right animation. Menu items staggered fade-in with CSS `animation-delay` per item. | Low |
| **Back-to-top button** | CSS + Custom | `opacity` + `translateY` transition (0.3s). Toggle visible class based on scroll position (>500px). Click triggers `window.scrollTo({ top: 0, behavior: 'smooth' })`. | Low |
| **Service card hover (orbit)** | CSS/Tailwind | `hover:scale-105 hover:shadow-lg transition-all duration-300` on individual orbit cards. z-index elevation on hover. | Low |
| **Course module accordion** | shadcn Accordion | Same pattern as FAQ. Dark theme variant (Green 900 bg, white/yellow text). Chevron rotation. | Low |
| **Pricing card hover** | CSS/Tailwind | `hover:-translate-y-2 hover:shadow-xl transition-all duration-300`. Featured card has subtle glow (`box-shadow` with yellow tint). | Low |
| **Process timeline steps** | GSAP + ScrollTrigger | Number circles scale-in (0.8→1) staggered. Steps fade-up with 0.15s stagger. Connecting line draws via `scaleX` animation. | Medium |
| **Image parallax (course)** | GSAP + ScrollTrigger | Course feature image moves at 0.9x scroll speed using ScrollTrigger `scrub: true`. Subtle effect. | Low |
| **Link hover underline** | CSS | `border-bottom: 2px solid currentColor` appears on hover. `transition: border-color 0.2s`. | Low |

---

## 5. State & Logic Plan

### 5.1 Global State (React Context)

| State | Scope | Storage | Purpose |
|-------|-------|---------|---------|
| `CursorContext` | Global | React Context | Tracks cursor state (default/hover) for CustomCursor. Toggles expanded cursor on interactive element hover. |
| `NavigationContext` | Global | React Context | Tracks scroll position for navbar styling (transparent → solid). Manages mobile menu open/close state. |
| `ModalContext` | Global | React Context | Manages consultation modal open/close state. Accessible from any CTA button site-wide. |

### 5.2 Page-Level State

| Page | State | Storage | Purpose |
|------|-------|---------|---------|
| Home | `activeServiceIndex` | `useState` | Tracks active card in orbit carousel |
| Home | `isVideoOpen` | `useState` | Controls video lightbox visibility |
| Home | `activeTestimonial` | `useState` | Tracks active testimonial index |
| Blog | `activeCategory` | `useState` | Filters blog cards by category ("All" + 5 categories) |
| Course | `expandedModules` | `useState<number[]>` | Tracks which course module accordion items are open |
| Contact | `expandedFAQs` | `useState<number[]>` | Tracks which FAQ items are open |
| All | `isLoaderVisible` | `useState` | Page loader visibility, controlled by initial load sequence |

### 5.3 Form Logic

| Form | Validation | Submission | States |
|------|-----------|------------|--------|
| Contact Form (Contact page) | Full name (required), Email (required, regex), Phone (optional), Subject (required), Message (required, min 10 chars) | POST to backend API endpoint | idle → submitting (button spinner) → success (message + reset) → error (message) |
| Consultation Modal | Full name (required), Email (required), Phone (optional), Service (dropdown, required), Message (optional) | POST to backend API endpoint | Same 4-state flow as contact form |

### 5.4 Routing

| Route | Page Component | Lazy Loaded |
|-------|---------------|-------------|
| `/` | `HomePage` | No (critical) |
| `/about` | `AboutPage` | Yes |
| `/course` | `CoursePage` | Yes |
| `/services/meditation` | `ServiceDetailPage` | Yes |
| `/services/yoga` | `ServiceDetailPage` | Yes |
| `/services/healing` | `ServiceDetailPage` | Yes |
| `/services/energy-scanning` | `ServiceDetailPage` | Yes |
| `/services/aura-reading` | `ServiceDetailPage` | Yes |
| `/services/breathwork` | `ServiceDetailPage` | Yes |
| `/services/spiritual-coaching` | `ServiceDetailPage` | Yes |
| `/blog` | `BlogPage` | Yes |
| `/contact` | `ContactPage` | Yes |

**ServiceDetailPage** receives service data via route parameter and renders the template with service-specific content from a data file.

### 5.5 Data Architecture

Static data (services, team, testimonials, blog posts, FAQ items, pricing plans, course modules) stored in TypeScript data files under `src/data/`.

**Data files:**
- `src/data/services.ts` — All 7 services with hero images, types, process steps, benefits, descriptions
- `src/data/team.ts` — Founder + team member profiles
- `src/data/testimonials.ts` — Client testimonial quotes, authors, avatars
- `src/data/blog.ts` — Blog post metadata (title, category, excerpt, image, date, readTime)
- `src/data/faq.ts` — FAQ items for Contact page
- `src/data/course.ts` — Course modules, outcomes, pricing plans

---

## 6. Project File Structure

```
├── public/
│   ├── images/
│   │   ├── hero-background.jpg
│   │   ├── course-feature-image.jpg
│   │   ├── course-hero-preview.jpg
│   │   ├── course-overview-image.jpg
│   │   ├── pranashakti-wide.jpg
│   │   ├── scan-report-sample.jpg
│   │   ├── founder-portrait.jpg
│   │   ├── guruji-portrait-full.jpg
│   │   ├── team/
│   │   │   ├── member-1.jpg
│   │   │   ├── member-2.jpg
│   │   │   ├── member-3.jpg
│   │   │   ├── member-4.jpg
│   │   ├── testimonials/
│   │   │   ├── avatar-1.jpg
│   │   │   ├── avatar-2.jpg
│   │   │   ├── avatar-3.jpg
│   │   │   ├── avatar-4.jpg
│   │   │   ├── avatar-5.jpg
│   │   ├── blog/
│   │   │   ├── blog-1.jpg
│   │   │   ├── blog-2.jpg
│   │   │   ├── blog-3.jpg
│   │   │   ├── blog-4.jpg
│   │   │   ├── blog-5.jpg
│   │   │   ├── blog-6.jpg
│   │   ├── services/
│   │   │   ├── hero-meditation.jpg
│   │   │   ├── hero-yoga.jpg
│   │   │   ├── hero-healing.jpg
│   │   │   ├── hero-energy-scanning.jpg
│   │   │   ├── hero-aura-reading.jpg
│   │   │   ├── hero-breathwork.jpg
│   │   │   ├── hero-spiritual-coaching.jpg
│   │   ├── video-thumbnail.jpg
│   │   ├── about-story-image.jpg
│   │   ├── organic-shape-1.svg
│   │   ├── organic-shape-2.svg
│   │   ├── organic-shape-3.svg
│   │   ├── organic-shape-hero-1.svg
│   │   ├── organic-shape-hero-2.svg
│   ├── favicon.svg
│   └── robots.txt
│
├── src/
│   ├── main.tsx                          # Entry point, React root
│   ├── App.tsx                           # Router setup with routes
│   ├── index.css                         # Global styles, Tailwind directives, CSS custom properties, font imports, keyframes
│   │
│   ├── context/
│   │   ├── CursorContext.tsx             # Custom cursor state provider
│   │   ├── NavigationContext.tsx         # Scroll position + mobile menu state
│   │   └── ModalContext.tsx              # Consultation modal open/close state
│   │
│   ├── components/
│   │   ├── ui/                           # shadcn/ui components (auto-installed)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── select.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── label.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   └── scroll-area.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── OrbitCarousel.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   ├── InfiniteMarquee.tsx
│   │   ├── VideoLightbox.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── PricingCard.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── BlogCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── TeamCard.tsx
│   │   ├── CertificationBadge.tsx
│   │   ├── BackToTop.tsx
│   │   ├── PageLoader.tsx
│   │   ├── DecorativeShape.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── ProcessTimeline.tsx
│   │   ├── CounterAnimation.tsx
│   │   ├── ContactForm.tsx
│   │   └── ConsultationModal.tsx
│   │
│   ├── sections/
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── VideoIntroSection.tsx
│   │   │   ├── CourseFeatureSection.tsx
│   │   │   ├── ServicesOverviewSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── about/
│   │   │   ├── AboutHeroSection.tsx
│   │   │   ├── BrandStorySection.tsx
│   │   │   ├── PhilosophySection.tsx
│   │   │   ├── MissionVisionSection.tsx
│   │   │   ├── CoreValuesSection.tsx
│   │   │   ├── FounderSection.tsx
│   │   │   └── AboutCTASection.tsx
│   │   ├── course/
│   │   │   ├── CourseHeroSection.tsx
│   │   │   ├── CourseOverviewSection.tsx
│   │   │   ├── CourseOutcomesSection.tsx
│   │   │   ├── PranashaktiSection.tsx
│   │   │   ├── ScanReportSection.tsx
│   │   │   ├── CertificationSection.tsx
│   │   │   ├── CourseModulesSection.tsx
│   │   │   └── CourseCTASection.tsx
│   │   ├── service/
│   │   │   ├── ServiceHeroSection.tsx
│   │   │   ├── ServiceTypesSection.tsx
│   │   │   ├── ServiceProcessSection.tsx
│   │   │   ├── ServiceStepsSection.tsx
│   │   │   ├── ServiceBenefitsSection.tsx
│   │   │   └── ServiceCTASection.tsx
│   │   ├── blog/
│   │   │   ├── BlogHeroSection.tsx
│   │   │   └── BlogGridSection.tsx
│   │   └── contact/
│   │       ├── ContactHeroSection.tsx
│   │       ├── ContactInfoSection.tsx
│   │       ├── MapSection.tsx
│   │       ├── ContactFAQSection.tsx
│   │       └── ContactCTASection.tsx
│   │
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── CoursePage.tsx
│   │   ├── ServiceDetailPage.tsx
│   │   ├── BlogPage.tsx
│   │   └── ContactPage.tsx
│   │
│   ├── data/
│   │   ├── services.ts                 # 7 services with all content
│   │   ├── team.ts                     # Founder + 4 team members
│   │   ├── testimonials.ts             # 5 testimonials
│   │   ├── blog.ts                     # 6 blog posts
│   │   ├── faq.ts                      # 7 FAQ items
│   │   ├── course.ts                   # Modules, outcomes, pricing
│   │   └── navigation.ts              # Nav links, dropdown items
│   │
│   ├── hooks/
│   │   ├── useScrollPosition.ts        # Returns current scroll Y position
│   │   ├── useInView.ts                # IntersectionObserver hook for scroll triggers
│   │   ├── useMediaQuery.ts            # Responsive breakpoint detection
│   │   ├── useMousePosition.ts         # Tracks mouse coordinates (for magnetic/cursor)
│   │   ├── useReducedMotion.ts         # Detects prefers-reduced-motion
│   │   └── useCountUp.ts              # Animated counter logic
│   │
│   ├── lib/
│   │   ├── utils.ts                    # cn() utility (clsx + tailwind-merge)
│   │   └── animations.ts              # Shared GSAP animation presets (fadeUp, fadeIn, stagger)
│   │
│   └── types/
│       └── index.ts                    # Shared TypeScript interfaces
│
├── src/components/ui/                  # shadcn/ui installation target
├── index.html                          # HTML entry with Google Fonts, meta tags
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── components.json                     # shadcn/ui config
└── package.json
```

---

## 7. Tailwind Configuration

### Custom Theme Extensions

```js
// tailwind.config.js — key customizations
{
  theme: {
    extend: {
      colors: {
        'green-900': '#383F00',
        'green-800': '#4A5202',
        'green-700': '#5F6B00',
        'green-600': '#6F7D00',
        'green-400': '#7F8F00',
        'yellow-900': '#796A00',
        'yellow-800': '#8F7E00',
        'yellow-700': '#A39000',
        'yellow-600': '#BBA400',
        'yellow-500': '#E5CC00',
        'yellow-400': '#F5D900',
        'yellow-300': '#FFE000',
        'yellow-200': '#FFF2AB',
        'yellow-100': '#FFF9D9',
        'yellow-50': '#FFFCED',
        'blue-50': '#E6F2F3',
        'orange-50': '#FDE8E0',
        'green-50': '#E5E5C9',
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'body': ['"Poppins"', 'sans-serif'],
        'script': ['"Satisfy"', 'cursive'],
      },
      maxWidth: {
        'container': '1400px',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '20px',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
    },
  },
}
```

---

## 8. Key Implementation Notes

### 8.1 Custom Cursor Implementation

- Render a `<div>` cursor element positioned via `transform: translate3d()` for GPU acceleration
- Use `requestAnimationFrame` + lerp interpolation (factor ~0.15) for smooth trailing
- On `mouseenter` of interactive elements (`a`, `button`, `[data-cursor="expand"]`), toggle expanded state
- Hide native cursor via `* { cursor: none; }` (desktop only)
- Completely skip rendering on touch devices (`useMediaQuery('(hover: hover)')`)
- Respect `prefers-reduced-motion`: disable trailing, use instant positioning

### 8.2 Magnetic Button Implementation

- Wrap button in a relative container
- On `mousemove`, calculate distance from mouse to button center
- If within threshold (~60px), apply `transform: translate(x, y)` with lerp smoothing
- On `mouseleave`, spring back to origin via GSAP or CSS transition
- Max displacement capped at ~20px

### 8.3 Orbit Carousel Implementation

- Container is relative-positioned with fixed height
- Cards positioned absolutely using: `x = centerX + radius * cos(angle)`, `y = centerY + radius * sin(angle)`
- Each card assigned an angle offset (360 / 7 ≈ 51.4deg apart)
- Active index determines which card is at the "front" position (bottom of orbit)
- Navigation clicks increment/decrement active index; GSAP animates all card positions
- SVG circle trail rendered behind cards at 30% opacity
- Mobile: degrade to horizontal scrollable row with snap points

### 8.4 Scroll-Triggered Reveals (GSAP ScrollTrigger)

- Create reusable `ScrollReveal` component that accepts direction, delay, duration
- Register ScrollTrigger plugin once in `main.tsx` (`gsap.registerPlugin(ScrollTrigger)`)
- Use `useRef` + `useLayoutEffect` to set up animations on mount
- Each section's elements grouped by reveal timing; stagger applied via GSAP
- `scrub: false` (trigger once) for most reveals; `scrub: true` only for parallax effects
- On mobile, reduce animation distances by ~30%

### 8.5 Service Detail Pages

- Single `ServiceDetailPage` component receives `:serviceSlug` from URL params
- Looks up service data from `services.ts` using the slug
- Renders the template sections (hero, types, process, steps, benefits, CTA) with service-specific content
- No dynamic imports needed — all data is static TypeScript

### 8.6 Responsive Strategy

- Mobile-first approach; default styles for mobile, `md:`, `lg:`, `xl:`, `2xl:` breakpoints for larger
- Custom cursor: disabled on all touch devices
- Orbit carousel: simplified to horizontal swipeable row on mobile
- Navigation: hamburger menu below 1024px (Sheet component)
- Typography: ~20-30% smaller on mobile (use responsive Tailwind classes)
- Decorative shapes: reduced size and opacity on mobile

### 8.7 Performance Considerations

- Lazy load all page components except Home (`React.lazy()` + `Suspense`)
- Use `loading="lazy"` on below-the-fold images
- Preload critical fonts and hero image via `<link rel="preload">` in `index.html`
- All animations use `transform` and `opacity` only (GPU-accelerated)
- GSAP ScrollTrigger: use `will-change: transform, opacity` on animated elements
- CSS animations (float, marquee) for continuous loops — no JS overhead
- Debounce scroll listeners; use rAF for mouse tracking
