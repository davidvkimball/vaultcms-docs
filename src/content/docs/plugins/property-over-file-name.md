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
- **Window frame** — browser title bar shows the title property.
- **File explorer** — file explorer shows title properties.
- **New note creation** — supports creating new notes via link suggester and quick switcher.
- **Drag-and-drop** — works when dragging notes from file explorer into a note.
- **Folder note support** — specify filename pattern for folder notes.

### Settings

| Setting | Description |
| --- | --- |
| Property key | The property to use for titles (default: `title`) |
| When linking notes | Enable property-based titles in link suggester |
| In Quick Switcher | Enable property-based titles in Quick Switcher |
| In tab titles | Enable property-based titles in tab headers |
| In graph view | Enable property-based titles in graph view |
| In backlinks | Enable property-based titles in backlinks panel |
| In window frame | Enable property-based titles in window title bar |
| In file explorer | Enable property-based titles in file explorer |
| Include file name in searches | Include note file names in fuzzy search results |
| Include aliases in searches | Include `aliases` property in fuzzy search results |
| Use simple search | Toggle simple search mode for larger vaults |
| Folder note filename | Specify filename pattern for folder notes |
