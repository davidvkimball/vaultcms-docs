---
title: Alias File Name History
description: Keep track of old post or page URLs.
---

[Alias File Name History](https://github.com/davidvkimball/obsidian-alias-filename-history) helps you keep track of old post or page URLs if you rename your files. Old file names and parent folder names are stored as aliases in the `aliases` property, making it ideal for generating redirect rules in your Astro templates.

### Features

- **Automatic alias tracking** — when a file or parent folder is renamed (e.g., via [Astro Composer](/plugins/astro-composer/)'s `CTRL + R`), the old filename is stored as an alias automatically after a configurable timeout.
- **Parent folder tracking** — optionally stores the old parent folder name as an alias when renamed (off by default).
- **Ignore patterns** — skip adding aliases for file names or folder names matching regex patterns (e.g., `^_` for underscore prefixes, `^Untitled$`). Supports wildcard folder patterns (`/**`, `/*`).
- **Case sensitivity** — toggle to treat case differences (e.g., "Note" vs. "note") as unique aliases.
- **Folder filtering** — restrict tracking to specific folders or exclude others.
- **File extension support** — tracks `.md` files by default, with support for custom extensions (e.g., `.mdx`).
- **Auto-create properties** — optionally creates the `aliases` property if missing (on by default).

### Settings

| Setting | Default |
| --- | --- |
| Ignore regex patterns | `^_`, `^Untitled$`, `^Untitled \d+$` |
| Timeout seconds | 5 |
| Case sensitive uniqueness | Off |
| Auto-create properties | On |
| Track folder renames | Off |
| File extensions | `md` |
| Include folders | (empty = all) |
| Exclude folders | (empty = none) |
