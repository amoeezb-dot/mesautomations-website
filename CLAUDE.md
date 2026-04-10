# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build (use to verify before deploy)
npm run lint     # ESLint
npx vercel       # Deploy to Vercel (preview)
npx vercel --prod # Deploy to Vercel (production)
```

## Architecture

**Next.js 16 + React 19 + Tailwind CSS v4** portfolio site for Abdul Moeez Baig — MES Engineer & Manufacturing IT Specialist based in Nürnberg. Dark theme only (background `#030303`, foreground `#fafafa`). Deployed on Vercel.

### Pages (App Router)

- `/` - Homepage: HeroGeometric (badge="MES Consulting", title1="MES. Integration.", title2="Automation.") + IntroSection (MES/manufacturing bio + CTA)
- `/services` - 5 MES service cards in responsive grid with HighlightGroup mouse-tracking glow effect
- `/projects` - SkillsBadges (MES tech categories) + ExperienceCards (3 MES experience items with glow)
- `/about` - AboutContent: bio card (name, role, location, two bio paragraphs, LinkedIn link) with framer-motion fade-in
- `/contact` - ContactContent: 3 cards (Email with mailto + copy-to-clipboard, LinkedIn, Location)
- `/impressum` - ImpressumContent: real legal data (Abdul Moeez Baig, Kollwitzstraße 12, 90439 Nürnberg, DE460552467)
- `/datenschutz` - DatenschutzContent: full 10-section GDPR privacy policy (Vercel hosting, no cookies/tracking)

### Component Organization

- `src/components/ui/` - shadcn/ui primitives (button, card, input, badge, etc.)
- `src/components/shared/` - Reusable animated components (hero-geometric, highlight-group, section-header)
- `src/components/home/` - hero-section, intro-section
- `src/components/services/` - services-grid
- `src/components/projects/` - skills-badges, project-cards (exports `ExperienceCards`)
- `src/components/about/` - about-content
- `src/components/contact/` - contact-content
- `src/components/impressum/` - impressum-content, datenschutz-content
- `src/components/layout/` - Navbar (desktop pill nav + mobile hamburger overlay) and Footer

### Data Layer

All content data in `src/lib/data.ts`: `SERVICES`, `TECH_CATEGORIES`, `EXPERIENCE_ITEMS`. Interfaces: `Service`, `TechCategory`, `ExperienceItem`. Site config and nav links in `src/lib/constants.ts`: `SITE_CONFIG`, `NAV_LINKS` (5 main links), `LEGAL_LINKS` (Impressum + Datenschutz — rendered in footer only, not in navbar).

### Key Patterns

- **Dark-only theme**: CSS variables in `:root` in `globals.css` are dark values directly. Background `#030303`, foreground `#fafafa`, primary `#ffffff`.
- **Animation-heavy**: Shared components use `framer-motion`. AnimatePresence for mobile menu transitions.
- **Navbar**: Desktop: floating pill nav (fixed top, layoutId lamp glow effect). Mobile: hamburger button + full-screen overlay with staggered link animations. Auto-closes on route change.
- **Glow cards**: `HighlightGroup` + `HighlighterItem` provide mouse-tracking radial glow on hover. Used by services-grid and project-cards.
- **Mobile-first responsive**: All components use responsive Tailwind classes (`text-base md:text-lg`, `p-5 md:p-8`, `gap-4 md:gap-6`). Pages use `pt-20 md:pt-32` to clear the mobile hamburger button.
- **framer-motion ease tuples**: Must be typed as `[number, number, number, number]` to satisfy TypeScript — e.g. `ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number]`. Untyped arrays cause build errors.
- **No setState in effects**: The ESLint config enforces `react-hooks/set-state-in-effect`. Derive state with `useMemo` instead of syncing via `useEffect` + `setState`.

### shadcn/ui

Uses shadcn v4 with Tailwind CSS v4. Add components via: `npx shadcn@latest add <component>`.
