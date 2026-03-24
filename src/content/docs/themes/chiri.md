---
title: Chiri
description: A minimal, free Astro blog theme. Great for beginners getting started with Vault CMS.
---


**Chiri** is a minimal, free Astro blog theme. It's one of the simplest ways to get a blog online with Vault CMS.

- [Live demo](https://astro-chiri.netlify.app)
- [GitHub](https://github.com/mhyfritz/astro-chiri)

## Overview

Chiri is a lightweight blog theme with a clean design. It supports basic blog features without the overhead of more complex themes. Vault CMS has a dedicated preset for Chiri that configures everything automatically.

## Features

- LaTeX/KaTeX math rendering
- RSS feed
- Sitemap
- OG image support
- Minimal, fast, and accessible

## Content Structure

- **File-based posts** in `src/content/posts/`
- Frontmatter: `title`, `pubDate`, `image`
- Drafts via filename prefix (`_my-draft.md`)

## Getting Started with Vault CMS

### Manual Install (Beginner-Friendly)
1. Download the Chiri ZIP from GitHub
2. Download the Vault CMS ZIP
3. Combine both into one folder
4. Open the folder as a vault in Obsidian
5. Select the **Chiri preset** when prompted

### CLI Install
```bash
npx create-vaultcms --template chiri
```

## Customizing Your UI

The Chiri preset ships with a minimal Obsidian UI. After installing, you can:

- Switch the Obsidian theme (Settings > Appearance) from Oxygen to Default or any theme you prefer
- Use UI Tweaker's "Reset all to defaults" to restore the standard Obsidian interface
- Enable the Editing Toolbar for a familiar formatting bar

## Limitations

- No tags, search, or table of contents
- No wikilinks, callouts, highlights, or Mermaid support
- No dedicated Obsidian settings plugin (use Vault CMS + Data Files Editor for config changes)
- Single content type (posts only)

## License

Free and open source.
