// Check that every internal link in dist/llms-full.txt resolves to a built page.
// Run from repo root: node scripts/check-links.mjs
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const corpus = readFileSync(join(DIST, 'llms-full.txt'), 'utf8');

// Extract every markdown link target that starts with /
const links = new Set();
for (const m of corpus.matchAll(/\]\((\/[^) \n]+)\)/g)) {
	links.add(m[1]);
}

const broken = [];
for (const link of links) {
	// Strip query/hash, drop trailing slash for filesystem check
	const clean = link.split('#')[0].split('?')[0];
	const rel = clean.replace(/^\//, '').replace(/\/$/, '');
	const candidates = [
		join(DIST, rel, 'index.html'),
		join(DIST, rel + '.html'),
		join(DIST, rel),                      // for /llms.txt, /llms-full.txt
	];
	if (!candidates.some((c) => existsSync(c))) {
		broken.push(link);
	}
}

console.log(`Total internal links: ${links.size}`);
console.log(`Broken: ${broken.length}`);
for (const link of broken) console.log(`  - ${link}`);
