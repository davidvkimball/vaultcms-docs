---
title: Installation
description: CLI quick start, presets, manual install, and what the installer changes on disk.
---

Vault CMS installs into your Astro **content** directory by default (usually `src/content`); installing at the **project root** is also supported.

:::tip
Using Claude Code, Cursor, or Claude Desktop? Skip the CLI and let your AI agent handle the install — see the [MCP server guide](/guides/mcp-server/).
:::

## Prerequisites

- **[Node.js](https://nodejs.org/)** — **20 or later**; **22.x** is a good default for current Astro tooling. Required to run `create-vaultcms`.
- **[Astro](https://astro.build/)** project (see [themes](https://astro.build/themes))
- **[Obsidian](https://obsidian.md)** (desktop)
- **[Git](https://git-scm.com/)** — for publishing from Obsidian and normal project version control

## CLI installation (recommended)

From your Astro project root (the folder that contains `astro.config.mjs`):

```bash
npx create-vaultcms
# or: npm create vaultcms | pnpm create vaultcms | yarn create vaultcms
```

1. The CLI detects your Astro project and may list content collections.
2. Choose the install location — **default `src/content`**, or `.` for the project root.
3. Optional: choose a [preset](/guides/presets/) for your theme (`--template` or the interactive prompt).
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

Other package managers and template names work the same way. See [Presets](/guides/presets/) for positional `npx create-vaultcms starlight` and the full preset list on GitHub.

## Manual installation

Use manual install if you cannot run Node, want to inspect files first, or are wiring a custom monorepo layout. The CLI is still the recommended path for most users.

1. **Download** the [Vault CMS ZIP](https://github.com/davidvkimball/vaultcms/archive/refs/heads/master.zip) or clone `https://github.com/davidvkimball/vaultcms.git`.
2. **Choose the target** inside your Astro project — usually `src/content` or the repo root (same tradeoffs as the CLI).
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

- `Ctrl/Cmd + M` or the **Home** icon — content dashboard  
- `Ctrl/Cmd + N` — new content (with Astro Composer templates when configured)  
- **Git: Push** — publish; see [Publishing](/concepts/publishing/) and [Git plugin](/plugins/git/)

## Problems?

See [Common issues](/guides/troubleshooting-common-issues/) and [FAQ](/guides/troubleshooting-faq/).
