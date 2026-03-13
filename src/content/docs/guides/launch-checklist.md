---
title: Launch Checklist
description: Every step from Obsidian vault to live website. A universal reference for any theme.
---

A step-by-step reference for going from an empty folder to a live website powered by your Obsidian vault. This checklist works with any Vault CMS-compatible theme.

**Paths:** Free/open path uses Vault CMS + [Astro Modular](https://github.com/davidvkimball/astro-modular). Premium path uses [Axis](https://github.com/davidvkimball/axis) for a faster, opinionated setup with support.

## Prerequisites

- [ ] Obsidian installed (desktop version)
- [ ] Node.js 22.x installed (nodejs.org)
- [ ] Git installed (git-scm.com)
- [ ] GitHub account (or GitLab/Gitea)
- [ ] Hosting account (Netlify, Vercel, or Cloudflare)
- [ ] pnpm recommended: `npm install -g pnpm` (npm and npx also work)

## Get Your Astro Theme

Find an Astro theme you like. Browse the [Astro theme directory](https://astro.build/themes/), search GitHub, or use a theme recommended by the community. Some themes have a CLI installer (like Starlight: `npm create astro@latest`), but most are downloaded as a ZIP or cloned from GitHub.

## Install Vault CMS

Once you have your theme project locally, install Vault CMS into it:

1. **CLI (recommended):** Run `pnpm create vaultcms`, `npm create vaultcms`, or `yarn create vaultcms` from inside your theme's project folder
2. **Manual:** [Download the latest release](https://github.com/davidvkimball/vaultcms/releases/latest) and copy `_bases`, `.obsidian`, and `_GUIDE.md` into your project (typically `src/content`)

## Open in Obsidian

- [ ] Open the project folder as a vault in Obsidian
- [ ] Install the Vault CMS plugin if not already included
- [ ] Complete the setup wizard (or select a preset if available)

## Configure Content

- [ ] Set your content types (posts, pages)
- [ ] Map your properties (title, date, description)
- [ ] Choose your plugins (Bases CMS, Astro Composer, SEO, etc.)

## Connect Git

- [ ] Generate a GitHub Personal Access Token
- [ ] Add it to the Vault CMS wizard (stored securely in Obsidian Secrets)
- [ ] Create or connect your GitHub repository
- [ ] Test: Ctrl+Shift+S should commit and push

## Deploy

- [ ] Connect your GitHub repo to your hosting provider
- [ ] Set build command: `pnpm build` (or `npm run build`)
- [ ] Set output directory: `dist`
- [ ] Trigger first deploy
- [ ] Visit your live site URL and confirm it loads

## Write Your First Post

- [ ] Ctrl+N to create a new post (Astro Composer)
- [ ] Write some content
- [ ] Ctrl+Shift+S to publish
- [ ] Verify the post appears on your live site

## Custom Domain (Optional)

- [ ] Add your domain in your hosting provider's dashboard
- [ ] Update DNS records (CNAME or A record)
- [ ] Enable HTTPS/SSL
- [ ] Update the site URL in your theme's config
- [ ] Redeploy and confirm

## You're Live

- [ ] Share your site with someone
- [ ] Keep writing. Your workflow is now: write, Ctrl+Shift+S, done.

<!--
:::note
For a video walkthrough covering three themes, three skill levels, and three hosting providers, check the course on YouTube.
:::
--!>
