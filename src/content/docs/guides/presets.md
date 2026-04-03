---
title: Presets
description: Install Vault CMS pre-tuned for Starlight, Chiri, Slate, and other Astro themes.
---

Presets bundle Vault CMS settings for specific Astro themes so paths, content types, and plugin config match the theme without manual tuning.

## Available presets

Examples include **Starlight**, **Chiri**, and **Slate**. The full list is fetched at install time from the [vaultcms-presets](https://github.com/davidvkimball/vaultcms-presets) repository.

## Install with a preset

1. From your Astro project root, run `npx create-vaultcms` (or `npm` / `pnpm` / `yarn create vaultcms`).
2. When asked about a preset, choose **Yes** and pick your theme.
3. Open the installed folder in Obsidian when the CLI offers.

## Skip the prompt

Pass the template name explicitly:

```bash
npx create-vaultcms --template starlight
npx create-vaultcms --template chiri
npx create-vaultcms --template slate
```

You can also pass it as a positional argument:

```bash
npx create-vaultcms starlight
```

## What presets adjust

Typical behavior (exact steps depend on the preset):

- **Install target** — e.g. Starlight may default to `src/content` without an extra prompt.  
- **Vault-relative paths** — [Vault CMS plugin](/plugins/vault-cms/) config points at your project root correctly.  
- **`_GUIDE.md`** — Pulled from the main Vault CMS repo so the in-vault guide stays current.  
- **`.gitignore`** — Obsidian workspace state entries are added so only useful config is committed.  

## Astro Modular

[Astro Modular](https://github.com/davidvkimball/astro-modular) is a theme designed for Vault CMS end-to-end. See also [Theme comparison](/themes/comparison/).

## More

- Preset source: [github.com/davidvkimball/vaultcms-presets](https://github.com/davidvkimball/vaultcms-presets)  
- General install steps: [Installation](/guides/installation/)  
