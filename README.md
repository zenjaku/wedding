# wed-app (frontend)

Single-page wedding invitation site built with Vue 3 + Vite. The page is composed of sections (Hero, Love Story carousel, Wedding Schedule, Countdown + “Add to calendar”, RSVP, Footer) and is driven by the data in `src/props/DefaultValues.ts`.

## Requirements

- Node.js: `^20.19.0` or `>=22.12.0` (see `package.json`)
- npm (ships with Node)

## Quickstart

```bash
cd frontend
npm install
npm run dev
```

`npm run dev` starts Vite with `--open --host` (opens a browser and binds to your LAN IP).

## Scripts

- `npm run dev` - start dev server
- `npm run build` - type-check then build to `dist/`
- `npm run preview` - serve the production build locally
- `npm run test:unit` - run Vitest unit tests
- `npm run test:e2e` - run Playwright e2e tests
- `npm run lint` - run oxlint + eslint (auto-fixes where possible)
- `npm run format` - run Prettier on `src/`

## Customizing content

Most content is static and lives in `src/props/DefaultValues.ts`:

- `DEFAULT_WEDDING`
  - `header`: hero kicker text (e.g. “The Wedding of”)
  - `starts_at`: wedding start date/time (used by the hero date, countdown, schedule, and calendar actions)
- `DEFAULT_PEOPLE`: groom/bride names, Instagram URLs, and their `image_media_id`
- `DEFAULT_MEDIA_ASSETS`: image URLs used by the hero, profiles, carousel, and direction section
- `DEFAULT_VENUES`: venue names + Google Maps URLs
- `DEFAULT_WEDDING_EVENTS`: schedule entries
  - `starts_at_offset_minutes` is relative to `DEFAULT_WEDDING.starts_at`
- `DEFAULT_LOVESTORY` + `DEFAULT_CAROUSEL_SLIDES`: “Our Love Story” text and carousel items

### Images (recommended)

Right now the defaults point at remote image URLs. For reliability, put images in `frontend/public/` and reference them with absolute paths:

- Example: add `frontend/public/images/hero.jpg`
- Use `url: '/images/hero.jpg'` in `DEFAULT_MEDIA_ASSETS`

## Enabling / disabling sections

Sections are composed in `src/pages/HomePage.vue`.

- The Direction section is currently commented out. Uncomment `<DirectionSection />` to show it.

## RSVP form

`src/pages/sections/RSVPSection.vue` is currently UI-only (no submit handler / backend integration). If you want RSVP submissions to go somewhere, add state + validation and post the payload to your backend (or integrate a hosted form service).

## Deployment

This frontend is a static build:

```bash
cd frontend
npm run build
```

Deploy the contents of `frontend/dist/` to any static host (Vercel, Netlify, GitHub Pages, S3/CloudFront, etc.). For a subpath deploy, set Vite’s `base` and note the router uses `import.meta.env.BASE_URL` (`src/router/index.ts`).

## Tests (note)

Vitest and Playwright are configured, but the existing sample tests still assert template text (`"You did it!"`) and will need updating to match the current UI:

- Unit: `src/__tests__/App.spec.ts`
- E2E: `e2e/vue.spec.ts`
