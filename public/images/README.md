# Images Directory

This directory contains placeholder images for products and brands.

## Structure

- `products/` - Product images (gift cards)
- `brands/` - Brand logos

## Adding Images

### Product Images
Place product images in `products/` directory with the following naming convention:
- `netflix-placeholder.jpg`
- `netflix-premium-placeholder.jpg`
- `steam-placeholder.jpg`
- `steam-50-placeholder.jpg`
- `apple-placeholder.jpg`
- `apple-itunes-placeholder.jpg`
- `google-play-placeholder.jpg`
- `google-play-50-placeholder.jpg`
- `playstation-placeholder.jpg`
- `playstation-plus-placeholder.jpg`

### Brand Logos
Place brand logos in `brands/` directory with the following naming convention:
- `netflix-logo-placeholder.png`
- `steam-logo-placeholder.png`
- `apple-logo-placeholder.png`
- `google-play-logo-placeholder.png`
- `playstation-logo-placeholder.png`

## Image Specifications

### Product Images
- Recommended size: 400x300px (4:3 aspect ratio)
- Format: JPG or PNG
- Optimize images for web (use tools like ImageOptim or TinyPNG)

### Brand Logos
- Recommended size: 200x200px (square)
- Format: PNG with transparent background (preferred)
- Ensure logos are centered and have adequate padding

## Placeholder Images

Until you add actual images, Next.js Image component will show broken image icons. You can:
1. Add your images following the naming convention above
2. Or update the paths in `src/data/catalog.json` to match your image filenames
