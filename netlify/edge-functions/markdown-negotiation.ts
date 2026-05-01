/**
 * Honors `Accept: text/markdown` content negotiation by serving the .md
 * variant of the requested page when an agent requests Markdown directly.
 * AFDocs check: "Content Negotiation".
 *
 * Strategy: when a request comes in with `Accept: text/markdown` (and the
 * URL is a docs page, not an asset), rewrite to the same path with .md
 * appended. The .md endpoint at src/pages/[...slug].md.ts produces the
 * markdown response.
 */

import type { Context } from 'https://edge.netlify.com';

const DOCS_PREFIXES = ['/guides/', '/concepts/', '/themes/', '/plugins/'];

export default async (request: Request, context: Context) => {
	const accept = request.headers.get('accept') ?? '';

	// Only intercept when the agent explicitly asks for markdown.
	// We require markdown to outrank or equal HTML in the Accept header.
	const wantsMarkdown =
		accept.includes('text/markdown') &&
		!isHtmlPreferred(accept);
	if (!wantsMarkdown) return;

	const url = new URL(request.url);
	const pathname = url.pathname;

	// Skip assets, the markdown endpoints themselves, and non-docs paths.
	if (pathname.endsWith('.md') || pathname.endsWith('.txt')) return;
	if (pathname.startsWith('/_astro/') || pathname.startsWith('/assets/')) return;
	if (!DOCS_PREFIXES.some((p) => pathname.startsWith(p))) return;

	// Strip trailing slash and append .md.
	const stripped = pathname.replace(/\/$/, '');
	const target = `${stripped}.md${url.search}`;

	// Internal rewrite (200 with the markdown body) rather than redirect —
	// keeps the URL stable for the agent and avoids extra round trips.
	return context.rewrite(target);
};

/**
 * Detect when the Accept header prefers HTML (e.g. browsers send
 * `text/html,application/xhtml+xml,...,text/markdown;q=0.5`). We only
 * serve markdown when the agent asks for it as the primary type.
 */
function isHtmlPreferred(accept: string): boolean {
	const parts = accept
		.split(',')
		.map((part) => {
			const [type, ...params] = part.trim().split(';');
			const qParam = params.find((p) => p.trim().startsWith('q='));
			const q = qParam ? parseFloat(qParam.split('=')[1] ?? '1') : 1;
			return { type: type.trim().toLowerCase(), q };
		})
		.filter((p) => Number.isFinite(p.q));

	const html = parts.find((p) => p.type === 'text/html')?.q ?? 0;
	const md = parts.find((p) => p.type === 'text/markdown')?.q ?? 0;
	return html > md;
}

export const config = {
	path: ['/guides/*', '/concepts/*', '/themes/*', '/plugins/*'],
};
