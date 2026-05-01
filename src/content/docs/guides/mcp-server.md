---
title: MCP server (AI agents)
description: Install and configure Vault CMS from inside Claude Code, Cursor, Claude Desktop, and other AI agents that speak the Model Context Protocol.
---

Vault CMS ships with a [Model Context Protocol](https://modelcontextprotocol.io) server bundled inside the same `create-vaultcms` npm package. Once registered, AI tools like Claude Code, Cursor, Claude Desktop, and Codex can install and configure Vault CMS for you through structured tool calls — no need to switch to a terminal or answer interactive prompts.

## Why this matters

Without MCP, asking an AI for help with Vault CMS gets you a tutorial. The AI tells you to `cd` to your project, run `npx create-vaultcms`, pick options, and so on. **You** do the work.

With MCP registered, the same conversation goes:

> *"Set up Vault CMS in my Astro project at `~/code/my-blog` using the Starlight preset."*

The agent inspects the project, confirms it's Astro, picks the right install location, runs the install, and reports what changed — all in one turn.

## Quick start

The server speaks `stdio`. AI clients spawn it as a subprocess. You only need to register it once per tool.

### Claude Code

Run the registration command (one line):

```sh
claude mcp add vaultcms --scope user -- npx -y -p create-vaultcms@latest vaultcms-mcp
```

That writes the server entry to your user-level Claude config. Restart Claude Code and the three tools become available.

To allow the tools without permission prompts, open `~/.claude/settings.json` and add `"mcp__vaultcms__*"` to the `permissions.allow` array.

### Cursor

Open **Settings → Cursor Settings → MCP → Add new MCP server**:

- **Name**: `vaultcms`
- **Type**: `command`
- **Command**: `npx -y -p create-vaultcms@latest vaultcms-mcp`

### Claude Desktop

Edit `claude_desktop_config.json` (location varies by OS — see [the Claude Desktop docs](https://modelcontextprotocol.io/quickstart/user)):

```json
{
  "mcpServers": {
    "vaultcms": {
      "command": "npx",
      "args": ["-y", "-p", "create-vaultcms@latest", "vaultcms-mcp"]
    }
  }
}
```

Restart Claude Desktop. The vaultcms tools appear in the tool picker.

### Other MCP-compatible clients

Anything that runs an MCP stdio server can use it. The launch command is always:

```sh
npx -y -p create-vaultcms@latest vaultcms-mcp
```

## What the agent can do

The server exposes three tools.

### `detect_project` (read-only)

Inspects a directory and returns a structured snapshot:

- Whether it's an Astro project
- The resolved project root (walks up looking for `package.json`, `astro.config.*`, or `.git`)
- Detected package manager (pnpm, yarn, bun, npm)
- Content collections under `src/content/` (filtered to exclude Vault CMS install artifacts)
- Dynamic Astro routes (`[...slug].astro`) mapped to their content collections
- Whether Vault CMS is already installed
- Whether any Obsidian vault is present (even without the vault-cms plugin — protects older Obsidian-authored sites from being overwritten)

The agent uses this to confirm the project state before doing anything.

### `list_presets` (read-only)

Returns the available preset templates from the registry, with metadata pulled from the [vaultcms-presets manifest](https://github.com/davidvkimball/vaultcms-presets/blob/master/manifest.json):

- Name (e.g. `starlight`)
- Display name and description
- Default install target (typically `src/content`)
- Theme association

Defaults to the official `davidvkimball/vaultcms-presets` registry. See [Custom preset registries](#custom-preset-registries) below for using a fork.

### `install_vaultcms` (mutating)

Runs the full install programmatically — equivalent to `npx create-vaultcms` minus the interactive prompts:

- Downloads the vault config (and optionally a preset zip)
- Copies `_bases/` and `.obsidian/` into the target directory
- Fixes paths in `.obsidian/plugins/vault-cms/data.json` so they're vault-relative
- Adjusts `Home.base` formulas, `app.json`, and Explorer Focus config based on whether you installed at project root vs. `src/content`
- Updates `.gitignore` with the standard Vault CMS entries

Returns a structured result with `modifiedPaths`, `gitignore` action, and the captured installer log.

The tool **refuses by default** if it detects an existing Obsidian vault without the vault-cms plugin — prevents an agent from silently clobbering an older Obsidian-authored setup. Pass `force: true` to override after the user explicitly confirms.

### What the server intentionally doesn't do

- **No GUI launches.** The interactive CLI offers to open Obsidian after install; the MCP server returns a hint string instead. Reason: agents shouldn't trigger windows the user didn't ask for.
- **No automatic Git commits.** The Git plugin runs locally inside Obsidian; the MCP doesn't drive it.
- **No interactive prompts.** Everything is structured args in, structured data out. The agent does the asking.

## Custom preset registries

Both `list_presets` and `install_vaultcms` default to `davidvkimball/vaultcms-presets`, but you can point them at a fork or a private team registry. Three converging override paths (priority order):

1. **Per-call argument** — agent can pass `source` to `list_presets` or `presets_repo` to `install_vaultcms`
2. **CLI flag** — `npx create-vaultcms --presets-repo owner/repo`
3. **Environment variable** — `VAULTCMS_PRESETS_REPO=owner/repo`

Format is `owner/repo` or `owner/repo@branch`. Branch defaults to `master`. Examples:

```sh
# CLI
npx create-vaultcms --presets-repo acme/vaultcms-presets

# Env var (zero-config — once set, all flows pick it up)
export VAULTCMS_PRESETS_REPO=acme/vaultcms-presets
npx create-vaultcms
```

```jsonc
// MCP arg
{
  "tool": "install_vaultcms",
  "arguments": {
    "target_path": "src/content",
    "template": "myth",
    "presets_repo": "acme/vaultcms-presets@dev"
  }
}
```

:::caution
A custom registry runs code on your machine — `install_vaultcms` downloads a zip and extracts it into your project. Only use registries you trust.
:::

## A typical agent flow

What a good prompt → agent → install loop looks like:

1. **You**: *"Set up Vault CMS in my Astro project at `~/sites/blog` using Slate."*
2. **Agent calls** `detect_project({ path: "~/sites/blog" })` → confirms Astro, pnpm, no Vault CMS yet, no pre-existing Obsidian setup
3. **Agent calls** `list_presets()` → confirms `slate` exists, sees it installs at `src/content`
4. **Agent confirms with you**: *"This is an Astro project using pnpm. I'll install Vault CMS with the Slate preset at `~/sites/blog/src/content`. Proceed?"*
5. **You**: *"Yes."*
6. **Agent calls** `install_vaultcms({ target_path: "~/sites/blog/src/content", template: "slate" })` → returns success with modified paths
7. **Agent tells you**: *"Done. Open Obsidian → 'Open folder as vault' → select `~/sites/blog/src/content`. Then run **Vault CMS: Open Wizard** to finish setup."*

You typed two short messages. The agent handled the rest.

## Safety guards

- **`install_vaultcms` is mutating** — confirm with the user before invoking. The tool description marks it as such, so well-behaved agents will ask first.
- **Existing Obsidian vault protection** — install refuses by default if any `.obsidian/` directory exists in the project root, `src/content/`, or any first-level content collection without the vault-cms plugin. This catches older Obsidian-authored sites that predate the plugin and prevents silent overwrites of workspace, hotkeys, themes, and plugin lists.
- **Custom registries warn the user** — both tool descriptions and the docs explicitly note that custom `presets_repo` values download and execute code from third-party repos.

## Verifying it works

A quick sanity check from your shell:

```sh
# Should boot, log to stderr, and respond on stdin
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"manual","version":"0"}}}' \
  | npx -y -p create-vaultcms@latest vaultcms-mcp
```

You should see `vaultcms-mcp <version> ready (stdio)` on stderr and a JSON-RPC response on stdout.

Inside the AI tool itself, ask: *"Use the vaultcms MCP to detect the project at the current directory."* You should get back a structured JSON snapshot.

## Source and reporting issues

- **npm package**: [`create-vaultcms`](https://www.npmjs.com/package/create-vaultcms)
- **Source**: [github.com/davidvkimball/vaultcms](https://github.com/davidvkimball/vaultcms) — `src/mcp.js` and `src/lib/`
- **Bundled spec**: [`MCP.md`](https://github.com/davidvkimball/vaultcms/blob/master/MCP.md) inside the package
- **Issues**: [GitHub Issues](https://github.com/davidvkimball/vaultcms/issues)
