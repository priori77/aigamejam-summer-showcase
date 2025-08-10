# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a showcase website for AI Game Jam (AI 게임잼) competition winners. Built with Next.js 14 (App Router) and TypeScript, it displays award-winning games created using AI tools.

## Key Commands

```bash
# Development
npm run dev      # Start development server at localhost:3000

# Production
npm run build    # Build for production
npm run start    # Start production server

# Code Quality
npm run lint     # Run ESLint checks
```

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 14 with App Router (`/app` directory)
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom animations (float, glow, accordion)
- **Animation**: Framer Motion for interactive transitions
- **Icons**: Lucide React
- **Deployment**: Vercel (auto-deployed from main branch)

### Directory Structure
- `/app` - Next.js pages and layouts
- `/components` - React components (game-card, game-modal, header)
- `/data/games.ts` - Game data and event information
- `/types/game.ts` - TypeScript interfaces (Game, GameMedia, GameJamEvent)
- `/public/images` - PNG game screenshots
- `/public/webp` - Optimized WebP images

### Key Data Model

Games have the following structure:
- Basic info: id, name, genre, description
- Awards: "우수상" (Excellence) or "특별상" (Special)
- Media: supports both images and YouTube videos
- Credits: developers and AI tools used
- Theme interpretation text

### Styling System

The project uses a dark/night theme with:
- CSS variables for theming (defined in globals.css)
- Purple/blue gradient backgrounds
- Custom animations via Tailwind
- Responsive breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536px)

### Important Notes

1. **Image Handling**: 
   - Always use absolute paths starting with `/` for public folder assets
   - Both PNG and WebP formats are supported
   - Next.js image optimization is configured

2. **Language**: UI and content are in Korean

3. **Component Patterns**:
   - Game cards use hover effects and modal popups
   - Responsive grid layout adjusts columns by screen size
   - Mobile-optimized with special Android scroll handling

4. **Performance**: 
   - WebP images for optimization
   - Lazy loading for images
   - Framer Motion for smooth animations