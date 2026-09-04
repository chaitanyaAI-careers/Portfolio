# Deploy V1

## 1. Create the local project

Recommended location:

```bash
~/Projects/Careers/Portfolio
```

## 2. Install and verify

```bash
npm install
npm run typecheck
npm run build
```

## 3. Create a fresh Git repository

```bash
git init
git add .
git commit -m "Create Applied AI portfolio V1"
git branch -M main
```

## 4. Create/push the new GitHub repository

Recommended repository:

```text
chaitanyaAI-careers/Portfolio
```

Using GitHub CLI:

```bash
gh repo create chaitanyaAI-careers/Portfolio \
  --public \
  --source=. \
  --remote=origin \
  --push
```

## 5. Vercel

Import the new `Portfolio` repository into Vercel.

Environment variable:

```text
NEXT_PUBLIC_SITE_URL=https://<your-final-vercel-url>
```

Redeploy after setting the final URL.

## 6. After deployment

Verify:
- home page
- mobile layout
- all six GitHub links
- LinkedIn
- Hugging Face
- email
- Open Graph image
- `/robots.txt`
- `/sitemap.xml`

Then use the final portfolio URL in:
- GitHub profile
- LinkedIn Featured / Contact
- resume header
- individual README footers
