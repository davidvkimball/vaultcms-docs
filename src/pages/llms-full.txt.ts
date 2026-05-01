import { getCollection } from 'astro:content';

const SITE_TITLE = 'Vault CMS';
const SITE_URL = 'https://docs.vaultcms.org';

const SECTION_ORDER = ['guides', 'concepts', 'themes', 'plugins'];

export async function GET() {
	const docs = await getCollection('docs');

	const sorted = [...docs].sort((a, b) => {
		const [sa] = a.id.split('/');
		const [sb] = b.id.split('/');
		const ia = SECTION_ORDER.indexOf(sa ?? '');
		const ib = SECTION_ORDER.indexOf(sb ?? '');
		const oa = ia === -1 ? SECTION_ORDER.length : ia;
		const ob = ib === -1 ? SECTION_ORDER.length : ib;
		if (oa !== ob) return oa - ob;
		return a.id.localeCompare(b.id);
	});

	const parts: string[] = [];
	parts.push(`# ${SITE_TITLE} — full documentation corpus`);
	parts.push('');
	parts.push(
		`Every page below is sourced from ${SITE_URL}. Pages are separated by \`---\` and prefixed with their canonical URL.`
	);
	parts.push('');

	for (const entry of sorted) {
		const url = `${SITE_URL}/${entry.id}/`;
		const title = entry.data.title;
		const description = (entry.data.description ?? '').trim();
		const body = (entry.body ?? '').trim();

		parts.push('---');
		parts.push('');
		parts.push(`# ${title}`);
		parts.push('');
		parts.push(`URL: ${url}`);
		if (description) {
			parts.push(`Description: ${description}`);
		}
		parts.push('');
		if (body) {
			parts.push(body);
			parts.push('');
		}
	}

	return new Response(parts.join('\n'), {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
}
