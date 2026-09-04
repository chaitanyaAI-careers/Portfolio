# Chaitanya Sai — Applied AI Engineering Portfolio

Recruiter-facing portfolio for **Applied AI Engineering, Generative AI, LLMs, RAG, Agentic AI, AI Platform & Backend Engineering, architecture, and reliability**.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel-ready

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run typecheck
npm run build
```

## Content updates

Most public content lives in:

```text
data/portfolio.ts
```

Update that file for:
- project descriptions
- project status
- social links
- resume URL
- skills / engineering focus

## Resume

The resume CTA is intentionally disabled until a real public PDF is added.

Recommended path:

```text
public/Chaitanya_Sai_Resume.pdf
```

Then set:

```ts
resumeUrl: "/Chaitanya_Sai_Resume.pdf"
```

inside `data/portfolio.ts`.

## Deployment

Create a fresh public repository under `chaitanyaAI-careers`, push this project, and import it into Vercel.

Set:

```text
NEXT_PUBLIC_SITE_URL=https://<final-vercel-domain>
```

in Vercel project environment variables.

## V1 principles

- recruiter-first
- evidence over buzzwords
- no unverified implementation claims
- architecture and engineering depth demonstrated through project evidence
- social identity synchronized with `chaitanyaAI-careers`
- architecture visuals can be added later without redesigning the site
