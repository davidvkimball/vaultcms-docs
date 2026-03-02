---
title: Installation
description: How to install Vault CMS using the CLI or manual methods.
---

Vault CMS is designed to be installed directly into your Astro project's content directory. But it can work at the project's root level, too. 

## Prerequisites

- [Node.js 22.x](https://nodejs.org/en)
- [Astro project](https://astro.build/) (supports [most themes](astro.build/themes))
- [Obsidian](https://obsidian.md)
- [Git](https://git-scm.com/)

## CLI Installation (Recommended)

The fastest way to install Vault CMS is using our dedicated CLI tool. Run this command in the root of your Astro project:

```bash
# Using pnpm
pnpm create vaultcms

# Using npm
npm create vaultcms

# Using yarn
yarn create vaultcms
```

### Installation Path
When you run the command, it will ask you where to install the vault. 
- **Default**: `src/content` (Recommended for Astro projects)
- **Root**: You can also install it in the root of your project if you prefer.

The CLI will automatically:
1. Download the latest Vault CMS configuration.
2. Extract the `_bases` and `.obsidian` folders.
3. Update your `.gitignore` with the recommended excludes.

## Preset Templates

If you are using a specific Astro theme like Starlight, Slate, or Chiri, you can install a preconfigured preset:

```bash
# Using pnpm
pnpm create vaultcms -- --template starlight

# Using npm
npm create vaultcms -- --template starlight

# Using yarn
yarn create vaultcms --template starlight
```

Available templates are listed in the [Vault CMS Presets repository](https://github.com/davidvkimball/vault-cms-presets).

## Manual Installation

If you prefer to install manually without the CLI:

1. Download the [latest release ZIP](https://github.com/davidvkimball/vault-cms/archive/refs/heads/master.zip).
2. Extract the contents.
3. Copy the `_bases` and `.obsidian` folders into your Astro project (e.g., `src/content`).

## Post-Installation

Once installed, open and initialize with Obsidian:
1. Open Obsidian and select **Open folder as vault**.
2. Select the folder where you placed the `.obsidian` directory.
3. The **Vault CMS Plugin** will automatically detect your Astro project.
4. A setup wizard will guide you through configuring your content types and properties.
5. You're ready to start writing!
