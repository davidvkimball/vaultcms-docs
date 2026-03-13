// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
	markdown: {
		rehypePlugins: [
			[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
		],
	},
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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/davidvkimball/vaultcms' }],
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
						{ label: 'Launch Checklist', slug: 'guides/launch-checklist' },
					],
				},
				{
					label: 'Plugins',
					items: [
						{ label: 'Astro Composer', slug: 'plugins/astro-composer' },
						{ label: 'Bases CMS', slug: 'plugins/bases-cms' },
						{ label: 'BRAT', slug: 'plugins/brat' },
						{ label: 'Data Files Editor', slug: 'plugins/data-files-editor' },
						{ label: 'Disable Tabs', slug: 'plugins/disable-tabs' },
						{ label: 'Editing Toolbar', slug: 'plugins/editing-toolbar' },
						{ label: 'Explorer Focus', slug: 'plugins/explorer-focus' },
						{ label: 'File Name History', slug: 'plugins/file-name-history' },
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
						{ label: 'Vault CMS (Plugin)', slug: 'plugins/vault-cms' },
						{ label: 'Zen Mode', slug: 'plugins/zen-mode' },
					],
				},
			],
		}),
	],
});
