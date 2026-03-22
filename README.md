# RadioCurate AI

RadioCurate AI is a modern web application for radiation therapy planning support. It presents AI-assisted plan comparison, explainable cohort matching, plan quality review, global case insights, and operational data management in a clean, medical-grade dashboard experience.

> **Clinical disclaimer:** RadioCurate AI is a clinical decision-support interface only. It is **not** a replacement for physician judgment, multidisciplinary review, physicist validation, quality assurance, or institutional treatment protocols.

## Tech Stack

- React
- Vite
- TSX-based typed components
- Custom reusable dashboard UI components inspired by shadcn/ui composition patterns
- Local icon set aligned to lucide-style usage
- React Router

## Included Pages

1. **Landing Page** — hero, features, trust & safety framing, footer
2. **Dashboard** — overview stats, recent case reviews, alerts, quick actions
3. **Patient Case Comparison** — patient summary, plan summary, similar cases, confidence, outcomes, explainability, hope visualization
4. **Treatment Plan Analysis** — dose distribution, OAR metrics, quality score, optimization opportunities
5. **Global Case Insights** — filters, trends, heatmap-style panels, similarity search UI
6. **Explainability & Audit** — factor weights, confidence framing, audit trail, validation notes
7. **Admin / Data Management** — dataset summary, ETL status, model versioning, access placeholders

## Product Notes

- Built with reusable dashboard primitives such as cards, badges, progress indicators, tabs, alerts, empty states, and loading-ready UI patterns.
- Uses mock clinical data only for demonstration.
- Organized for maintainability and ready to deploy to Vercel.
- Responsive across desktop and tablet-sized layouts.

## Local Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deployment

This project is ready for deployment on **Vercel**:

1. Import the repository into Vercel.
2. Vercel should detect the Vite configuration automatically.
3. Use the default build command: `npm run build`.
4. Use the default output directory: `dist`.

## Folder Structure

```text
src/
  components/
    layout/
    shared/
    ui/
  data/
  lib/
  pages/
  App.tsx
  index.css
  main.tsx
```
