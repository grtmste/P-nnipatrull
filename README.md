# Põnnipatrull – Laste elektrisõidukite veebipood

Modern Next.js 14 + TypeScript + Tailwind CSS redesign of ponnipatrull.ee.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next/image** with `ponnipatrull.ee` remote patterns

## Pages

| Route | Description |
|---|---|
| `/` | Avaleht (Homepage) |
| `/e-pood` | E-pood (Shop) |
| `/varuosad` | Varuosad (Spare parts) |
| `/toode/[slug]` | Product detail |
| `/tarnetingimused` | Shipping policy |
| `/kasutustingimused-ja-garantii` | Terms & warranty |
| `/privaatsuspoliitika` | Privacy policy |
| `/tagastamine` | Returns |
| `/jarelmaks` | Instalment payment |

## Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. No extra configuration needed – `next.config.ts` handles image domains

Or via CLI:
```bash
npx vercel --prod
```
