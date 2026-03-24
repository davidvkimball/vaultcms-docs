---
title: Nested Properties
description: Edit nested YAML properties natively in Obsidian's properties panel.
---

[Nested Properties](https://github.com/mnaoumov/obsidian-nested-properties) adds support for nested YAML structures in Obsidian's properties panel. Originally created by [mnaoumov](https://github.com/mnaoumov).

Some Astro themes use nested properties in their content schemas, for example `hero.image.file` or `sidebar.order`. Without this plugin, Obsidian's properties panel can only display flat key-value pairs, requiring you to edit nested YAML manually with the [Data Files Editor](/plugins/data-files-editor/) plugin.

### What It Does

- Renders nested YAML objects and arrays directly in the properties panel
- Supports expanding and collapsing nested sections
- Allows adding, editing, and removing nested keys without touching raw YAML
- Works alongside Obsidian's built-in property types

### When You Need It

- Your theme uses nested properties (like Starlight's `sidebar.order`, `sidebar.label`, or `hero` object)
- You have content types with complex nested schemas
- You prefer editing properties visually instead of in raw YAML

### Installation

Nested Properties is available as a community plugin. Install it from **Settings > Community Plugins > Browse** and search for "Nested Properties."

If it's not yet available in the community directory, install via [BRAT](/plugins/brat/) using the repository URL: `mnaoumov/obsidian-nested-properties`
