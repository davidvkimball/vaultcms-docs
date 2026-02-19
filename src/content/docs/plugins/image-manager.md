---
title: Image Manager
description: Managing images and SEO assets.
---

[Image Manager](https://github.com/davidvkimball/obsidian-image-manager) allows you to quickly drag and drop image files, insert images with a command, or paste images directly from your clipboard. It unifies functionality from multiple image-related plugins into one cohesive experience.

### Features

- **Local file picker** — select images from your computer using the OS native file explorer.
- **Remote image search** — search and download images from Unsplash, Pexels, and Pixabay with filters for orientation, size, and more.
- **Paste and drop** — paste images from clipboard or drag and drop files directly into notes.
- **Automatic rename dialog** — prompt to rename images when pasted or inserted, with descriptive image naming in kebab-case.
- **Template-based naming** — customize image names using template variables (`{{fileName}}`, `{{dirName}}`, `{{DATE}}`, `{{TIME}}`, etc.).
- **Smart deduplication** — automatically handles duplicate filenames with intelligent numbering.
- **Banner images** — display a banner on top of any Markdown file when a valid `image` property is defined. Configurable per device (desktop, tablet, phone) with customizable height, offset, border radius, fade effects, and icon support. Matches the cover image used in the [Bases CMS](/plugins/bases-cms/) view by default.

### Property Integration

- **Paste into properties** — paste images directly into properties with a single action.
- **Multiple link formats** — choose from Obsidian default, path, wikilink, Markdown link, relative path, or custom format.
- **MDX support** — full compatibility with MDX files in addition to standard Markdown.
- **Default property name** — configure which property to use when inserting images into properties.

### Remote Image Conversion

- **Auto-convert remote images** — automatically convert remote image URLs to local files.
- **Convert on note open/save** — process remote images when opening or saving a note.
- **Batch conversion** — convert all remote images across your entire vault with a single command.
- **Rename during conversion** — show rename dialog for each converted image.

### Commands

- **Insert local image**: Open file picker to select and insert a local image.
- **Insert remote image**: Open remote image search modal. Activate with `CTRL + '`.
- **Insert local image to property**: Insert a local image into a property.
- **Insert remote image to property**: Insert a remote image into a property. Activate with `CTRL + SHIFT + '`.
- **Convert remote images**: Convert remote images to local files in the current note.
- **Convert all remote images**: Convert remote images to local files across all notes.

### Settings

- **General**: Enable/disable rename prompts for paste and drop actions.
- **Image Services**: Configure API keys and proxy URLs for Unsplash, Pexels, and Pixabay.
- **Property Insertion**: Set default property name and link format.
- **Conversion**: Configure automatic conversion on note open/save.
- **Rename Options**: Customize name templates and descriptive image prompts.
- **Banner Images**: Configure device-specific banner display settings.
- **Attachment Management**: Follow Obsidian's default, use same folder, subfolder, or a custom centralized location.
