---
title: Home Base
description: Set your default screen to a directory of all your content.
---

[Home Base](https://github.com/davidvkimball/obsidian-home-base) works together with [Bases CMS](/plugins/bases-cms/) so your default screen is a `.base` file that's a directory of all of your content, listed in reverse-chronological order.

### Home Base Types

| Type | Description |
| --- | --- |
| File | Open a specific file (`.md`, `.mdx`, `.canvas`, `.base`, `.kanban`) |
| Workspace | Load a specific workspace layout |
| Random file | Open a random file from your vault |
| Random in folder | Pick a random file from a specific folder |
| Graph view | Open the graph view |
| Daily note | Open today's daily note |
| Weekly note | Open this week's note |
| Monthly note | Open this month's note |
| Quarterly note | Open this quarter's note |
| Yearly note | Open this year's note |
| Journal | Open today's journal entry (requires Journals plugin) |
| Nothing | Default new tab |

### Features

- **Home icon** pinned to your tab bar for quick access. Customizable icon, with option to hide the home tab header when using the sticky icon.
- **Default screen** opens automatically when you launch Obsidian.
- **Configurable view modes**: Choose how files open (Default, Reading view, Source mode, or Live Preview).
- **Opening modes**: Replace all open notes, replace last note, or keep open notes. Separate opening mode for manual activation vs. startup.
- **New tab replacement**: Replace new empty tabs with your home base or a different file entirely. Options for "only when no other tabs are open" or "always replace."
- **Command on open**: Automatically run any Obsidian command when opening the home base.
- **Auto-scroll**: Automatically scroll to the bottom when opening.
- **Revert view**: Restore default view when navigating away from home base.
- **Git sync wait**: Optionally wait for Git sync to complete before opening (configurable timeout).
- **Mobile support**: Separate home page, new tab behavior, and home button configuration for mobile devices.

### Commands

- **Home Base: Open**: Open the home base.
- **Home Base: Set current file as home**: Set the currently active file as your home base.
- **Home Base: Toggle sticky home icon**: Show or hide the sticky home icon in the tab bar.
- **Home Base: Close**: Close the home base tab.
