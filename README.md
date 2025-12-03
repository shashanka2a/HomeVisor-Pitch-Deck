# HomeVisor Pitch Deck

A production-ready Next.js application showcasing the HomeVisor pitch deck presentation.

## Tech Stack

- **Next.js 15** with App Router
- **React 18** with TypeScript
- **Tailwind CSS v4** for styling
- **shadcn/ui** components
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main pitch deck page (client component)
│   └── globals.css     # Global styles
├── src/
│   ├── components/     # React components
│   │   ├── ui/        # shadcn/ui components
│   │   └── figma/     # Custom components
│   └── styles/        # Additional styles
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Features

- **12-slide interactive pitch deck** with keyboard navigation
- **Responsive design** with Tailwind CSS
- **SEO optimized** with proper metadata
- **Type-safe** with TypeScript
- **Production-ready** Next.js setup

## Navigation

- Use **arrow keys** (← →) to navigate between slides
- Click the **navigation buttons** or **slide indicators** to jump to specific slides

## Development

The app uses Next.js App Router with client components marked with `"use client"` directive. All UI components are located in `src/components/ui/` and follow shadcn/ui patterns.
