# Uniqor Cinematic AI Website

A complete cinematic homepage implementation for **Uniqor — The Core Intelligence Stack for Critical Systems**.

This package uses only the supplied Uniqor logo assets and the provided color palette:
`#040B14`, `#081420`, `#0D1F2E`, `#21D4FD`, `#28E0B9`, `#A7F3D0`, `#F6C85F`, `#FF6B5F`, `#F5FAFF`, `#9FB5C8`.

## What is included

- Next.js App Router implementation
- Tailwind configuration using the Uniqor palette only
- Three.js governed intelligence core hero
- GSAP hero load sequence
- Framer Motion section reveals and animated SVG flows
- Lenis smooth scrolling
- Responsive homepage sections
- SEO metadata in `app/layout.tsx`
- Accessibility support for `prefers-reduced-motion`
- Full website blueprint in `docs/WEBSITE_BLUEPRINT.md`
- Standalone preview in `standalone-preview.html`

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Next.js.

## Build

```bash
npm run build
npm run start
```

## Structure

```text
app/
  layout.tsx          SEO metadata, icons, viewport
  page.tsx            Homepage composition
  globals.css         Design system and component styling
components/
  HeroCore.tsx        Three.js governed intelligence core
  Hero.tsx            Cinematic hero and GSAP sequence
  TrustGap.tsx        Fragmented systems to governed core narrative
  AuditTrail.tsx      Decision trace visualization
  ArchitectureStack.tsx
  UseCases.tsx
  GovernanceSecurity.tsx
  Principles.tsx
  Footer.tsx
lib/
  content.ts          Institutional copy and section data
public/brand/
  Supplied Uniqor logo files and brand-system.json
docs/
  WEBSITE_BLUEPRINT.md
```

## Notes for production

- Replace `mailto:` CTAs with your CRM, booking, or enterprise contact workflow.
- Keep investor-only details behind a gated route if the deck remains confidential.
- Add SOC2, HIPAA, ISO, or other compliance claims only once verified and legally approved.
- Three.js hero is intentionally built without external logo marks or foreign color systems.
