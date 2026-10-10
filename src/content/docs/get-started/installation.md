---
title: Installation
description: CLI quick start, presets, manual install, and what the installer changes on disk.
sidebar:
  order: 2
---

Vault CMS installs into your Astro **content** directory by default (usually `src/content`); installing at the **project root** is also supported.

:::caution[Using Astro Modular? Skip this page.]
[Astro Modular](/themes/astro-modular/) already includes Vault CMS, preconfigured. Installing Vault CMS on top of it copies a second `.obsidian/` and `_bases/` over the ones the theme ships with. Follow the [Astro Modular getting started steps](/themes/astro-modular/#getting-started) instead.
:::

:::tip
Using Claude Code, Cursor, or Claude Desktop? Skip the CLI and let your AI agent handle the install, see the [MCP server guide](/get-started/mcp-server/).
:::

## Prerequisites

- **[Astro](https://astro.build/)** project (see [themes](https://astro.build/themes))
- **[Obsidian](https://obsidian.md)** (desktop)
- **[Git](https://git-scm.com/)**: for publishing from Obsidian and normal project version control
- **[Node.js](https://nodejs.org/)** (optional): **20 or later**. Needed only for the CLI installation. [Manual installation](#manual-installation) gives the same result without Node.

Vault CMS itself doesn't need Node.js. Your host (Netlify, Vercel, Cloudflare) builds the site when you publish, so Node on your own computer is only for previewing the site locally or running the CLI.

## CLI installation

The fastest option if you already have Node.js. From your Astro project root (the folder that contains `astro.config.mjs`):

```bash
npx create-vaultcms
# or: npm create vaultcms | pnpm create vaultcms | yarn create vaultcms
```

1. The CLI detects your Astro project and may list content collections.
2. Choose the install location, **default `src/content`**, or `.` for the project root.
3. Optional: choose a [preset](/get-started/presets/) for your theme (`--template` or the interactive prompt).
4. When asked, open Obsidian and **Open folder as vault** on the directory that was just populated.
5. Complete the setup wizard (**Vault CMS: Open Wizard**) if it does not open automatically.

### What the installer does

- Copies **`.obsidian/`** (settings, community plugins, hotkeys)
- Copies **`_bases/`** (Home.base dashboard)
- Copies **`_GUIDE.md`** (in-vault quick reference)
- Updates **`.gitignore`** at the project root with Obsidian workspace excludes (see below)
- Adjusts internal paths when you install at root vs `src/content`

### Preset templates

```bash
npx create-vaultcms --template starlight
```

Other package managers and template names work the same way. See [Presets](/get-started/presets/) for positional `npx create-vaultcms starlight` and the full preset list on GitHub.

## Manual installation

Manual installation copies the same files as the CLI, so the result is identical. Choose it if you don't have Node.js, want to see exactly what goes into your project, or are wiring a custom monorepo layout. The only extra step is updating `.gitignore` yourself (step 6).

1. **Download** the [Vault CMS ZIP](https://github.com/davidvkimball/vaultcms/archive/refs/heads/master.zip) or clone `https://github.com/davidvkimball/vaultcms.git`.
2. **Choose the target** inside your Astro project, usually `src/content` or the repo root (same tradeoffs as the CLI).
3. **Copy** from the Vault CMS tree into that target:
   - `.obsidian/`
   - `_bases/`
   - `_GUIDE.md`

:::caution
If `.obsidian` already exists in the target folder, back it up first. Copying overwrites those files.
:::

**PowerShell** (run from your machine, adjusting paths):

```powershell
Copy-Item -Recurse -Force .\vaultcms\.obsidian .\your-project\src\content\
Copy-Item -Recurse -Force .\vaultcms\_bases .\your-project\src\content\
Copy-Item -Force .\vaultcms\_GUIDE.md .\your-project\src\content\
```

4. In Obsidian: **Manage vaults → Open folder as vault** → select that directory.
5. Run **Vault CMS: Open Wizard** from the command palette.
6. **Append to `.gitignore`** at the Astro project root (the CLI does this for you automatically):

```text
# Vault CMS / Obsidian
.obsidian/workspace.json
.obsidian/workspace-mobile.json
.ref/
```

## After installation

- `Ctrl/Cmd + M` or the **Home** icon, content dashboard  
- `Ctrl/Cmd + N`, new content (with Astro Composer templates when configured)  
- **Git: Push**: publish; see [Publishing](/concepts/publishing/) and [Git plugin](/plugins/git/)

## Problems?

See [Common issues](/troubleshooting/common-issues/) and [FAQ](/troubleshooting/faq/).
