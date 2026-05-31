---
title: BRAT
description: Load beta plugins from GitHub repositories.
---

[BRAT](https://github.com/TfTHacker/obsidian42-brat) (Beta Reviewer's Auto-update Tool) installs and manages beta versions of Obsidian plugins and themes directly from GitHub repositories.

Vault CMS uses BRAT for the two plugins that are not in the official Obsidian community directory: the [Vault CMS plugin](/plugins/vault-cms/) itself (still in beta), and the [Data Files Editor](/plugins/data-files-editor/) fork. Every other companion plugin has migrated to the official directory and installs through the standard Community Plugins browser.

### Features

- **Install beta plugins** by providing a GitHub repository path.
- **Auto-update** beta plugins and themes at startup.
- **Version freezing** to pin a plugin to a specific release.
- **GitHub token support** for private repositories and higher API rate limits.

### Commands

- **Add a beta plugin for testing**: Install a plugin from a GitHub repository.
- **Check for updates to all beta plugins and update**: Update all tracked plugins.
- **Choose a single plugin version to update**: Update one specific plugin.
- **Restart a plugin**: Reload a plugin without toggling it off and on.
- **Enable/disable a plugin**: Quick toggle for any installed plugin.
- **Open GitHub repository for a plugin**: Open the repo in your browser.
