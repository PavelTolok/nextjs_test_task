# Project Structure

## Overview

This is a Next.js 16 application built with TypeScript and SCSS, implementing a gift card e-commerce platform called "Giftora".

## Technology Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript 5
- **Styling**: SCSS
- **React**: 19.2.3

## Project Structure

```
tolok_test_task_nextjs/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                  # Main page (server component)
│   ├── HomePageClient.tsx       # Client component wrapper
│   └── globals.scss             # Global styles
├── src/
│   ├── components/              # React components
│   │   ├── Header/              # Header with navigation
│   │   ├── Hero/                # Hero section
│   │   ├── Products/            # Products listing with filters
│   │   ├── Brands/              # Brands showcase
│   │   ├── Tips/                # Deals/Tips section
│   │   ├── Contact/             # Contact form
│   │   └── Footer/              # Footer component
│   ├── data/
│   │   └── catalog.json         # Products and brands data
│   ├── i18n/
│   │   └── translations.ts      # Translation dictionary
│   └── types/
│       └── catalog.ts           # TypeScript types
├── public/
│   └── images/                  # Image assets
│       ├── products/            # Product images
│       └── brands/              # Brand logos
└── package.json
```

## Key Features

### 1. Header Component
- Sticky header with top bar
- Responsive navigation menu
- Mobile hamburger menu
- Cart and account buttons

### 2. Hero Section
- Welcome message
- Search functionality (UI only)
- Call-to-action buttons

### 3. Products Section
- Grid layout of product cards
- Responsive design
- Image placeholders ready

### 4. Brands Section
- Logo display
- Click to filter products
- Smooth scroll to products section

### 5. Contact Form
- Name, email, message fields
- Form validation (required + email format)
- Success message display
- Client-side only (no server submission)

### 6. Footer
- Navigation links
- Copyright information

## Data Management

- **Catalog Data**: Stored in `src/data/catalog.json`
- **Products**: Array of product objects with id, title, brandId, image, price
- **Brands**: Array of brand objects with id, title, logo
- All data is loaded server-side and passed to client components

## Internationalization

- Translation dictionary in `src/i18n/translations.ts`
- Supports English and Ukrainian
- All UI texts prepared for translation
- Currently using English as default locale

## Styling

- SCSS modules for component-scoped styles
- Responsive design (mobile-first approach)
- Modern, clean design matching the provided mockup
- Consistent color scheme and typography

## Component Architecture

- **Server Components**: Used for data fetching (`page.tsx`)
- **Client Components**: Used for interactivity (forms, filters, menus)
- **Separation of Concerns**: Clear separation between data and presentation
- **Reusable Components**: Modular component structure

## State Management

- React hooks for local state
- Props drilling for shared state between components

## Image Handling

- Next.js Image component for optimization
- Placeholder paths configured
- See `IMAGES_GUIDE.md` for adding actual images

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Next Steps

1. Add actual product and brand images (see `IMAGES_GUIDE.md`)
2. Implement actual search functionality
3. Add shopping cart functionality
4. Connect contact form to backend/email service
5. Add more language translations
6. Implement user authentication
7. Add product detail pages

## Code Quality

- TypeScript strict mode enabled
- Component-based architecture
- No code duplication
- Clean, maintainable code structure
- Responsive and accessible design
