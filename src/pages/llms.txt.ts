import { getCollection } from 'astro:content';

const SITE_TITLE = 'Vault CMS';
const SITE_SUMMARY =
	'Vault CMS is the open-source headless CMS that turns Obsidian into a publishing platform for Astro websites. Content stays as plain Markdown in your repo.';
const SITE_URL = 'https://docs.vaultcms.org';

const SECTION_LABELS: Record<string, string> = {
	guides: 'Guides',
	concepts: 'Concepts',
	themes: 'Themes',
	plugins: 'Plugins',
};

// Curated section ordering — keep aligned with the sidebar in astro.config.mjs.
const SECTION_ORDER = ['guides', 'concepts', 'themes', 'plugins'];

export async function GET() {
	const docs = await getCollection('docs');

	const grouped = new Map<string, { title: string; description: string; href: string }[]>();
	for (const entry of docs) {
		const [section] = entry.id.split('/');
		if (!section) continue;
		const list = grouped.get(section) ?? [];
		list.push({
			title: entry.data.title,
			description: (entry.data.description ?? '').trim(),
			href: `${SITE_URL}/${entry.id}/`,
		});
		grouped.set(section, list);
	}

	const lines: string[] = [];
	lines.push(`# ${SITE_TITLE}`);
	lines.push('');
	lines.push(`> ${SITE_SUMMARY}`);
	lines.push('');
	lines.push(
		`Every documentation page is also available as raw Markdown by appending \`.md\` to its URL (e.g. ${SITE_URL}/guides/introduction.md). A complete corpus is available at ${SITE_URL}/llms-full.txt.`
	);
	lines.push('');

	const orderedSections = [
		...SECTION_ORDER.filter((s) => grouped.has(s)),
		...[...grouped.keys()].filter((s) => !SECTION_ORDER.includes(s)).sort(),
	];

	for (const section of orderedSections) {
		const label = SECTION_LABELS[section] ?? section.charAt(0).toUpperCase() + section.slice(1);
		lines.push(`## ${label}`);
		lines.push('');
		const items = grouped.get(section)!;
		items.sort((a, b) => a.title.localeCompare(b.title));
		for (const item of items) {
			const desc = item.description ? `: ${item.description}` : '';
			lines.push(`- [${item.title}](${item.href})${desc}`);
		}
		lines.push('');
	}

	return new Response(lines.join('\n'), {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
}
