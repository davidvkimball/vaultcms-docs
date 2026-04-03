---
title: Content types
description: How Vault CMS maps folders and routes to Astro content collections and URLs.
---

A **content type** in Vault CMS lines up with an [Astro content collection](https://docs.astro.build/en/guides/content-collections/)—a folder under `src/content` where your Markdown lives. Each type has its own folder, frontmatter template, and URL pattern on the site.

## How content types are detected

Run the setup wizard (**Vault CMS: Open Wizard** from the command palette). It scans your Astro project for collections and dynamic routes. The CLI prints similar output during install, for example:

```
📍 Route detection:
   posts        →  /posts/    (from src/pages/posts/[...slug].astro)
   pages        →  /           (from src/pages/[...slug].astro)
   docs         →  /docs/     (from src/pages/docs/[...slug].astro)
```

The wizard maps routes under `src/pages` (e.g. `[...slug].astro`) to the collections they use. You normally do not configure this by hand.

## Folder structure

Each type is a subfolder inside the vault, for example:

```
src/content/
├── posts/
├── pages/
├── docs/
├── projects/
└── special/
```

:::note
Which folders exist depends on your project. The wizard only sets up types it detects.
:::

## Default patterns (example)

| Content type | Folder | URL pattern | Example |
|--------------|--------|-------------|---------|
| Posts | `posts/` | `/posts/[slug]` | `/posts/my-first-post` |
| Pages | `pages/` | `/[slug]` | `/about` |
| Docs | `docs/` | `/docs/[slug]` | `/docs/getting-started` |
| Projects | `projects/` | `/projects/[slug]` | `/projects/my-app` |
| Special (home) | `special/` | `/` | `/` |

Exact rules come from your theme and routes. **Home.base** uses a slug formula so you can preview URLs; open `_bases/Home.base` or the **Home** view.

## Home.base columns

Typical columns:

- **Title** — from `title` in frontmatter  
- **Path** — computed URL slug for the live site  
- **Date** — from `date` or `pubDate`  
- **Draft** — whether the file is treated as a draft  

## Creating content in a specific type

`Ctrl/Cmd + N` uses your **default** content type (often `posts`). To target another folder, select that folder in the file explorer first, then create the note—or move an existing file into the right folder.

:::tip
[Astro Composer](/plugins/astro-composer/) can apply the right frontmatter template when a content type matches the folder. New notes often start with `draft: true` so nothing goes live by accident.
:::
