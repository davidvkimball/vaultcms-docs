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
- **Insert size** — optionally set a default image size when inserting (e.g., `200` for width or `200x100` for width and height).

### Property Integration

- **Paste into properties** — paste images directly into properties with a single action.
- **Multiple link formats** — choose from Obsidian default, path, relative path, wikilink, Markdown link, or custom format.
- **Default property names** — configure which property to use for images (default: `banner`) and icons (default: `icon`).
- **Alt text property** — optionally set a property name for image alt text/descriptions.
- **MDX support** — full compatibility with MDX files in addition to standard Markdown.
- **Referral text** — optionally insert attribution text and backlinks for remote images.

### Remote Image Conversion

- **Auto-convert remote images** — automatically convert remote image URLs to local files.
- **Convert on note open** — process remote images when opening a note (requires auto-convert enabled).
- **Convert on note save** — process remote images when saving a note (requires auto-convert enabled).
- **Batch conversion** — convert all remote images across your entire vault with a single command.
- **Rename during conversion** — show rename dialog for each converted image.

### Banner Images

- **Banner display** — display banner images from properties at the top of notes.
- **Device-specific settings** — configure independently for desktop, tablet, and phone: height, padding, note offset, view offset, fade, rounded corners, and animation.
- **Icon support** — display icons alongside banners with per-device size, background, frame, border, and alignment controls.
- **MDX compatible** — works with both Markdown and MDX files.
- **Static GIF option** — optionally force static images for animated GIFs in banners.

### Commands

- **Insert local image**: Open file picker to select and insert a local image.
- **Insert remote image**: Open remote image search modal. Activate with `CTRL + '`.
- **Insert local image to property**: Insert a local image into a property.
- **Insert remote image to property**: Insert a remote image into a property. Activate with `CTRL + SHIFT + '`.
- **Insert local image to icon property**: Insert a local image into the icon property.
- **Convert remote images**: Convert remote images to local files in the current note.
- **Convert all remote images**: Convert remote images to local files across all notes.

### Settings

- **General**: Enable/disable rename prompts for paste and drop actions, configure supported file extensions.
- **Image Services**: Configure API keys and proxy URLs for Unsplash, Pexels, and Pixabay.
- **Property Insertion**: Set default property names, link format, and alt text property.
- **Conversion**: Configure automatic conversion on note open/save.
- **Rename Options**: Customize name templates and descriptive image prompts.
- **Banner Images**: Configure device-specific banner and icon display settings.
- **Attachment Management**: Follow Obsidian's default, use same folder, subfolder, or a custom path with template variables.
- **Advanced**: Debug mode and supported file extensions.
