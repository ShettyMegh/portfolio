# Portfolio

My personal portfolio website. Built with Next.js, React, and TypeScript.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## Features

- Animated profile section with leader lines (using LeaderLine library)
- Orbital skills display - custom built orbital animation
- Particle effects from [react-bits](https://reactbits.dev)
- Dark/light theme toggle
- Various UI components from [react-bits](https://reactbits.dev) and [magic-ui](https://magicui.design) - particles, glitch text, decrypt text, fuzzy text, spotlight cards, light rays
- Fully responsive

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI
- GSAP & Motion for animations
- LeaderLine for animated lines
- Components from react-bits and magic-ui

## Setup

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── ui/                # shadcn/ui components
├── features/              # Feature-based organization
│   ├── home/
│   │   ├── profile-details.tsx  # Profile with leader lines
│   │   ├── skills.tsx
│   │   └── orbits.tsx           # Custom orbital animation
│   ├── projects/
│   └── common/
│       ├── navbar.tsx
│       ├── footer.tsx
│       └── react-bits/         # Components from react-bits/magic-ui
│           ├── particles.tsx
│           ├── glitch-text.tsx
│           ├── decrypt-text.tsx
│           ├── fuzzy-text.tsx
│           ├── spotlight-card.tsx
│           ├── light-rays.tsx
│           └── target-cursor.tsx
├── hooks/
├── lib/
└── public/
```

## Credits

UI components and effects from:
- [react-bits](https://reactbits.dev)
- [magic-ui](https://magicui.design)
- [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)

## Contact

Meghanath S Shetty  
Senior Frontend Developer @ SurveySparrow  
📧 meghanathshetty108@gmail.com  
📍 Chennai, India
