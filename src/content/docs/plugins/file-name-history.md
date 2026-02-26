---
title: File Name History
description: Keep track of old post or page URLs.
aliases:
  - alias-file-name-history
---


[File Name History](https://github.com/davidvkimball/obsidian-file-name-history) helps you keep track of old post or page URLs if you rename your files. Old file names and parent folder names are stored as aliases in the `aliases` property by default, making it ideal for generating redirect rules in your Astro templates.

### Features

- **Automatic file name change tracking** — when a file or parent folder is renamed (for example via [Astro Composer](/plugins/astro-composer/)'s `CTRL + R`), the old file name is stored as an alias (or another history property you define) automatically after a configurable timeout.
- **Parent folder tracking** — optionally stores the old parent folder name as a string when renamed (off by default).
- **Ignore patterns** — skip storing history for file names or folder names matching regex patterns (e.g., `^_` for underscore prefixes, `^Untitled$`). Supports wildcard folder patterns (`/**`, `/*`).
- **Case sensitivity** — toggle to treat case differences (e.g., "Note" vs. "note") as unique list items.
- **Folder filtering** — restrict tracking to specific folders or exclude others.
- **File extension support** — tracks `.md` files by default, with support for custom extensions (e.g., `.mdx`).
- **Auto-create properties** — optionally creates the `aliases` or relevant property if missing (on by default).

### Settings

| Setting                   | Default                              |
| ------------------------- | ------------------------------------ |
| History property name     | `aliases`                            |
| Ignore regex patterns     | `^_`, `^Untitled$`, `^Untitled \d+$` |
| Timeout seconds           | 5                                    |
| Case sensitive uniqueness | Off                                  |
| Auto-create properties    | On                                   |
| Track folder renames      | Off                                  |
| File extensions           | `md`                                 |
| Include folders           | (empty = all)                        |
| Exclude folders           | (empty = none)                       |
