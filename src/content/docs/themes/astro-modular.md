---
title: Astro Modular
description: A free, open-source Astro blog theme designed for Obsidian users, with a dedicated settings plugin and full Vault CMS integration.
sidebar:
  order: 3
---


**Astro Modular** is a free, open-source Astro theme built specifically for Obsidian users. It includes a dedicated settings plugin so you can configure your site from inside Obsidian.

- [Live demo](https://astro-modular.netlify.app)
- [GitHub](https://github.com/davidvkimball/astro-modular)

## Features

### Site Features
- 17 built-in color themes + custom theme generation
- Command palette (Ctrl+K) for search, navigation, and quick actions
- Page transitions (Swup.js)
- Local knowledge graph with D3
- Linked mentions (backlinks)
- Profile card with customizable placement
- Automatic OG image generation
- RSS feed and sitemap
- Multiple deployment platform configs (Netlify, Vercel, Cloudflare, GitHub Pages)

### Content Types
- **Posts** with tags, cover images, reading time, word count, and drafts
- **Pages** for static content
- **Projects** with status badges and links
- **Docs** with category grouping

### Writing Features
- Full Obsidian markdown parity: wikilinks, callouts, highlights, embeds, image sizing
- LaTeX/KaTeX math rendering
- Mermaid diagrams
- Image grids with lightbox
- Code blocks with syntax highlighting
- Giscus comments (optional)

### Astro Modular Settings Plugin
- Dedicated Obsidian plugin that controls all site configuration
- Theme switching, typography, layout, and feature toggles from a UI
- Custom theme generation (extract colors from your Obsidian theme)
- No config.ts editing required

## Getting Started

Vault CMS and the Astro Modular Settings plugin are already bundled, so don't run the [Vault CMS installer](/get-started/installation/) on this theme. Node.js is optional: your host builds the site, so you only need Node to preview locally or to use the command-line install.

1. Get the code:
   - **Without the command line:** open the [latest release](https://github.com/davidvkimball/astro-modular/releases/latest), download **Source code (zip)** under **Assets**, and extract it.
   - **With the command line:** run `pnpm create astro-modular my-blog`.
2. In Obsidian, select **Open folder as vault** and choose the project's `src/content` folder.
3. Trust the author and enable plugins, then follow the setup wizards. Astro Modular Settings configures your site, and Vault CMS connects it to GitHub and your host.
4. Start writing.

## Frontmatter Properties

| Property | Type | Description |
|----------|------|-------------|
| title | string | Post title |
| description | string | Short description for SEO and previews |
| date | date | Publication date |
| tags | string[] | Tags for categorization |
| draft | boolean | Hide from production builds |
| image | string | Cover image path |
| imageAlt | string | Cover image alt text |
| imageOG | boolean | Use cover image as OG image |
| hideCoverImage | boolean | Hide cover image on the post page |
| hideTOC | boolean | Hide table of contents |
| targetKeyword | string | SEO target keyword |

## License

MIT. Free for personal and commercial use.
