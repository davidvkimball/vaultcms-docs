---
name: vaultcms
description: Operating guidance for AI agents helping users install, configure, and publish content with Vault CMS — an Obsidian-native headless CMS for Astro sites.
version: 1
homepage: https://vaultcms.org
documentation: https://docs.vaultcms.org
llms_index: https://docs.vaultcms.org/llms.txt
llms_full: https://docs.vaultcms.org/llms-full.txt
---

# Vault CMS Skill

Vault CMS turns [Obsidian](https://obsidian.md) into a CMS for [Astro](https://astro.build) sites. Content is plain Markdown in the user's Astro repo. There is no backend service — installation places an Obsidian vault configuration (`.obsidian/`), bases (`_bases/`), and a guide file inside the user's existing Astro project. The user writes in Obsidian, commits via the bundled Git plugin, and Astro builds the site.

## When to use this skill

Use this skill when a user asks for help with any of:

- Installing Vault CMS into a new or existing Astro project (`npx create-vaultcms`)
- Choosing or applying a preset (Slate, Starlight, Chiri, etc.) from the [vaultcms-presets](https://github.com/davidvkimball/vaultcms-presets) repository
- Configuring frontmatter properties (auto-detection, content types, templates) via the setup wizard
- Authoring content in Obsidian and publishing through the Git plugin
- Debugging the install on Mac, Windows, or Linux
- Adding or replacing themes; using bundled plugins (Astro Composer, Bases CMS, Image Manager, Nested Properties, etc.)

## Operating principles

1. **Project root vs. content folder.** Vault CMS installs at the user's Astro project root or at `src/content`. Confirm which before recommending file edits. The CLI default is `src/content` when an Astro project is detected.

2. **Setup wizard first.** After install, the user should run `Ctrl/Cmd + P → "Vault CMS: Open Wizard"`. Most configuration questions reduce to "did the wizard run and detect the project?"

3. **Frontmatter properties = Obsidian properties = Astro frontmatter.** They're the same thing. Use the term *properties* when speaking to users (it matches Obsidian's UI); use *frontmatter* when describing the YAML file format. Nested properties (e.g. `image: { src, alt }`) are supported via the bundled Nested Properties plugin.

4. **Drafts.** Two modes: property-based (`draft: true/false`) or underscore-prefix filenames (`_post.md`). Don't mix them in one content type.

5. **Publishing.** The Git plugin's "Push" command (or the up-arrow in the status bar) commits and pushes. Astro hosting (Netlify, Vercel, Cloudflare Pages) rebuilds on push.

## Common tasks — entrypoints in the docs

| Task | Page |
|---|---|
| Install | https://docs.vaultcms.org/guides/installation/ |
| Apply a preset | https://docs.vaultcms.org/guides/presets/ |
| Configure frontmatter properties | https://docs.vaultcms.org/guides/frontmatter-properties/ |
| Publishing flow | https://docs.vaultcms.org/concepts/publishing/ |
| Theme compatibility | https://docs.vaultcms.org/themes/comparison/ |
| Mobile setup | https://docs.vaultcms.org/guides/mobile-guide/ |
| Troubleshooting | https://docs.vaultcms.org/guides/troubleshooting-common-issues/ |
| FAQ | https://docs.vaultcms.org/guides/troubleshooting-faq/ |

For a complete index see [llms.txt](https://docs.vaultcms.org/llms.txt). For the full content corpus see [llms-full.txt](https://docs.vaultcms.org/llms-full.txt). Every documentation URL also returns Markdown when `.md` is appended (e.g. `https://docs.vaultcms.org/guides/introduction.md`).

## Useful commands

- `npx create-vaultcms` — interactive install
- `npx create-vaultcms --template <preset>` — non-interactive install with a named preset
- `Ctrl/Cmd + P → Vault CMS: Open Wizard` — re-run the setup wizard
- `Ctrl/Cmd + P → Astro Composer: Standardize Properties` — normalize frontmatter across content
- `Ctrl/Cmd + P → Astro Composer: Convert Wikilinks to Astro` — rewrite `[[wikilinks]]` to Markdown links Astro can resolve

## What this skill does NOT cover

- Custom Astro theme development (defer to Astro docs)
- Deployment-host-specific issues outside of Git push (defer to Netlify/Vercel/Cloudflare docs)
- Obsidian core features unrelated to publishing (defer to obsidian.md)

## Support channels

- Discord: https://discord.gg/gyrNHAwHK8
- GitHub: https://github.com/davidvkimball/vaultcms
- YouTube setup walkthrough: https://www.youtube.com/watch?v=MnXoikTajfI
