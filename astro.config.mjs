// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Vault CMS',
			head: [
				{
					tag: 'script',
					content: `
						window.addEventListener('DOMContentLoaded', () => {
							const logoLink = document.querySelector('.header .title-wrapper a');
							if (logoLink) {
								logoLink.href = 'https://vaultcms.org/';
							}
						});
					`,
				},
			],
			/* 
			   Logo is handled via custom.css to prevent the "flashing" 
			   caused by Astro's image processing during navigation.
			*/
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/davidvkimball/vault-cms' }],
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Introduction', slug: 'guides/introduction' },
						{ label: 'Installation', slug: 'guides/installation' },
						{ label: 'Mobile Guide', slug: 'guides/mobile-guide' },
						{ label: 'Theme & UI', slug: 'guides/theme-and-ui' },
						{ label: 'Vault Hotkeys', slug: 'guides/vault-hotkeys' },
					],
				},
				{
					label: 'Plugins',
					items: [
						{ label: 'Alias File Name History', slug: 'plugins/alias-file-name-history' },
						{ label: 'Astro Composer', slug: 'plugins/astro-composer' },
						{ label: 'Bases CMS', slug: 'plugins/bases-cms' },
						{ label: 'BRAT', slug: 'plugins/brat' },
						{ label: 'Disable Tabs', slug: 'plugins/disable-tabs' },
						{ label: 'Editing Toolbar', slug: 'plugins/editing-toolbar' },
						{ label: 'Explorer Focus', slug: 'plugins/explorer-focus' },
						{ label: 'Folder Notes', slug: 'plugins/folder-notes' },
						{ label: 'Git', slug: 'plugins/git' },
						{ label: 'Home Base', slug: 'plugins/home-base' },
						{ label: 'Image Manager', slug: 'plugins/image-manager' },
						{ label: 'Omnisearch', slug: 'plugins/omnisearch' },
						{ label: 'Oxygen Settings', slug: 'plugins/oxygen-settings' },
						{ label: 'Property Over File Name', slug: 'plugins/property-over-file-name' },
						{ label: 'SEO', slug: 'plugins/seo' },
						{ label: 'Settings Search', slug: 'plugins/settings-search' },
						{ label: 'Tag Wrangler', slug: 'plugins/tag-wrangler' },
						{ label: 'UI Tweaker', slug: 'plugins/ui-tweaker' },
						{ label: 'Vault CMS', slug: 'plugins/vault-cms' },
						{ label: 'Zen Mode', slug: 'plugins/zen-mode' },
					],
				},
			],
		}),
	],
});
