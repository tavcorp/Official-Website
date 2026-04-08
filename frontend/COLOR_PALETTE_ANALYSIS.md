# Color Palette Analysis - TAVCORP Frontend

## Overview
This document contains a comprehensive analysis of all color hex codes, CSS classes, and color values currently used in the TAVCORP frontend codebase as of April 2026.

---

## 1. TEXT/FONT COLORS

### Primary Text Colors
- **White (#ffffff, #fff)** - Primary light text
  - Used in: `[styleBlog.module.css](src/pages/styleBlog.module.css)`, `[hero1.module.css](src/components/hero/hero1.module.css)`, multiple JSX files
  - Tailwind: `text-white`
  
- **Light Gray (#f1f1f1, #cccccc, #e5e7eb)** - Secondary light text
  - `#F1F1F1` - Hero content text, high contrast
  - `#cccccc` - Medium gray tone for reduced emphasis
  - `#e5e7eb` - OurServices component defaults
  
- **Medium Grays (#b5b5b5, #9a9a9a, #d1d1d1, #cfcfcf)** - Tertiary text
  - `#b5b5b5` - Muted text (styleBlog)
  - `#9a9a9a` - Reduced contrast text
  - `#d1d1d1` - Lighter secondary text
  - `#cfcfcf` - Blog subtitle colors

- **Dark Text (#000000, #111, #222, #333)** - Text on light backgrounds
  - `#000000` - Stark black on white (styleBlog button hover)
  - `#111, #222` - Deep dark grays for light backgrounds
  - Tailwind: `text-gray-900`, `text-black`, `text-gray-800`

- **Gray Utility Texts** (Tailwind)
  - `text-gray-200` - Slightly muted white text
  - `text-gray-300` - Medium-light gray
  - `text-gray-500` - Placeholder/reduced emphasis
  - `text-gray-600` - Secondary text on light backgrounds
  - `text-gray-700` - Medium dark text
  
### Accent Text Colors
- **Yellow/Gold (#fbbf24, #FBBF24, #facc15)** - Call-to-action text
  - `#fbbf24` (Tailwind: `text-yellow-400`) - Primary accent
  - `#facc15` - TestimonialsCard accent
  - Used for: Links, active states, focus text
  - Files: Header hover state, OurServices active color, Articles link

- **Blue (#0066cc, #003d99)** - Form/input focus states (legacy)
  - `text-blue-700` / `text-blue-600` - Used in login/signup pages
  - Tailwind: `text-blue-600`, `text-blue-700`

---

## 2. BACKGROUND COLORS

### Dark Backgrounds (Primary Brand Darkness)
- **Near Black (#0b0b0b, #010101)** - Darkest backgrounds
  - `#0b0b0b` - Blog page background
  - `#010101` - Footer background
  - Tailwind: `bg-black`

- **Very Dark Gray (#0a0a0a)** - FAQ container backgrounds
  - `#0a0a0a` - FaqAccordion background
  - Creates deep contrast with light text

- **Dark Gray (#1B1B1B, #121212, #111111)** - Container/section backgrounds
  - `#1B1B1B` - Hero sections, button bases
  - `#121212` - Contact form background (bg-[#121212])
  - `#111111` - Input fields (bg-[#111])
  - Tailwind: `bg-[#1B1B1B]`, `bg-[#121212]`, `bg-[#111111]`

- **Slightly Lighter Dark (#181818, #1c1c1c, #212325)** - Secondary containers
  - `#181818` - Testimonials card background
  - `#1c1c1c` - Contact form container, header nav (bg-[#1c1c1c])
  - `#212325` - Testimonials section container
  - `#2a2a2a` - FAQ content area background

- **Medium Dark Gray (#262626)** - Articles section
  - `#262626` - ArticlesPreview background

### Light Backgrounds
- **White (#ffffff, #fff)** - Light sections
  - Tailwind: `bg-white`
  - Used in: Work page cards, FAQs, blog pages, AboutUs cards
  
- **Off-White/Light Gray (#f5f5f5, #f8fafc)** - Subtle light backgrounds
  - `rgb(245, 245, 245)` - Stack card container (UIStackCard)
  - `#f8fafc` - FAQ light text background
  - Tailwind: `bg-gray-50`, `bg-gray-100`

- **Neutral Light Gray (#d1d5db)** - Placeholder/secondary light elements
  - `#d1d5db` - Featured carousel inactive dot color
  - Alternate use in grey areas

### Orange/Gold Backgrounds
- **Rich Orange (#DF9931, #E09D38, #E8A649, #d3912f, #e09b36)** - Brand accent backgrounds
  - `#DF9931` - Primary brand orange in hero section, buttons, accents
  - `#E09D38` - Hero gradient start
  - `#E8A649` - Hover state on orange buttons
  - `#d3912f` - Stack card button background
  - `#b87a24` - Darker orange hover state (button hover)
  - `#e09b36` - FAQ expanded state background
  - Tailwind: `bg-yellow-400`, `bg-amber-400`

- **Gold/Yellow (#fbbf24, #facc15)** - Bright accent
  - `#fbbf24` - Featured carousel active dot
  - `#facc15` - Testimonials carousel active indicator
  - Tailwind: `bg-yellow-400`, `hover:bg-yellow-400`, `hover:bg-yellow-500`

### Gradient Backgrounds
- **Hero Gradient (Dark to Orange)**
  - `linear-gradient(192deg, #1B1B1B 37%, rgba(139, 100, 38, 0.8) 49%, #DF9931 73%)`
  - Dark brown start → Transparent bronze → Bright orange
  - Files: [hero1.module.css](src/components/hero/hero1.module.css)

- **Hero Gradient (Orange to White)**
  - `linear-gradient(190deg, rgba(224, 157, 56, 1) 40%, rgba(255, 255, 255, 1) 63%)`
  - Gold → White (transitional feel)
  - Files: [hero.module.css](src/components/hero/hero.module.css)

- **Header Gradient (Fade)**
  - `linear-gradient(90deg, #24211d 0%, rgba(36,33,29,0.6) 40%, rgba(36,33,29,0.15) 70%, transparent 100%)`
  - Dark brown translucent fade (navigation effect)
  - Files: [Header.jsx](src/components/layout/Header.jsx)

---

## 3. BORDER COLORS

### White/Light Borders
- **#ffffff** - White borders
  - Tailwind: `border-white`
  - Used in: Blog button borders, testimonial card borders (white/20)

- **#e5e7eb** - Light gray border
  - Tailwind: `border-gray-200`

- **Gray Borders (Tailwind)**
  - `border-gray-600` - Medium contrast borders
  - `border-gray-700` - Darker borders on dark backgrounds
  - `border-gray-800` - Deep borders for high contrast

### Orange/Yellow Borders
- **#DF9931** - Orange accent borders
  - Used in: Hero buttons, feature icons
  - Tailwind: `border-amber-400` (some instances)

- **#fbbf24, #facc15** - Yellow accent borders
  - Tailwind: `border-yellow-400`
  - Used in: Pricing cards, service buttons

### Transparent Borders
- **rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.07)** - Subtle dark borders
  - Used in: Stack card subtly defined edges
  
- **rgba(255, 255, 255, 0.1), rgba(241, 241, 241, 0.1)** - Subtle light borders
  - Used in: Dark mode dividers, hero sections
  - `border-white/20` - Testimonial carousel borders (20% white opacity)

### Black Borders
- **#000000 / black** - Strong contrast borders
  - Used in: Featured carousel border, Work page CTA buttons
  - Tailwind: `border-black`

---

## 4. BUTTON/ACCENT COLORS

### Primary Brand Button (Orange)
- **Background**: `#DF9931`
- **Hover**: `#E8A649` (lighter) or `#b87a24` (darker)
- **Text**: `#1B1B1B` (dark text on orange)
- **Border**: `#DF9931` (matching background)
- Used in: Hero CTA buttons, key actions
- File: [hero1.module.css](src/components/hero/hero1.module.css)

### Secondary Button (Yellow)
- **Background**: `#fbbf24` / `#facc15`
- **Hover**: `#fbbf24` (slightly lighter)
- **Text**: Black
- **Files**: Contact form submit, ServicesPlan buttons
- Tailwind: `bg-yellow-400`, `hover:bg-yellow-500`

### Dark Button (Black)
- **Background**: `#000000` / `#1B1B1B` / `#111111`
- **Hover**: `#1a1a1a` / `#111111` / `#000000` (slightly lighter or darker)
- **Text**: `#ffffff`
- Used in: Work, News, FAQs CTAs, StartProject
- Tailwind: `bg-black`, `hover:bg-gray-800`

### Blue Button (Legacy - Auth Pages)
- **Background**: `#0066cc` (Blue 700)
- **Hover**: `#003d99` (Blue 600)
- **Text**: White
- **Focus Ring**: `focus:ring-blue-300`
- Used in: Login/Signup forms
- Tailwind: `bg-blue-700`, `hover:bg-blue-600`, `focus:ring-blue-300`

### Outline Button (Yellow Border)
- **Background**: Transparent
- **Border**: `#fbbf24` / `#FBBF24` (yellow)
- **Text**: `#FBBF24`
- **Hover**: Filled with yellow
- Used in: OurServices section buttons
- Tailwind: `border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black`

### White Button
- **Background**: `#ffffff`
- **Hover**: `#f3f4f6` / `#e5e7eb` (slightly darker)
- **Text**: `#000000` / black
- Used in: AboutUs CTA, pricing buttons
- Tailwind: `bg-white`, `text-black`, `hover:bg-gray-200`

---

## 5. GRADIENT COLORS

### Multi-stop Gradients
1. **Dark-to-Orange Heroes**
   - Start: `#1B1B1B` (or `#24211d`)
   - Mid: `rgba(139, 100, 38, 0.8)` (translucent brown)
   - End: `#DF9931` (bright orange)
   - Direction: 192deg
   - Effect: Deep contrast to energetic accent

2. **Orange-to-White Soft**
   - Start: `rgba(224, 157, 56, 1)` (#E09D38)
   - End: `rgba(255, 255, 255, 1)` (white)
   - Direction: 190deg
   - Effect: Warm to light transition

3. **Navigation Fade**
   - Color: Brown `#24211d` → `rgba(36, 33, 29, 0.6)` → transparent
   - Direction: 90deg (linear horizontal)
   - Effect: Dark to invisible fade for text overlay

---

## 6. RGBA/OPACITY COLORS

### White with Opacity
- **rgba(255, 255, 255, 0.1)** - Very subtle white
  - Used in: Border dividers, subtle separators
- **rgba(255, 255, 255, 0.05)** - Barely visible white
  - Hover effects on testimonials
- **white/20, white/30, white/50** - Bootstrap opacity utilities (Tailwind)
  - `bg-white/5`, `bg-white/20` - Hover states
  - `border-white/20` - Subtle borders

### Black with Opacity
- **rgba(0, 0, 0, 0.06)** - Very subtle black
  - Used in: Subtle border, minimal definition
- **rgba(0, 0, 0, 0.07)** - Slightly stronger black
  - Used in: Stack card border definition
- **rgba(0, 0, 0, 0.2)** - Box shadow adjustment
  - Used in: Shadow definitions

### Brown/Warm Opacity
- **rgba(139, 100, 38, 0.8)** - Translucent warm brown
  - Used in: Gradient midpoints

---

## 7. BY-LOCATION COLOR USAGE

### Hero Section Colors
- **Primary**: `#1B1B1B` background, `#DF9931` orange accents
- **Text**: `#F1F1F1`, `#ffffff`, `#cccccc`
- **Buttons**: Orange `#DF9931` with dark text, dark outline buttons
- **Border Accents**: `#DF9931`
- **Icon Colors**: Orange `#DF9931` (social icons)

### Navigation/Header Colors
- **Background**: `#1c1c1c`, `#111`
- **Text**: `#ffffff`, `#e5e7eb` (default), `#FBBF24` (active)
- **Hover**: `#FBBF24`, `hover:text-yellow-400`
- **Mobile Nav**: `#1c1c1c` background, `hover:bg-gray-800`

### Footer Colors
- **Background**: `#010101` (near black)
- **Text**: `text-gray-200`, `text-gray-300` (hover: `hover:text-white`)
- **Divider**: `#545454` (newsletter input background)

### Form (Login/Signup) Colors
- **Background**: `bg-white`, `bg-gray-100`
- **Input**: `border border-gray-300`, `bg-[#111]` (dark form), `focus:ring-blue-700`
- **Error**: `border-red-500`, `text-red-500`, `focus:ring-red-500`
- **Button**: Blue (legacy) or `bg-blue-700`

### Contact Form Colors
- **Background**: `bg-[#121212]`, `bg-[#1c1c1c]`
- **Input**: `bg-[#111]`, `border border-gray-700`, `focus:ring-yellow-400`
- **Submit**: `bg-yellow-400`, `text-black`, `hover:bg-yellow-500`

### FAQ Accordion Colors
- **Background**: `bg-[#0a0a0a]` (container), `bg-[#2a2a2a]` (content)
- **Text**: `text-[#f8fafc]`
- **Accent**: `text-[#fbbf24]`, `bg-[#e09b36]` (expanded)
- **Divider**: Not explicitly colored

### Pricing/Cards Section Colors
- **Card Background**: `bg-[#101010]`, `bg-white`
- **Card Border**: `border-gray-800`, `border-yellow-400`
- **Text**: Default theme colors
- **Hover**: `hover:border-yellow-400`

### Testimonials Colors
- **Container Background**: `bg-[#181818]`, `bg-[#212325]`
- **Avatar Background**: `bg-[#212325]`
- **Border**: `border-white/20`
- **Active Indicator**: `bg-[#facc15]`
- **Inactive Indicator**: `bg-[#777]` (gray)

### Article/Blog Colors
- **Background**: `bg-[#262626]`
- **Title Text Color**: `text-yellow-400`
- **Card Divider**: `bg-white/30` (hover: `hover:bg-white/50`)

### Featured Section Colors
- **Inactive Dot**: `background-color: #d1d5db`
- **Active Dot**: `background-color: #fbbf24`

### OurServices Section Colors
- **Default Text**: `#ffffff`
- **Active Text**: `#FBBF24` (yellow)
- **Button Border**: `border-amber-400`
- **Default Icon**: `#e5e7eb`
- **Active Icon**: `#FBBF24`

---

## 8. FOCUS/HOVER STATES

### Ring/Focus Colors (Tailwind)
- **focus:ring-yellow-400** - Primary focus indicator
- **focus:ring-blue-300** - Legacy blue focus (auth pages)
- **focus:ring-blue-700** - Alternative blue focus
- **focus:ring-red-500** - Error state focus

### Hover State Patterns
- **Text Hover**: Change to yellow or white
  - `hover:text-yellow-400`
  - `hover:text-white`
  
- **Background Hover**: Darken or lighten
  - `hover:bg-black` or `hover:bg-gray-800` (on dark)
  - `hover:bg-gray-200` (on light)
  - `hover:bg-white/5` (subtle overlay)
  - `hover:bg-yellow-400` / `hover:bg-yellow-500`
  
- **Border Hover**: Accent color shift
  - `hover:border-yellow-400`

---

## 9. CURRENT TAILWIND COLOR UTILITIES IN USE

### Text Colors
- `text-white`, `text-black`, `text-gray-200` through `text-gray-900`
- `text-blue-600`, `text-blue-700`
- `text-yellow-400`, `text-amber-400`, `text-red-500`

### Background Colors
- `bg-white`, `bg-black`, `bg-gray-50` through `bg-gray-800`
- `bg-blue-700`, `bg-blue-200`
- `bg-yellow-400`, `bg-amber-400`
- `bg-red-500` (error states)
- Custom: `bg-[#121212]`, `bg-[#1c1c1c]`, `bg-[#111]`, `bg-[#010101]`, etc.

### Border Colors
- `border-white`, `border-black`
- `border-gray-300` through `border-gray-800`
- `border-yellow-400`, `border-amber-400`
- `border-red-500` (error)

### Ring/Focus
- `focus:ring-2` with colors: `ring-yellow-400`, `ring-blue-300`, `ring-blue-700`, `ring-red-500`

### Opacity Utilities
- `white/5`, `white/10`, `white/20`, `white/30`, `white/50` (with opacity)

---

## 10. COLOR GROUPS FOR SYSTEMATIC REPLACEMENT

### Group 1: Primary Orange/Yellow Accents
**Current**: `#DF9931`, `#E8A649`, `#E09D38`, `#d3912f`, `#b87a24`, `#fbbf24`, `#facc15`, `#e09b36`
**Usage**: All accent buttons, highlights, active states, icons
**Replace with**: [NEW BRAND PRIMARY]

### Group 2: Dark Backgrounds
**Current**: `#0b0b0b`, `#010101`, `#0a0a0a`, `#1B1B1B`, `#121212`, `#111111`, `#181818`, `#1c1c1c`, `#212325`, `#2a2a2a`, `#262626`
**Usage**: Containers, sections, inputs on dark theme
**Replace with**: [NEW BRAND DARK PALETTE]

### Group 3: Light Text/White
**Current**: `#ffffff`, `#F1F1F1`, `#cccccc`, `#f8fafc`, `#e5e7eb`, `white`
**Usage**: Primary text on dark backgrounds
**Note**: Likely stays white, but check for brand adjustments

### Group 4: Gray Neutrals
**Current**: `#b5b5b5`, `#9a9a9a`, `#d1d1d1`, `#cfcfcf`, `#777`, `#555`, `#222`, `#111`, plus Tailwind `gray-*`
**Usage**: Secondary text, inactive states, subtle elements
**Replace with**: [NEW BRAND GRAY PALETTE]

### Group 5: Legacy Blue (Auth Forms)
**Current**: `#0066cc` (blue-700), `#003d99` (blue-600), `#blue-300`, `#blue-200`
**Usage**: Login/Signup forms, legacy code
**Decision**: Replace with brand colors or keep for specific context

---

## 11. IMPLEMENTATION NOTES FOR COLOR MIGRATION

### Files Requiring Attention
1. **CSS Module Files** (Direct hex values):
   - [styleBlog.module.css](src/pages/styleBlog.module.css) - 14 color references
   - [hero1.module.css](src/components/hero/hero1.module.css) - 20+ color references
   - [hero.module.css](src/components/hero/hero.module.css) - Gradient colors
   - [FaqAccordion.module.css](src/components/faq/FaqAccordion.module.css) - 8 color references
   - [styleStack.module.css](src/components/ui/styleStack.module.css) - 8 color references
   - [featured.css](src/components/featured/featured.css) - Dot colors
   - [Testimonials.css](src/components/testimonials/Testimonials.css) - 3 color references

2. **JSX Files** (Inline colors in className):
   - [Header.jsx](src/components/layout/Header.jsx) - `bg-[#...]` custom colors
   - [Contact.jsx](src/pages/Contact.jsx) - Form colors
   - [OurServices.jsx](src/components/ourServices/OurServices.jsx) - Inline color styles
   - [Footer.jsx](src/components/layout/Footer.jsx) - Footer styling

3. **JSX Files** (Inline style objects):
   - [Hero1.jsx](src/components/hero/Hero1.jsx) - Icon colors `#DF9931`
   - [OurServices.jsx](src/components/ourServices/OurServices.jsx) - Dynamic color logic

### Tailwind Migration Opportunity
Consider extending Tailwind config with brand colors:
```javascript
// tailwind.config.js
colors: {
  primary: '#DF9931',      // Current brand orange
  secondary: '#1B1B1B',    // Current dark
  accent: '#fbbf24',       // Current highlight
  neutral: { /* gray palette */ }
}
```

Then replace hardcoded colors with Tailwind utilities.

---

## 12. SUMMARY TABLE

| Category | Current Colors | Frequency | Files |
|----------|---|---|---|
| **Text** | #ffffff, #F1F1F1, #cccccc, #e5e7eb | Very High | Most files |
| **Backgrounds (Dark)** | #0b0b0b, #010101, #1B1B1B, #121212 | High | Components & Pages |
| **Backgrounds (Orange)** | #DF9931, #E8A649, #fbbf24 | High | Hero, Buttons, Accents |
| **Borders** | #ffffff, #DF9931, gray-700, gray-800 | Medium | Cards, Forms |
| **Buttons** | Orange, Yellow, Black, Blue | High | Throughout |
| **Gradients** | 3 main gradients | Medium | Hero sections |
| **Opacity** | rgba with 0.06-0.8 alpha | Medium | Subtle Effects |

---

## Next Steps

1. Define new brand palette colors
2. Create mapping document (old → new hex codes)
3. Use find-and-replace in CSS files
4. Update Tailwind config with brand colors
5. Audit all inline style colors in JSX
6. Test gradient compatibility
7. Verify contrast ratios for accessibility

