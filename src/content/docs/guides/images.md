---
title: Images in content
description: Insert and manage images with Image Manager and frontmatter.
---

[Image Manager](/plugins/image-manager/) speeds up inserting images and managing attachments without leaving Obsidian.

## Insert an image in the body

`Ctrl/Cmd + '` opens the search modal: filter local attachments and press **Enter** to insert at the cursor.

## Remote image in frontmatter

`Ctrl/Cmd + Shift + '` prompts for a URL and can write it to the `image` property (useful for Unsplash or other hosts).

## Attachments folder

Local images often live under `./attachments` in the vault. Pasting or dragging into a note may place files there.

:::note
If Vault CMS is installed at the project root instead of `src/content`, paths may point at `src/content/attachments` so assets stay inside content collections. Confirm your layout after install.
:::

## Frontmatter fields

| Field | Purpose |
|-------|---------|
| `image` | Cover or hero image URL or path |
| `imageAlt` | Alt text |
| `imageOG` | `true` to use this image for Open Graph |
| `hideCoverImage` | `true` to hide cover on the page |

Example:

```yaml
image: "https://images.unsplash.com/photo-example"
imageAlt: "A laptop on a desk with code on the screen"
imageOG: true
hideCoverImage: false
```

## Unsplash

Image Manager can be configured with Unsplash as a provider: search from the modal (`Ctrl/Cmd + '`) or paste URLs with `Ctrl/Cmd + Shift + '`.

:::tip
Absolute `https://` URLs behave consistently across local dev and production. Use `./attachments/...` for files in the vault.
:::

## Practices

- **Alt text** — Describe the image for accessibility and SEO.  
- **OG images** — Set `imageOG: true` when you want a specific social preview; themes may fall back to a default otherwise.  

Plugin reference: [Image Manager](/plugins/image-manager/).
