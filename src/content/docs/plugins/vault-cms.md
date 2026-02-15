---
title: Vault CMS (Plugin)
description: The core companion plugin with setup wizard.
---

[Vault CMS](https://github.com/davidvkimball/obsidian-vault-cms) is the core plugin that coordinates the experience. When you first open the vault, a setup wizard guides you through configuring Obsidian to work with your Astro project.

The wizard auto-detects your Astro project, lets you configure content types and frontmatter properties, and sets up all the companion plugins. If something seems off during the process, ensure you have copied the vault folder to a location within your Astro project (usually `src/content`).

Once configured, restart Obsidian and start at [Home Base](/plugins/home-base/).

### Commands

- **Open setup wizard**: Re-run the configuration wizard at any time.
- **Check Vault CMS setup**: Run a health check on your installation.
- **Download and apply preset**: Apply a theme preset (Starlight, Slate, or Chiri).

### Setup Wizard

The wizard walks you through the following steps:

1. Welcome and Astro project detection
2. Content types configuration
3. Default content type selection
4. Frontmatter property mapping
5. Editing toolbar preferences
6. Plugin configuration ([Bases CMS](/plugins/bases-cms/), [Astro Composer](/plugins/astro-composer/), [SEO](/plugins/seo/))
7. Optional plugins selection
8. Git integration and project optimization
9. Finalization
