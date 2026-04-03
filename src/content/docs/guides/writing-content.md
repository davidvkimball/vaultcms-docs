---
title: Writing content
description: Create and edit posts in Obsidian with Vault CMS defaults.
---

Vault CMS uses Obsidian as the editor: new notes, formatting, tags, and focus modes are available from the keyboard and toolbar. See [Vault hotkeys](/guides/vault-hotkeys/) for the full list.

## Create a new note

`Ctrl/Cmd + N` creates a file using your default content type; [Astro Composer](/plugins/astro-composer/) can insert frontmatter automatically.

:::tip
New notes often include `draft: true` so you do not publish by accident.
:::

## Home base

The **Home** view is a grid of your content: drafts, metadata, and bulk actions.

- `Ctrl/Cmd + M` — open Home  
- Or click the **Home** icon in the tab bar  

See [Home Base](/plugins/home-base/) and [Bases CMS](/plugins/bases-cms/).

## Edit vs reading mode

- **Editing** — write with the live toolbar.  
- **Reading** — preview rendered Markdown.  

Toggle with the book icon or `Ctrl/Cmd + E`.

## Editing toolbar

In edit mode, the [Editing Toolbar](/plugins/editing-toolbar/) offers bold, italic, headings, lists, links, code, and callouts. `Ctrl/Cmd + Shift + C` inserts a callout. `Ctrl/Cmd + Shift + E` toggles the toolbar.

## Tags

Tags live in the properties panel. Use [Tag Wrangler](/plugins/tag-wrangler/) to rename or merge tags across the vault. In frontmatter: `tags: [astro, tutorial]`.

## Markdown links

Vault CMS prefers standard Markdown links for Astro. For `[[wikilinks]]`, run **Astro Composer: Convert Wikilinks to Astro** from the command palette.

## Rename a note

`Ctrl/Cmd + R` runs Astro Composer’s rename flow so links can update with the file.

## Focus writing

`Ctrl/Cmd + Shift + Z` toggles [Zen Mode](/plugins/zen-mode/) to hide chrome and focus on the document.
