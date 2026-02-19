---
title: Astro Composer
description: Automating content creation and slug management.
---

[Astro Composer](https://github.com/davidvkimball/obsidian-astro-composer) is handy for easily creating new notes as Astro content like blog posts or pages.

Just create a new note with `CTRL + N`, type in a title in Title case or with special characters, and the note or folder name generated is a kebab-case version of the title without special characters. This is ideal for automating content page slugs.

### Features

- **New post dialog**: Prompts for a title when creating a new note, auto-generating a kebab-case filename (e.g., "My Blog Post" becomes `my-blog-post.md`).
- **Content types**: Create multiple content types (posts, pages, docs, etc.) with independent folder paths, templates, link base paths, and creation modes. Wildcard folder patterns are supported (e.g., `docs/*`, `docs/*/*`).
- **MDX support**: Can create `.mdx` files and process existing ones. MDX file creation is configurable per content type.
- **Property standardization**: Updates a note's properties to match a customizable template, preserving existing values and adding missing properties in the specified order.
- **Draft management**: Optionally adds an underscore prefix (e.g., `_my-post.md`) to hide drafts from Astro. Configurable draft property, draft logic (true-is-draft or false-is-draft), and automatic date syncing when publishing.
- **Internal link conversion**: Converts Obsidian wikilinks and Markdown links to Astro-friendly links, supporting both file-based and folder-based structures. Optional trailing slash on links.
- **Copy heading link**: Adds a context menu option to copy heading links in either Obsidian or Astro format.
- **Background file processing**: Automatically processes files changed in the background (e.g., via Git pull) when enabled.
- **MDX file explorer visibility**: Optionally makes `.mdx` files visible in the file explorer as Markdown files.

### Commands

- **Rename current content**: Update the title property and automatically rename the file or parent folder in kebab-case. Activate with `CTRL + R`.
- **Standardize properties**: Apply the properties template to the current note.
- **Convert internal links**: Convert Obsidian links to Astro-compatible Markdown links.
- **Open terminal**: Start a terminal in the relevant directory. Activate with `CTRL + SHIFT + D`. Configurable terminal application (Terminal, iTerm, PowerShell, Windows Terminal, gnome-terminal, konsole, xterm).
- **Edit Astro config**: Open your `astro.config.mjs` or `config.ts` file. Activate with `CTRL + SHIFT + ,`.
- **Create new [content type]**: Dynamic commands are created for each enabled content type to quickly create new files.

### Settings

- **Automate post creation**: Enable the title dialog for new notes created via `CTRL + N`.
- **Auto-insert properties**: Automatically apply the properties template when creating new files.
- **Creation mode**: Choose file-based (`my-post.md`) or folder-based (`my-post/index.md`) structure.
- **Posts folder**: Set the folder for blog posts (leave blank for vault root).
- **Use underscore prefix for drafts**: Add `_` prefix to hide drafts from Astro.
- **Draft property**: Custom property name for draft status.
- **Draft logic**: Whether `true` means draft or published.
- **Publish date field**: Property to update when switching from draft to published.
- **Sync draft date**: Automatically update the date property when publishing.
- **Date format**: Set the properties date format (e.g., `YYYY-MM-DD`).
- **Properties template**: Define the template for new posts. Supports `{{title}}`, `{{date}}`, and `{{slug}}` placeholders.
- **Excluded directories**: Directories to exclude from automation, separated by `|`.
- **Copy heading link format**: Choose between Obsidian or Astro link formats.
- **Add trailing slash to links**: Append trailing slash to converted links.
- **Show MDX files in explorer**: Make `.mdx` files visible in the file explorer.
- **Process background file changes**: Automatically process files changed outside the editor.

### Per-Content-Type Settings

Each content type can be independently configured with:

- Folder path (with wildcard support)
- Link base path
- Properties template
- Creation mode (file-based or folder-based)
- Index file name (for folder-based mode)
- Ignore subfolders toggle
- Underscore prefix for drafts toggle
- MDX file extension toggle
- Modified date field
