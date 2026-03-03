# Freshly Laundry

![Freshly Laundry Screenshot](./public/images/freshly-laundry.png)

`freshly-laundry` is the codebase for the marketing site of a laundry and dry-cleaning service built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Preline UI**.

The goal of the project is to provide a modern, responsive landing page that highlights service features, promotional offers, and basic navigation. It provides smooth scrolling and animations using **AOS (Animate On Scroll)**.

## 🚀 Technologies Used

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Preline](https://preline.co/)
- **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)

## 🛠️ Getting Started (Development)

To work on the project locally, you need Node.js (v18+ recommended) or a compatible runtime. Clone the repository and install the dependencies with your preferred package manager:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site. Editing files under `src/app` or `src/components` will trigger a hot reload.

## 📁 Project Structure

- `src/app` – Application routes and global layouts (Next.js App Router).
- `src/components` – Reusable UI pieces like `Navbar`, `Promo`, `AOSInit`, etc.
- `public` – Static assets (images, icons, logos, etc.)

Fonts are configured using the built-in `next/font` utility, and Tailwind is used for styling via `tailwind.config.ts`.

## ⚙️ Helpful Commands

```bash
npm run dev      # start dev server
npm run build    # create production build
npm run start    # run production build locally
npm run lint     # run eslint
```

## 🌐 Deployment

This site can be easily deployed on Vercel or any other platform that supports Next.js. The default configuration is ready for Vercel deployment:

```bash
npx vercel deploy
```

Refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
