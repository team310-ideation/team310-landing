# Team 310 Landing Agent Guide

## Project

This repository is the public landing page for Team 310 interview recruitment.
The production deployment is connected to Vercel. Pushing to `main` triggers deploy.

## Stack

- Vite
- React
- Framer Motion
- lucide-react
- Plain CSS in `src/App.css`

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Source Of Truth

- `docs/landing/m2-interview-landing-brief.md` is the canonical product, content, and design brief.
- Older root-level dated content/design documents were merged into the canonical brief.
- If implementation and docs drift, update the canonical brief first, then mirror the change in `src/data/landingContent.js` and `src/App.css`.

## Product Direction

- Target busy 40-50s Korean parents as capable digital decision-makers.
- Prioritize fast problem matching, trust, privacy, and clear interview action.
- Do not frame AI as magic. Say that people listen first, and AI helps organize context.
- Keep motion subtle: 180-260ms, small distance, one-time reveals, reduced-motion support.
- Keep CTA copy grounded: 30-minute interview, no required upload, consent-based recording, gift voucher.

## Tally

The application is ready for Tally embed through:

```bash
VITE_TALLY_FORM_URL=https://tally.so/r/your-form-id
```

Until a Tally form URL is provided, the apply section falls back to an email-based application form using:

```bash
VITE_CONTACT_EMAIL=lifedesigner88@gmail.com
```

Do not hard-code a private Tally API key in the frontend.

## Content Constraints

- Do not reintroduce the previously removed out-of-scope education brand or domain.
- Do not claim official support numbers unless they are explicitly sourced in the content docs.
- Avoid "합격 보장", "성적 상승 보장", or AI-generated student record writing claims.
- Do not make the page look like a hagwon ad, elementary workbook ad, or flashy AI SaaS page.

## Design Constraints

- Use the M2 palette in `src/App.css`.
- Keep cards at 8px border radius.
- Body text should be 16px or larger.
- Touch targets should be at least 44px.
- Do not create nested cards.
- Use lucide-react icons for UI controls and trust signals.
