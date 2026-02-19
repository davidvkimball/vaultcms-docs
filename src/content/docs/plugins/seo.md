---
title: SEO
description: Auditing your content for search engines and AI.
---

The [SEO](https://github.com/davidvkimball/obsidian-seo) plugin provides a comprehensive audit of your content for search engine rankings and AI parsing.

### Features

#### Content Quality Checks

- **Content length** — minimum word count threshold.
- **Reading level** — analyzes readability and complexity.
- **Keyword density** — optimal keyword usage.
- **Duplicate content** — detects similar content across notes.
- **Duplicate titles and descriptions** — identifies duplicates across your vault.

#### Technical SEO Checks

- **Title optimization** — proper title length and structure.
- **Meta description** — properties description validation.
- **Keyword in title, description, and slug** — ensures keywords appear where they should.
- **Heading structure** — proper H1–H6 hierarchy.
- **Media alt text** — missing alt text detection for images, videos, and embeds.
- **Image naming** — SEO-friendly image filename patterns.

#### Link Management

- **Broken links** — detects non-existent internal links.
- **External links** — validates external link accessibility (optional, requires internet).
- **Naked links** — identifies unformatted URLs.
- **Broken embeds** — detects potentially broken embedded content.

### Commands

| Command | Description |
| --- | --- |
| Open current note audit | Open the current note audit panel |
| Open vault audit | Open the vault-wide audit panel |
| Run current note audit | Open panel and run audit on current note. Activate with `CTRL + SHIFT + A`. |
| Run vault audit | Open panel and run audit on all notes |

### SEO Score System

The plugin uses a weighted scoring system:

- **Critical issues** (10x weight): Broken links, missing titles.
- **Important issues** (5x weight): Missing alt text, meta descriptions.
- **Moderate issues** (3x weight): Content length, readability.
- **Minor issues** (1x weight): Warnings and notices.

**Score range**: 40–100 (40 = needs work, 100 = excellent).

### Settings

- **Scan directories** — configure which directories to include in vault-wide audits.
- **Individual checks** — turn off checks you don't care about or tweak the scoring logic.
- **External link checking** — disabled by default; enable in settings if desired. All other checks work entirely offline.
- **Caching** — first scan builds cache (slower), subsequent scans use cache (faster). Cache expires after 24 hours.
