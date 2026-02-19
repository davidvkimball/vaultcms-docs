---
title: Property Over File Name
description: Use the title property as a primary label instead of its file name.
---

[Property Over File Name](https://github.com/davidvkimball/obsidian-property-over-file-name) lets you use a specified property (like `title`) as the primary label instead of the file name when linking, searching, or displaying notes.

Using title properties is more helpful visually and semantically since note file names are actually page slugs in kebab case. Works especially well with [Astro Composer](/plugins/astro-composer/) for managing content slugs.

### Features

- **Link suggester** — type `[[` to see suggestions based on the `title` property. The title is automatically set as the hyperlinked text.
- **Quick switcher** — search notes by title with `CTRL + O`.
- **Tab titles** — tabs display the note's `title` property instead of the file name.
- **Graph view** — nodes display the title property.
- **Backlinks** — backlinks panel shows title properties.
- **Bookmarks** — bookmarks display title properties.
- **Window frame** — browser title bar shows the title property.
- **File explorer** — file explorer shows title properties.
- **Drag-and-drop** — works when dragging notes from file explorer into a note.
- **New note creation** — supports creating new notes via link suggester and quick switcher.
- **Folder note support** — specify filename pattern for folder notes.
- **MDX support** — optionally enable property display for `.mdx` files.

### Settings

| Setting | Default |
| --- | --- |
| Property key | `title` |
| When linking notes | On |
| In Quick Switcher | On |
| In tab titles | On |
| In graph view | On |
| In backlinks | On |
| In bookmarks | On |
| In window frame | On |
| In file explorer | On |
| Drag-and-drop | On |
| Include file name in searches | Off |
| Include aliases in searches | Off |
| Use simple search | Off |
| Enable MDX support | Off |
| Folder note filename | (empty) |
