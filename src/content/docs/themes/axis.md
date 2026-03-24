---
title: Axis
description: A premium Astro theme for personal publishing, built for Vault CMS with a dedicated Obsidian settings plugin.
---


**Axis** is a premium Astro theme designed for personal publishing. It ships with a dedicated Obsidian settings plugin so you can configure your entire site from inside Obsidian without editing config files.

- [Live demo](https://astro-axis.netlify.app)
- [Purchase Axis ($49)](https://store.davidvkimball.com/checkout/buy/b942a935-bc8b-4389-a50a-c8aada83002f)

## What's Included

- **Axis theme** with 18 built-in color themes + custom theme generation
- **Axis Settings plugin** for Obsidian (controls all config from a UI)
- **Tag Mirror plugin** for Obsidian (keeps Obsidian tags in sync with your site taxonomy)
- Lifetime updates via `pnpm run update`
- Community support via Discord

## Features

### Site Features
- 18 color themes with a live theme selector in the command palette
- Custom theme generation (extract colors from your Obsidian theme, simple and advanced editors)
- Command palette (Ctrl+K) for search, navigation, and quick actions
- Configurable navigation with nested dropdown menus
- External link indicators in the navbar
- Profile card with image, name, and bio
- Multiple homepage layouts (minimal, featured, grid, magazine)
- JSON-LD structured data (BlogPosting, WebPage, WebSite)
- Automatic OG image generation with config-specified fonts
- Full heroicons library (324 icons by exact name)
- RSS feed and sitemap
- Cookie consent (optional)
- Header and footer code snippet injection (analytics, GTM, etc.)

### Content Types
- **Posts** with tags, cover images, reading time, word count, and drafts
- **Pages** for static content
- **Projects** with status badges, repository/demo links, and categories
- **Docs** with category grouping and sidebar navigation
- **Custom content types** defined through the Axis Settings plugin with automatic routing, index pages, and Bases CMS views
- **Redirects** via frontmatter for SEO-safe URL changes

### Writing Features
- Full Obsidian markdown parity: wikilinks, callouts, highlights, embeds, image sizing
- LaTeX/KaTeX math rendering
- Mermaid diagrams
- Footnotes
- Image grids with lightbox
- GitHub card embeds
- Code blocks with syntax highlighting
- Custom callouts with full Obsidian parity (including custom icons and colors via Callout Manager)
- Spotify and Steam embeds

### Post Features
- Table of contents (configurable depth, per-post toggle)
- Related posts (based on links and tags)
- Linked mentions (backlinks)
- Local knowledge graph with no limit on what can be linked (posts, pages, projects, docs, custom types all appear in the graph)
- Per-post graph toggle with hideLocalGraph
- Previous/next navigation
- Cover images with configurable aspect ratios
- Draft support (visible in dev, hidden in production, dimmed in graph view and related posts)
- Posts dated in the future are hidden from the frontend

## Axis Settings Plugin

The Axis Settings plugin gives you full control over your site without opening a config file:

- **General tab:** Site info, OG image, favicons, profile picture, deployment platform
- **Navigation tab:** Page editor with nested children, social links, nav style
- **Layout tab:** Content width, homepage layout, post options, content types, footer
- **Style tab:** Theme selector with color pills, custom theme generation, font picker
- **Features tab:** Toggle every feature on/off, command palette options, graph view settings
- **Advanced tab:** Header/footer code snippets, cookie consent, config file path

All changes are written to `config.ts` using `[CONFIG:KEY]` markers. You never need to edit the file directly.

## Tag Mirror Plugin

Tag Mirror keeps your Obsidian vault tags synchronized with your site's tag taxonomy. When you add or rename tags in Obsidian, the plugin ensures they stay consistent across your content. This is included with your Axis purchase.

## Updates

Run `pnpm run update` in your Axis project directory. The first time, it will ask for your license key (from your purchase receipt). The key is saved to `.env` so you only enter it once. Updates are delivered from `releases.davidvkimball.com`.

## License

One-time purchase. Unlimited personal and commercial projects. Lifetime updates. Cannot resell or redistribute. See the full [license terms](https://davidvkimball.com/terms) for details.
