---
title: Git
description: Publish from Obsidian with obsidian-git—auth, push, commit messages, and auto-push.
---

Vault CMS bundles the [Git](https://github.com/Vinzent03/obsidian-git) plugin (obsidian-git) so you can commit and push without leaving Obsidian. Pushes trigger your host to rebuild the Astro site. Overview of the publishing chain: [Publishing](/concepts/publishing/).

## Features

- **Status bar** — Git status and changed file count (bottom right).
- **Commit and sync** — Stage, commit, and push in one action (`Ctrl/Cmd + Shift + S` or the status bar **up-arrow**).
- **Automatic backup** — Optional interval-based commits/pushes in plugin settings.

## Prerequisites

- **Git** installed (`git --version`).
- A **remote** (e.g. `origin`) for your Astro repo.
- **Authentication** — SSH key on your host, or HTTPS with a credential helper / personal access token.

## Configure the plugin

1. **Settings → Community plugins → Git** — open the gear icon.
2. **Authentication** — SSH (recommended) with agent and key added on GitHub/GitLab/etc., or HTTPS with username + PAT when prompted (often cached after the first success).
3. **Verify remote** — in a terminal at the project (or vault) root:

```bash
git remote -v
```

If `origin` is missing:

```bash
git remote add origin https://github.com/your-username/your-repo.git
```

:::caution
Pushing without a configured remote fails; fix `git remote` before relying on Obsidian to publish.
:::

## Commit message format

Vault CMS ships with a descriptive auto-commit pattern similar to:

```
Blog update M/D/YYYY h:ma: {{numFiles}} file(s) changed.
```

So history shows when each publish action ran and how many files changed.

## Auto-push on a timer

1. **Settings → Community plugins → Git → Options**
2. Set **Auto push interval** (minutes), e.g. `5`.

Useful for frequent small edits; use manual push when you want explicit control over deploy timing.

**Pull before push** is typically enabled so local branches stay aligned with the remote before a push.

## What gets ignored

Installer adds entries like:

```text
# Vault CMS / Obsidian
.obsidian/workspace.json
.obsidian/workspace-mobile.json
.ref/
```

Workspace JSON is machine-specific (tabs, layout); keep it out of Git to avoid noise and merge conflicts. Plugin **configuration** under `.obsidian` still belongs in the repo per your workflow.

## Deployment

After a successful push, Netlify, Vercel, Cloudflare Pages, etc. build from the repo—no extra Vault CMS step.

**Auto-pull on boot** may be enabled so when Obsidian starts, the vault fetches remote changes (handy when editing from multiple machines).

## Commands

- **Git: Push** / commit-and-sync — `Ctrl/Cmd + Shift + S` or the status bar control.
