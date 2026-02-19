---
title: Vault CMS (Plugin)
description: The core companion plugin with setup wizard.
---

[Vault CMS](https://github.com/davidvkimball/obsidian-vault-cms) is the core plugin that coordinates the experience. When you first open the vault, a setup wizard guides you through configuring Obsidian to work with your Astro project.

The wizard auto-detects your Astro project, lets you configure content types and properties, and sets up all the companion plugins. If something seems off during the process, ensure you have copied the vault folder to a location within your Astro project (usually `src/content`).

Once configured, restart Obsidian and start at [Home Base](/plugins/home-base/).

### Commands

- **Open setup wizard**: Re-run the configuration wizard at any time.
- **Check Vault CMS setup**: Run a health check on your installation and configuration.
- **Download and apply preset**: Sync your local configuration with a remote preset repository.

### Setup Wizard

The wizard walks you through 13 steps:

1. **Welcome**: Overview of the setup process.
2. **Project Detection**: Locates your Astro project by identifying config files (`astro.config.mjs`, etc.).
3. **Content Types**: Scans your project to identify and categorize content folders (posts, pages, docs, etc.).
4. **Default Content Type**: Select the primary content type for new notes.
5. **Properties**: Analyzes existing content to map properties (title, date, description, etc.).
6. **Editing Toolbar Preference**: Toggles the [Editing Toolbar](/plugins/editing-toolbar/) based on your workflow.
7. **Bases CMS Configuration**: Dynamically creates CMS views for your content types.
8. **Astro Composer Configuration**: Bridges Obsidian with Astro's content management via [Astro Composer](/plugins/astro-composer/).
9. **SEO Configuration**: Sets up scanning directories and property mappings for [SEO](/plugins/seo/) audits.
10. **Optional Plugins**: Enable or disable recommended ecosystem plugins.
11. **Ignore Files**: Automatically optimizes `.gitignore` and Vite configurations for your project.
12. **Git Integration**: Securely links your project to GitHub (PAT stored in Obsidian Secrets). Can initialize Git, create a repository, and perform the initial push.
13. **Finalize**: Review summary and apply the final configuration.

### Bases CMS Folder Detection

The wizard dynamically detects your [Bases CMS](/plugins/bases-cms/) home file. It searches the following folders in order of preference:

| Folder | File names checked |
| --- | --- |
| `_bases` | `Home.base`, `home.base`, `index.base` |
| `bases` | `Home.base`, `home.base`, `index.base` |
| `_home` | `Home.base`, `home.base`, `index.base` |
| `home` | `Home.base`, `home.base`, `index.base` |
| `_base` | `Home.base`, `home.base`, `index.base` |
| `base` | `Home.base`, `home.base`, `index.base` |

If no existing file is found, the wizard defaults to creating `_bases/Home.base`.

### Astro Theme Presets

Vault CMS supports curated configuration presets for popular Astro themes. These presets automatically map content types, properties, and folder structures to match your theme's expectations.

- **Starlight**
- **Slate**
- **Chiri**

Use the **Download and apply preset** command to fetch the latest configurations from the [Vault CMS Presets](https://github.com/davidvkimball/vault-cms-presets) repository.
