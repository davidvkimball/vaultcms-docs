---
title: UI Tweaker
description: Hide and adjust UI elements in Obsidian.
---

[UI Tweaker](https://github.com/davidvkimball/obsidian-ui-tweaker) lets you hide and adjust UI elements to your liking. Open it up and customize your interface to remove distractions, rearrange elements, or customize icons.

UI Tweaker provides three visibility states for most elements:

- **Show**: Element is always visible (default).
- **Hide**: Element is always hidden.
- **Reveal**: Element is hidden by default but appears on hover/interaction.

### Features

#### Auto-hide Elements (Show/Hide/Reveal)

- Title bar
- File explorer navigation header
- Other navigation headers (tags, backlinks, outline, bookmarks)
- Left and right tab headers
- Vault switcher
- Help button, settings button

#### Navigation Controls

- Tab bar (with "hide when single tab" option)
- New note, new folder, sort order, auto-reveal, collapse all buttons
- Bookmarked button, reading mode button, search settings button
- Window dragging (enables dragging from top when tab bar is hidden)

#### Ribbon

- Collapse ribbon on hover (simple toggle)

#### Tab Icons (Show/Hide/Reveal)

- Tab list icon, new tab icon, tab close button

#### Status & UI Elements

- Status bar, scroll bars (Show/Hide/Reveal)
- Left/right sidebar toggle buttons (Show/Hide/Reveal)
- Tooltips, instructions

#### Properties

- Properties in Reading view
- Deemphasize properties (softens visual prominence, more visible on hover)
- Properties heading, add property button
- Minimal property icons
- Show property menu actions

#### Search

- Search suggestions, search term counts

#### Mobile

- Hide mobile chevrons icon, title, sync icon
- Hide navigation buttons (back, forward, quick switcher, new tab, open tabs, ribbon menu)
- Swap mobile new tab icon with home button
- Customize mobile navigation menu button positions
- Replace sync button with custom command and icon

#### Custom Command Buttons

- **Explorer Tab**: Add custom command buttons to the file explorer navigation area with custom icons, colors, toggle icons, device filtering, and drag-and-drop reordering.
- **Tab Bar Tab**: Add custom command buttons to page headers with the same customization options.
- **Status Bar Tab**: Unified management of existing and custom status bar items — reorder, hide/show, add custom buttons, and customize colors.

#### Native Explorer Button Controls

- Customize native explorer buttons (new note, new folder, sort order, auto-reveal, collapse all) — show/hide, custom colors, and icon overrides.

#### Advanced

- Vault switcher background transparency control
- Replace help button with custom command and icon
- Toggle icon feature with automatic state synchronization

### Commands

Each feature has a corresponding toggle command that can be bound to hotkeys. Some commonly used ones:

- **Toggle left side panel**: `CTRL + ALT + Z`
- **Toggle right side panel**: `CTRL + ALT + X`
- **Toggle tab bar**: `CTRL + ALT + S`
- **Toggle title bar**
- **Toggle file explorer navigation header**
- **Toggle status bar**
- **Toggle ribbon**

Toggle commands cycle between Show and Hide states. Pressing the hotkey again will reveal the element.

### Settings Tabs

| Tab | Description |
| --- | --- |
| Hider | Visibility controls for all UI elements, navigation, tabs, search, and vault profile |
| Explorer | Custom command buttons and native button controls for the file explorer |
| Tab Bar | Custom command buttons for page headers |
| Status Bar | Unified management of status bar items |
| Properties | Property display and icon settings |
| Mobile | Mobile-specific UI controls and navigation |
