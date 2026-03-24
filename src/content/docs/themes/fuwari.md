---
title: Fuwari
description: A free, feature-rich Astro blog theme with page transitions, search, and categories.
---


**Fuwari** is a free, animated Astro blog theme with a polished design. It includes search, categories, page transitions, and supports both file-based and folder-based content.

- [Live demo](https://fuwari.vercel.app)
- [GitHub](https://github.com/saicaca/fuwari)

## Features

- Page transitions (Swup.js)
- Search (Pagefind)
- Tags and categories
- Drafts
- Cover images
- Reading time
- LaTeX/KaTeX math rendering
- Callouts/admonitions (GitHub-style)
- GitHub card embeds
- Expressive Code (enhanced code blocks)
- Archive page
- RSS feed
- Prev/next post navigation
- Table of contents

## Content Structure

Fuwari supports both **file-based** and **folder-based** content:

- **File-based:** `src/content/posts/my-post.md`
- **Folder-based:** `src/content/posts/my-post/index.md` (with images alongside)

### Frontmatter Properties

| Property | Type | Description |
|----------|------|-------------|
| title | string | Post title (required) |
| published | date | Publication date (required) |
| updated | date | Last updated date |
| draft | boolean | Hide from production |
| description | string | Short description |
| image | string | Cover image path |
| tags | string[] | Tags |
| category | string | Category |
| lang | string | Language code |

## Getting Started with Vault CMS

Fuwari works well with the GitHub template workflow:

1. Go to Fuwari's GitHub repo and click "Use this template"
2. Clone your new repo locally (using SourceTree, GitHub Desktop, or the terminal)
3. Install Vault CMS:
   ```bash
   npx create-vaultcms
   ```
4. Open the project as a vault in Obsidian
5. Complete the setup wizard

## Limitations

- No wikilinks, highlights (==text==), or image grids
- No Mermaid diagram support
- No linked mentions, related posts, or local graph
- No dedicated Obsidian settings plugin
- Single content type (posts only, plus a spec collection)

## License

Free and open source (MIT).
