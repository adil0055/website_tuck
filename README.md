# Tuck - Virtual Fitting Room Landing Page

A pixel-perfect recreation of the Tuck virtual fitting room landing page built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ **Pixel-Perfect Design** - Exact recreation matching the original screenshot
- ✅ **Custom Typography** - Host Grotesk, Figtree, and JetBrains Mono fonts
- ✅ **Brand Colors** - Exact color tokens from brand guidelines
- ✅ **Gradient Effects** - Layered blur backgrounds for depth
- ✅ **Responsive Design** - Desktop-first approach with mobile support
- ✅ **Production-Ready** - TypeScript, SEO optimized, performance focused

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: next/font (local + Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
tuck/
├── app/
│   ├── fonts.ts              # Font configuration
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with SEO
│   └── page.tsx              # Main landing page
├── components/
│   ├── ui/
│   │   ├── Button.tsx        # Reusable button component
│   │   └── GradientBlur.tsx  # Gradient blur effect
│   ├── Header.tsx            # Fixed header with nav
│   ├── Hero.tsx              # Hero section with gradients
│   ├── DarkFeature.tsx       # Dark feature section
│   ├── NumberedFeatures.tsx  # 01, 02, 03 feature blocks
│   ├── MetricsSection.tsx    # Metrics cards (+15%, -22%, +9%)
│   ├── WorksBest.tsx         # Stacked cards section
│   ├── VisualTryOns.tsx      # Feature grid
│   ├── Pricing.tsx           # Three-tier pricing
│   ├── FinalCTA.tsx          # Final call-to-action
│   └── Footer.tsx            # Footer with links
├── Figtree/                  # Figtree font files
├── host grotesk/             # Host Grotesk font files
└── tailwind.config.ts        # Extended with brand colors
```

## Design System

### Typography

- **Host Grotesk** - Headings & Product Names (300, 400, 500, 600, 700, 800)
- **Figtree** - Body & UI Copy (300, 400, 500, 600, 700, 800)
- **JetBrains Mono** - Metrics & Numbers (400, 600)

### Colors

**Primary:**
- Graphite: `#323135`
- Polar Mist: `#F5F7F9`

**Secondary:**
- Soft Ice Mint: `#CFEBE8`
- Digital Aqua: `#86D0CC`
- Silver Drift: `#C7CCD0`
- Deep Breeze Blue: `#6993CD`

**Extended Palette:**
- Mint variants: `mint-20`, `mint-40`, `mint-120`
- Blue variants: `blue-20`, `blue-40`, `blue-120`

## Content Placeholders

Some text was not fully legible in the screenshot. Placeholders are marked with `COPY_MISSING_XX` comments in the code:

- Hero subheading
- DarkFeature description
- WorksBest detailed description
- VisualTryOns subheading
- Pricing subheading
- FinalCTA description

Replace these with actual copy as needed.

## Customization

### Updating Colors

Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  graphite: "#323135",
  // ... other colors
}
```

### Updating Content

Each section component is self-contained. Edit the respective component file in `components/` to update content.

### Adding Sections

1. Create a new component in `components/`
2. Import and add to `app/page.tsx`
3. Style using Tailwind utilities with brand colors

## License

This is a demonstration project created for portfolio purposes.

## Credits

Design recreation based on Tuck virtual fitting room landing page.
