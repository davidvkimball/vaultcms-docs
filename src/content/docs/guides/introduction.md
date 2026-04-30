---
title: Introduction
description: Overview, philosophy, and default settings for Vault CMS.
---

## What is Vault CMS?

Vault CMS lets you use [Obsidian](https://obsidian.md) as a content management system for your [Astro](https://astro.build) site. Content stays in plain Markdown in your repo—no separate CMS server. You get preconfigured settings, plugins, and a setup wizard.

**Learn the flow:** [How it works](/concepts/how-it-works/) · [Installation](/guides/installation/) · [Publishing](/concepts/publishing/)

**Community:** [Discord](https://discord.gg/gyrNHAwHK8)

## Setup walkthrough

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 1.5rem 0;">
  <iframe
    src="https://www.youtube.com/embed/MnXoikTajfI"
    title="Vault CMS setup walkthrough"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
  ></iframe>
</div>

## Philosophy 

1. **Plug-and-play Astro blogging experience**: Designed to work out of the box with your Astro project.
2. **Emphasis on customization and modularity**: Every part of the system is replaceable or adjustable.
3. **Visual parity between backend and frontend**: What you see in Obsidian should closely match what your readers see.

## Compatibility

Vault CMS works with most Astro themes. The setup wizard automatically detects your content types, frontmatter properties, and folder structure.

**Works best with:** Themes that use flat frontmatter properties (title, date, description, tags, draft, image, etc.). This covers the majority of blog, portfolio, and documentation themes.

**Limited support for:** Themes with deeply nested YAML properties (e.g. `hero.image.file`, `settings.layout.columns`, `sidebar.order`). Obsidian's properties panel only supports flat key-value pairs by default. Install the [Nested Properties](/plugins/nested-properties/) plugin to edit nested YAML visually, or use the [Data Files Editor](/plugins/data-files-editor/) plugin to edit the raw YAML directly.

See the [Theme Comparison](/themes/comparison/) for a breakdown of which themes work best with Vault CMS.

## Default Settings

It's an opinionated Obsidian vault, but allows for lots of customizability. Here's what's on by default.

1. Markdown links are used in favor of wikilinks.
2. Some core plugins are disabled (details below).
3. Indentation guides have been disabled.
4. Inline title has been hidden to prioritize the `title` property via [Property Over File Name](/plugins/property-over-file-name/).
5. Custom [hotkeys](/guides/vault-hotkeys/) have been set.
6. Community plugins have been enabled to enhance the [Astro](/plugins/astro-composer/) workflow.

## Plugins 

### Disabled Core Plugins: 
- Canvas
- Daily notes
- Graph view
- Note composer
- Page preview
- Templates
- Sync

### Enabled Community Plugins: 
- [File Name History](/plugins/file-name-history/)
- [Astro Composer](/plugins/astro-composer/)
- [Bases CMS](/plugins/bases-cms/)
- [BRAT](/plugins/brat/)
- [Data Files Editor](/plugins/data-files-editor/)
- [Editing Toolbar](/plugins/editing-toolbar/)
- [Explorer Focus](/plugins/explorer-focus/)
- [Git](/plugins/git/)
- [Home Base](/plugins/home-base/)
- [Image Manager](/plugins/image-manager/)
- [Omnisearch](/plugins/omnisearch/)
- [Oxygen Settings](/plugins/oxygen-settings/)
- [Property Over File Name](/plugins/property-over-file-name/)
- [SEO](/plugins/seo/)
- [Settings Search](/plugins/settings-search/)
- [Tag Wrangler](/plugins/tag-wrangler/)
- [UI Tweaker](/plugins/ui-tweaker/)
- [Vault CMS (Plugin)](/plugins/vault-cms/)
- [Zen Mode](/plugins/zen-mode/)
