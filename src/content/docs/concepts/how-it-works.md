---
title: How it works
description: How Obsidian, the vault, and Git connect to your Astro site.
---

Vault CMS is a headless setup built on [Obsidian](https://obsidian.md) for writing and [Git](https://git-scm.com) for publishing. Your content is plain Markdown inside your Astro project. There is no database and no hosted Vault CMS backend—only files.

## The core idea

Your Obsidian vault **is** your Astro content folder. Installing Vault CMS drops a preconfigured `.obsidian` workspace into `src/content` (or your project root). Opening that folder in Obsidian gives you an editor wired to your site’s content collections.

```
your-astro-site/
├── src/
│   └── content/          ← Open this folder as your Obsidian vault
│       ├── .obsidian/    ← Vault config, plugins, and hotkeys
│       ├── _bases/       ← Home.base CMS dashboard view
│       ├── _GUIDE.md     ← Quick-start reference
│       ├── posts/
│       ├── pages/
│       └── ...
├── astro.config.mjs
└── package.json
```

## Key pieces

- **The vault** — The folder you open in Obsidian. It lives inside your Astro project so new files are part of your content collections immediately.
- **`.obsidian`** — Pre-built plugin settings, hotkeys, and editor preferences tuned for Astro.
- **`Home.base`** — A [Bases CMS](/plugins/bases-cms/) dashboard: grid of content, filters, and slug previews. Open via **Home** in the tab bar or `Ctrl/Cmd + M`. See [Home Base](/plugins/home-base/).
- **Bundled plugins** — The main workflow is carried by **[Vault CMS](/plugins/vault-cms/)** (wizard), **[Astro Composer](/plugins/astro-composer/)** (frontmatter and links), and **[Git](/plugins/git/)** (obsidian-git) for publishing.

## The publishing workflow

1. **Write in Obsidian** — `Ctrl/Cmd + N` creates a note; Astro Composer can insert frontmatter. Edit in Markdown.
2. **Review in Home.base** — Check the **Path** column for the live URL. Use `draft: true` to keep work off the site until you are ready.
3. **Push with Git** — `Ctrl/Cmd + Shift + S` (or the status bar up-arrow) commits and pushes.
4. **Site rebuilds** — Netlify, Vercel, Cloudflare Pages, etc. detect the push and run your Astro build.

Details: [Publishing](/concepts/publishing/).

## Vault CMS is theme-agnostic

Vault CMS does not control your Astro theme or templates—it only helps you manage Markdown in content collections. Your theme defines what readers see.

For a theme built around Vault CMS, see [Astro Modular](https://github.com/davidvkimball/astro-modular). For theme fit, see [Theme comparison](/themes/comparison/).
