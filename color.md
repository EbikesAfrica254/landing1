# Ebikes Africa - Design System & UX Documentation

## Overview
This document outlines the color palette, design tokens, UI/UX patterns, and overall user experience strategy for the Ebikes Africa web application.

---

## Brand Identity & Feel

### Core Brand Values
- **Sustainable**: Eco-friendly electric mobility solutions
- **Modern**: Cutting-edge technology and AI integration
- **Accessible**: Solutions for everyone from individuals to corporations
- **African**: Built for African cities and communities

### Visual Personality
- Clean and professional
- Energetic yet trustworthy
- Tech-forward with natural undertones
- Bold and confident

---

## Color Palette

### Primary Colors

#### Primary Green (`--primary`)
- **Light Mode**: `hsl(142, 76%, 36%)` - Vibrant emerald green
- **Dark Mode**: `hsl(142, 76%, 45%)` - Lighter emerald green
- **Usage**: Main brand color, CTAs, interactive elements, links
- **Symbolism**: Sustainability, growth, eco-friendly mobility, energy
- **Foreground**: White (`hsl(0, 0%, 100%)`) for optimal contrast

#### Secondary Dark Blue (`--secondary`)
- **Light Mode**: `hsl(220, 40%, 20%)` - Deep navy blue
- **Dark Mode**: `hsl(220, 40%, 20%)` - Consistent deep navy
- **Usage**: Alternative buttons, headers, important sections
- **Symbolism**: Trust, professionalism, technology, stability
- **Foreground**: White for clear readability

#### Accent Orange (`--accent`)
- **Light Mode**: `hsl(32, 95%, 55%)` - Vibrant orange
- **Dark Mode**: `hsl(32, 95%, 60%)` - Slightly brighter orange
- **Usage**: Highlights, badges, notifications, special offers
- **Symbolism**: Energy, enthusiasm, action, warmth
- **Foreground**: Dark (`hsl(220, 20%, 10%)`) for strong contrast

### Neutral Colors

#### Background
- **Light Mode**: `hsl(0, 0%, 100%)` - Pure white
- **Dark Mode**: `hsl(220, 40%, 8%)` - Very dark blue-black
- **Usage**: Main page background, content areas

#### Foreground (Text)
- **Light Mode**: `hsl(220, 20%, 10%)` - Almost black with blue tint
- **Dark Mode**: `hsl(0, 0%, 98%)` - Off-white
- **Usage**: Primary text content

#### Muted
- **Light Mode**: `hsl(210, 40%, 96.1%)` - Very light blue-gray
- **Dark Mode**: `hsl(220, 30%, 15%)` - Dark blue-gray
- **Usage**: Secondary backgrounds, disabled states, subtle sections
- **Foreground**: 
  - Light: `hsl(215.4, 16.3%, 46.9%)` - Medium gray-blue
  - Dark: `hsl(215, 20.2%, 65.1%)` - Light gray-blue

### Functional Colors

#### Destructive (Error/Warning)
- **Light Mode**: `hsl(0, 84.2%, 60.2%)` - Bright red
- **Dark Mode**: `hsl(0, 62.8%, 50.6%)` - Deeper red
- **Usage**: Error messages, delete actions, warnings
- **Foreground**: White for visibility

#### Border & Input
- **Light Mode**: `hsl(214.3, 31.8%, 91.4%)` - Light gray-blue
- **Dark Mode**: `hsl(220, 30%, 18%)` - Dark gray-blue
- **Usage**: Borders, input fields, separators

#### Ring (Focus States)
- **Light Mode**: `hsl(142, 76%, 36%)` - Matches primary
- **Dark Mode**: `hsl(142, 76%, 45%)` - Matches primary
- **Usage**: Focus indicators, keyboard navigation

### Cards & Popovers
- **Light Mode**: White background with dark text
- **Dark Mode**: `hsl(220, 40%, 12%)` - Slightly lighter than main background
- **Usage**: Elevated surfaces, dialogs, dropdowns

---

## Design Tokens & Gradients

### Gradient Primary
```css
--gradient-primary: linear-gradient(135deg, hsl(142 76% 36%), hsl(142 76% 45%));
```
- **Usage**: Hero sections, premium features, special CTAs
- **Effect**: Smooth green gradient from primary to lighter shade

### Gradient Hero
```css
--gradient-hero: linear-gradient(135deg, hsl(0 0% 0% / 0.1), hsl(0 0% 10% / 0.1));
```
- **Usage**: Overlay on hero images for text readability
- **Effect**: Subtle dark gradient overlay

---

## Typography

### Font Family
- **Primary**: Montserrat (sans-serif)
- **Fallback**: System sans-serif
- **Characteristics**: Modern, clean, highly readable, professional

### Type Scale
- **Hero Headings**: `text-5xl md:text-7xl` (48px → 72px)
- **Section Headings**: `text-3xl md:text-4xl` (30px → 36px)
- **Subheadings**: `text-2xl md:text-3xl` (24px → 30px)
- **Body Large**: `text-lg` (18px)
- **Body**: `text-base` (16px)
- **Small**: `text-sm` (14px)

### Font Weights
- **Bold**: 700 (headings, important text)
- **Semibold**: 600 (subheadings, emphasis)
- **Regular**: 400 (body text)

---

## Spacing & Layout

### Container System
- **Width**: 94% of viewport
- **Max Width**: 1200px
- **Centering**: Auto margins
- **Padding**: Responsive based on screen size

### Border Radius
- **Standard**: `0.5rem` (8px)
- **Usage**: Consistent across buttons, cards, inputs
- **Effect**: Modern, friendly, approachable

---

## UI/UX Patterns

### Button Variants

#### Default (Primary)
- Green background with white text
- Used for primary actions (Get Started, Subscribe)
- Hover state: Slightly darker green

#### Outline
- Transparent background with border
- Text matches foreground color
- Used for secondary actions (Learn More)
- **Note**: Custom variants needed for hero section (white text on dark backgrounds)

#### Secondary
- Dark navy background with white text
- Used for alternative primary actions
- Professional and trustworthy appearance

### Interactive Elements

#### Hover Effects
- Smooth transitions (`transition-all duration-300`)
- Transform effects (scale, translate)
- Opacity changes
- Color shifts

#### Focus States
- Visible ring around focused elements
- Matches primary color for brand consistency
- Ensures keyboard accessibility

### Animation & Motion

#### Hero Section
- Parallax scrolling effect on background images
- Image carousel (7-second intervals)
- Text rotation for messaging variety
- Smooth fade transitions

#### Trust Badges
- Horizontal scroll animation on hover
- Seamless looping for continuous motion
- 20-second animation duration
- Pauses when not hovering

#### Scroll Behavior
- Smooth scrolling enabled
- Parallax effects for depth
- ScrollToTop component for navigation

---

## User Experience Strategy

### Information Architecture
1. **Hero Section** (70-80% viewport height)
   - Immediate value proposition
   - Rotating messaging for different audiences
   - Dual CTAs (primary and secondary)
   
2. **Trust Badges** (20-30% viewport height)
   - Social proof through partner logos
   - Interactive on hover
   - Builds credibility immediately

3. **Content Sections**
   - Clear hierarchy and spacing
   - Alternating layouts for visual interest
   - Persona-based targeting

### Navigation Patterns
- **Top Navigation**: Desktop primary navigation
- **Bottom Navigation**: Mobile-optimized access
- **Sticky Elements**: Always accessible navigation
- **ScrollToTop**: Quick return to top on long pages

### Responsive Design

#### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

#### Mobile-First Approach
- Flex direction changes (column → row)
- Text size scaling
- Touch-friendly interactive elements (min 44px)
- Optimized image loading

### Accessibility

#### Color Contrast
- WCAG AA compliant contrast ratios
- White text on green/navy backgrounds
- Dark text on white/light backgrounds
- Tested for colorblind users

#### Keyboard Navigation
- Visible focus states
- Logical tab order
- Skip links available
- Semantic HTML structure

#### Screen Readers
- Semantic HTML elements
- ARIA labels where needed
- Alt text for all images
- Descriptive link text

---

## Content Strategy

### Voice & Tone
- **Professional**: Builds trust with businesses
- **Approachable**: Welcomes individual users
- **Inspiring**: Communicates vision for sustainable mobility
- **Clear**: Avoids jargon, explains benefits simply

### Messaging Hierarchy
1. **Primary**: Sustainability and technology
2. **Secondary**: Affordability and accessibility
3. **Tertiary**: Local expertise and support

---

## Dark Mode Strategy

### Approach
- **System Preference**: Automatically detects user preference
- **Manual Toggle**: Users can override system setting
- **Persistent**: Choice saved across sessions

### Dark Mode Adjustments
- Background shifts from white to very dark blue-black
- Text inverts for optimal readability
- Primary green becomes slightly lighter for better visibility
- Borders and shadows adjusted for depth perception
- Images maintain vibrancy with adjusted overlays

### Contrast Ratios
- Carefully calibrated for both modes
- Maintains WCAG AA compliance
- Tested for eye strain and readability

---

## Performance Considerations

### Image Optimization
- Lazy loading for below-fold images
- Multiple image sizes for different viewports
- WebP format with fallbacks
- Carousel preloading for smooth transitions

### Animation Performance
- GPU-accelerated transforms
- `will-change` property for animations
- Reduced motion support for accessibility
- Efficient CSS animations over JavaScript

---

## Future Considerations

### Potential Enhancements
- Custom color theme generator for white-label partners
- Expanded color palette for product categories
- Animation library for micro-interactions
- Component-level dark mode customization
- A/B testing variants for conversion optimization

### Brand Evolution
- Colors can be adjusted in `src/index.css`
- All components use semantic tokens
- Changes propagate automatically
- Maintains consistency across application

---

## Implementation Notes

### For Developers
- All colors defined in `src/index.css`
- Tailwind config extends base tokens
- Never use direct colors (e.g., `text-white`, `bg-black`)
- Always use semantic tokens (e.g., `text-primary`, `bg-background`)
- HSL format required for all colors

### For Designers
- Design system is component-based
- Variants defined in component files
- Shadcn UI components customizable
- Maintain semantic token usage
- Document new patterns in this file

---

**Last Updated**: Based on current build
**Version**: 1.0
**Maintained By**: Ebikes Africa Development Team
