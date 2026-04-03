---
title: FAQ
description: Common questions about Vault CMS, Obsidian, and the Astro workflow.
---

### Does Vault CMS work with any Astro theme?

Yes. Vault CMS is headless: it manages Markdown in your content folder and does not change theme templates. For **Starlight**, **Chiri**, **Slate**, and others, use a [preset](/guides/presets/) when the installer asks, or pass `--template`.

### Do I need Obsidian?

Yes. Vault CMS is a preconfigured Obsidian vault plus plugins. Download Obsidian at [obsidian.md](https://obsidian.md).

### Is Vault CMS free?

Yes. Vault CMS is open source (MIT). Some bundled plugins from the same author offer optional [Patreon](https://patreon.com/davidvkimball) support.

### Where is my content stored?

As `.md` files in your Astro content directory (often `src/content/`). No Vault CMS database—files on disk and in Git.

### Can I use Vault CMS on multiple machines?

Yes. Clone the repo, run the installer on each machine if needed, and open the same vault path in Obsidian.

### How do I update Vault CMS?

From your project directory:

```bash
npx create-vaultcms
```

This refreshes `.obsidian` and `_bases`. Your Markdown content in collections is not removed by that process—still use Git and backups as usual.

### Does Vault CMS support MDX?

The workflow targets `.md`. Astro Composer can expose `.mdx` in the explorer via settings; you can still author MDX manually if your theme uses it.

### What is `_bases`?

It contains `Home.base`, which powers the CMS-style home grid. Do not delete `_bases` if you want that view.

### Can I use Vault CMS without Git?

You can edit locally without Git, but one-click publish from Obsidian expects a remote. Without Git, copy or deploy files by another path.

### How do I reopen the setup wizard?

`Ctrl/Cmd + P` → **Vault CMS: Open Wizard**.

### Where can I get help?

- [Discord](https://discord.gg/gyrNHAwHK8)  
- [GitHub Issues](https://github.com/davidvkimball/vaultcms/issues)  
- [Common issues](/guides/troubleshooting-common-issues/)
