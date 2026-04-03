---
title: Publishing
description: Draft workflow, Git push, and how content reaches your live Astro site.
---

**Publishing** in Vault CMS means committing Markdown and pushing to Git. Your host rebuilds the site; Vault CMS does not host anything itself.

## How it works

The [Git](/plugins/git/) plugin (obsidian-git) stages changes, commits, and pushes from Obsidian. Your platform (Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.) runs on new commits and builds Astro.

```
Write in Obsidian  →  Git push  →  CI/CD build  →  Live site
```

## Publish steps

1. **Finish the draft** — When the post is ready, set `draft: false` or remove `draft` (see below).
2. **Push** — `Ctrl/Cmd + Shift + S` for **Git: Push**, or use the **up-arrow** in the status bar.
3. **Wait for the build** — Usually tens of seconds to a few minutes; check your host’s dashboard if needed.

Plugin details: [Git](/plugins/git/).

## Draft workflow

New notes often start with `draft: true` so unfinished work does not ship.

```yaml
---
title: "My New Post"
date: 2026-04-03
description: ""
tags: []
draft: true
---
```

To go live, remove `draft` or set `draft: false`. **Home.base** can show draft status for each file.

:::caution
Pushing with `draft: true` still commits the file. Whether it appears publicly depends on your Astro theme and collection schema filtering drafts. Always verify `draft` before you rely on “unpublished.”
:::

## Git setup (if you need it)

Your project should be a Git repo with a `remote` (e.g. `origin`). Quick setup from the project root:

```bash
git init
git add .
git commit -m "initial commit"
```

Create a repo on your host (GitHub, GitLab, Bitbucket), then:

```bash
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

Connect that repository in Netlify, Vercel, or another host so pushes trigger deploys.

## Tips

- Small, frequent commits are easier to review and revert.
- The CLI adds workspace files to `.gitignore` so personal Obsidian UI state is not committed. See [Installation](/guides/installation/) for the exact entries.
