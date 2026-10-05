# Portfolio Deployment

The `main` branch of this repository is the production source for the recruiter-facing portfolio.

Production URL:

```text
https://chaitanya-sai-portfolio.vercel.app
```

## Local Verification

```bash
npm install
npm run typecheck
npm run build
```

## Vercel Configuration

The project is deployed from:

```text
chaitanyaAI-careers/Portfolio
```

Recommended environment variable:

```text
NEXT_PUBLIC_SITE_URL=https://chaitanya-sai-portfolio.vercel.app
```

## Release Checklist

After changes to `main`, verify:

- home page renders without errors
- mobile and desktop layouts
- GitHub project links
- LinkedIn and email links
- evidence labels remain accurate
- Agentic AI and PharmaAI architecture diagrams match current evidence status
- Open Graph image
- `/robots.txt`
- `/sitemap.xml`

## Content Authority

Primary recruiter-facing content lives in:

```text
data/portfolio.ts
```

Presentation and page-level copy live in:

```text
app/page.tsx
app/layout.tsx
app/opengraph-image.tsx
```

Architecture visuals live in:

```text
public/architecture/
```

The public resume CTA remains disabled unless a specific recruiter-facing resume is intentionally published. The private master resume is not meant to be exposed directly through the portfolio.
