---
title: Slate
description: A clean, free Astro blog theme with tags, search, and dark mode.
---


**Slate** is a clean, free Astro blog theme with a focus on readability. It supports tags, drafts, search, and dark mode.

- [GitHub](https://github.com/jktrn/slate-blog)

## Overview

Slate is a blog-focused theme with a polished reading experience. It includes search via Algolia DocSearch and supports callout-style containers. Vault CMS has a dedicated preset for Slate.

## Features

- Tags
- Drafts (boolean frontmatter property)
- Search (Algolia DocSearch)
- Callouts (container syntax `:::`)
- LaTeX/KaTeX math rendering
- RSS feed with Follow authentication
- Sitemap

## Content Structure

- **File-based posts** in `src/content/post/`
- Frontmatter: `title`, `description`, `tags`, `draft`, `pubDate`

## Getting Started with Vault CMS

```bash
npx create-vaultcms --template slate
```

Or install manually by downloading both Slate and Vault CMS and combining them.

## Limitations

- No cover images in frontmatter schema
- No table of contents, reading time, or related posts
- No wikilinks, highlights, Mermaid, or image grids
- No dedicated Obsidian settings plugin
- Single content type (posts only)

## License

Free and open source.
