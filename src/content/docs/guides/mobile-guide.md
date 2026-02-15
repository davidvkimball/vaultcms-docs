---
title: Mobile Guide
description: Using Vault CMS on mobile devices.
---

## Disabling the Git Plugin

It's recommended to disable the [Git](/plugins/git/) plugin on mobile and use something like [Git Sync](https://github.com/ViscousPot/GitSync) for iOS and Android (or [MGit](https://github.com/maks/MGit) just for Android) instead. The [Git](/plugins/git/) plugin is notoriously buggy on mobile so it's better to use something else. 

### How to disable it: 

1. On your mobile device, open Obsidian, and open your Astro project's `src/content` folder as a vault. 
2. Open the left sidebar and open Settings. 
3. Scroll down to community plugins and tap on [Git](/plugins/git/) from the list.
4. Scroll all the way down and select "Disable on this device".
5. Restart Obsidian. 

This method is recommended rather than merely disabling the plugin, since if you sync with your desktop it will also get disabled there, too. This way it's disabled per-device.

## Limitations

Aspects of the [UI Tweaker](/plugins/ui-tweaker/) plugin and some [Image Manager](/plugins/image-manager/) features are disabled on mobile. 

## Customization 

To tweak the mobile-specific experience on the mobile version of Obsidian, you can use the [UI Tweaker](/plugins/ui-tweaker/) plugin's settings and also visit **Toolbar** and **Appearance** in settings.

### Toolbar

Under the **Toolbar** settings, you can set the mobile quick action which is triggered by pulling down from the top of the screen by tapping the "Configure" option. Below that you can adjust what options are available to you on the mobile toolbar.

### Appearance 

Under the **Appearance** settings, locate **Interface** and the **Ribbon menu configuration** option's **Manage** button. You can set your preferred quick access item from the list, and customize which items appear on the ribbon menu. 

## Conclusion

Assuming you have git working on your phone in another capacity, you now have seamless content sync between your desktop, laptop, tablet, and mobile devices.
