---
title: Common issues
description: Fixes for typical installation and day-to-day problems with Vault CMS.
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

### Wiki links appear in Astro output

Use **Astro Composer: Convert Wikilinks to Astro** from the command palette. Optionally enable background wikilink processing in Astro Composer settings.

### Wizard detected the wrong content folder

Run **Vault CMS: Open Wizard** again and adjust the install target and content types.

### After manual install, Home base does not work

Copy **both** `.obsidian/` and `_bases/`, and `_GUIDE.md` if you want the in-vault guide. Open the folder with **Open folder as vault**, not single files.

### Community plugins will not load

**Settings → Community plugins → Turn on community plugins**, then enable each needed plugin (Vault CMS, Astro Composer, Git, etc.).

:::tip
Still stuck? [Discord](https://discord.gg/gyrNHAwHK8) · [GitHub Issues](https://github.com/davidvkimball/vaultcms/issues) · [FAQ](/guides/troubleshooting-faq/)
:::
