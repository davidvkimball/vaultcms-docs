---
title: Data Files Editor
description: Edit data files like JSON, YAML, and more within Obsidian.
---

[Data Files Editor](https://github.com/davidvkimball/obsidian-data-files-editor) lets you create and edit non-Markdown file types directly within Obsidian. This is useful for managing configuration files, data files, and other assets in your Astro project without leaving the vault. Originally created by [ZukTol](https://github.com/ZukTol/obsidian-data-files-editor).

### Supported File Types

| File Type | Extensions |
| --- | --- |
| JSON | `.json` |
| YAML | `.yaml`, `.yml` |
| Plain Text | `.txt` |
| XML | `.xml` |
| Astro | `.astro` |
| TypeScript | `.ts` |
| CSS | `.css` |
| HTML | `.html` |
| JavaScript | `.js`, `.mjs` |

### Features

- **Syntax highlighting** for JSON, YAML, and other supported formats.
- **Autosave** to automatically save your edits (enabled by default).
- **Line wrapping** for long lines (enabled by default).
- **Context menu integration** to quickly create new files of any enabled type from the file explorer.

### Settings

Each file type can be individually toggled on or off:
- **Load**: Open files of that type in Data Files Editor.
- **Create**: Add a "New .[ext] file" option to the file explorer context menu.

Changes to load settings require an Obsidian restart to take effect.
