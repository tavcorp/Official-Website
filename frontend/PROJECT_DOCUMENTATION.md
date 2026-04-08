# TAVCORP Frontend Project Documentation

**Project Name:** TAVCORP Official Website - Frontend  
**Type:** React-based Modern Web Application  
**Build Tool:** Vite  
**Date:** April 2026

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Architecture](#project-architecture)
4. [Directory Structure](#directory-structure)
5. [Pages & Routes](#pages--routes)
6. [Components Overview](#components-overview)
7. [Data Management](#data-management)
8. [Styling & Design System](#styling--design-system)
9. [Key Features](#key-features)
10. [Authentication System](#authentication-system)
11. [Build & Development](#build--development)

---

## 🎯 Project Overview

TAVCORP is a modern, professional website for a creative services studio built with React. The application showcases:
- Company services and offerings
- Portfolio/featured works
- Team information
- FAQ and blog sections
- Client testimonials
- Pricing tiers
- Contact and inquiry management
- User authentication (Login/Signup)

The website is designed with a focus on **modern UI/UX**, smooth animations, and responsive design across all devices.

---

## 🛠 Tech Stack

### Core Framework
- **React 19.2.0** - UI library for building interactive components
- **React Router 7.11.0** - Client-side routing for multi-page navigation
- **Vite 7.2.2** - Fast build tool and development server

### Animation & Motion
- **Framer Motion 12.23.24** - Smooth, declarative React animations
- **GSAP 3.13.0** - Advanced animation library for complex sequences

### UI Components & Icons
- **Lucide React 0.553.0** - Modern, clean SVG icon library
- **React Icons 5.5.0** - Additional icon library (HiMenu, ImArrowUpRight2, etc.)
- **Swiper 12.0.3** - Touch-enabled carousel/slider component

### Styling
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS processing and transformation
- **Autoprefixer 10.4.22** - Automatic vendor prefixes for CSS

### Development Tools
- **ESLint 9.39.1** - Code linting and quality checking
- **TypeScript Support** - Type safety for React components

---

## 🏗 Project Architecture

The project follows a **modular, component-based architecture** with clear separation of concerns:

### Architectural Layers

```
src/
├── pages/          → High-level page components (full pages)
├── components/     → Reusable UI components (organized by feature)
├── data/           → Static data & content (JSON-like objects)
├── store/          → Global state management (Auth context)
├── utils/          → Helper functions & utilities
└── main.jsx        → React app entry point
```

**Design Philosophy:**
- **Component Reusability:** Small, focused components that can be reused across pages
- **Separation of Concerns:** Data, UI, and business logic are separated
- **Scalability:** Easy to add new pages, components, and features
- **Maintainability:** Clear folder structure and naming conventions

---

## 📂 Directory Structure

### `/src/components/` - Reusable Components

Organized by feature/section:

#### **layout/** - App-Wide Structure
- `Header.jsx` - Navigation header with mobile/desktop menus, authentication dropdown
- `Footer.jsx` - Global footer with links and info

#### **ui/** - Atomic UI Components
- `ArticleCard.jsx` - Displays individual articles
- `PricingCard.jsx` - Product/service pricing card
- `QuestionCard.jsx` - FAQ question cards
- `TestimonialsCard.jsx` - Client testimonial cards
- `stackCard.jsx` - Technology/skill cards
- `featuredCard.jsx` - Featured project cards

#### **hero/** - Hero/Landing Section
- `Hero.jsx` - Main hero section (headline, CTA)
- `Hero1.jsx` - Alternative/secondary hero component
- `hero.module.css`, `hero1.module.css` - Hero-specific styles

#### **faq/** - FAQ Components
- `FaqAccordion.jsx` - Expandable accordion for FAQ items
- `FaqAccordion.module.css` - FAQ styles

#### **featured/** - Portfolio/Featured Work
- `featured.jsx` - Featured work showcase
- `FeaturedWorksGrid.jsx` - Grid layout for multiple projects
- `featured.css` - Featured section styles

#### **testimonials/** - Client Testimonials
- `Testimonials.jsx` - Testimonials section container
- `Testimonials.css` - Testimonial styling

#### **servicesPlan/** - Service Plans
- `ServicesPlan.jsx` - Service plan/tier display

#### **pricing/** - Pricing Section
- `PricingSection.jsx` - Pricing tier cards

#### **ourServices/** - Services Overview
- `OurServices.jsx` - Main services display

#### **contact/** - Contact Components
- `ContactCta.jsx` - Call-to-action contact block

#### **articles/** - Article Components
- `ArticlesPreview.jsx` - Preview of latest articles

---

### `/src/pages/` - Full Page Components

Each page represents a complete route in the application:

- **`Home.jsx`** - Landing page combining multiple sections (Hero, Services, Testimonials, etc.)
- **`Studio.jsx`** - Studio information page
- **`Contact.jsx`** - Contact form page
- **`Work.jsx`** - Work/portfolio showcase
- **`News.jsx`** - News/updates section
- **`StartProject.jsx`** - Project inquiry/form page
- **`OurTeam.jsx`** - Team member profiles
- **`AboutUs.jsx`** - Company about/mission page
- **`FAQs.jsx`** - Comprehensive FAQ page
- **`Blog.jsx`** - Blog listing page
- **`Portfolio.jsx`** - Full portfolio page
- **`PrivacyPolicy.jsx`** - Privacy policy page
- **`term.jsx`** - Terms of service page
- **`OurSAP.jsx`** - Services and pricing page
- **`NotFound.jsx`** - 404 error page
- **`styleBlog.module.css`** - Blog page-specific styles

---

### `/src/data/` - Static Data & Content

Contains structured data used throughout the app:

- **`articlesData.js`** - Article entries with dates, titles, categories
- **`blogData.js`** - Blog post content and metadata
- **`faqData.js`** - FAQ questions and answers
- **`FAQpageData.js`** - Alternative FAQ data structure
- **`featuredData.js`** - Featured/highlighted projects data
- **`pricingData.js`** - Pricing tier information
- **`stackData.js`** - Technology/skill stack data
- **`testimonialsData.js`** - Client testimonials and reviews
- **`privacyPolicyData.js`** - Privacy policy content
- **`termData.js`** - Terms of service content

---

### `/src/store/` - State Management

- **`auth.jsx`** - Authentication context provider for login/logout state

---

### `/src/utils/` - Utility Functions

- **`ScrollToTop.jsx`** - Auto-scroll component that returns to top on route change

---

### `/src/` - Entry Point & Styling

- **`App.jsx`** - Main app component with routing configuration
- **`main.jsx`** - React DOM entry point
- **`index.css`** - Global styling
- **`login.jsx`** - Login page component
- **`logout.jsx`** - Logout handler
- **`signup.jsx`** - User registration page

---

## 🗺 Pages & Routes

The application includes the following routes:

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Landing page with featured services & content |
| `/studio` | Studio | Studio information & showcase |
| `/contact` | Contact | Contact form & inquiry |
| `/work` | Work | Work showcase/portfolio |
| `/news` | News | News & updates |
| `/start-project` | StartProject | Project inquiry form |
| `/services-pricing` | OurSAP | Full services & pricing page |
| `/our-team` | OurTeam | Team member profiles |
| `/about-us` | AboutUs | Company mission & info |
| `/faqs` | FAQs | FAQ page |
| `/blogs` | Blog | Blog listing |
| `/portfolio` | Portfolio | Full portfolio showcase |
| `/terms` | Terms | Terms of service |
| `/privacy` | PrivacyPolicy | Privacy policy |
| `/login` | Login | User login |
| `/signup` | Signup | User registration |
| `/logout` | Logout | User logout |
| `*` | NotFound | 404 error page |

---

## 🧩 Components Overview

### Navigation & Layout

**Header.jsx**
- Responsive navigation with mobile/desktop variants
- Logo and brand display
- Authentication state display (login/logout/user dropdown)
- Mobile menu toggle with hamburger icon
- Desktop menu with page links
- Pages submenu for nested navigation

**Footer.jsx**
- Global footer at bottom of every page
- Links, company info, copyright

### Home Page Sections

The Home page is a composition of multiple sections:

1. **Hero1** - Primary hero section
2. **Hero** - Secondary hero/statistics
3. **Featured** - Featured work showcase
4. **OurServices** - Services overview
5. **Testimonials** - Client testimonials
6. **FaqAccordion** - Quick FAQ access
7. **ArticlesPreview** - Latest articles preview

### Reusable Card Components

- **ArticleCard** - Displays article preview with image, date, category, title
- **PricingCard** - Shows pricing tier with features and CTA
- **QuestionCard** - FAQ item with question/answer
- **TestimonialsCard** - Client testimonial with rating/review
- **stackCard** - Technology/skill display
- **featuredCard** - Portfolio project preview

### Interactive Components

- **FaqAccordion** - Expandable/collapsible accordion interface
- **Testimonials** - Carousel/slider for testimonials (uses Swiper)
- **ServicesPlan** - Interactive service tier comparison

---

## 📊 Data Management

### Data Structure Pattern

All data files follow a consistent structure with arrays of objects:

**Example: articlesData.js**
```javascript
export const articlesData = [
  {
    id: 1,
    experience: "Experience",
    date: "June 14, 2024",
    title: "How to build work culture...",
    image: '/images/article-image-1.jpg',
  },
  // ... more items
]
```

**Example: faqData.js** (assumed structure)
```javascript
export const faqData = [
  {
    id: 1,
    question: "Question text?",
    answer: "Answer text...",
  },
  // ... more items
]
```

### Data Usage

Components import data and map over arrays to render dynamic content:
```jsx
import { articlesData } from "../data/articlesData";

const ArticlesPreview = () => {
  return (
    <div>
      {articlesData.map(article => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </div>
  );
};
```

---

## 🎨 Styling & Design System

### Styling Approach

The project uses a **hybrid styling system**:

1. **Tailwind CSS** - Primary utility-first CSS framework
   - Used for layout, spacing, responsive design
   - Provides consistent design tokens

2. **CSS Modules** - Component-scoped styles
   - Files: `*.module.css`
   - Used for complex animations, specific component styling
   - Prevents CSS conflicts between components

3. **Inline/Dynamic Styles** - For animation and state-based styling
   - Framer Motion for declarative animations
   - State-based conditional styling

### Color Palette

**Primary Colors**
- **White (#ffffff)** - Primary light text and backgrounds
- **Black (#000000)** - Dark text on light backgrounds
- **Yellow/Gold (#fbbf24, #FBBF24)** - Accent, CTAs, highlights

**Secondary Grays** (for hierarchy)
- `#F1F1F1` - High contrast secondary text
- `#cccccc` - Medium gray
- `#9a9a9a` - Muted text
- Various Tailwind gray scales for flexibility

**Tailwind Text Classes Used**
- `text-white` - Light text
- `text-gray-200`, `text-gray-300`, `text-gray-500` - Gray variations
- `text-yellow-400` - Accent color
- `text-blue-600`, `text-blue-700` - Form focus states (login/signup)

### CSS Structure Examples

**hero.module.css** - Hero section animations and layout
**hero1.module.css** - Alternative hero styling
**FaqAccordion.module.css** - Accordion animations and states
**styleStack.module.css** - Stack/technology card styling
**Testimonials.css** - Testimonial section layout
**styleBlog.module.css** - Blog-specific styling

---

## ⚡ Key Features

### 1. **Responsive Design**
- Mobile-first approach
- Desktop/tablet-optimized layouts
- Touch-friendly mobile navigation

### 2. **Smooth Animations**
- Framer Motion for component transitions
- GSAP for complex animation sequences
- Scroll-triggered animations
- Hover effects and micro-interactions

### 3. **Interactive Components**
- Expandable FAQ accordion
- Image carousels (Swiper)
- Dropdown menus
- Modal dialogs

### 4. **Authentication System**
- Login/Signup pages
- Auth context for state management
- Protected user dropdowns
- Logout functionality

### 5. **Content Management**
- Structured data for easy updates
- Dynamic component rendering from data
- Flexible card components for various content types

### 6. **SEO-Friendly**
- Semantic HTML structure
- Proper heading hierarchy
- Multiple pages for crawlability

### 7. **Performance Optimized**
- Vite for fast development and builds
- Code splitting via React Router
- Lazy loading support

---

## 🔐 Authentication System

### Structure

**auth.jsx** (Context Provider)
```
- useAuth() hook - Access authentication state
- isLoggedIn - Boolean flag for login state
- user - User object with profile information
- AuthProvider - Wraps app for global auth access
```

### Implementation

1. **Header.jsx** integrates authentication:
   - Displays user dropdown when logged in
   - Shows login/signup links when not authenticated
   - Handles logout action

2. **Login/Signup Flow**:
   - `login.jsx` - Login form and logic
   - `signup.jsx` - Registration form and logic
   - `logout.jsx` - Logout handler

### Usage

```jsx
import { useAuth } from "./store/auth";

const MyComponent = () => {
  const { isLoggedIn, user } = useAuth();
  
  if (isLoggedIn) {
    return <p>Welcome, {user.name}</p>;
  }
  return <a href="/login">Login</a>;
};
```

---

## 🚀 Build & Development

### Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `vite` | Start development server with hot reload |
| `build` | `vite build` | Production build (optimized & minified) |
| `lint` | `eslint .` | Check code quality and styling issues |
| `preview` | `vite preview` | Preview production build locally |

### Development Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   - Server runs on `http://localhost:5173` (default)
   - Hot reload on file changes

3. **Build for Production**
   ```bash
   npm run build
   ```
   - Output in `dist/` folder
   - Optimized and minified

### Configuration Files

- **`vite.config.js`** - Vite build configuration
- **`tailwind.config.js`** - Tailwind CSS customization
- **`postcss.config.js`** - PostCSS plugins setup
- **`eslint.config.js`** - ESLint rules and settings
- **`package.json`** - Dependencies and scripts

### Deployment

- **`public/_redirects`** - Netlify deployment routing config (for SPA routing)
- **`public/images/`** - Static image assets
- **`index.html`** - HTML entry point

---

## 📝 Summary of Accomplishments

### Completed

✅ **Full React application** with modern tooling (Vite, ESLint)  
✅ **Multi-page routing** with React Router (15+ pages)  
✅ **Responsive design** with Tailwind CSS and mobile-first approach  
✅ **Smooth animations** using Framer Motion and GSAP  
✅ **Component-based architecture** with reusable UI components  
✅ **Authentication system** with login/signup/logout  
✅ **Data management** with structured data files  
✅ **Interactive elements** (carousels, accordions, dropdowns)  
✅ **Professional design system** with consistent colors and typography  
✅ **Deployment-ready** (Netlify configuration included)  

### Key Technologies Integrated

- React 19 for modern component development
- Vite for fast builds
- Tailwind CSS for utility-based styling
- Animation libraries (Framer Motion, GSAP) for engaging UX
- Authentication context for user management
- React Router for seamless navigation

---

## 🔄 Development Workflow

### Adding New Features

1. **New Page**: Create component in `/src/pages/`, add route in `App.jsx`
2. **New Component**: Create in `/src/components/` organized by feature
3. **New Data**: Add structured data in `/src/data/`
4. **Styling**: Use Tailwind utilities; create `.module.css` for complex styles
5. **Animation**: Use Framer Motion or GSAP in component

### Best Practices

- Keep components small and focused
- Reuse UI components across pages
- Maintain consistent data structure
- Use CSS modules for component-specific styles
- Leverage Tailwind for responsive design
- Update data files for easy content management

---

## 📞 Contact & Information

For questions or modifications, refer to:
- Component documentation in `FILESTRUCTURE.md`
- Color palette details in `COLOR_PALETTE_ANALYSIS.md`
- Component files for implementation specifics
- Data files for content management

---

**Last Updated:** April 8, 2026  
**Status:** Production-Ready
