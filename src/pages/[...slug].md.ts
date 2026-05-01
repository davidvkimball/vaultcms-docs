import { getCollection, type CollectionEntry } from 'astro:content';

export async function getStaticPaths() {
	const docs = await getCollection('docs');
	return docs.map((entry) => ({
		params: { slug: entry.id },
		props: { entry },
	}));
}

export async function GET({ props }: { props: { entry: CollectionEntry<'docs'> } }) {
	const { entry } = props;
	const fmLines: string[] = ['---'];
	fmLines.push(`title: ${JSON.stringify(entry.data.title)}`);
	if (entry.data.description) {
		fmLines.push(`description: ${JSON.stringify(entry.data.description)}`);
	}
	fmLines.push(`canonical_url: https://docs.vaultcms.org/${entry.id}/`);
	fmLines.push('---');
	fmLines.push('');

	const body = (entry.body ?? '').trim();
	const content = `${fmLines.join('\n')}\n${body}\n`;

	return new Response(content, {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
}
