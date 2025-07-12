# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static dental clinic website for "Klinik Pergigian Razz" in Johor Bahru, Malaysia. It's a single-page HTML website with custom CSS and JavaScript, designed to showcase dental services and enable appointment booking.

## Technology Stack

- **HTML5**: Single-page application with semantic markup and comprehensive SEO optimization
- **Tailwind CSS v3.3.5**: Utility-first CSS framework for styling
- **JavaScript (ES6+)**: Vanilla JavaScript for interactions and form handling
- **Swiper.js**: For testimonial and blog post carousels
- **External CDNs**: Swiper.js loaded from jsdelivr CDN

## Architecture & File Structure

### Core Files
- `index.html` - Main landing page with complete dental clinic information
- `styles/main.css` - Tailwind CSS build output
- `scripts/main.js` - Custom JavaScript for interactions
- `requirement.md` - Business requirements and content specifications

### Assets Organization
- `assets/images/` - All images (logos, services, team photos, icons)
- `assets/fonts/` - EudoxusSans font family in WOFF2 format
- `manifest.json` - PWA manifest for mobile app-like experience
- `sitemap.xml` - SEO sitemap
- `robots.txt` - Search engine crawler directives

## Key Features & Functionality

### Mobile-First Design
- Responsive layout with Tailwind breakpoints
- Mobile menu with overlay and smooth animations
- Touch-friendly interactions

### SEO Optimization
- Comprehensive meta tags (Open Graph, Twitter Cards, geo tags)
- Structured data (JSON-LD) for local business, services, FAQs
- Multiple schema types: Dentist, MedicalProcedure, FAQPage, BreadcrumbList

### Interactive Elements
- Contact form that redirects to WhatsApp
- Social media links with mobile app deep-linking
- Map integration with multiple navigation app support
- Smooth scrolling anchor navigation
- Service hover animations

### Contact Integration
- WhatsApp integration for appointment booking
- Phone numbers: 07-362 0191 / 014-344 2294
- Email: razzdental@gmail.com
- Address with map links to multiple navigation apps

## Development Workflow

### No Build Process
This is a static website with no build system. Files are served directly:
- Open `index.html` in browser for local development
- CSS is pre-built Tailwind (no compilation needed)
- JavaScript is vanilla ES6+ (no transpilation required)

### Making Changes
1. **Content Updates**: Edit `index.html` directly
2. **Styling**: Modify Tailwind classes in HTML or add custom CSS to `main.css`
3. **Interactions**: Update `scripts/main.js` for new functionality
4. **Images**: Add to `assets/images/` and reference in HTML

### Testing
- Test mobile responsiveness across devices
- Verify contact form WhatsApp integration
- Check social media deep-linking on mobile devices
- Validate SEO markup with structured data testing tools

## Important Business Context

### Client Information
- **Business**: Klinik Pergigian Razz (dental clinic)
- **Location**: Johor Bahru, Malaysia
- **Services**: Comprehensive dental care (basic treatment, cosmetics, orthodontics, dentures)
- **Operating Hours**: 9:00 AM - 6:00 PM daily

### Contact Preferences
- Primary contact method: WhatsApp (014-344 2294)
- Form submissions redirect to WhatsApp with pre-formatted messages
- Social media presence: Instagram (@razzdental), TikTok (@razzdental), Facebook (klinikpergigianrazz)

## Code Conventions

### HTML Structure
- Semantic HTML5 elements
- Comprehensive accessibility attributes
- SEO-optimized meta tags and structured data
- Mobile-first responsive design

### CSS Approach
- Tailwind utility classes for styling
- Custom CSS for complex animations and Swiper customization
- BEM-like naming for custom components (testimonial-card, services-item)

### JavaScript Patterns
- Vanilla JavaScript (no frameworks)
- Event delegation for dynamic elements
- Mobile detection for platform-specific behaviors
- Progressive enhancement approach

## Deployment Notes

This is a static website that can be deployed to any web server or CDN. No server-side processing required. The domain mentioned in requirements is `razzdental.com.my` but the current canonical URL in meta tags points to `klinikpergigianrazz.com`.