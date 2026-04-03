---
title: SEO for content
description: Use the SEO plugin and frontmatter to improve search visibility.
---

The [SEO](/plugins/seo/) plugin analyzes the open note: title, description, keyword usage, headings, and length. Open the panel with `Ctrl/Cmd + Shift + A`.

## What it checks

- Title length and presence of the target keyword  
- Meta description length (often ~150–160 characters)  
- Keyword in title, first paragraph, and headings  
- Enough body content to avoid “thin” pages  
- Sensible `##` / `###` structure  

## Target keyword

Set your primary phrase in frontmatter:

```yaml
targetKeyword: "astro blog tutorial"
```

Use it naturally in the title, opening paragraph, and at least one heading.

## Meta description

The `description` field feeds the meta description. Keep it focused, include the keyword when it fits, and stay within a short snippet length.

```yaml
description: "Learn how to set up an Astro blog with Vault CMS and publish from Obsidian."
```

## Before you publish

Run the SEO check while `draft: true`, fix flagged items, then clear the draft flag when you push live.

## Practices

- **Titles** — Clear, specific; keyword toward the front when natural.  
- **First paragraph** — Mention the topic early.  
- **Headings** — Use `##` / `###` to outline the page.  
- **Depth** — Prefer thorough coverage over very short posts if you care about rankings.  

Full plugin behavior: [SEO plugin](/plugins/seo/).
