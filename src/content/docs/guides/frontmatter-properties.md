---
title: Frontmatter Properties
description: YAML frontmatter fields — Obsidian calls them properties — that Vault CMS and Astro use for posts and pages.
---

Frontmatter properties are the YAML block at the top of each Markdown file, between `---` lines. Astro calls them **frontmatter**; Obsidian calls them **properties** — same thing. Astro and your theme read these values for title, dates, SEO, images, and drafts.

## Default template

Creating a note with `Ctrl/Cmd + N` (with [Astro Composer](/plugins/astro-composer/) configured) may insert a template like:

```yaml
---
title: "{{title}}"
date: {{date}}
description: ""
tags: []
image: ""
imageAlt: ""
imageOG: false
hideCoverImage: false
hideTOC: false
targetKeyword: ""
draft: true
---
```

Placeholders depend on your content type and Astro Composer settings.

## Fields

| Field | Type | Notes |
|-------|------|--------|
| `title` | string | Page title and often the `<title>` tag. |
| `date` | string | Often `YYYY-MM-DD`; used for sorting, RSS, and display. |
| `description` | string | Meta description; aim for ~150–160 characters for SEO. |
| `tags` | string[] | e.g. `tags: [astro, tutorial]` |
| `image` | string | Cover image URL or vault-relative path. |
| `imageAlt` | string | Alt text for the cover image. |
| `imageOG` | boolean | If `true`, use cover image for Open Graph / social previews. |
| `hideCoverImage` | boolean | Hide cover on the page while still using it for OG/SEO if configured. |
| `hideTOC` | boolean | Hide table of contents where the theme supports it. |
| `targetKeyword` | string | Primary keyword for the [SEO](/plugins/seo/) plugin. |
| `draft` | boolean | `true` keeps content out of production builds when the theme respects it. |

:::caution
New drafts often set `draft: true`. Set `draft: false` or remove `draft` when you intend to publish.
:::

## Normalize properties

**Astro Composer: Standardize Properties** (command palette) can align fields across files.

## Wikilinks

**Astro Composer: Convert Wikilinks to Astro** rewrites `[[links]]` to Markdown Astro can resolve.

## Date format

Default is often `YYYY-MM-DD`. Adjust in **Settings → Astro Composer** if your theme expects another format.
