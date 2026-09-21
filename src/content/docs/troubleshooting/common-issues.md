---
title: Common issues
description: Fixes for typical installation and day-to-day problems with Vault CMS.
sidebar:
  order: 2
---

### Installation: "No Astro project found"

The installer expects `astro.config.mjs` (or `.ts`) at or above the target path. Run it from your **Astro project root** (next to `package.json`). Default install target is usually `src/content`. If the vault landed in the wrong place, run `npx create-vaultcms` again from the correct root.

### Home base is empty or wrong

1. Confirm Obsidian opened the folder that contains `.obsidian` (often `src/content`).
2. Under **Settings → Community plugins**, ensure **Bases CMS** and **Home Base** are enabled.
3. Open **Home** in the tab bar or `_bases/Home.base` from the file explorer.
4. If you installed at the **project root**, base formulas may filter on `src/content/`. Open `Home.base` and check paths; re-run the installer from the root if formulas look wrong.

### Push fails: Git not configured

Run `git remote -v` in the project. You need a remote and working auth (SSH or HTTPS). Configure credentials under **Settings → Community plugins → Git**.

### Frontmatter is not inserting automatically

In **Settings → Astro Composer**, enable **Auto-insert Properties** (or equivalent). Ensure a content type matches the folder you are in. Re-run **[Vault CMS: Open Wizard](/plugins/vault-cms/)** if types are missing.

If Astro Composer has no content types at all, and its settings show no creation type, the wizard could not reach it when it ran. That usually means Astro Composer was not enabled or had not finished loading. Enable it under **Settings → Community plugins**, fully restart Obsidian so every plugin loads, then run the wizard again.

### I used the GitHub template button and nothing was configured

Symptoms: the wizard appears to finish, but new notes have no frontmatter, Astro Composer has no content types, and plugins seem missing.

The Vault CMS vault lives inside a dotfolder (`src/content/.obsidian/`). GitHub's **Use this template** button does not reliably copy dotfolders, so the project can arrive with an empty or missing vault. Because dotfolders are hidden in most file explorers and in GitHub's web interface, the repository looks complete when it is not.

**Check first.** Confirm that `src/content/.obsidian/` exists and contains a `plugins` folder. On macOS press `Cmd + Shift + .` in Finder to show hidden files; on Windows enable **Hidden items** in File Explorer's View tab.

**If it is missing or empty**, use one of these instead:

- Run `npx create-vaultcms` in your project. The installer copies dotfolders correctly by design.
- Or `git clone` the theme repository rather than using the template button, then remove `.git` and start your own history.

Both approaches bring the vault across intact. See [Installation](/get-started/installation/) for the full steps.

### Wiki links appear in Astro output

Use **Astro Composer: Convert Wikilinks to Astro** from the command palette. Optionally enable background wikilink processing in Astro Composer settings.

### Wizard detected the wrong content folder

Run **Vault CMS: Open Wizard** again and adjust the install target and content types.

### After manual install, Home base does not work

Copy **both** `.obsidian/` and `_bases/`, and `_GUIDE.md` if you want the in-vault guide. Open the folder with **Open folder as vault**, not single files.

### Community plugins will not load

**Settings → Community plugins → Turn on community plugins**, then enable each needed plugin (Vault CMS, Astro Composer, Git, etc.).

:::tip
Still stuck? [Discord](https://discord.gg/gyrNHAwHK8) · [GitHub Issues](https://github.com/davidvkimball/vaultcms/issues) · [FAQ](/troubleshooting/faq/)
:::
