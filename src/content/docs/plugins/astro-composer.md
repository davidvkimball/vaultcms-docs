---
title: Astro Composer
description: Automating content creation and slug management.
---

[Astro Composer](https://github.com/davidvkimball/obsidian-astro-composer) is handy for easily creating new notes as Astro content like blog posts or pages.

Just create a new note with `CTRL + N`, type in a title in Title case or with special characters, and the note or folder name generated is a kebab-case version of the title without special characters. This is ideal for automating content page slugs.

### Features

- **New post dialog**: Prompts for a title when creating a new note, auto-generating a kebab-case filename (e.g., "My Blog Post" becomes `my-blog-post.md`).
- **Property standardization**: Updates a note's properties to match a customizable template, preserving existing values and adding missing properties in the specified order.
- **Draft management**: Optionally adds an underscore prefix (e.g., `_my-post.md`) to hide drafts from Astro.
- **Internal link conversion**: Converts Obsidian wikilinks and Markdown links to Astro-friendly links, supporting both file-based and folder-based structures.
- **Content types**: Create multiple content types (posts, pages, docs, etc.) with independent folder paths, templates, and link base paths. Wildcard folder patterns are supported (e.g., `docs/*`).
- **Partial MDX support**: Can process existing `.mdx` files (link conversion, property standardization), but file creation currently only supports `.md`.

### Commands

- **Rename current content**: Update the title property and automatically rename the file or parent folder in kebab-case. Activate with `CTRL + R`.
- **Standardize properties**: Apply the properties template to the current note. Preserves existing values, adds missing properties, and maintains the template's order.
- **Convert internal links**: Convert Obsidian links to Astro-compatible Markdown links.
- **Open terminal**: Start a terminal in the relevant directory. Activate with `CTRL + SHIFT + D`. Works on Windows, macOS, and Linux.
- **Edit Astro config**: Open your `astro.config.mjs` or `config.ts` file. Activate with `CTRL + SHIFT + ,`.

### Settings

- **Automate post creation**: Enable the title dialog for new notes created via `CTRL + N`.
- **Auto-insert properties**: Automatically apply the properties template when creating new files.
- **Creation mode**: Choose file-based (`my-post.md`) or folder-based (`my-post/index.md`) structure.
- **Posts folder**: Set the folder for blog posts (leave blank for vault root).
- **Use underscore prefix for drafts**: Add `_` prefix to hide drafts from Astro.
- **Date format**: Set the properties date format (e.g., `YYYY-MM-DD`).
- **Properties template**: Define the template for new posts and standardization. Supports `{{title}}`, `{{date}}`, and `{{slug}}` placeholders.
- **Excluded directories**: Directories to exclude from automation, separated by `|`.
