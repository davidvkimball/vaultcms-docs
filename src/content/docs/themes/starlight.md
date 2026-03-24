---
title: Starlight
description: Astro's official documentation theme. Vault CMS adds Obsidian-powered content management to Starlight docs sites.
---


**Starlight** is Astro's official documentation theme. It's designed for building fast, accessible documentation sites. Vault CMS has a dedicated preset that lets you manage Starlight content from Obsidian.

- [Starlight docs](https://starlight.astro.build)

## Overview

Starlight is not a blog theme. It's a documentation framework with built-in sidebar navigation, search, dark mode, and internationalization support. When paired with Vault CMS, you can write and manage your docs entirely from Obsidian.

## Features

- Sidebar navigation (auto-generated or manual)
- Built-in search
- Dark mode
- Table of contents (auto-generated from headings)
- Sitemap
- Multiple color schemes
- Internationalization support
- Accessible by default

## Content Structure

- **File-based docs** in `src/content/docs/`
- Uses Starlight's built-in schema (`docsSchema`)
- Frontmatter: `title`, `description`, sidebar options, template, hero configuration

## Getting Started with Vault CMS

```bash
npm create astro@latest -- --template starlight
npx create-vaultcms --template starlight
```

Open the project as a vault in Obsidian. The Starlight preset configures Vault CMS to work with Starlight's content structure.

## Limitations

- Documentation-only (no blog posts, tags, or cover images)
- No RSS feed
- No OG image generation
- No wikilinks, callouts (uses Starlight's own aside syntax), or Obsidian-specific markdown
- No dedicated Obsidian settings plugin

## License

Free and open source (MIT).
